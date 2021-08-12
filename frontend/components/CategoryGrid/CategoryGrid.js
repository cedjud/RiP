import React from 'react';
import Link from 'next/link';

function CategoryGrid({categories, heading, classNames}) {
  return (
    <section className={`${classNames} py-4 mt-4`}>
      {heading && <h3 className={`text-xl mb-4`}>{heading}</h3>}
      <ul className={`grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-8 sm:gap-x-8`}>
        {categories.map(category => {
          if (!category || !category._id ) {
            return null;
          }

          return (
            <li key={category?._id} className={`bg-red-900 hover:bg-red-800 rounded-lg `}> 
              <Link href={`/kategorier/${category?.slug?.current}`}>
                <a className={`px-4 py-6 flex flex-col justify-center text-white h-full`}>
                  <h2 className={`text-2xl md:text-3xl text-center`}>{category?.title}</h2>
                  {category?.description && <p className={`text-sm text-center mt-2`}>{category?.description}</p>}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default CategoryGrid;