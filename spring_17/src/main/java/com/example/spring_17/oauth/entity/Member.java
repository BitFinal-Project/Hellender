package com.example.spring_17.oauth.entity;

import com.example.spring_17.oauth.domain.OauthMember;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

//enum Gender
//{
//    MALE,
//    FEMALE
//}
//
//enum Health_Level
//{
//    Low,
//    Middle,
//    High
//}
//
//enum Flavor
//{
//    Aerobic_exercise,
//    Strength_training,
//    Flexibility_improvement,
//    Improved_balance_and_stability,
//    Physical_Activity_and_Leisure_Sports
//}
//
//enum Purpose
//{
//    Weight_loss,
//    Muscle_strengthening,
//    Stress_relief,
//    Hobby,
//    Health
//}
//
//enum Health_Time
//{
//    About_30_minutes,
//    Thirty_minutes_to_an_hour,
//    One_hour_to_one_hour_thirty_minutes,
//    One_hour_and_thirty_minutes_to_two_hours,
//    More_than_two_hours
//}
//
//enum Health_Num
//{
//    One_time,
//    Two_time,
//    Three_time,
//    Four_time,
//    Five_or_moretimes
//}
//
//enum Location_Num
//{
//    Indoor,
//    Outside
//}

@Data
@Entity
@Table(name = "member")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Uid;

    //@Column(nullable = false, unique = true)
    //private Integer Email_Id;

    //@Column(nullable = false)
    //private Integer Password;

    //@Column(nullable = false)
    //private Integer Name;

    @Column(nullable = true)
    private String profile_image;

    @Column(nullable = true)
    private String nickname_m;

    @Column(nullable = false)
    private String gender; // Gender 타입

    @Column(nullable = false)
    private Date Birthday;

//    @Column(nullable = false)
//    private Integer Token;

//    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JoinColumn(name = "Health_Id", nullable = false)
//    private Health health;
//
//    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JoinColumn(name = "Cal_Id", nullable = false)
//    private Calender calender;

    @Column(nullable = true)
    private String health_Level;

    @Column(nullable = true)
    private String flavor;

    @Column(nullable = true)
    private String purpose;

    @Column(nullable = true)
    private String health_Time;

    @Column(nullable = true)
    private String health_Num;

    @Column(nullable = true)
    private String location_Num;

    @Column(nullable = true)
    private String Etc_Hist;

    @Column(nullable = true)
    private Double Weight;

    @Column(nullable = true)
    private Double Height;

    @Column(nullable = true)
    private String Exercise;

    @Column(nullable = true)
    private String Food;

    @Column(nullable = true)
    private String Feel;

    @Column(nullable = true)
    @Temporal(TemporalType.DATE)
    private Date Cre_Date = new Date();

    @Column(nullable = true)
    private Double BMI_Value;

    @Column(nullable = true)
    private Double b_one;

    @Column(nullable = true)
    private Double b_two;

    @Column(nullable = true)
    private Double b_three;

    @Column(nullable = true)
    private Double b_four;

    @Column(nullable = true)
    private Double b_five;

    @Column(nullable = true)
    private Double b_six;

//    // 추가된 코드
//    // Weight와 Height 값이 수정될 때마다 BMI_Value 값을 계산하고 업데이트하는 메소드
//    public void updateBMI() {
//        // BMI = Weight / (Height * Height) 공식을 사용하여 BMI 값을 계산한다.
//        // Height는 미터 단위로 변환한다. (1 m = 100 cm)
//        this.BMI_Value = this.Weight / ( (this.Height / 100) * (this.Height / 100) );
//    }
//
//    // Weight의 setter 메소드를 오버라이드하여 Weight 값이 수정될 때마다 updateBMI() 메소드를 호출한다.
//    public void setWeight(Double weight) {
//        this.Weight = weight;
//        updateBMI();
//    }
//
//    // Height의 setter 메소드를 오버라이드하여 Height 값이 수정될 때마다 updateBMI() 메소드를 호출한다.
//    public void setHeight(Double height) {
//        this.Height = height;
//        updateBMI();
//    }
}
