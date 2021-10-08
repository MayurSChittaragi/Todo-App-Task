const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://admin-mayur:mayurdb@cluster0.dypsu.mongodb.net/toDoList-V2', {useNewUrlParser:true});

const itemSchema = {
    name: String,
    username : String
}

const Item = mongoose.model("Item", itemSchema);


app.post("/", function(req, res){

	const newItem = req.body.itemName;
	// console.log(listName);
    const item = new Item({
        name: newItem
    });
	item.save();
	res.redirect('/');
});

app.get('/', function (req,res) {
    Item.find({/** We have to add the username filter over here!*/}, function (err, foundItems) {
        if(err){
            console.log(err);
        }
        else{
            res.render('list', {listItems: foundItems});
        }
    })
});

app.post('/delete', function(req, res){
	// console.log(req.body.checkbox);
	const check = req.body.checkbox;
    Item.findByIdAndRemove(check, function (err) {
        if(err){
            console.log(err);
        }else{
            console.log("Successfully removed!");
        }
    });
    res.redirect('/');
});

app.listen(3000, function () {
    console.log("Server started on port 3000!");
});