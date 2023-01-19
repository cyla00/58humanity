// deno run --allow-net --allow-env --allow-read ./src/database/seed.ts FOR DATABASE SEED
// deno run --allow-net --allow-read --allow-write --allow-sys --watch ./src/server.ts TO RUN SERVER
// deno compile --allow-net --allow-read --allow-write --allow-sys --output ./58humanity ./src/server.ts COMPILE TO EXECUTABLE
// deno compile --allow-net --allow-read --allow-write --allow-sys --output ./58humanity_linux --target x86_64-unknown-linux-gnu ./src/server.ts COMPILE TO EXECUTABLE LINUX
import { Application, config, oakCors, Status, send, Router } from './deps.ts'
import os from "https://deno.land/x/dos@v0.11.0/mod.ts"
import { emailSender } from './EmailSender.ts'
import { jwtMiddleware } from './auth/jwt.ts'
import { vuejsRouter } from './vuejsRouter.ts'
import staticFiles from "https://deno.land/x/static_files@1.1.6/mod.ts"
import { adminCheck } from './admin/adminCheck.ts';
import { createAction } from './actions/createAction.ts'
import { deleteAction } from './actions/deleteAction.ts'
import { login } from './admin/login.ts'
import { listActions } from './actions/listActions.ts'

adminCheck()
const app = new Application()

app.use(oakCors())
app.use(login.routes(), login.allowedMethods())
app.use(emailSender.routes(), emailSender.allowedMethods())
app.use(listActions.routes(), listActions.allowedMethods())

app.use(jwtMiddleware)
app.use(createAction.routes(), createAction.allowedMethods())
app.use(deleteAction.routes(), deleteAction.allowedMethods())

if(config().STATUS === 'production'){
    app.use(vuejsRouter.routes(), vuejsRouter.allowedMethods())
    app.use(staticFiles("/dist"))
}

console.log(`http://${os.hostname()}:${config().SERVER_PORT}`)
await app.listen({port: Number(config().SERVER_PORT)})