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

export type BugResponse = APIResponse & {
  data?: Bug[]
}

/**
 * * for Schema
 */

export type Project = {
  id: number
  name: string
  description?: string
  link?: string
  createdAt: Date
  updatedAt: Date
};

export type Bug = {
  id: number
  title: string
  description?: string
  status: string
  tag: Tag[]
  createdAt: Date
  updatedAt: Date
}

export type Task = {
  id: number
  title: string
  description?: string
  status: string
  tag: Tag[]
  createdAt: Date
  updatedAt: Date
}

export type Tag = {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}