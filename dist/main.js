"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Tekana_Ewallet system')
        .setDescription('This documentation of Tekana_Ewallet which as an app that helps users to transfer and receive money.')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('Tekana_Ewallet')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map