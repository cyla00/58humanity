import { decode } from '../deps.ts'

export const jwtDecode = (token:any) => {
    const refinedToken:string = token.split(' ')[1]
    const [header, payload, signature]:Array<any> = decode(refinedToken)
    return payload
}   