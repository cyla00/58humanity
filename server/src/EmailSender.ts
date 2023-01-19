// sends email to admin
// takes body params (nom, prenom, email, object, message)

import { Router, Status, SMTPClient, config } from './deps.ts'
import { emailValidator } from './emailValidator.ts'


export const emailSender = new Router()
emailSender.post('/api/contact', async (ctx) => {

    const body:any = await ctx.request.body({ type: 'json'})
    const bodyVal = await body.value

    if(bodyVal.nom === '' || bodyVal.prenom === '' || bodyVal.email === '' || bodyVal.object === '' || bodyVal.message === ''){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            ErrMsg: 'Veuillez remplir tous les champs (*)'
        }
    }

    if(!emailValidator(bodyVal.email)){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            ErrMsg: 'Veuillez utiliser un e-mail valide'
        }
    }

    try{
        const client = new SMTPClient({
            connection: {
              hostname: "smtp.mail.ru",
              port: 465,
              tls: true,
              auth: {
                username: config().EMAIL,
                password: config().PWD,
              },
            },
        })
          
          await client.send({
            from: config().EMAIL,
            to: config().ADMIN_USER,
            subject: `${bodyVal.object}`,
            content: "58 Humanity contact",
            html: `
            <p><span>Nom:</span> ${bodyVal.nom}</p>
            <p><span>Prenom:</span> ${bodyVal.prenom}</p>
            <p><span>Email:</span> ${bodyVal.email}</p>
            <p><span>Message:</span> ${bodyVal.message}</p>
            `
          })
          
          await client.close()

          ctx.response.status = Status.OK
          return ctx.response.body = {
            SuccMsg: 'Message envoyé...'
          }
    }catch(_e){
        console.log(_e)
        ctx.response.status = Status.InternalServerError
        return ctx.response.body = {
            ErrMsg: `Le message n'a pas été envoyé correctement, réessayez plus tard`
        }
    }
    

})