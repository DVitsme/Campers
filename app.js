const express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/campgrounds', function(req, res) {
  var CampGround = [
    {title:"Derricks Spot", img:"http://survival-mastery.com/wp-content/uploads/2016/05/Glamourous-tent-810x539.jpg"},
    {title:"TT Spot", img:"https://ae01.alicdn.com/kf/HTB1_AL_KFXXXXbhXVXXq6xXFXXXP/8-12-Person-460-305-215cm-Large-Camping-Tents-Waterproof-Double-Layer-Family-Party-Tent-Sun.jpg_640x640.jpg"},
    {title:"Papas Spot", img:"https://www.switchbacktravel.com/sites/default/files/images/articles/Camping%20Tents%202017.jpg"},
  ]
  res.render('campgrounds', {CampGround: CampGround});
});

app.get('/campgrounds/new', function(req,res) {
  res.render('new');
});

app.post('/campgrounds', function(req, res) {
  //get data from froms and add to campgrounds array
  //redirect back to campgrounds route
});

app.get('/*',function(req, res) {
  res.send("I think you misstyped");
});

app.listen('3000', function(req, res) {
  console.log("Yelp has started");
});
