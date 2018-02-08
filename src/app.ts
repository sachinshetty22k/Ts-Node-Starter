import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as mongoose from "mongoose";

// Load environment variables from .env file, where API keys and passwords are configured

// Controllers (route handlers)
import * as homeController from "./controllers/home";

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
app.get("/", homeController.index);

export = app;