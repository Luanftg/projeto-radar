import { HttpClient, HttpHandler } from "@angular/common/http";
import { take } from "rxjs";
import { AuthService } from "../shared/auth/auth.service";
import { ICampanha } from "../shared/models/campanha.interface";
import { IPosicaoProduto } from "../shared/models/posicao-produto.interface";
import { CampanhasRequestService } from "../shared/request/campanhas.service";
import { PosicaoProdutoRequestService } from "../shared/request/posicoesprodutos.service";

export  class  Prateleira{
    public static campanha:ICampanha = {} as ICampanha;
    public static prateleira:IPosicaoProduto[]=[];

    public static save(http:HttpClient) {
        let campRequest=new CampanhasRequestService(http, new AuthService)
        let pratRequest=new PosicaoProdutoRequestService(http, new AuthService)
        if(Prateleira.campanha.id){
            campRequest.updateCampanha(Prateleira.campanha).pipe(take(1)).subscribe();
            let hashFindProduto = new Map<number,number>();
            let hashFindCadastrado = new Map<number,boolean>();
            for (let i = 0; i < Prateleira.prateleira.length; i++) {
                const posicao = Prateleira.prateleira[i];
                if(posicao.id){
                    hashFindProduto.set(posicao.produtoId,posicao.id);
                }else{
                    posicao.campanhaId=Prateleira.campanha.id;
                    if(hashFindProduto.get(posicao.produtoId)){
                        hashFindCadastrado.set(posicao.produtoId,true)
                        posicao.id=hashFindProduto.get(posicao.produtoId)||0
                        pratRequest.updatePosicoesProdutos(posicao).pipe(take(1)).subscribe()
                    }else{
                        pratRequest.postPosicoesProdutos(posicao).pipe(take(1)).subscribe()
                    }
                }
            }
            for (let i = 0; i < Prateleira.prateleira.length; i++) {
                const posicao = Prateleira.prateleira[i];
                if((posicao.id>0)&&!hashFindCadastrado.get(posicao.produtoId)){
                    pratRequest.deletePosicaoProduto(posicao.id).pipe(take(1)).subscribe();
                }
            }
            Prateleira.prateleira=[]
            Prateleira.campanha={} as ICampanha
        }else {
            campRequest.postCampanha(Prateleira.campanha).pipe(take(1)).subscribe(
                ()=>{
                    campRequest.getCampanha().pipe(take(1)).subscribe(
                        res=>{
                            let id = (<ICampanha[]>res).pop()?.id||0
                            if(id>0){
                                Prateleira.prateleira.forEach(posicao=>{
                                    posicao.campanhaId=id||0;
                                    pratRequest.postPosicoesProdutos(posicao).pipe(take(1)).subscribe()
                                })
                            }
                            Prateleira.prateleira=[]
                            Prateleira.campanha={} as ICampanha
                        }
                    );
                }
            )
        }
    }
}