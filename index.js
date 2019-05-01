const server = require("./server");

const port = process.env.PORT || 3000; // server runs on port 3000 unless deployed online to aws / heroku

server.listen(port, function() {
  //server will listen for users actions
  console.log("Listening on port", port);
});
