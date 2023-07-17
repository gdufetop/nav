module.exports = {
    globDirectory: 'public/',
    globPatterns: [
        '**.{css,woff}',
        '**/*.{css,woff}',
        '404.html',
        'icons/*.{ico,png}',
    ],
    cleanupOutdatedCaches: true,
    skipWaiting: true,
    clientsClaim: true,
    sourcemap: false,
    maximumFileSizeToCacheInBytes: 52428800,
    navigationPreload: true,
    // navigateFallback: '/offline.html',
    navigateFallbackDenylist:[],
    runtimeCaching: [
        {
            urlPattern: new RegExp(/\.html$/),
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'dothtml',
            },
        },
        {
            urlPattern: new RegExp(/\/.+\/$/),
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'dirhtml',
            },
        },
        {
            urlPattern: new RegExp(/\/a\/.+/),
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'ahtml',
            },
        },
        {
            urlPattern: new RegExp(/\.(?:xml|txt|json)$/),
            handler: 'NetworkOnly',
        },
        {
            urlPattern: new RegExp(/\.(?:js)$/),
            handler: 'StaleWhileRevalidate',
            options: {
                cacheName: 'js',
            },
        },
        {
            urlPattern: new RegExp(/\.(?:css)$/),
            handler: 'CacheFirst',
            options: {
                cacheName: 'css',
            },
        },
        {
            urlPattern: new RegExp(/\.(?:png|gif|jpg|jpeg|svg|webp|ico)$/),
            handler: 'CacheFirst',
            options: {
                cacheName: 'images',
                cacheableResponse: {
                    statuses: [0, 200],
                },
                expiration: {
                    maxEntries: 99,
                    maxAgeSeconds: 2419200,
                },
            },
        },
        {
            urlPattern: new RegExp(/^https:\/\/cdnjs\.cloudflare\.com.*/),
            handler: 'CacheFirst',
            options: {
                cacheName: 'cloudflare-cdnjs',
                cacheableResponse: {
                    statuses: [0, 200],
                },
                fetchOptions: {
                    mode: 'cors',
                    credentials: 'omit',  
                },
                expiration: {
                    maxAgeSeconds: 2419200,
                },
            },
        },
    ],
};
