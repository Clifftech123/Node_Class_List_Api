import express from "express";
import {getMembers, getMember, postMember, updateMember, deleteMember} from "../controllers/members";



const router = express.Router();
// Get all members in the server
router.get("/", getMembers);


// Get a specific member in the server
router.get("/:id", getMember);

// post member in the server

router.post("/", postMember);

// update member in the server

router.put("/:id", updateMember);


// delete member in the server

router.delete("/:id", deleteMember);





export default router;


