import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BheemComponent } from './bheem/bheem.component';
import { ChutkiComponent } from './chutki/chutki.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, BheemComponent, ChutkiComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
