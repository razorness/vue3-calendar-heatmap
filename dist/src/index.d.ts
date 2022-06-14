import { App } from 'vue';
declare function install(Vue: App): void;
declare const _default: {
    install: typeof install;
};
export default _default;
export * from './components/Heatmap';
export { default as CalendarHeatmap } from './components/CalendarHeatmap.vue';
