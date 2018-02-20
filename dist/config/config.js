"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = process.env.PORT || 3001;
exports.NODE_ENV = process.env.NODE_ENV || 'local';
const appName = 'ts-setup';
const baseConfig = {
    mongoDBURI: 'mongodb://localhost/myapp',
    appName,
    loggerConfig: {
        httpLogger: {
            file: 'http.log',
            path: `/logs/${appName}/http`
        }
    }
};
exports.config = baseConfig;
//# sourceMappingURL=config.js.map