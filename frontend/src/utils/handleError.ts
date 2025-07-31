import axios, { type AxiosError } from 'axios';
import { type ProjectResponse } from '@/lib/types';

export default function handleError(error: unknown): ProjectResponse {

    if (axios.isAxiosError(error)) {
      
      // handle Axios error
      const err = error as AxiosError;
      return {
        success: false,
        error: err.message
      };

    } 
      
    // for all other errors
    return {
      success: false,
      error: getErrorMessage(error)
    };
  
}

function getErrorMessage(error: unknown): string {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else {
    message = "Something went wrong...";
  }

  return message;
}