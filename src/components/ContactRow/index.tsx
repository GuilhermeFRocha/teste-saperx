import { ContactListTD } from "../../pages/ContactList/styles";
import { ContactListTDDrop } from "../ContactListTDDrop";
import { MdDeleteForever, MdModeEdit } from 'react-icons/md'
import { useCallback, useState } from "react";
import { Contact, deleteContact, editContact } from "../../api/base";
import Modal from 'react-modal';
import { ActionButtonsContainer } from "./styles";
import { useFormik } from "formik";
import * as yup from 'yup'

const formInitialState = {
  name: '',
  number: undefined,
  email: '',
  cpf: '',
  date_born: '',
}

export function ContactRow(props: any) {
  const { item } = props
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [editModalIsOpen, setEditIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  function openDeleteModal() {
    setIsOpen(true);
  }

  function closeDeleteModal() {
    setIsOpen(false);
  }

  function openEditModal() {
    setEditIsOpen(true);
  }

  function closeEditModal() {
    setEditIsOpen(false);
  }

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
    handleEdit(formValues)
  }

  const formState = useFormik({
    initialValues: { ...formInitialState },
    validationSchema: formValidationSchema,
    onSubmit: onSubmitForm
  })

  const { values, errors, handleChange, getFieldHelpers, handleSubmit, validateForm, isValid } = formState

  const handleDelete = useCallback(async () => {
    setLoading(true)
    try {
      await deleteContact(item.id)
    } catch (error) {
      console.warn(error)
    }
    setLoading(false)
    setIsOpen(false)
  }, [item.id])

  const handleEdit = useCallback(async (formValues: any) => {
    console.log(formValues);

    setLoading(true)
    try {
      await editContact(item.id, {
        ...formValues
      })
    } catch (error) {
      console.warn(error)
    }
    setLoading(false)
    setIsOpen(false)
  }, [item.id])

  const prepareToSubmit = (event: any) => {
    event.preventDefault()
    validateForm()
    if (isValid) {
      handleSubmit()
    }
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

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Delete Modal"
      >
        <h2>Tem certeza que deseja excluir esse item?</h2>
        <ActionButtonsContainer>
          <button disabled={loading} onClick={handleDelete}>Sim</button>
          <button onClick={closeDeleteModal}>Cancelar</button>
        </ActionButtonsContainer>
      </Modal>
      <Modal
        isOpen={editModalIsOpen}
        style={customStyles}
        contentLabel="Edit Modal"
      >
        <form>
          <input placeholder="Name" type="text" name="name" value={values?.name} onChange={(e) => {
            handleChange(e)
            delete errors.name
          }} />
          {errors?.name && <span>{errors.name}</span>}

          <input placeholder="Email" type="email" name="email" value={values?.email} onChange={(e) => {
            handleChange(e)
            delete errors.email
          }} />
          {errors?.email && <span>{errors.email}</span>}

          <input placeholder="CPF" type="text" name="cpf" value={values?.cpf} onChange={(e) => {
            handleChange(e)
            delete errors.cpf
          }} />
          {errors?.cpf && <span>{errors.cpf}</span>}

          <input placeholder="Number" type="text" name="number" value={values?.number} onChange={(e) => {
            handleChange(e)
            delete errors.number
          }} />
          {errors?.number && <span>{errors.number}</span>}

          <input placeholder="Data de nascimento" type="text" name="date_born" value={values?.date_born} onChange={(e) => {
            handleChange(e)
            delete errors.date_born
          }} />
          {errors?.date_born && <span>{errors.date_born}</span>}
        </form>
        <ActionButtonsContainer>
          <button onClick={prepareToSubmit}>Confirmar</button>
          <button onClick={closeEditModal}>Cancelar</button>
        </ActionButtonsContainer>
      </Modal>
      <tr>
        <ContactListTD>{item.name}</ContactListTD>
        <ContactListTD>{item.email}</ContactListTD>
        <ContactListTD>{item.cpf}</ContactListTD>
        <ContactListTD>{item.date_born}</ContactListTD>
        {item.numbers.length ? (
          <ContactListTDDrop numberList={item.numbers} />
        ) : (
          <ContactListTD>N/A</ContactListTD>
        )}
        <ContactListTD><MdModeEdit onClick={openEditModal} /> <MdDeleteForever onClick={openDeleteModal} /></ContactListTD>
      </tr>
    </>
  )
}



