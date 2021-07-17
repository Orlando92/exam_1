import Saver from "src/ports/Saver";
import { MongoClient } from "mongodb";

export default class MongoSaver implements Saver{

    constructor(){
        let host = process.env.MONGO_HOST || 'localhost';
        let port = process.env.MONGO_PORT || 27017 ;
        this.db = process.env.MONGO_DB || 'tech_start';
        this.url = `mongodb://${host}:${port}/${this.db}`; 
        this.collection = process.env.MONGO_COLLECTION || 'invoices';
    }

    url = null;
    db = null;
    collection = null;

    save(documents: any): Promise<any> {
        return new Promise((res, rej) => {
            MongoClient.connect(this.url, (err, client)=> {
                if(err) rej(err);
                client.db(this.db).collection(this.collection).insertMany(documents, (err, result) => {
                    if (err) rej(err);
                    console.log(result);
                    res(result);
                });
            });
        });        
    }

}