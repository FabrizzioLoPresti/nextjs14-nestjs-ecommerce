import { NotFoundException } from '@nestjs/common';
import { Response } from 'express';

export const handleError = (res: Response, error: Error) => {
  if (error instanceof NotFoundException) {
    return res.status(404).json({ error: error.message });
  }

  return res.status(500).json({ error: 'Internal server error' });
};

export const getOrderCriteria = (
  sort: string,
): { [key: string]: 'asc' | 'desc' } | undefined => {
  switch (sort) {
    case 'PriceLowToHigh':
      return { list_price: 'asc' };
    case 'PriceHighToLow':
      return { list_price: 'desc' };
    case 'Newest':
      return { createdAt: 'desc' };
    default:
      return undefined; // No order specified
  }
};
