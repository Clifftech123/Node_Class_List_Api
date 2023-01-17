import express from "express";
import bodyParser from "body-parser";
import Moment from "moment/moment.js";
import membersRoute from "./routes/membersRoute.js";


const app = express();

// middleware the print  the url and the time it made the request
app.use( ( req, res, next ) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
})

 

// middleware the print  the url and the time it made the request
app.use( ( req, res, next ) => {
	console.log(
		`${req.protocol}://${req.get( "host" )}${req.originalUrl
		} : ${Moment().format()}`
	); // printing out the url that was hit
	next();
} );


// port to run the server
const PORT = 3000;
app.listen(PORT, () =>
	console.log(`Server running on port: http://localhost:${PORT}`)
);

// middleware  to parse the body of the request
app.use( bodyParser.json() );

// Get all the member in the array 
app.use('/members', membersRoute)


