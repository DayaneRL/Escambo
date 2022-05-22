import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Escambo
        </a>
        <span className="ms-1">&copy; 2022 ETM.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Desenvolvido por:</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Eco Tech Makers
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
