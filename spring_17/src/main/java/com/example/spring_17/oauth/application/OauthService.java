package com.example.spring_17.oauth.application;

import com.example.spring_17.oauth.entity.Member;
import lombok.RequiredArgsConstructor;
import com.example.spring_17.oauth.domain.OauthMember;
import com.example.spring_17.oauth.domain.OauthMemberRepository;
import com.example.spring_17.oauth.domain.OauthServerType;
import com.example.spring_17.oauth.domain.authcode.AuthCodeRequestUrlProviderComposite;
import com.example.spring_17.oauth.domain.client.OauthMemberClientComposite;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OauthService {

    private final AuthCodeRequestUrlProviderComposite authCodeRequestUrlProviderComposite;
    private final OauthMemberClientComposite oauthMemberClientComposite;
    private final OauthMemberRepository oauthMemberRepository;

    public String getAuthCodeRequestUrl(OauthServerType oauthServerType) {
        return authCodeRequestUrlProviderComposite.provide(oauthServerType);
    }

    public Long login(OauthServerType oauthServerType, String authCode) {
        OauthMember oauthMember = oauthMemberClientComposite.fetch(oauthServerType, authCode);
        OauthMember saved = oauthMemberRepository.findByOauthId(oauthMember.oauthId())
                .orElseGet(() -> oauthMemberRepository.save(oauthMember));
        return saved.id();
    }

    //23.12.19

}
