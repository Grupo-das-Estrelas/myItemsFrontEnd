import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Venda } from '../model/venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http: HttpClient) { }

  inserir(venda?: Venda): Observable<Venda>{
    if(!venda){return EMPTY};
    return this.http.post<Venda>(environment.endPointVenda, venda);
  }

  listar(): Observable<Venda[]>{
    return this.http.get<Venda[]>(environment.endPointVenda);
  }
}
