package guru.orlando.tech_start.usecases;

import java.util.List;

import guru.orlando.tech_start.dtos.ResultDTO;
import guru.orlando.tech_start.ports.Fetcher;
import guru.orlando.tech_start.ports.Saver;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@AllArgsConstructor
@Slf4j
public class ETL {
	
	private Fetcher fetcher;
	private Saver saver;
	
	public void exec(){
		List<ResultDTO> results = fetcher.fetch();
		saver.save(results);
		log.info("COMPLETED!");
	}
	
}
