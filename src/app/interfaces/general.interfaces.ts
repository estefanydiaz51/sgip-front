export interface LoginData {
  email: string,
  password: string
}

export interface RegisterData {
  name: string,
  surname: string,
  email: string,
  password: string
}

export interface Cohort {
  EndDate:string;
  code:string;
  name:string;
  numberStudents:string;
  startDate:string;
  __v:number;
  _id:string;
}