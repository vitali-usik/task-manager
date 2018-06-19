import { Response } from '@angular/http';

export class AbstractService {

  protected convert(response: Response) {
    const contentType = response.headers.get('content-type');

    // if (contentType && contentType.indexOf('application/json') !== -1) {
    //   return response.json();
    // }
    //
    // return {};
    return response.json();
  }
}
