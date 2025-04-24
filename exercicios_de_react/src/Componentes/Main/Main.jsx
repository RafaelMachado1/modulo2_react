
import CardVideo from "../CardVideo"
import Nav from "../Nav/Nav";
import { Menu } from "./styled";

export function Main(){
    const card1 = {
        titulo: "Título do vídeo",
        imagemDoVideo: "https://picsum.photos/400/400?a=1",
        textoAlternativo: "descrição da imagem"
      };
      
    return(
      <Menu>
        
          <Nav/>
        
        
        <section className="painel-de-videos">
          <CardVideo
            image1={card1.imagemDoVideo}
            titulo={card1.titulo}
            textoAlternativo={card1.textoAlternativo}
            
          />
        </section>
        </Menu>)
}