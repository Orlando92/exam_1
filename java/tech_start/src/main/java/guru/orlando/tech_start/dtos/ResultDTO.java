package guru.orlando.tech_start.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ResultDTO {
	
	private int invoice_number;
	private String purchase_date;
	private String distributor_name;
	private String distributor_address;
	private String customer_name;
	private String customer_address;
	private String manufacturer_name;
	private String manufacturer_address;
	private int product_code;
	private String product_description;
	private String unit_of_measure;
	private int purchased_qty; 
	private float purchased_weight;
	private float unit_price;
	private float total_price;	
	
}
