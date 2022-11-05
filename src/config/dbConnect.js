import mongoose from "mongoose";

mongoose.connect("mongodb+srv://thaliodev:123@livraria-node.oyvs4xr.mongodb.net/livraria-node");

let db = mongoose.connection;

export default db;

