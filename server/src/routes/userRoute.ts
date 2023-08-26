import express, { Router } from "express";
import { addAddressForUser, getUsers } from "../controllers/userController";
import { createUser } from "../controllers/auth";
// import { authentication } from "../middleware/auth";

const router: Router = express.Router();

router.post("/register", createUser);
// router.post("/login", userLogin);
router.post("/add-address", addAddressForUser);

router.get("/users", getUsers);
// router.get("/search", searchUsers);
// router.get("/filter", filterUsers);


export default router;