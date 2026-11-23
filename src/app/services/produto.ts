import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Mouse',
      preco: 80,
      quantidade: 10
    }
  ];

  listar(): Produto[] {
    return this.produtos;
  }

  adicionar(produto: Produto): void {
    this.produtos.push(produto);
  }
  excluir(id: number): void {    this.produtos =      this.produtos.filter(p => p.id !== id);  }
}
