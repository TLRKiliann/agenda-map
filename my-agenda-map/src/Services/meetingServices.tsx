import axios from 'axios';
import { DataType } from '../Models/model';

export type DataTypeProps = {
  datatype: DataType[]
}

const getUrl = 'http://localhost:3001/getAllMembers';
//const getUrl = 'http://localhost:4002/api/getAllMembers';
/*const postUrl = 'http://localhost:3001/api/create';
const putUrl = 'http://localhost:3001/api/update';
const deleteUrl = 'http://localhost:3001/api/delete';
*/
const getAll = () => {
  const request = axios.get<DataTypeProps>(getUrl)
  return request.then((response: any) => response.data)
};

/*const getById = (id: number) => {
  const request = axios.get(`${getByIdUrl}/${id}`)
  return request.then((response: any) => response.data)
};*/

/*
const create = (newObject: any) => {
  const request = axios.post(postUrl, newObject)
  return request.then((response: any) => response.data)
};

const update = (id: number, newObject: any) => {
  const request = axios.put(`${putUrl}/${id}`, newObject)
  return request.then((response: any) => response.data)
};

const remove = (id: number) => {
  const request = axios.delete(`${deleteUrl}/${id}`)
  return request.then((response: any) => response.data)
};
*/

const functionToCall = {
  getAll
};

export default functionToCall;
//export default { getAll, create, update, remove };
//export default { getAll, getById, create, update, remove };