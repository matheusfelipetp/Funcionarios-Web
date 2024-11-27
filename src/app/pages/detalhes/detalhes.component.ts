import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css'],
})
export class DetalhesComponent implements OnInit {
  funcionario!: Funcionario;
  id!: number;

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.funcionarioService
      .GetFuncionarioById(this.id)
      .subscribe((response) => {
        const dados = response.dados;

        dados.dataDeCriacao = new Date(dados.dataDeCriacao!).toLocaleDateString(
          'pt-BR'
        );
        dados.dataDeAtualizacao = new Date(
          dados.dataDeAtualizacao!
        ).toLocaleDateString('pt-BR');
      });
  }

  inativaFuncionario() {
    this.funcionarioService.InativaFuncionario(this.id).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}