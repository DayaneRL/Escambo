import React, { useEffect, useState } from "react";
import { CCard, CRow, CCardBody, CContainer, CAvatar, CCarousel, CCarouselItem } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { cilDollar, cilLoopCircular, cilSmile } from "@coreui/icons";
import { useParams, Link } from "react-router-dom";
import {format} from "date-fns";
import firebase from "../../services/firebaseConn";

const User = () =>{
  const params = useParams();
  const [usuario, setUsuario] = useState(null);
  const [anuncios, setAnuncios] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loading, setLoading] = useState(true);
 
  useEffect( ()=>{
    async function loadUser(){
      await firebase.firestore().collection('users').doc(params.id).get()
      .then((snapshot)=>{
        setUsuario({
          id: snapshot.id,
          nome: snapshot.data().nome,
          avatarUrl: snapshot.data().avatarUrl,
        });
        setLoadingUser(false);
        loadAnuncios(params.id);
      })
    }
    loadUser();

    async function loadAnuncios(id){
      await firebase.firestore().collection('anuncios')
      .where('user_id','==',id).orderBy('created_at', 'desc')
      .get()
      .then(async (value)=>{
        setAnuncios([]);
        updateState(value);
      })
      .catch((error)=>{
          console.log(error);
      })
    }
    
  },[params.id]);

  
  async function updateState(value){
    let lista = [];
    let anuncios_3 = [];
    let contador = 0;

    await value.forEach((doc)=>{
      contador+=1;
      anuncios_3.push({
        id: doc.id,
        titulo: doc.data().titulo,
        user_id: doc.data().user_id,
        descricao: doc.data().descricao,
        tipo: doc.data().tipo,
        tempo: doc.data().tempo,
        imagem: doc.data().imagem,
        created_at: doc.data().created_at,
        createdFormated: format(doc.data().created_at.toDate(), 'dd/MM/yyyy'),
      })

      if(value.size >=3 && contador===3){
        contador=0;
        lista.push(anuncios_3);
      }else if(contador===value.size){
        lista.push(anuncios_3);
      }

      if(contador===value.size){
        setAnuncios(anuncios => [...anuncios,...lista]);
        setLoading(false);
      }
    })
   
    return lista;
  }

  if(loadingUser){
    return(
      <CCard className="mb-4 p-3">
        <CContainer className="mb-4 mt-4 ms-md-4 text-center">
          <h4 className="mb-0 mt-2">ANUNCINATE</h4>
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
            <div className="text-center mt-4">
              <CAvatar src={usuario.avatarUrl} size="xl" /> 
              <br/>
              <h4 className="color-link">
                {usuario.nome}
              </h4>
            </div>

            <br/><hr/><br/>

            <h4 className="text-secondary text-center">ANUNCIOS</h4>
            {loading && (
              <div className="text-center">
                <h4>Carregando...</h4>
              </div>
            )}

            { (anuncios.length>0 && anuncios.length>=3)  && (
              <CCarousel controls indicators className="carousel-esc mb-md-4 mb-xs-2">
                {anuncios.map((item, index)=>{
                  return(
                    <CCarouselItem key={index}>
                      <CRow>

                      {item.map((anuncio, i)=>{
                        return(
                          <CCard className="col-md-3 p-0 d-none d-md-block" key={i}>
                            <Link to={'/anuncio/'+anuncio.id} className="text-decoration-none">
                              <div className="img-ad">
                                <img src={anuncio.imagem} alt="..."/>
                              </div>
                              <h4 className="card-title text-dark">{anuncio.titulo}</h4>
                            </Link>
                            <CCardBody>
                              <Link to={'/anuncio/'+anuncio.id}>
                                <p className="text-dark">{anuncio.descricao}</p>
                                <span className="badge s-second">Tempo de uso: {anuncio.tempo}</span><br/>
                                <span className="badge s-third">
                                  <CIcon icon={(anuncio.tipo==="Doação") ? cilSmile : (anuncio.tipo==="Venda" ? cilDollar : cilLoopCircular)} /> {anuncio.tipo}
                                </span>
                              </Link>
                            </CCardBody>
                          </CCard>
                        )
                      })}

                      </CRow>
                    </CCarouselItem>
                  );
                })}
              </CCarousel>
            )}

            { (anuncios.length>0 && anuncios.length<3)  && (
              anuncios.map((item, index)=>{
                return(
                  <CRow key={index} className="justify-content-center p-2">
                  {item.map((anuncio, i)=>{
                    return(
                        <CCard className="p-0 m-3 card-anuncios-user" key={i}>
                          <Link to={'/anuncio/'+anuncio.id} className="text-decoration-none">
                            <div className="img-ad">
                              <img src={anuncio.imagem} alt="..."/>
                            </div>
                            <h4 className="card-title text-dark">{anuncio.titulo}</h4>
                          </Link>

                          <CCardBody>
                            <Link to={'/anuncio/'+anuncio.id}>
                              <p className="text-dark">{anuncio.descricao}</p>
                              <span className="badge s-second">Tempo de uso: {anuncio.tempo}</span><br/>
                              <span className="badge s-third">
                                <CIcon icon={(anuncio.tipo==="Doação") ? cilSmile : (anuncio.tipo==="Venda" ? cilDollar : cilLoopCircular)} /> {anuncio.tipo}
                              </span>
                            </Link>
                          </CCardBody>
                        </CCard>
                    )
                  })}
                  </CRow>
                );
              })
             )}
        </CCard>
      </>
    );
}
export default User