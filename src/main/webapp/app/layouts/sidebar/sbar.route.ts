import { Route } from '@angular/router';

import { SbarComponent } from './sbar.component';

export const sbarRoute: Route = {
    path: '',
    component: SbarComponent,
    outlet: 'sbar'
};
