// takes body (email)

import { Router, Status, decode } from '../deps.ts'
import db from '../database/connection.ts'
import { ActionSchema } from '../database/interfaces.ts'


export const addParticipation = new Router()
addParticipation.post('/api/add-member', async (ctx) => {

    const actions = db.collection<ActionSchema>("actions")
    const new_id:string = crypto.randomUUID()
    const body:any = await ctx.request.body()
    const bodyVal = await body.value

    
})