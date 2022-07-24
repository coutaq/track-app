import { Component, OnInit } from '@angular/core';
import { TelegramLoginService } from '../telegram-login.service';
import { TrackData } from '../track-data';
import { TrackServiceService } from '../track-service.service';

@Component({
  selector: 'app-my-tracks',
  templateUrl: './my-tracks.component.html',
  styleUrls: ['./my-tracks.component.scss']
})
export class MyTracksComponent implements OnInit {

  telegramLoginService:TelegramLoginService
  trackService:TrackServiceService
  tracks:TrackData[] = [];
  constructor(telegramLoginService:TelegramLoginService, trackService: TrackServiceService) { 
    this.telegramLoginService = telegramLoginService
    this.trackService = trackService
  }

  ngOnInit(){
    if(this.telegramLoginService.getUser()){
      this.trackService.getTracks(this.telegramLoginService.getUser().id).then((res)=>{
        res.subscribe((data: [TrackData]) => {
          console.log(data)
          this.tracks = data
      })
      })
    }
  }

}
