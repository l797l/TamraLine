import api from "../axios";
import { redis } from "../redis/redis";
import { GetProfileDto } from "./postDto";

export async function postApi(page: number) {
  const response = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ page }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch posts: ${response.status}`);
  }

  const data = await response.json();

  return data;
}

export async function getProfile(id:string): Promise<GetProfileDto> {
  const response = await api.get(`Post/GetProfile/${id}`);

  return response.data;
}

export async function createPost(
  formFile: File,
  universityId: number,
  governorateId: number,
  areas: number[],
  nameCar: string,
  shift: number,
  desciption: string
) {
  const formData = new FormData();

  formData.append("formFile", formFile);
  formData.append("UniversityId", universityId.toString());
  formData.append("GovernorateId", governorateId.toString());

  areas.forEach((areaId, index) => {
    formData.append(
      `Area[${index}]`,
      areaId.toString()
    );
  });

  formData.append("NameCar", nameCar);
  formData.append("Shift", shift.toString());
  formData.append("Desciption", desciption);

  const response = await api.post(
    "Post/CreatePost",
    formData
  );

  return response.data;
}


export async function updatePostImage(
  formFile: File
) {
  const formData = new FormData();

  formData.append("Image", formFile);

  const response = await api.patch(
    `Post/UpdateImage`,
    formData
  );

  return response.data;
}


export async function updatePost(
  nameCar: string,
  desciption: string,
  universityId: number,
  governorateId: number,
  areas: number[],
  shift: number
) {
  const data = {
    nameCar,
    desciption,
    universityId,
    governorateId,
    area: areas,
    shift,
  };

  const response = await api.put("Post/UpdatePost", data);

  return response.data;
}
export async function PostFilter(
  pageNumber: number,
  pageSize: number,
  area: number,
  universityId: number,
  governorateId: number,
  shift: number,
  gender: number

) {
  const result = await api.post("Post/GetFillteredPost", {
    pageNumber,
    pageSize,
    area,
    universityId,
    governorateId,
    shift,
    gender,
  });

  return result.data;
}

export const ChangeArchive= async()=>{
   const result = await api.post("Post/ChangeArchive") 
   return result.status
}