const express = require("express");

const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");

// console.log(date());

// const ejs = require("ejs")

const app = express();

let adds = ["Workout", "Shower",]

let addWork = []

const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function(req, res){

	// I commented the longer method for doing this

	// const d = new Date();
	// let today = d.getDay();
	// let day = ""
	
	// switch (today) {
	// 	case 0:
	// 		day = "Sunday";
	// 		break;
	// 		case 1:
	// 		day = "Monday";
	// 		break;
	// 		case 2:
	// 		day = "Tuesday";
	// 		break;
	// 		case 3:
	// 		day = "Wednesday";
	// 		break;
	// 		case 4:
	// 		day = "Thursday";
	// 		break;
	// 		case 5:
	// 		day = "Friday";
	// 		break;
	// 		case 6:
	// 		day = "Saturday";
	// 		break;
	
	// 	default:
	// 		console.log("Error, currend day not available");
	// 		break;
	// 	}

	let today = date.getDay();

	res.render("list", {listTitle: today, newListItems: adds})
});

app.post("/", function(req, res){
	let add1 = req.body.todo1;

	if (req.body.list === "work"){
		addWork.push(add1);

		res.redirect("/work")
	} else{
		adds.push(add1);

		res.redirect("/")
	}

});

app.get("/about", function(req, res){
	res.render("about")
})

app.get("/work", function(req, res){
	res.render("list", {listTitle: "work list", newListItems: addWork});
});


app.listen(port, function(){
	console.log("Server is running on port 3000")
});
