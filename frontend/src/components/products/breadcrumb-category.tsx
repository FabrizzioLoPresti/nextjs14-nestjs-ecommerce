'use client';

import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import { CategoryType } from '@/types/types';

type Props = {
  category: CategoryType;
};

const BreadcrumbCategory = ({ category }: Props) => {
  return (
    <Breadcrumbs isDisabled>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Products</BreadcrumbItem>
      <BreadcrumbItem>{category.name}</BreadcrumbItem>
    </Breadcrumbs>
  );
};

export default BreadcrumbCategory;
