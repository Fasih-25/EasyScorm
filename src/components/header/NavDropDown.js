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

import { Link } from 'react-router-dom'
import ChangePassword from '../ChangePassword'
import ProfilePopup from '../ProfilePopup'

const NavDropDown = (props) => {
    const[buttonPopup, setButtonPopup] = useState(false);
    const[profilePopup, setProfilePopup] = useState(false);
    const handleOnClose = () => setButtonPopup(false)
    const handleProfileClose = () => setProfilePopup(false)
  return (
    <>
        <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
            <CAvatar src={props.user.profile_image} className='border border-2 border-dark' size="md" />
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
            <Link onClick={() => setProfilePopup(true)} className='text-decoration-none' >
            <CDropdownItem  className="border border-bottom-2 border-top-0 border-end-0 border-start-0 border-dark">
                Profile
            </CDropdownItem>
            </Link>
            <Link onClick={() => setButtonPopup(true)} className='text-decoration-none'>
            <CDropdownItem className="border border-bottom-2 border-top-0 border-end-0 border-start-0 border-dark ">
                Setting
            </CDropdownItem>
            </Link>
            <Link to="/signin" className='text-decoration-none'>
            <CDropdownItem  >
                Logout
            </CDropdownItem>
            </Link>
        </CDropdownMenu>
        </CDropdown>
        <ChangePassword trigger={buttonPopup} onClose={handleOnClose} user = {props.user} >
      </ChangePassword>
        <ProfilePopup trigger={profilePopup} onClose={handleProfileClose} user = {props.user} > 
      </ProfilePopup>
    </>
  )
}

export default NavDropDown
