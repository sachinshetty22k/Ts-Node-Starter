"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = process.env.PORT || 3000;
exports.NODE_ENV = process.env.NODE_ENV || 'local';
const baseConfig = {
    mongoDBURI: 'mongodb://localhost/myapp'
};
exports.config = baseConfig;
//# sourceMappingURL=config.js.map