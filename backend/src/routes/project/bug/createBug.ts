import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import prisma  from '../../../db/prismaClient';
import handleError from '../../../utils/handleError';

export default async function createBug(req: Request, res: Response) {

  const { projectId } = req.params;

  const {
    title,
    description,
    status,
    tags
  } = req.body;

  try {
    
    const bug = await prisma.bug.create({
      data: {
        projectId: parseInt(projectId),
        title,
        description,
        status,
        tags
      }
    })

    res.json(bug)

  } catch (error) {
    handleError(error, res);
  }

}