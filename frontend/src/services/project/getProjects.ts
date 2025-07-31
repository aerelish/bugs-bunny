import axios from 'axios';
import { API_URL } from '@/lib/constants';
import { type ProjectResponse, type Project } from '@/lib/types';
import handleError from '@/utils/handleError';

export default async function getProjects(): Promise<ProjectResponse> {
  try {
    
    const response = await axios.get<Project[]>(`${API_URL}/api/project`);
    return {
      success: true,
      data: response.data
    }
  
  } catch (error: unknown) {

    /**
     * @param error
     * @returns object of type ProjectResponse
     */
    return handleError(error);

  };
  
};