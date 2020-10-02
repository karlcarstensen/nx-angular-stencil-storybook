import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

// Note: loader import location set using "esmLoaderPath" within the output target config
import { applyPolyfills, defineCustomElements } from '@nx-angular-stencil-storybook/payactiv-ui/loader';

applyPolyfills().then(() => {
  defineCustomElements()
})

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
