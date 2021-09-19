import express from "express";
import formidable from 'express-formidable'

const router = express.Router();

// middleware
import { requireSignin } from "../middlewares";
// controllers
import { create, products, image } from "../controllers/product";

router.post("/create-product", requireSignin, formidable(), create);
router.get("/products", products);
router.get("/product/image/:productId", image);
module.exports = router;
