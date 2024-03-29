import React, {useEffect, useState, useContext} from "react";
import { 
    CCard,  
    CTable, 
    CTableHead, 
    CTableRow, 
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CContainer,
    CButton, 
} from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { Link } from 'react-router-dom'
import { cilMagnifyingGlass, cilPencil, cilTrash } from "@coreui/icons";
import { AuthContext } from "../../contexts/auth";
import {format} from "date-fns";
import firebase from "../../services/firebaseConn";
import Modal from "./modal.js";

const MeusAnuncios = () => {
  const {user} = useContext(AuthContext);
  const [anuncios, setAnuncios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ modal, setModal] = useState(false);
  
  useEffect(()=>{
    async function loadAnuncios(){
        if(user){
            await firebase.firestore().collection('anuncios')
            .where('user_id','==',user.uid).orderBy('created_at', 'desc')
            .get()
            .then((snapshot)=>{
                updateState(snapshot);
            })
            .catch((error)=>{
                console.log(error);
            })
        }
        
    }
    loadAnuncios();
  }, [])

  async function updateState(snapshot){
    let lista = [];
    let contador = 0;

    snapshot.forEach(async (doc)=>{
        contador +=1;
      
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          user_id: doc.data().user_id,
          descricao: doc.data().descricao,
          tipo: doc.data().tipo,
          tempo: doc.data().tempo,
          imagem: doc.data().imagem,
        //   user: user,
          created_at: doc.data().created_at,
          createdFormated: format(doc.data().created_at.toDate(), 'dd/MM/yyyy'),
        })

        if(contador===snapshot.size){
            setAnuncios(anuncios => [...anuncios,...lista]);
            setLoading(false);
        }
    })

    if(snapshot.size===0){
        setLoading(false);
    }
  }

    return(
        <CCard className="mb-4 p-3">
            
            <CContainer className="mb-4 mt-4 ms-md-4 text-center">
            <h4 className="mb-0 mt-2">MEUS ANÚNCIOS</h4>
            <hr/>
            </CContainer>

            {loading && (
                <div className="text-center">
                    <h4>Carregando...</h4>
                </div>
            )}

            <CTable hover className="text-center">
                <CTableHead>
                    <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Titulo</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tipo</CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="d-none d-md-block">Data Criação</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Ações</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                {anuncios.map((item, index)=>{
                    return(
                        <CTableRow key={index}>
                            <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                            <CTableDataCell>{item.titulo}</CTableDataCell>
                            <CTableDataCell>{item.tipo}</CTableDataCell>
                            <CTableDataCell className="d-none d-md-block pt-3 pb-3">{item.createdFormated}</CTableDataCell>
                            <CTableDataCell>
                                <Link to={'/anuncio/'+item.id} color="secondary" className="btn color-azul text-white text-decoration-none">
                                    <CIcon icon={cilMagnifyingGlass} />
                                </Link>  
                                <Link to={'/cadastrar-anuncio/'+item.id} color="success" className="btn btn-secondary ms-2 text-white text-decoration-none">
                                    <CIcon icon={cilPencil} />
                                </Link>  
                                <CButton onClick={()=>setModal(!modal)} color="danger" className="btn btn-danger ms-2 text-white text-decoration-none">
                                    <CIcon icon={cilTrash} />
                                </CButton>  
                            </CTableDataCell>
                        </CTableRow>
                    );
                })}
                </CTableBody>
            </CTable>
            
            {modal && (<Modal visible={modal} setVisible={()=>setModal(!modal)}/>)}
        </CCard>
    )
}
export default MeusAnuncios;