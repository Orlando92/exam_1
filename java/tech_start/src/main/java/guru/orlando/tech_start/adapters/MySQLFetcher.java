package guru.orlando.tech_start.adapters;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import guru.orlando.tech_start.dtos.ResultDTO;
import guru.orlando.tech_start.ports.Fetcher;

@Component
public class MySQLFetcher implements Fetcher {
	
	@Autowired
	JdbcTemplate template;
	
	@Override
	public List<ResultDTO> fetch() {
		return template.query(query, new RowMapper<ResultDTO>() {

			@Override
			public ResultDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
				return new ResultDTO(
						rs.getInt("invoice_number"), 
						rs.getString("purchase_date"), 
						rs.getString("distributor_name"), 
						rs.getString("distributor_address"), 
						rs.getString("customer_name"), 
						rs.getString("customer_address"), 
						rs.getString("manufacturer_name"),  
						rs.getString("manufacturer_address"),  
						rs.getInt("product_code"), 
						rs.getString("product_description"), 
						rs.getString("unit_of_measure"), 
						rs.getInt("purchased_qty"), 
						rs.getFloat("purchased_weight"), 
						rs.getFloat("unit_price"), 
						rs.getFloat("total_price"));
			}
			
		});
	}
	
	private String query = "SELECT 	"
			+ "                i.invoice_number, "
			+ "                i.purchase_date,"
			+ "                ed.name as distributor_name,"
			+ "                ed.address as distributor_address,"
			+ "                ec.name as customer_name,"
			+ "                ec.address as customer_address,"
			+ "                em.name as manufacturer_name,"
			+ "                em.address as manufacturer_address,"
			+ "                p.code as product_code, "
			+ "                p.description as product_description,"
			+ "                il.unit_of_measure, "
			+ "                il.qty as purchased_qty, "
			+ "                il.weight as purchased_weight,"
			+ "                il.unit_price,"
			+ "                il.unit_price * ( "
			+ "                                CASE il.unit_of_measure "
			+ "                                    WHEN 'CASE' "
			+ "                                    THEN IFNULL(il.qty, 0) "
			+ "                                    ELSE IFNULL(il.weight, 0) "
			+ "                                END "
			+ "                                ) AS total_price "
			+ "                FROM 		invoice_line il "
			+ "                INNER JOIN 	invoice i "
			+ "                ON			il.invoice_id = i.id "
			+ "                INNER JOIN 	product p "
			+ "                ON 			il.product_id = p.id "
			+ "                INNER JOIN 	customer c "
			+ "                ON 			i.customer_id = c.id "
			+ "                INNER JOIN 	entity ec "
			+ "                ON 			c.id = ec.id "
			+ "                INNER JOIN 	distributor d "
			+ "                ON 			i.distributor_id = d.id "
			+ "                INNER JOIN 	entity ed "
			+ "                ON 			d.id = ed.id "
			+ "                INNER JOIN 	manufacturer m "
			+ "                ON 			p.manufacturer_id = m.id "
			+ "                INNER JOIN 	entity em "
			+ "                ON 			m.id = em.id;       ";
	
	
	
}
