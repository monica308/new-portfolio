'use client'

import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"
import { useEffect, useState } from 'react'

import Image from 'next/image'

interface Repo {
    id: number
    name: string
    description: string | null
    html_url: string
    homepage: string | null
    fork: boolean
}

const projetosDesejados = ['airbnb', 'projeto-dragoes', 'projeto-cordel', 'controle-gastos-residencial']

export default function ProjetosFiltrados() {
    const [repos, setRepos] = useState<Repo[]>([])
    const [imgError, setImgError] = useState<Record<number, boolean>>({})

    useEffect(() => {
        fetch('https://api.github.com/users/monica308/repos')
            .then((res) => res.json())
            .then((data: Repo[]) => {
                const filtrados = data.filter(
                    (repo) =>
                        projetosDesejados.includes(repo.name.toLowerCase()) && !repo.fork
                )
                setRepos(filtrados)
            })
    }, [])

    return (
        <section className="max-w-7xl mx-auto w-full p-4 md:p-10">
            <div className="mb-12">
                <h2 className="text-4xl font-bold tracking-tighter text-[#ededed]">Meus Projetos</h2>
                <p className="text-gray-400 mt-2">Repositórios filtrados diretamente do GitHub.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {repos.map((repo) => (
                    <div
                        key={repo.id}
                        className="bg-[#111111] border border-[#1f1f1f] rounded-[2rem] overflow-hidden group hover:border-blue-500/50 transition-all duration-300 flex flex-col"
                    >
                        <div className="relative h-64 w-full overflow-hidden bg-[#1a1a1a]">
                            <Image
                                src={imgError[repo.id] ? "/img/placeholder.jpeg" : `/img/${repo.name}.jpeg`}
                                alt={`Screenshot do projeto ${repo.name}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                onError={() => setImgError(prev => ({ ...prev, [repo.id]: true }))}
                            />
                        </div>

                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold capitalize text-[#ededed]">
                                    {repo.name.replace(/-/g, ' ')}
                                </h3>
                                <div className="flex gap-3">
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <IconBrandGithub size={22} />
                                    </a>
                                    {repo.homepage && (
                                        <a
                                            href={repo.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <IconExternalLink size={22} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                {repo.description || 'Desenvolvimento full-stack com foco em performance e usabilidade.'}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-[#1a1a1a] border border-[#2a2a2a] text-gray-400 rounded-md">
                                    {repo.name.includes('controle') || repo.name.includes('residencia') ? 'C# / .NET 8' : 'React / Next.js'}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}