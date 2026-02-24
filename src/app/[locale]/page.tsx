import { Hero } from '@/components/sections/Hero';
import { FeaturedInsights } from '@/components/sections/FeaturedInsights';
import { Practices } from '@/components/sections/Practices';
import { Stats } from '@/components/sections/Stats';
import { Clients } from '@/components/sections/Clients';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedInsights />
      <Practices />
      <Stats />
      <Clients />
      <CTA />
    </>
  );
}
