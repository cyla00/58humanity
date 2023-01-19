// change to local connection 
// 1 change .env host 
// 2 change server mongodb.conf net to 0.0.0.0 to 127.0.0.1 => then restart mongo service
// 3 close port 27017 on server

import { MongoClient } from 'https://deno.land/x/mongo@v0.31.1/mod.ts'
import { config } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts'
import db_json from './db_config.json' assert { type: "json" }

const client = new MongoClient()

const url = `mongodb://${config().DB_USER}:${config().DB_PASS}@${config().DB_HOST}:${config().DB_PORT}/?authSource=${config().DB_NAME}`

export const db_build = async() => {
    try{
        await client.connect(url)
        console.log('db connected')
        const db = client.database(config().DB_NAME)

        for(const docs of db_json.collections){
            await db.listCollectionNames().then(async (doc:string[]) => {
                if(doc.includes(docs)) return
                await db.createCollection(docs)
                console.log(`created collection << ${docs} >>`)
            })
        }
        console.log('all documents ok')
        Deno.exit()
    }
    catch(err){
        console.error(err)
        Deno.exit()
    }
}

db_build()