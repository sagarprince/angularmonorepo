import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RootModule } from './app/root/root.module';
import { environment } from './environments/environment';

import { persistState } from '@datorama/akita';

if (environment.production) {
  enableProdMode();
}

persistState({
  include: ['ui', 'auth'],
  key: 'LMS_TUTOR'
});

platformBrowserDynamic().bootstrapModule(RootModule)
  .catch(err => console.error(err));
