const mongoose = require('mongoose');
const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    const db = client.db("mydb");
    // your queries here
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
