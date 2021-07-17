import * as dotenv from "dotenv";
import express from 'express';
import Report from './useCases/report';
import Fetcher from './ports/Fetcher';
import MongoFetcher from './adapters/MongoFetcher';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();   

app.use(function(_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/", (req, res) => {

    const fetcher: Fetcher = new MongoFetcher();
    const report =new Report(fetcher);
    report.exec(req.query.group)
        .then( result => res.json(result))
        .catch(err => res.status(500).json(err));

});

app.listen(port, ()=> {
    console.log(`App listening at http://localhost:${port}`);
});



