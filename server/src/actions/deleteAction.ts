// takes body "action_id"

import { Router, Status, decode } from '../deps.ts'
import db from '../database/connection.ts'
import { ActionSchema } from '../database/interfaces.ts'

export const deleteAction = new Router()
deleteAction.delete('/api/delete', async (ctx) => {
    const actions = db.collection<ActionSchema>("actions")
    const body:any = await ctx.request.body()
    const bodyVal = await body.value

    const actionCheck = await actions.findOne({id: bodyVal.action_id})
    if(!actionCheck){
        ctx.response.status = Status.BadRequest
        return ctx.response.body = {
            ErrMsg: 'Erreur'
        }
    }

    await actions.deleteOne({id: bodyVal.action_id}).then((res) => {
        ctx.response.status = Status.OK
        return ctx.response.body = {
            SuccMsg: 'Action supprimé avec succès'
        }
    }).catch((_e) => {
        ctx.response.status = Status.InternalServerError
        return ctx.response.body = {
            ErrMsg: 'Erreur'
        }
    })
})