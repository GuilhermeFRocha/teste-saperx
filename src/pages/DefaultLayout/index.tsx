import { Outlet } from 'react-router-dom'
import FAB from '../../components/FAB'
import { Header } from '../../components/Header'
import { InputForm, LayoutContainer, TitleNeon } from './styles'
import { useState, useCallback } from 'react'
import Modal from 'react-modal';
import { ActionButtonsContainer } from '../../components/ContactRow/styles'
import { Contact, createContact } from '../../api/base'
import * as yup from 'yup'
import { useFormik } from "formik";

const formInitialState = {
  name: '',
  number: undefined,
  email: '',
  cpf: '',
  date_born: '',
}

export function DefaultLayout() {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#202024',
      border: 'none'
    },
  };

  const formValidationSchema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .min(
        5,
        "Nome precisa ter pelomenos 5 caracteres"
      )
      .required("Campo obrigatório"),
  })

  const onSubmitForm = (formValues: Contact) => {
    handleCreate(formValues)
  }

  const formState = useFormik({
    initialValues: { ...formInitialState },
    validationSchema: formValidationSchema,
    onSubmit: onSubmitForm
  })

  const { values, errors, handleChange, handleSubmit, validateForm, isValid } = formState

  const handleCreate = useCallback(async (formValues: any) => {
    setLoading(true)
    try {
      await createContact({...formValues})
    } catch (error) {
      console.warn(error)
    }
    setLoading(false)
    setIsOpen(false)
  }, [])

  const prepareToSubmit = (event: any) => {
    event.preventDefault()
    validateForm()
    if (isValid) {
      handleSubmit()
    }
  }

  return (
    <LayoutContainer>
      <Header />
      <TitleNeon>Agenda telefônica</TitleNeon>
      <Outlet />
      <FAB onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Create Modal"
      >
       <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <InputForm placeholder="Name" type="text" name="name" value={values?.name} onChange={(e) => {
            handleChange(e)
            delete errors.name
          }} />
          {errors?.name && <span>{errors.name}</span>}

          <InputForm placeholder="Email" type="email" name="email" value={values?.email} onChange={(e) => {
            handleChange(e)
            delete errors.email
          }} />
          {errors?.email && <span>{errors.email}</span>}

          <InputForm placeholder="CPF" type="text" name="cpf" value={values?.cpf} onChange={(e) => {
            handleChange(e)
            delete errors.cpf
          }} />
          {errors?.cpf && <span>{errors.cpf}</span>}

          <InputForm placeholder="Number" type="text" name="number" value={values?.number} onChange={(e) => {
            handleChange(e)
            delete errors.number
          }} />
          {errors?.number && <span>{errors.number}</span>}

          <InputForm placeholder="Data de nascimento" type="text" name="date_born" value={values?.date_born} onChange={(e) => {
            handleChange(e)
            delete errors.date_born
          }} />
          {errors?.date_born && <span>{errors.date_born}</span>}
        </form>
        <ActionButtonsContainer>
          <button disabled={loading} onClick={prepareToSubmit}>Sim</button>
          <button onClick={closeModal}>Cancelar</button>
        </ActionButtonsContainer>
      </Modal>
    </LayoutContainer>
  )
}