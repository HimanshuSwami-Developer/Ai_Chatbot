import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";


import path from "path";
import {fileURLToPath} from 'url';


//configure env
dotenv.config();



//rest object
const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("dev"));


// 👇️ "/home/borislav/Desktop/javascript/index.js"
const __filename = fileURLToPath(import.meta.url);
console.log(__filename)

// 👇️ "/home/borislav/Desktop/javascript"
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

app.use(express.static(path.join(__dirname,"/client","build")))





//rest api
app.get( "*", (req, res) => { 
      res.send("<h1>404 Not found</h1> <h3>You have Internet Issue <br/> Please Go back and try again</h3>");  
 });

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white
  );
});
