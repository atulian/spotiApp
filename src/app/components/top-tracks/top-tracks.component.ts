import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styles: []
})
export class TopTracksComponent {

  topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
              private spotify: SpotifyService ) {

                this.router.params.subscribe( params => {
                  const idArtist: string = params['id'];
                  this.getTopTracks(idArtist);
                });
              }

  getTopTracks( id: string ) {
    this.spotify.getTopTracks(id)
      .subscribe( topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      });
  }
}
