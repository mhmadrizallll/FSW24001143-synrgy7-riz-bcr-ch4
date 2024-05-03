// console.log("Implement servermu disini yak 😝

const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const PUBLIC_DIR = path.join(__dirname, "../public");
const port = 8000;

const onRequest = (req, res) => {
  if (req.url === "/") {
    req.url = "/index.html";
  } else if (req.url === "/cars") {
    req.url = "/cars.html";
  }
  const parsedUrl = url.parse(req.url);
  const pathname = `${parsedUrl.pathname}`;
  const extension = path.parse(pathname).ext;
  const dirPath = path.join(PUBLIC_DIR, pathname);
  // console.log(dirPath);

  const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpg",
  };

  fs.readFile(dirPath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    const contentType = contentTypes[extension];
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
};

const server = http.createServer(onRequest);
server.listen(port, "localhost", () => {
  console.log(`Server listening on http://localhost:${port}`);
});
