---
sidebar_position: 3
---

# 사용자 API

## 메인화면

### 잔여 횟수/시간

---

1. 요청 정보 [HTTP]

```http
GET /member/remain HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZW1iZXIiLCJzY29wZSI6Ik1FTUJFUiIsImlzcyI6Im5vbWFkbGFiIiwiZXhwIjoxNzEwMjMxMzgxLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIn0.7DlZwMtUYN6QOg2K8KrQ30BHJiilqWQFf7t6Kf_JdCA
Host: localhost:8080

```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 443

{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"dong":"101","ho":"2103","limitType":"NONE","remainTime":0,"remainCount":0}
```

4. 응답 정보 [Body]

```json
{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"dong":"101","ho":"2103","limitType":"NONE","remainTime":0,"remainCount":0}
```

5. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 인덱스
`dong` | `String` | 동
`ho` | `String` | 호
`limitType` | `String` | 제한 타입
`remainTime` | `Number` | 잔여 시간(분 단위)
`remainCount` | `Number` | 잔여 횟수
`apartment.id` | `Number` | 아파트 인덱스
`apartment.name` | `String` | 이름
`apartment.region1DepthName` | `String` | 고객사 지역명 1
`apartment.region2DepthName` | `String` | 고객사 지역명 2
`apartment.region3DepthName` | `String` | 고객사 지역명 3
`apartment.roadName` | `String` | 도로명
`apartment.address` | `String` | 주소
`apartment.zoneNo` | `String` | 우편번호
`apartment.limitType` | `String` | 제한 타입
`apartment.limitTime` | `Number` | 제한 시간(분 단위)
`apartment.limitCount` | `Number` | 제한 횟수
`apartment.networkCheckSecond` | `Number` | 네트워크 체크 시간(초 단위)
`apartment.officetel` | `Boolean` | 오피스텔 여부
`apartment.villa` | `Boolean` | 빌라 여부
`apartment.qna` | `Boolean` | qna 사용 여부
`apartment.notice` | `Boolean` | 공지 사용 여부
`apartment.faq` | `Boolean` | faq 사용 여부

6. CURL

```bash
$ curl 'http://localhost:8080/member/remain' -i -X GET \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZW1iZXIiLCJzY29wZSI6Ik1FTUJFUiIsImlzcyI6Im5vbWFkbGFiIiwiZXhwIjoxNzEwMjMxMzgxLCJ0eXBlIjoiQUNDRVNTX1RPS0VOIn0.7DlZwMtUYN6QOg2K8KrQ30BHJiilqWQFf7t6Kf_JdCA'
```

### 세대 차량

---

1. 요청 정보 [HTTP]

```http
GET /member/unit/vehicle HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZW1iZXIiLCJzY29wZSI6Ik1FTUJFUiIsImlzcyI6Im5vbWFkbGFiIiwiZXhwIjoxNzEwMjMxNDA2LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIn0.RXkuFBTvJ20VRXOKbRMIrPuoyEE_yHvFKbcKtdqNUv0
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 87

[{"member":{"id":2,"userId":"member"},"vehicleNumber":"128거1253","status":"CONFIRM"}]
```

4. 응답 정보 [Body]

```json
[{"member":{"id":2,"userId":"member"},"vehicleNumber":"128거1253","status":"CONFIRM"}]
```

5. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`[].member.id` | `Number` | 사용자 인덱스
`[].member.userId` | `String` | 사용자 아이디
`[].vehicleNumber` | `String` | 차량번호
`[].status` | `String` | 세대 차량 등록 상태


6. CURL

```bash
$ curl 'http://localhost:8080/member/unit/vehicle' -i -X GET \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtZW1iZXIiLCJzY29wZSI6Ik1FTUJFUiIsImlzcyI6Im5vbWFkbGFiIiwiZXhwIjoxNzEwMjMxNDA2LCJ0eXBlIjoiQUNDRVNTX1RPS0VOIn0.RXkuFBTvJ20VRXOKbRMIrPuoyEE_yHvFKbcKtdqNUv0'
```
