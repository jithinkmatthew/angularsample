import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

@Injectable()
export class JsonserverService {

    constructor(private http: Http) { }

    createUser(user: IUser) {
        return this.http.post('http://localhost:3000/signup', user);

    }
}
