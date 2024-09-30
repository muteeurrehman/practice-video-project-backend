import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";

console.log("Hello, world1");

dotenv.config({ path: "./.env" });
connectDB();

console.log("Hello, world2");

const app = express();
