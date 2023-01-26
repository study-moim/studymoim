package com.ssafy.peace.entity.key;

import com.ssafy.peace.entity.Lecture;
import com.ssafy.peace.entity.User;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class NoteId implements Serializable {

    private User user;

    private Lecture lecture;
}
