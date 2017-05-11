import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AlbumService } from './album.service';
import { IAlbumDetail } from './models/album-detail.model';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlbumResolve implements Resolve<Observable<IAlbumDetail[]>>{
    private model : IAlbumDetail[];
    
    constructor(private service: AlbumService){
        
    }

    resolve(route: ActivatedRouteSnapshot){
        console.log('resolving');
        return this.service.getAlbumDetail(route.paramMap.get('id'));
    }
}