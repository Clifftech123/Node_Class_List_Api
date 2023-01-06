import express from "express";
import { getMember } from ".././controllers/members.js";

const router = express.Router();
// Get all members in the server
router.get( "/", getMember );


export default router;
