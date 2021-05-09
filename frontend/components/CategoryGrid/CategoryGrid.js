import React from 'react';
import Link from 'next/link';

function CategoryGrid({categories}) {
  return (
    <section>
      <ul>
        {categories.map(category => {
          const {_id, title, slug} = category;

          return (
            <li key={_id}> 
              <Link href={`/kategorier/${slug.current}`}>
                <a>{title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default CategoryGrid;