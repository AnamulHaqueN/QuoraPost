const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));

const {v4: uuidv4} = require("uuid");
let posts = [
    {   
        id: uuidv4(),
        username: "ApnaCollege",
        content: "A learning Platform"
    },

    {
        id: uuidv4(),
        username: "Shradha khapra",
        content: "Is an Instructor"
    },

    {
        id: uuidv4(),
        username: "Anamul",
        content: "Is an learner of this platform"
    }
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

//add new form to create new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

// post request for add new post 
app.post("/posts", (req, res) => {
    let id = uuidv4();
    let {username, content} = req.body;
    posts.push({id, username, content});
    // redirect the url to the posts path
    res.redirect("\posts"); // it use get request
});

// show id
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
    // res.send("Respose is working !");
})

app.listen(port, () => {
    console.log(`App is listening port ${port}`);
});