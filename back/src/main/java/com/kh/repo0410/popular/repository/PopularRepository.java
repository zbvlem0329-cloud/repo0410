package com.kh.repo0410.popular.repository;

import com.kh.repo0410.popular.entity.PopularEntity;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
@RequiredArgsConstructor
public class PopularRepository {
    private final EntityManager em;


    // 저장
    public PopularEntity save(PopularEntity entity) {
        if (entity.getId() == null) {
            em.persist(entity); // insert
            return entity;
        } else {
            return em.merge(entity); // update
        }
    }

    // 전체 조회
    public List<PopularEntity> findAll() {
        return em.createQuery("select p from PopularEntity p where p.delYn='N' order by p.id desc", PopularEntity.class)
                .getResultList();
    }

    // 단건 조회
    public PopularEntity findById(Long id) {
        String jpql = """
                select p from PopularEntity p
                where p.delYn='N'
                and p.id = :id
                """;
        return em.createQuery(jpql,PopularEntity.class)
                .setParameter("id",id)
                .getSingleResult();
    }





}
