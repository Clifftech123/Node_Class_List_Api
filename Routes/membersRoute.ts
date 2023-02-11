import express from "express";
import {getMembers, getMember} from "../controllers/members";


const router = express.Router();
// Get all members in the server
router.get( "/", getMembers );


// Get a specific member in the server
router.get( "/:id", getMember );






export default router;


