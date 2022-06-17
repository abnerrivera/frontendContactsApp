import React from 'react'
import { Button } from "@mui/material";
import { CardPerson, CardsContainer } from './CardContacts.style'
import BasicModal from '../ModalBasic/ModalBasic';
import EditContactForm from '../EditContactForm/EditContactForm';

const CardContact = ({ 
  name, 
  phone, 
  birthDay, 
  address, 
  email, 
  onClickDelete, 
  idContact, 
  setLoad
}) => {
  return (
    <CardsContainer>
      <CardPerson>
        <h2>{name}</h2>
        <h3>Telefono: <span>{phone}</span></h3>
        <h3>Fecha nacimiento: <span>{birthDay}</span></h3>
        <h3>Direccion: <span>{address}</span></h3>
        <h3>Correo: <span>{email}</span></h3>

        <span>
          <div style={{ marginBottom: 20 }}>

            <BasicModal
              btnTitle={'Editar'}
              modalTitle={'Editar contacto'}
              children={
                <EditContactForm 
                 idContact={idContact}
                 setLoad={setLoad}
                />
              }
            />

          </div>

          <Button variant="outlined" color="error"
            onClick={onClickDelete}
          >
            Eliminar
          </Button>
        </span>
      </CardPerson>
    </CardsContainer>
  )
}

export default CardContact