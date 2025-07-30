import { Request, Response } from 'express';
import prisma  from '../../db/prismaClient';
import handleError from '../../utils/handleError';

export default async function createProject(req: Request, res: Response) {

  const {
    name,
    description,
    link
  } = req.body;

  try {
    
    const project = await prisma.project.create({
      data: {
        name,
        description,
        link
      }
    })

    res.json(project)

  } catch (error) {
    handleError(error, res);
  }

}