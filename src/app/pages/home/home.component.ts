import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionarioService.GetFuncionarios().subscribe((response) => {
      const data = response.dados;

      data.map((item) => ({
        ...item,
        dataDeCriacao: new Date(item.dataDeCriacao!).toLocaleDateString(
          'pt-BR'
        ),
        dataDeAtualizacao: new Date(item.dataDeAtualizacao!).toLocaleDateString(
          'pt-BR'
        ),
      }));

      this.funcionarios = data;
      this.funcionariosGeral = data;
    });
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.funcionarios = this.funcionariosGeral.filter((funcionario) => {
      return funcionario.nome.toLowerCase().includes(value.toLowerCase());
    });
  }
}
