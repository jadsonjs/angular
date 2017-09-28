/*
 * Universidade Federal do Rio Grande do Norte - UFRN
 * Superintendencia de Informatica - SINFO
 */
package br.ufrn.patrimonio.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.ufrn.patrimonio.model.Item;
import br.ufrn.patrimonio.repository.ItemRepository;

/**
 * First Rest Controller
 * @author jadson santos - jadson@info.ufrn.br
 *
 */
@RestController
//@CrossOrigin("origem-permitida")  
@CrossOrigin(origins = "http://localhost:4200") // allow access or application form other adresses
public class ItemResource {

	@Autowired
	ItemRepository itemRepository;
	
	@GetMapping("/itens")
	public List<Item> listar() {
		return itemRepository.findAll();
	}
	
	/**
	 * @RequestBody = convert the body of the post to item object
	 * @Valid = valid information annotated with @NotEmpty
	 * 
	 * @param item
	 * @return
	 */
	@PostMapping(path="/item", consumes = MediaType.APPLICATION_JSON_VALUE)
	public Item adicionar(@RequestBody @Valid Item item) {
		return itemRepository.save(item);
	}
	
}


