import { Request, Response } from 'express';
import prisma  from '../../db/prismaClient';
import handleError from '../../utils/handleError';

export default async function readProjects(req: Request, res: Response) {

  try {
  
    const projects = await prisma.project.findMany();

    res.json(projects)

  } catch (error) {
    handleError(error, res);
  }
}
