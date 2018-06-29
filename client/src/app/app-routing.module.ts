import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { UsersComponent } from './chat/shared/users/users.component';
import { CallComponent } from './chat/shared/call/call.component';
import { ListOfActComponent } from './chat/shared/list-of-act/list-of-act.component';

const routes: Routes = [  
   { path: 'users', component: UsersComponent },   
   { path: 'call', component: CallComponent },
   { path: 'chat', component: ChatComponent },
  { path: 'call/:name', component: CallComponent },
   { path: 'call/:name/:fromListOfAct', component: CallComponent },
   { path: 'chat/:name/:fromListOfAct', component: ChatComponent },
   { path: 'chat/:name', component: ChatComponent },
   { path: 'answerCall', component: CallComponent },
     { path: 'listOfAct', component: ListOfActComponent },
   { path: '', redirectTo: 'users', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
