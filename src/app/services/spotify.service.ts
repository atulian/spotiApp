import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, retry } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
      console.log('Spotify services listo !');
   }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
        'Authorization' : 'Bearer BQCw_nXdzA4iwIBdsRngamcFxdBCPrP0_pKnmdx3ct-IsmYUWt2PQKPHSXBIqysaVHCjXYyMGTMemqBC2Es'
    });

    return this.http.get(url , {headers: headers});
  }

  obtenerNuevosLanzamientos() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map( data =>  data['albums'].items ));
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map( data => data['artists'].items));
  }
}
