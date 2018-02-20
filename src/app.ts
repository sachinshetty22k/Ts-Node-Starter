import * as bodyParser from 'body-parser';
import * as express from 'express';

import { httpLogger } from './config/http.logger';
import { logger } from './config/logger';
import indexRouter from './routes/index.route';

// Create Express server
const app = express();

// Express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(httpLogger);

/**
 * App routes.
 */
app.use('/', indexRouter);

logger.info('Appjs', 'Setting up.');

export default app;
