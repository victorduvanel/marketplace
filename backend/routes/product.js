import express from "express";
import formidable from "express-formidable";

const router = express.Router();

// middleware
import { requireSignin, productOwner } from "../middlewares";
// controllers
import {
  create,
  products,
  image,
  sellerProducts,
  remove,
  read,
  update,
} from "../controllers/product";

router.post("/create-product", requireSignin, formidable(), create);
router.get("/products", products);
router.get("/product/image/:productId", image);
router.get("/seller-products", requireSignin, sellerProducts);
router.delete(
  "/delete-product/:productId",
  requireSignin,
  productOwner,
  remove
);
router.get("/product/:productId", read);
router.put(
  "/update-product/:productId",
  requireSignin,
  productOwner,
  formidable(),
  update
);

module.exports = router;
