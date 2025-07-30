import { Response } from "express";
import { Prisma } from "@prisma/client";

import {
  handlePrismaClientKnownRequestError,
  handlePrismaClientInitializationError,
  handlePrismaClientUnknownRequestError,
  handlePrismaClientRustPanicError,
  handlePrismaClientValidationError
}from "./handleErrorPrisma";

/**
 * @param error
 * @returns Response : error response
 * @description handle common errors
 */
export default function handleError(error: unknown, res: Response): Response {

  /** 
   * *handle prisma related errors
  */ 
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return handlePrismaClientKnownRequestError(error, res)
  }

  if (error instanceof Prisma.PrismaClientInitializationError) {
    return handlePrismaClientInitializationError(error, res)
  }

  if (error instanceof Prisma.PrismaClientInitializationError) {
    return handlePrismaClientUnknownRequestError(error, res)
  }

  if (error instanceof Prisma.PrismaClientInitializationError) {
    return handlePrismaClientRustPanicError(error, res)
  }

  if (error instanceof Prisma.PrismaClientInitializationError) {
    return handlePrismaClientValidationError(error, res)
  }

  /** 
   * *for all other errors
  */ 
  console.error(`Error Type:${typeof Error}\nMessage: ${getErrorMessage(error)}`);
  return res.status(500).json({ message: 'Internal server error...' });  

}

function getErrorMessage(error: unknown): string {

  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) { 
    message = String(error.message);
  } else {
    message = "Something went wrong..."
  }

  return message;

};