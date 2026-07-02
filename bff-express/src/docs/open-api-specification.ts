export const openApiSpecification = {
  info: {
    description: "API documentation for the BFF Express application",
    title: "BFF Express API",
    version: "1.0.0"
  },
  openapi: "3.0.0",
  paths: {
    "/api/v1/elements": {
      "get": {
        responses: {
          "200": {
            content: {
              "application/json": {
                schema: {
                  items: {
                    properties: {
                      description: { type: "string" },
                      id: { type: "string" },
                      name: { type: "string" },
                      status: { type: "string" },
                      type: { type: "string" }
                    },
                    type: "object"
                  },
                  type: "array"
                }
              }
            },
            description: "A list of elements retrieved successfully"
          }
        },
        summary: "Retrieve the catalog of elements"
      }
    }
  }
};
