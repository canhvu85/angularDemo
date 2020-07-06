import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/Blocks/Menu/menu.component';
import { SliderComponent } from './Components/Blocks/Slider/slider.component';
import { UsersComponent } from './Components/Blocks/Users/users.component';
import { CatalogiesComponent } from './Components/Blocks/Catalogies/catalogies.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    UsersComponent,
    CatalogiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
