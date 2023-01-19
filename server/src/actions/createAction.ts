import { Router, Status, decode } from '../deps.ts'
import db from '../database/connection.ts'
import { ActionSchema } from '../database/interfaces.ts'


export const createAction = new Router()
createAction.post('/api/create', async (ctx) => {

    const token = ctx.request.headers.get("Authorization")
    if(!token) return ctx.response.status = Status.Unauthorized
    const cleanedToken = token.split(' ')[1]

    const [header, payload, signature]:Array<any> = decode(cleanedToken)

    if(payload.role !== 'admin') return ctx.response.status = Status.Unauthorized
    const users = db.collection<ActionSchema>("actions")
    
})