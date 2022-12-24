const express = require( 'express' );
const app = express();

// Body parser
app.use(express.json());

// Members Api Route
app.use("/api/list", require("./Routes/api/RichestPeople"));


// initialize port 
const PORT = process.env.PORT || 5000;

// Listing to the port and log it in the console 
app.listen(PORT, () => {
	console.log(`Sever Listen on port ${PORT}`);
});
