package com.example.spring_17.oauth.controller;

import com.example.spring_17.oauth.entity.Member;
import com.example.spring_17.oauth.service.MemberService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@AllArgsConstructor
@RequestMapping("bit/members")
public class MemberController {

    private MemberService memberService;

    // build create member REST API
    @PostMapping
    public ResponseEntity<Member> createMember(@RequestBody Member member) {
        Member saveMember = memberService.createMember(member);
        return new ResponseEntity<>(saveMember, HttpStatus.CREATED);
    }

    // build get user by Uid REST API
    // http://localhost:8080/bit/members/1
    @GetMapping("/{Uid}")
    public ResponseEntity<Member> getMemberById(@PathVariable("Uid") Integer memberUId) {
        Member member = memberService.getMemberById(memberUId);
        return new ResponseEntity<>(member, HttpStatus.OK);
    }

    // Build Get All Members REST API
    @GetMapping
    public ResponseEntity<List<Member>> getAllMembers() {
        List<Member> members = memberService.getAllMembers();
        return new ResponseEntity<>(members, HttpStatus.OK);
    }

    // Build Update Member REST API
    // http://localhost:8080/bit/members/1
    @PutMapping("{Uid}")
    public ResponseEntity<Member> updateMember(@PathVariable("Uid") Integer memberUid, @RequestBody Member member) {
        member.setUid(memberUid);
        Member updateMember = memberService.updateMember(member);
        return new ResponseEntity<>(updateMember, HttpStatus.OK);
    }

    // http://localhost:8080/bit/members/cal/1
    @PutMapping("/cal/{Uid}")
    public ResponseEntity<Member> calupdateMember(@PathVariable("Uid") Integer memberUid, @RequestBody Member member) {
        member.setUid(memberUid);
        Member calupdateMember = memberService.calupdateMember(member);
        return new ResponseEntity<>(calupdateMember, HttpStatus.OK);
    }

    // http://localhost:8080/bit/members/weight/1
    @PutMapping("/weight/{Uid}")
    public ResponseEntity<Member> weightupdateMember(@PathVariable("Uid") Integer memberUid, @RequestBody Member member) {
        member.setUid(memberUid);
        Member weightupdateMember = memberService.weightupdateMember(member);
        return new ResponseEntity<>(weightupdateMember, HttpStatus.OK);
    }

    // Build Delete Member REST API
    // http://localhost:8080/bit/members/1
    @DeleteMapping("{Uid}")
    public ResponseEntity<String> deleteMember(@PathVariable("Uid") Integer memberUId) {
        memberService.deleteMember(memberUId);
        return new ResponseEntity<>("Member successfully deleted!", HttpStatus.OK);
    }
}
