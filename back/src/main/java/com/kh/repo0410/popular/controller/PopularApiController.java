package com.kh.repo0410.popular.controller;

import com.kh.repo0410.popular.dto.request.PopularRequestDto;
import com.kh.repo0410.popular.dto.response.PopularResponseDto;
import com.kh.repo0410.popular.service.PopularService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pop")
@RequiredArgsConstructor
@CrossOrigin
@Slf4j
public class PopularApiController {

    private final PopularService popularService;


    @PostMapping
    public ResponseEntity<PopularResponseDto> save(@RequestBody PopularRequestDto requestDto) {
        PopularResponseDto responseDto = popularService.save(requestDto);
        return ResponseEntity.status(HttpStatus.OK).body(responseDto);
    }

    @GetMapping
    public ResponseEntity<List<PopularResponseDto>> findAll() {
        List<PopularResponseDto> voList = popularService.findAll();
        return ResponseEntity.status(200).body(voList);
    }


    @GetMapping("{id}")
    public ResponseEntity<PopularResponseDto> findById(@PathVariable long id) {
        PopularResponseDto responseDto = popularService.findById(id);
        return ResponseEntity.status(200).body(responseDto);
    }
    @PutMapping("{id}")
    public ResponseEntity<PopularResponseDto> updateById(@PathVariable Long id  , @RequestBody PopularRequestDto requestDto){
        PopularResponseDto responseDto =popularService.updateById(id,requestDto);
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(responseDto);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> delete(@PathVariable Long id){
        popularService.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();

    }









}
