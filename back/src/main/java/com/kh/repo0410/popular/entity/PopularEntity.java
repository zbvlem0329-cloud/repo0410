package com.kh.repo0410.popular.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "POPULAR")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
public class PopularEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE , generator = "popular_seq_gen")
    @SequenceGenerator(name = "popular_seq_gen" , sequenceName = "SEQ_POPULAR", allocationSize = 1)
    private Long id;

    @Column(nullable = false, length = 100)
    private String topic;

    @Column(nullable = false, length = 50)
    private String name;

    @Builder.Default
    private LocalDateTime createdAt = LocalDateTime.now();

    private LocalDateTime modifiedAt;

    @Builder.Default
    @Column(length = 1, nullable = false)
    private String delYn = "N";

    public void change(String topic, String name) {
        this.topic = topic;
        this.name = name;
        this.modifiedAt = LocalDateTime.now();
    }

    public void delete() {
        delYn = "Y";
        modifiedAt=LocalDateTime.now();
    }
}