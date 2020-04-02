import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonneMoiComponent } from './donne-moi/donne-moi.component';
import { HomeComponent } from './home/home.component';
import { AssociationsComponent } from './associations/associations.component';
import { CategoriesComponent } from './categories/categories.component';
import { DonLivresComponent } from './don-livres/don-livres.component';
import { DonAutresComponent } from './don-autres/don-autres.component';
import { DonMaterielsComponent } from './don-materiels/don-materiels.component';
import { DonVetementsComponent } from './don-vetements/don-vetements.component';
import { DonProduitsComponent } from './don-produits/don-produits.component';
import { DonMeublesComponent } from './don-meubles/don-meubles.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Donner', component : DonneMoiComponent},
  { path: 'Don-livres', component : DonLivresComponent},
  { path: 'Don-meubles', component : DonMeublesComponent},
  { path: 'Don-produits', component : DonProduitsComponent},
  { path: 'Don-vetements', component : DonVetementsComponent},
  { path: 'Don-materiels', component : DonMaterielsComponent},
  { path: 'Don-autres', component : DonAutresComponent},
  { path: 'AssociationMap', component : AssociationsComponent},
  { path: 'Categories', component : CategoriesComponent,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,DonneMoiComponent,AssociationsComponent,
                                  CategoriesComponent,DonLivresComponent,DonMeublesComponent,
                                  DonProduitsComponent,DonVetementsComponent,DonMaterielsComponent,DonAutresComponent]
