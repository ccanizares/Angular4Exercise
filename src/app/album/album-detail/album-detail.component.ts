import { Component, OnInit, Input } from '@angular/core';
import {IAlbumDetail} from '../models/album-detail.model';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'], 
})

export class AlbumDetailComponent implements OnInit {
  private album: IAlbumDetail[];

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit() {
      this.album = this.route.snapshot.data['album'];
  }
}
