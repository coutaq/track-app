import { Component, OnInit } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { TrackServiceService } from '../track-service.service';
import { TrackData } from '../track-data';
import { TrackInfoComponent } from '../track-info/track-info.component';
@Component({
  selector: 'app-search-track',
  templateUrl: './search-track.component.html',
  styleUrls: ['./search-track.component.scss']
})
export class SearchTrackComponent implements OnInit {

  constructor(private trackService: TrackServiceService) { }
  track = '80086073153726'
  trackData:TrackData|null = null
  ngOnInit(): void {
  }
  async submit(){
    let test = await this.trackService.getTrack(this.track);
    test.subscribe((data: TrackData) => {
      this.trackData = {...data}
    })
  }

}
