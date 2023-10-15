const express=require('express'); //importar modulo de express
const app = express(); //inicia la app con expres
const port=3000; //el puerto de la app

app.get('/', (req, res)=>{
    res.send('HOLAaaaa')

})


//Se establece la conexción con su puerto:
app.listen(port, ()=>{ 
    console.log("la aplicación se ejecuta en el puerto "+port)
})