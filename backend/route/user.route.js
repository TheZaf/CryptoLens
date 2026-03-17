import { Router } from "express";
import { signUp ,logIn, logOut, authCheck} from "../controller/user.controller.js";
import { protectedRoute } from "../middleware/middleware.js";

const router = Router()

router.post("/signup",signUp)
router.post("/login",logIn)
router.post('/logout',logOut)
router.get('/checkauth',protectedRoute,authCheck)

export default router;