import React, {useEffect, useState} from "react";
import { CCard, CCardBody, CRow,CCol,  CCarousel, CCarouselItem,CCarouselCaption, CContainer, CCardHeader } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { cilLoopCircular,  cilDollar, cilSmile } from "@coreui/icons";
import { Link } from 'react-router-dom'
import {format} from "date-fns";
import firebase from "../../services/firebaseConn";
const url = firebase.firestore().collection('anuncios').limit(3).orderBy('created_at', 'asc');
const urlTroca = firebase.firestore().collection('anuncios').where('tipo','==','Troca').orderBy('created_at', 'desc');


import troca from '../../assets/images/banner/troca_bg1.jpg'
import componente from '../../assets/images/banner/components_bg.jpg'
import tech from '../../assets/images/banner/people2.jpg'

import trocaIMG from '../../assets/images/troca.jpg'

import ESCambo from '../../assets/images/ESCambo.PNG'
import esc_ambo from '../../assets/images/esc_ambo.PNG'

const Dashboard = () =>{
  const [anunciosDestaque, setAnunciosDestaque] = useState([]);
  const [loadingDestaque, setLoadingDestaque] = useState(true);
  const [anuncios, setAnuncios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function loadAnunciosDestaque(){
      await url.get()
      .then((snapshot)=>{
        updateState(snapshot, 'destaque');
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    loadAnunciosDestaque();

    async function loadAnunciosTroca(){
      await urlTroca.get()
      .then((snapshot)=>{
        updateState(snapshot, 'troca');
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    loadAnunciosTroca();
  }, [])

  
  async function updateState(snapshot, tipo){
    let lista = [];
    let contador = 0;

    snapshot.forEach(async (doc)=>{
      
      await firebase.firestore().collection('users').doc(doc.data().user_id).get()
      .then((value)=>{
        contador+=1;
        lista.push({
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
          if(tipo==='destaque'){
            setAnunciosDestaque(anunciosDestaque => [...anunciosDestaque,...lista]);
            setLoadingDestaque(false);
          }else if(tipo==='troca'){
            setAnuncios(anuncios => [...anuncios,...lista]);
            setLoading(false);
          }
        }
        
      })

    })
  }

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
          <CCardBody className="p-0 pt-3">
            <CContainer className="mb-4 ms-md-4 destaque">
              <h4 className="mb-0 mt-md-2">DESTAQUE</h4>
              <article className="text-secondary mt-md-2">Confira as últimas peças publicadas.</article>
            </CContainer>
            
            {loadingDestaque && (
              <div className="text-center">
                <h4>Carregando...</h4>
              </div>
            )}
            
            {anunciosDestaque && (
              <CRow className="p-4 destaque-esc justify-content-center">
                {anunciosDestaque.map((anuncio, index)=>{
                  return(
                    <CCard className="col-md-3 col-xs-12 p-0 ms-md-4 me-md-4" key={index}>
                      <Link to={'/anuncio/'+anuncio.id}>
                        <div className="img-ad">
                          <img src={anuncio.imagem} alt="..."/>
                          <span className="badge bg-warning">DESTAQUE</span>
                        </div>
                        <h4 className="card-title text-dark">{anuncio.titulo}</h4>
                      </Link>
                      <CCardBody>
                        <Link to={'/anuncio/'+anuncio.id}>
                          <p className="text-dark">{anuncio.descricao}</p>
                          <span className="badge s-second">Tempo de uso: {anuncio.tempo}</span>
                          <span className="ms-2 badge s-third">
                            <CIcon icon={(anuncio.tipo==="Doação") ? cilSmile : (anuncio.tipo==="Venda" ? cilDollar : cilLoopCircular)} /> {anuncio.tipo}
                          </span>
                        </Link>

                        <hr/>
                        <div className="img-user">
                          <img src={anuncio.user.avatarUrl} alt="user"/>
                          <Link to={'/usuarios/'+anuncio.user_id}>{anuncio.user.nome}</Link>
                        </div>
                      </CCardBody>
                      
                    </CCard>
                  )})}
              </CRow>
            )}

            <br/>
              <div className="imagem-logo text-center pb-3">
                <Link to="/quem-somos" color="white" className="color-link text-decoration-none">
                  <img src={ESCambo} alt="..." className="w-100"/><br/>
                  <h5 className="color-link">Saiba mais sobre quem somos!</h5>
                </Link>  
              </div>
            <br/>

            <CContainer className="mb-4 ms-md-4">
              <h4 className="mb-0 mt-2">ESCAMBO</h4>
              <article className="text-secondary">
              O escambo é uma transação em que há a troca de mercadorias ou serviços entre as duas partes.
              </article>
            </CContainer>
              {loading && (
                <div className="text-center">
                  <h4>Carregando...</h4>
                </div>
              )}

              {anuncios && (
                <CCarousel controls indicators className="carousel-esc mb-md-4 mb-xs-2 d-none d-md-block">
                <CCarouselItem>
                  <CRow className="justify-content-center">
                    {anuncios.map((anuncio, index)=>{
                      return(
                        <CCard className="col-md-3 col-xs-12 p-0 d-none d-md-block ms-0" key={index}>
                          <Link to={'/anuncio/'+anuncio.id}>
                            <div className="img-ad">
                              <img src={anuncio.imagem} alt="..."/>
                            </div>
                            <h4 className="card-title text-dark">{anuncio.titulo}</h4>
                          </Link>
                            <CCardBody>
                              <Link to={'/anuncio/'+anuncio.id}>
                                <p className="text-dark">{anuncio.descricao}</p>
                                <span className="badge s-second">Tempo de uso: {anuncio.tempo}</span> <br/>
                                <span className="badge s-third"><CIcon icon={cilLoopCircular} /> {anuncio.tipo}</span>
                              </Link>
                              <hr/>
                              <div className="img-user">
                                <img src={anuncio.user.avatarUrl} alt="user"/>
                                <Link to={'/usuarios/'+anuncio.user_id}>{anuncio.user.nome}</Link>
                              </div>
                            </CCardBody>
                          
                        </CCard>
                      )
                    })}
                  </CRow>
                </CCarouselItem>
                <CCarouselItem>
                  <CRow>
                    <CCard className="col-md-11 col-xs-12 p-0 d-none d-md-block">
                    <div className="text-center pt-5 pb-5 mt-5 mb-5">
                      <Link to="/troca" color="white" className="color-link text-decoration-none">
                      <h1 className="color-link">PRATIQUE</h1>
                      <img src={esc_ambo} height="170px" width="70%" alt="..."/>
                      </Link>              
                    </div>
                    </CCard>
                  </CRow>
                </CCarouselItem>
                </CCarousel>
              )}
                 
              <br/>
            </CCardBody>
        </CCard>
          
      </>
    );
}
export default Dashboard