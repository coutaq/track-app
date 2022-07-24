import { Injectable, OnInit, NgZone } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { TelegramLoginData } from './telegram-login-data';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/globals';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class TelegramLoginService { 
  private user:User
  private isAuth:boolean   
  private storage:StorageMap

  getUser(){
    return this.user
  }


  constructor(ngZone:NgZone, storage: StorageMap, private http: HttpClient){
    this.storage = storage
    this.storage.get('user').subscribe((user) => {
      this.user = user as User  
    });
    (window as any)['loginViaTelegram'] = (loginData:TelegramLoginData) => this.loginViaTelegram(loginData, ngZone);
  }

  private loginViaTelegram(loginData: TelegramLoginData, ngZone:NgZone) {
   
    console.log(loginData)
    var form_data = new FormData();

    for ( var key in loginData ) {
        form_data.append(key, loginData[key as keyof TelegramLoginData].toString());
    }

    this.http.post<User>(API_URL+"auth", form_data).subscribe((data)=>{
      ngZone.run<void>(() => {

        if(loginData.id){
          this.user = {...data}
          this.storage.set('user', this.user).subscribe(() => {});
          console.log('Logged in as ' + this.user.first_name + ' (' +  this.user.id + ')');
        }
      });
    })
  }
}