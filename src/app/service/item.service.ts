import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Items } from '../model/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  inserir(item?: Items): Observable<Items>{
    if(!item){return EMPTY};
    return this.http.post<Items>(environment.endPointItems, item);
  }

  listar(): Observable<Items[]>{
    return this.http.get<Items[]>(environment.endPointItems);
  }

  atualizar(item?: Items): Observable<Items>{
    if(!item){return EMPTY};
    return this.http.put<Items>(environment.endPointItems, item);
  }

  excluir(id?:number): Observable<void>{
    if(!id){return EMPTY};
    let idParametro = new HttpParams();
    idParametro = idParametro.append('id', id);
    return this.http.delete<void>(environment.endPointItems, {params:idParametro});
  }
}
