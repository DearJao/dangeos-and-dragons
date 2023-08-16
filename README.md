<h1><strong>Bem vindo/a ao meu projeto Dangeos & Dragons!!</strong></h1>

<h2><strong><summary>Sobre o projeto:</summary></strong></h2>
  Esse projeto é uma simulação do que seria um jogo baseado em D&D, jogo de tabuleiro muito famoso sobre guerreiros medievais e monstros.
  As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características das personagens dentro do jogo desde a sua criação, como os seus pontos de vida
  e a sua destreza. No entanto, existem seres bestiais denominados monstros que não possuem uma raça específica, mas podem lutar.
  Na construção dele a ideia era dominar a criação de classes e interfaces através do TypeScript, mantendo todas as classes abstratas para facilitar o uso e manter
  tudo organizado, aqui tambem temos a opção de batalhas entre os personagens.

<h2><strong><summary>Construção e Features/Tecnologias:</summary></strong></h2
  A construção foi feita através do <strong>Docker</strong> para que ele possa ser usado em qualquer maquina, foi escrito inteiramente com <strong>TypeScript</strong>
  com classes abstratas e interfaces, para se ter mais segurança no código e facilitar a leitura, manutenção e escalabilidade da aplicação.

<h2><summary><strong>.Estrutura:</strong></summary></h2>
<details>
      src</br>
        ├──🔸 Archetypes</br>
        │     ├──🔹 Archetype.ts</br>
        │     └──🔹 Mage.ts</br>
        │     └──🔹 Necromancer.ts</br>
        │     └──🔹 Ranger.ts</br>
        │     └──🔹 Warrior.ts</br>
        │     └──🔹 index.ts</br>
        ├──🔸 Battle</br>
        │     ├──🔹 Batle.ts</br>
        │     └──🔹 index.ts</br>
        ├──🔸 Fighter</br>
        │     ├──🔹 Figther.ts</br>
        │     └──🔹 SimpleFighter.ts</br>
        │     └──🔹 SimpleFighter.tsindex.ts</br>
        ├──🔸 Races</br>
        │     ├──🔹 Dwarf.ts</br>
        │     └──🔹 Elf.ts</br>
        │     └──🔹 Halfling.ts</br>
        │     └──🔹 Orc.ts</br>
        │     └──🔹 Race.ts</br>
        │     └──🔹 index.ts</br>
        ├──🔹 Character.ts</br>
        ├──🔹 Energy.ts</br>
        ├──🔹 Monster.ts</br>
        └──🔹 utils.ts</br>
  .Legenda:</br>
      🔸 Diretorios</br>
      🔹 Arquivos</br>
</details>

<h2><strong><summary>Para rodar o projeto siga as intruções:</summary></strong></h2>
      - Para o projeto funcionar você precisa ter a biblioteca .NODE.JS e o docker instalado em sua maquina. Caso não tenha neste link :
      <link>https://nodejs.org/en/download</link> e neste: <link>https://www.docker.com/products/docker-desktop/</link> você tera acesso ao dowload oficial da
      biblioteca e as intruções para configurar.
      </br>
      (obs* o projeto foi contruido na versão 18.12.1, outras versões podem ocasionar erros inesperados)
      </br>
      </br>
      - Instale as dependências <strong>npm install</strong>
      </br>
      - Dê um git clone no seu terminal de sua maquina um pasta vazia para instalar o projeto desta maneira:
      </br>
        git clone git@github.com:DearJao/dangeos-and-dragons.git
        </br>
        </br>
      - Em seguida você precisa entrar na pasta do projeto, através do seu gerenciador de arquivos ou no terminal.
        </br>
        </br>
      - Para subir o projeto completo use o comando <strong>docker-compose up -d</strong> e depois <strong>docker exec -it trybers_and_dragons bash</strong>
      </br>
      </br>

<h2><strong><summary>Através desse link você pode testar o banco de dados com o Swagger:</summary></strong></h2>
  </br>
      - ....
