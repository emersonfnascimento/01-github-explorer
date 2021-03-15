import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "01-github-explorer",
  description: "Uma aplicação para listar repositório do Github",
  link: "https://github.com/emersonfnascimento/01-github-explorer",
};

export function RepositoryList() {
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
