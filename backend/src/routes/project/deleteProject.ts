import { Request, Response } from 'express';
import prisma  from '@/db/prismaClient';
import getErrorMessage from '@/utils/getErrorMessage';

export default async function deleteProject(req: Request, res: Response) {

  const { id } = req.params;

  try {
    
    await prisma.project.delete({where: { id: parseInt(id) },})
    
    res.json({ success: true, message: 'Deleted successfully...' })

  } catch (error) {
    console.error(getErrorMessage(error));
    res.status(500).json({ message: 'Internal server error' });  
  }

}