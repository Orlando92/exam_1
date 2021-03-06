package guru.orlando.tech_start;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import guru.orlando.tech_start.adapters.MongoSaver;
import guru.orlando.tech_start.adapters.MySQLFetcher;
import guru.orlando.tech_start.ports.Fetcher;
import guru.orlando.tech_start.ports.Saver;
import guru.orlando.tech_start.usecases.ETL;

@SpringBootApplication
public class TechStartApplication implements CommandLineRunner {

	@Autowired
	Fetcher fetcher;
	
	@Autowired
	Saver saver;
	
	public static void main(String[] args) {
		SpringApplication.run(TechStartApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		ETL etl = new ETL(fetcher, saver);
		etl.exec();
	}

}
