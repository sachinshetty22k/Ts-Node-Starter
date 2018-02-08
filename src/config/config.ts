export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || 'local';

const baseConfig = {
    mongoDBURI: 'mongodb://localhost/myapp'
};

export const config = baseConfig;
