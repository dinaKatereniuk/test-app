import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {PostsComponent} from './posts.component';


@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PostsModule {
}
