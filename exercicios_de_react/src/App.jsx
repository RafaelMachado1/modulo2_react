import React from "react";
import "./../src/App.css";
import { CardVideo } from "./componentes/CardVideo";

export default function App() {
  const informacaoVideo = {
    imagem: "https://picsum.photos/400/400?a=1 ",
    titulo: "Título do vídeo"
  }

  return (

    <div className="tela-inteira">
      <header>
        <h1>LabeTube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
      </header>
      <main>
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-meunu-vertical">Início</li>
            <li className="botoes-meunu-vertical">Em alta</li>
            <li className="botoes-meunu-vertical">Inscrições</li>
            <hr />
            <li className="botoes-meunu-vertical">Originais</li>
            <li className="botoes-meunu-vertical">Histórico</li>
          </ul>
        </nav>
        <section className="painel-de-videos">
          <CardVideo
            imagem={<img src={informacaoVideo.imagem} alt="" />}
            tituloDoVideo={informacaoVideo.titulo} />
          <CardVideo
            imagem={<img src={informacaoVideo.imagem} alt="" />}
            tituloDoVideo={informacaoVideo.titulo} />
          <CardVideo
            imagem={<img src={informacaoVideo.imagem} alt="" />}
            tituloDoVideo={informacaoVideo.titulo} />
          <CardVideo
            imagem={<img src={informacaoVideo.imagem} alt="" />}
            tituloDoVideo={informacaoVideo.titulo} />
          <CardVideo
            imagem={<img src={informacaoVideo.imagem} alt="" />}
            tituloDoVideo={informacaoVideo.titulo} />
          <CardVideo
            imagem={<img src={informacaoVideo.imagem} alt="" />}
            tituloDoVideo={informacaoVideo.titulo} />
          <CardVideo
            imagem={<img src={informacaoVideo.imagem} alt="" />}
            tituloDoVideo={informacaoVideo.titulo} />
          <CardVideo
            imagem={<img src={informacaoVideo.imagem} alt="" />}
            tituloDoVideo={informacaoVideo.titulo} />
        </section>
      </main>

      <footer>
        <h4>Oi! Eu moro no footer!</h4>
      </footer>
    </div>

  );
}