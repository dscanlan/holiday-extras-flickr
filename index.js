const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const request = require("request");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/flickr", (req, res) => {
  try {
    const { search } = req.query;
    const tag = search ? search : "kittens";
    request(
      `https://api.flickr.com/services/feeds/photos_public.gne?tags=${tag}&format=json&nojsoncallback=true`,
      async (error, response, body) => {
        res.send(response.body);
      }
    );
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
});

app.listen(process.env.PORT || 8080);
