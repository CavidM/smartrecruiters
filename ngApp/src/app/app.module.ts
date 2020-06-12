import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostingsListComponent } from './components/postings-list/postings-list.component';
import { PostingDetailsComponent } from './posting-details/posting-details.component';
import { SafePipe } from './safe.pipe';
import { BackButtonDirective } from './back-button.directive';
import { PostingsFilterComponent } from './postings-filter/postings-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostingsListComponent,
    PostingDetailsComponent,
    SafePipe,
    BackButtonDirective,
    PostingsFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
