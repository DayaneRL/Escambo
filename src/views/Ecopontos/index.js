import React, {useEffect} from "react";
import { CCard, CCardBody, CRow,CCol, CCardHeader, CButton, CBadge } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { cilClock, cilMap } from "@coreui/icons";

const Ecopontos = () => {
    return(
        <>
        <CCard className="mb-4">
            <CCardBody>
                <h4 className="text-center mt-2 mb-4">ECOPONTOS CARAGUATATUBA</h4>
               
                <CCol xs="12" md="10" className="mt-5 mb-5 col-qs">
                    <h5>Ecoponto Golfinhos</h5>
                    <article>
                        <h6><CIcon icon={cilMap}/> Endereço: <CBadge color="secondary"> Rua Alameda dos Corais.</CBadge></h6>
                        <h6><CIcon icon={cilClock}/> Funcionamento: <CBadge color="secondary"> Segunda a sábado, das 8h30 às 17h e aos domingos, das 8h30 às 14h.</CBadge></h6>
                    </article>
                </CCol>
                
                <CCol xs="12" md="11" className="mb-5 col-qs">
                    <h5>Ecoponto Martim de Sá</h5>
                    <article>
                        <h6><CIcon icon={cilMap}/> Endereço: <CBadge color="secondary">Rua Carijós, 170, no bairro Martim de Sá.</CBadge></h6>
                        <h6><CIcon icon={cilClock}/> Funcionamento: <CBadge color="secondary">Segunda a sábado, das 8h30 às 17h e aos domingos, das 8h30 às 14h.</CBadge></h6>
                    </article>
                </CCol>

                <CCol xs="12" md="10"  className="mb-5 col-qs">
                    <h6>Ecoponto Massaguaçu</h6>
                    <article>
                    <h6><CIcon icon={cilMap}/> Endereço: <CBadge color="secondary">Entre a esquina da Avenida Antônio de Lucca e Avenida Três.</CBadge></h6>
                    <h6><CIcon icon={cilClock}/> Funcionamento: <CBadge color="secondary"> Segunda a sábado, das 8h30 às 17h e aos domingos, das 8h30 às 14h. </CBadge></h6>
                    </article>
                </CCol>

                <CCol xs="12" md="10"  className="mb-3 col-qs">
                    <p>*Os ecopontos fecham para almoço, das 12h às 13h.</p>
                </CCol>

                <CRow className="ps-4 mt-4 mb-2 text-center">
                    <p>
                        <CButton color="light" variant="outline" size="sm" className="float-center border">
                            <a href="https://www.caraguatatuba.sp.gov.br/pmc/ecopontos/" className="text-decoration-none text-dark">Saiba mais</a>
                        </CButton>
                    </p>
                </CRow>

            </CCardBody>
        </CCard>
        </>
    )
}
export default Ecopontos