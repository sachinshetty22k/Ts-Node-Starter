"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");
const config_1 = require("./config");
const rfs = require('rotating-file-stream');
const logDirectory = path.join(config_1.config.loggerConfig.httpLogger.path);
console.log(logDirectory);
// ensure log directory exists
// tslint:disable-next-line:no-unused-expression
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
// create a rotating write stream
const accessLogStream = rfs(config_1.config.loggerConfig.httpLogger.file, {
    interval: '1d',
    path: logDirectory
});
// setup the logger
const morganConfig = {
    stream: accessLogStream,
    skip: (req, res) => res.statusCode < 400
};
exports.httpLogger = morgan('common', morganConfig);
//# sourceMappingURL=http.logger.js.map