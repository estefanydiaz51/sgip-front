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
  __v: number;
}

export interface Program {
  cohorts?:string[];
  dateRegistration:string;
  description:string;
  email:string;
  id:string;
  logo:string;
  name:string;
  numberResolutionOfQualifiedRegistration:string;
  researchLines:string;
  resolutionFile:string;
  teachers?:string[];
  __v?:number;
  _id?:string;
}

export interface Teacher {
  name: string;
  idCard: string;
  address: string;
  phone: string;
  gender: string;
  email: string;
  birthDay: string;
  academicTraining: string;
  knowledgeAreas: string[];
  _id: string;
  __v: number;
}
