import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsService } from './tabs/tabs.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TabsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
