/* חיבור לשרת ההתראות. אחרי שתפתח את ה-Worker ב-Cloudflare — החלף את הכתובת בשורה server. */
window.PUSH_CONFIG = {
  server: "https://siach-push.tsfanyam1.workers.dev",
  vapidPublicKey: "BGutpWzLRBqGnNI0ZgG001gWUFGGWcQx3Po2P6x4IuGd3GMJlRAgedsQPryHWrlFsaxK5ODhScesJv2ke83sc0A"
};
