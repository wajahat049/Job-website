const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


var mongoResult;
async function loadMongoDb(){
  const uri =
    "mongodb+srv://wajahat:wajju123@cluster0.0buc1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  mongoResult = await client.connect();
}
loadMongoDb()


//GET DATA
async function getData() {
  let collection = mongoResult.db("GoJobber").collection("Users");
  let response = await collection.find({}).toArray();
  return response;
}


//POST DATA
async function postData(user) {
  let collection = mongoResult.db("GoJobber").collection("Users");
  collection.insertOne(user, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    // db.close();
  });
}

app.get("/AllUsers", (req, res) => {
  var resp = getData();
  resp.then((e) => {
    res.send(e);
  });
});

app.post("/CreateUser", (req, res) => {
  console.log("New User", req.body);
  postData(req.body);
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
