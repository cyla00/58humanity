// gets basic auth data from headers
// uses sha256 + base64 to hash and encode password and match against db

// error 400 if email or password do not match
// error 400 if headers empty

import { Router, Status, create, getNumericDate, Base64, sha256 } from '../deps.ts'
import { key } from '../auth/key.ts'
import db from '../database/connection.ts'
import { AdminSchema } from "../database/interfaces.ts"

export const login = new Router()
login.post('/api/login', async (ctx) => {
    try{
        const headersInput = ctx.request.headers.get('Authorization')
        const auth = headersInput?.split(' ')[1]
        const [email, password] = Base64.fromBase64String(String(auth)).toString().split(':')

        const hashedPwd = sha256(password, "utf8", "base64").toString()


        const users = db.collection<AdminSchema>("admin")
        const userCheck:any = await users.findOne({email: email, password: hashedPwd})
        const date = new Date()
        
        if(userCheck === undefined) {
            ctx.response.status = Status.Unauthorized
            return ctx.response.body = {
                ErrMsg: `Données incorrectes`
            }
        }

        const token = await create({ alg: "HS512", typ: "JWT" }, { 
            id: userCheck.id,
            email: userCheck.email,
            exp: getNumericDate(60*60*6),
        }, key)

        ctx.response.status = Status.OK
        return ctx.response.body = {
            SuccMsg: 'connecté avec succès',
            token: token
        }
    }catch(_e){
        ctx.response.status = Status.InternalServerError
        return ctx.response.body = {
            ErrMsg: `Erreur`
        }
    }
})