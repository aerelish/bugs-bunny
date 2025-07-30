import { Request, Response } from 'express';
import prisma  from '../../db/prismaClient';
import handleError from '../../utils/handleError';

export default async function updateProject(req: Request, res: Response) {

  const { id } = req.params;
  const {
    name,
    description,
    link
  } = req.body;

  try {
    
    const updatedProject = await prisma.project.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name,
        description,
        link
      }
    })

    res.json(updatedProject)

  } catch (error) {
    handleError(error, res);
  }

}