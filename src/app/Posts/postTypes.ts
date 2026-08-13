export type Post = {
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
};

export type PostsResponse = {
  posts: Post[];
  totalPages: number;
  currentPage: number;
};