import { Router, Status, decode } from '../deps.ts'
import db from '../database/connection.ts'
import { ActionSchema } from '../database/interfaces.ts'

export const listActions = new Router()
listActions.post('/api/list-actions', async (ctx) => {
    const actions = db.collection<ActionSchema>("actions")
    
    const list:any = [] 
    await actions.find({}).forEach((res) => { list.push(res) })
    try{
        ctx.response.status = Status.OK
        return ctx.response.body = {
            actions: list
        }
    }catch(_e){
        ctx.response.status = Status.InternalServerError
        return ctx.response.body = {
            ErrMsg: 'Erreur'
        }
    }
})