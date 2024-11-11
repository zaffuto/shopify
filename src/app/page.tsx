import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-2">
        <Image
          className="dark:invert"
          src="/smart_logo-bg.png" // Cambia a la ruta de tu logo de Smarterbot
          alt="Smarterbot logo"
          width={200}
          height={50}
          priority
        />
        
        <h1 className="text-3xl font-semibold text-center sm:text-left">
          Bienvenidos a Smarterbot
        </h1>
        
        <p className="text-lg text-center sm:text-left max-w-xl">
          Simplifica y potencia tus interacciones con clientes usando automatización inteligente. Explora cómo Smarterbot transforma los flujos de trabajo en soluciones ágiles y personalizadas para tu negocio.
        </p>
        
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-xl">
          <li className="mb-2">
            💡 ¡Optimiza tu tienda online con las últimas innovaciones en IA!
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              Solo para tiendas con licencias Shopify Advanced.
            </code>
          </li>
          <li>Pedro es un experto en la adopción de Inteligencia Artificial en sistemas SCM</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.smarterbot.cl/subscribe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crear cuenta
          </a>

          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://api.whatsapp.com/send/?phone=56979540471&text=Hola%2C+quiero+saber+m%C3%A1s+sobre+Smarterbot&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contáctanos por WhatsApp
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://smarterbot.cl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globo"
            width={16}
            height={16}
          />
          smarterbot.cl →
        </a>
      </footer>
    </div>
  );
}
