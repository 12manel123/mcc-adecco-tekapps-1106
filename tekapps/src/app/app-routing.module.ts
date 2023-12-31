import { NgModule } from '@angular/core';//se utiliza para configurar los módulos de la aplicación.
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';//se utiliza para definir las rutas y asociar componentes a esas rutas. 

const routes: Routes = [
  
  {
    path: 'login',
    loadChildren: () => import('./modulo-vista/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'register',
    loadChildren: () => import('./modulo-vista/register/register.module').then( m => m.RegisterPageModule)
  },
  {path: '',
    
  loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
},
  {
    path: 'privacidad',
    loadChildren: () => import('./modulo-vista/privacidad/privacidad.module').then( m => m.PrivacidadPageModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./modulo-vista/busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },
  {
    path: 'conexiones',
    loadChildren: () => import('./modulo-vista/conexiones/conexiones.module').then( m => m.ConexionesPageModule)
  },
  {
    path: 'sistema',
    loadChildren: () => import('./modulo-vista/sistema/sistema.module').then( m => m.SistemaPageModule)
  },
  {
    path: 'privacidad-seguridad',
    loadChildren: () => import('./modulo-vista/privacidad-seguridad/privacidad-seguridad.module').then( m => m.PrivacidadSeguridadPageModule)
  },
  {
    path: 'directrices-comunidad',
    loadChildren: () => import('./modulo-vista/directrices-comunidad/directrices-comunidad.module').then( m => m.DirectricesComunidadPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./modulo-vista/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'licencia',
    loadChildren: () => import('./modulo-vista/licencia/licencia.module').then( m => m.LicenciaPageModule)
  },
  {
    path: 'creditos',
    loadChildren: () => import('./modulo-vista/creditos/creditos.module').then( m => m.CreditosPageModule)
  },
  {
    path: 'canal',
    loadChildren: () => import('./modulo-vista/canal/canal.module').then( m => m.CanalPageModule)
  },
  {
    path: 'directos',
    loadChildren: () => import('./modulo-vista/directos/directos.module').then( m => m.DirectosPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./modulo-vista/editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
//Esto serian todas las rutas accesibles de la aplicacion

  

 


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],//Se configura el enrutamiento principal de la aplicación utilizando el módulo RouterModule. 
  exports: [RouterModule]
})
export class AppRoutingModule {}
// En este caso, el módulo RouterModule se exporta para que otros módulos puedan importar y utilizar las funcionalidades de enrutamiento proporcionadas por este módulo.