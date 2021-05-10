import React from 'react';
import Link from 'next/link';

import {wrapper, container} from './CategoryGrid.module.css';

function CategoryGrid({categories}) {
  return (
    <section className={wrapper}>
      <ul className={container}>
        {categories.map(category => {
          const {_id, title, slug, description} = category;

          return (
            <li key={_id}> 
              <Link href={`/kategorier/${slug.current}`}>
                <a>
                  <h2>{title}</h2>
                  {description && <p>{description}</p>}
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