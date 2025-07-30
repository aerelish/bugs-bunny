import { Prisma } from '@prisma/client';
import { Response } from 'express';

// ! WHEN NEW ERROR ENCOUNTERED ADD IN HERE

/**
 * * all functions should follow the ff. format
 * @param error
 * @returns string | unknown : error_message | error object
 * @description handles prisma related errors
 */

// * for PrismaClientKnownRequestError
export function handlePrismaClientKnownRequestError(error: Prisma.PrismaClientKnownRequestError, res: Response): Response {
  
  switch (error.code) {
    case 'P2003':
      return res.status(400).json({ message: "Foreign key constraint failed." });
    
    case 'P2025':
      return res.status(400).json({ message: "An operation failed because it depends on one or more records that were required but not found."});

    default:
      console.error(`Error Code: ${error.code}\nMessage:` + error.message)
      return res.status(500).json({ message: 'Oops! Undocumented prisma error...' });
  };

};


// * for PrismaClientInitializationError
export function handlePrismaClientInitializationError(error: Prisma.PrismaClientInitializationError, res: Response): Response {
  
  switch (error.errorCode) {

    default:
      console.error(`Error Code: ${error.errorCode}\nMessage:` + error.message)
      return res.status(500).json({ message: 'Oops! Undocumented prisma error...' });
      
  };

};


// * for PrismaClientUnknownRequestError
export function handlePrismaClientUnknownRequestError(error: Prisma.PrismaClientUnknownRequestError, res: Response): Response {
  
  console.error(`PrismaClientUnknownRequestError\nMessage:` + error.message)
  return res.status(500).json({ message: 'PrismaClientUnknownRequestError: Internal Server error...' });

};


// * for PrismaClientRustPanicError
export function handlePrismaClientRustPanicError(error: Prisma.PrismaClientRustPanicError, res: Response): Response {
  
  console.error(`PrismaClientUnknownRequestError\nMessage:` + error.message)
  return res.status(500).json({ message: 'PrismaClientRustPanicError: Internal server error...' });

};

// * for PrismaClientValidationError
export function handlePrismaClientValidationError(error: Prisma.PrismaClientValidationError, res: Response): Response {

  console.error(`PrismaClientValidationError\nMessage:` + error.message)
  return res.status(500).json({ message: 'PrismaClientValidationError: Validation Failed' });

};