import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTrackComponent } from './search-track/search-track.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { MyTracksComponent } from './my-tracks/my-tracks.component';

const routes: Routes = [
  {path:'search-track', component: SearchTrackComponent},
  {path:'authorize', component: AuthorizeComponent},
  {path:'my-tracks', component: MyTracksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
