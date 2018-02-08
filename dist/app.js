"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
// Load environment variables from .env file, where API keys and passwords are configured
// Controllers (route handlers)
const homeController = require("./controllers/home");
// API keys and Passport configuration
// Create Express server
const app = express();
// Connect to MongoDB
// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Primary app routes.
 */
app.get('/', homeController.index);
exports.default = app;
//# sourceMappingURL=app.js.map