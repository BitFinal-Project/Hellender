package com.example.spring_17.oauth.service.impl;

import com.example.spring_17.oauth.entity.Member;
import com.example.spring_17.oauth.repository.MemberRepository;
import com.example.spring_17.oauth.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberServiceImpl implements MemberService{

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public Member createMember(Member member) {
        return memberRepository.save(member);
    }

    @Override
    public Member getMemberById(Integer memberUid) {
        Optional<Member> optionalMember = memberRepository.findById(memberUid);
        return optionalMember.get();
    }

    @Override
    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    @Override
    public Member updateMember(Member member) {
        Member existingMember = memberRepository.findById(member.getUid()).get();

        //existingMember.setGender(member.getGender());
        //existingMember.setBirthday(member.getBirthday());
        existingMember.setHealth_Level(member.getHealth_Level());
        existingMember.setFlavor(member.getFlavor());
        existingMember.setPurpose(member.getPurpose());
        existingMember.setHealth_Time(member.getHealth_Time());
        existingMember.setHealth_Num(member.getHealth_Num());
        existingMember.setLocation_Num(member.getLocation_Num());
        existingMember.setEtc_Hist(member.getEtc_Hist());
        existingMember.setWeight(member.getWeight());
        existingMember.setHeight(member.getHeight());
        Member updateMember = memberRepository.save(existingMember);
        //bmi_value 업데이트 코드 추가
        memberRepository.updateBmiValueByUid(member.getUid());
        memberRepository.Nickname(member.getUid());
        memberRepository.profile(member.getUid());

        return updateMember;
    }

    @Override
    public Member calupdateMember(Member member) {
        Member existingMember = memberRepository.findById(member.getUid()).get();

        //existingMember.setHeight(member.getHeight());
        existingMember.setExercise(member.getExercise());
        existingMember.setFood(member.getFood());
        existingMember.setFeel(member.getFeel());
        //existingMember.setWeight(member.getWeight());
        //existingMember.setBMI_Value(member.getBMI_Value());
        Member calupdateMember = memberRepository.save(existingMember);
        //bmi_value 업데이트 코드 추가
        //bmi_value 업데이트 코드 추가
        //memberRepository.update_BmiSix(member.getUid());
        //memberRepository.update_BmiFive(member.getUid());
        //memberRepository.update_BmiFour(member.getUid());
        //memberRepository.update_BmiThree(member.getUid());
        //memberRepository.update_BmiTwo(member.getUid());
        //memberRepository.update_BmiOne(member.getUid());
        //memberRepository.updateBmiValueByUid(member.getUid());

        return calupdateMember;
    }

    @Override
    public Member weightupdateMember(Member member) {
        Member existingMember = memberRepository.findById(member.getUid()).get();

        //existingMember.setHeight(member.getHeight());
        //existingMember.setExercise(member.getExercise());
        //existingMember.setFood(member.getFood());
        //existingMember.setFeel(member.getFeel());
        existingMember.setWeight(member.getWeight());
        //existingMember.setBMI_Value(member.getBMI_Value());
        Member calupdateMember = memberRepository.save(existingMember);
        //bmi_value 업데이트 코드 추가
        memberRepository.update_BmiSix(member.getUid());
        memberRepository.update_BmiFive(member.getUid());
        memberRepository.update_BmiFour(member.getUid());
        memberRepository.update_BmiThree(member.getUid());
        memberRepository.update_BmiTwo(member.getUid());
        memberRepository.update_BmiOne(member.getUid());
        memberRepository.updateBmiValueByUid(member.getUid());

        return calupdateMember;
    }

    @Override
    public void deleteMember(Integer memberUid) {
        memberRepository.deleteById(memberUid);
    }
}
