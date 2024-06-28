import { HTTP } from "@/api/http";

export const fetchTechnologies = async () =>  HTTP.get('technologies.json');


export const staticAPI = {
  fetchTechnologies
};
