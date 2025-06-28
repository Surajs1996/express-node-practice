const express = require("express");
const connectDb = require("./config/database");
const User = require("./models/user");

const app = express();

const port = 7777;

app.use(express.json());

app.post("/signUp", async(req,res)=>{
    const user = new User(req.body)

    try{
        await user.save();
        res.send("user saved successfully")

    } catch(err){
        res.status(400).send("Error Saving the user: " +err.message)
    }
});

app.get("/user", async(req, res)=>{
    const userEmail = req.body.emailId;
    try{
        console.log(userEmail);
        const user = await User.findOne({emailId : userEmail});
        if(!user){
            res.status(400).send("User not found");
        } else{
            res.send(user);
        }
    }catch(err){
        res.status(400).send("Somwthing went wrong")
    }
});

app.get("/feed", async (req,res)=>{
    try{
        const feed = await User.find({});
        if(!feed){
            res.status(204).send("No feeds")
        } else {
            res.send(feed)
        }
    } catch(err){
        res.status(400).send("Something went wrong");
    }
})

connectDb().then(()=>{
    console.log("Database connected successfully");
    app.listen(port, ()=>{
        console.log("server is successfully listening on port ", port);
    })
})
// const {adminAuth, userAuth} = require('./middleware/auth');

// app.use("/admin", adminAuth);

// app.get("/user/login", (req,res) => {
//     res.send("user logged in successfully")
// });

// app.get("/user/data", userAuth, (req,res) => {
//     //throw new Error("Error thrown");
//     res.send("user data fetched in successfully")
// });


// app.get("/admin/getAllUserdata", (req,res)=>{
//     res.send("Admin has fetched all user data successfully");
// });

// app.get("/admin/deleteUser", (req,res)=>{
//     res.send("Admin has deleted user data successfully");
// });

// app.use("/", (err, rerq,res,next)=>{
//     if(err){
//         res.status(500).send("Something went wrong");
//     }
// });


// const rh = (req, res, next) => {
//     console.log("requeste handler 1");
//     next();
// }
// const rh1 = (req, res, next) => {
//     console.log("requeste handler 2");
//     next();
// }
// const rh2 = (req, res, next) => {
//     console.log("requeste handler 3");
//     next();
// }
// const rh3 = (req, res, next) => {
//     console.log("requeste handler4");
//     next();
// }
// const rhFInal = (req, res, next) => {
//     console.log("requeste handler final");
//     res.send("Responce send from multiple route handlers");
// }

// //app.get("/user", rh, rh1, rh2, rh3, rhFInal);
// app.get("/user", rh, rh1, [rh2, rh3], rhFInal);

// app.get("/user",
//     (req, res, next) => {
//         console.log("requeste handler 1");
//         next();
//     },
//     (req, res, next) => {
//         console.log("requeste handler 2");
//         next();
//     },
//     (req, res, next) => {
//         console.log("requeste handler 3");
//         next();
//     },
//         (req, res, next) => {
//         console.log("requeste handler 3");
//             res.send("Responce send from multiple route handlers");
//     }
// );

// app.get("/a/", (req,res) => {
//     res.send("/a/");
// });

// app.get("/ab\\+cd", (req, res)=>{
//     res.send("/ab+cd");
// });

// app.get("/ab\\*cd", (req, res)=>{
//     res.send("/ab*cd");
// });

// app.get("/a\\(bc\\)d", (req, res)=>{
//     res.send("/a(bc)d");
// });


// app.get("/a{bc}d", (req, res)=>{
//     res.send("/a{bc}d");
// });

// app.get("/user/:userId/:name/:password", (req, res)=>{
//     console.log(req.params);
//     res.send("User data fetched successfully using dynamic routs");
// });

// app.get("/user/:userId", (req, res)=>{
//     console.log(req.query);
//     res.send("User data fetched successfully using query params");
// });

// app.get("/user", (req, res)=>{
//     res.send("User data fetched successfully");
// });

// app.post("/user", (req,res)=>{
//     res.send("User data saved successfully");
// });

// app.patch("/user", (req,res)=>{
//     res.send("User data updated successfully");
// });

// app.delete("/user", (req,res)=>{
//     res.send("user deleted successfully");
// });

// app.use("/test", (req, res) => {
//     res.send("Hello World from TEST route!!!");
// });

// app.use("/hello", (req, res) => {
//     res.send("Hello Hello Hello");
// });

// app.use("/", (req, res) => {
//     res.send("Hello World !!!");
// });

app.listen(port, () => {
    console.log("App is successfully run on port =>", port);
});

//Routing sequence matters
//app.use handles every request it might be get, post, put, patch etc.

