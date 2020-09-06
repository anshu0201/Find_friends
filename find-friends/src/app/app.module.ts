import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule, } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsService } from './friends.service';
import{ CheckdetailsService} from './checkdetails.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';

import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import {TabViewModule} from 'primeng/tabview';
import { FormComponent } from './form/form.component';
import {ButtonModule} from 'primeng/button';
import { TilesComponent } from './tiles/tiles.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HeaderComponent,
    FormComponent,
    TilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    HttpClientModule,
    TabMenuModule,
    TabViewModule,
    ButtonModule,
    ReactiveFormsModule,
   
  ],
  exports:[SearchBarComponent,HeaderComponent],
  providers: [FriendsService,CheckdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
