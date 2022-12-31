
import  { Request, Response} from 'express';
import ListMembers from '.././models/List'


// controller function that send the members information the server 
export function getAllMembers(req:Request, res:Response):void {
    res.send(ListMembers);
}


 
