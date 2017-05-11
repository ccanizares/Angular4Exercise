import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { IAlbum } from './models/album.model'
// import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'], 
})
export class AlbumComponent implements OnInit {
  private model : IAlbum[];

  constructor(private service: AlbumService) { 
      //TODO: Use service to get data
      this.service.getAlbums().subscribe(albums => {
          this.model = albums;
      });
  }

  ngOnInit() {

  }
}
