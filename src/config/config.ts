export const PORT = process.env.PORT || 3001;
export const NODE_ENV = process.env.NODE_ENV || 'local';
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

export const config = baseConfig;
