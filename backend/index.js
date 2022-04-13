const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion } = require("mongodb");

var mongoResult;

async function loadMongoDb() {
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





// Login
const Login = async (req, res) => {
  // console.log("Req", req.body)
  let collection = mongoResult.db("GoJobber").collection("Users");

  collection.findOne({ email: req.body.email }).then((user, err) => {
    if (user) {
      if (user.pass == req.body.pass) {
        res.status(400).send({ message: "Successfully Login" });
        console.log("Successfully Login")
      }
      else {
        res.status(400).send({ message: "Incorrect Password" });
        console.log("Incorrect Password")
      }
      return;
    }
    else {
      res.status(400).send({ message: "Incorrect Email" });
      console.log("Incorrect Email")
      return;
    }
  });

};


async function getData() {
  let collection = mongoResult.db("GoJobber").collection("Users");
  let response = await collection.find({}).toArray();
  return response;
}

// Signup

async function postData(req, res) {
  let collection = mongoResult.db("GoJobber").collection("Users");
  collection.findOne({ email: req.body.email }).then((user, err) => {
    if (user) {
      res.status(400).send({ message: "Failed! Email has already exist" });
      console.log("Failed! Email has already exist")
    }
    else {
      collection.insertOne({email: req.body.email, pass: req.body.pass, name: req.body.name}, function (err, res) {
        if (err) throw err;
        res.status(400).send({ message: "Successfully Signup" });
      console.log("Successfully Signup")
      });

    }
    return;
  });

}

app.get("/AllUsers", (req, res) => {
  var resp = getData();
  resp.then((e) => {
    res.send(e);
  });
});


// For Signup
app.post("/CreateUser", (req, res) => {
  console.log("New User", req.body);
  postData(req, res);
});

// For Login
app.post("/Login", (req, res) => {
  console.log("New User", req.body);
  Login(req, res);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
});
