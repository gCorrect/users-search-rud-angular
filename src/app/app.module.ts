// @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//routing
import { AppRoutingModule } from './app-routing.module';
// external
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// components
import { AppComponent } from './app.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
// services
import { UsersService } from './services/users.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    UserSearchComponent,
    UsersListComponent,
    UserEditComponent,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
