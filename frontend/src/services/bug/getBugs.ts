import axios from 'axios';
import { API_URL } from '@/lib/constants';
import { type BugResponse, type Bug } from '@/lib/types';
import handleError from '@/utils/handleError';

export default async function getBugs(projectId: number): Promise<BugResponse> {
  try {
    
    const response = await axios.get<Bug[]>(`${API_URL}/api/project/${projectId}/bug`);
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