import { Injectable } from '@angular/core';
import { TelegramLoginData } from './telegram-login-data';

@Injectable({
  providedIn: 'root'
})
export class TelegramLoginService {    
  init() {
    
    (window as any)['loginViaTelegram'] = (loginData:TelegramLoginData) => this.loginViaTelegram(loginData);
    console.log('asd')
  }

  private loginViaTelegram(loginData: TelegramLoginData) {
    alert('Logged in as ' + loginData.first_name + ' ' + loginData.last_name + ' (' + loginData.id + (loginData.username ? ', @' + loginData.username : '') + ')');
    // this.ngZone.run(() => process(loginRequest));
  }
}