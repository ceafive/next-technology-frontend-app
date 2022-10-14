import express from "express";
import getContent from "../controllers/root/getContent";

const root = express.Router();

root.get("/search", getContent);

export default root;
