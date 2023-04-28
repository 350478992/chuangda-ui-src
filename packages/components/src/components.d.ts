import * as components from './index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    cdButton: typeof components.CdButton;
    cdIcon: typeof components.CdIcon;
  }
}
export {};
