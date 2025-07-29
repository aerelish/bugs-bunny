import { Request, Response } from 'express';
import prisma  from '@/db/prismaClient';
import getErrorMessage from '@/utils/getErrorMessage';

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
      },
      select: {
        name: true,
        description: true,
        link: true
      }
    })

    res.json(updatedProject)

  } catch (error) {
    console.error(getErrorMessage(error));
    res.status(500).json({ message: 'Internal server error' });  
  }

}