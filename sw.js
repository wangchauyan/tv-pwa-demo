self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // 這裡可以加入緩存邏輯，這裡先直接回傳網絡請求
  e.respondWith(fetch(e.request));
});
