export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export interface Cohort {
  EndDate: string;
  code: string;
  name: string;
  numberStudents: string;
  startDate: string;
  __v: number;
  _id: string;
}

export interface Student {
  _id: string;
  name: string;
  id: string;
  studentCode: string;
  photo: string;
  address: string;
  phone: string;
  gender: string;
  birthDay: string;
  semester: string;
  civilStatus: string;
  ingressDate: string;
  egressDate: string;
  email: string;
  pprograms: string[];
  cohorts: string[];
  __v: number;
}
