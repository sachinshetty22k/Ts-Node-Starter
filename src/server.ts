import app from './app';
import { connectToDB } from './config/db';
import { config, NODE_ENV, PORT } from './config/config';

connectToDB().then(() => {
  startServer();
}).catch((error) => {
  console.log('Error while connecting to DB.', error);
});
/**
 * Start Express server.
 */
function startServer() {
  app.listen(PORT, () => {
    console.log(('  App is running at http://localhost:%d in %s mode'), PORT, NODE_ENV);
    console.log('  Press CTRL-C to stop\n');
  });
}

