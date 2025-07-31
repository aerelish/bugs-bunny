/**
 * * for API related types
 */

type APIResponse = {
  success: boolean
  status?: number
  error?: string
};

export type ProjectResponse = APIResponse & {
  data?: Project[]
};

/**
 * * for Schema
 */

export type Project = {
  id: number
  name: string
  description?: string
  link?: string
  createdAt: string
  updatedAt: string
};