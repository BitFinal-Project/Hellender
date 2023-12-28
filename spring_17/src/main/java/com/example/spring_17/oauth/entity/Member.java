package com.example.spring_17.oauth.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Data
@Entity
@Table(name = "member")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Uid;

    @Column(nullable = true)
    private String profile_image;

    @Column(nullable = true)
    private String nickname_m;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false)
    private Date Birthday;

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

}
