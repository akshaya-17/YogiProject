const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://Akshaya_325:Akshaya_325@cluster0.sj88n4b.mongodb.net/?retryWrites=true&w=majority",{
    useNewurlParser:true,
    useUnifiedTopology:true,
   
}).then(()=>{
    console.log("connection established");
}).catch((err)=>{
    console.log(err);
})
