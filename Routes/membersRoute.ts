import express from "express";
<<<<<<< HEAD
import {getMembers, getMember, postMember, updateMember, deleteMember} from "../controllers/members";
=======
import {getMembers, getMember} from "../controllers/members";
>>>>>>> 41bccb10c9491b58d8a8a5f06bdfdc19450c2eda


const router = express.Router();
// Get all members in the server
router.get( "/", getMembers );


// Get a specific member in the server
router.get( "/:id", getMember );

<<<<<<< HEAD
// post member in the server

router.post("/", postMember);

// update member in the server
router.put("/:id", updateMember);

// delete member in the server
router.delete("/:id", deleteMember);



=======
>>>>>>> 41bccb10c9491b58d8a8a5f06bdfdc19450c2eda





export default router;


