const path = require('path')
const fs = require('fs');
const data = ["Movie 1","Movie 2","Movie 3","Movie 4"];
const home = (req,res)=>{
    res.render('home',{title:'Home'});
 }
 const getid = (req,res)=>{
    const id=req.params.id -1;
      res.render('seats',{index:id,data:data});
        
}
 const err = (req,res)=>{
    res.render('error',{title:'Error'});
}
const bookslot = (req,res) => {
    const seats_booked = req.body.seats;
    const movie_name = req.params.id;
    let data = JSON.parse(fs.readFileSync(
        path.resolve(__dirname+"/Database/SeatMatrix.json")
    ));
    let check = false;
    seats_booked.forEach(element => {
        if(data[movie_name][element-1]==1){
            check = true;
            res.sendStatus(400).json({"status":false});
        }
        data[movie_name][element-1] = data[movie_name][element-1]^1; 
    });
    fs.writeFileSync(__dirname+"/Database/SeatMatrix.json",JSON.stringify(data));
    res.sendStatus(200);
}
const cancelslot = (req,res) => {
    const seats_cancel = req.body.seats;
    const movie_name = req.params.id;
    let data = JSON.parse(fs.readFileSync(
        path.resolve(__dirname+"/Database/SeatMatrix.json")
    ));
    seats_cancel.forEach(element => {
        data[movie_name][element-1] = data[movie_name][element-1]^1; 
    });
    fs.writeFileSync(__dirname+"/Database/SeatMatrix.json",JSON.stringify(data));
    res.sendStatus(200);
}
module.exports = {home,err,bookslot,cancelslot,getid}
