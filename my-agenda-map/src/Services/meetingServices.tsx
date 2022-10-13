//import axios from 'axios';
import { app } from '../api/axiosconfig';
import { DataType } from '../Models/model';

type DataTypeProps = {
  datatype: DataType[]
}

//console.log("app", app)

const getUrl = '/api/getAllMembers';
//const getUrl = 'http://localhost:3001/getAllMembers';
const postUrl = '/api/create';
//const postUrl = 'http://localhost:3001/getAllMembers';
const putUrl = '/api/update/num';
const putSaveUrl = '/api/update/pnum';
const putNameUrl = '/api/update/name';
const putSaveNameUrl = '/api/update/pname';
//const putUrl = 'http://localhost:3001/getAllMembers';
const deleteUrl = '/api/delete';
//const deleteUrl = 'http://localhost:3001/getAllMembers';
//const URL_API = 'http://localhost:5000';

const getAll = async () => {
  const request = app.get<DataTypeProps>(getUrl)
  return await request.then((response: any) => response.data)
};

const create = async (formData: any) => {
  const request = app.post<any>(postUrl, formData)
  return await request.then((response: any) => response.data)
};


const updateNum = async (id: number, formData: any) => {
  //console.log("formData: ", formData)
  const request = app.put(`${putUrl}/${id}`, formData)
  //console.log("[+] request", request)
  return request.then<any>((response: any) => response.data)
};


const updatePostNum = async (id: number, formData: any) => {
  const request = app.put(`${putSaveUrl}/${id}`, formData)
  return await request.then((response: any) => response.data)
};

const updateName = async (id: number, formData: any) => {
  console.log(formData)
  const request = app.put(`${putNameUrl}/${id}`, formData)
  console.log(request)
  return await request.then((response: any) => response.data)
};

const updatePostName = async (id: number, formData: any) => {
  const request = app.put(`${putSaveNameUrl}/${id}`, formData)
  return await request.then((response: any) => response.data)
};

const remove = async (id: number) => {
  const request = app.delete(`${deleteUrl}/${id}`)
  return await request.then((response: any) => response.data)
};

const functionToCall = {
  getAll,
  create,
  updateNum,
  updatePostNum,
  updateName,
  updatePostName,
  remove
};

export default functionToCall;

/*
const updateNum = async (id: number, formData: any) => {
  //console.log("formData: ", formData)
  const request = app.put<any>(`${putUrl}/${id}`, formData)
  //console.log("[+] request", request)
  return request.then((response: any) => response.data)
};
*/