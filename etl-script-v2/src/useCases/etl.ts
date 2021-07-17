import Fetcher from "src/ports/Fetcher";
import Saver from "src/ports/Saver";

export default class ETL {

    constructor(private fetcher: Fetcher, private saver: Saver) {

    }

    exec(): void{
        this.fetcher.fetch()
            .then(result => this.saver.save(result))
            .then(result => console.log(result))
            .catch(err => console.error(err));
    }


}