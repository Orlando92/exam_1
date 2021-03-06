package guru.orlando.tech_start.adapters;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import guru.orlando.tech_start.dtos.ResultDTO;
import guru.orlando.tech_start.ports.Saver;

@Component
public class MongoSaver implements Saver{
	
	@Autowired
	MongoTemplate template;
	
	@Override
	public void save(List<ResultDTO> results) {		
		results.forEach(result -> {
			template.save(result, "invoices");
		});		
	}

}
