const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");

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
        <a href="/create">create</a>
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
    if (queryData.id == undefined) { //home page
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
    } else { //data page
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
  } else if (pathname === "/create") { //create from page
    fs.readdir("./data", (err, filelist) => {
      title = "WEB - Create";
      const list = templateList(filelist);
      const template = templateHTML(
        title,
        list,
        `
        <form action="http://localhost:3000/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p><textarea name="description" placeholder="description"></textarea></p>
          <p><input type="submit"></p>
        </form>
        `
      );
      response.writeHead(200);
      response.end(template);
    });
  } else if (pathname === "/create_process") { //해당 data page
    let body = '';
    request.on('data', (data) => {
      body += data;
    });
    request.on('end', () => {
      let post = qs.parse(body);
      const title = post.title;
      const description = post.description;
      fs.writeFile(`data/${title}`, description, 'utf8', (err) => {
        // redirect to data page
        response.writeHead(302, {
          Location: `/?id=${title}`
        });
        response.end('success');
      })
    });
  } else {
    response.writeHead(404);
    response.end("Not Found");
  }
});
app.listen(3000);