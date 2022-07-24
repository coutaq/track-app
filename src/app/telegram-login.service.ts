import { Injectable, OnInit, NgZone } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { TelegramLoginData } from './telegram-login-data';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/globals';
@Injectable({
  providedIn: 'root'
})
export class TelegramLoginService { 
  private user:TelegramLoginData
  private isAuth:boolean   
  private storage:StorageMap

  getUser(){
    return this.user
  }

  getIsAuth(){
    return this.isAuth
  }

  constructor(ngZone:NgZone, storage: StorageMap, private http: HttpClient){
    this.storage = storage
    this.storage.get('user').subscribe((user) => {
      this.user = user as TelegramLoginData
      if(this.user){
        this.isAuth = true
      }else{
        this.isAuth = false
      }
    
    });
    (window as any)['loginViaTelegram'] = (loginData:TelegramLoginData) => this.loginViaTelegram(loginData, ngZone);
  }

  private loginViaTelegram(loginData: TelegramLoginData, ngZone:NgZone) {
    let req = this.http.post(API_URL+"auth", loginData)
    console.log("AUTH!!!:"+req.subscribe())
    if(!this.getIsAuth()){
      ngZone.run<void>(() => {
        console.log('Logged in as ' + loginData.first_name + ' ' + loginData.last_name + ' (' + loginData.id + (loginData.username ? ', @' + loginData.username : '') + ')');
        console.log(loginData)
        // if(loginData.id){
        //   this.user = {...loginData}
        //   this.storage.set('user', this.user).subscribe(() => {});
        //   this.isAuth = true
        // }
      });
    }
    
    
  }
}