import { Element } from "../models/element";

export class ElementCatalog {
  public retrieveElements(): Element[] {
    return [
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
  }
}
