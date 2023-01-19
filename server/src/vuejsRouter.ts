import { Router, Status, send } from './deps.ts'

export const vuejsRouter = new Router()

vuejsRouter.get(`/(.*)`, async (ctx:any, next:any) => {
    const path = ctx.request.url.pathname
    await send(ctx, 'index.html', {
        root: `dist/`,
    })
    return next()
})
