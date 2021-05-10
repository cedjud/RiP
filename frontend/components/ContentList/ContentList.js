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

function ContentList({content}) {
  return (
    <section>
      <ul className={container}>
        {content && Array.isArray(content) && content.map(content => {
          const {_id, _type, description, title, plainTextBody } = content;

          return (
            <li key={_id}> 
              <Link href={getPath(content)}>
                <a>
                  <h3>{title}</h3>
                  {description && <p>{description}</p>}
                  {plainTextBody && <p>{plainTextBody.split(" ").slice(0, 10).join(" ")}...</p>}
                  <span>Les mer</span>
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