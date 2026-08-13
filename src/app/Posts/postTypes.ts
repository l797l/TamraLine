export type Post = {
  userId: number;
  urlImagePost: string;
  nameCar: string;
  area: string[];
  status: number;
  university: string;
  governorate: string;
  desciption: string;
  shift: number;
  phoneNumber: string;
  fullName: string;
  gender: number;

};

export type PostsResponse = {
  posts: Post[];
  totalPages: number;
  currentPage: number;
};