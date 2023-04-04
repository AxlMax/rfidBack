
const auto = require("../utils/auto/websocketMongo");

const Websocket = (wss, colors) => {

    wss.on('connection', (ws) => {

        if(process.env.LOG == 'true'){
            console.log(colors.yellow(`[WEBSOCKET] client just connected on socket`))
        }
        
        ws.on('message', async(message) => {

            const messageDecode = JSON.parse(message)

            const {topic, id, data} = messageDecode

            if(process.env.LOG == 'true'){
                console.log(colors.yellow(`[WEBSOCKET] ${topic} from ${id} tag ${data.tag}`))
            }

            await auto.findBy("tag", {"HEX" : data.tag}).exec(async(error, tags) => {
                const tagId = tags[0]["_id"].toString()
                
                await auto.findBy("servicio", {"_id" : data.from}).exec((error, services) => {
                    const service = services[0]

                    const serviceTags = service.tags
                   
                    let existTag = false

                    serviceTags.forEach(tag => {
                        if(tagId === tag.toString()){
                            existTag = true
                        }
                    })

                
                    if(existTag !== true){
                        auto.linkA("servicio", "tags", data.from, tagId)
                    }else{
                        auto.deleteLinkA("servicio", "tags", data.from, tagId)
                    }

                    wss.clients.forEach(function each(client) {
                        if(data.from !== undefined){
                            client.send(data.from)
                        }
                    });
                })
            })            
        });
         
        ws.on('close', ()=> {
            if(process.env.LOG == 'true'){
                console.log(colors.yellow(`[WEBSOCKET] client disconnect`))
            }
        })

    });
}

module.exports = Websocket