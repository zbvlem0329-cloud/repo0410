package com.kh.repo0410.popular.dto.request;
import com.kh.repo0410.popular.entity.PopularEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor
public class PopularRequestDto {

    private String topic;
    private String name;

    // DTO → Entity 변환
    public PopularEntity toEntity() {
        return PopularEntity.builder()
                .topic(topic)
                .name(name)
                .build();
    }
}