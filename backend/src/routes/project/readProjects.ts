import { Request, Response } from 'express';
import prisma  from '../../db/prismaClient';
import getErrorMessage from '../../utils/getErrorMessage';

export default async function readProjects(req: Request, res: Response) {

  try {
  
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        link: true,
        createdAt: true,
        updateAt: true
      }
    })

    res.json(projects)

  } catch (error) {
    console.error(getErrorMessage(error));
    res.status(500).json({ message: 'Internal server error' });  
  }
}
