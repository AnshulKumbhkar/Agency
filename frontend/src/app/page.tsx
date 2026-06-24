
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import ValueSection from '@/components/ValueSection';
import Services from '@/components/Services';
import Security from '@/components/Security';
import Process from '@/components/Process';
import Integrations from '@/components/Integrations';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">

      <Hero />
      <VideoSection />
      <ValueSection />
      <Services />
      <Security />
      <Process />
      <Integrations />
      <FAQ />
      <Contact />
    </main>
  );
}
