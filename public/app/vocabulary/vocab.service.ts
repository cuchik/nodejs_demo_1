import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Vocab} from './vocab';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class VocabService {
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getVocabs(theme: string): Promise<Vocab[]> {
		return this.http.get('api/vocabByTheme/' + theme)
										.toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
	}
  addVocab(body: Object): Promise<Vocab[]> {
    let options = new RequestOptions({ headers: this.headers }); // Create a request option
    return this.http.post('api/addVocab', body, options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }
  deleteVocab(body: Object): Promise<Vocab[]> {
    let options = new RequestOptions({ headers: this.headers }); // Create a request option
    return this.http.post('api/deleteVocab', body, options)
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