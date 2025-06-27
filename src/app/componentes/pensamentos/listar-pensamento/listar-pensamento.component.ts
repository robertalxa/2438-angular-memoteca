import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'I love Angular',
      autoria: 'Robert Alexandre',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Robert Alexandre',
      modelo: 'modelo2',
    },
    {
      conteudo: 'Na comunicação entre componentes o filho recebe via @Input',
      autoria: 'Componente filho',
      modelo: 'modelo3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
