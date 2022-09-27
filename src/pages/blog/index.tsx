import { NextSeo } from 'next-seo';
import Link from 'next/link'
import Image from 'next/image'
import { BannerContainer, BlogContainer, ContentContainer, ImageLeft, ImageRight, Wrapper } from "./styles";

import bannerImg from '../../assets/banner.png'
import aviaoImg from '../../assets/aviao.png'

export default function Blog() {
    return (
      <>
        <NextSeo
          title="Blog | Centro Espírita Treze Irmãos"
          description="Blog da Sociedade Espírita Treze Irmãos - Espiritismo."
        />

        <BlogContainer>
          <BannerContainer>
            <Link href="#">
              <ImageLeft>
                <Image src={aviaoImg} alt="" />
              </ImageLeft>
            </Link>

            <ImageRight>
              <Image src={bannerImg}  alt="" />
              <Image src={bannerImg}  alt="" />
              <Image src={bannerImg}  alt="" />
              <Image src={bannerImg}  alt="" />
            </ImageRight>

          </BannerContainer>
          <header>
            <h4>Todas as postagens</h4>
          </header>

          <Wrapper>
            <Link href="#">
              <a>
                <div>
                  <Image src={bannerImg} width={250} height={200} alt="" />
                </div>

                <ContentContainer>
                  <span>Codificação</span>
                  <h3>A parábola do festim das bodas</h3>
                  <p>Na presente parábola, o Festim das Bodas simboliza o Reino dos Céus, a plenitude.</p>
                  <time>22 set, 2022</time>
                  <strong>Continue lendo...</strong>
                </ContentContainer>
              </a>
            </Link>

            <Link href="#">
              <a>
                <div>
                  <Image src={bannerImg} width={250} height={200} alt="" />
                </div>

                <ContentContainer>
                  <span>Codificação</span>
                  <h3>A parábola do festim das bodas</h3>
                  <p>Na presente parábola, o Festim das Bodas simboliza o Reino dos Céus, a plenitude.</p>
                  <time>22 set, 2022</time>
                  <strong>Continue lendo...</strong>
                </ContentContainer>
              </a>
            </Link>

            <Link href="#">
              <a>
                <div>
                  <Image src={bannerImg} width={250} height={200} alt="" />
                </div>

                <ContentContainer>
                  <span>Codificação</span>
                  <h3>A parábola do festim das bodas</h3>
                  <p>Na presente parábola, o Festim das Bodas simboliza o Reino dos Céus, a plenitude.</p>
                  <time>22 set, 2022</time>
                  <strong>Continue lendo...</strong>
                </ContentContainer>
              </a>
            </Link>

            <Link href="#">
              <a>
                <div>
                  <Image src={bannerImg} width={250} height={200} alt="" />
                </div>

                <ContentContainer>
                  <span>Codificação</span>
                  <h3>A parábola do festim das bodas</h3>
                  <p>Na presente parábola, o Festim das Bodas simboliza o Reino dos Céus, a plenitude.</p>
                  <time>22 set, 2022</time>
                  <strong>Continue lendo...</strong>
                </ContentContainer>
              </a>
            </Link>
            
          </Wrapper>
        </BlogContainer>
      </>
    )
  }
