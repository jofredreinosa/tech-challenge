import { AppModule } from "./app.module";
import { NestFactory } from "@nestjs/core";

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

  await application.listen(serverPort);
}

void startServer();
