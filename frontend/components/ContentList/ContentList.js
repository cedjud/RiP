import React from 'react';
import PropTypes from 'prop-types';

import { wrapper, container } from './ContentList.module.css';

import Link from 'next/link';

const getPath = (content) => {
  if (typeof content !== "object" || typeof content._type !== "string") {
    return null
  }

  if (content._type === "article") {
    return `/artikler/${content.slug.current}`
  }

  if (content._type === "category") {
    return `/kategorier/${content.slug.current}`
  }

  return null;
}

function ContentList({content, heading}) {
  return (
    <section>
      {heading && <h3 className={`text-xl mt-8`}>{heading}</h3>}
      <ul className={container}>
        {content && Array.isArray(content) && content.map(content => {
          const {_id, _type, description, title, plainTextBody } = content;

          return (
            <li key={_id} className={`py-4`}> 
              <Link href={getPath(content)}>
                <a className={`pb-2 group block border-b`}>
                  <h3 className={`text-2xl mb-2 mt-4 `}>- {title}</h3>
                  {description && <p className={`mb-2`}>{description}</p>}
                  {plainTextBody && <p className={`mb-2`}>{plainTextBody.split(" ").slice(0, 20).join(" ")}...</p>}
                  <span className={`underline group-hover:no-underline`}>Les mer</span>
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

ContentList.propTypes = {
  content: PropTypes.array,
}

ContentList.defaultProps = {
  content: []
}

export default ContentList;