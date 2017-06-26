import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignInModule} from './sign-in/sign-in.module';
import { SignUpModule} from './sign-up/sign-up.module';
import { SignInComponent} from './sign-in/sign-in.component';
import { SignUpComponent} from './sign-up/sign-up.component';
import { LoginComponent } from './login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SignInModule,
    SignUpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
