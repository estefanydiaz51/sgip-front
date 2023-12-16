export interface UserData {
  _id: string;
  name: string;
  surname: string;
  role: string;
  email: string;
  programs: Program[];
  createdAt: string;
}
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
  __v?: number;
  _id?: string;
  teachers?: string[];
  cohortId?: string;
}

export interface Student {
  _id?: string;
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
  __v?: number;
  cohortId?: string;
  cohort?: string;
  programId?: string;
}

export interface Program {
  cohortId?: string[];
  dateRegistration: string;
  description: string;
  email: string;
  id?: string;
  logo: string;
  name: string;
  numberResolutionOfQualifiedRegistration: string;
  researchLines: string;
  resolutionFile: string;
  teachers?: string[];
  __v?: number;
  _id?: string;
  programId?: string;
  cohorts?: string[];
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
  _id?: string;
  __v?: number;
  teacherId?: string;
}
export interface Coordinator {
  _id: string[];
  name: string[];
  idCard: string[];
  address: string[];
  phone: string[];
  gender: string[];
  email: string[];
  birthDay: string[];
  academicTraining: string[];
  knowledgeAreas: string[];
  __v: 0;
}
