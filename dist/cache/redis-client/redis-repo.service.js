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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisRepository = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
let RedisRepository = class RedisRepository {
    constructor(redisClient) {
        this.redisClient = redisClient;
    }
    async getHello() {
        const cachedData = await this.redisClient.get('hello');
        if (cachedData) {
            return JSON.parse(cachedData);
        }
        const data = { name: 'Hello World' };
        await this.redisClient.set(`hello`, JSON.stringify(data));
        return data;
    }
};
exports.RedisRepository = RedisRepository;
exports.RedisRepository = RedisRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('RedisClient')),
    __metadata("design:paramtypes", [ioredis_1.default])
], RedisRepository);
//# sourceMappingURL=redis-repo.service.js.map