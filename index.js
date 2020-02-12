const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const request = require("request");
const cors = require("cors");
const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("trust proxy", 1); // trust first proxy
app.use(cors());

app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const requestPromise = tag => {
  return new Promise((resolve, reject) => {
    request(
      `https://api.flickr.com/services/feeds/photos_public.gne?tags=${tag}&format=json&nojsoncallback=true`,
      (error, response, body) => {
        if (error) return reject(error);
        resolve({ response, body });
      }
    );
  });
};

app.get("/flickr", async (req, res) => {
  try {
    const { search } = req.query;
    const tag = search ? search : "kittens";
    const { response } = await requestPromise(tag);
    res.send(response.body);
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
});

app.listen(process.env.PORT || 8080);
