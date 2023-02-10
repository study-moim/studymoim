package com.ssafy.peace.service;

import com.ssafy.peace.entity.Curriculum;
import com.ssafy.peace.repository.StudyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class HistoryService {

    private final StudyRepository studyRepository;
    
    public void studyCourseHistory(Integer studyId){
        List<Curriculum> curricula = studyRepository.findById(studyId).get().getCurricula();
        List<Object> result = new ArrayList<>();
        for (Curriculum curriculum : curricula) {
            Map<String, Object> progress = new HashMap<>();
            progress.put("study", )


        }
    }
}
