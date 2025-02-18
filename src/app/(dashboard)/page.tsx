import { Button } from '@/src/components/ui/button';
import { ArrowRight, BrainCircuit, ChartColumnIncreasing, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-3xl md:mx-auto lg:col-span-12 lg:text-center">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Transforme links em leads
                <span className="block text-gray-900">
                  direto no seu WhatsApp
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Automatize sua organização de leads e aumente suas vendas de forma inteligente e em um só lugar
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white">
                <BrainCircuit className='w-6 h-6' />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Links Inteligentes
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Crie links personalizados que capturam informações valiosas dos seus prospects antes mesmo do primeiro contato.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white">
                <MessageCircle className='h-6 w-6' />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Direto para WhatsApp
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Seus leads são automaticamente direcionados para seu WhatsApp Business, iniciando conversas qualificadas no canal que mais converte.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-900 text-white">
                <ChartColumnIncreasing className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Dashboard de Análise
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Acompanhe em tempo real quantos leads seus links geram, taxas de conversão e informações valiosas sobre seus prospects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Pronto para começar?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Cadastre-se e crie seu primeiro link inteligente em questão de minutos. Sem complicações técnicas. Capture leads mais qualificados e prontos para comprar, com informações relevantes desde o primeiro contato.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <Link href='/sign-in'>
                <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-xl px-12 py-6 inline-flex items-center justify-center cursor-pointer">
                  Comece agora!
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
