import express from "express"
import { createUrl, deleteUrl, getAllUrl, getUrl } from "../controllers/shortUrl.js";

const route = express.Router()

route.post("/shortUrl", createUrl);
route.get("/shortUrl", getAllUrl);
route.get("/shortUrl/:id", getUrl);
route.delete("/shortUrl/:id", deleteUrl);

export default route 