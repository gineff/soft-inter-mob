const API_PATH = '/api';

const API_METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
} as const;

type APIMethod = typeof API_METHOD[keyof typeof API_METHOD];

interface RequestOptions extends RequestInit {
  url?: string;
}

export class HTTP {
  static async get<T>(path: string, options?: RequestOptions): Promise<T> {
    return this.#request<T>(path, { ...options, method: API_METHOD.GET });
  }

  static async post<T>(path: string, options?: RequestOptions): Promise<T> {
    return this.#request<T>(path, { ...options, method: API_METHOD.POST });
  }

  static async put<T>(path: string, options?: RequestOptions): Promise<T> {
    return this.#request<T>(path, { ...options, method: API_METHOD.PUT });
  }

  static async patch<T>(path: string, options?: RequestOptions): Promise<T> {
    return this.#request<T>(path, { ...options, method: API_METHOD.PATCH });
  }

  static async delete<T>(path: string, options?: RequestOptions): Promise<T> {
    return this.#request<T>(path, { ...options, method: API_METHOD.DELETE });
  }

  static async #request<T>(path: string, { method, headers, url, ...rest }: RequestOptions & { method: APIMethod }): Promise<T> {
    const baseURL = url ?? `${API_PATH}/${path}`;
    const options: RequestInit = {
      headers: { 'Content-Type': 'application/json', ...headers },
      method,
      ...rest,
    };
    const response = await fetch(baseURL, options);

    if (response.ok) {
      return response.status === 200 ? response.json() as Promise<T> : false as unknown as Promise<T>;
    }

    throw new Error(response.statusText);
  }
}
