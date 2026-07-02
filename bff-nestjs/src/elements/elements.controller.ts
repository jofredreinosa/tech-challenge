import { Controller, Get } from "@nestjs/common";
import { ElementCatalog } from "./element-catalog";
import { Element } from "./models/element";

@Controller("elements")
export class ElementsController {
  constructor(private readonly elementCatalog: ElementCatalog) {}

  @Get()
  public listElements(): Element[] {
    return this.elementCatalog.retrieveElements();
  }
}
