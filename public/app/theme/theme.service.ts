import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Theme} from './theme';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ThemeService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getThemes(): Promise<Theme[]> {
		return this.http.get('api/themes')
										.toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
	}
	getThemesSlowly(): Promise<Theme[]> {
		return new Promise(resolve => {
			setTimeout(() => resolve(this.getThemes()), 2000);
		});
	}
	getTheme(name: string): Promise<Theme> {
    return this.http.get('api/oneTheme/' + name)
    								.toPromise()
    								.then(this.extractData)
    								.catch(this.handleError);
  }
  addTheme(body: Object): Promise<Theme> {
    let options = new RequestOptions({ headers: this.headers }); // Create a request option
    return this.http.post('api/addTheme', body, options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }
  deleteTheme(body: Object): Promise<Theme> {
    let options = new RequestOptions({ headers: this.headers }); // Create a request option
    return this.http.post('api/deleteTheme', body, options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  private extractData(res: Response) {
    let body = JSON.parse(res['_body']);
    return body || { };
  }
}