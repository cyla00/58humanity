// route to check jwt validity

import { Router, Status } from '../deps.ts'

export const jwtCheck = new Router()
jwtCheck.post('/api/jwt-check', (ctx) => {
    return ctx.response.status = Status.OK
})