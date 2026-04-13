package com.kh.repo0410.popular.service;

import com.kh.repo0410.popular.dto.request.PopularRequestDto;
import com.kh.repo0410.popular.dto.response.PopularResponseDto;
import com.kh.repo0410.popular.entity.PopularEntity;
import com.kh.repo0410.popular.repository.PopularRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PopularService {

    private final PopularRepository popularRepository;

    @Transactional
    public PopularResponseDto save(PopularRequestDto requestDto) {
        PopularEntity entity = requestDto.toEntity();
        PopularEntity saved = popularRepository.save(entity);
        return PopularResponseDto.from(saved);
    }

    // 전체 조회
    public List<PopularResponseDto> findAll() {
        return popularRepository.findAll()
                .stream()
                .map(PopularResponseDto::from)
                .toList();
    }

    // 단건 조회
    public PopularResponseDto findById(Long id) {
        PopularEntity entity = popularRepository.findById(id);

        return PopularResponseDto.from(entity);
    }

    @Transactional
    public PopularResponseDto updateById(Long id, PopularRequestDto requestDto) {
        PopularEntity entity = popularRepository.findById(id);

        entity.change(requestDto.getTopic(), requestDto.getName());

        return PopularResponseDto.from(entity);
    }

    @Transactional
    public void deleteById(Long id) {
        PopularEntity entity =popularRepository.findById(id);
        entity.delete();
    }

}
