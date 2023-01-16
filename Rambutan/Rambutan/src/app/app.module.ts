import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './layout/app.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LeftPanelComponent } from './layout/left.component';
import { HeadComponent } from './layout/head.component';
import { AppRoutingModule } from './app-routing.modules';
import { PagesComponent } from './components/pages/pages.component';
import { TableComponent } from './layout/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    HeadComponent,
    PagesComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    //MatInputModule,
    ////MatFormFieldModule,
    //MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
