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
  const [fetchingRecipient, setFetchingRecipient] = useState(false);
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
      return <section id="contact" className="relative overflow-hidden py-20 lg:py-32 px-4 lg:px-8" ref={ref}>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/30 dark:from-[#06060a] dark:via-[#09080f] dark:to-[#0b0710] pointer-events-none" aria-hidden />
        <div className="container mx-auto max-w-6xl relative z-10">
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-center font-extrabold">
            Contactez-moi
          </h2>
          <div className="flex justify-center mb-12" aria-hidden>
            <div className="w-36 h-1.5 rounded-full bg-gradient-to-r from-[#9b6bff] via-[#8b5cf6] to-[#f97316]" />
          </div>
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
              <div className="flex items-center gap-6 p-6 bg-card border border-border rounded-2xl group card-highlight transform transition-all duration-200 hover:shadow-lg active:-translate-y-1 active:shadow-lg" style={{"--card-accent":"#9b6bff","--card-accent-rgb":"155,107,255"}}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#9b6bff] to-[#8b5cf6] text-white border border-border/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Email</div>
                  <div className="text-sm text-muted-foreground mt-1">steven.amani@gmail.com</div>
                </div>
                
              </div>

              <a href="tel:0544552479" className="flex items-center gap-6 p-6 bg-card border border-border rounded-2xl transform transition-all duration-200 hover:shadow-lg active:-translate-y-1 active:shadow-lg group card-highlight" style={{"--card-accent":"#9b6bff","--card-accent-rgb":"155,107,255"}}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#9b6bff] to-[#8b5cf6] text-white border border-border/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Téléphone</div>
                  <div className="text-sm text-muted-foreground mt-1">0544552479</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/steven-amani-37a237329/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 bg-card border border-border rounded-2xl transform transition-all duration-200 hover:shadow-lg active:-translate-y-1 active:shadow-lg group card-highlight" style={{"--card-accent":"#f59e0b","--card-accent-rgb":"245,158,11"}}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#f59e0b] to-[#f97316] text-white border border-border/20">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-lg font-semibold">LinkedIn</div>
                  <div className="text-sm text-muted-foreground mt-1">Steven Amani</div>
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
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6 card-highlight transform transition-all duration-200 active:-translate-y-1 active:shadow-lg" style={{"--card-accent":"#9b6bff","--card-accent-rgb":"155,107,255"}}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Nom
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-6 py-4 bg-accent border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9b6bff]/20 transition-all" placeholder="Votre nom" />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-6 py-4 bg-accent border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9b6bff]/20 transition-all" placeholder="votre.email@example.com" />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-6 py-4 bg-accent border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9b6bff]/20 transition-all resize-none" placeholder="Votre message..." />
              </div>

              <button type="submit" className="w-full px-6 py-4 bg-gradient-to-r from-[#9b6bff] via-[#8b5cf6] to-[#f97316] text-primary-foreground rounded-full hover:scale-[1.01] transition-transform flex items-center justify-center gap-2">
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