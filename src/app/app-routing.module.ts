import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithoutDiscountComponent } from './products-without-discount/products-without-discount.component';
import { RegisterComponent } from './TDF-register/register.component';
import { LoginComponent } from './TDF-login/login.component';
import { ReactiveRegistrationComponent } from './reactive-registration/reactive-registration.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent,
  children:[
    {path:'ProductsWithDiscount',component:ProductsWithDiscountComponent},
    {path:'ProductsWithoutDiscount',component:ProductsWithoutDiscountComponent}
   ]
  },
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'comments/:postID',component:CommentsComponent},
  {path:'TDFregister',component:RegisterComponent},
  {path:'TDFlogin',component:LoginComponent},
  {path:'RFregister',component:ReactiveRegistrationComponent},
  {path:'RFlogin',component:ReactiveLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
