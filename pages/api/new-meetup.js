//api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://Madhuri:jhgfdfghjfdfghmnbvb@cluster0.vmsb1ax.mongodb.net/meetup?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupCollections = db.collection("meetup");

    const result = meetupCollections.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "meetup inserted!" });
  }
}
export default handler;
