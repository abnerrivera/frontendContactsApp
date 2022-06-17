import React, { useState } from 'react'
import { Button, Alert } from "@mui/material"
import { TextFieldSearch } from '../NavSearch/NavSearch.style'
import { FormCreateContactContainer } from './CreateContactForm.style'
import { useForm } from "react-hook-form"
import axios from 'axios'


const CreateContactForm = ({ setLoad }) => {

  const [loader, setLoader] = useState(false)

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(`http://localhost:3000/contacts`, data);
      setLoader(true);
      setLoad()
    } catch (error) {
      return null;
    }
  }


  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <hr />
      <FormCreateContactContainer>
        <TextFieldSearch
          {...register("name", { required: true })}
          label="Nombre"
          variant="filled"
          color="success"
          focused />

        <TextFieldSearch
          {...register("phone", { required: true })}
          label="Telefono"
          variant="filled"
          color="success"
          focused />

        <TextFieldSearch
          {...register("date_birth", { required: true })}
          label="Fecha nacimiento"
          variant="filled"
          color="success"
          focused />

        <TextFieldSearch
          {...register("address", { required: true })}
          label="Direccion"
          variant="filled"
          color="success"
          focused />

        <TextFieldSearch
          {...register("email", { required: true })}
          label="Correo"
          variant="filled"
          color="success"
          focused />

        <Button
          type="submit"
          style={{ marginTop: 50 }}
          variant="contained"
          color="success">
          Guardar
        </Button>

        {loader ?
          <Alert severity="success">Guardado! puedes volver</Alert> : null
        }

      </FormCreateContactContainer>
    </form>
  )
}

export default CreateContactForm