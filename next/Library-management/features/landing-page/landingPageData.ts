import {LucideIcon} from "lucide-react";
import iconsFeatures from "@/features/icons/icons";
import { element } from "@/components/ul/Button";

export type Feature = {
  num: string;
  cls: string;
  color: string;
  bg: string;
  border: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function landingPageDate() {

  const {icons} = iconsFeatures()
  
  const hero: element[] = [
    {
      label: "Criar meu arquivo",
      specificCss: `text-[10px] md:text-xs bg-accent relative overflow-hidden
                    text-bg border-none
                    shadow-[0_4px_32px_rgba(212,168,83,0.2)]
                    md:px-7 transition-all duration-200
                    hover:bg-accent-hover`,
      IconBehind: icons.book
    },
    {
      label: "Ver o sistema",
      specificCss: `text-[10px] md:text-xs bg-transparent text-text-sub
                    border border-border-md
                    md:px-6 tracking-[0.14em]
                    transition duration-200
                    hover:border-accent hover:text-accent`,
      IconFront: icons.arrow
    },
  ];

  const socialProof = [
    { val: "∞", label: "Obras suportadas" },
    { val: "PDF", label: "Leitor integrado" },
    { val: "01", label: "Biblioteca por conta" },
    { val: "100%", label: "Gratuito" },
  ];

  const features: Feature[] = [
    {
        num:"F-01", 
        cls:"c1",
        color: "#D4A853",
        bg: "rgba(212,168,83,0.07)",
        border: "rgba(212,168,83,0.28)",
        icon: icons.book,
        title: "Catalogação Completa",
        desc: "Registre obras com título, autor, categoria, ano e descrição. Sua biblioteca organizada como um acervo de verdade.",
    },
    {
        num:"F-02", 
        cls:"c2",
        color: "#7A9E87",
        bg: "rgba(122,158,135,0.1)",
        border: "rgba(122,158,135,0.28)",
        icon: icons.pdf,
        title: "PDF Integrado",
        desc: "Anexe documentos PDF a cada obra. Visualize diretamente no sistema ou baixe quando precisar — tudo no mesmo lugar.",
    },
    {
        num:"F-03", cls:"c3",
        color: "#7A90AD",
        bg: "rgba(122,144,173,0.1)",
        border: "rgba(122,144,173,0.28)",
        icon: icons.share,
        title: "Compartilhamento",
        desc: "Gere um link de convite e compartilhe sua biblioteca. Controle quem pode ler e quem pode editar com permissões granulares.",
    },
    {
        num:"F-04", cls:"c4",
        color: "#C97B6A",
        bg: "rgba(173,139,139,0.1)",
        border: "rgba(173,139,139,0.28)",
        icon: icons.lock,
        title: "Controle de Acesso",
        desc: "Aprove, recuse ou revogue acessos a qualquer momento. As permissões ficam vinculadas à conta do usuário, não ao link.",
    },
    {
        num:"F-05",
        cls:"c5",
        color: "#D4A853",
        bg: "rgba(212,168,83,0.07)",
        border: "rgba(212,168,83,0.28)",
        icon: icons.users,
        title: "Gestão de Autores",
        desc: "Cadastre autores com biografia e veja quantas obras de cada um você tem no acervo — tudo conectado automaticamente.",
    },
    {
        num:"F-06", 
        cls:"c6",
        color: "#7A9E87",
        bg: "rgba(122,158,135,0.1)",
        border: "rgba(122,158,135,0.28)",
        icon: icons.eye,
        title: "Painel Completo",
        desc: "Métricas do seu acervo em tempo real: total de obras, PDFs anexados, autores cadastrados e acessos compartilhados.",
    }
  ];

  const ctaData: element[] = [
    {
      label: "Criar minha biblioteca",
      specificCss: `bg-accent relative overflow-hidden
                    text-bg border-none
                    shadow-[0_4px_32px_rgba(212,168,83,0.2)]
                    md:px-7 transition-all duration-200
                    hover:bg-accent-hover`,
      IconBehind: icons.book
    }, 
    {
      label: "Já tenho conta",
      specificCss: `bg-transparent text-text-sub
                    border border-border-md
                    md:px-6 tracking-[0.14em]
                    transition duration-200
                    hover:border-accent hover:text-accent`,
      IconFront: icons.arrow
    }
  ]
  



  return {hero, socialProof, features, ctaData}
}
