import { NextResponse } from "next/server";
// import Mcq from "../mcq/mcq.json";
import { MongoClient } from "mongodb";

require('dotenv').config();

const dbUrl = process.env.DB_URL;
export async function POST(request) {
  // console.log(request.url);
  let body = await request.json();
  
  // console.log(body);
  // Replace the uri string with your connection string.
  const uri =dbUrl;
  const client = new MongoClient(uri);

  try {
    const database = client.db("student");
    const movies = database.collection("mcq");

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const movie = await movies.insertMany(body);

    console.log(movie);
    return NextResponse.json({"ok":true});
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
