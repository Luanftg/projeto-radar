<center>
<h1> Projeto Radar - Código do Futuro
</center>

<div align="center">

# :computer:  Equipe de DESENVOLVEDORES

</div>

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/GuiHSM">
        <img src="https://avatars.githubusercontent.com/u/18469074?v=4" width="100px;" alt="Foto do Guilherme Marcelino"/><br>
        <sub>
          <b>Guilherme Marcelino</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Luanftg">
        <img src="https://avatars.githubusercontent.com/u/51548623?v=4" width="100px;" alt="Foto do Luan Fonseca Torralbo Gimenez"/><br>
        <sub>
          <b>Luan F. T. Gimenez</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/bruno-esilva">
        <img src="https://avatars.githubusercontent.com/u/48297443?v=4" width="100px;" alt="Foto do Bruno Silva"/><br>
        <sub>
          <b>Bruno Ernandes da Silva</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Rfalcao11">
        <img src="https://avatars.githubusercontent.com/u/87043908?v=4" width="100px;" alt="Foto do Rafael Falcão "/><br>
        <sub>
          <b>Rafael Falcão</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/luisedu24">
        <img src="https://avatars.githubusercontent.com/u/117494775?v=4" width="100px;" alt="Foto do Luis Eduardo "/><br>
        <sub>
          <b>Luis Eduardo</b>
        </sub>
      </a>
    </td>
    </tr>
</table>

<hr>

## Desafio

*Muito bem agora com o front-end concluído do primeiro desafio, iremos construir uma API para que possamos ter o controle interno sobre as informações de nosso sistema Radar*

[Link para o repositório da API](https://github.com/Luanftg/codigo-do-futuro-api-dotnet)

- [x] :star: Registro de domínio
- [x] :star: Hospedagem: **Azure**
  - Fron-End - Projeto Radar [http://azure-front.luanftg.com.br/](http://azure-front.luanftg.com.br/)
  - API - Projeto Radar [http://azure-api.luanftg.com.br/swagger/index.html](http://azure-api.luanftg.com.br/swagger/index.html)

## Solução

![Alt text](assets/dashboard.jpg)

*Com o desafio de assumir o controle interno sobre as informações do sistema Radar, foram implementadas:*

- seções com novas abas de **funiconalidades** como

- [x] :star: `/usuarios` - administrador da aplicação Radar
- [x] :star: `/lojas`
- [x] :star: `/pedidos`
- [x] :star: `/pedidos-produtos`
- [x] :star: `/posicoes-produtos`

### Segurança

![Alt text](assets/home.jpg)

- :star:Persistência segura de seção utilizando **token JWT** salvo localmente no navegador após login.

### Usabilidade

![Alt text](assets/prateleira.jpg)

- :star: **Prateleira de produtos** desenvolvida como um componente angular utilizando o *Material DragDropModule* promovendo uma interação intuitiva e visual da disposição dos produtos na prateleira do estabelecimento.

### Comunicação com Serviços

![Alt text](assets/maps.jpg)

- [x] :star: Utilização da **API do google maps** para mostrar o mapa no cadastro de loja;
- [x] :star: Utilização da **API do Via Cep** para busca de enderços via CEP.

#### Referências

- [Desafio Final - Codigo do Futuro](https://docs.google.com/document/d/1z0wzqAeLgMYQFg_jFOTQ1xj_BF1Byo7D/edit)
- [Projeto Front-End base para este desafio - Sungjuno](https://github.com/Sungjuno/projeto-radar)
