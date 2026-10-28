"use client";

import { ArrowLeft, Search } from "lucide-react";
import { useState } from "react";

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");

  return (
    <div className="fixed inset-0 z-100 flex flex-col">

      {/* Topbar com input */}
      <div className="bg-white border-b border-border-subtle flex items-center gap-md px-gutter py-md">
        <button
          onClick={onClose}
          className="p-1 hover:bg-surface-container rounded-full transition-colors shrink-0"
        >
          <ArrowLeft className="text-on-surface" size={24} />
        </button>
        <div className="flex-1 flex items-center gap-sm bg-surface-container border border-border-subtle rounded px-sm py-2">
          <Search className="text-on-surface-variant shrink-0" size={18} />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-base text-on-surface placeholder:text-on-surface-variant"
            placeholder="Buscar peças, modelos ou categorias..."
            type="text"
          />
        </div>
      </div>

      {/* Fundo escurecido */}
      <div
        className="flex-1 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
    </div>
  );
}