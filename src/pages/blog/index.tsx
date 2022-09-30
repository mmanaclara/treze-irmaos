import { NextSeo } from 'next-seo';

import { BlogContainer, Wrapper } from "./styles";

export default function Blog() {
    return (
      <>
        <NextSeo
          title="Blog | Centro Espírita Treze Irmãos"
          description="Blog da Sociedade Espírita Treze Irmãos - Espiritismo."
        />

        <BlogContainer>
          <Wrapper>
            <h1>Ainda não há publicações neste blog.</h1>
            <span>Em breve, compartilharemos conteúdos produzidos com muito carinho sobre a Doutrina Espírita.</span>
            <strong>Muita paz! 🙏</strong>
          </Wrapper>
        </BlogContainer>
      </>
    )
  }
