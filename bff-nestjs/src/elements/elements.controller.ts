import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ElementCatalog } from "./element-catalog";
import { Element } from "./models/element";

@ApiTags("elements")
@Controller("elements")
export class ElementsController {
  constructor(private readonly elementCatalog: ElementCatalog) {}

  @Get()
  @ApiOperation({ summary: "Retrieve the catalog of elements" })
  @ApiResponse({
    description: "A list of elements retrieved successfully",
    status: 200,
    type: [Element]
  })
  public listElements(): Element[] {
    return this.elementCatalog.retrieveElements();
  }
}
