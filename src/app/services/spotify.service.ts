import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
      console.log('Spotify services listo !');
   }

   obtenerNuevosLanzamientos() {
      const headers = new HttpHeaders({
         'Authorization' : 'Bearer BQBNwUtdfob-VKr5LKEzTd7AiIrtpuf94wKbJMYCWWv05QHge3TG5yjBL_zeYirzTAzPTK5cv48HMOi-3lY'
      });

      return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers: headers});
   }

   getArtista(termino: string) {
      const headers = new HttpHeaders({
         'Authorization' : 'Bearer BQBNwUtdfob-VKr5LKEzTd7AiIrtpuf94wKbJMYCWWv05QHge3TG5yjBL_zeYirzTAzPTK5cv48HMOi-3lY'
      });

      return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers: headers});
   }
}
