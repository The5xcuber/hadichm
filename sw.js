// Background Listener
self.addEventListener('push', function(event) {
    const data = event.data ? event.data.text() : 'New Message Received';
    
    event.waitUntil(
        self.registration.showNotification('Private Chat', {
            body: data,
            icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
            badge: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
            vibrate: [200, 100, 200],
            tag: 'chat-notif',
            renotify: true
        })
    );
});

// Force the worker to activate immediately
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
