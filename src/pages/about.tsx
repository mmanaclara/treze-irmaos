import { NextSeo } from 'next-seo';
import Link from 'next/link'
import Image from 'next/image'

import { 
    AboutPageContainer, 
    Container, 
    Wrapper, 
    TextContent, 
    TextContainer,
    TextWithoutImage, 
    ImageContainer, 
    BackToHomeButton 
} from "../styles/pages/about";

import img1 from '../../public/img1-aboutPage.png'
import img2 from '../../public/img2-aboutPage.png'
import img3 from '../../public/seti-place.png'
import { BiLeftArrowAlt } from 'react-icons/bi';

export default function AboutPage() {
    return (
      <>
        <NextSeo
          title="Sobre | Centro Espírita Treze Irmãos"
          description="Sobre a Sociedade Espírita Treze Irmãos"
        />

        <AboutPageContainer>
            <header>
                <h4>Sobre nós</h4>
            </header>

            <Wrapper>
                <Container>
                    <TextContent>
                        <h3>O início</h3>
                        <p>
                            A Sociedade Espírita Treze Irmãos, SETI, foi idealizada pelo casal José da Penha Lima e Alzira de Azevedo Lima. Em meados dos anos 60, funcionava na informalidade nos fundos do quintal de sua residência, no bairro Treze de Maio, em João Pessoa/PB. <br />
                            Diante da necessidade de levar esse trabalho do bem a outras pessoas, surgiu ideia de se regularizar uma instituição. <br />
                            No dia <strong>07 de março de 1992</strong>, foi constituída a Sociedade Espírita Treze Irmãos, sob a presidência de Alzira de Azevedo Lima.
                        </p>
                    </TextContent>

                    <figure>
                        <Image 
                            src={img1} 
                            width={558} 
                            height={291} 
                            alt=""
                            title='Da esquerda para direita: Astral, Alessandra, Kevin, Terezinha Lima, Damião, Alzira Azevedo, Marize e Almir Laureano; Agachados: Tonny e Edmilson Azevedo.'
                        />
                    </figure>
                </Container>

                <TextWithoutImage>
                    <h3>Nova localização</h3>
                    <p>
                        Foi então que se buscou uma nova localização. Com a ajuda da espiritualidade, realizamos a aquisição de um terreno no bairro Jardim Cidade Universitária. Mesmo  diante das dificuldades encontradas, os trabalhadores da casa não se desanimaram e continuaram rumo à concretização do sonho.
                    </p>
                </TextWithoutImage>

                <Container>
                    <div>
                        <Image src={img2} width={558} height={291} alt=""/>
                    </div>

                    <TextContainer>
                        <h3>Fases da SETI</h3>
                        <p>
                            A Sociedade Espírita Treze Irmãos teve seus primeiros passos trabalhando apenas no mediunismo, reunindo-se sem compromisso formal. 
                            Num segundo momento, o grupo passou a se reunir regulamente, adotando uma mistura de Kardecismo com Umbandismo. <br />
                            Neste ano, 2022, completamos 20 anos da oficialização da nossa sociedade, e ao mesmo tempo de nossos trabalhos de acordo com a codificação Kardecista. 
                        </p>
                    </TextContainer>
                </Container>

                <TextWithoutImage>
                    <h3>Nossas transformações</h3>
                    <p>
                    A SETI é uma entidade que vem se formando, passo a passo, sem pressa, porque este é um projeto para se perpetuar para a prosperidade. Há mais de 40 anos, passando por várias etapas no processo de sua estruturação oficial para chegar ao que hoje pode ser visto e apreciado por todos. Soma-se a tudo isso, o crescimento espiritual da Casa, pois este é o somatório do crescimento espiritual da cada um dos irmãos que a compõem. <br /><br />

                    Hoje podemos afirmar que o que os nossos olhos enxergam é apenas a edificação de um abrigo para nos reunirmos, mas o que nossos corações podem alcançar é muito mais que isto. É a formação de um grupo de irmãos dispostos a preparar o  terreno, adubando-o e <strong>plantando a semente do amor</strong>.
                    </p>
                </TextWithoutImage>

                <ImageContainer>
                    <Image src={img3} alt="" title='Essa é a nossa casa, localizada no Jardim Cidade Universitária. Seja muito bem-vinda(o)!' />
                </ImageContainer>

                <Link href="/">
                    <BackToHomeButton>
                        <BiLeftArrowAlt size={22} style={{ color: '#2166A5' }} />
                        <span>Voltar para a página inicial</span>
                    </BackToHomeButton>
                </Link>
            </Wrapper>
        </AboutPageContainer>
        </>
    )
}