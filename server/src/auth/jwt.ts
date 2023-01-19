import { verify, Status } from "../deps.ts"
import { key } from "./key.ts"

export const jwtMiddleware = async (ctx:any, next:any) => {
    const token = ctx.request.headers.get("Authorization")
    if(!token) return ctx.response.status = Status.Unauthorized

    const cleanedToken = token.split(' ')[1]
    
    try{
        await verify(cleanedToken, key)
        await next()
    }catch(_e){ 
        return ctx.response.status = Status.Unauthorized
    }
}