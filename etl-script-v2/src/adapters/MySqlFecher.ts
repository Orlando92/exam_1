import Fetcher from "src/ports/Fetcher";
import mysql from "mysql2";

export default class MySqlFetcher implements Fetcher {

    db: mysql.Connection = null;

    constructor(){
        this.db = mysql.createConnection({
            host: process.env.MYSQL_HOST || 'localhost',
            user: process.env.MYSQL_USER || 'root',
            password: process.env.MYSQL_PASSWORD || '123456',
            database: process.env.MYSQL_DATABASE || 'tech_start'
          });
    }
    
    fetch(): Promise<any> {
        return new Promise((res, rej) => {
            this.db.query(this.query, (err, result) => {
                if(err) rej(err);
                res(result);
            });
        });
    }


    query =    `
                SELECT 	
                i.invoice_number, 
                i.purchase_date,
                ed.name as distributor_name,
                ed.address as distributor_address,
                ec.name as customer_name,
                ec.address as customer_address,
                em.name as manufacturer_name,
                em.address as manufacturer_address,
                p.code as product_code, 
                p.description as product_description,
                il.unit_of_measure, 
                il.qty as purchased_qty, 
                il.weight as purchased_weight,
                il.unit_price,
                il.unit_price * (
                                CASE il.unit_of_measure 
                                    WHEN 'CASE'
                                    THEN IFNULL(il.qty, 0)
                                    ELSE IFNULL(il.weight, 0)
                                END
                                ) AS total_price
                FROM 		invoice_line il 
                INNER JOIN 	invoice i
                ON			il.invoice_id = i.id
                INNER JOIN 	product p 
                ON 			il.product_id = p.id
                INNER JOIN 	customer c
                ON 			i.customer_id = c.id
                INNER JOIN 	entity ec
                ON 			c.id = ec.id
                INNER JOIN 	distributor d 
                ON 			i.distributor_id = d.id
                INNER JOIN 	entity ed
                ON 			d.id = ed.id
                INNER JOIN 	manufacturer m 
                ON 			p.manufacturer_id = m.id
                INNER JOIN 	entity em
                ON 			m.id = em.id;       
                `;

}