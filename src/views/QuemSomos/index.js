import React, {useEffect} from "react";
import { CCard, CCardBody, CRow,CCol,  CCarousel, CCarouselItem,CCarouselCaption, CContainer, CCardHeader, CCardFooter, CButton } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import thays from '../../assets/images/etm_thays.webp'
import thayssa from '../../assets/images/etm_thayssa.webp'
import ana from '../../assets/images/etm_ana.jpg'
import day from '../../assets/images/etm_day.jpg'
import diego from '../../assets/images/etm_diego.jpg'

const QuemSomos = () => {
    return(
        <>
        <CCard>
            {/* <CCardHeader>Quem somos</CCardHeader> */}
            <CCardBody>
                <h4 className="text-center mt-2 mb-4">QUEM SOMOS</h4>
               
                <CCol xs="12" md="10" className="mt-4 mb-4 col-qs">
                    <h6>Histórico</h6>
                    <article>A empresa foi fundada no dia 25/03/2018. 
                        A abertura se deu devido uma vontade e idealização em comum dos fundadores 
                        (colegas de curso) sobre a acessibilidade de tecnologia à todos, em uma iniciativa
                        em que unificaria a conscientização regional da necessidade de populações carentes
                        com a prática de reutilização de componentes de informática e também a redução da poluição.
                    </article>
                </CCol>
                
                <CCol xs="12" md="10" className="mb-4 col-qs">
                    <h6>MISSÃO</h6>
                    <article>Trazer acesso à tecnologia a todos e gerar conscientização em relação à produção
                    e descarte de lixo eletrônico.</article>
                </CCol>

                <CCol xs="12" md="10"  className="mb-4 col-qs">
                    <h6>VISÃO</h6>
                    <article>Reduzir o lixo eletrônico produzido no Brasil e garantir o acesso à
                    tecnologia da população marginalizada.</article>
                </CCol>

                <CCol xs="12" md="10"  className="mb-4 col-qs">
                    <h6>VALORES</h6>
                    <article>Sustentabilidade, igualdade, inclusão, diversidade, respeito e educação.</article>
                </CCol>

                <CRow className="ps-md-4">
                    <CCard className="col-md-2 col-xs-6 p-0 mb-3 card-qs">
                        <CCardHeader>DESIGN UX/UI</CCardHeader>
                        <CCardBody>
                            <div className="img-ad">
                                <img src={thays} alt="..."/>
                            </div>
                        </CCardBody>
                        <CCardFooter>
                            Thays Carvalho
                        </CCardFooter>
                    </CCard>
                    <CCard className="col-md-2 col-xs-6 p-0 mb-3 card-qs">
                        <CCardHeader>GERENTE DE PROJETOS</CCardHeader>
                        <CCardBody>
                            <div className="img-ad rounded">
                                <img src={ana} alt="..."/>
                            </div>
                        </CCardBody>
                        <CCardFooter className="text-center">
                            Ana Paula
                        </CCardFooter>
                    </CCard>
                    <CCard className="col-md-2 col-xs-6 p-0 mb-3 card-qs">
                        <CCardHeader>ANALISTA DE SISTEMAS</CCardHeader>
                        <CCardBody>
                            <div className="img-ad rounded m-0">
                                <img src={thayssa} alt="..."/>
                            </div>
                        </CCardBody>
                        <CCardFooter className="text-center">
                            Thayssa Ribeiro
                        </CCardFooter>
                    </CCard>
                    <CCard className="col-md-2 col-xs-6 p-0 mb-3 card-qs">
                        <CCardHeader>DESENVOLVEDORA</CCardHeader>
                        <CCardBody>
                            <div className="img-ad rounded">
                                <img src={day} alt="..."/>
                            </div>
                        </CCardBody>
                        <CCardFooter className="text-center">
                            Dayane Lima
                        </CCardFooter>
                    </CCard>
                    <CCard className="col-md-2 col-xs-6 p-0 mb-3 card-qs">
                        <CCardHeader>GERENTE COMERCIAL</CCardHeader>
                        <CCardBody>
                            <div className="img-ad rounded">
                                <img src={diego} alt="..."/>
                            </div>
                        </CCardBody>
                        <CCardFooter className="text-center">
                            Diego Soares
                        </CCardFooter>
                    </CCard>
                </CRow>

                <CRow className="ps-4 mt-5 mb-5 text-center">
                    <h5 className="mt-2 mb-2">Faça parte do nosso time</h5>
                    <p className="text-secondary">Tem interesse em participar de iniciativas como essa? <br/>
                        Entre em contato conosco. <br/><br/>
                    <CButton className="float-center text-white btn-secondary col-md-2 col-xs-12">Entrar em contato</CButton>
                    </p>
                </CRow>
            </CCardBody>
        </CCard>
        </>
    )
}
export default QuemSomos