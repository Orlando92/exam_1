package guru.orlando.tech_start.ports;

import java.util.List;

import guru.orlando.tech_start.dtos.ResultDTO;

public interface Saver {
	
	void save(List<ResultDTO> results);

}
