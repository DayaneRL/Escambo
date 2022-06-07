import React,{useState,useContext} from 'react'
import { useNavigate ,Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilHome, cilLockLocked, cilUser } from '@coreui/icons'
import {AuthContext} from '../../../contexts/auth'

const Login = () => {
  const [email,setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const {login,loadingAuth,user,signed} = useContext(AuthContext);
  let navigate = useNavigate();

  async function enviar(e){
    e.preventDefault();
    if(email!=='' && senha!==''){
      login(email, senha);
    }
  }

  user && (
    navigate("../dashboard", { replace: true })
  )

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={enviar}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Faça login na sua conta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Email" autoComplete="username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                        value={senha} onChange={(e)=>setSenha(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="seconday" className="px-4 color-azul text-white">
                        {loadingAuth? 'Carregando...':'Login'}
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="white" className="px-0 color-link">
                          Esqueceu a senha?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white color-primary py-5 d-none d-md-block " style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Cadastre-se</h2>
                    <p>
                      Faça uma conta na Escambo para fazer parte da comunidade que procura
                      ajudar as pessoas de uma forma simples.
                    </p>
                    <Link to="/register">
                      <CButton color="secondary" className="mt-3 color-azul text-white" active tabIndex={-1}>
                        Cadastre-se Agora!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
            <div className='text-center mt-2'>
              <Link to="/" color="white" className="px-0 color-link text-decoration-none">
                <CIcon icon={cilHome} /> Ir para página principal
              </Link>              
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
