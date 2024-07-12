"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const alert_module_1 = require("./alert/alert.module");
const config_1 = require("@nestjs/config");
const redis_client_factory_1 = require("./providers/redis-client.factory");
const redis_repo_service_1 = require("./data-access/redis-client/redis-repo.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            alert_module_1.AlertModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV}`,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, redis_client_factory_1.redisClientFactory, redis_repo_service_1.RedisRepository],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map