const http = require("http");
const fs = require("fs");
const url = require("url");

templateHTML = (title, list, body) => {
  return `
    <!doctype html>
    <html>
    <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
    </head>
    <body>
        <h1><a href="/">WEB</a></h1>
        ${list}
        ${body}
    </body>
    </html>
    `;
};

templateList = (filelist) => {
  let list = "<ul>";
  let i = 0;
  while (i < filelist.length) {
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list + "</ul>";
  return list;
};

const app = http.createServer(function (request, response) {
  const _url = request.url;
  const queryData = url.parse(_url, true).query;
  const pathname = url.parse(_url, true).pathname;
  let title = queryData.id;

  if (pathname === "/") {
    if (queryData.id == undefined) {
      fs.readdir("./data", (err, filelist) => {
        title = "Welcome";
        description = "Hello, Node.js";
        const list = templateList(filelist);
        const template = templateHTML(
          title,
          list,
          `<h2>${title}</h2>${description}`
        );
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readdir("./data", (err, filelist) => {
        fs.readFile(`data/${queryData.id}`, "utf8", (err, description) => {
          const list = templateList(filelist);
          const template = templateHTML(
            title,
            list,
            `<h2>${title}</h2>${description}`
          );
          response.writeHead(200);
          response.end(template);
        });
      });
    }
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
});
app.listen(3000);
