import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

// note will get some errors below using tsx... 
// not sure what the ultimate consequences will be lol
const client = new MongoClient('mongodb+srv://Pat:QmnMNyUtri9R8MjV@patlas.ymmyexu.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('MCT');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;