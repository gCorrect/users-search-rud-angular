// internal
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
// external
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// components
import { AppComponent } from './app.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UsersComponent } from './components/users/users.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserComponent } from './components/user/user.component';
import { UserDisplayComponent } from './components/user-display/user-display.component';
import { PostDisplayComponent } from './components/post-display/post-display.component';
// services
import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
  ],
  declarations: [
    AppComponent,
    UserSearchComponent,
    UsersComponent,
    UserEditComponent,
    UserComponent,
    UserDisplayComponent,
    PostDisplayComponent,
    MessagesComponent,
  ],
  providers: [PostsService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
