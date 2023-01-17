import express from "express";
import { getMembers, getMember, postMember } from "../controllers/members.js";

const router = express.Router();
// Get all members in the server
router.get( "/", getMembers );


// Get a specific member in the server
router.get( "/:id", getMember );

// post member in the server

router.post( "/", postMember );




export default router;


