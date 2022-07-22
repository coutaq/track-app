import { Component, OnInit, Input } from '@angular/core';
import { TrackData } from '../track-data';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss']
})
export class TrackInfoComponent implements OnInit {
  @Input() trackData:TrackData|null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
