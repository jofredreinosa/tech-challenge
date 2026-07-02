import { Injectable } from "@nestjs/common";
import { Element } from "./models/element";

@Injectable()
export class ElementCatalog {
  private readonly elements: Element[] = [
    {
      description: "Defines the primary core component of the system",
      id: "element-001",
      name: "Alpha Component",
      status: "active",
      type: "core"
    },
    {
      description: "Defines the secondary auxiliary extension of the system",
      id: "element-002",
      name: "Beta Extension",
      status: "inactive",
      type: "extension"
    }
  ];

  public retrieveElements(): Element[] {
    return this.elements;
  }
}
