import React from 'react';
import { Headphones } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04131f] px-5 pb-8 pt-14 text-slate-300 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-end">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" aria-label="97plantões, início">
              <span className="grid h-11 w-11 place-items-center border border-cyan-100/20 bg-white p-1.5">
                <img src="./logo.svg" alt="" className="h-full w-full object-contain" />
              </span>
              <span>
                <span className="block text-lg font-extrabold tracking-tight text-white">97<span className="text-cyan-300">plantões</span></span>
                <span className="mt-0.5 block font-mono text-[9px] font-bold tracking-[0.18em] text-slate-500">CENTRAL CLÍNICA</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">Uma rede para médicos encontrarem, ofertarem e confirmarem plantões com mais clareza.</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-sm font-medium md:justify-end">
            <a href="?page=sobre-nos" className="transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">Sobre nós</a>
            <a href="?page=termos-de-uso" className="transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">Termos de uso</a>
            <a href="?page=termos-de-uso#privacidade" className="transition hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">Privacidade</a>
            <a href="?page=suporte" className="inline-flex items-center gap-2 border border-cyan-300/50 px-4 py-2.5 text-cyan-200 transition hover:border-cyan-200 hover:bg-cyan-300/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
              <Headphones size={16} />
              Suporte
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[0.09em] text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SANT-E Tecnologia em Saúde LTDA · CNPJ 63.478.081/0001-50</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
