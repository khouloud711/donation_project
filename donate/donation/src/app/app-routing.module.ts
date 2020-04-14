import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonneMoiComponent } from './donne-moi/donne-moi.component';
import { HomeComponent } from './home/home.component';
import { AssociationsComponent } from './associations/associations.component';
import { CategoriesComponent } from './categories/categories.component';

import { ContactComponent } from './contact/contact.component';
import { ListeDonsComponent } from './liste-dons/liste-dons.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Donner', component : DonneMoiComponent},

  { path: 'AssociationMap', component : AssociationsComponent},
  { path: 'Categories', component : CategoriesComponent},

  { path:'Contact', component:ContactComponent},

  { path:'listeDons', component:ListeDonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,DonneMoiComponent,AssociationsComponent,
                                  CategoriesComponent,ListeDonsComponent,
                                  ContactComponent]
