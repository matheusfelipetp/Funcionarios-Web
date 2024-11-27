import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from 'src/app/models/Funcionarios';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css'],
})
export class FuncionarioFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Funcionario>();
  @Input() btnAcao = '';
  @Input() btnTitulo = '';
  @Input() dadosFuncionario: Funcionario | null = null;

  funcionarioForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.funcionarioForm = new FormGroup({
      id: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.id : null
      ),
      nome: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.nome : '',
        [Validators.required]
      ),
      sobrenome: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.sobrenome : '',
        [Validators.required]
      ),
      departamento: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.departamento : '',
        [Validators.required]
      ),
      turno: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.turno : '',
        [Validators.required]
      ),
      ativo: new FormControl(
        this.dadosFuncionario ? this.dadosFuncionario.ativo : true
      ),
      dataDeCriacao: new FormControl(new Date()),
      dataDeAtualizacao: new FormControl(new Date()),
    });
  }

  submit() {
    this.onSubmit.emit(this.funcionarioForm.value);
  }
}
