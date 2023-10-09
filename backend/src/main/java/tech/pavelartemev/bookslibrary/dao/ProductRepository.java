package tech.pavelartemev.bookslibrary.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.pavelartemev.bookslibrary.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
