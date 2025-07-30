import { Request, Response } from 'express';
import prisma  from '../../../db/prismaClient';
import handleError from '../../../utils/handleError';

export default async function readTask(req: Request, res: Response) {

  const { projectId } = req.params;
  
  try {
  
    const tasks = await prisma.task.findMany({
      where: {
        projectId: parseInt(projectId)
      }
    });

    res.json(tasks)

  } catch (error) {
    handleError(error, res);
  }
}
