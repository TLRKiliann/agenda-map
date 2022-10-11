//import axios from 'axios';
import { app } from '../api/axiosconfig';
import { DataType } from '../Models/model';

type DataTypeProps = {
  datatype: DataType[]
}

const getUrl = '/getAllMembers';
//const getUrl = 'http://localhost:3001/getAllMembers';
const postUrl = '/create';
//const postUrl = 'http://localhost:3001/getAllMembers';
const putUrl = '/update';
//const putUrl = 'http://localhost:3001/getAllMembers';
const deleteUrl = '/delete';
//const deleteUrl = 'http://localhost:3001/getAllMembers';

const getAll = async () => {
  const request = app.get<DataTypeProps>(getUrl)
  return await request.then((response: any) => response.data)
};

const create = async (newObject: any) => {
  const request = app.post(postUrl, newObject)
  return await request.then((response: any) => response.data)
};

const updateNum = (id: number, newObject: any) => {
  const request = app.put(`${putUrl}/${id}`, newObject)
  return request.then((response: any) => response.data)
};

/*const updateName = async (id: number, newObject: any) => {
  const request = app.put(`${putUrl}/${id}`, newObject)
  return await request.then((response: any) => response.data)
};*/

const remove = (id: number) => {
  const request = app.delete(`${deleteUrl}/${id}`)
  return request.then((response: any) => response.data)
};

const functionToCall = {
  getAll, create, updateNum, remove
};

export default functionToCall;