const C="home-crossfit-v6-4-ios";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(["./","./index.html","./manifest.json"]))) });
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(r=>{let c=r.clone();caches.open(C).then(x=>x.put('./index.html',c));return r}).catch(()=>caches.match('./index.html')))}else{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))}});
