import axios from "axios";

//es como un metodo abstracto
export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokeApiFetch implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const res = await fetch(url);
    const data: T = await res.json();
    return data;
  }
}

export class PokeApiAdapter implements HttpAdapter{
  private readonly axios = axios;
   async get<T>(url: string): Promise<T> {
    const {data} = await this.axios.get<T>(url);
    return data;
  }
}

