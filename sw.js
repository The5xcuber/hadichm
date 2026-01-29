// This is the Service Worker (Ghost Script)
self.addEventListener('install', (e) => {
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log("Ghost Script is now haunting your laptop background.");
});

// This listens for data even when the tab is closed
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/') // Opens your chat when you click the notification
    );
});
