import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'notification',
    component:NotificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
