const y=function d(f){function l(e,a,i){var r,u={};if(Array.isArray(e))return e.concat(a);for(r in e)u[i?r.toLowerCase():r]=e[r];for(r in a){var c=i?r.toLowerCase():r,o=a[r];u[c]=c in u&&typeof o=="object"?l(u[c],o,c=="headers"):o}return u}function t(e,a,i,r,u){var c=typeof e!="string"?(a=e).url:e,o={config:a},n=l(f,a),p={};r=r||n.data,(n.transformRequest||[]).map(function(s){r=s(r,n.headers)||r}),n.auth&&(p.authorization=n.auth),r&&typeof r=="object"&&typeof r.append!="function"&&typeof r.text!="function"&&(r=JSON.stringify(r),p["content-type"]="application/json");try{p[n.xsrfHeaderName]=decodeURIComponent(document.cookie.match(RegExp("(^|; )"+n.xsrfCookieName+"=([^;]*)"))[2])}catch{}return n.baseURL&&(c=c.replace(/^(?!.*\/\/)\/?/,n.baseURL+"/")),n.params&&(c+=(~c.indexOf("?")?"&":"?")+(n.paramsSerializer?n.paramsSerializer(n.params):new URLSearchParams(n.params))),(n.fetch||fetch)(c,{method:(i||n.method||"get").toUpperCase(),body:r,headers:l(n.headers,p,!0),credentials:n.withCredentials?"include":u}).then(function(s){for(var h in s)typeof s[h]!="function"&&(o[h]=s[h]);return n.responseType=="stream"?(o.data=s.body,o):s[n.responseType||"text"]().then(function(m){o.data=m,o.data=JSON.parse(m)}).catch(Object).then(function(){return(n.validateStatus?n.validateStatus(s.status):s.ok)?o:Promise.reject(o)})})}return f=f||{},t.request=t,t.get=function(e,a){return t(e,a,"get")},t.delete=function(e,a){return t(e,a,"delete")},t.head=function(e,a){return t(e,a,"head")},t.options=function(e,a){return t(e,a,"options")},t.post=function(e,a,i){return t(e,i,"post",a)},t.put=function(e,a,i){return t(e,i,"put",a)},t.patch=function(e,a,i){return t(e,i,"patch",a)},t.all=Promise.all.bind(Promise),t.spread=function(e){return e.apply.bind(e,e)},t.CancelToken=typeof AbortController=="function"?AbortController:Object,t.defaults=f,t.create=d,t}();y({method:"get",url:"https://api.weather.com/v3/wx/forecast/daily/7day?apiKey=e1f10a1e78da46f5b10a1e78da96f525&geocode=10.768%2C106.7&language=en-US&units=e&format=json"}).then(function(d){console.log(d)});
