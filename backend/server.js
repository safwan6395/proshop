import dotenv from "dotenv";
dotenv.config();

import express from "express";
import productRouter from "./routes/productRoutes.js";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;

connectDB(); // To connect mongoDB

const app = express();

app.get("/", (req, res) => {
  res.send("API IS RUNING");
});

app.use("/api/products", productRouter);

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
