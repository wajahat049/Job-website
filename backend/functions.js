const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion } = require("mongodb");

var mongoResult;

 //load MongoDb
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


// Login
const Login = async (req, res) => {
  // console.log("Req", req.body)
  let collection = mongoResult.db("GoJobber").collection("Users");

  collection.findOne({ email: req.body.email }).then((user, err) => {
    if (user) {
      if (user.pass == req.body.pass) {
        res.status(400).send({ message: "Successfully Login",variant:"success" });
        console.log("Successfully Login")
      }
      else {
        res.status(400).send({ message: "Incorrect Password",variant:"danger"  });
        console.log("Incorrect Password")
      }
      return;
    }
    else {
      res.status(400).send({ message: "Incorrect Email",variant:"danger"  });
      console.log("Incorrect Email")
      return;
    }
  });

};

//getUsers
async function getData() {
  let collection = mongoResult.db("GoJobber").collection("Users");
  let response = await collection.find({}).toArray();
  return response;
}

// Signup

const postData=async(req, res)=> {
  let collection = mongoResult.db("GoJobber").collection("Users");
  collection.findOne({ email: req.body.email }).then((user, err) => {
    if (user) {
      res.status(400).send({ message: "Failed! Email already exist",variant:"danger"  });
      console.log("Failed! Email has already exist")
    }
    else {
      collection.insertOne({email: req.body.email, pass: req.body.pass, name: req.body.name}, function (error, response) {
        if (err) throw err;
        res.status(400).send({ message: "Successfully Signup",variant:"success"  });
      console.log("Successfully Signup")
      });

    }
    return;
  });

}


//Job Post
const postJob=async(req, res)=> {
    let collection = mongoResult.db("GoJobber").collection("Jobs");
    collection.findOne({ jobTitle: req.body.jobTitle }).then((user, err) => {
      if (user) {
        res.status(400).send({ message: "Failed! Job already exist",variant:"danger"  });
        console.log("Failed! Job has already exist")
      }
      else {
        collection.insertOne({jobTitle: req.body.jobTitle, jobDescription: req.body.jobDescription, jobLocation: req.body.jobLocation,
            jobTimings: req.body.jobTimings,jobType: req.body.jobType,jobCategory: req.body.jobCategory,
            jobRequirements: req.body.jobRequirements,jobVacancies: req.body.jobVacancies,companyName: req.body.companyName,
            companyDescription: req.body.companyDescription,companyLocation: req.body.companyLocation,companyWebsite: req.body.companyWebsite,
            companyLogo: req.body.companyLogo}, function (error, response) {
          if (err) throw err;
          res.status(400).send({ message: "Successfully Post",variant:"success"  });
        console.log("Successfully Post")
        });
  
      }
      return;
    });
  
  }


module.exports= {Login,postData,loadMongoDb,getData,postJob}