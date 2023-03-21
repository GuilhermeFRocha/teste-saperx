import { useEffect, useState } from 'react';
import { getContact } from '../../api/base';
import { data as contacts } from '../../api/Mock';
import { ContactRow } from '../../components/ContactRow';

import {
  ContactListContainer,
  ContactListList,
  ContactListTable,
  ContactListTH,
} from './styles'

export function ContactList() {
  const [data, setData] = useState<any>([])
  
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getContact();
        setData(response)
      } catch (error) {
        console.warn(error)
      }
    };
    fetchContacts();
  }, []);

  return (
    <ContactListContainer>
      <h1>Meu histórico</h1>

      <ContactListList>
        <ContactListTable>
          <thead>
            <tr>
              <ContactListTH>Nome</ContactListTH>
              <ContactListTH>E-mail</ContactListTH>
              <ContactListTH>CPF</ContactListTH>
              <ContactListTH>Data de nasc.</ContactListTH>
              <ContactListTH>Telefone</ContactListTH>
              <ContactListTH>Ações</ContactListTH>
            </tr>
          </thead>

          <tbody>
            {data ? data.map((item: any) => {
              return (
                <ContactRow item={item} />
              )
            }) : contacts.map((item: any) => {
              return (
                <ContactRow item={item} />
              )
            })}
          </tbody>
        </ContactListTable>
      </ContactListList>
    </ContactListContainer>
  )
}