import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../models/Funcionarios';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private apiUrl = `${environment.ApiUrl}/Funcionario`;

  constructor(private http: HttpClient) {}

  GetFuncionarios(): Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }

  CreateFuncionario(
    funcionario: Funcionario
  ): Observable<Response<Funcionario[]>> {
    return this.http.post<Response<Funcionario[]>>(this.apiUrl, funcionario);
  }
}
