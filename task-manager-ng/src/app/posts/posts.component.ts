import {
  Component,
  OnInit
} from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    console.log('PostsComponent initialized');
    this.postsService.getPosts().subscribe(
      (data) => {
        console.log('data', data);
      },
      (err) => {
        console.log('err', err);
      }
    )
  }
}