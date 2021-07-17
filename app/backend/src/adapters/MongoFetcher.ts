
import { MongoClient } from "mongodb";
import Fetcher from "src/ports/Fetcher";

export default class MongoFetcher implements Fetcher{

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

    fetch(group: string): Promise<any> {
        return new Promise((res, rej) => {
            MongoClient.connect(this.url, (err, client)=> {
                if(err) rej(err);
                client.db(this.db).collection(this.collection).aggregate([
                    {
                        '$group': {
                            _id: `$${group}`, 
                            'Invoice Number': { $first: "$invoice_number"}, 
                            'Purchase Date': { $first: "$purchase_date"},
                            'Distributor Name': { $first: "$distributor_name"},
                            'Distributor Address': { $first: "$distributor_address"},
                            'Customer Name': { $first: "$customer_name"},
                            'Customer Address': { $first: "$customer_address"},
                            'Manufacturer Name': { $first: "$manufacturer_name"},
                            'Manufacturer Address': { $first: "$manufacturer_address"},
                            'Product Code': { $first: "$product_code" },
                            'Product Description': { $first: "$product_description" },
                            'Total Items': {$sum: 1},
                            'Unit Of Measure': { $first: "$unit_of_measure" },
                            'Purchased Qtys': { $sum: "$purchased_qty" },
                            'Purchased Weights': { $sum: "$purchased_weight" },
                            'Unit Price': { $first: "$unit_price" },
                            'Total Price': { $sum: "$total_price" },
                        }
                    }
                ]).toArray((err, result)=> {
                    if(err) rej(err)
                    res(result);
                });
            });
        });        
    }

}