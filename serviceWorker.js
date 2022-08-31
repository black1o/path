const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/age.png",
  "/calendar.png",
  "/doctor.png",
  "/download.png",
  "/email.png",
  "/head.jpg",
  "/logo.icon.jpg",
  "/logo.jpg",
  "/pen.jpg",
  "/range.png",
  "/remark.png",
  "/result.png",
  "/sampleid.png",
  "/sex.png",
  "/unit.png",
  "/user.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
