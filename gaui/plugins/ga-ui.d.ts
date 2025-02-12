import { App } from 'vue';
import { IGaUiStorage } from '../plugins/ga-ui-storage';
declare const GaUiPlugin: {
    install(app: App, options?: IGaUiStorage): void;
};
export default GaUiPlugin;
