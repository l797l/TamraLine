
type PostStatus = 0 | 1 | 2 | 3;

export interface AdminPost {
  urlImagePost: string;
  nameCar: string;
  area: string[];
  status: PostStatus;
  university: string;
  governorate: string;
  desciption: string;
  shift: number;
  phoneNumber: string;
  fullName: string;
}