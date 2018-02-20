"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configure = {
    'appenders': [
        {
            'type': 'dateFile',
            'filename': 'app.log',
            'pattern': '-yyyy-MM-dd',
            'alwaysIncludePattern': false,
            'layout': {
                'type': 'pattern',
                'pattern': '[%d] [%p] [%x{id}] [%c] %m'
            }
        },
        {
            'type': 'logLevelFilter',
            'level': 'ERROR',
            'appender': {
                'type': 'file',
                'filename': 'errors.log',
                'maxLogSize': 10485760,
                'numBackups': 10
            },
            'layout': {
                'type': 'pattern',
                'pattern': '[%d] [%p] [%x{id}] [%c] %m'
            }
        }
    ]
};
const conf = {
    appenders: {
        console: { type: 'console' },
        appLog: {
            'type': 'dateFile',
            'filename': 'app.log',
            'pattern': '-yyyy-MM-dd',
            'alwaysIncludePattern': false,
            'layout': {
                'type': 'pattern',
                'pattern': '[%d] [%p] [%x{id}] [%c] %m'
            }
        },
        errorLog: {
            'type': 'file',
            'filename': 'errors.log',
            'maxLogSize': 10485760,
            'numBackups': 10,
            'layout': {
                'type': 'pattern',
                'pattern': '[%d] [%p] [%x{id}] [%c] %m'
            }
        }
    },
    categories: {
        default: { appenders: ['console', 'appLog', 'errorLog'], level: 'debug' },
        appLog: { appenders: ['appLog'], level: 'debug' },
        errorLog: { appenders: ['errorLog'], level: 'error' }
    }
};
const log4js = require('log4js');
// config
log4js.configure(configure, { cwd: '/logs/debug' });
exports.default = log4js;
//# sourceMappingURL=logger.1.js.map