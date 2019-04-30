const express = require("express"); //how you load express
const users = require("./data.js"); // how you get data/variable from a different file
const app = express(); //call named express is creating an object called app
const getemail = require("./getemail.js");

console.log("Name:"+ users[0].name + " Email:" + users[0].email);


//get user by index
app.get("/getemail", (req, res) => {
    //client/browser makes a req and the machine makes the response 
    const name = req.query.name; //how you get  a query from the browser
   const email =getemail(users, name)
    // res.send("Name:"+ users[0].name + " Email:" + users[0].email);
    res.send(email);


}); //method a function in an object. has 2 parameters


//get user by index
app.get("/getuser", (req, res) => {
    //client/browser makes a req and the machine makes the response 
    const index = req.query.index; //how you get  a query from the browser
    const oneUser = users[index];
    res.send(oneUser);

}); //method a function in an object. has 2 parameters


app.get("/greet", (req, res) => {
    //client/browser makes a req and the machine makes the response 
    const userName = req.query.user; //how you get  a query from the browser
    res.send("Hello " + userName + "!");
}); //method a function in an object. has 2 parameters

app.get("/goodbye", (req, res) => {
    //client/browser makes a req and the machine makes the response 
    const userName = req.query.user; //how you get  a query from the browser
    res.send("Goodbye " + userName + "!");
}); //method a function in an object. has 2 parameters

app.get("/weather", (req, res) => {
    //client/browser makes a req and the machine makes the response 
    const userName = req.query.user; //how you get  a query from the browser
    res.send("Hey " + userName + "! What is the weather?");
}); //method a function in an object. has 2 parameters


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
}); //instert a variable inside a string using a back tic
