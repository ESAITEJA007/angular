import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './footer/footer.component';
import { InboxpageComponent } from './inboxpage/inboxpage.component';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { TtclassDirective } from './ttclass.directive';
import { TempConvertPipe } from './temp-convert.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InboxpageComponent,
    CustomerListComponent,
    TtclassDirective,
    TempConvertPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
