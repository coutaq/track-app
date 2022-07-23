import { Injectable, OnInit, NgZone } from '@angular/core';
import { TelegramLoginData } from './telegram-login-data';

@Injectable({
  providedIn: 'root'
})
export class TelegramLoginService { 
  private user:TelegramLoginData
  private isAuth:boolean   

  getUser(){
    return this.user
  }

  getIsAuth(){
    return this.isAuth
  }

  constructor(){
    (window as any)['loginViaTelegram'] = (loginData:TelegramLoginData) => this.loginViaTelegram(loginData);
  }

  private loginViaTelegram(loginData: TelegramLoginData, ngZone:NgZone) {
    this.ngZone.run(() => {
      console.log('Logged in as ' + loginData.first_name + ' ' + loginData.last_name + ' (' + loginData.id + (loginData.username ? ', @' + loginData.username : '') + ')');
      if(loginData.id){
        this.user = {...loginData}
        this.isAuth = true
      }
    });
    
  }
}