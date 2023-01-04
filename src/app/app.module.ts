import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CreateuserComponent } from './createuser/createuser.component';

const routesConfig: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'basics',
    component: BasicComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'userList',
    component: UserlistComponent,
    children: [
      {
        path: 'createUser',
        component: CreateuserComponent
      },
      {
        path: 'editUser/:id',
        component: CreateuserComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },



]

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    HeaderComponent,
    FormComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserlistComponent,
    CreateuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routesConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
