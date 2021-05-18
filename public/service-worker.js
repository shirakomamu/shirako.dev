/* eslint-disable no-undef */
if (workbox) {
  console.log(`Workbox is loaded`);

  workbox.precaching.precacheAndRoute(self.__precacheManifest);

  self.addEventListener("message", (event) => {
    self.postMessage(event.data);
  });
} else {
  console.log(`Workbox didn't load`);
}
