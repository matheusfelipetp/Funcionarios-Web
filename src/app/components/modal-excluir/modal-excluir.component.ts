import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-modal-excluir',
  templateUrl: './modal-excluir.component.html',
  styleUrls: ['./modal-excluir.component.css'],
})
export class ModalExcluirComponent implements OnInit {
  inputData: any;
  funcionario!: Funcionario;

  constructor(
    private funcionarioService: FuncionarioService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ModalExcluirComponent>
  ) {}

  ngOnInit(): void {
    this.inputData = this.data;

    this.funcionarioService
      .GetFuncionarioById(this.inputData.id)
      .subscribe((response) => (this.funcionario = response.dados));
  }

  excluirFuncionario() {
    this.funcionarioService
      .ExcluirFuncionario(this.inputData.id)
      .subscribe(() => {
        this.ref.close();
        window.location.reload();
      });
  }

  fecharModal() {
    this.ref.close();
  }
}
