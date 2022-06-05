import React, { useState,useContext } from "react";
import { CCard, CCardBody, CRow,  CCol, CInputGroup,CInputGroupText,CFormInput, CFormTextarea,CFormSelect,CFormLabel, CButton } from '@coreui/react'
import CIcon from "@coreui/icons-react";
import { cilClock, cilJustifyLeft, cilList, cilText } from "@coreui/icons";
import firebase from '../../services/firebaseConn';
import { AuthContext } from "../../contexts/auth";
import { toast } from "react-toastify";

const CadastrarAnuncio = () =>{
    const [titulo, setTitulo] =useState('');
    const [descricao, setDescricao] =useState('');
    const [tempo, setTempo] =useState('');
    const [tipo, setTipo] =useState(['Troca','Doação', 'Venda']);
    const [tipoSelected, setTipoSelected] =useState('');
    const [imagem, setImagem] =useState('');
    // const [imagemUrl,setImagemUrl] = useState(null);
    const [saveButton, setSaveButton] = useState(true);

    const {user} = useContext(AuthContext);

    async function Register(e){
        e.preventDefault();
        if(titulo!=='' && descricao!=='' && tempo !=='' && tipoSelected !== '' && imagem !==''){
            setSaveButton(false);

            await firebase.firestore().collection('anuncios')
            .add({
                created_at: new Date(),
                titulo: titulo,
                descricao: descricao,
                tipo: tipoSelected,
                tempo: tempo,
                imagem: null,
                user_id: user.uid
            })
            .then((value)=>{
                if(imagem){  uploadImage(value.id); }
                toast.success(`Anuncio de ${tipoSelected} criado com sucesso`);
                limpaCampos();
            })
            .catch((error)=>{
                toast.error('Oops... Erro ao registrar, tente mais tarde');
                console.log(error);
            })

            setSaveButton(true);

        }else{
            toast.error('Por favor preencha todos os campos');
        }
    }

    function limpaCampos(){
        setTitulo('');
        setDescricao('');
        setTempo('');
        setTipo('');
        setTipoSelected(0);
        setImagem('');
        // setImagemUrl(null);
    }

    async function uploadImage(anuncio_id){
        
        await firebase.storage()
        .ref(`images/anuncio/${anuncio_id}/${imagem.name}`)
        .put(imagem)
        .then(async ()=>{
            
            await firebase.storage().ref(`images/anuncio/${anuncio_id}`)
                .child(imagem.name).getDownloadURL()
                .then(async (url)=>{
                    await firebase.firestore().collection('anuncios').doc(anuncio_id)
                        .update({
                            imagem: url
                        })
                })
           
            setImagem(null);
        //     setImagemUrl(null);
        })
    }

    function handleFile(e){

        if(e.target.files[0]){
            const image = e.target.files[0];
            if(image.type === 'image/jpeg'||image.type === 'image/png'){
                setImagem(image);
    //             setImagemUrl(URL.createObjectURL(e.target.files[0]));
            }else{
                toast.error('Envie uma imagem tipo png ou jpeg');
                setImagem(null);
                return null;
            }
        }
    }
    
    return(
      <>
        <CCard className="mb-4 p-3">
            <div className="text-center mt-2">
                <h2> Cadastrar Anuncio </h2>
                <p className="text-medium-emphasis">Cadastre um anuncio para trocar, doar ou vender sua peça</p>
            </div>
                    
            <CCardBody>
                <CRow className="justify-content-center">
                    <CCol md={12}>
                        <CFormLabel>Título</CFormLabel>
                        <CInputGroup className="mb-3">
                            <CInputGroupText>
                                <CIcon icon={cilText} />
                            </CInputGroupText>
                            <CFormInput placeholder="Ex: Placa de Vídeo" value={titulo} onChange={(e)=>setTitulo(e.target.value)}/>
                        </CInputGroup>
                    </CCol>
                    <CCol md={12}>
                        <CFormLabel>Descrição</CFormLabel>
                        <CInputGroup className="mb-3">
                            <CInputGroupText>
                                <CIcon icon={cilJustifyLeft} />
                            </CInputGroupText>
                            <CFormTextarea placeholder="Ex: Placa de vídeo Gainward GeForce RTX 3060, 12GB GDDR6, GHOST Series usada em bom estado pronto pra uso" value={descricao} onChange={(e)=>setDescricao(e.target.value)} rows="3"></CFormTextarea>
                        </CInputGroup>
                    </CCol>
                    <CCol md={4}>
                        <CFormLabel>Tempo de uso</CFormLabel>
                        <CInputGroup className="mb-3">
                            <CInputGroupText>
                                <CIcon icon={cilClock} />
                            </CInputGroupText>
                            <CFormInput placeholder="Ex: 1 ano" value={tempo} onChange={(e)=>setTempo(e.target.value)}/>
                        </CInputGroup>
                    </CCol>
                    <CCol md={4}>
                        <CFormLabel>Tipo</CFormLabel>
                        <CInputGroup className="mb-3">
                            <CInputGroupText>
                                <CIcon icon={cilList} />
                            </CInputGroupText>
                            <CFormSelect aria-label="Default select example" onChange={(e)=>setTipoSelected(e.target.value)}>
                                <option>Selecione...</option>
                                {tipo.map( (item, index) => {
                                    return(
                                        <option key={index} value={item}>
                                            {item}
                                        </option>
                                    );
                                })}
                                
                            </CFormSelect>
                        </CInputGroup>
                    </CCol>
                    <CCol md={4}>
                        <CFormLabel>Imagem</CFormLabel>
                        <CFormInput type="file" id="formFile" onChange={handleFile} value={imagem}/>
                    </CCol>
                </CRow>
                <div className="text-end mt-4">
                    <CButton color="success text-white" className="m-2" disabled={saveButton === false} onClick={Register}>Cadastrar</CButton>
                    <CButton color="secondary text-white">Cancelar</CButton>
                </div>
            </CCardBody>
        </CCard>
      </>
    );
}
export default CadastrarAnuncio