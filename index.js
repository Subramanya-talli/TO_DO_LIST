const express = require("express")
const app = express();
const dotenv = require("dotenv")
const {ConnectToMongoDb, connectToMongoDb} = require("./connectDb")


dotenv.config();

app.use("/static", express.static("CSS"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;


app.get('/', (req,res)=>{
    res.render('todo.ejs')
})

app.post('/',(req, res) => {
    console.log(req.body);
});

app.listen(PORT, ()=>{
    console.log(`App is running ${PORT}`);
})

connectToMongoDb(process.env.mongoDbUrl)
.then(()=> console.log("Connected To DataBsse"))


