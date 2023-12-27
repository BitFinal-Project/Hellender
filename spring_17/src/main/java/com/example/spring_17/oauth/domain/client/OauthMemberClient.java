package com.example.spring_17.oauth.domain.client;

import com.example.spring_17.oauth.domain.OauthMember;
import com.example.spring_17.oauth.domain.OauthServerType;

public interface OauthMemberClient {

    OauthServerType supportServer();

    OauthMember fetch(String code);
}
