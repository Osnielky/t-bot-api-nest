"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const redis_repo_service_1 = require("../cache/data-access/redis-client/redis-repo.service");
let AlertService = class AlertService {
    constructor(httpService, redisRepo) {
        this.httpService = httpService;
        this.redisRepo = redisRepo;
    }
    async testAlert(alertData) {
        console.log(alertData);
        this.redisRepo.getHello();
        const order = {
            type: 'BUY',
            conditionMatch: 75,
            symbol: 'AAL',
            orderType: 'LIMIT',
            orderPrice: 14.5,
        };
        return order;
    }
};
exports.AlertService = AlertService;
exports.AlertService = AlertService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        redis_repo_service_1.RedisRepository])
], AlertService);
//# sourceMappingURL=alert.service.js.map