import { Module } from "@nestjs/common";
import {ElementsModule} from "./elements/elements.module";

@Module({
  controllers: [],
  imports: [ElementsModule],
  providers: [],
})
export class AppModule {}
