"use strict";var precacheConfig=[["/tnds-utrust-frontend-challenge/index.html","2e09d81803811e9ed442295577c4818f"],["/tnds-utrust-frontend-challenge/static/css/main.b240e744.css","3cbd5ee6dd43cc086844dbc425d0b47b"],["/tnds-utrust-frontend-challenge/static/js/main.7eaf46f2.js","7dc0426eaec846e916a0d62ec8322a58"],["/tnds-utrust-frontend-challenge/static/media/noto-serif-latin-400.1ae4b0e3.woff","1ae4b0e314a87fd27af252df534333c6"],["/tnds-utrust-frontend-challenge/static/media/noto-serif-latin-400.f7fb9922.woff2","f7fb9922ab0013f0ee2f11ca54ed6b88"],["/tnds-utrust-frontend-challenge/static/media/noto-serif-latin-400italic.b4a8fd30.woff","b4a8fd30853903707449c6c767add7a5"],["/tnds-utrust-frontend-challenge/static/media/noto-serif-latin-400italic.cdde8205.woff2","cdde82058d9449d4f70db7f2d987943c"],["/tnds-utrust-frontend-challenge/static/media/noto-serif-latin-700.2baa18fb.woff2","2baa18fb2c53309d61a17f6dc183b283"],["/tnds-utrust-frontend-challenge/static/media/noto-serif-latin-700.888b67b3.woff","888b67b39f54734291ba24ed8b34e177"],["/tnds-utrust-frontend-challenge/static/media/noto-serif-latin-700italic.b5cb0013.woff","b5cb0013e295f8457d549f7742900e4d"],["/tnds-utrust-frontend-challenge/static/media/noto-serif-latin-700italic.cb4789d5.woff2","cb4789d5b69a85bc8b535468fd466b25"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-300.521d17bc.woff","521d17bc9f3526c690e8ada6eee55bec"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-300.60c86674.woff2","60c866748ff15f5b347fdba64596b1b1"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-300italic.06bbd318.woff2","06bbd3188b34820cd83a0e0b3d0a6f57"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-300italic.8a648ff3.woff","8a648ff38ded89ea15916e84529d62d3"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-400.bf2d0783.woff","bf2d0783515b7d75c35bde69e01b3135"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-400.cffb686d.woff2","cffb686d7d2f4682df8342bd4d276e09"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-400italic.987032ea.woff2","987032ea5d57c93d8da215678eae3b86"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-400italic.db70d0b9.woff","db70d0b9cb27ada1a260a2b35e756b8b"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-600.1cd5320f.woff","1cd5320f8937d337b61d5117cf9d7b28"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-600.223a277b.woff2","223a277bd88d8a90c8cdf24cda0ad5f5"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-600italic.318ea1ad.woff","318ea1ada4102c0704a0637228dcad03"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-600italic.4950a720.woff2","4950a7205f0b5cefe41fc03ac346e236"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-700.623e3205.woff","623e3205570002af47fc2b88f9335d19"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-700.d08c09f2.woff2","d08c09f2f169f4a6edbcf8b8d1636cb4"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-700italic.72e19cbb.woff","72e19cbb0e38c6773a7751156752cec4"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-700italic.c02f5da6.woff2","c02f5da6e82e1efe0b45841bfd49ce37"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-800.aaeffaf2.woff2","aaeffaf205b9bbb09920089a14dbe9e8"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-800.c6aa0c4a.woff","c6aa0c4a601fb6ac66f8253fa594dff5"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-800italic.6b3973ff.woff2","6b3973ffe02bb6a8be0f8453506ec032"],["/tnds-utrust-frontend-challenge/static/media/open-sans-latin-800italic.79b58175.woff","79b58175343190550489efe46a7f1138"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var s="/tnds-utrust-frontend-challenge/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});