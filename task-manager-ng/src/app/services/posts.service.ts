import { Injectable } from '@angular/core';
import { AbstractService } from './abstract.service';
import { RequestOptions, Headers, Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService extends AbstractService {

  // private campaignName: string = null;
  // private readonly campaign = 'campaign';

  private headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
    super();
  }

  public getPosts(): Observable<any> {
    return this.http.get(`/posts`, this.options).map(this.convert);
  }
}
