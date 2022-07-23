import { TelegramLoginService } from './../telegram-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {

  constructor(telegramLoginService:TelegramLoginService) {
    telegramLoginService.init();
   }

  ngOnInit(): void {
  }

}
