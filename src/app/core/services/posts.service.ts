import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel, CommentModel} from '../../common/models/posts.model';
import {NotificationService} from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private BASE_URL = `http://localhost:3000/posts`;

  constructor(private http: HttpClient, private notification: NotificationService) {
  }

  getAllPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.BASE_URL}`);
  }

  getCommentsById(id): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(`${this.BASE_URL}/${id}/comments`);
  }

  createPost(data): void {
    this.http.post<PostModel>(`${this.BASE_URL}`, data).subscribe(
      (() => console.log('success')), error => {
        console.log(error)
        this.notification.updateMessage(error.error)
      }
    );
  }

  deletePostById(id): void {
    this.http.delete<PostModel>(`${this.BASE_URL}/${id}`).subscribe(
      () => console.log('success'), error => {
        console.log(error)
        this.notification.updateMessage(error.error)
      }
    );
  }
}
