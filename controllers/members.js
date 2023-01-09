import { Members } from "../models/membersList.js";
import { v4 as uuid } from "uuid";

// Get all members in the server
export const getMembers = (req, res) => {
	console.log(`Users in the database: ${Members}`);

	res.send(Members);
};


// get sing member   in the server
export const getMember = ( req, res ) => {
	const found = Members.some((member) => member.id === Number(req.params.id));
	if (found) {
		res.json(Members.filter((member) => member.id === Number(req.params.id)));
		// SHowing and error the the uer is not found
	} else {
		res.status(404).json({ meg: `No member with the id of ${req.params.id}` });
	}
	
	
}

// post member in the server 
export const postMember = (req, res) => {
   const newMember = {
			id: uuid(),
			name: req.body.name,
			Networth:req.body.Networth,
			Age: req.body.Age,
			Country: req.body.Country,
			Industry: req.body.Industry,
		};
		// Checking if name and email are included in the  post
		if (!newMember.name || !newMember.Networth || !newMember.Age || !newMember.Country || !newMember.Industry) {
			return res.status(400).json({ meg: " Please the information you entered dosnt match" });
		}
        //  if the information tis correct hen we push the information to the list 
		Members.push(newMember);
		res.json(Members);
};




