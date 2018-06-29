import { HttpClient } from '@angular/common/http';
import { Component, OnInit, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;

  constructor ( private spotify: SpotifyService ) {

    this.loading = true;

    this.spotify.obtenerNuevosLanzamientos()
      .subscribe( (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      });

   }

  ngOnInit() {
  }

}
