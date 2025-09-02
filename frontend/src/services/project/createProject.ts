import axios from 'axios';
import { API_URL } from '@/lib/constants';
import { type APIResponse, type Project } from '@/lib/types';
import handleError from '@/utils/handleError';

type ProjectResponse = APIResponse & {
  data?: Project
}

export default async function createProject(data: Project): Promise<ProjectResponse> {
  
  const { name, description, link } = data;
  
  try {
  
    const response = await axios.post<Project>(`${API_URL}/api/project`, 
      { 
        name, 
        description, 
        link
      },
    );

    return {
      success: true,
      data: response.data
    }
  
  } catch (error: unknown) {

    /**
     * @param error
     * @returns object of type ErrorResponse
     */
    return handleError(error);

  };
  
};