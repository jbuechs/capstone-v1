// Angular imports
import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

// Rxjs imports
import { Observable } from 'rxjs/Observable';

// Project imports
import { Adie } from '../models/adie';

@Injectable()

export class AdieService {
	constructor (private http: Http) {}

	private _adiesUrl = 'https://ada-capstone-api.herokuapp.com/adies/';  // URL to web api

	getAdies() {
		return this.http.get(this._adiesUrl)
			.map(res => <Adie[]> res.json().data)
			// .do(data => console.log(data))
			.catch(this.handleError);
  }
  private handleError(error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}