export function verificaCPF(cpf:string){
    if(cpf.length!=11){
        return "O CPF deve possuir 11 digitos";
    }
    let total=0
    for (let i = 0; i < 9; i++) {
        const n = Number(cpf[i]);
        total+= (10-i)*n
    }
    let mod = total%11
    if(mod<2){
        mod=11;
    }
    if(11-mod!=Number(cpf[9])){
        return "Insira um cpf válido";
    }
    total=0
    for (let i = 0; i < 10; i++) {
        const n = Number(cpf[i]);
        total+= (11-i)*n
    }
    mod = total%11
    if(mod<2){
        mod=11;
    }
    if(11-mod!=Number(cpf[10])){
        return "Insira um cpf válido";
    }
    return "";
}