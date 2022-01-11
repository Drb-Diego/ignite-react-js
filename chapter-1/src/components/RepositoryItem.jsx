import React from "react";

function RepositoryItem({ repositories }) {


  return (
    <>
      {
        repositories && repositories.map(repository => (
          <li key={repository.id}>
            <strong>{ repository.name }</strong>
            <p>{repository.description ?? 'Default description'}</p>
            <a href={repository.html_url} target="_blank">
              Acessar repositorio
            </a>
          </li>
        ))
      }
    </>
  );
}

export default RepositoryItem;