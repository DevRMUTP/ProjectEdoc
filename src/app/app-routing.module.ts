import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'litsbook', loadChildren: './litsbook/litsbook.module#LitsbookPageModule' },
  { path: 'filter', loadChildren: './filter/filter.module#FilterPageModule' },
  { path: 'detailedoc', loadChildren: './detailedoc/detailedoc.module#DetailedocPageModule' },
  { path: 'tree', loadChildren: './tree/tree.module#TreePageModule' },
  { path: 'forworddoc', loadChildren: './forworddoc/forworddoc.module#ForworddocPageModule' },
  { path: 'forwarddoc', loadChildren: './forwarddoc/forwarddoc.module#ForwarddocPageModule' },

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
