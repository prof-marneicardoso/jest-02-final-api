const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API Documentation for My API',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
        components: {
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        full_name: {
                            type: 'string',
                            description: 'Nome do usuário',
                        },
                        email: {
                            type: 'string',
                            description: 'Email do usuário',
                        },
                        password: {
                            type: 'string',
                            description: 'Senha do usuário',
                        }
                    },
                    required: ['fullName', 'email', 'password'],
                },
            },
        },
  },
    apis: ['./routes/*.js'], // Caminho para os arquivos de rotas onde você vai documentar as rotas
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
};
