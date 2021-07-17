import * as dotenv from "dotenv";
import Fetcher from "./ports/Fetcher";
import Saver from "./ports/Saver";
import MongoSaver from "./adapters/MongoSaver";
import MySqlFetcher from './adapters/MySqlFecher';
import ETL from './useCases/etl';

dotenv.config();

const fetcher: Fetcher = new MySqlFetcher();
const saver: Saver = new MongoSaver();

const etl: ETL = new ETL(fetcher, saver);

etl.exec();