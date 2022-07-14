import express from "express";
const router = express.Router();

import { createCommunity, getCommunity} from "../controllers/community.js";

router.post("/", createCommunity);
router.get("/", getCommunity);


export default router;