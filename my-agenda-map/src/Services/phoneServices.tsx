import axios from 'axios';
import { DataType } from '../Models/model';

type DataTypeProps = {
  datatype: DataType[]
};

const postUrl = 'http://localhost:3001/getAllPhone';
//const postUrl = 'http://localhost:4001/api/getAllPhone/';

const create = (newObject: any) => {
  const request = axios.post<DataTypeProps>(postUrl, newObject)
  return request.then((response: any) => response.data)
};

const functionPhone = {
	create
};

export default functionPhone;