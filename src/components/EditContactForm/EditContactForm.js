import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { Button, Alert } from "@mui/material"
import { TextFieldSearch } from '../NavSearch/NavSearch.style'
import axios from 'axios'
import { EditContactContainer } from "./EditContactForm.style"

const EditContactForm = ({ idContact, setLoad }) => {

  const [loader, setLoader] = useState(false)

  const [data, setData] = useState()

  const { register, handleSubmit } = useForm();



  useEffect(() => {
    const getData = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/contacts/${id}`);
        setData(response.data)
        setLoader(false)
      } catch (error) {
        return null;
      }
    }

    getData(idContact);
  }, [])


  const onSubmit = (data) => {
    console.log(data)
  }

  const nameInput = register("name", { required: true })

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <hr />

      <EditContactContainer>

        <TextFieldSearch
          value={data?.name}
          {...nameInput}
          onChange={(e) => {
            nameInput.onChange(e)
          }}
          label="Nombre"
          variant="filled"
          color="success"
          focused />

        <TextFieldSearch
          {...register("phone", { required: true })}
          value={data?.phone}

          label="Telefono"
          variant="filled"
          color="success"
          focused />

        <TextFieldSearch
          {...register("date_birth", { required: true })}
          value={data?.date_birth}

          label="Fecha nacimiento"
          variant="filled"
          color="success"
          focused />

        <TextFieldSearch
          {...register("address", { required: true })}
          value={data?.address}

          label="Direccion"
          variant="filled"
          color="success"
          focused />

        <TextFieldSearch
          {...register("email", { required: true })}
          value={data?.email}

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


      </EditContactContainer>

    </form>

  )
}

export default EditContactForm