import { btoa } from "buffer";

type ApiResponse = {
  data?: string;
  message?: string;
  status?: string;
};

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

export async function callApi<T>(
  endpoint: string,
  method: HttpMethod,
  body?: string
) {
  const credentials = btoa(
    `${process.env.FINTECH_API_USER}:${process.env.FINTECH_API_PASSWORD}`
  );

  const options = {
    method,
    headers: {
      Authorization: "Basic " + credentials,
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  } as RequestInit;

  if (body) {
    options.body = body;
  }

  const response = await fetch(
    `${process.env.FINTECH_API_URL}/${endpoint}`,
    options
  );

  if (response.status === 200 || response.status === 201) {
    const result = (await response.json()) as ApiResponse;
    return result.data as T;
  } else {
    console.log(await response.text());
  }

  return null;
}
