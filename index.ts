import express from 'express';
import { router } from './routes/leagues';
import { router2 } from './routes/teams';
import { port } from './environment';

  function main(){
  const app = express();
  app.use(express.json(), router, router2);
  app.get('/', (req,res) => res.send('Hello Mon Petit Gazon!'))
  app.listen(port, () => {
    console.log('Listening on port: '+port);
  });
}

main();