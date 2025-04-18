'use client';
import { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  fork: boolean;
  updated_at: string;
}

const projetosDesejados = ['airbnb', 'projeto-dragoes', 'projeto-cordel'];

export default function ProjetosFiltrados () {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/monica308/repos')
      .then((res) => res.json())
      .then((data: Repo[]) => {
        const filtrados = data.filter(
          (repo) =>
            projetosDesejados.includes(repo.name.toLowerCase()) && !repo.fork
        );
        setRepos(filtrados);
      });
  }, []);

  return (
    <section className="px-4 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center"> Meus Projetos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center border hover:shadow-xl transition"
          >
            <img
              src={`/img/${repo.name}.jpeg`}
              alt={`Imagem do projeto ${repo.name}`}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 capitalize">{repo.name.replace(/-/g, ' ')}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {repo.description || 'Projeto sem descrição.'}
            </p>
            <div className="flex gap-4">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border text-sm hover:bg-gray-100"
              >
                GitHub
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border text-sm hover:bg-gray-100"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
