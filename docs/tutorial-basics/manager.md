---
sidebar_position: 2
---
# 아파트 관리자 API

## 대시보드 API

### List

---

1. 요청 정보 [HTTP]

2. 요청 정보 [Header]

3. 요청 정보 [Query Parameter]

4. 응답 정보 [HTTP]

5. 응답 정보 [Body]

6. 응답 정보 [Field]

7. CURL

## 세대별 차량관리 API

### List

---

1. 요청 정보 [HTTP]

2. 요청 정보 [Header]

3. 요청 정보 [Query Parameter]

4. 응답 정보 [HTTP]

5. 응답 정보 [Body]

6. 응답 정보 [Field]

7. CURL

## 차량 등록 신청 API

### List

---

1. 요청 정보 [HTTP]

2. 요청 정보 [Header]

3. 요청 정보 [Query Parameter]

4. 응답 정보 [HTTP]

5. 응답 정보 [Body]

6. 응답 정보 [Field]

7. CURL

## 화이트리스트 API

### List

---

1. 요청 정보 [HTTP]

2. 요청 정보 [Header]

3. 요청 정보 [Query Parameter]

4. 응답 정보 [HTTP]

5. 응답 정보 [Body]

6. 응답 정보 [Field]

7. CURL

## 블랙리스트 API

### List

---

1. 요청 정보 [HTTP]

2. 요청 정보 [Header]

3. 요청 정보 [Query Parameter]

4. 응답 정보 [HTTP]

5. 응답 정보 [Body]

6. 응답 정보 [Field]

7. CURL

## 입출차내역 API

### List

---

1. 요청 정보 [HTTP]

2. 요청 정보 [Header]

3. 요청 정보 [Query Parameter]

4. 응답 정보 [HTTP]

5. 응답 정보 [Body]

6. 응답 정보 [Field]

7. CURL

## FAQ API

### List

---

1. 요청 정보 [HTTP]

```http
GET /faq?page=0&size=1&sort=createDate%2Cdesc HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MTAyMDQyMTcsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.HhlpaN8PH-CHN03rlJeOOjNr-LF46w9niQJj123A9Xk
Host: localhost:8080=
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
Content-Length: 805

{"content":[{"id":2,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"title":"modify-title","content":"modify-content","createDate":"2024-03-11 09:43:36","updateDate":"2024-03-11 09:43:36"}],"pageable":{"pageNumber":0,"pageSize":1,"sort":{"empty":false,"sorted":true,"unsorted":false},"offset":0,"paged":true,"unpaged":false},"last":false,"totalPages":2,"totalElements":2,"first":true,"size":1,"number":0,"sort":{"empty":false,"sorted":true,"unsorted":false},"numberOfElements":1,"empty":false}
```

5. 응답 정보 [Body]

```json
{"content":[{"id":2,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"title":"modify-title","content":"modify-content","createDate":"2024-03-11 09:43:36","updateDate":"2024-03-11 09:43:36"}],"pageable":{"pageNumber":0,"pageSize":1,"sort":{"empty":false,"sorted":true,"unsorted":false},"offset":0,"paged":true,"unpaged":false},"last":false,"totalPages":2,"totalElements":2,"first":true,"size":1,"number":0,"sort":{"empty":false,"sorted":true,"unsorted":false},"numberOfElements":1,"empty":false}
```

6. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`content` | `Array` | 리스트
`content.[].id` | `Number` | 인덱스
`content.[].title` | `String` | 제목
`content.[].content` | `String` | 내용
`content.[].createDate` | `String` | 생성일
`content.[].updateDate` | `String` | 수정일
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
$ curl 'http://localhost:8080/faq?page=0&size=1&sort=createDate%2Cdesc' -i -X GET \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MTAyMDQyMTcsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.HhlpaN8PH-CHN03rlJeOOjNr-LF46w9niQJj123A9Xk'
```

### Detail

---

1. 요청 정보 [HTTP]

```http
GET /faq/1 HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MTAyMDQyMTcsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.HhlpaN8PH-CHN03rlJeOOjNr-LF46w9niQJj123A9Xk
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/faq/{id}`

Parameter | Description
--------- | -----------
`id` | 공지 인덱스

4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 476

{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"title":"제목1","content":"내용1","createDate":"2024-03-11 09:43:36","updateDate":"2024-03-11 09:43:36"}
```

5. 응답 정보 [Body]

```json
{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"title":"제목1","content":"내용1","createDate":"2024-03-11 09:43:36","updateDate":"2024-03-11 09:43:36"}
```

6. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 인덱스
`title` | `String` | 제목
`content` | `String` | 내용
`createDate` | `String` | 생성일
`updateDate` | `String` | 수정일
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
$ curl 'http://localhost:8080/faq/1' -i -X GET \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MTAyMDQyMTcsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.HhlpaN8PH-CHN03rlJeOOjNr-LF46w9niQJj123A9Xk'
```

### Save

---

1. 요청 정보 [HTTP]

```http
POST /faq HTTP/1.1
Content-Type: application/json;charset=UTF-8
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MTAyMDQyMTcsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.HhlpaN8PH-CHN03rlJeOOjNr-LF46w9niQJj123A9Xk
Content-Length: 37
Host: localhost:8080

{"title":"title","content":"content"}
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Body]

```json
{"title":"title","content":"content"}
```

4. 요청 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`title` | `String` | 제목
`content` | `String` | 내용

5. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 474

{"id":4,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"title":"title","content":"content","createDate":"2024-03-11 09:43:37","updateDate":"2024-03-11 09:43:37"}
```

6. 응답 정보 [Body]

```json
{"id":4,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"title":"title","content":"content","createDate":"2024-03-11 09:43:37","updateDate":"2024-03-11 09:43:37"}
```

7. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 인덱스
`title` | `String` | 제목
`content` | `String` | 내용
`createDate` | `String` | 생성일
`updateDate` | `String` | 수정일
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
$ curl 'http://localhost:8080/faq' -i -X POST \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MTAyMDQyMTcsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.HhlpaN8PH-CHN03rlJeOOjNr-LF46w9niQJj123A9Xk' \
    -d '{"title":"title","content":"content"}'
```

### Update

---

1. 요청 정보 [HTTP]

```http
PUT /faq/2 HTTP/1.1
Content-Type: application/json;charset=UTF-8
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MTAyMDQyMTYsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.rPWbRBr6U3MomucA64_6ie-GdiP3vx7xOrVhr2nDPII
Content-Length: 51
Host: localhost:8080

{"title":"modify-title","content":"modify-content"}
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/faq/{id}`

Parameter | Description
--------- | -----------
`id` | 공지사항 인덱스

4. 요청 정보 [Body]

```json
{"title":"modify-title","content":"modify-content"}
```

5. 요청 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`title` | `String` | 제목
`content` | `String` | 내용

6. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 488

{"id":2,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"title":"modify-title","content":"modify-content","createDate":"2024-03-11 09:43:36","updateDate":"2024-03-11 09:43:36"}
```

7. 응답 정보 [Body]

```json
{"id":2,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"title":"modify-title","content":"modify-content","createDate":"2024-03-11 09:43:36","updateDate":"2024-03-11 09:43:36"}
```

8. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 인덱스
`title` | `String` | 제목
`content` | `String` | 내용
`createDate` | `String` | 생성일
`updateDate` | `String` | 수정일
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
$ curl 'http://localhost:8080/faq/2' -i -X PUT \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MTAyMDQyMTYsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.rPWbRBr6U3MomucA64_6ie-GdiP3vx7xOrVhr2nDPII' \
    -d '{"title":"modify-title","content":"modify-content"}'
```

### Delete

---

1. 요청 정보 [HTTP]

```http
DELETE /faq/3 HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MTAyMDQyMTcsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.HhlpaN8PH-CHN03rlJeOOjNr-LF46w9niQJj123A9Xk
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/faq/{id}`

Parameter | Description
--------- | -----------
`id` | 공지사항 인덱스

4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
```

5. CURL

```bash
$ curl 'http://localhost:8080/faq/3' -i -X DELETE \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MTAyMDQyMTcsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.HhlpaN8PH-CHN03rlJeOOjNr-LF46w9niQJj123A9Xk'
```

## 공지사항 API

### List

---

1. 요청 정보 [HTTP]

```http
GET /notice?page=0&size=1&sort=createDate%2Cdesc HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MDk5NzQ2NjYsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.7OqT-_lseXKXKvWEQ1yODOr16JfnDHpdHyKs1Rp0mz4
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
Content-Length: 793

{"content":[{"id":2,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"qna":true,"faq":true,"officetel":false,"villa":false,"notice":true},"title":"제목2","content":"내용2","createDate":"2024-03-08 17:57:45","updateDate":"2024-03-08 17:57:45"}],"pageable":{"pageNumber":0,"pageSize":1,"sort":{"empty":false,"unsorted":false,"sorted":true},"offset":0,"paged":true,"unpaged":false},"last":false,"totalElements":2,"totalPages":2,"first":true,"size":1,"number":0,"sort":{"empty":false,"unsorted":false,"sorted":true},"numberOfElements":1,"empty":false}
```

5. 응답 정보 [Body]

```json
{"content":[{"id":2,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"qna":true,"faq":true,"officetel":false,"villa":false,"notice":true},"title":"제목2","content":"내용2","createDate":"2024-03-08 17:57:45","updateDate":"2024-03-08 17:57:45"}],"pageable":{"pageNumber":0,"pageSize":1,"sort":{"empty":false,"unsorted":false,"sorted":true},"offset":0,"paged":true,"unpaged":false},"last":false,"totalElements":2,"totalPages":2,"first":true,"size":1,"number":0,"sort":{"empty":false,"unsorted":false,"sorted":true},"numberOfElements":1,"empty":false}
```

6. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`content` | `Array` | 리스트
`content.[].id` | `Number` | 인덱스
`content.[].title` | `String` | 제목
`content.[].content` | `String` | 내용
`content.[].createDate` | `String` | 생성일
`content.[].updateDate` | `String` | 수정일
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
$ curl 'http://localhost:8080/notice?page=0&size=1&sort=createDate%2Cdesc' -i -X GET \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MDk5NzQ2NjYsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.7OqT-_lseXKXKvWEQ1yODOr16JfnDHpdHyKs1Rp0mz4'
```

### Detail

---

1. 요청 정보 [HTTP]

```http
GET /notice/1 HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTk3NDY2NiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.mGyHCKi_VphUORr9uCCMBsEX2wsDZvmy5437TSltZok
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/notice/{id}`

Parameter | Description
--------- | -----------
`id` | 공지 인덱스

4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 476

{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"qna":true,"faq":true,"officetel":false,"villa":false,"notice":true},"title":"제목1","content":"내용1","createDate":"2024-03-08 17:57:45","updateDate":"2024-03-08 17:57:45"}
```

5. 응답 정보 [Body]

```json
{"id":1,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"qna":true,"faq":true,"officetel":false,"villa":false,"notice":true},"title":"제목1","content":"내용1","createDate":"2024-03-08 17:57:45","updateDate":"2024-03-08 17:57:45"}
```

6. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 인덱스
`title` | `String` | 제목
`content` | `String` | 내용
`createDate` | `String` | 생성일
`updateDate` | `String` | 수정일
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
$ curl 'http://localhost:8080/notice/1' -i -X GET \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTk3NDY2NiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.mGyHCKi_VphUORr9uCCMBsEX2wsDZvmy5437TSltZok'
```

### Save

---

1. 요청 정보 [HTTP]

```http
POST /notice HTTP/1.1
Content-Type: application/json;charset=UTF-8
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MDk5NzQ3NDcsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.qvoIloZh7xve69KqJtIjX62s_5NsPTAZ47A46TdsjEA
Content-Length: 37
Host: localhost:8080

{"title":"title","content":"content"}
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Body]

```json
{"title":"title","content":"content"}
```

4. 요청 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`title` | `String` | 제목
`content` | `String` | 내용

5. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 474

{"id":4,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"title":"title","content":"content","createDate":"2024-03-08 17:59:07","updateDate":"2024-03-08 17:59:07"}
```

6. 응답 정보 [Body]

```json
{"id":4,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true},"title":"title","content":"content","createDate":"2024-03-08 17:59:07","updateDate":"2024-03-08 17:59:07"}
```

7. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 인덱스
`title` | `String` | 제목
`content` | `String` | 내용
`createDate` | `String` | 생성일
`updateDate` | `String` | 수정일
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
$ curl 'http://localhost:8080/notice' -i -X POST \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW5hZ2VyIiwic2NvcGUiOiJNRU1CRVJfQVBBUlRNRU5UIiwiaXNzIjoibm9tYWRsYWIiLCJleHAiOjE3MDk5NzQ3NDcsInR5cGUiOiJBQ0NFU1NfVE9LRU4ifQ.qvoIloZh7xve69KqJtIjX62s_5NsPTAZ47A46TdsjEA' \
    -d '{"title":"title","content":"content"}'
```

### Update

---

1. 요청 정보 [HTTP]

```http
PUT /notice/2 HTTP/1.1
Content-Type: application/json;charset=UTF-8
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTk3NDY2NiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.mGyHCKi_VphUORr9uCCMBsEX2wsDZvmy5437TSltZok
Content-Length: 51
Host: localhost:8080

{"title":"modify-title","content":"modify-content"}
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/notice/{id}`

Parameter | Description
--------- | -----------
`id` | 공지사항 인덱스

4. 요청 정보 [Body]

```json
{"title":"modify-title","content":"modify-content"}
```

5. 요청 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`title` | `String` | 제목
`content` | `String` | 내용

6. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 488

{"id":2,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"qna":true,"faq":true,"officetel":false,"villa":false,"notice":true},"title":"modify-title","content":"modify-content","createDate":"2024-03-08 17:57:45","updateDate":"2024-03-08 17:57:45"}
```

7. 응답 정보 [Body]

```json
{"id":2,"apartment":{"id":1,"name":"하늘채","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"주례동","roadName":"주례로 15","address":"부산 사상구 주례로 15","zoneNo":"18754","limitType":"COUNT","limitTime":0,"limitCount":10,"networkCheckSecond":10,"qna":true,"faq":true,"officetel":false,"villa":false,"notice":true},"title":"modify-title","content":"modify-content","createDate":"2024-03-08 17:57:45","updateDate":"2024-03-08 17:57:45"}
```

8. 응답 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`id` | `Number` | 인덱스
`title` | `String` | 제목
`content` | `String` | 내용
`createDate` | `String` | 생성일
`updateDate` | `String` | 수정일
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
$ curl 'http://localhost:8080/notice/2' -i -X PUT \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTk3NDY2NiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.mGyHCKi_VphUORr9uCCMBsEX2wsDZvmy5437TSltZok' \
    -d '{"title":"modify-title","content":"modify-content"}'
```

### Delete

---

1. 요청 정보 [HTTP]

```http
DELETE /notice/3 HTTP/1.1
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTk3NDY2NiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.mGyHCKi_VphUORr9uCCMBsEX2wsDZvmy5437TSltZok
Host: localhost:8080
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보

3. 요청 정보 [Path Parameter]

`/notice/{id}`

Parameter | Description
--------- | -----------
`id` | 공지사항 인덱스

4. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
```

5. CURL

```bash
$ curl 'http://localhost:8080/notice/3' -i -X DELETE \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTk3NDY2NiwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.mGyHCKi_VphUORr9uCCMBsEX2wsDZvmy5437TSltZok'
```

## 설정 API

### Update Limit

---

1. 요청 정보 [HTTP]

```http
PUT /apartment/2/setting/limit HTTP/1.1
Content-Type: application/json;charset=UTF-8
Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTk3MzU5NSwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.CM2BYg-eHowmAUWQH0B35LhP_4VV9r9EAtx0uJzcyfE
Content-Length: 49
Host: localhost:8080

{"limitType":"NONE","limitTime":0,"limitCount":0}
```

2. 요청 정보 [Header]

Name | Description
---- | -----------
`Authorization` | 토큰 정보


3. 요청 정보 [Path Parameter]

`/apartment/{id}/setting/limit`

Parameter | Description
--------- | -----------
`id` | 아파트 인덱스

4. 요청 정보 [Body]

```json
{"limitType":"NONE","limitTime":0,"limitCount":0}
```

5. 요청 정보 [Field]

Path | Type | Description
---- | ---- | -----------
`limitType` | `String` | 제한 타입
`limitTime` | `Number` | 제한 시간(분 단위)
`limitCount` | `Number` | 제한 횟수

6. 응답 정보 [HTTP]

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
Content-Length: 347

{"id":2,"name":"금강아파트","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"학장동","roadName":"학장로","address":"부산 사상구 학장로 15","zoneNo":"18754","limitType":"NONE","limitTime":0,"limitCount":0,"networkCheckSecond":0,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true}
```

7. 응답 정보 [Body]

```json
{"id":2,"name":"금강아파트","region1DepthName":"부산시","region2DepthName":"사상구","region3DepthName":"학장동","roadName":"학장로","address":"부산 사상구 학장로 15","zoneNo":"18754","limitType":"NONE","limitTime":0,"limitCount":0,"networkCheckSecond":0,"officetel":false,"villa":false,"notice":true,"qna":true,"faq":true}
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
$ curl 'http://localhost:8080/apartment/2/setting/limit' -i -X PUT \
    -H 'Content-Type: application/json;charset=UTF-8' \
    -H 'Authorization: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInNjb3BlIjoiQURNSU4iLCJpc3MiOiJub21hZGxhYiIsImV4cCI6MTcwOTk3MzU5NSwidHlwZSI6IkFDQ0VTU19UT0tFTiJ9.CM2BYg-eHowmAUWQH0B35LhP_4VV9r9EAtx0uJzcyfE' \
    -d '{"limitType":"NONE","limitTime":0,"limitCount":0}'
```

## 정보 API

### List

---

1. 요청 정보 [HTTP]

2. 요청 정보 [Header]

3. 요청 정보 [Query Parameter]

4. 응답 정보 [HTTP]

5. 응답 정보 [Body]

6. 응답 정보 [Field]

7. CURL