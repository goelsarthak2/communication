import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';
import { SharedModule } from './shared/shared.module';
import { UsersComponent } from './chat/shared/users/users.component';
import { CallComponent } from './chat/shared/call/call.component';
import { ListOfActComponent } from './chat/shared/list-of-act/list-of-act.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CallComponent,
    ListOfActComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ChatModule,
    SharedModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
