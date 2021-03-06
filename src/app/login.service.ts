import * as io from 'socket.io-client';

import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';

@Injectable()
export class LoginService {

    public socket;

    private url = 'https://ad-test-login.herokuapp.com';
    // private url = 'http://localhost:8080';

    constructor() {
        this.socket = io(this.url);
    }

    checkLogin(username) {
        // username = 'abc';
        this.socket.emit('login', username);
    }

    listOnline() {
        let observable = new Observable(obsever => {
            this.socket.on('online', data => {
                obsever.next(data);
            });
        });

        return observable;
    }
}