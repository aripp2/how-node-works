const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  // Node has to load the entire file to memory and waits until all is loaded
  // Better for something small and done locally
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  //Solution 2: Streams
  // assign all data to a variable
  // const readable = fs.createReadStream("test-file.txt");
  // // send the data to the client as each 'chunk' or piece of data is available
  // readable.on("data", chunk => {
  //   res.write(chunk);
  // });
  // // When readable stream is finished reading the file
  // readable.on("end", () => {
  //   // No more data will be streamed
  //   res.end();
  // });

  // // Error handling
  // readable.on("error", err => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found!");
  // });

  // Solution 3: Pipe operator
  // Controls the speed of the data coming in and out
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pipe(writableDestination)
  // whereTheDataComesFrom.pipeItInTo(theDestinationForTheData)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening.....");
});
