import WebServer from './web.server'

let webserver = new WebServer ();
webserver.start ()
  .then(() => {
  console.log('Web server is up and running!')
}).catch( err => {
  console.error(err);
  console.error('Failed to start web server')
});
