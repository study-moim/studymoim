package com.ssafy.peace.service;

import com.ssafy.peace.dto.FreeBoardDto;
import com.ssafy.peace.entity.FreeBoard;
import com.ssafy.peace.entity.User;
import com.ssafy.peace.repository.FreeBoardRepository;
import com.ssafy.peace.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import javax.persistence.PersistenceException;
import javax.persistence.RollbackException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FreeBoardService {

    private final FreeBoardRepository freeBoardRepository;
    private final UserRepository userRepository;
    @Transactional
    public List<FreeBoardDto.Detail> getFreeBoardList() throws RollbackException {
        return freeBoardRepository.findAllByIsDeletedIsFalse().stream()
                .map(FreeBoardDto.Detail::fromEntity)
                .collect(Collectors.toList());
    }

    @Transactional
    public FreeBoardDto.Info writeFree(FreeBoardDto.Write freeBoard) throws RollbackException  {
        User user = userRepository.findById(freeBoard.getUserId()).get();
        return FreeBoardDto.Info.fromEntity(freeBoardRepository.save(FreeBoard.builder()
                .title(freeBoard.getTitle())
                .content(freeBoard.getContent())
                .user(user)
                .build()));
    }

}
