const path = require('path')
const fs = require('fs');
let data = JSON.parse(fs.readFileSync(
    path.resolve(__dirname+"/Database/SeatMatrix.json")
));




//Home page
const home = (req,res)=>{
    res.render('home',{title:'MOVIX',data:data});
 }

//Specific movie page
 const getid = (req,res)=>{

    const id=req.params.id-1;
    console.log(id)
      res.render('seats',{movieIndex:id,data:data});    
}

//Error page
 const err = (req,res)=>{
    res.render('error',{title:'Error'});
}

//Slot booking 
const bookslot = (req,res) => {
    const seats_booked = req.body;
    const movie_name = req.params.id-1;

    let check = false;
    console.log(req.body)
    // console.log(req.body.seats)
    // console.log(seats_booked)
    seats_booked.forEach(element => {
        if(data[movie_name].seats[element-1]==1){
            check = true;
            res.sendStatus(400).json({"status":false});
      
        }
        data[movie_name].seats[element-1] += 1; 
    });

    fs.writeFileSync(__dirname+"/Database/SeatMatrix.json",JSON.stringify(data));
    res.sendStatus(200);
}


//Slot cancellation not implemented
const cancelslot = (req,res) => {
    const seats_cancel = req.body.seats;
    const movie_name = req.params.id-1;
    let data = JSON.parse(fs.readFileSync(
        path.resolve(__dirname+"/Database/SeatMatrix.json")
    ));
    seats_cancel.forEach(element => {
        data[movie_name].seats[element-1] -= 1; 
    });
    fs.writeFileSync(__dirname+"/Database/SeatMatrix.json",JSON.stringify(data));
    res.sendStatus(200);
}

module.exports = {home,err,bookslot,cancelslot,getid}
