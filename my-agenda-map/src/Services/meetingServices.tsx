import axios from 'axios';
import { DataType } from '../Models/model';

type DataTypeProps = {
  datatype: DataType[]
}

//const getUrl = 'http://localhost:4002/api/getAllMembers';
const getUrl = 'http://localhost:3001/getAllMembers';
//const postUrl = 'http://localhost:4002/api/create';
const postUrl = 'http://localhost:3001/getAllMembers';
//const putUrl = 'http://localhost:4002/api/update';
const putUrl = 'http://localhost:3001/getAllMembers';
//const deleteUrl = 'http://localhost:4002/api/delete';
const deleteUrl = 'http://localhost:3001/getAllMembers';

const getAll = () => {
  const request = axios.get<DataTypeProps>(getUrl)
  return request.then((response: any) => response.data)
};

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

const functionToCall = {
  getAll, create, update, remove
};

export default functionToCall;