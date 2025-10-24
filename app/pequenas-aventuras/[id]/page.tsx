"use client";

import Link from "next/link";
import { adventures } from "@/data/adventures";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function AdventureDetailPage({ params }: Props) {
  const { id } = await params;
  const adventure = adventures.find(a => a.id === id);

  if (!adventure) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6 border-b border-purple-900/50">
        <Link href="/" className="inline-block group">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all">
            Tormenta
          </h1>
        </Link>
        <div className="flex items-center gap-2 mt-2">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Início
          </Link>
          <span className="text-gray-600">/</span>
          <Link href="/pequenas-aventuras" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
            Pequenas Aventuras
          </Link>
          <span className="text-gray-600">/</span>
          <span className="text-gray-400 text-sm">{adventure.name}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-3xl">
        {/* Imagem */}
        {adventure.image && (
          <div className="mb-8 rounded-xl overflow-hidden border border-purple-900/30">
            <img
              src={adventure.image}
              alt={adventure.name}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {/* Título e Tema */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            {adventure.name}
          </h1>
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase bg-purple-700/50 text-purple-200 border border-purple-500/50">
            {adventure.theme}
          </span>
        </div>

        {/* Resumo */}
        <div className="mb-12 p-6 rounded-xl bg-purple-950/30 border border-purple-900/30">
          <h2 className="text-2xl font-bold text-purple-300 mb-4">Resumo</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {adventure.summary}
          </p>
        </div>

        {/* Conteúdo da Aventura */}
        <div className="prose prose-invert max-w-none">
          {adventure.sections.map((section, index) => {
            if (section.type === "title") {
              return (
                <h2 key={index} className="text-3xl font-bold text-pink-400 mt-8 mb-4">
                  {section.content}
                </h2>
              );
            }

            if (section.type === "subtitle") {
              return (
                <h3 key={index} className="text-2xl font-bold text-purple-300 mt-6 mb-3">
                  {section.content}
                </h3>
              );
            }

            if (section.type === "text") {
              return (
                <p key={index} className="text-gray-300 leading-relaxed mb-4 text-lg">
                  {section.content}
                </p>
              );
            }

            if (section.type === "break") {
              return <div key={index} className="my-6"></div>;
            }

            return null;
          })}
        </div>

        {/* Botão de Voltar */}
        <div className="mt-16 flex gap-4">
          <Link
            href="/pequenas-aventuras"
            className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors"
          >
            ← Voltar para Aventuras
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 p-6 border-t border-purple-900/50 text-center text-gray-500 text-sm">
        <p>Compêndio Tormenta RPG © 2025</p>
      </footer>
    </div>
  );
}