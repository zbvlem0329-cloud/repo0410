package com.kh.repo0410.popular.dto.response;

import com.kh.repo0410.popular.entity.PopularEntity;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class PopularResponseDto {

    private Long id;
    private String topic;
    private String name;
    private LocalDateTime createdAt ;
    private LocalDateTime modifiedAt;

    public static PopularResponseDto from(PopularEntity entity) {
        return PopularResponseDto.builder()
                .id(entity.getId())
                .topic(entity.getTopic())
                .name(entity.getName())
                .createdAt(entity.getCreatedAt())
                .modifiedAt(entity.getModifiedAt())
                .build();
    }
}