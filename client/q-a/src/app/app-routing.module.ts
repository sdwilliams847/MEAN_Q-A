import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
import { NewQComponent } from './new-q/new-q.component';
import { NewAComponent } from './new-a/new-a.component';

const routes: Routes = [
  { path:'', pathMatch:'full', component:UserComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'question/:id', component:QuestionComponent },
  { path:'newQ', component:NewQComponent },
  { path:'newA/:id', component:NewAComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
