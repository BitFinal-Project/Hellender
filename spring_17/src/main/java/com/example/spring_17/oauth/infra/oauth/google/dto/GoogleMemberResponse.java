package com.example.spring_17.oauth.infra.oauth.google.dto;

import static com.example.spring_17.oauth.domain.OauthServerType.GOOGLE;

import com.fasterxml.jackson.databind.PropertyNamingStrategies.SnakeCaseStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.example.spring_17.oauth.domain.OauthId;
import com.example.spring_17.oauth.domain.OauthMember;

@JsonNaming(value = SnakeCaseStrategy.class)
public record GoogleMemberResponse(
        String id,
        String name,
        String givenName,
        String picture,
        String locale
) {

    public OauthMember toDomain() {
        return OauthMember.builder()
                .oauthId(new OauthId(id, GOOGLE))
                .nickname(givenName)
                .profileImageUrl(picture)
                .build();
    }
}
