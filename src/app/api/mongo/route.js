import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
require('dotenv').config();

const dbUrl = process.env.DB_URL;


export async function GET(request) {

  const uri = dbUrl;

  const client = new MongoClient(uri);

  try {
    const database = client.db("student");
    const movies = database.collection("mcq");

    const query = {};
    const Quiz = await movies.find(query).toArray();

    return NextResponse.json(Quiz);
  } finally {
    await client.close();
  }
}
