import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  get isUserValidAndLoggedIn() {
    return true;
  }

}
