import { config, sha256 } from '../deps.ts'
import db from '../database/connection.ts'
import { AdminSchema } from '../database/interfaces.ts'

export const adminCheck = async () => {
    try{
        if(!config().ADMIN_USER || !config().ADMIN_PWD || config().ADMIN_USER === '' || config().ADMIN_PWD === '') {
            console.log(`admin USR or PWD not set`)
            return
        }
       
        const users = db.collection<AdminSchema>("admin")
        const adminCheck = await users.findOne()
        
        if(adminCheck === undefined) {
            const date = new Date()

            const hashedPwd = sha256(config().ADMIN_PWD, "utf8", "base64").toString()
            
                
            await users.insertOne({
                id: crypto.randomUUID(),
                email: config().ADMIN_USER,
                password: hashedPwd,
            })
            console.log(`admin ${config().ADMIN_USER} created`)
            return
        }
        else{
            console.log("admin exists")
            return
        }
    }catch(_e){
        console.log(_e)
        return
    }
}