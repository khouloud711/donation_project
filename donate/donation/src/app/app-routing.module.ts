import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonneMoiComponent } from './components/donne-moi/donne-moi.component';
import { HomeComponent } from './components/home/home.component';
import { AssociationsComponent } from './components/associations/associations.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { ContactComponent } from './components/contact/contact.component';
import { ListeDonsComponent } from './components/liste-dons/liste-dons.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { UserProfilComponent } from './components/user-profil/user-profil.component';




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

  { path:'user-profile/:id', component:UserProfilComponent,
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
