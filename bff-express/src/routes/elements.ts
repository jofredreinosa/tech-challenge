import { ElementController } from "../controllers/element-controller";
import { Router } from "express";

const elements = Router();
const elementController = new ElementController();

elements.get("/elements", (request, response) => {
  elementController.listElements(request, response);
});

export default elements;
