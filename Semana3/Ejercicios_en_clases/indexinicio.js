const mongoose = require(`mongoose`);
const conexion = "mongodb+srv://Master_p1:sisasis69@cluster0.qnefh.mongodb.net/db_ejemplo1?retryWrites=true&w=majority" 

mongoose.connect(conexion,{useNewUrlParser:true, useUnifiedTopology:true});
//definiendo el modelo
const usuario= mongoose.model("Usuario", {nombre:String});
//a partir del modelo creado en un objeto
const usuario1 = new usuario({nombre: 'William FLores'})
//grabar en la base de datos y consultar



usuario1.save().then(()=>{
    console.log(`usuario creado correctamente`);
    usuario.find().then(console.log);
})

//mediante async await

(async ()=>{
    await usuario1.save();
    console.log(`Usuario se creo correctamente`);
    usuario.find().then(console.log);
})();