import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const options = {
    definition: {
        info: {
            title: 'UMC Study API',
            version: '1.0.0',
            description: 'UMC Study API with express, API 설명'
        },
        host: 'localhost:3000',
        basePath: '/'
    },
    apis: ['./src/routes/*.js', './swagger/*']
};


export const specs = swaggerJsdoc(options);