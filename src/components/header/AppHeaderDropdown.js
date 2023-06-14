import {React, useState} from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilLockLocked,
  cilKeyboard,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import { Link } from 'react-router-dom'
import ResetPassword from '../ResetPassword'

const AppHeaderDropdown = (props) => {
  const[buttonPopup, setButtonPopup] = useState(false);
  const handleOnClose = () => setButtonPopup(false)
  return (
    <>
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={props.user.profile_image} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <Link onClick={() => setButtonPopup(true)} className=''>
          <CDropdownItem className="border border-bottom-2 border-top-0 border-end-0 border-start-0 border-dark ">
            <CIcon icon={cilKeyboard} className="me-2" />
              Change Password
          </CDropdownItem>
        </Link>
        <Link to="/">
          <CDropdownItem>
            <CIcon icon={cilLockLocked} className="me-2" />
            Logout
          </CDropdownItem>
        </Link>
      </CDropdownMenu>
    </CDropdown>
    <ResetPassword trigger={buttonPopup} onClose={handleOnClose} >
      </ResetPassword>
    </>
  )
}

export default AppHeaderDropdown
