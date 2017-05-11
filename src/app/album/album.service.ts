import { Injectable } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { IAlbum } from './models/album.model';
import { IAlbumDetail } from './models/album-detail.model';

@Injectable()
export class AlbumService {
  private albumUrl: string = 'https://jsonplaceholder.typicode.com/albums';
  private picUrl: string = 'https://jsonplaceholder.typicode.com/photos?albumId={id}';

  constructor(private dataSvc: DataService) { 

  }

  getAlbums():Observable<IAlbum[]>{
      return this.dataSvc.get(this.albumUrl).map((response: Response) => {
          return response.json();
      });
  }

  getAlbumDetail(id:string):Observable<IAlbumDetail[]>{
      let url = this.picUrl.replace('{id}',id);
      return this.dataSvc.get(url).map((response: Response) => {
            return response.json();
      });
  }           

}
