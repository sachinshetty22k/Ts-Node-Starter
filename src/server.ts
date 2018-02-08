const app = require("./app");
import { connectToDB } from "./config/db";
import { config, NODE_ENV, PORT } from "./config/config";

/**
 * Start Express server.
 */

connectToDB().then(() => {
  startServer();
}).catch((error) => {
  console.log("Error while connecting to DB.", error);
});

function startServer() {
  app.listen(PORT, () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), PORT, NODE_ENV);
    console.log("  Press CTRL-C to stop\n");
  });
}

