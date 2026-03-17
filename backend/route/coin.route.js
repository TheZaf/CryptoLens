import { Router } from "express";
import { getCoins ,getCoin, getCoinChart,searchCoins} from "../controller/coin.controller.js";
import { protectedRoute } from "../middleware/middleware.js";

const router = Router()

router.get('/search/:query',protectedRoute,searchCoins) 
router.get('/getallcoins',getCoins)
router.get('/:id', protectedRoute,getCoin)
router.get('/:id/chart',protectedRoute,getCoinChart)

export default router