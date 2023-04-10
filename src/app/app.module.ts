import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithoutDiscountComponent } from './products-without-discount/products-without-discount.component';
import { RegisterComponent } from './TDF-register/register.component';
import { LoginComponent } from './TDF-login/login.component';
import { ReactiveRegistrationComponent } from './reactive-registration/reactive-registration.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';
import { NotesComponent } from './notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    ProductsWithDiscountComponent,
    ProductsWithoutDiscountComponent,
    RegisterComponent,
    LoginComponent,
    ReactiveRegistrationComponent,
    ReactiveLoginComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
