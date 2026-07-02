import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function startServer(): Promise<void> {
  const application = await NestFactory.create(AppModule);
  const serverPort = 3000;

  const corsOptions = {
    allowedHeaders: ["Authorization", "Content-Type"],
    methods: ["GET"],
    origin: "http://localhost:4200"
  };

  application.enableCors(corsOptions);
  application.setGlobalPrefix("api/v1");

  const swaggerConfiguration = new DocumentBuilder()
    .setDescription("API documentation for the BFF NestJS application")
    .setTitle("BFF NestJS API")
    .setVersion("1.0.0")
    .build();

  const swaggerDocument = SwaggerModule.createDocument(application, swaggerConfiguration);
  SwaggerModule.setup("api/v1/documentation", application, swaggerDocument);

  await application.listen(serverPort);
}

void startServer();
