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
    path: 'privacidad',
    loadChildren: () => import('./configuracion/privacidad/privacidad.module').then( m => m.PrivacidadPageModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },
  {
    path: 'conexiones',
    loadChildren: () => import('./configuracion/conexiones/conexiones.module').then( m => m.ConexionesPageModule)
  },
  {
    path: 'sistema',
    loadChildren: () => import('./configuracion/sistema/sistema.module').then( m => m.SistemaPageModule)
  },
  {
    path: 'privacidad-seguridad',
    loadChildren: () => import('./configuracion/privacidad-seguridad/privacidad-seguridad.module').then( m => m.PrivacidadSeguridadPageModule)
  },
  {
    path: 'directrices-comunidad',
    loadChildren: () => import('./configuracion/directrices-comunidad/directrices-comunidad.module').then( m => m.DirectricesComunidadPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./configuracion/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'licencia',
    loadChildren: () => import('./configuracion/licencia/licencia.module').then( m => m.LicenciaPageModule)
  },
  {
    path: 'creditos',
    loadChildren: () => import('./configuracion/creditos/creditos.module').then( m => m.CreditosPageModule)
  },
  {
    path: 'en-directo',
    loadChildren: () => import('./en-directo/en-directo.module').then( m => m.EnDirectoPageModule)
  },
  {
    path: 'canal',
    loadChildren: () => import('./canal/canal.module').then( m => m.CanalPageModule)
  },
 


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
