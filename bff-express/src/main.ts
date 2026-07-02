import cors from "cors";
import express from "express";
import elements from "./routes/elements";
import swaggerUi from "swagger-ui-express";
import {openApiSpecification} from "./docs/open-api-specification";

const server = express();
const serverPort = 3000;

const corsOptions = {
  allowedHeaders: ["Authorization", "Content-Type"],
  methods: ["GET"],
  origin: "http://localhost:4200"
};

server.use(cors(corsOptions));
server.use(express.json());

server.use("/api/v1", elements);
server.use("/api/v1/documentation", swaggerUi.serve, swaggerUi.setup(openApiSpecification));

server.listen(serverPort, () => {
  console.log(`Servidor escuchando exitosamente en el puerto ${serverPort}`);
});
