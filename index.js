import express from "express";
import bodyParser from "body-parser";

import membersRoute from "./routes/membersRoute.js";

const app = express();

const PORT = 3000;

app.listen(PORT, () =>
	console.log(`Server running on port: http://localhost:${PORT}`)
);

// middleware  to parse the body of the request
app.use( bodyParser.json() );

// Get all the member in the array 
app.use('/members', membersRoute);
