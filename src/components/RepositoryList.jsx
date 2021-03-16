import { useState, useEffect } from "react";

import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

const repository = {
  name: "01-github-explorer",
  description: "Uma aplicação para listar repositório do Github",
  link: "https://github.com/emersonfnascimento/01-github-explorer",
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/emersonfnascimento/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
}
