import express, {Express, Request, Response,NextFunction} from 'express';
import {getAllMembers} from '.././controllers/Members.controller'
const MembersRoute = express.Router();


// Printing the ip the make request in the console
MembersRoute.use((req:Request, res:Response, next:NextFunction) => {
    console.log('your ip address is ', req.ip)
    next();
});


// Get all  the data  Routing 
MembersRoute.get("/", getAllMembers);


// getting single data
MembersRoute.get("/ :MemberId", MembersRoute);

export default MembersRoute
