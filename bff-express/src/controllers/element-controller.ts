import { Request, Response } from "express";
import { ElementCatalog } from "../services/element-catalog";

export class ElementController {
  public listElements(request: Request, response: Response): void {
    const elementCatalog = new ElementCatalog();
    const elements = elementCatalog.retrieveElements();
    response.status(200).json(elements);
  }
}
