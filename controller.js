
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

 module.exports = {home,err,getid}