import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { ThemeDetailComponent } from './theme/theme-detail.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeService } from './theme/theme.service';
import { VocabService } from './vocabulary/vocab.service';
import { VocabComponent } from './vocabulary/vocab.component';


import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
	  BrowserModule,
	  FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
  	AppComponent,
  	ThemeDetailComponent,
    ThemeComponent,
    VocabComponent
  ],
  providers: [
    ThemeService,
  	VocabService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
