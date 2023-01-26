import { IEndereco } from "../models/endereco.interface";

export function constroiStaticMapWithMarkes(endereco:IEndereco,size:number=450,zoom:number=15){
    let ruaArrumada=endereco.logradouro.replace(" ","+")
    let cidadeArrumada=endereco.cidade.replace(" ","+")
    let enderecoArrumado = endereco.numero+","+ruaArrumada+","+cidadeArrumada+","+endereco.estado;
    return `https://maps.googleapis.com/maps/api/staticmap?center=${enderecoArrumado}&zoom=${zoom}&size=${size}x${size}&markers=size:mid%7Ccolor:0xFF0000%7Clabel:%7C${enderecoArrumado}%22&key=AIzaSyBIlCYLswQcDDH73GoXoeyObCghAaAv6gM`
}