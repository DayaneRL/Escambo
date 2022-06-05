import React, {useState, useEffect} from "react";
import { CCard, CCardBody, CRow,  CCarousel, CCarouselItem, CContainer } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { cilLoopCircular } from "@coreui/icons";
import {format} from "date-fns";

import firebase from "../../services/firebaseConn";
const url = firebase.firestore().collection('anuncios').where('tipo','==','Troca').orderBy('created_at', 'desc');

const Troca = () =>{
  const [anuncios, setAnuncios] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{

    async function loadAnuncios(){
      await url.get()
      .then((snapshot)=>{
        updateState(snapshot);
      })
      .catch((error)=>{
        console.log(error);
      })
    }

    loadAnuncios();
  }, [])

  async function updateState(snapshot){
    let lista = [];
    let anuncios_3 = [];
    let contador = 0;

    snapshot.forEach(async (doc)=>{
      
      await firebase.firestore().collection('users').doc(doc.data().user_id).get()
      .then((value)=>{
        contador+=1;
        anuncios_3.push({
          id: doc.id,
          titulo: doc.data().titulo,
          user_id: doc.data().user_id,
          descricao: doc.data().descricao,
          tipo: doc.data().tipo,
          tempo: doc.data().tempo,
          imagem: doc.data().imagem,
          user: value.data(),
          created_at: doc.data().created_at,
          createdFormated: format(doc.data().created_at.toDate(), 'dd/MM/yyyy'),
        })
        if(contador===3){
          contador=0;
          lista.push(anuncios_3);
          lista.push(anuncios_3);
          setAnuncios(anuncios => [...anuncios,...lista]);
          setLoading(false);
        }
      })

    })
  }

  
  if(loading){
    return(
      <CCard className="mb-4 p-3">
        <CContainer className="mb-4 mt-4 ms-md-4 text-center">
          <h4 className="mb-0 mt-2">TROCAS</h4>
          <article className="text-secondary">
          Troque uma peça que você não usa mais por outra que precisa.
          </article>
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
              <h4 className="mb-0 mt-2">TROCAS</h4>
              <article className="text-secondary">
              Troque uma peça que você não usa mais por outra que precisa.
              </article>
            </CContainer>

            <CCarousel controls indicators className="carousel-esc mb-md-4 mb-xs-2">

              {anuncios.map((item, index)=>{
                return(
                  <CCarouselItem key={index}>
                    <CRow>

                    {item.map((anuncio, i)=>{
                      return(
                        <CCard className="col-md-3 p-0 d-none d-md-block" key={i}>
                          <div className="img-ad">
                            <img src={anuncio.imagem} alt="..."/>
                          </div>
                          <h4 className="card-title">{anuncio.titulo}</h4>

                          <CCardBody>
                            <p>{anuncio.descricao}</p>
                            <span className="badge s-second">Tempo de uso: {anuncio.tempo}</span><br/>
                            <span className="badge s-third"><CIcon icon={cilLoopCircular} /> {anuncio.tipo}</span>

                            <hr/>
                            <div className="img-user">
                              <img src={anuncio.user.avatarUrl} alt="user"/>
                              <a href={'/usuarios/'+anuncio.user_id}>{anuncio.user.nome}</a>
                            </div>
                          </CCardBody>
                        </CCard>
                      )
                    })}

                    </CRow>
                  </CCarouselItem>
                );
              })}
    
                {/* <CCarouselItem>
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
                </CCarouselItem> */}
              
            </CCarousel>

        </CCard>
          
      </>
    );
}
export default Troca