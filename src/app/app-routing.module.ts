import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenContainerComponent } from './open-container/open-container.component';

const routes: Routes = [
  {path: '**', component: OpenContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
