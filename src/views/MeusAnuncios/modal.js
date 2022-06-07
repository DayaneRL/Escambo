import React,{useState} from "react"
import{CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'
export default function Modal({visible, setVisible}){
    return (
    <>
        <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle>Confirmar</CModalTitle>
        </CModalHeader>
        <CModalBody>Você tem certeza que deseja excluir esse anuncio?</CModalBody>
        <CModalFooter>
            <CButton color="secondary" className="text-white" onClick={() => setVisible(false)}>
            Cancelar
            </CButton>
            <CButton color="white" className="color-azul text-white">Excluir</CButton>
        </CModalFooter>
        </CModal>
    </>
    )
}