export type DataType = {
  id?: any | null;
  date: string;
  hour: string;
  location: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  notice: string;
  editNum: boolean;
};

export type DataTypeProps = {
  datatype: DataType;
};