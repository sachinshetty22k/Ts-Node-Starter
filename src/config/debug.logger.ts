const log4js = require('log4js');

// config
log4js.configure({
    appenders: {
        console: { type: 'console' },
        file: { type: 'file', filename: '/logs/http/log4jsconnect.log' }
    },
    categories: {
        default: { appenders: ['console'], level: 'debug' },
        log4jslog: { appenders: ['file'], level: 'warn' }
    }
});

const logger = log4js.getLogger('log4jslog');
export const log4jHttpLog = log4js.connectLogger(logger, { level: 'auto' });

