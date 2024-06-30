import { HTTP } from "@/api/http";
import { VacationsResponse } from "@/pages/vacations/types";

export const fetchTechnologies = async () =>  HTTP.get('technologies.json');
export const fetchVacations = async (): Promise<VacationsResponse> =>  HTTP.get('vacations.json');


export const staticAPI = {
  fetchTechnologies,
  fetchVacations
};
