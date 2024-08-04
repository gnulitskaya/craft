'use client'
import React, { use } from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';
import useIntersection from 'react-use/lib/useIntersection';
import { useCategoryStore } from '@/store/category';

interface Props {
  title: string;
  items: any[];
  className?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, className, categoryId }) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4
  });
  React.useEffect(() => {
    if(intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title])
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((item, i) => (
          <ProductCard 
          id={item.id} 
          name={item.name} 
          description={item.description}
          price={item.price} 
          imageUrl={item.imageUrl}>

          </ProductCard>
        ))}
      </div>
    </div>
  );
};
