"use client";
import SideBar from "@/components/layout/SideBar";
import SpineIcon from "@/components/icon/SpineIcon";
import { motion, AnimatePresence } from "motion/react";
import landingPageDate from "@/features/landing-page/landingPageData";
import LogoName from "@/components/ul/LogoName";
import Button from "@/components/ul/Button";
import iconsFeatures from "@/features/icons/icons";
import { useState } from "react";

export default function LandingPage() {
  const [index, setIndex] = useState(0);
  const { features, hero, socialProof, ctaData } = landingPageDate();
  const { icons } = iconsFeatures();

  function hadleNextCard() {
    if (index === features.length - 1) {
      setIndex(0);
      return;
    }
    setIndex((index) => index + 1);
  }
  function handlePreviousCard() {
    if (index === 0) {
      setIndex(features.length - 1);
      return;
    }
    setIndex((index) => index - 1);
  }

  const Icon = features[index].icon;
  return (
    <section
      id="landing-page"
      className="bg-bg scroll-smooth min-h-screen overflow-hidden"
    >
      <SideBar />
      <section
        className="
          hero flex flex-col 
          min-h-screen pt-32                        
          pb-24 px-10 items-center
          justify-start relative
          overflow-hidden text-center"
      >
        <div className="hero-grid absolute inset-0 pointer-events-none z-0" />
        <div className="hero-glow absolute z-0" />
        <div className="hero-glow-bottom absolute z-0"></div>

        <div className="relative z-10 max-w-225 w-full flex flex-col items-center gap-6">
          <p
            className="hero-eyebrow uppercase font-mono font-medium text-[10px]
                     text-accent inline-flex items-center gap-2 mb-6 opacity-0"
          >
            Sistema de arquivo pessoal
          </p>

          <h1
            className=" font-serif font-light leading-none tracking-[-0.02em] text-text
                        opacity-0 text-[clamp(52px,7vw,88px)] text-center"
          >
            Sua coleção,
            <em className="block text-accent font-light">catalogada.</em>
          </h1>

          <p
            className="hero-sub text-sm text-text-sub leading-7 font-light
                       opacity-0 max-w-140 mx-auto mb-8 font-mono text-center"
          >
            Organize sua biblioteca pessoal com a seriedade que ela merece.
            Cadastre obras, autores e PDFs — e compartilhe com quem quiser.
          </p>
        </div>

        <div className="hero-cta flex items-center justify-center gap-4 mt-2 z-10 relative">
          <Button
            elements={hero}
            className="flex items-center gap-2 p-2 md:py-3 text-xs font-mono uppercase cursor-pointer"
            sizeIcon={15}
          />
        </div>

        <div className="absolute flex bottom-0  items-center justify-center z-0 w-full ">
          <SpineIcon />
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative border-t border-b border-border bg-bg-raised py-5 flex flex-row md:overflow-visible md:items-center md:justify-center gap-1 md:gap-0"
      >
        {socialProof.map((e, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-1 w-50 border-r border-border last:border-r-0 text-center"
          >
            <span className="font-serif text-[20px] md:text-[28px] font-light text-accent leading-none tracking-[0.01em]">
              {e.val}
            </span>
            <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-text-muted">
              {e.label}
            </span>
          </div>
        ))}
      </motion.div>

      <section className="py-25 px-12 max-w-275 mt-0 mx-auto flex flex-col gap-10 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-baseline gap-4 mb-13">
            <p className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-accent">
              Funcionalidades
            </p>
            <span className="block flex-1 h-px bg-border"></span>
            <p className="font-mono text-[9.5px] tracking-widest text-text-muted">
              § 01
            </p>
          </div>

          <div className="max-w-130 mg-[52px]">
            <h2 className="font-serif text-[48px] font-light text-text leading-[1.1] mb-3.5 tracking-[-0.01em]">
              Tudo que uma
              <br />
              <em className="italic text-accent">biblioteca precisa.</em>
            </h2>
            <p className="text-[14px] font-light text-text-sub leading-[1.75]">
              Do cadastro simples à gestão completa de acessos compartilhados —
              o Librarium foi pensado para quem leva a sério o que lê.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hidden md:block ">
            <div className="grid grid-cols-3 gap-1">
              {features.map((e) => (
                <article
                  key={e.title}
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                  }}
                  className="relative overflow-hidden cursor-default px-6.5 pt-7 pb-8 bg-bg-card border border-border 
                            hover:border-border-md transition-all duration-200"
                >
                  <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-text-muted mb-5">
                    {e.num}
                  </p>
                  <div
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
                      backgroundColor: e.bg,
                    }}
                    className="w-12 h-10 flex items-center justify-center mb-5"
                  >
                    <e.icon color={e.color} size={17} strokeWidth={1.7} />
                  </div>
                  <h3 className="font-serif text-[22px] font-normal text-text mb-2.5 leading-[1.2]">
                    {e.title}
                  </h3>
                  <p className="text-[13px] font-light text-text-sub leading-[1.7]">
                    {e.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="block md:hidden">
            <div className="flex items-center">
              <button
                className="cursor-pointer p-1"
                onClick={handlePreviousCard}
              >
                <icons.left size={15} />
              </button>

              <AnimatePresence mode="wait">
                {features[index] && (
                  <motion.article
                    key={features[index].title}
                    initial={{  opacity: 0}}
                    animate={{  opacity: 1}}
                    transition={{duration: 0.3}}
                    style={{clipPath:"polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)"}}
                    className="relative overflow-hidden cursor-default px-4 md:px-6.5 pt-7 pb-8 bg-bg-card border border-border 
                              hover:border-border-md transition-all duration-500"
                  >
                    <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-text-muted mb-5">
                      {features[index].num}
                    </p>
                    <div
                      style={{
                        clipPath:"polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
                        backgroundColor: features[index].bg,
                      }}
                      className="w-12 h-10 flex items-center justify-center mb-5"
                    >
                      <Icon color={features[index].color} size={17} strokeWidth={1.7} />
                      </div>
                        <h3 className="font-serif text-[22px] font-normal text-text mb-2.5 leading-[1.2]">
                          {features[index].title}
                        </h3>
                        <p className="text-[13px] font-light text-text-sub leading-[1.7]">
                          {features[index].desc}
                        </p>
                  </motion.article>
                )}
             </AnimatePresence>
              <button
                className="cursor-pointer p-1"
                onClick={hadleNextCard}
              >
                <icons.arrow size={15} />
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="flex flex-col px-10 text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-text-muted mb-5">
            § 02 · Comece agora
          </p>
          <h2 className="font-serif text-4xl lg:text-[72px] md:text-[6vw] font-light text-text leading-[1.1] tracking-[-0.02em] mb-4.5">
            Seu acervo está
            <br />
            esperando por <em className="italic text-accent">você.</em>
          </h2>

          <p className="text-xs font-light text-text-sub mb-10 leading-[1.7]">
            Crie sua conta em segundos e comece a catalogar sua biblioteca hoje.
          </p>

          <div className="flex items-center justify-center gap-4 relative">
            <Button
              elements={ctaData}
              className="flex items-center gap-2 py-2 px-2  text-[10px] md:text-xs font-mono uppercase cursor-pointer"
              sizeIcon={15}
            />
          </div>
          <p className="font-mono text-[9px] tracking-[0.14em] uppercase text-text-muted mt-4.5">
            Gratuito · Comece em 30 segundos
          </p>
        </motion.div>
      </section>

      <footer className="border-t border-border py-6 px-12 flex items-center justify-between gap-3">
        <LogoName className="text-[14px]" />
        <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-text-muted">
          © 2026 Librarium · Arquivo Pessoal v1.0
        </span>
      </footer>
    </section>
  );
}
