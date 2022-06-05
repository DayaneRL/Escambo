import React, {useContext, useEffect, useState} from "react";
import { CCard, CForm, CContainer, CRow, CCol, CCardGroup } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { cilCloudUpload } from "@coreui/icons";
import { useNavigate } from 'react-router-dom'
import firebase from '../../services/firebaseConn';
import { AuthContext } from "../../contexts/auth";
import { toast } from "react-toastify";
import "./perfil.css";

import avatar from '../../assets/avatar.png';

const Perfil = () =>{
  const {user, setUser, storageUser, sair, loadingAuth, signed} = useContext(AuthContext);
  let navigate = useNavigate();
    
  const [nome,setNome] = useState(user && user.nome);
  const [email] = useState(user && user.email);
  const [avatarUrl,setAvatarUrl] = useState(user && user.avatarUrl);
  const [imageAvatar, setImageAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleFile(e){
      if(e.target.files[0]){
          const image = e.target.files[0];
          if(image.type === 'image/jpeg'||image.type === 'image/png'){
              setImageAvatar(image);
              setAvatarUrl(URL.createObjectURL(e.target.files[0]))
          }else{
              toast.error('Envie uma imagem tipo png ou jpeg');
              setImageAvatar(null);
              return null;
          }
      }
  }

  async function uploadImage(){
      const uid = user.uid;

      await firebase.storage()
      .ref(`images/users/${uid}/${imageAvatar.name}`)
      .put(imageAvatar)
      .then(async ()=>{
          setLoading(true);
            
            if(user.avatarUrl!==null){ //apaga a imagem anterior
                await firebase.storage().refFromURL(`${user.avatarUrl}`).delete()
            }

          await firebase.storage().ref(`images/users/${uid}`)
          .child(imageAvatar.name).getDownloadURL()
          .then(async (url)=>{

              await firebase.firestore().collection('users')
              .doc(user.uid)
              .update({
                  avatarUrl: url,
                  nome: nome
              })
              .then(()=>{
                  let data = {
                      ...user,
                      avatarUrl: url,
                      nome: nome
                  }
                  setUser(data);
                  storageUser(data);
                  
                  toast.success('Atualizado com sucesso');
              })

          })
          setLoading(false);
          setImageAvatar(null);
      })
  }

  async function salvarEdit(e){
      setLoading(true);
      e.preventDefault();
        if(imageAvatar===null && nome !== ''){
            await firebase.firestore().collection('users')
            .doc(user.uid)
            .update({
                nome: nome
            })
            .then(()=>{
              let data = {
                  ...user,
                  nome: nome
              }
              setUser(data);
              storageUser(data);
              toast.success('Atualizado com sucesso');
          })
          .catch((error)=>{
              console.log(error);
              toast.error('Algo deu errado');
          })
      }else if(imageAvatar!==null && nome !== ''){
          uploadImage();
      }
      setLoading(false);
  }

  function sairPerfil(){
    sair();
    if(loadingAuth==false && !signed){
        navigate("../dashboard", { replace: true });
    }
  }

    return(
      <>
       <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
   
            <CCard className="mb-4 p-3 align-items-center text-center">
                <CForm onSubmit={salvarEdit} className="form-profile" >
                    <CRow>
                        <CCol md={12}>
                            <label className="label-avatar text-center">
                                <span><CIcon icon={cilCloudUpload} className="text-white" size="xxl"/></span>
                                <input type="file" accept="image/*" onChange={handleFile}/><br/>
                                {avatarUrl === null ? 
                                    <img src={avatar} width={250} height={250} alt="avatar perfil"/>
                                    :    
                                    <img src={avatarUrl} width={250} height={250} alt="avatar perfil"/>}
                            </label>
                        </CCol>
                    </CRow>

                    <CRow>
                        <CCol md={12} className="form-input">
                            <label>Nome</label>
                            <input type="text" value={nome} onChange={(e)=> setNome(e.target.value)}/>
                            <br/>
                            
                            <label>Email</label>
                            <input type="text" value={email} disabled/>
                            <br/>

                            <button type="submit" className="btn btn-success mt-2 text-white" >{loading? 'Carregando...':'Salvar'}</button>
                        </CCol>
                    </CRow>
                </CForm>
            </CCard>

            <CCard className="mb-4">
                <CRow>
                    <CCol md={12} className="text-center p-1">
                    <button className="logout" onClick={sairPerfil}>
                        {loadingAuth? 'Saindo...':'Sair'}
                    </button>
                    </CCol>
                </CRow>
            </CCard>

            </CCol>
            </CRow>
            </CContainer>
      </>
    );
}
export default Perfil