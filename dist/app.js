"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const debug_logger_1 = require("./config/debug.logger");
const http_logger_1 = require("./config/http.logger");
const logger_1 = require("./config/logger");
const homeController = require("./controllers/home.controller");
// Controllers (route handlers)
// API keys and Passport configuration
// Create Express server
const app = express();
// Connect to MongoDB
// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(http_logger_1.httpLogger);
app.use(debug_logger_1.log4jHttpLog);
logger_1.logger.info('yows', { name: 'sachin', a: 'asdf' });
logger_1.logger.error('error');
/**
 * Primary app routes.
 */
app.get('/', homeController.index);
exports.default = app;
//# sourceMappingURL=app.js.map