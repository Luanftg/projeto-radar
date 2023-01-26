import { AbstractControl, FormGroup } from '@angular/forms';


export interface ILoginForm extends FormGroup{
  value: ILogin;
  controls: {
  email: AbstractControl,
  senha: AbstractControl,
}
}

export interface ILogin {
  email: string,
  senha: string
}
