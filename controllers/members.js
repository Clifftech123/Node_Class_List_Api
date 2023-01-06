import{Members}from "../models/membersList.js";

// Get all members in the server
export const getMember = (req, res) => {
	console.log(`Users in the database: ${Members}`);

	res.send(Members);
};
