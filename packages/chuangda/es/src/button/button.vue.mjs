import { defineComponent as e, computed as u, openBlock as c, createElementBlock as s, normalizeClass as l, unref as p, renderSlot as a } from "vue";
import "./style/index.css";
const d = e({ name: "cd-button" }), b = /* @__PURE__ */ e({
  ...d,
  props: {
    type: null
  },
  setup(o) {
    const t = o, n = u(() => ({ [`cd-button--${t.type}`]: t.type }));
    return (r, m) => (c(), s("button", {
      class: l(["cd-button", p(n)])
    }, [
      a(r.$slots, "default")
    ], 2));
  }
});
export {
  b as default
};
