import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  inserir(usuario?: Usuario): Observable<Usuario>{
    if(!usuario){return EMPTY};
    return this.http.post<Usuario>(environment.endPointUsuario, usuario);
  }

  listar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(environment.endPointUsuario);
  }

  atualizar(usuario?: Usuario): Observable<Usuario>{
    if(!usuario){return EMPTY};
    return this.http.put<Usuario>(environment.endPointUsuario, usuario);
  }

  excluir(id?:number): Observable<void>{
    if(!id){return EMPTY};
    let idParametro = new HttpParams();
    idParametro = idParametro.append('id', id);
    return this.http.delete<void>(environment.endPointUsuario, {params:idParametro});
  }


}
