import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { DefaultComponent } from './pages/default/default.component';

const routes: Routes = [

  {
    path: '',
    component: AdminComponent,
  },
{
  path: 'demo',
  component: DefaultComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
