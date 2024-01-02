// /Users/ZXW6X8N/mongodb/bin/mongod --dbpath=/Users/ZXW6X8N/mongodb-data

const { MongoClient, ObjectId } = require("mongodb");

//const uri = "mongodb+srv://zd0811:<password>@cluster0.zsfwf.mongodb.net/?retryWrites=true&w=majority";
//Add ip address

//compass: mongodb+srv://zd0811:<password>@cluster0.zsfwf.mongodb.net/

const connectionURL = "mongodb://127.0.0.1:27017";
const dbName = "task-manager";

const client = new MongoClient(connectionURL);

async function connectToMongoDB() {
  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");

    // db -> reference to our "task-manager" database
    const db = client.db(dbName);

    const deletedUsers = db
      .collection("users")
      .deleteMany({ age: 27 })
      .then((result) => {
        console.log(result);
      });
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  } finally {
    // Close the connection after the operation
    // await client.close();
  }
}

connectToMongoDB();
