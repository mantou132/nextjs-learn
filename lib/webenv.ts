// @ts-nocheck
if (typeof window === "undefined") {
  globalThis.window = globalThis;

  const getAny = () =>
    new Proxy(() => getAny(), {
      get(target, k) {
        if (k === Symbol.toPrimitive) return () => '';
        return target[k] || (target[k] = getAny());
      },
    });
  const any = getAny();

  globalThis.document = any;
  globalThis.addEventListener = any;
  global.history = any;
  globalThis.navigator = any;
  globalThis.customElements = any;
  globalThis.HTMLElement = null;
  globalThis.location = new URL('about:blank');
}
