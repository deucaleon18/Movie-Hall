
const home = (req,res)=>{
    res.render('home',{title:'Home'});
 }

 const err = (req,res)=>{
    res.send("ERROR");
}

 module.exports = {home,err}