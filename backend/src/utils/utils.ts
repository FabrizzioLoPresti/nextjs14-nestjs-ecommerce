import { NotFoundException } from '@nestjs/common';
import { Response } from 'express';

export const handleError = (res: Response, error: Error) => {
  if (error instanceof NotFoundException) {
    return res.status(404).json({ error: error.message });
  }

  return res.status(500).json({ error: 'Internal server error' });
};
