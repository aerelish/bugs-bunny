import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import prisma  from '../../../db/prismaClient';
import handleError from '../../../utils/handleError';

export default async function createTask(req: Request, res: Response) {

  const { projectId } = req.params;

  const {
    title,
    description,
    status,
    tags
  } = req.body;

  try {
    
    const task = await prisma.task.create({
      data: {
        projectId: parseInt(projectId),
        title,
        description,
        status,
        tags
      }
    })

    res.json(task)

  } catch (error) {
    handleError(error, res);
  }

}