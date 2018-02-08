"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("./app");
const db_1 = require("./config/db");
const config_1 = require("./config/config");
/**
 * Start Express server.
 */
db_1.connectToDB().then(() => {
    startServer();
}).catch((error) => {
    console.log("Error while connecting to DB.", error);
});
function startServer() {
    app.listen(config_1.PORT, () => {
        console.log(("  App is running at http://localhost:%d in %s mode"), config_1.PORT, config_1.NODE_ENV);
        console.log("  Press CTRL-C to stop\n");
    });
}
//# sourceMappingURL=server.js.map