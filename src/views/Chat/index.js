import React, { useContext } from "react";
import { 
    CCard, 
    CCardBody, 
    CRow,  
    CCol, 
    CContainer, 
    CListGroup, 
    CListGroupItem, 
    CBadge, 
    CCardHeader,
    CCardFooter,
    CAvatar,
    CInputGroup,
    CInputGroupText,
    CFormInput,
    CButton,
    CAccordion,
    CAccordionItem,
    CAccordionHeader,
    CAccordionBody
} from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { cilLoopCircular, cilSend } from "@coreui/icons";
import {AuthContext} from '../../contexts/auth'

import avatar8 from './../../assets/images/avatars/8.jpg'
import avatar2 from './../../assets/images/avatars/2.jpg'
import avatar6 from './../../assets/images/avatars/6.jpg'
import avatar5 from './../../assets/images/avatars/5.jpg'
import avatar4 from './../../assets/images/avatars/4.jpg'

const Chat = () => {
    const {user} = useContext(AuthContext);

    return(
        <CRow className="justify-content-center mb-4">
            <CCol md={12} lg={10}>
                <CCard className="">
                <CCardBody  className="mb-4 p-3">
                    <CContainer className="mb-4 mt-2 ms-md-4 text-center">
                        <h4 className="mb-0 mt-2">CHAT</h4>
                    </CContainer>
                    <CRow>
                        <CCol md={4} xs={12} className="mb-2">
                        <CAccordion activeItemKey={1} >
                            <CAccordionItem itemKey={1}>
                                <CAccordionHeader>
                                    Conversas
                                </CAccordionHeader>

                                <CAccordionBody className="p-0">
                                    {/* d-lg-block d-none */}
                                <CListGroup className="">

                                    <CListGroupItem className="d-flex justify-content-between align-items-center"
                                    component="a" href="#">
                                        <div>
                                            <CAvatar src={avatar4} size="md" /> 
                                            <label className="px-2">
                                                Beatriz dos Santos
                                            </label> 
                                        </div>
                                        <CBadge color="success" shape="rounded-pill">
                                        14
                                        </CBadge>
                                    </CListGroupItem>
                                    <CListGroupItem className="d-flex justify-content-between align-items-center"
                                    component="a" href="#">
                                        <div>
                                            <CAvatar src={avatar5} size="md" /> 
                                            <label className="px-2">
                                                Jessica Maria
                                            </label> 
                                        </div>
                                        <CBadge color="success" shape="rounded-pill">
                                        2
                                        </CBadge>
                                    </CListGroupItem>
                                    <CListGroupItem className="d-flex justify-content-between align-items-center"
                                    component="a" href="#">
                                        <div>
                                            <CAvatar src={avatar6} size="md" /> 
                                            <label className="px-2">
                                                Fernando Silva
                                            </label> 
                                        </div>
                                        <CBadge color="success" shape="rounded-pill">
                                        1
                                        </CBadge>
                                    </CListGroupItem>
                                    <CListGroupItem className="d-flex justify-content-between align-items-center"
                                    component="a" href="#">
                                        <div>
                                            <CAvatar src={avatar2} size="md" /> 
                                            <label className="px-2">
                                                Paulo Nogueira
                                            </label> 
                                        </div>
                                        <CBadge color="primary" shape="rounded-pill">
                                        
                                        </CBadge>
                                    </CListGroupItem>
                                    <CListGroupItem className="d-flex justify-content-between align-items-center"
                                    component="a" href="#">
                                        <div>
                                            <CAvatar src={avatar8} size="md" /> 
                                            <label className="px-2">
                                                Amanda Perez
                                            </label> 
                                        </div>
                                        <CBadge color="primary" shape="rounded-pill">
                                        
                                        </CBadge>
                                    </CListGroupItem>
                                    </CListGroup>
                                </CAccordionBody>
                                </CAccordionItem>
                        </CAccordion>
                        </CCol>

                        <CCol md={8} xs={12}>
                            <CCard>
                                <CCardHeader className="p-2">
                                    <CAvatar src={avatar8} size="md" /> 
                                    <label className="ps-3">
                                        Amanda Perez
                                    </label> 
                                </CCardHeader>
                                <CCardBody className="p-2 chat-area">
                                
                                <ol className="chat">
                                    <li className="self">
                                        <div className="msg">
                                            <span>{user.nome}</span>
                                            <p>Olá eu tenho interesse no seu produto</p>
                                        </div>
                                    </li>
                                    <li className="other">
                                        <div className="msg">
                                            <span>Amanda Perez</span>
                                            <p>Olá! Ele está disponível.</p>
                                        </div>
                                    </li>
                                    <li className="self">
                                        <div className="msg">
                                            <span>{user.nome}</span>
                                            <p>Legal! Onde podemos nos encontrar?</p>
                                        </div>
                                    </li>
                                </ol>

                                </CCardBody>
                                <CCardFooter className="p-2">
                                    <CInputGroup className="">
                                        <CFormInput
                                            type="text"
                                            placeholder="Escreva aqui..."
                                        />
                                        <CButton type="button" color="white border">
                                            <CIcon icon={cilSend} />
                                        </CButton>
                                    </CInputGroup>
                                </CCardFooter>
                            </CCard>
                        </CCol>

                    </CRow>
                </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}
export default Chat