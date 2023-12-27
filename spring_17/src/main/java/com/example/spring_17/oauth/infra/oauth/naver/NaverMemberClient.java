package com.example.spring_17.oauth.infra.oauth.naver;

import lombok.RequiredArgsConstructor;
import com.example.spring_17.oauth.domain.OauthMember;
import com.example.spring_17.oauth.domain.OauthServerType;
import com.example.spring_17.oauth.domain.client.OauthMemberClient;
import com.example.spring_17.oauth.infra.oauth.naver.client.NaverApiClient;
import com.example.spring_17.oauth.infra.oauth.naver.dto.NaverMemberResponse;
import com.example.spring_17.oauth.infra.oauth.naver.dto.NaverToken;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

@Component
@RequiredArgsConstructor
public class NaverMemberClient implements OauthMemberClient {

    private final NaverApiClient naverApiClient;
    private final NaverOauthConfig naverOauthConfig;

    @Override
    public OauthServerType supportServer() {
        return OauthServerType.NAVER;
    }

    @Override
    public OauthMember fetch(String authCode) {
        NaverToken tokenInfo = naverApiClient.fetchToken(tokenRequestParams(authCode));
        NaverMemberResponse naverMemberResponse = naverApiClient.fetchMember("Bearer " + tokenInfo.accessToken());
        return naverMemberResponse.toDomain();
    }

    private MultiValueMap<String, String> tokenRequestParams(String authCode) {
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", naverOauthConfig.clientId());
        params.add("client_secret", naverOauthConfig.clientSecret());
        params.add("code", authCode);
        params.add("state", naverOauthConfig.state());
        return params;
    }
}
