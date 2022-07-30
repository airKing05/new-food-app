const mongoose =require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true
  }
  ).then(() => {
    console.log("connection successfull with server")
}).catch((err)=> {
    console.log("not able to connect:", err)
})