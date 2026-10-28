import { Phone, Mail, MapPin, Clock } from "lucide-react";

const quickLinks = [
  { label: "Início", href: "#" },
  { label: "Produtos", href: "#" },
  { label: "Categorias", href: "#" },
  { label: "Promoções", href: "#" },
  { label: "Sobre", href: "#" },
  { label: "Contato", href: "#" },
];

const popularCategories = [
  { label: "Capacetes", href: "#" },
  { label: "Freios", href: "#" },
  { label: "Escapamentos", href: "#" },
  { label: "Pneus", href: "#" },
  { label: "Elétrica", href: "#" },
  { label: "Óleo e Lubrificantes", href: "#" },
];

const contactInfo = [
  { icon: Phone, text: "(11) 99999-9999" },
  { icon: Mail, text: "contato@ramultipeças.com.br" },
  { icon: MapPin, text: "Av. Industrial, 1234 - São Paulo, SP" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full border-t border-border-subtle">
      <div className="max-w-container-max mx-auto px-gutter py-xl">

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl">

          {/* Marca */}
          <div className="space-y-md">
            <h3 className="text-2xl font-bold tracking-tighter text-on-surface uppercase">
              RA-MULTIPEÇAS
            </h3>
            <p className="text-base font-normal leading-relaxed text-on-surface-variant">
             Peças, acessórios e equipamentos para sua moto com qualidade, desempenho e confiança para todos os tipos de pilotagem.
            </p>
          </div>

          {/* Navegação */}
          <div className="space-y-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface">
              Navegação
            </h3>
            <ul className="space-y-sm">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-base font-normal text-on-surface-variant hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorias */}
          <div className="space-y-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface">
              Categorias Populares
            </h3>
            <ul className="space-y-sm">
              {popularCategories.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-base font-normal text-on-surface-variant hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="space-y-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-on-surface">
              Contato
            </h3>
            <ul className="space-y-sm">
              {contactInfo.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-xs">
                  <Icon className="text-primary shrink-0 mt-0.5" size={16} />
                  <span className="text-base font-normal text-on-surface-variant">
                    {text}
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-xs pt-xs">
                <Clock className="text-primary shrink-0 mt-0.5" size={16} />
                <div className="text-base font-normal text-on-surface-variant">
                  <p>Seg - Sex: 08:00 - 18:00</p>
                  <p>Sáb: 08:00 - 13:00</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-xl pt-lg border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="text-sm font-medium tracking-wider text-on-surface-variant">
            © 2026 RA-MULTIPEÇAS. Todos os direitos reservados.
          </p>
          <span className="text-sm font-medium tracking-wider text-on-surface-variant/60">
            CNPJ: 00.000.000/0001-00
          </span>
        </div>

      </div>
    </footer>
  );
}