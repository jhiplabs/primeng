package com.bhsoft.ecomab.repository.search;

import com.bhsoft.ecomab.domain.WishList;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the WishList entity.
 */
public interface WishListSearchRepository extends ElasticsearchRepository<WishList, Long> {
}
