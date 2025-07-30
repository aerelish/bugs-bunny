import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import prisma  from '../../../db/prismaClient';
import handleError from '../../../utils/handleError';

export default async function updateTask(req: Request, res: Response) {

  const { id, projectId } = req.params;

  const {
    title,
    description,
    status,
    tags
  } = req.body;

  try {
    
    const updatedTask = await prisma.task.update({
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

    res.json(updatedTask)

  } catch (error) {
    handleError(error, res);
  }

}