import express from 'express';
import bodyParser from "body-parser";
import Moment from "moment/moment.js";
import membersRoute from "./Routes/membersRoute";
import {Request , Response , NextFunction } from 'express' //

const app: express.Application = express()
app.use(express.json)
app.use(express.urlencoded({ extended: true }))

// middleware the print  the url and the time it made the request
app.use( ( req:Request, res:Response, next:NextFunction ) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
})

 

// middleware the print  the url and the time it made the request
app.use((req: Request, res:Response, next:NextFunction ) => {
	console.log(
		`${req.protocol}://${req.get( "host" )}${req.originalUrl
		} : ${Moment().format()}`
	); // printing out the url that was hit
	next();
} );


// port to run the server
const PORT:number = 3001;
app.listen(PORT, () =>
	console.log(`Server running on port: http://localhost:${PORT}`)
);

// middleware  to parse the body of the request
app.use( bodyParser.json() );

// Get all the member in the array 
app.use('/members', membersRoute)


