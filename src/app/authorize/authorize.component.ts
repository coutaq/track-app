import { TelegramLoginService } from './../telegram-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {
  // private isAuth:boolean = false;
  telegramLoginService:TelegramLoginService
  constructor(private telegramLoginSer:TelegramLoginService) {
    this.telegramLoginService = telegramLoginSer
  }

  ngOnInit(): void {
  }

}
