import axios from "axios";

export const useApi = () => {
  return {

    async fetcher(method: 'GET' | 'POST' | 'PUT' | 'DELETE', endpoint: string, body?: any) {
      const axiosPromise = axios({
        method,
        url: endpoint,
        data: body,
        headers: {
          "Authorization": "Basic Y2tleV81ZGM5YjA3YWVlMTg0NjgyOGE1NWFiMzUwMzA6"
        }
      });

      axiosPromise.catch((data: any) => {
        const { error } = data.response.data;
        if (error) {
          const errorMessage = Array.isArray(error) && error.length > 0 ? error[0].Detail : error;
        }
        return false;
      });

      const response = await axiosPromise;

      return response.data;
    },

  }

};