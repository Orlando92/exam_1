import Fetcher from "src/ports/Fetcher";

export default class Report {

    constructor(private fetcher: Fetcher) {

    }

    exec(groupOption): Promise<any>{
        return this.fetcher.fetch(groupOption);
    }


}