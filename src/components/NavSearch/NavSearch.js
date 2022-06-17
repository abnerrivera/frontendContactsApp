import React from 'react'
import { NavContainer, TextFieldSearch } from './NavSearch.style'
import BasicModal from '../ModalBasic/ModalBasic';
import CreateContactForm from '../CreateContactForm/CreateContactForm';


const NavSearch = ({ setSearch, setLoad }) => {

  return (
    <NavContainer>

      <TextFieldSearch label="Buscar un contacto" variant="filled" color="success" focused
        onChange={(buscador) => setSearch(buscador.target.value)}
      />

      <BasicModal
        btnTitle={'Nuevo contacto'}
        modalTitle={'Crear nuevo contacto'}
        children={
          <CreateContactForm
            setLoad={setLoad}
          />
        }
      />

    </NavContainer>
  )
}

export default NavSearch