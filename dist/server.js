"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const db_1 = require("./config/db");
const config_1 = require("./config/config");
db_1.connectToDB().then(() => {
    startServer();
}).catch((error) => {
    console.log('Error while connecting to DB.', error);
});
/**
 * Start Express server.
 */
function startServer() {
    app_1.default.listen(config_1.PORT, () => {
        console.log(('  App is running at http://localhost:%d in %s mode'), config_1.PORT, config_1.NODE_ENV);
        console.log('  Press CTRL-C to stop\n');
    });
}
//# sourceMappingURL=server.js.map