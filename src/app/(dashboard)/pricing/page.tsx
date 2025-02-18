import { checkoutAction } from '@/src/lib/payments/actions';
import { getStripePrices, getStripeProducts } from '@/src/lib/payments/stripe';
import { Check } from 'lucide-react';
import { SubmitButton } from './submit-button';

export const revalidate = 3600;

export default async function PricingPage() {
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  const basePlan = products.find((product) => product.name === 'Base');

  const basePrice = prices.find((price) => price.productId === basePlan?.id);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
        <PricingCard
          name={basePlan?.name || 'Base'}
          price={basePrice?.unitAmount || 990}
          interval={basePrice?.interval || 'mês'}
          trialDays={basePrice?.trialPeriodDays || 7}
          features={[
            'Uso ilimitado',
            'Membros ilimitador por Workspace',
            'Suporte por email'
          ]}
          priceId={basePrice?.id}
        />
      </div>
    </main>
  );
}

function PricingCard({
  name,
  price,
  interval,
  trialDays,
  features,
  priceId,
}: {
  name: string;
  price: number;
  interval: string;
  trialDays: number;
  features: string[];
  priceId?: string;
}) {
  const formatCurrency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })

  return (
    <div className="pt-6">
      <h2 className="text-2xl font-medium text-gray-900 mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-4">
        com {trialDays} de teste gratuito
      </p>
      <p className="text-4xl font-medium text-gray-900 mb-6">
        {formatCurrency.format(price / 100)}{' '}
        <span className="text-xl font-normal text-gray-600">
          / {interval}
        </span>
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-gray-900 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <form action={checkoutAction}>
        <input type="hidden" name="priceId" value={priceId} />
        <SubmitButton />
      </form>
    </div>
  );
}
