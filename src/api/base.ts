import axios from "axios";

export interface Contact {
  id?: number;
  name: string;
  email: string;
  date_born: string;
  number: string[] | undefined;
  cpf: string;
}

export async function getContact(){
  const response = await axios.get(
      "http://teste-frontend.saperx.com.br/api/schedule"
    );
  return response;
}

export async function editContact(
  numberId: number,
  contact: Contact
){
  const response = await axios.put(
    `https://teste-frontend.saperx.com.br/api/schedule/${numberId}`,
    { body: JSON.stringify(contact) }
  );
  return response;
}

export async function deleteContact(
  numberId: number
){
  const response = await axios.delete(
    `https://teste-frontend.saperx.com.br/api/schedule/${numberId}`,
  );
  return response;
}