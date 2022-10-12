//import axios from 'axios';
import { app } from '../api/axiosconfig';
import { DataTypeContact } from '../Models/contactModel';

type DataTypeContactProps = {
  datatype: DataTypeContact[]
};

const getUrlPhone = '/api/getAllPhone/';
//const postUrl = 'http://localhost:3001/getAllPhone';
const postUrl = '/api/createPhone/';
const deleteUrl = '/api/deletePhone';

const getAllContact = async () => {
  const request = app.get<DataTypeContactProps>(getUrlPhone)
  return await request.then(response => response.data)
};

const createPhone = async (newObject: any) => {
  const request = app.post<any>(postUrl, newObject)
  return await request.then((response: any) => response.data)
};

const removePhone = async (id: number) => {
  const request = app.delete(`${deleteUrl}/${id}`)
  return await request.then((response: any) => response.data)
};

const functionPhone = {
	getAllContact,
  createPhone,
  removePhone
};

export default functionPhone;