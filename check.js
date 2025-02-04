const express= require('express');
const app =express();
port=4000;
 app.get('/',(req,res)=>{
    //res.send("nginx web server on windows to configure express codes ");
    const name="yonas";
    const dept="devops";
    const wh=name+dept;
    res.send(`nginx web server on windows to configure express codes:${wh}`)
 });

 app.listen(port,()=>{
    console.log(`The web server listining  at http://localhost:${port}`)
 })