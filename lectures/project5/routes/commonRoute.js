// custom route module

import express from "express";
const router = express.Router();

import { loginFunction, registerFunction, homeFunction } from "../controllers/commonController.js";


router.get("/", homeFunction);

router.get("/login", loginFunction);

router.get("/signup", registerFunction);

router.post("/signupAction");
router.post("/loginAction");

export default router;