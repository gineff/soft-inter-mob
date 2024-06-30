import { HTTP } from "@/api/http";
import { PostType } from "@/pages/blog/types";
import { VacationsResponse } from "@/pages/vacations/types";

export const fetchTechnologies = async () =>  HTTP.get('technologies.json');
export const fetchVacations = async (): Promise<VacationsResponse> =>  HTTP.get('vacations.json');
export const fetchPosts = async (): Promise<PostType[]> =>  HTTP.get('posts.json');


export const staticAPI = {
  fetchTechnologies,
  fetchVacations,
  fetchPosts
};
