import nextConnect from 'next-connect';
import middleware from '../../midware/connectMongo';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {

    let doc = await req.db.collection('sample_airbnb').findOne()
    console.log(doc);
    res.json(doc);
});

export default handler;