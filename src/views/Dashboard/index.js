import React, {useEffect} from "react";
import { CCard, CCardBody, CRow,CCol,  CCarousel, CCarouselItem,CCarouselCaption, CContainer, CCardHeader } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { cilLoopCircular,  cilDollar, cilSmile } from "@coreui/icons";

import troca from '../../assets/images/banner/troca_bg1.jpg'
import componente from '../../assets/images/banner/components_bg.jpg'
import tech from '../../assets/images/banner/people2.jpg'

import placa from '../../assets/images/tech/placa_video.jpg'
import monitor from '../../assets/images/tech/monitor.jpg'
import memoria from '../../assets/images/tech/memoria.jpg'
import mouse from '../../assets/images/tech/mouse.jpeg'
import user1 from '../../assets/images/avatars/1.jpg'
import user2 from '../../assets/images/avatars/6.jpg'
import user3 from '../../assets/images/avatars/9.jpg'
import user5 from '../../assets/images/avatars/5.jpg'

const Dashboard = () =>{
    return(
      <>
        <CCarousel controls indicators>
          <CCarouselItem className="carousel-header">
            <img className="d-block w-100" src={troca} alt="slide 1"/>
              <CCarouselCaption className="">
                <h5>Faça uma troca e mude uma vida</h5>
                <p>Troque uma peça que você não usa mais por outra que precisa.</p>
              </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem className="carousel-header">
            <img className="d-block w-100" src={componente} alt="slide 2" />
            <CCarouselCaption className="">
              <h5>Doe uma peça</h5>
              <p>Um componente de computador que você não usa mais pode ser usada por alguém que precisa.</p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem className="carousel-header">
            <img className="d-block w-100" src={tech} alt="slide 3" />
            <CCarouselCaption className="">
              <h5>Conheça mais a iniciativa da escambo</h5>
              <p>A escambo colabora com o acesso da tecnologia a todos.</p>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>

        <CCard className="mb-4">
            <CCardBody>
              <CContainer className="mb-4 ms-md-4 destaque">
                <h4 className="mb-0 mt-md-2">DESTAQUE</h4>
                <article className="text-secondary mt-md-2">Confira as últimas peças publicadas.</article>
              </CContainer>

            <CRow className="p-2 destaque-esc">
              <CCard className="col-md-3 col-xs-12 p-0 ms-md-5 me-md-5">
                <div className="img-ad">
                  <img src={placa} alt="..."/>
                  <span className="badge bg-warning">DESTAQUE</span>
                </div>
                <h4 className="card-title">PLACA DE VÍDEO</h4>
                <CCardBody>
                  <p>Placa de vídeo usada </p>
                  <span className="badge s-second">Tempo de uso: 2 anos</span>
                  <span className="ms-2 badge s-third">
                    <CIcon icon={cilLoopCircular} /> Troca
                  </span>

                  <hr/>
                  <div className="img-user">
                    <img src={user1} alt="user"/>
                    <a href="/">Maria da Silva</a>
                  </div>
                </CCardBody>
              </CCard>
              <CCard className="col-md-3 col-xs-12 p-0 ms-md-5 me-md-5">
                <div className="img-ad">
                  <img src={monitor} alt="..."/>
                  <span className="badge bg-warning">DESTAQUE</span>
                </div>
                <h4 className="card-title">MONITOR</h4>
                <CCardBody>
                  <p>20 polegadas</p>
                  <span className="badge s-second">Tempo de uso: 3 anos</span>
                  <span className="ms-2 badge s-third">
                    <CIcon icon={cilDollar} /> Venda
                  </span>
                  
                  <hr/>
                  <div className="img-user">
                    <img src={user2} alt="user"/>
                    <a href="/">Marcos Oliveira</a>
                  </div>
                </CCardBody>
              </CCard>
              <CCard className="col-md-3 col-xs-12 p-0 ms-md-5 me-md-5">
                <div className="img-ad">
                  <img src={memoria} alt="..."/>
                  <span className="badge bg-warning">DESTAQUE</span>
                </div>
                <h4 className="card-title">MEMÓRIA RAM</h4>
                <CCardBody>
                  <p>Memória RAM 8gb</p>
                  <span className="badge s-second">Tempo de uso: 6 meses</span>
                  <span className="ms-2 badge s-third">
                    <CIcon icon={cilSmile} /> Doação
                  </span>
                  
                  <hr/>
                  <div className="img-user">
                    <img src={user3} alt="user"/>
                    <a href="/">Lucas Moreira</a>
                  </div>
                </CCardBody>
              </CCard>
            </CRow>

            <br/><br/><hr/><br/>

            <CContainer className="mb-4 ms-md-4">
              <h4 className="mb-0 mt-2">ESCAMBO</h4>
              <article className="text-secondary">
              O escambo é uma transação em que há a troca de mercadorias ou serviços entre as duas partes.
              </article>
            </CContainer>

            <CCarousel controls indicators className="carousel-esc mb-md-4 mb-xs-2">
    
                <CCarouselItem>
                  <CRow>
                    <CCard className="col-md-3 col-xs-12 p-0 d-none d-md-block">
                      <div className="img-ad">
                        <img src={placa} alt="..."/>
                      </div>
                      <h4 className="card-title">PLACA DE VÍDEO</h4>

                      <CCardBody>
                        <p>Placa de vídeo usada </p>
                        <span className="badge s-second">Tempo de uso:2 anos</span>
                        <span className="ms-2 badge s-third"><CIcon icon={cilLoopCircular} />Troca</span>

                        <hr/>
                        <div className="img-user">
                          <img src={user1} alt="user"/>
                          <a href="/">Maria da Silva</a>
                        </div>
                      </CCardBody>
                    </CCard>
                    <CCard  className="col-md-3 col-xs-12 p-0  d-none d-md-block">
                      <div className="img-ad">
                        <img src={placa} alt="..."/>
                      </div>
                      <h4 className="card-title">PLACA DE VÍDEO</h4>

                      <CCardBody>
                        <p>Placa de vídeo usada </p>
                        <span className="badge s-second">Tempo de uso:2 anos</span>
                        <span className="ms-2 badge s-third"><CIcon icon={cilLoopCircular} />Troca</span>

                        <hr/>
                        <div className="img-user">
                          <img src={user1} alt="user"/>
                          <a href="/">Maria da Silva</a>
                        </div>
                      </CCardBody>
                    </CCard>
                    <CCard className="col-md-3 col-xs-12 p-0">
                      <div className="img-ad">
                        <img src={placa} alt="..."/>
                      </div>
                      <h4 className="card-title">PLACA DE VÍDEO</h4>

                      <CCardBody>
                        <p>Placa de vídeo usada </p>
                        <span className="badge s-second">Tempo de uso:2 anos</span>
                        <span className="ms-2 badge s-third"><CIcon icon={cilLoopCircular} />Troca</span>

                        <hr/>
                        <div className="img-user">
                          <img src={user1} alt="user"/>
                          <a href="/">Maria da Silva</a>
                        </div>
                      </CCardBody>
                    </CCard>
                  </CRow>
                </CCarouselItem>
                <CCarouselItem>
                  <CRow>
                      <CCard className="col-md-3 p-0  d-none d-md-block">
                        <div className="img-ad">
                          <img src={mouse} alt="..."/>
                        </div>
                        <h4 className="card-title">MOUSE</h4>

                        <CCardBody>
                          <p>Mouse HP</p>
                          <span className="badge s-second">Tempo de uso: 1 ano</span>
                          <span className="ms-2 badge s-third"><CIcon icon={cilLoopCircular} />Troca</span>

                          <hr/>
                          <div className="img-user">
                            <img src={user5} alt="user"/>
                            <a href="/">Luisa de Souza</a>
                          </div>
                        </CCardBody>
                      </CCard>
                      <CCard className="col-md-3 p-0  d-none d-md-block">
                        <div className="img-ad">
                          <img src={mouse} alt="..."/>
                        </div>
                        <h4 className="card-title">MOUSE</h4>

                        <CCardBody>
                          <p>Mouse HP</p>
                          <span className="badge s-second">Tempo de uso: 1 ano</span>
                          <span className="ms-2 badge s-third"><CIcon icon={cilLoopCircular} />Troca</span>

                          <hr/>
                          <div className="img-user">
                            <img src={user5} alt="user"/>
                            <a href="/">Luisa de Souza</a>
                          </div>
                        </CCardBody>
                      </CCard>
                      <CCard className="col-md-3 p-0">
                        <div className="img-ad">
                          <img src={mouse} alt="..."/>
                        </div>
                        <h4 className="card-title">MOUSE</h4>

                        <CCardBody>
                          <p>Mouse HP</p>
                          <span className="badge s-second">Tempo de uso: 1 ano</span>
                          <span className="ms-2 badge s-third"><CIcon icon={cilLoopCircular} />Troca</span>

                          <hr/>
                          <div className="img-user">
                            <img src={user5} alt="user"/>
                            <a href="/">Luisa de Souza</a>
                          </div>
                        </CCardBody>
                      </CCard>
                  </CRow>
                </CCarouselItem>
              
            </CCarousel>

            </CCardBody>
        </CCard>
          
      </>
    );
}
export default Dashboard