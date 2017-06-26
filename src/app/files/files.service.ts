import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FilesService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllFiles() {
    return this.http.get('/api/files')
      .map(res => res.json());
  }

}
