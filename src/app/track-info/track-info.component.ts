import { Component, OnInit, Input } from '@angular/core';
import { TrackData } from '../track-data';
import { TelegramLoginService } from '../telegram-login.service';
import { TrackServiceService } from '../track-service.service';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss']
})
export class TrackInfoComponent implements OnInit {
  telegramLoginService:TelegramLoginService
  trackService:TrackServiceService
  @Input() trackData:TrackData|null = null;
  constructor(telegramLoginService:TelegramLoginService, trackService:TrackServiceService) {
    this.telegramLoginService = telegramLoginService
    this.trackService = trackService
   }

  ngOnInit(): void {
    console.log(this.trackData)
  }
  edit(){

  }
  delete(){
    this.trackService.delete(this.trackData!)
  }

}
