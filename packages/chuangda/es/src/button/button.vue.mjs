import { defineComponent as e, computed as r, openBlock as u, createElementBlock as l, normalizeClass as p, unref as c, renderSlot as a } from "vue";
import "./style/index.css";
const m = e({ name: "sw-button" }), d = /* @__PURE__ */ e({
  ...m,
  props: {
    type: null
  },
  setup(o) {
    const t = o, n = r(() => ({ [`sw-button--${t.type}`]: t.type }));
    return (s, f) => (u(), l("button", {
      class: p(["sw-button", c(n)])
    }, [
      a(s.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};