import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  { path: 'user-search', component: UserSearchComponent },
  { path: 'user-search/update/:id', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
