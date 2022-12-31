import express, {Express, Request, Response} from 'express';
import MembersRoute from './routes/Member.route'
const app: Express = express();



// middleware the print  the url and the time it made the request
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
})


// Printing the port server in the console 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})


// Bae middleware 
app.use(express.json());

// Getting a single Member information  form the Api  
app.use("/members", MembersRoute);
