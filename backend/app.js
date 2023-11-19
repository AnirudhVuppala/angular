const bodyParser = require('body-parser');

const exp = require('express')

const mongoose = require('mongoose')


const Post = require('./model/post')

mongoose.connect('mongodb+srv://Aishwarya:RijUMvlV67vrnMjA@atlascluster.7zzpdmn.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log("Connected to Database!!!")
})
.catch(()=>{
    console.log("Database Connection lost")
})
const app = exp()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use((req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
        );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, PUT, OPTIONS"
        );
    next();
});


app.post('/api/posts',(req,res,next)=>{
    const post = new Post({
        title :  req.body.title,
        content : req.body.content
    });
    post.save();
    // console.log(post);
    res.status(201).json({
        message: "This data has been posted successfully"
    })
})
app.use("/api/posts",(req,res,next) =>{
Post.find().then(documents => {
    res.status(200).json({      
        message : "This are my posts",
        posts : documents });
});
});


module.exports = app;