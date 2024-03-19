---
sidebar_position: 1
---
# 관리자 API

## 아파트 관리 API

### List

---

1. 요청 정보 [HTTP]

```http
GET /apartment?page=0&size=1&sort=createDate%2Cdesc&sort=name%2Casc&name=%EA%B8%88%EA%B0%95&address=%ED%95%99%EC%9E%A5 HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTk2MjM3MywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.lByZSDlVKJZ__9vjgTgqVqnf44k_hCYqyJB9nW9-Llc
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보


3. 요청 정보 [Query Parameter]

Parameter | Description
--------- | -----------
`name` | 아파트 이름
`address` | 주소
`page` | 페이지
`size` | 한 페이지 리스트 갯수
`sort` | 정렬


4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 663

{"content":[{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true}],"pageable":{"pageNumber":0,"pageSize":1,"sort":{"empty":false,"unsorted":false,"sorted":true},"offset":0,"paged":true,"unpaged":false},"last":true,"totalElements":1,"totalPages":1,"first":true,"size":1,"number":0,"sort":{"empty":false,"unsorted":false,"sorted":true},"numberOfElements":1,"empty":false}
```

5. 응답 정보 [Body]

```json
{"content":[{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true}],"pageable":{"pageNumber":0,"pageSize":1,"sort":{"empty":false,"unsorted":false,"sorted":true},"offset":0,"paged":true,"unpaged":false},"last":true,"totalElements":1,"totalPages":1,"first":true,"size":1,"number":0,"sort":{"empty":false,"unsorted":false,"sorted":true},"numberOfElements":1,"empty":false}
```

6. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`content` | `Array` | 리스트
`content.[].id` | `Number` | 아이디
`content.[].name` | `String` | 이름
`content.[].region1DepthName` | `String` | 고객사 지역명 1
`content.[].region2DepthName` | `String` | 고객사 지역명 2
`content.[].region3DepthName` | `String` | 고객사 지역명 3
`content.[].roadName` | `String` | 도로명
`content.[].address` | `String` | 주소
`content.[].zoneNo` | `String` | 우편번호
`content.[].limitType` | `String` | 제한 타입
`content.[].limitTime` | `Number` | 제한 시간(분 단위)
`content.[].limitCount` | `Number` | 제한 횟수
`content.[].networkCheckSecond` | `Number` | 네트워크 체크 시간(초 단위)
`content.[].officetel` | `Boolean` | 오피스텔 여부
`content.[].villa` | `Boolean` | 빌라 여부
`content.[].qna` | `Boolean` | qna 사용 여부
`content.[].notice` | `Boolean` | 공지 사용 여부
`content.[].faq` | `Boolean` | faq 사용 여부
`pageable` | `Object` | 페이지 정보
`size` | `Number` | 한 페이지 리스트 개수
`totalElements` | `Number` | 리스트 총 사이즈
`totalPages` | `Number` | 총 페이지
`number` | `Number` | 현 페이지

7. CURL

```bash
$ curl 'http://localhost:8080/apartment?page=0&size=1&sort=createDate%2Cdesc&sort=name%2Casc&name=%EA%B8%88%EA%B0%95&address=%ED%95%99%EC%9E%A5' -i -X GET \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTk2MjM3MywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.lByZSDlVKJZ__9vjgTgqVqnf44k_hCYqyJB9nW9-Llc'
```

### Detail

---

1. 요청 정보 [HTTP]

```http
GET /apartment/1 HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MTExOCwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9._f9O4WalrTLhzx34ghTj26kKNNCnXy83YAjs3HNCfOY
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/apartment/{id}`

Parameter | Description
--------- | -----------
`id` | 아파트 인덱스

4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 347

{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true}
```

5. 응답 정보 [Body]

```json
{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true}
```

6. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 아이디
`name` | `String` | 이름
`region1DepthName` | `String` | 고객사 지역명 1
`region2DepthName` | `String` | 고객사 지역명 2
`region3DepthName` | `String` | 고객사 지역명 3
`roadName` | `String` | 도로명
`address` | `String` | 주소
`zoneNo` | `String` | 우편번호
`limitType` | `String` | 제한 타입
`limitTime` | `Number` | 제한 시간(분 단위)
`limitCount` | `Number` | 제한 횟수
`networkCheckSecond` | `Number` | 네트워크 체크 시간(초 단위)
`officetel` | `Boolean` | 오피스텔 여부
`villa` | `Boolean` | 빌라 여부
`qna` | `Boolean` | qna 사용 여부
`notice` | `Boolean` | 공지 사용 여부
`faq` | `Boolean` | faq 사용 여부

7. CURL

```bash
$ curl 'http://localhost:8080/apartment/1' -i -X GET \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MTExOCwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9._f9O4WalrTLhzx34ghTj26kKNNCnXy83YAjs3HNCfOY'
```



### Save

---

1. 요청 정보 [HTTP]

```http
POST /apartment HTTP/1.1
Content-Type: application/json;charset=UTF-8
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MTExNywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.4gSREaMeXMV-pQ70iF70O0aunIF9MsWXgfQqDW7h4Tk
Content-Length: 342
Host: localhost:8080

{"name":"금강아파트","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"학장동","roadName":"학장로","address":"부산 사상구 학장동","zoneNo":"49797","limitType":"NONE","limitTime":0,"limitCount":0,"networkCheckSecond":100,"officetel":false,"villa":false,"notice":false,"qna":false,"faq":false}
```

2. 요청 정보 [Header]

   Name | Description
   ---- | -----------
   `Authorization` | 토큰 정보

3. 요청 정보 [Body]

```json
{"name":"금강아파트","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"학장동","roadName":"학장로","address":"부산 사상구 학장동","zoneNo":"49797","limitType":"NONE","limitTime":0,"limitCount":0,"networkCheckSecond":100,"officetel":false,"villa":false,"notice":false,"qna":false,"faq":false}
```

4. 요청 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`name` | `String` | 이름
`region1DepthName` | `String` | 고객사 지역명 1
`region2DepthName` | `String` | 고객사 지역명 2
`region3DepthName` | `String` | 고객사 지역명 3
`roadName` | `String` | 도로명
`address` | `String` | 주소
`zoneNo` | `String` | 우편번호
`limitType` | `String` | 제한 타입
`limitTime` | `Number` | 제한 시간(분 단위)
`limitCount` | `Number` | 제한 횟수
`networkCheckSecond` | `Number` | 네트워크 체크 시간(초 단위)
`officetel` | `Boolean` | 오피스텔 여부
`villa` | `Boolean` | 빌라 여부
`qna` | `Boolean` | qna 사용 여부
`notice` | `Boolean` | 공지 사용 여부
`faq` | `Boolean` | faq 사용 여부


5. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 349

{"id":4,"name":"금강아파트","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"학장동","roadName":"학장로","address":"부산 사상구 학장동","zoneNo":"49797","limitType":"NONE","limitTime":0,"limitCount":0,"networkCheckSecond":100,"officetel":false,"villa":false,"notice":false,"qna":false,"faq":false}
```

6. 응답 정보 [Body]

```json
{"id":4,"name":"금강아파트","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"학장동","roadName":"학장로","address":"부산 사상구 학장동","zoneNo":"49797","limitType":"NONE","limitTime":0,"limitCount":0,"networkCheckSecond":100,"officetel":false,"villa":false,"notice":false,"qna":false,"faq":false}
```

7. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 아이디
`name` | `String` | 이름
`region1DepthName` | `String` | 고객사 지역명 1
`region2DepthName` | `String` | 고객사 지역명 2
`region3DepthName` | `String` | 고객사 지역명 3
`roadName` | `String` | 도로명
`address` | `String` | 주소
`zoneNo` | `String` | 우편번호
`limitType` | `String` | 제한 타입
`limitTime` | `Number` | 제한 시간(분 단위)
`limitCount` | `Number` | 제한 횟수
`networkCheckSecond` | `Number` | 네트워크 체크 시간(초 단위)
`officetel` | `Boolean` | 오피스텔 여부
`villa` | `Boolean` | 빌라 여부
`qna` | `Boolean` | qna 사용 여부
`notice` | `Boolean` | 공지 사용 여부
`faq` | `Boolean` | faq 사용 여부

8. CURL

```bash
$ curl 'http://localhost:8080/apartment' -i -X POST \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MTExNywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.4gSREaMeXMV-pQ70iF70O0aunIF9MsWXgfQqDW7h4Tk' \
    -d '{"name":"금강아파트","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"학장동","roadName":"학장로","address":"부산 사상구 학장동","zoneNo":"49797","limitType":"NONE","limitTime":0,"limitCount":0,"networkCheckSecond":100,"officetel":false,"villa":false,"notice":false,"qna":false,"faq":false}'
```



### Update

---

1. 요청 정보 [HTTP]

```http
PUT /apartment/2 HTTP/1.1
Content-Type: application/json;charset=UTF-8
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MTExNywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.4gSREaMeXMV-pQ70iF70O0aunIF9MsWXgfQqDW7h4Tk
Content-Length: 342
Host: localhost:8080

{"name":"금강아파트","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"학장동","roadName":"학장로","address":"부산 사상구 학장동","zoneNo":"49797","limitType":"NONE","limitTime":0,"limitCount":0,"networkCheckSecond":100,"officetel":false,"villa":false,"notice":false,"qna":false,"faq":false}
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/apartment/{id}`

Parameter | Description
--------- | -----------
`id` | 아파트 인덱스

4. 요청 정보 [Body]

```json
{"name":"금강아파트","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"학장동","roadName":"학장로","address":"부산 사상구 학장동","zoneNo":"49797","limitType":"NONE","limitTime":0,"limitCount":0,"networkCheckSecond":100,"officetel":false,"villa":false,"notice":false,"qna":false,"faq":false}
```

5. 요청 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`name` | `String` | 이름
`region1DepthName` | `String` | 고객사 지역명 1
`region2DepthName` | `String` | 고객사 지역명 2
`region3DepthName` | `String` | 고객사 지역명 3
`roadName` | `String` | 도로명
`address` | `String` | 주소
`zoneNo` | `String` | 우편번호
`limitType` | `String` | 제한 타입
`limitTime` | `Number` | 제한 시간(분 단위)
`limitCount` | `Number` | 제한 횟수
`networkCheckSecond` | `Number` | 네트워크 체크 시간(초 단위)
`officetel` | `Boolean` | 오피스텔 여부
`villa` | `Boolean` | 빌라 여부
`qna` | `Boolean` | qna 사용 여부
`notice` | `Boolean` | 공지 사용 여부
`faq` | `Boolean` | faq 사용 여부

6. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 349

{"id":2,"name":"금강아파트","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"학장동","roadName":"학장로","address":"부산 사상구 학장동","zoneNo":"49797","limitType":"NONE","limitTime":0,"limitCount":0,"networkCheckSecond":100,"officetel":false,"villa":false,"notice":false,"qna":false,"faq":false}
```

7. 응답 정보 [Body]

```json
{"id":2,"name":"금강아파트","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"학장동","roadName":"학장로","address":"부산 사상구 학장동","zoneNo":"49797","limitType":"NONE","limitTime":0,"limitCount":0,"networkCheckSecond":100,"officetel":false,"villa":false,"notice":false,"qna":false,"faq":false}
```

8. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 아이디
`name` | `String` | 이름
`region1DepthName` | `String` | 고객사 지역명 1
`region2DepthName` | `String` | 고객사 지역명 2
`region3DepthName` | `String` | 고객사 지역명 3
`roadName` | `String` | 도로명
`address` | `String` | 주소
`zoneNo` | `String` | 우편번호
`limitType` | `String` | 제한 타입
`limitTime` | `Number` | 제한 시간(분 단위)
`limitCount` | `Number` | 제한 횟수
`networkCheckSecond` | `Number` | 네트워크 체크 시간(초 단위)
`officetel` | `Boolean` | 오피스텔 여부
`villa` | `Boolean` | 빌라 여부
`qna` | `Boolean` | qna 사용 여부
`notice` | `Boolean` | 공지 사용 여부
`faq` | `Boolean` | faq 사용 여부

9. CURL

```bash
$ curl 'http://localhost:8080/apartment/2' -i -X PUT \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MTExNywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.4gSREaMeXMV-pQ70iF70O0aunIF9MsWXgfQqDW7h4Tk' \
    -d '{"name":"금강아파트","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"학장동","roadName":"학장로","address":"부산 사상구 학장동","zoneNo":"49797","limitType":"NONE","limitTime":0,"limitCount":0,"networkCheckSecond":100,"officetel":false,"villa":false,"notice":false,"qna":false,"faq":false}'
```



### Delete

---

1. 요청 정보 [HTTP]

```http
DELETE /apartment/3 HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MjU4NiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.LgK91CWisCRq98TybIQUy-GW0L0bWZRx-IVtSO7DugM
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/apartment/{id}`

Parameter | Description
--------- | -----------
`id` | 아파트 인덱스

4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
```

5. CURL

```bash
$ curl 'http://localhost:8080/apartment/3' -i -X DELETE \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MjU4NiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.LgK91CWisCRq98TybIQUy-GW0L0bWZRx-IVtSO7DugM'
```



## 세대 관리 API

### List

---

1. 요청 정보 [HTTP]

```http
```http
GET /apartment/unit?page=0&size=1&sort=createDate%2Cdesc&name=%ED%95%98%EB%8A%98%EC%B1%84&dong=101&ho=2 HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcxMDIyNDg0MSwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.7wL4BTXUDreG4QVZ2oaJ9Zo3hUYco0_DOGIfL_iu3Jg
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Query Parameter]

Parameter | Description
--------- | -----------
`name` | 아파트 이름
`dong` | 동
`ho` | 호
`page` | 페이지
`size` | 한 페이지 리스트 갯수
`sort` | 정렬


4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 759

{"content":[{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"dong":"101","ho":"2103","limitType":"NONE","remainTime":0,"remainCount":0}],"pageable":{"pageNumber":0,"pageSize":1,"sort":{"empty":false,"sorted":true,"unsorted":false},"offset":0,"paged":true,"unpaged":false},"last":true,"totalPages":1,"totalElements":1,"first":true,"size":1,"number":0,"sort":{"empty":false,"sorted":true,"unsorted":false},"numberOfElements":1,"empty":false}
```

5. 응답 정보 [Body]

```json
{"content":[{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"dong":"101","ho":"2103","limitType":"NONE","remainTime":0,"remainCount":0}],"pageable":{"pageNumber":0,"pageSize":1,"sort":{"empty":false,"sorted":true,"unsorted":false},"offset":0,"paged":true,"unpaged":false},"last":true,"totalPages":1,"totalElements":1,"first":true,"size":1,"number":0,"sort":{"empty":false,"sorted":true,"unsorted":false},"numberOfElements":1,"empty":false}
```

6. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`content` | `Array` | 리스트
`content.[].id` | `Number` | 인덱스
`content.[].dong` | `String` | 동
`content.[].ho` | `String` | 호
`content.[].limitType` | `String` | 제한 타입
`content.[].remainTime` | `Number` | 잔여 시간(분 단위)
`content.[].remainCount` | `Number` | 잔여 횟수
`content.[].apartment.id` | `Number` | 아파트 인덱스
`content.[].apartment.name` | `String` | 이름
`content.[].apartment.region1DepthName` | `String` | 고객사 지역명 1
`content.[].apartment.region2DepthName` | `String` | 고객사 지역명 2
`content.[].apartment.region3DepthName` | `String` | 고객사 지역명 3
`content.[].apartment.roadName` | `String` | 도로명
`content.[].apartment.address` | `String` | 주소
`content.[].apartment.zoneNo` | `String` | 우편번호
`content.[].apartment.limitType` | `String` | 제한 타입
`content.[].apartment.limitTime` | `Number` | 제한 시간(분 단위)
`content.[].apartment.limitCount` | `Number` | 제한 횟수
`content.[].apartment.networkCheckSecond` | `Number` | 네트워크 체크 시간(초 단위)
`content.[].apartment.officetel` | `Boolean` | 오피스텔 여부
`content.[].apartment.villa` | `Boolean` | 빌라 여부
`content.[].apartment.qna` | `Boolean` | qna 사용 여부
`content.[].apartment.notice` | `Boolean` | 공지 사용 여부
`content.[].apartment.faq` | `Boolean` | faq 사용 여부
`pageable` | `Object` | 페이지 정보
`size` | `Number` | 한 페이지 리스트 개수
`totalElements` | `Number` | 리스트 총 사이즈
`totalPages` | `Number` | 총 페이지
`number` | `Number` | 현 페이지 


7. CURL

```bash
$ curl 'http://localhost:8080/apartment/unit?page=0&size=1&sort=createDate%2Cdesc&name=%ED%95%98%EB%8A%98%EC%B1%84&dong=101&ho=2' -i -X GET \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTk2NTE1NiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.iMPRadkelhuKZ_yW3j9-JLlavcNhnZdQuxNs2VxKQ4Q'
```



### Detail

---

1. 요청 정보 [HTTP]

```http
GET /apartment/unit/1 HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MzI4MywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UYdPDv7xeuJah7p5IBY_NnxkkE4JZP57Ey4CoJUny4
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보


3. 요청 정보 [Path Parameter]

`/apartment/unit/{id}`

Parameter | Description
--------- | -----------
`id` | 세대 인덱스

4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 443

{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"dong":"101","ho":"2103","limitType":"NONE","remainTime":0,"remainCount":0}
```

5. 응답 정보 [Body]

```json
{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"dong":"101","ho":"2103","limitType":"NONE","remainTime":0,"remainCount":0}
```

6. 응답 정보 [Field]

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


7. CURL

```bash
$ curl 'http://localhost:8080/apartment/unit/1' -i -X GET \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MzI4MywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UYdPDv7xeuJah7p5IBY_NnxkkE4JZP57Ey4CoJUny4'
```



### Save

---

1. 요청 정보 [HTTP]

```http
POST /apartment/unit HTTP/1.1
Content-Type: application/json;charset=UTF-8
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MzI4MywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UYdPDv7xeuJah7p5IBY_NnxkkE4JZP57Ey4CoJUny4
Content-Length: 41
Host: localhost:8080

{"apartmentId":1,"dong":"105","ho":"603"}
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보


3. 요청 정보 [Body]

```json
{"apartmentId":1,"dong":"105","ho":"603"}
```

4. 요청 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`apartmentId` | `Number` | 아파트 인덱스
`dong` | `String` | 동
`ho` | `String` | 호

5. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 447

{"id":4,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"dong":"105","ho":"603","limitType":"COUNT","remainTime":null,"remainCount":10}
```

6. 응답 정보 [Body]

```json
{"id":4,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"dong":"105","ho":"603","limitType":"COUNT","remainTime":null,"remainCount":10}
```

7. 응답 정보 [Field]

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

8. CURL

```bash
$ curl 'http://localhost:8080/apartment/unit' -i -X POST \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MzI4MywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UYdPDv7xeuJah7p5IBY_NnxkkE4JZP57Ey4CoJUny4' \
    -d '{"apartmentId":1,"dong":"105","ho":"603"}'
```



### Update

---

1. 요청 정보 [HTTP]

```http
PUT /apartment/unit/2 HTTP/1.1
Content-Type: application/json;charset=UTF-8
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MzI4MywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UYdPDv7xeuJah7p5IBY_NnxkkE4JZP57Ey4CoJUny4
Content-Length: 25
Host: localhost:8080

{"dong":"105","ho":"603"}
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/apartment/unit/{id}`

Parameter | Description
--------- | -----------
`id` | 세대 인덱스

4. 요청 정보 [Body]

```json
{"dong":"105","ho":"603"}
```

5. 요청 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`dong` | `String` | 동
`ho` | `String` | 호

6. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 442

{"id":2,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"dong":"105","ho":"603","limitType":"NONE","remainTime":0,"remainCount":0}
```

7. 응답 정보 [Body]

```json
{"id":2,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"dong":"105","ho":"603","limitType":"NONE","remainTime":0,"remainCount":0}
```

8. 응답 정보 [Field]

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


9. CURL

```bash
$ curl 'http://localhost:8080/apartment/unit/2' -i -X PUT \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MzI4MywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UYdPDv7xeuJah7p5IBY_NnxkkE4JZP57Ey4CoJUny4' \
    -d '{"dong":"105","ho":"603"}'
```



### Delete

---

1. 요청 정보 [HTTP]

```http
DELETE /apartment/unit/3 HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MzI4MywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UYdPDv7xeuJah7p5IBY_NnxkkE4JZP57Ey4CoJUny4
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/apartment/unit/{id}`

Parameter | Description
--------- | -----------
`id` | 세대 인덱스

4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
```

5. CURL

```bash
$ curl 'http://localhost:8080/apartment/unit/3' -i -X DELETE \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5MzI4MywidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UYdPDv7xeuJah7p5IBY_NnxkkE4JZP57Ey4CoJUny4'
```

## 카메라 API

### List

---

1. 요청 정보 [HTTP]

```http
GET /device/camera?page=0&size=1&sort=createDate%2Cdesc&name=%ED%95%98%EB%8A%98%EC%B1%84 HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTk2NTE5NSwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.zvtkkOcquBiy_mPEFtH2S02-RkQPorn2aF4VtR3dtTw
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Query Parameter]

Parameter | Description
--------- | -----------
`name` | 아파트 이름
`page` | 페이지
`size` | 한 페이지 리스트 갯수
`sort` | 정렬


4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 917

{"content":[{"id":4,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"serialNumber":"J44608490","macAddress":"A1:B2:C3","modelName":"Good model","internalIp":"172.16.30.6","internalPort":7708,"externalIp":"213.22.8.15","externalPort":1105,"inOutType":"BOTH","adminId":"admin","adminPassword":"adminpw"}],"pageable":{"pageNumber":0,"pageSize":1,"sort":{"empty":false,"unsorted":false,"sorted":true},"offset":0,"paged":true,"unpaged":false},"last":true,"totalPages":1,"totalElements":1,"first":true,"size":1,"number":0,"sort":{"empty":false,"unsorted":false,"sorted":true},"numberOfElements":1,"empty":false}
```

5. 응답 정보 [Body]

```json
{"content":[{"id":4,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"serialNumber":"J44608490","macAddress":"A1:B2:C3","modelName":"Good model","internalIp":"172.16.30.6","internalPort":7708,"externalIp":"213.22.8.15","externalPort":1105,"inOutType":"BOTH","adminId":"admin","adminPassword":"adminpw"}],"pageable":{"pageNumber":0,"pageSize":1,"sort":{"empty":false,"unsorted":false,"sorted":true},"offset":0,"paged":true,"unpaged":false},"last":true,"totalPages":1,"totalElements":1,"first":true,"size":1,"number":0,"sort":{"empty":false,"unsorted":false,"sorted":true},"numberOfElements":1,"empty":false}
```

6. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`content` | `Array` | 리스트
`content.[].id` | `Number` | 인덱스
`content.[].serialNumber` | `String` | 시리얼 번호
`content.[].macAddress` | `String` | MAC 주소
`content.[].modelName` | `String` | 모델명
`content.[].internalIp` | `String` | 내부 IP
`content.[].internalPort` | `Number` | 내부 포트
`content.[].externalIp` | `String` | 외부 IP
`content.[].externalPort` | `Number` | 외부 포트
`content.[].inOutType` | `String` | 카메라 타입
`content.[].adminId` | `String` | 어드민 ID
`content.[].adminPassword` | `String` | 어드민 PW
`content.[].apartment.id` | `Number` | 아파트 인덱스
`content.[].apartment.name` | `String` | 이름
`content.[].apartment.region1DepthName` | `String` | 고객사 지역명 1
`content.[].apartment.region2DepthName` | `String` | 고객사 지역명 2
`content.[].apartment.region3DepthName` | `String` | 고객사 지역명 3
`content.[].apartment.roadName` | `String` | 도로명
`content.[].apartment.address` | `String` | 주소
`content.[].apartment.zoneNo` | `String` | 우편번호
`content.[].apartment.limitType` | `String` | 제한 타입
`content.[].apartment.limitTime` | `Number` | 제한 시간(분 단위)
`content.[].apartment.limitCount` | `Number` | 제한 횟수
`content.[].apartment.networkCheckSecond` | `Number` | 네트워크 체크 시간(초 단위)
`content.[].apartment.officetel` | `Boolean` | 오피스텔 여부
`content.[].apartment.villa` | `Boolean` | 빌라 여부
`content.[].apartment.qna` | `Boolean` | qna 사용 여부
`content.[].apartment.notice` | `Boolean` | 공지 사용 여부
`content.[].apartment.faq` | `Boolean` | faq 사용 여부
`pageable` | `Object` | 페이지 정보
`size` | `Number` | 한 페이지 리스트 개수
`totalElements` | `Number` | 리스트 총 사이즈
`totalPages` | `Number` | 총 페이지
`number` | `Number` | 현 페이지 

7. CURL

```bash
$ curl 'http://localhost:8080/device/camera?page=0&size=1&sort=createDate%2Cdesc&name=%ED%95%98%EB%8A%98%EC%B1%84' -i -X GET \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTk2NTE5NSwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.zvtkkOcquBiy_mPEFtH2S02-RkQPorn2aF4VtR3dtTw'
```

### Detail

---

1. 요청 정보 [HTTP]

```http
GET /device/camera/1 HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3Bl3IjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5ODQ1MiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UqRFWpBOyfZxPMUfo5sbvBlFwRdgSumrvekKt30vEc
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/device/camera/{id}`

Parameter | Description
--------- | -----------
`id` | 카메라 인덱스

4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 628

{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"serialNumber":"J44608495","macAddress":"24:0f:9b:ec:7b:1e","modelName":"iDS-2CD7A26G0/P-IZHS/K","internalIp":"172.16.30.102","internalPort":8000,"externalIp":"172.16.30.102","externalPort":8000,"inOutType":"BOTH","adminId":"admin","adminPassword":"a1234567!"}
```

5. 응답 정보 [Body]

```json
{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"serialNumber":"J44608495","macAddress":"24:0f:9b:ec:7b:1e","modelName":"iDS-2CD7A26G0/P-IZHS/K","internalIp":"172.16.30.102","internalPort":8000,"externalIp":"172.16.30.102","externalPort":8000,"inOutType":"BOTH","adminId":"admin","adminPassword":"a1234567!"}
```

6. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 인덱스
`serialNumber` | `String` | 시리얼 번호
`macAddress` | `String` | MAC 주소
`modelName` | `String` | 모델명
`internalIp` | `String` | 내부 IP
`internalPort` | `Number` | 내부 포트
`externalIp` | `String` | 외부 IP
`externalPort` | `Number` | 외부 포트
`inOutType` | `String` | 카메라 타입
`adminId` | `String` | 어드민 ID
`adminPassword` | `String` | 어드민 PW
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

7. CURL

```bash
$ curl 'http://localhost:8080/device/camera/1' -i -X GET \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5ODQ1MiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UqRFWpBOyfZxPMUfo5sbvBlFwRdgSumrvekKt30vEc'
```

### Save

---

1. 요청 정보 [HTTP]

```http
POST /device/camera HTTP/1.1
Content-Type: application/json;charset=UTF-8
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5ODQ1MiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UqRFWpBOyfZxPMUfo5sbvBlFwRdgSumrvekKt30vEc
Content-Length: 250
Host: localhost:8080

{"apartmentId":1,"serialNumber":"J44608490","macAddress":"A1:B2:C3","modelName":"Good model","internalIp":"172.16.30.6","internalPort":7708,"externalIp":"213.22.8.15","externalPort":1105,"inOutType":"BOTH","adminId":"admin","adminPassword":"adminpw"}
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Body]

```json
{"apartmentId":1,"serialNumber":"J44608490","macAddress":"A1:B2:C3","modelName":"Good model","internalIp":"172.16.30.6","internalPort":7708,"externalIp":"213.22.8.15","externalPort":1105,"inOutType":"BOTH","adminId":"admin","adminPassword":"adminpw"}
```

4. 요청 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`apartmentId` | `Number` | 아파트 인덱스
`serialNumber` | `String` | 시리얼 번호
`macAddress` | `String` | MAC 주소
`modelName` | `String` | 모델명
`internalIp` | `String` | 내부 IP
`internalPort` | `Number` | 내부 포트
`externalIp` | `String` | 외부 IP
`externalPort` | `Number` | 외부 포트
`inOutType` | `String` | 카메라 타입
`adminId` | `String` | 어드민 ID
`adminPassword` | `String` | 어드민 PW

5. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 601

{"id":4,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"serialNumber":"J44608490","macAddress":"A1:B2:C3","modelName":"Good model","internalIp":"172.16.30.6","internalPort":7708,"externalIp":"213.22.8.15","externalPort":1105,"inOutType":"BOTH","adminId":"admin","adminPassword":"adminpw"}
```

6. 응답 정보 [Body]

```json
{"id":4,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"serialNumber":"J44608490","macAddress":"A1:B2:C3","modelName":"Good model","internalIp":"172.16.30.6","internalPort":7708,"externalIp":"213.22.8.15","externalPort":1105,"inOutType":"BOTH","adminId":"admin","adminPassword":"adminpw"}
```

7. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 인덱스
`serialNumber` | `String` | 시리얼 번호
`macAddress` | `String` | MAC 주소
`modelName` | `String` | 모델명
`internalIp` | `String` | 내부 IP
`internalPort` | `Number` | 내부 포트
`externalIp` | `String` | 외부 IP
`externalPort` | `Number` | 외부 포트
`inOutType` | `String` | 카메라 타입
`adminId` | `String` | 어드민 ID
`adminPassword` | `String` | 어드민 PW
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

8. CURL

```bash
$ curl 'http://localhost:8080/device/camera' -i -X POST \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5ODQ1MiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UqRFWpBOyfZxPMUfo5sbvBlFwRdgSumrvekKt30vEc' \
    -d '{"apartmentId":1,"serialNumber":"J44608490","macAddress":"A1:B2:C3","modelName":"Good model","internalIp":"172.16.30.6","internalPort":7708,"externalIp":"213.22.8.15","externalPort":1105,"inOutType":"BOTH","adminId":"admin","adminPassword":"adminpw"}'
```

### Update

---

1. 요청 정보 [HTTP]

```http
PUT /device/camera/2 HTTP/1.1
Content-Type: application/json;charset=UTF-8
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5ODQ1MiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UqRFWpBOyfZxPMUfo5sbvBlFwRdgSumrvekKt30vEc
Content-Length: 248
Host: localhost:8080

{"apartmentId":1,"serialNumber":"J446084","macAddress":"a1:b2:q3","modelName":"Good model","internalIp":"172.16.30.6","internalPort":7708,"externalIp":"213.22.8.15","externalPort":1105,"inOutType":"BOTH","adminId":"admin","adminPassword":"adminpw"}
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/device/camera/{id}`

Parameter | Description
--------- | -----------
`id` | 카메라 인덱스

4. 요청 정보 [Body]

```json
{"apartmentId":1,"serialNumber":"J446084","macAddress":"a1:b2:q3","modelName":"Good model","internalIp":"172.16.30.6","internalPort":7708,"externalIp":"213.22.8.15","externalPort":1105,"inOutType":"BOTH","adminId":"admin","adminPassword":"adminpw"}
```

5. 요청 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`apartmentId` | `Number` | 아파트 인덱스
`serialNumber` | `String` | 시리얼 번호
`macAddress` | `String` | MAC 주소
`modelName` | `String` | 모델명
`internalIp` | `String` | 내부 IP
`internalPort` | `Number` | 내부 포트
`externalIp` | `String` | 외부 IP
`externalPort` | `Number` | 외부 포트
`inOutType` | `String` | 카메라 타입
`adminId` | `String` | 어드민 ID
`adminPassword` | `String` | 어드민 PW

6. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 599

{"id":2,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"serialNumber":"J446084","macAddress":"a1:b2:q3","modelName":"Good model","internalIp":"172.16.30.6","internalPort":7708,"externalIp":"213.22.8.15","externalPort":1105,"inOutType":"BOTH","adminId":"admin","adminPassword":"adminpw"}
```

7. 응답 정보 [Body]

```json
{"id":2,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"serialNumber":"J446084","macAddress":"a1:b2:q3","modelName":"Good model","internalIp":"172.16.30.6","internalPort":7708,"externalIp":"213.22.8.15","externalPort":1105,"inOutType":"BOTH","adminId":"admin","adminPassword":"adminpw"}
```

8. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 인덱스
`serialNumber` | `String` | 시리얼 번호
`macAddress` | `String` | MAC 주소
`modelName` | `String` | 모델명
`internalIp` | `String` | 내부 IP
`internalPort` | `Number` | 내부 포트
`externalIp` | `String` | 외부 IP
`externalPort` | `Number` | 외부 포트
`inOutType` | `String` | 카메라 타입
`adminId` | `String` | 어드민 ID
`adminPassword` | `String` | 어드민 PW
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

9. CURL

```bash
$ curl 'http://localhost:8080/device/camera/2' -i -X PUT \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5ODQ1MiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UqRFWpBOyfZxPMUfo5sbvBlFwRdgSumrvekKt30vEc' \
    -d '{"apartmentId":1,"serialNumber":"J446084","macAddress":"a1:b2:q3","modelName":"Good model","internalIp":"172.16.30.6","internalPort":7708,"externalIp":"213.22.8.15","externalPort":1105,"inOutType":"BOTH","adminId":"admin","adminPassword":"adminpw"}'
```

### Delete

---

1. 요청 정보 [HTTP]

```http
DELETE /device/camera/3 HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5ODQ1MiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UqRFWpBOyfZxPMUfo5sbvBlFwRdgSumrvekKt30vEc
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/device/camera/{id}`

Parameter | Description
--------- | -----------
`id` | 카메라 인덱스

4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK

```

5. CURL

```bash
$ curl 'http://localhost:8080/device/camera/3' -i -X DELETE \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5ODQ1MiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.9UqRFWpBOyfZxPMUfo5sbvBlFwRdgSumrvekKt30vEc'
```

## 디바이스 에러 로그 API

### List

---

1. 요청 정보 [HTTP]

```http
GET /device/log?page=0&size=1&sort=createDate%2Cdesc HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5NzA5OSwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.fBzavjFdy71MO6gIbB1Bwer-rZ-spu0B1Z4m8b2FYN0
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Query Parameter]

Parameter | Description
--------- | -----------
`page` | 페이지
`size` | 한 페이지 리스트 갯수
`sort` | 정렬

4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 1020

{"content":[{"id":1,"deviceType":"CAMERA","camera":{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"serialNumber":"J44608495","macAddress":"24:0f:9b:ec:7b:1e","modelName":"iDS-2CD7A26G0/P-IZHS/K","internalIp":"172.16.30.102","internalPort":8000,"externalIp":"172.16.30.102","externalPort":8000,"inOutType":"BOTH","adminId":"admin","adminPassword":"a1234567!"},"description":"네트워크 에러"}],"pageable":{"pageNumber":0,"pageSize":1,"sort":{"empty":false,"sorted":true,"unsorted":false},"offset":0,"paged":true,"unpaged":false},"last":true,"totalElements":1,"totalPages":1,"first":true,"size":1,"number":0,"sort":{"empty":false,"sorted":true,"unsorted":false},"numberOfElements":1,"empty":false}
```

5. 응답 정보 [Body]

```json
{"content":[{"id":1,"deviceType":"CAMERA","camera":{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"serialNumber":"J44608495","macAddress":"24:0f:9b:ec:7b:1e","modelName":"iDS-2CD7A26G0/P-IZHS/K","internalIp":"172.16.30.102","internalPort":8000,"externalIp":"172.16.30.102","externalPort":8000,"inOutType":"BOTH","adminId":"admin","adminPassword":"a1234567!"},"description":"네트워크 에러"}],"pageable":{"pageNumber":0,"pageSize":1,"sort":{"empty":false,"sorted":true,"unsorted":false},"offset":0,"paged":true,"unpaged":false},"last":true,"totalElements":1,"totalPages":1,"first":true,"size":1,"number":0,"sort":{"empty":false,"sorted":true,"unsorted":false},"numberOfElements":1,"empty":false}
```

6. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`content` | `Array` | 리스트
`content.[].id` | `Number` | 인덱스
`content.[].deviceType` | `String` | 디바이스 타입
`content.[].description` | `String` | 에러 사유
`content.[].camera.id` | `Number` | 인덱스
`content.[].camera.serialNumber` | `String` | 시리얼 번호
`content.[].camera.macAddress` | `String` | MAC 주소
`content.[].camera.modelName` | `String` | 모델명
`content.[].camera.internalIp` | `String` | 내부 IP
`content.[].camera.internalPort` | `Number` | 내부 포트
`content.[].camera.externalIp` | `String` | 외부 IP
`content.[].camera.externalPort` | `Number` | 외부 포트
`content.[].camera.inOutType` | `String` | 카메라 타입
`content.[].camera.adminId` | `String` | 어드민 ID
`content.[].camera.adminPassword` | `String` | 어드민 PW
`content.[].camera.apartment.id` | `Number` | 아파트 인덱스
`content.[].camera.apartment.name` | `String` | 이름
`content.[].camera.apartment.region1DepthName` | `String` | 고객사 지역명 1
`content.[].camera.apartment.region2DepthName` | `String` | 고객사 지역명 2
`content.[].camera.apartment.region3DepthName` | `String` | 고객사 지역명 3
`content.[].camera.apartment.roadName` | `String` | 도로명
`content.[].camera.apartment.address` | `String` | 주소
`content.[].camera.apartment.zoneNo` | `String` | 우편번호
`content.[].camera.apartment.limitType` | `String` | 제한 타입
`content.[].camera.apartment.limitTime` | `Number` | 제한 시간(분 단위)
`content.[].camera.apartment.limitCount` | `Number` | 제한 횟수
`content.[].camera.apartment.networkCheckSecond` | `Number` | 네트워크 체크 시간(초 단위)
`content.[].camera.apartment.officetel` | `Boolean` | 오피스텔 여부
`content.[].camera.apartment.villa` | `Boolean` | 빌라 여부
`content.[].camera.apartment.qna` | `Boolean` | qna 사용 여부
`content.[].camera.apartment.notice` | `Boolean` | 공지 사용 여부
`content.[].camera.apartment.faq` | `Boolean` | faq 사용 여부
`pageable` | `Object` | 페이지 정보
`size` | `Number` | 한 페이지 리스트 개수
`totalElements` | `Number` | 리스트 총 사이즈
`totalPages` | `Number` | 총 페이지
`number` | `Number` | 현 페이지 

7. CURL

```bash
$ curl 'http://localhost:8080/device/log?page=0&size=1&sort=createDate%2Cdesc' -i -X GET \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5NzA5OSwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.fBzavjFdy71MO6gIbB1Bwer-rZ-spu0B1Z4m8b2FYN0'
```

### Save

---

1. 요청 정보 [HTTP]

```http
POST /device/log HTTP/1.1
Content-Type: application/json;charset=UTF-8
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5NzA5OCwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.N9ttVKDWMv-eP95W0ak6r2w6E65wxWyLnwLt7L5ARJQ
Content-Length: 88
Host: localhost:8080

{"deviceType":"CAMERA","apartmentId":1,"cameraId":1,"description":"네트워크 에러"}
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Body]

```json
{"deviceType":"CAMERA","apartmentId":1,"cameraId":1,"description":"네트워크 에러"}
```

4. 요청 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`apartmentId` | `Number` | 아파트 인덱스
`cameraId` | `Number` | 카메라 인덱스
`deviceType` | `String` | 디바이스 타입
`description` | `String` | 에러 사유

5. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 704

{"id":1,"deviceType":"CAMERA","camera":{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"serialNumber":"J44608495","macAddress":"24:0f:9b:ec:7b:1e","modelName":"iDS-2CD7A26G0/P-IZHS/K","internalIp":"172.16.30.102","internalPort":8000,"externalIp":"172.16.30.102","externalPort":8000,"inOutType":"BOTH","adminId":"admin","adminPassword":"a1234567!"},"description":"네트워크 에러"}
```

6. 응답 정보 [Body]

```json
{"id":1,"deviceType":"CAMERA","camera":{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"serialNumber":"J44608495","macAddress":"24:0f:9b:ec:7b:1e","modelName":"iDS-2CD7A26G0/P-IZHS/K","internalIp":"172.16.30.102","internalPort":8000,"externalIp":"172.16.30.102","externalPort":8000,"inOutType":"BOTH","adminId":"admin","adminPassword":"a1234567!"},"description":"네트워크 에러"}
```

7. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 인덱스
`deviceType` | `String` | 디바이스 타입
`description` | `String` | 에러 사유
`camera.id` | `Number` | 인덱스
`camera.serialNumber` | `String` | 시리얼 번호
`camera.macAddress` | `String` | MAC 주소
`camera.modelName` | `String` | 모델명
`camera.internalIp` | `String` | 내부 IP
`camera.internalPort` | `Number` | 내부 포트
`camera.externalIp` | `String` | 외부 IP
`camera.externalPort` | `Number` | 외부 포트
`camera.inOutType` | `String` | 카메라 타입
`camera.adminId` | `String` | 어드민 ID
`camera.adminPassword` | `String` | 어드민 PW
`camera.apartment.id` | `Number` | 아파트 인덱스
`camera.apartment.name` | `String` | 이름
`camera.apartment.region1DepthName` | `String` | 고객사 지역명 1
`camera.apartment.region2DepthName` | `String` | 고객사 지역명 2
`camera.apartment.region3DepthName` | `String` | 고객사 지역명 3
`camera.apartment.roadName` | `String` | 도로명
`camera.apartment.address` | `String` | 주소
`camera.apartment.zoneNo` | `String` | 우편번호
`camera.apartment.limitType` | `String` | 제한 타입
`camera.apartment.limitTime` | `Number` | 제한 시간(분 단위)
`camera.apartment.limitCount` | `Number` | 제한 횟수
`camera.apartment.networkCheckSecond` | `Number` | 네트워크 체크 시간(초 단위)
`camera.apartment.officetel` | `Boolean` | 오피스텔 여부
`camera.apartment.villa` | `Boolean` | 빌라 여부
`camera.apartment.qna` | `Boolean` | qna 사용 여부
`camera.apartment.notice` | `Boolean` | 공지 사용 여부
`camera.apartment.faq` | `Boolean` | faq 사용 여부

8. CURL

```bash
$ curl 'http://localhost:8080/device/log' -i -X POST \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTc5NzA5OCwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.N9ttVKDWMv-eP95W0ak6r2w6E65wxWyLnwLt7L5ARJQ' \
    -d '{"deviceType":"CAMERA","apartmentId":1,"cameraId":1,"description":"네트워크 에러"}'
```