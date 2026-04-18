"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Menu, ChevronRight } from "lucide-react";
import ParticleBackground from "./components/ParticleBackground";
import styles from "./page.module.css";

export default function Home() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: "00", hours: "00", minutes: "00", seconds: "00" });

  useEffect(() => {
    const targetDate = new Date("2025-12-01T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff < 0) return clearInterval(timer);
      
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, "0"),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0"),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0"),
        seconds: Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, "0"),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.premiumContainer}>
      <ParticleBackground />
      
      {/* Top Navigation Bar */}
      <nav className={styles.navBar}>
        <div className={styles.navBrand}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.logoMark}>
            <svg viewBox="0 0 40 40" width="24" height="24">
               <path d="M12 10 V30 H22" stroke="currentColor" strokeWidth="3" fill="none"/>
               <path d="M28 14 C25 10 18 10 18 20 C18 30 25 30 28 26" stroke="currentColor" strokeWidth="3" fill="none"/>
            </svg>
          </motion.div>
          <span>LECTUS CLUB</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#">Concept</a>
          <a href="#">Bibliothèque</a>
          <a href="#">Événements</a>
        </div>
        <button className={styles.navButton}>
          Rejoindre <ArrowRight size={16} />
        </button>
      </nav>

      <main className={styles.heroSection}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={styles.heroContent}
        >
          <div className={styles.brandBadge}>
             <span className={styles.badgeIndicator}></span> Lancement prévu en 2025
          </div>
          
          <h1 className={styles.massiveTitle}>
            Rédiger l'avenir de <br />
            <span>la curiosité intellectuelle</span>
          </h1>
          
          <p className={styles.heroDesc}>
            Un club exclusif pour les esprits affamés de savoir. Une expérience littéraire et technologique hybride arrive bientôt.
          </p>

          <div className={styles.ctaContainer}>
             <button className={styles.primaryBtn}>
               S'inscrire à l'accès anticipé <ArrowRight size={18} />
             </button>
             <button className={styles.secondaryBtn}>
               Explorer le concept <ChevronRight size={18} />
             </button>
          </div>

          {/* Countdown Grid */}
          <div className={styles.premiumCountdown}>
             {Object.entries(timeLeft).map(([label, value], i) => (
                <div key={label} className={styles.countdownBox}>
                   <span className={styles.countdownValue}>{value}</span>
                   <span className={styles.countdownLabel}>{label}</span>
                </div>
             ))}
          </div>

          {/* New Email Form Inspired by Antigravity */}
          <div className={styles.emailWrapper}>
            {!isSubscribed ? (
               <form className={styles.modernForm} onSubmit={(e) => { e.preventDefault(); setIsSubscribed(true); }}>
                  <input type="email" placeholder="Votre adresse email" required />
                  <button type="submit">Notifier</button>
               </form>
            ) : (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.congrats}>
                 ✓ Vous êtes sur la liste d'attente.
               </motion.div>
            )}
          </div>
        </motion.div>
      </main>

      <footer className={styles.minimalFooter}>
        <div className={styles.footerLine}></div>
        <div className={styles.footerContent}>
          <span>© 2025 LECTUS CLUB</span>
          <div className={styles.footerSocials}>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
