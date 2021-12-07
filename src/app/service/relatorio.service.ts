import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Relatorio } from '../model/relatorio';
import { Relatorio2 } from '../model/relatorio2';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  constructor(private http: HttpClient) { }

  relatorio1(): Observable<Relatorio[]>{
    return this.http.get<Relatorio[]>(environment.endPointRelatorio);
  }

  relatorio2(): Observable<Relatorio2[]>{
    return this.http.get<Relatorio2[]>(environment.endPointRelatorio2);
  }
}
