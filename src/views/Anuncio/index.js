import React, { useEffect, useState, useContext } from "react";
import { CCard, CRow,  CCol, CContainer } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { cilDollar, cilLoopCircular, cilSmile } from "@coreui/icons";
import { useParams, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import {format} from "date-fns";
import firebase from "../../services/firebaseConn";

const Anuncio = () =>{
  const params = useParams();
  const {user} = useContext(AuthContext);
  const [anuncios, setAnuncios] = useState(null);
  const [loading, setLoading] = useState(true);
  const [iconTipo, setIconTipo] = useState();

  useEffect(()=>{

    async function loadAnuncios(){
      await firebase.firestore().collection('anuncios').doc(params.id).get()
      .then(async (snapshot)=>{
        // updateState(snapshot);
        await firebase.firestore().collection('users').doc(snapshot.data().user_id).get()
        .then((value)=>{
          setAnuncios({
            id: snapshot.id,
            titulo: snapshot.data().titulo,
            user_id: snapshot.data().user_id,
            descricao: snapshot.data().descricao,
            tipo: snapshot.data().tipo,
            tempo: snapshot.data().tempo,
            imagem: snapshot.data().imagem,
            valor: (snapshot.data().valor) ? snapshot.data().valor : '',
            user: value.data(),
            created_at: snapshot.data().created_at,
            createdFormated: format(snapshot.data().created_at.toDate(), 'dd/MM/yyyy'),
          });
        })

        if(snapshot.data().tipo==="Troca"){
          setIconTipo(cilLoopCircular);
        }else if(snapshot.data().tipo==="Doação"){
          setIconTipo(cilSmile);
        }else if(snapshot.data().tipo==="Venda"){
          setIconTipo(cilDollar);
        }

        setLoading(false);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    loadAnuncios();
    
  }, [params. id]);

  if(loading){
    return(
      <CCard className="mb-4 p-3">
        <CContainer className="mb-4 mt-4 ms-md-4 text-center">
          <h4 className="mb-0 mt-2">ANUNCIO</h4>
        </CContainer>

        <div className="text-center">
          <h4>Carregando...</h4>
        </div>
      </CCard>
    )
  }
  
    return(
      <>
        <CCard className="mb-4 p-3">
          <CContainer className="mb-4 mt-4 ms-md-4 text-center">
            <h4 className="mb-0 mt-2">ANÚNCIO</h4>
          </CContainer>

          <CRow className="mb-4">
            <CCol md={6} className="text-end p-3">
              <img src={anuncios.imagem} alt="..." className="img-anuncio-show"/>
            </CCol>
            <CCol md={6} className="p-3">
              <h4 className="card-title ms-0 mb-2 mt-0">{anuncios.titulo}</h4>
              <p>{anuncios.descricao}</p>
              <span className="badge s-second">
                Tempo de uso: {anuncios.tempo}
              </span>
              <span className="ms-3 badge s-third">
                <CIcon icon={iconTipo} /> {anuncios.tipo}
              </span>
                <br/>
                {anuncios.valor && (
                  <h4 className="mt-2 color-link">R$ {anuncios.valor}</h4>
                )}
                {!anuncios.valor && (
                  <br/>
                )}
              <hr/>
              <span className="text-secondary">ANUNCIANTE</span>
              <div className="img-user mt-2">
                <img src={anuncios.user.avatarUrl} alt="user"/>
                <Link to={'/usuarios/'+anuncios.user_id} color="white" className="color-link text-decoration-none">
                  {anuncios.user.nome}
                </Link>
              </div>
              <hr/>
              {((user && user.uid!==anuncios.user_id)) && (
                <>
                  <span className="text-secondary">Tem interesse?</span>
                  <br/>
                  <Link to={'/chat'} color="secondary" className="btn color-azul text-white mt-2 text-decoration-none">
                      Iniciar Chat
                  </Link>
                </>
              )}
               {(!user) && (
                 <>
                  <span className="text-secondary">Tem interesse?</span>
                  <br/>
                  <Link to={'/login'} color="secondary" className="btn color-azul text-white mt-2 text-decoration-none">
                      Iniciar Chat
                  </Link>
                </>
               )}
            </CCol>
          </CRow>
        </CCard>
      </>
    );
}
export default Anuncio