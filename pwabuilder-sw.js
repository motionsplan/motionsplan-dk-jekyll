// Navn på cachen – skift versionsnummer (f.eks. v2), når du laver store ændringer på siden
const CACHE_NAME = "meteoric-cache-v2";
const OFFLINE_FALLBACK = "index.html";

// 1. INSTALLATION: Læg fallback-siden i cachen
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installerer...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Cacher offline-side");
      return cache.add(OFFLINE_FALLBACK);
    })
  );
  self.skipWaiting();
});

// 2. AKTIVERING: Slet gammel cache når koden opdateres
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Aktiverer...");
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[Service Worker] Fjerner gammel cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Ignorer alt andet end GET, samt ikke-HTTP(S) forespørgsler
  if (request.method !== "GET" || !request.url.startsWith("http")) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then(async (response) => {
        // Gem i cachen hvis svaret er HTTP 200 OK
        if (response.status === 200 && response.type === "basic") {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, response.clone());
        }
        return response;
      })
      .catch(async () => {
        console.log("[Service Worker] Netværksfejl for:", request.url);

        // 1. Prøv at hente den forespurgte fil fra cachen
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // 2. Hvis det er en sidevisning (navigation), vis offline-fallback siden
        if (request.mode === "navigate") {
          const offlinePage = await caches.match(OFFLINE_FALLBACK);
          if (offlinePage) {
            return offlinePage;
          }
        }

        // 3. SIKKERHEDSNET: Hvis alt andet fejler, returner et gyldigt Response-objekt!
        return new Response("Indholdet er ikke tilgængeligt offline.", {
          status: 503,
          statusText: "Service Unavailable",
          headers: new Headers({ "Content-Type": "text/plain; charset=utf-8" })
        });
      })
  );
});