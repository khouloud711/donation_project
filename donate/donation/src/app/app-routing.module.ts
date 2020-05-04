import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonneMoiComponent } from './donne-moi/donne-moi.component';
import { HomeComponent } from './home/home.component';
import { AssociationsComponent } from './associations/associations.component';
import { CategoriesComponent } from './categories/categories.component';

import { ContactComponent } from './contact/contact.component';
import { ListeDonsComponent } from './liste-dons/liste-dons.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { UserProfilComponent } from './user-profil/user-profil.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Donner', component : DonneMoiComponent,
                    canActivate: [AuthGuard]},

  { path: 'AssociationMap', component : AssociationsComponent},
  { path: 'Categories', component : CategoriesComponent},

  { path:'Contact', component:ContactComponent},

  { path:'listeDons', component:ListeDonsComponent},

  { path:'login', component:LoginComponent},
  { path:'registre', component:RegisterComponent},

  { path:'profil', component:UserProfilComponent,
                   canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent,DonneMoiComponent,AssociationsComponent,
                                  CategoriesComponent,ListeDonsComponent,
                                  ContactComponent,LoginComponent,RegisterComponent,
                                  UserProfilComponent]
