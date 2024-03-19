---
slug: camera-login-encryption
title: 카메라 로그인 스크립트 코드
authors: [parkjinhui, son]
tags: [camera]
---

# 로그인 (카메라 암호화)

[//]: # (Let's discover **Docusaurus in less than 5 minutes**.)

## 로그인 암호화 뚫기
### 1. 먼저 MD5 해시를 생성하여 Random Number를 생성
``` javascript
MD5 = function(a) {
    function b(a, b) {
        var c, d, e, f, g;
        e = a & 2147483648;
        f = b & 2147483648;
        c = a & 1073741824;
        d = b & 1073741824;
        g = (a & 1073741823) + (b & 1073741823);
        return c & d ? g ^ 2147483648 ^ e ^ f : c | d ? g & 1073741824 ? g ^ 3221225472 ^ e ^ f : g ^ 1073741824 ^ e ^ f : g ^ e ^ f
    }
    function c(a, c, d, e, f, g, h) {
        a = b(a, b(b(c & d | ~c & e, f), h));
        return b(a << g | a >>> 32 - g, c)
    }
    function d(a, c, d, e, f, g, h) {
        a = b(a, b(b(c & e | d & ~e, f), h));
        return b(a << g | a >>> 32 - g, c)
    }
    function e(a, c, d, e, f, g, h) {
        a = b(a, b(b(c ^ d ^ e, f), h));
        return b(a << g | a >>> 32 - g, c)
    }
    function g(a, c, d, e, f, g, h) {
        a = b(a, b(b(d ^ (c | ~e), f), h));
        return b(a << g | a >>> 32 - g, c)
    }
    function h(a) {
        var b = "", c = "", d;
        for (d = 0; d <= 3; d++)
            c = a >>> d * 8 & 255,
                c = "0" + c.toString(16),
                b += c.substr(c.length - 2, 2);
        return b
    }
    var f = [], o, p, q, n, k, j, l, m, a = function(a) {
        for (var a = a.replace(/\r\n/g, "\n"), b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            d < 128 ? b += String.fromCharCode(d) : (d > 127 && d < 2048 ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224),
                b += String.fromCharCode(d >> 6 & 63 | 128)),
                b += String.fromCharCode(d & 63 | 128))
        }
        return b
    }(a), f = function(a) {
        var b, c = a.length;
        b = c + 8;
        for (var d = ((b - b % 64) / 64 + 1) * 16, e = Array(d - 1), f = 0, g = 0; g < c; )
            b = (g - g % 4) / 4,
                f = g % 4 * 8,
                e[b] |= a.charCodeAt(g) << f,
                g++;
        e[(g - g % 4) / 4] |= 128 << g % 4 * 8;
        e[d - 2] = c << 3;
        e[d - 1] = c >>> 29;
        return e
    }(a);
    k = 1732584193;
    j = 4023233417;
    l = 2562383102;
    m = 271733878;
    for (a = 0; a < f.length; a += 16)
        o = k,
            p = j,
            q = l,
            n = m,
            k = c(k, j, l, m, f[a + 0], 7, 3614090360),
            m = c(m, k, j, l, f[a + 1], 12, 3905402710),
            l = c(l, m, k, j, f[a + 2], 17, 606105819),
            j = c(j, l, m, k, f[a + 3], 22, 3250441966),
            k = c(k, j, l, m, f[a + 4], 7, 4118548399),
            m = c(m, k, j, l, f[a + 5], 12, 1200080426),
            l = c(l, m, k, j, f[a + 6], 17, 2821735955),
            j = c(j, l, m, k, f[a + 7], 22, 4249261313),
            k = c(k, j, l, m, f[a + 8], 7, 1770035416),
            m = c(m, k, j, l, f[a + 9], 12, 2336552879),
            l = c(l, m, k, j, f[a + 10], 17, 4294925233),
            j = c(j, l, m, k, f[a + 11], 22, 2304563134),
            k = c(k, j, l, m, f[a + 12], 7, 1804603682),
            m = c(m, k, j, l, f[a + 13], 12, 4254626195),
            l = c(l, m, k, j, f[a + 14], 17, 2792965006),
            j = c(j, l, m, k, f[a + 15], 22, 1236535329),
            k = d(k, j, l, m, f[a + 1], 5, 4129170786),
            m = d(m, k, j, l, f[a + 6], 9, 3225465664),
            l = d(l, m, k, j, f[a + 11], 14, 643717713),
            j = d(j, l, m, k, f[a + 0], 20, 3921069994),
            k = d(k, j, l, m, f[a + 5], 5, 3593408605),
            m = d(m, k, j, l, f[a + 10], 9, 38016083),
            l = d(l, m, k, j, f[a + 15], 14, 3634488961),
            j = d(j, l, m, k, f[a + 4], 20, 3889429448),
            k = d(k, j, l, m, f[a + 9], 5, 568446438),
            m = d(m, k, j, l, f[a + 14], 9, 3275163606),
            l = d(l, m, k, j, f[a + 3], 14, 4107603335),
            j = d(j, l, m, k, f[a + 8], 20, 1163531501),
            k = d(k, j, l, m, f[a + 13], 5, 2850285829),
            m = d(m, k, j, l, f[a + 2], 9, 4243563512),
            l = d(l, m, k, j, f[a + 7], 14, 1735328473),
            j = d(j, l, m, k, f[a + 12], 20, 2368359562),
            k = e(k, j, l, m, f[a + 5], 4, 4294588738),
            m = e(m, k, j, l, f[a + 8], 11, 2272392833),
            l = e(l, m, k, j, f[a + 11], 16, 1839030562),
            j = e(j, l, m, k, f[a + 14], 23, 4259657740),
            k = e(k, j, l, m, f[a + 1], 4, 2763975236),
            m = e(m, k, j, l, f[a + 4], 11, 1272893353),
            l = e(l, m, k, j, f[a + 7], 16, 4139469664),
            j = e(j, l, m, k, f[a + 10], 23, 3200236656),
            k = e(k, j, l, m, f[a + 13], 4, 681279174),
            m = e(m, k, j, l, f[a + 0], 11, 3936430074),
            l = e(l, m, k, j, f[a + 3], 16, 3572445317),
            j = e(j, l, m, k, f[a + 6], 23, 76029189),
            k = e(k, j, l, m, f[a + 9], 4, 3654602809),
            m = e(m, k, j, l, f[a + 12], 11, 3873151461),
            l = e(l, m, k, j, f[a + 15], 16, 530742520),
            j = e(j, l, m, k, f[a + 2], 23, 3299628645),
            k = g(k, j, l, m, f[a + 0], 6, 4096336452),
            m = g(m, k, j, l, f[a + 7], 10, 1126891415),
            l = g(l, m, k, j, f[a + 14], 15, 2878612391),
            j = g(j, l, m, k, f[a + 5], 21, 4237533241),
            k = g(k, j, l, m, f[a + 12], 6, 1700485571),
            m = g(m, k, j, l, f[a + 3], 10, 2399980690),
            l = g(l, m, k, j, f[a + 10], 15, 4293915773),
            j = g(j, l, m, k, f[a + 1], 21, 2240044497),
            k = g(k, j, l, m, f[a + 8], 6, 1873313359),
            m = g(m, k, j, l, f[a + 15], 10, 4264355552),
            l = g(l, m, k, j, f[a + 6], 15, 2734768916),
            j = g(j, l, m, k, f[a + 13], 21, 1309151649),
            k = g(k, j, l, m, f[a + 4], 6, 4149444226),
            m = g(m, k, j, l, f[a + 11], 10, 3174756917),
            l = g(l, m, k, j, f[a + 2], 15, 718787259),
            j = g(j, l, m, k, f[a + 9], 21, 3951481745),
            k = b(k, o),
            j = b(j, p),
            l = b(l, q),
            m = b(m, n);
    return (h(k) + h(j) + h(l) + h(m)).toLowerCase()
}


var l = MD5("" + (new Date).getTime()).substring(0, 8);
l = ("" + parseInt(l.replace("#", ""), 16)).substring(0, 8)
```
### 2. PostMan에 Login (1) API를 호출하여 암호화된 값을 전송
### 3. 결과를 이용하여 파일 암호화 
```` xml
결과
<SessionLoginCap version="2.0" xmlns="http://www.std-cgi.com/ver20/XMLSchema">
    <sessionID>181f3168754f1edc2b342583cc70d6108949f4ffdf37d54a015d747aebffc8d8</sessionID>
    <challenge>f07835483178cb6031ddb0e711ec6660</challenge>
    <iterations>100</iterations>
    <isIrreversible>true</isIrreversible>
    <salt>e20c1867afe6da609f2b058c7f00177d62f4aea00f98c0325c212ee7adfb03ca</salt>
    <sessionIDVersion>2</sessionIDVersion>
</SessionLoginCap>
````

````javascript
// 암호화 코드
function SHA256(a) {
  function b(a, b) {
    var c = (a & 65535) + (b & 65535);
    return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
  }

  function c(a, b) {
    return a >>> b | a << 32 - b
  }

  a = function (a) {
    for (var a = a.replace(/\r\n/g, "\n"), b = "", c = 0; c < a.length; c++) {
      var h = a.charCodeAt(c);
      h < 128 ? b += String.fromCharCode(h) : (h > 127 && h < 2048 ? b += String.fromCharCode(h >> 6 | 192) : (b += String.fromCharCode(h >> 12 | 224),
              b += String.fromCharCode(h >> 6 & 63 | 128)),
              b += String.fromCharCode(h & 63 | 128))
    }
    return b
  }(a);
  return function (a) {
    for (var b = "", c = 0; c < a.length * 4; c++)
      b += "0123456789abcdef".charAt(a[c >> 2] >> (3 - c % 4) * 8 + 4 & 15) + "0123456789abcdef".charAt(a[c >> 2] >> (3 - c % 4) * 8 & 15);
    return b
  }(function (a, e) {
    var g = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
            f = Array(64), o, p, q, n, k, j, l, m, s, r, u, w;
    a[e >> 5] |= 128 << 24 - e % 32;
    a[(e + 64 >> 9 << 4) + 15] = e;
    for (s = 0; s < a.length; s += 16) {
      o = h[0];
      p = h[1];
      q = h[2];
      n = h[3];
      k = h[4];
      j = h[5];
      l = h[6];
      m = h[7];
      for (r = 0; r < 64; r++)
        f[r] = r < 16 ? a[r + s] : b(b(b(c(f[r - 2], 17) ^ c(f[r - 2], 19) ^ f[r - 2] >>> 10, f[r - 7]), c(f[r - 15], 7) ^ c(f[r - 15], 18) ^ f[r - 15] >>> 3), f[r - 16]),
                u = b(b(b(b(m, c(k, 6) ^ c(k, 11) ^ c(k, 25)), k & j ^ ~k & l), g[r]), f[r]),
                w = b(c(o, 2) ^ c(o, 13) ^ c(o, 22), o & p ^ o & q ^ p & q),
                m = l,
                l = j,
                j = k,
                k = b(n, u),
                n = q,
                q = p,
                p = o,
                o = b(u, w);
      h[0] = b(o, h[0]);
      h[1] = b(p, h[1]);
      h[2] = b(q, h[2]);
      h[3] = b(n, h[3]);
      h[4] = b(k, h[4]);
      h[5] = b(j, h[5]);
      h[6] = b(l, h[6]);
      h[7] = b(m, h[7])
    }
    return h
  }(function (a) {
    for (var b = [], c = 0; c < a.length * 8; c += 8)
      b[c >> 5] |= (a.charCodeAt(c / 8) & 255) << 24 - c % 32;
    return b
  }(a), a.length * 8))
}

var i = '';
i = SHA256('{id}' + '{salt}' + '{password}'),
        i = SHA256(i + '{challenge}');
for (var n = 2; {iterations} > n; n++)
  i = SHA256(i)
````
### 4. 결과를 이용하여 로그인 2 - password [body xml] 값 이용
### 5. 성공적인 결과가 나온다면 Header에 session 정보 포함하고 있음 
  * 주의 6회 이상 잘못 입력하면 아이디 잠김 
