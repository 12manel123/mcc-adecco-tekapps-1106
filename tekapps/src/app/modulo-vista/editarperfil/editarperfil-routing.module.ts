import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPerfilPage } from './editarperfil.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarperfilPageRoutingModule {}
