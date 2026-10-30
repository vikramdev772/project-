
const express= require("express")

const port = 4000

const app=express();

app.get("/",(req,res)=>{
    res.json({
        msg:"server started ⚡",
        status:"200 ok ✅",
        data:"🍎🥭🍑🍏"
    })
})

app.listen(port,()=>{
    console.log(`\n\t server running on port : ${port} ✅`);
})