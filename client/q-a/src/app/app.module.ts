import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewQComponent } from './new-q/new-q.component';
import { NewAComponent } from './new-a/new-a.component';
import { QuestionService } from './q-a.service';
import { QuestionComponent } from './question/question.component';
import { SearchPipe } from './search/search.pipe';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    NewQComponent,
    NewAComponent,
    QuestionComponent,
    SearchPipe,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
