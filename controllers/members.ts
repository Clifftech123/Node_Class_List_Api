import Members from "../models/membersList";
import {v4 as uuid} from 'uuid';
import {Request, Response, NextFunction} from 'express' //



// Get all members in the server
export const getMembers = (req:Request, res:Response) => {
	console.log(`Users in the database: ${Members}`);
	res.send(Members);
};

// get sing member   in the server
export const getMember = (req: Request, res: Response) => {
	//  We are checking if  member is already in the array 
	const found = Members.some((member: {id: number; name: string; Networth: string; Age: number; Country: string; Industry: string; Company:string  }) => member.id === Number(req.params.id));
	// if member is found we return the member
	if (found) {
		res.json(Members.filter((member: {id: number; name: string; Networth: string; Age: number; Country: string; Industry: string; Company:string }) => member.id === Number(req.params.id)));
		// if member is not found we return a 404 status code and a message
	} else {
		res.status(404).json({msg: `No member with the id of ${req.params.id}`});
	
}
}

	
	







