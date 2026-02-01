import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send, Phone } from 'lucide-react';
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Build FormData for Netlify Forms
      // Envoi vers la Netlify Function sendMail
      console.log('Envoi vers la function sendMail...', formData)
      const res = await fetch('/.netlify/functions/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      console.log('Réponse fetch:', res.status)
      let data = null
      try {
        data = await res.json()
        console.log('Response JSON:', data)
      } catch (err) {
        console.warn('Aucune réponse JSON', err)
      }

      if (res.ok && data && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError("Erreur lors de l'envoi (send_failed)");
      }
    } catch (err) {
      setError('Impossible de contacter Netlify');
    }
  };
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 lg:py-32 px-4 lg:px-8" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 20
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intéressé par une collaboration ? N'hésitez pas à me contacter.
            Je suis toujours ouvert à de nouvelles opportunités.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -20
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="space-y-8">
            <div>
              <h3 className="text-2xl mb-6">Restons en contact</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Je suis disponible pour discuter de projets, d'opportunités professionnelles
                ou simplement échanger autour du développement web.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl group">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-chart-1 transition-colors">
                  <Mail className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">steven [at] gmail [dot] com</div>
                </div>
                <div className="ml-auto">
                  <button type="button" onClick={() => {
                    try {
                      const emailInput = document.getElementById('email');
                      if (emailInput) emailInput.focus();
                      else {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    } catch (err) {
                      console.error(err);
                    }
                  }} className="px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-colors">
                    Ouvrir
                  </button>
                </div>
              </div>

              <a href="tel:0544552479" className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-chart-1 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-chart-1 transition-colors">
                  <Phone className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="font-medium">Téléphone</div>
                  <div className="text-sm text-muted-foreground">0544552479</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/steven-amani-37a237329/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-chart-1 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-chart-1 transition-colors">
                  <Linkedin className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">Steven Amani</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 20
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Nom
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-accent border border-border rounded-lg focus:outline-none focus:border-chart-1 transition-colors" placeholder="Votre nom" />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-accent border border-border rounded-lg focus:outline-none focus:border-chart-1 transition-colors" placeholder="votre.email@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 bg-accent border border-border rounded-lg focus:outline-none focus:border-chart-1 transition-colors resize-none" placeholder="Votre message..." />
              </div>

              <button type="submit" className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                <span>Envoyer le message</span>
              </button>
              {submitted && <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-chart-2 text-sm">
                  Message envoyé avec succès ! Je vous répondrai bientôt.
                </motion.div>}
              {error && <div className="text-center text-destructive text-sm mt-2">{error}</div>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}