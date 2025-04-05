import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <TeamSection />
        
        <section className="my-16" id="contact">
          <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
          <ContactForm />
        </section>
      </div>
      
      <Footer />
    </main>
  )
}
