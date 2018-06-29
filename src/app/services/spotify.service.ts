import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, retry } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
   }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQBNyS3H1qgYRrMYisO-l8VI9ADxPz6WIEZrPweiC4vRkJr5neZPtQT_JKpnwkKDkEdbHAayULq746wyv3k'
    });

    return this.http.get(url , {headers: headers});
  }

  obtenerNuevosLanzamientos() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data =>  data['albums'].items ));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items));
  }

  getArtista( id: string ) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks (id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
      .pipe( map ( data => data['tracks']));
  }

}
