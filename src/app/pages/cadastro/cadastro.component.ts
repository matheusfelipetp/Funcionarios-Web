import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  btnAcao = 'Cadastrar';
  btnTitulo = 'Cadastrar Funcionário';

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createFuncionario(funcionario: Funcionario) {
    this.funcionarioService.CreateFuncionario(funcionario).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
