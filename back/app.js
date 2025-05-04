//instalar lo primero "npm init -y"
//instalar lo segundo "npm i express axios"
//Quitamos el caret ^
//instalar lo tercero "npm i cors -E" esto sirve para que pueda trabajar el servidor con el front dado que no se encuentran en el mismo orígen las carpetas

const express= require("express");
const axios=require('axios');
const cors=require('cors');
const app=express();

app.use(cors());

const PORT=3002;

app.get(`/pokemon/:pokemonName`, async(req,res)=>{
    const pokemonName=req.params.pokemonName;
    const url= `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    try{
        const response=await axios.get(url);
        const {name, sprites:{front_default},height, weight}=response.data;
        res.json({name, sprites:{front_default},height, weight});
    }catch(EROR){
        res.status(404).json({error:'pokemón no encontrado'});
    }
})

app.listen(PORT,()=>{
    console.log(`Esta escuchando por el http://localhost:${PORT}`);
})
