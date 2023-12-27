package com.example.spring_17.oauth.domain.authcode;

import com.example.spring_17.oauth.domain.OauthServerType;

public interface AuthCodeRequestUrlProvider {

    OauthServerType supportServer();

    String provide();
}
