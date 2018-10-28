importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0220886a705b3a9865b7.js",
    "revision": "369f5b8b4372c068654096f4a74edcf3"
  },
  {
    "url": "/_nuxt/1282f5a1c28eb6a91d27.js",
    "revision": "ffab2aa269d07649f5d04d53e6a1bec7"
  },
  {
    "url": "/_nuxt/e395c50d763b927c67e8.js",
    "revision": "4d0059d692d162ad072156c095a4191c"
  },
  {
    "url": "/_nuxt/f5656def12ae433edf77.js",
    "revision": "cea63ef1ae7cff9e4678f10e05f68355"
  }
], {
  "cacheId": "darkiosys.com",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





