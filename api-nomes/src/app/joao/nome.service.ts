import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Info } from '../info';

@Injectable({
  providedIn: 'root'
})
export class NomeService {

  private readonly API = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getByName(nome: string) {
    return this.httpClient.get<Info>(this.API + nome).pipe(first());
  }
}
