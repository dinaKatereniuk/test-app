import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './common/components/home/home.component';
import {LoginComponent} from './common/components/login/login.component';
import {PostsComponent} from './modules/posts-module/posts.component';
import {AuthGuardService} from './core/guards/auth-guard.service';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuardService]},
  {path: 'posts',  loadChildren: () => import('./modules/posts-module/posts.module').then(m => m.PostsModule), canActivate: [AuthGuardService]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
