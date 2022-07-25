import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { API_URL } from 'src/globals';
import { TrackData } from './track-data';

@Injectable({
  providedIn: 'root'
})
export class TrackServiceService {
  // private track:TrackData
  constructor(private http: HttpClient) { }
  async getTrack(id:String) { 
    // let track;
    let req = this.http.get<TrackData>(API_URL+"?track="+id)
    
    // console.log('track',track)
    return req
    // return ""; 
  }

  async getTracks(id:String) { 
    // let track;
    let req = this.http.get<[TrackData]>(API_URL+"my")
    
    // console.log('track',track)
    return req
    // return ""; 
  }

  async delete(trackData:TrackData) { 
    // let track;
    var form_data = new FormData();
    form_data.append('track', trackData.track)
    let req = this.http.post(API_URL+"remove-track", form_data).subscribe((res)=>{

    })
    
    // console.log('track',track)
    return req
    // return ""; 
  }
}
