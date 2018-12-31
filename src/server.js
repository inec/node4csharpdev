import { Config } from './config/config';
import { Server } from '.servers/server';
import { UsersRouter } from './routers/usersRouter';
import { UserService } from './services/UserService';

var config =new Config()
    .setPort(3000)
    .addTransient("UserService", UserService)
/*const express = require("express");

var app=express();

app.get("/",(req,res)=> res.send("hello world"));

app.listen(3000,()=>console.log("run 3000 port"));*/