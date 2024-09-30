import { Fetch } from "@/custom-fetch/fetch";
import { FetchRequest } from "@/custom-fetch/interface";

export const fetchHttp = new Fetch({
  baseURL: "https://jsonplaceholder.typicode.com",
});

fetchHttp.setHeaders({
  Authorization: "Bearer <your_token>",
  "Content-Type": "application/json",
});

fetchHttp.addMiddleware((request: FetchRequest) => {
  console.log("request => ", request);

  return request;
});

export async function getTodo(id: number) {
  const response = await fetchHttp.get(`/todos/${id}`);

  console.log("response", response);
}
