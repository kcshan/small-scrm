import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'info',
    pathMatch: 'full',
  },
  {
    path: 'info',
    loadChildren: () =>
      import('./info/info.module').then((mod) => mod.InfoModule),
  },
  {
    path: 'input',
    loadChildren: () =>
      import('./input/input.module').then((mod) => mod.InputModule),
  },
  {
    path: '**',
    redirectTo: 'info',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
