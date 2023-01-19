// takes body (title, description, description, address, date, time)

import { Router, Status, decode } from '../deps.ts'
import db from '../database/connection.ts'
import { ActionSchema } from '../database/interfaces.ts'


export const createAction = new Router()
createAction.post('/api/create', async (ctx) => {

    const actions = db.collection<ActionSchema>("actions")
    const new_id:string = crypto.randomUUID()
    const body:any = await ctx.request.body()
    const bodyVal = await body.value

    await actions.insertOne({
        id: new_id,
        title: bodyVal.title,
        description: bodyVal.description,
        participants: [],
        places: bodyVal.description,
        address: bodyVal.address,
        date: bodyVal.date,
        time: bodyVal.time
    }).then((res) => {
        ctx.response.status = Status.OK
        return ctx.response.body = {
            SuccMsg: 'Action ajoutée avec succès'
        }
    }).catch((_e) => {
        ctx.response.status = Status.InternalServerError
        return ctx.response.body = {
            ErrMsg: 'Erreur'
        }
    })
})