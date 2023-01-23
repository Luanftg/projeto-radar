import { AbstractControl, FormGroup } from '@angular/forms';

export interface IPedido {
    id: number,
    clienteId: number,
    valorTotal: number,
    dtCriacao: Date
}
