import { Request, Response } from 'express';
import prisma  from '../../../db/prismaClient';
import handleError from '../../../utils/handleError';

export default async function readBug(req: Request, res: Response) {

  const { projectId } = req.params;

  try {
  
    const bugs = await prisma.bug.findMany({
      where: {
        projectId: parseInt(projectId)
      }
    });

    res.json(bugs)

  } catch (error) {
    handleError(error, res);
  }
}
