import Head from "next/head";
import Cabecalho from "../components/Cabecalho";
import Hero from "../components/Hero";
import Conteudo from "../components/Conteudo";
import Equipe from "../components/Equipe";
import Rodape from "../components/Rodape";

import fetch from "isomorphic-unfetch";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>{props.geral.nomeApp}</title>
        <link rel="icon" href={props.geral.favicon.url} />
      </Head>

      <Cabecalho  
        redeSocial={props.geral.RedesSociais}
        logo={props.geral.LogoApp}
        menu={props.menu}
        fundo={props.hero.fundo.url}
      />

      <Hero hero={props.hero} />
      <Conteudo conteudo={props.conteudo} />
      <Equipe equipe={props.equipe} />
      <Rodape rodape={props.rodape} />
    </div>
  );
}

export async function getStaticProps(context) {
  const reqGeral = await fetch("http://guaruak.herokuapp.com/geral");
  const geral = await reqGeral.json();

  const reqMenu = await fetch("http://guaruak.herokuapp.com/menu");
  const menu = await reqMenu.json();

  const reqHero = await fetch("http://guaruak.herokuapp.com/hero");
  const hero = await reqHero.json();

  const reqConteudo = await fetch("http://guaruak.herokuapp.com/conteudo");
  const conteudo = await reqConteudo.json();

  const reqEquipe = await fetch("http://guaruak.herokuapp.com/equipe");
  const equipe = await reqEquipe.json();

  const reqRodape = await fetch("http://guaruak.herokuapp.com/rodape");
  const rodape = await reqRodape.json();

  return {
    props: {
      geral,
      menu,
      hero,
      conteudo,
      equipe,
      rodape
    }
  }
};
