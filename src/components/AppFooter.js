import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span> Support Contact: +92-213-4146566 </span>
        <a href="https://consultant@regex.global" target="_blank" rel="noopener noreferrer">
          | consultant@regex.global
        </a>
        {/* <span className="ms-1">  </span> */}
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://regex.global" target="_blank" rel="noopener noreferrer">
          REGEX
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
