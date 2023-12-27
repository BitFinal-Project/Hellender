package com.example.spring_17.oauth.repository;

import com.example.spring_17.oauth.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> {

    @Modifying
    @Transactional
    /* BMI_Value값을 변경하는 쿼리*/
    //@Query("UPDATE Member m SET m.BMI_Value = (SELECT m.Weight / (m.Height * m.Height) FROM Member m WHERE m.Uid = :uid)")
    @Query("UPDATE Member SET BMI_Value = (Weight / (Height * Height)) WHERE Uid = :uid")
    void updateBmiValueByUid(Integer uid);

    @Modifying
    @Transactional
    @Query("UPDATE Member SET b_one = BMI_Value WHERE Uid = :uid")
    void update_BmiOne(Integer uid);

    @Modifying
    @Transactional
    @Query("UPDATE Member SET b_two = b_one WHERE Uid = :uid")
    void update_BmiTwo(Integer uid);

    @Modifying
    @Transactional
    @Query("UPDATE Member SET b_three = b_two WHERE Uid = :uid")
    void update_BmiThree(Integer uid);

    @Modifying
    @Transactional
    @Query("UPDATE Member SET b_four = b_three WHERE Uid = :uid")
    void update_BmiFour(Integer uid);

    @Modifying
    @Transactional
    @Query("UPDATE Member SET b_five = b_four WHERE Uid = :uid")
    void update_BmiFive(Integer uid);

    @Modifying
    @Transactional
    @Query("UPDATE Member SET b_six = b_five WHERE Uid = :uid")
    void update_BmiSix(Integer uid);

    @Modifying
    @Transactional
    @Query("UPDATE Member SET nickname_m = (SELECT nickname FROM OauthMember WHERE Uid = :uid)")
    void Nickname(Integer uid);

    @Modifying
    @Transactional
    @Query("UPDATE Member SET profile_image = (SELECT profileImageUrl FROM OauthMember WHERE Uid = :uid)")
    void profile(Integer uid);

}
