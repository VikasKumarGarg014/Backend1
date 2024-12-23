// // const me = require('cat-me');

// // console.log(me());

// --------Creation of a basic server---------

// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.url == '/') {
//         console.log(req.url)
//         res.end("Hello World")
//     }
//     else if (req.url == '/about') {
//         console.log(req.url)
//         res.end("about")
//     }
//     else if (req.url == '/profile') {
//         console.log(req.url)
//         res.end("dfcs")
//     }

// }
// )

// server.listen(3000)

//--------------------- ExpressJS

const express = require("express")
const app = express();
const morgan = require('morgan');


app.use(morgan('dev')); // this is a third party middleware
app.set('view engine', 'ejs');
app.use(express.static("public"))
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use((req, res, next) => {
    console.log("This is middleware");
    const a = 10;
    return next();
})

app.get("/", (req, res) => {
    res.render("index");
})
//  -----res = response , req = request------
app.get("/about", (req, res,next) => {
    const a = 10;
    const b = 3;
    console.log("This is custom middleware only for this page, %d", a + b);
    next()
}, (req, res) => {
    res.send("fewbsdjkc");
})

app.post("/get-form-data", (req, res) => {
    console.log(req.body);
    res.send("fewbsdjkc");
})

app.listen(3000);