var express = require("express");
var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

/* serves main page */
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/user/add", function (req, res) {
  /* some server side logic */
  res.send("OK");
});

/* serves all the static files */
app.get(/^(.+)$/, function (req, res) {
  console.log("static file request : " + req.params);
  res.sendfile(__dirname + req.params[0]);
});

app.get("/favicon.ico", function (req, res) {
  res.send(204);
});

var port = process.env.PORT || 5003;
app.listen(port, function () {
  console.log("Listening on " + port);
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
