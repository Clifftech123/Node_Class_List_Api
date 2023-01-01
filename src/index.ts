import express, {Application, Express, NextFunction, Request, Response} from 'express';
import MembersRoute from './routes/Member.route'
import {Server} from 'http';
const app: Application = express();




// Bae middleware  for us to get access to the routing 
app.use(express.json());

// Getting a single Member information  form the Api  
app.use("/members", MembersRoute);

// middleware the print  the url and the time it made the request
app.use((req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
})

// Printing the port server in the console 
const PORT: number = 5000;

  const server:Server= app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
})


