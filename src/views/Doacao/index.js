import React from "react";
import { CCard, CCardBody, CRow,  CCarousel, CCarouselItem, CContainer } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { cilLoopCircular } from "@coreui/icons";


import placa from '../../assets/images/tech/placa_video.jpg'
import mouse from '../../assets/images/tech/mouse.jpeg'
import user1 from '../../assets/images/avatars/1.jpg'
import user5 from '../../assets/images/avatars/5.jpg'

const Doacao = () =>{
    return(
      <>
        <CCard className="mb-4 p-3">
            
            <CContainer className="mb-4 mt-4 ms-md-4 text-center">
              <h4 className="mb-0 mt-2">DOAÇÕES</h4>
              <article className="text-secondary">
              Um componente de computador que você não usa mais pode ser usada por alguém que precisa. Doe já!
              </article>
            </CContainer>

            <CCarousel controls indicators className="carousel-esc mb-md-4 mb-xs-2">
    
                <CCarouselItem>
                  <CRow>
                    <CCard className="col-md-3 p-0 d-none d-md-block">
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
                    <CCard  className="col-md-3 p-0 d-none d-md-block">
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
                    <CCard className="col-md-3 p-0">
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
                      <CCard className="col-md-3 p-0 d-none d-md-block">
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
                      <CCard className="col-md-3 p-0 d-none d-md-block">
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

        </CCard>
          
      </>
    );
}
export default Doacao