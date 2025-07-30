import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import prisma  from '../../../db/prismaClient';
import handleError from '../../../utils/handleError';

export default async function updateBug(req: Request, res: Response) {

  const { id, projectId } = req.params;

  const {
    title,
    description,
    status,
    tags
  } = req.body;

  try {
    
    const updatedBug = await prisma.bug.update({
      where: {
        id: parseInt(id),
        projectId: parseInt(projectId)
      },
      data: {
        title,
        description,
        status,
        tags
      }
    })

    res.json(updatedBug)

  } catch (error) {
    handleError(error, res);
  }

}