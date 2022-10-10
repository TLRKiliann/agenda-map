import axios from 'axios';
import { DataTypeContact } from '../Models/contactModel';

type DataTypeContactProps = {
  datatype: DataTypeContact[]
};

const getUrlPhone = 'http://localhost:4002/api/getAllPhone/';
//const postUrl = 'http://localhost:3001/getAllPhone';
const postUrl = 'http://localhost:4002/api/createPhone/';
const deleteUrl = 'http://localhost:4002/api/deletePhone';

const getAllContact = () => {
  const request = axios.get<DataTypeContactProps>(getUrlPhone)
  return request.then(response => response.data)
};

const createPhone = (newObject: any) => {
  const request = axios.post(postUrl, newObject)
  return request.then((response: any) => response.data)
};

const removePhone = (id: number) => {
  const request = axios.delete<DataTypeContactProps>(`${deleteUrl}/${id}`)
  return request.then((response: any) => response.data)
};

const functionPhone = {
	getAllContact,
  createPhone,
  removePhone
};

export default functionPhone;