"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "motion/react";

import {
  HardHat,
  CircleDot,
  Gauge,
  Droplets,
  CircleSlash,
  Wrench,
  Zap,
  SlidersHorizontal,
  LucideIcon,
  Truck,
  ShieldCheck,
  PackageCheck,
  Headphones,
} from "lucide-react";

type Category = {
  name: string;
  icon: LucideIcon;
  path: string;
};

const categories: Category[] = [
  { name: "Capacetes", icon: HardHat, path: "#" },
  { name: "Pneus", icon: CircleDot, path: "#" },
  { name: "Escapes", icon: Gauge, path: "#" },
  { name: "Óleo", icon: Droplets, path: "#" },
  { name: "Freios", icon: CircleSlash, path: "#" },
  { name: "Acessórios", icon: Wrench, path: "#" },
  { name: "Elétrica", icon: Zap, path: "#" },
  { name: "Suspensão", icon: SlidersHorizontal, path: "#" },
];

import ProductCard, { Procuct } from "../ul/ProductCard";

const mockFeaturedProducts: Procuct[] = [
  {
    status: "IN STOCK",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBv1VLqxv9IXl3dr0eFC1nNBP7Bo0xgqmisIYFBpD8ky2NZTUZAdTRdXDWuTmum-XZ9Wzu67o7RvTA1bhN84UGZdakNlmpx90vZMU_8W-df_mUCqhQLbcQ363FZGneJt9FEfJQgxtwjczpoAbzQZjf-1P8pvwNmJGCK9-Mjg8rGyyGqt-Azke8PFpebc82OfEQo6dfpJYVkFfTayk_2kRiVxDXEleNb37I43_erpFDe-bYxg0qMwUsFB4Q9vUhWtk5Rg6DwyMmzCGU",
    sku: "MC-EXH-092",
    name: "Escapamento Titânio Race-X",
    price: 4890.0,
  },
  {
    status: "IN STOCK",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCm5r4mDc-giq8V65A337giFazdqdqF2cIAPUMV2Hv_4smseWYNeK2pSWoL4tESMcs97KPal8tubgNrGlZYujR1a8lIJOkmFu4sQ6ncANUg6VhCpdaF9BqSkqCGrlJoJ0mV66zhPpDxLKuAl_f4_FKlzNhdE3QJRarRcpRDL94ozS7Qh_bHwfG-Pv51j2RJyglaz8LgLswtC53IWMXLmS4mt5e1bfLmnQX48nPADApM88UdDnaY9LeFzw5WoLNdFZwfjz9QiOhvY9c",
    sku: "MC-HLM-204",
    name: "Capacete Carbon Ghost",
    price: 2450.0,
  },
  {
    status: "IN STOCK",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDioj8O5ee5VpzvSb2OhhvqIVvbuOob161rkNal3RfrzsGloIcwHxX2ZYkgi1qYBUkMyXB1oFRmo38_CayFhikVsnXUU9OHPGde0K4P9LRsXeVIEDqpAjgGBfF30trQKJhbWYzscdR9RypfTQl1WOh3Dl5Ta_Pk5MfsdSDTC6YZIQLq7wsPxOE29klx27wxMFvXzanYAJ4r_Mcsr6M099pcG_vAuRGT3sQXNs5tLLe11W-QZSiDutFBJlf8h1e8kM1VHdz-P5ukzHA",
    sku: "MC-SUS-551",
    name: "Amortecedor MonoShock Pro",
    price: 3120.0,
  },
  {
    status: "LOW STOCK",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhGi3MijcrkFVyLtEDP7Xi8excT8_sDbm_e-9Gh4f34LvwJvH65y_TlYz6kz9v9F_7XfXeM9rbA_OzpJZkeXvuLc7uychXbUj9n98wBUSk-ngE7XBRnBi3h0lU_uMCWZkiEaG3tno8g8LxVFcCVSTOo5nxBotzdM3S7HcmRmKTTfESk0U0HCqOIIyvGMyPjRWQoSBROGoRS889fVKeuR_C9GiP4tvOGS0MSZRIBPy_ibq7fLb05msoWusAAB7KUXnKc-QQ-tjkFJI",
    sku: "MC-BRK-112",
    name: "Discos de Freio Ventilados",
    price: 890.0,
  },
];

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  { icon: Truck, title: "Frete Rápido", description: "Entrega em até 48h" },
  {
    icon: ShieldCheck,
    title: "Compra Segura",
    description: "Criptografia de ponta",
  },
  {
    icon: PackageCheck,
    title: "Garantia Total",
    description: "Produtos certificados",
  },
  {
    icon: Headphones,
    title: "Suporte Técnico",
    description: "Fale com especialistas",
  },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HomePage() {
  return (
    <main>
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative min-h-150 flex items-center overflow-hidden py-xl"
      >
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-xl items-center relative z-10">
          <div className="space-y-lg">
            <h1 className="text-5xl font-bold leading-tight tracking-tighter text-on-surface uppercase">
              As melhores peças e acessórios para sua moto em um só lugar.
            </h1>
            <p className="text-lg font-normal leading-relaxed text-on-surface-variant">
              Encontre capacetes, escapamentos, freios, peças de motor,
              acessórios e muito mais com qualidade, confiança e os melhores
              preços.
            </p>

            <div className="flex flex-wrap gap-md pt-md">
              <button className="bg-primary-container text-on-primary-container px-lg py-sm font-bold active:scale-95 transition-all hover:bg-primary-hover">
                Ver Produtos
              </button>
              <button className="border border-border-subtle text-on-surface px-lg py-sm font-bold active:scale-95 transition-all hover:bg-surface-container">
                Categorias
              </button>
            </div>
          </div>
          <div className="relative hidden md:block h-100">
            <Image
              alt="Motorcycle Performance"
              className="object-cover rounded-lg shadow-2xl"
              src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop"
              fill
              priority
              unoptimized
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-linear-to-br from-background-main to-surface-container-lowest z-0"></div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-xl bg-surface-container-low"
      >
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex justify-between items-end mb-lg">
            <h2 className="text-3xl font-semibold leading-tight text-on-surface uppercase tracking-tight">
              Categorias Técnicas
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-sm">
            {categories.map((category_) => (
              <Link
                key={category_.name}
                href={category_.path}
                className="bg-surface-card border border-border-subtle p-md flex flex-col items-center gap-sm hover:border-primary-container transition-all group"
              >
                {
                  <category_.icon className="text-primary group-hover:scale-110 transition-transform"></category_.icon>
                }
                <span className="text-sm font-medium tracking-wider text-on-surface-variant">
                  {category_.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-xl bg-background-main"
      >
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex justify-between items-center mb-xl">
            <h2 className="text-3xl font-semibold leading-tight text-on-surface uppercase tracking-tight">
              Produtos em Destaque
            </h2>

            <Link
              href={"#"}
              className="text-sm font-medium tracking-wider text-primary hover:underline"
            >
              VER TODOS OS COMPONENTES
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
            {mockFeaturedProducts.map((product) => (
              <ProductCard key={product.sku} product={product} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-xl border-t border-border-subtle bg-background-main"
      >
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 lg:grid-cols-4 gap-xl">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-center gap-4">
              <benefit.icon className="text-primary size-8 shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase text-on-surface">
                  {benefit.title}
                </h4>
                <p className="text-sm font-medium tracking-wider text-on-surface-variant/70">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
