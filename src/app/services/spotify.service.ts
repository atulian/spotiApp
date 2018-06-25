import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {
      console.log('Spotify services listo !');
   }

   obtenerNuevosLanzamientos(){
      const headers = new HttpHeaders({
         'Authorization' : 'Bearer BQAMD9N_DNiYRQ_PGVMJPLYwgOnymeOtmonetXSbv_CdnLuftvrGY4Lrtw3kHCLGGLuw8T7IL-0VoibSsoo'
      });

      return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers: headers});
   }
}
