import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APP-LOGIN';
  name = '';
  online = ['a'];
  constructor(
    private loginService: LoginService
  ) {
    this.loginService.listOnline().subscribe((data:any) => {
      // console.log(data);
      this.online = data;
    })
    // this.loginService.checkLogin('viet');
  }

  login(){
    console.log(this.name)
    this.loginService.checkLogin(this.name);
  }
}
