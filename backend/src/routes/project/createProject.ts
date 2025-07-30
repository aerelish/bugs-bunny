import { Request, Response } from 'express';
import prisma  from '../../db/prismaClient';
import getErrorMessage from '../../utils/getErrorMessage';

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
      },
      select: {
        name: true,
        description: true,
        link: true
      }
    })

    res.json(project)

  } catch (error) {
    console.error(getErrorMessage(error));
    res.status(500).json({ message: 'Internal server error' });  
  }

}