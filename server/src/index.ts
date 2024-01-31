const express = require("express")

const app = express()
const port = 9000

const one: number = 22
const two: number = 33


app.get('/', (req: any, res: { send: (arg0: string) => any }) => res.send(`1+2 = ${one + two}`))


app.listen(port)

console.log(`[app]: http://localhost:${port}`)



