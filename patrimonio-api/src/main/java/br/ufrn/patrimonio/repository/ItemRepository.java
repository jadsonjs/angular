/*
 * Universidade Federal do Rio Grande do Norte - UFRN
 * Superintendencia de Informatica - SINFO
 */
package br.ufrn.patrimonio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ufrn.patrimonio.model.Item;

/**
 * TODO comente-me
 * @author jadson santos - jadson@info.ufrn.br
 *
 */
public interface ItemRepository extends JpaRepository<Item, Long>{

}
