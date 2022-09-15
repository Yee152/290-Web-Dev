import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';



const PORT = process.env.PORT
const app = express();

app.use(express.static('public'));

// Note: Don't add or change anything above this line.

let count = 0
function logUrls(req, res, next) {
    count+=1
    if (count % 10 === 0)
        console.log(count)
        next()
}

app.use('/random-person', logUrls, (req,res,next) => {
    next()
});

app.get('/random-person', asyncHandler(async (req,res, next) => {
    try{
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json();
        res.send(data);
    }catch (error) {
        next(error)
    }

}));


let counterror = 0
app.use((error, req, res, next) => {
    counterror += 1; 
    res.status(500).send('500 - Server Error');
    
});
      



// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});