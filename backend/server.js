const app = require("./app");
const dotenv = require("dotenv");




//Config
dotenv.config({path:"backend/config/config.env"});





const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on port : ${process.env.PORT}`);
});