package com.example.spring_17.oauth.service;

import com.example.spring_17.oauth.entity.Member;

import java.util.List;
public interface MemberService {
    Member createMember(Member member);

    Member getMemberById(Integer memberUid);

    List<Member> getAllMembers();

    Member updateMember(Member member);
    Member calupdateMember(Member member);

    Member weightupdateMember(Member member);

    void deleteMember(Integer memberUid);
}
