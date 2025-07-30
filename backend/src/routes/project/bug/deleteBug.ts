import { Request, Response } from 'express';
import prisma  from '../../../db/prismaClient';
import handleError from '../../../utils/handleError';

export default async function deleteBug(req: Request, res: Response) {

  const { id, projectId } = req.params;

  try {
    
    await prisma.bug.delete({
      where: { 
        id: parseInt(id),
        projectId: parseInt(projectId)
      },
    })
    
    res.json({ success: true, message: 'Deleted successfully...' })

  } catch (error) {
    handleError(error, res);
  }

}