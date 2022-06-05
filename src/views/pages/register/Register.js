import React,{useState, useContext} from 'react'
import { useNavigate, Link  } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormCheck
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilHome, cilLockLocked, cilUser } from '@coreui/icons'
import {AuthContext} from '../../../contexts/auth'
import Modal from "../modal"

const Register = () => {
  const [email,setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [ modal, setModal] = useState(false);
  const [concordo, setConcordo] = useState(false);

  const {cadastro,loadingAuth,user} = useContext(AuthContext);
  let navigate = useNavigate();

  function enviar(e){
    e.preventDefault();
    if(nome !== '' && email !=='' && senha !== ''){
        cadastro(email, senha, nome);
    }
  }
  user && (
    navigate("../dashboard", { replace: true })
  )

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={enviar}>
                  <h1>Cadastrar</h1>
                  <p className="text-medium-emphasis">Crie sua conta</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Nome" autoComplete="nome"  value={nome} onChange={(e)=>setNome(e.target.value)}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Senha"
                      autoComplete="new-password"
                      value={senha} onChange={(e)=>setSenha(e.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repetir Senha"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className=''>
                    <CFormCheck inline type="checkbox" className='m-0' value={concordo} onChange={()=>setConcordo(true)}
                    label='Declaro que li e concordo com o'/><CButton 
                    type="button" color="link" className="color-link text-decoration-none pt-1 ps-1"
                    onClick={()=>setModal(!modal)}>
                      termo de uso</CButton>
                  </div>
                  <div className="d-grid">
                    <CButton type="button" onClick={()=>enviar} color="secondary" disabled={!concordo} className="color-azul text-white">{loadingAuth? 'Carregando...':'Criar conta'}</CButton>
                    <Link to="/login" color="white" className="mt-1 p-2 color-link border text-center text-decoration-none">Login</Link>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
            <div className='text-center mt-2'>
              <Link to="/" color="white" className="px-0 color-link text-decoration-none">
                <CIcon icon={cilHome} /> Ir para página principal
              </Link>              
            </div>
          </CCol>
        </CRow>
      </CContainer>

      {modal && (<Modal visible={modal} setVisible={()=>setModal(!modal)}/>)}
    </div>
  )
}

export default Register
