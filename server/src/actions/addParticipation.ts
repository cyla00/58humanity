// takes body (action_id, email)

import { Router, Status, decode } from '../deps.ts'
import db from '../database/connection.ts'
import { ActionSchema } from '../database/interfaces.ts'
import { emailValidator } from '../emailValidator.ts'


export const addParticipation = new Router()
addParticipation.put('/api/add-member', async (ctx) => {

    const actions = db.collection<ActionSchema>("actions")
    const new_id:string = crypto.randomUUID()
    const body:any = await ctx.request.body()
    const bodyVal = await body.value

    const actionCheck = await actions.findOne({id: bodyVal.action_id})
    const emailCheck = await actions.findOne({id: bodyVal.action_id, participants: bodyVal.email})

    if(!emailValidator(bodyVal.email)){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            ErrMsg: 'Email non valide'
        }
    }
    if(!actionCheck){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            ErrMsg: 'Erreur'
        }
    }
    if(emailCheck){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            ErrMsg: 'Vous participez déjà à cette action'
        }
    }

    await actions.updateOne({id: bodyVal.action_id}, {$push: {participants: bodyVal.email}}).then((res) => {
        ctx.response.status = Status.OK
        return ctx.response.body = {
            SuccMsg: 'Participation ajoutée avec succès'
        }
    }).catch((_e) => {
        ctx.response.status = Status.InternalServerError
        return ctx.response.body = {
            ErrMsg: 'Erreur'
        }
    })
})