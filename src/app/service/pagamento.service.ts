import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pagamento } from '../model/pagamento';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private http : HttpClient) { }

  inserir(pagamento?: Pagamento): Observable<Pagamento>{
    if(!pagamento){return EMPTY};
    return this.http.post<Pagamento>(environment.endPointPagamento, pagamento);
  }

  listar(): Observable<Pagamento[]>{
    return this.http.get<Pagamento[]>(environment.endPointPagamento);
  }

  atualizar(pagamento?: Pagamento): Observable<Pagamento>{
    if(!pagamento){return EMPTY};
    return this.http.put<Pagamento>(environment.endPointPagamento, pagamento);
  }

  excluir(id?:number): Observable<void>{
    if(!id){return EMPTY};
    let idParametro = new HttpParams();
    idParametro = idParametro.append('id', id);
    return this.http.delete<void>(environment.endPointPagamento, {params:idParametro});
  }
}
