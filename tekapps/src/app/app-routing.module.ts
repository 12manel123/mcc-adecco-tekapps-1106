import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {path: '',
    
  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
},
  {
    path: 'mi-canal',
    loadChildren: () => import('./mi-canal/mi-canal.module').then( m => m.MiCanalPageModule)
  },
  {
    path: 'privacidad',
    loadChildren: () => import('./privacidad/privacidad.module').then( m => m.PrivacidadPageModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },
  {
    path: 'conexiones',
    loadChildren: () => import('./conexiones/conexiones.module').then( m => m.ConexionesPageModule)
  },
  {
    path: 'sistema',
    loadChildren: () => import('./sistema/sistema.module').then( m => m.SistemaPageModule)
  },
  {
    path: 'privacidad-seguridad',
    loadChildren: () => import('./privacidad-seguridad/privacidad-seguridad.module').then( m => m.PrivacidadSeguridadPageModule)
  },
  {
    path: 'directrices-comunidad',
    loadChildren: () => import('./directrices-comunidad/directrices-comunidad.module').then( m => m.DirectricesComunidadPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
 


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
