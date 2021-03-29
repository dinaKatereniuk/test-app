import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../core/services/local-storage.service';
import {PostsService} from 'src/app/core/services/posts.service';
import {CommentModel, PostModel} from '../../common/models/posts.model';
import {FormBuilder, Validators} from '@angular/forms';
import {User} from 'src/app/shared/auth-mock/auth-mock.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  user: User;
  comments: CommentModel[];
  panelOpenState = false;
  postForm = this.fb.group({
    title: ['', [Validators.required]],
    body: ['', [Validators.required]],
  });
  public posts: PostModel[];

  constructor(private localStorage: LocalStorageService, private postService: PostsService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data: PostModel[]) => {
      this.posts = data;
      this.posts.forEach(item => {
        this.postService.getCommentsById(item.id).subscribe(comments => {
          const arr: CommentModel[] = [];
          if (comments.length > 0) {
            comments.forEach(value => arr?.push(value));
          }
          this.comments = arr;
        });
      });

    });
    this.user = this.localStorage.getUserData();
  }

  createNewPost(): void {
    const idNumber = this.posts.length + 1;
    if (this.postForm.valid) {
      const requestBody = {
        userId: this.user.id,
        id: idNumber,
        title: this.postForm.controls.title.value,
        body: this.postForm.controls.body.value,
      };
      this.postService.createPost(requestBody);
    }
  }

  deleteOnlyMyPost(index: string): void {
    this.postService.deletePostById(index);
  }

  displayComments(id: string): CommentModel[] {
    return this.comments?.filter(comment => comment.id === id);
  }
}
