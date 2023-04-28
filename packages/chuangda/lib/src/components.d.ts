import * as components from './index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    cdButton: typeof components.Button;
    cdIcon: typeof components.Icon;
  }
}
export {};
