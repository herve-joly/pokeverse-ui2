import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatNativeDateModule} from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule ,
    HttpClientModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }


