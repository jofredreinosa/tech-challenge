import { Module } from "@nestjs/common";
import { ElementCatalog } from "./element-catalog";
import { ElementsController } from "./elements.controller";

@Module({
  controllers: [ElementsController],
  providers: [ElementCatalog],
})
export class ElementsModule {}
