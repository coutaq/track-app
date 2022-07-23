import { Component, OnInit } from '@angular/core';
import { TelegramLoginService } from '../telegram-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  telegramLoginService:TelegramLoginService
  constructor(telegramLoginService:TelegramLoginService) { 
    this.telegramLoginService = telegramLoginService
  }

  ngOnInit(): void {
  }

}
