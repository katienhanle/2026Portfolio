const EVENT = "home-deck-exit";

export function emitHomeDeckExit() {
  window.dispatchEvent(new Event(EVENT));
}

export function onHomeDeckExit(callback: () => void) {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
}
