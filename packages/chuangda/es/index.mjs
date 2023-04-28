import * as o from "./src/index.mjs";
import { CdButton as d } from "./src/button/index.mjs";
import { CdIcon as i } from "./src/icon/index.mjs";
const r = {
  install: (t) => {
    for (const n in o)
      t.use(o[n]);
  }
};
export {
  d as CdButton,
  i as CdIcon,
  r as default
};
