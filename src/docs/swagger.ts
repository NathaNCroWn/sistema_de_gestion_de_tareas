import swaggerJSDoc from "swagger-jsdoc";
import { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.3",
  info: {
    title: "Documentacion de mi API",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3000",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      User: {
        type: "object",
        required: ["username", "password"],
        properties: {
          username: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      Task: {
        type:"object",
        required: ["title", "description","expirationDate","state"],
        properties:{
          title: {
            type: "string",
          },
          description: {
            type: "text",
          },
          expirationDate: {
            type: "date",
          },
          state: {
            type: "string",
          },
        }
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/router.ts"],
};

export default swaggerJSDoc(swaggerOptions);
