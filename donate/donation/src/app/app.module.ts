import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { DonMaterielsComponent } from './don-materiels/don-materiels.component';
//import { DonMeublesComponent } from './don-meubles/don-meubles.component';
//import { DonAutresComponent } from './don-autres/don-autres.component';
//import { DonProduitsComponent } from './don-produits/don-produits.component';
//import { DonVetementsComponent } from './don-vetements/don-vetements.component';
//import { DonLivresComponent } from './don-livres/don-livres.component';
//import { CategoriesComponent } from './categories/categories.component';
//import { AssociationsComponent } from './associations/associations.component';
//import { DonneMoiComponent } from './donne-moi/donne-moi.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
