"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Martini, ScanQrCode, ShieldCheck, Share2 } from "lucide-react";
import ParticleBackground from "./components/ParticleBackground";
import styles from "./page.module.css";

export default function Home() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  // Timer logic removed as per request
  return (
    <div className={styles.loungeContainer}>
      <ParticleBackground />
      
      <main className={styles.loungeHero}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className={styles.glassCard}
        >
          {/* Logo Section */}
          <div className={styles.logoBadge}>
            <Martini size={24} className={styles.goldIcon} />
            <span>EST. 2026</span>
          </div>

          <h1 className={styles.loungeTitle}>
            LECTUS<span>CLUB</span>
          </h1>
          
          <p className={styles.loungeTagline}>
            L'excellence d'un lounge privé. <br />
            Redéfinir l'art du cocktail et de la détente.
          </p>

          {/* Features / Experience */}
          <div className={styles.featureGrid}>
             <div className={styles.featureItem}>
                <ScanQrCode size={20} />
                <span>Menu Digital QR</span>
             </div>
             <div className={styles.featureItem}>
                <ShieldCheck size={20} />
                <span>Accès Membres</span>
             </div>
          </div>

          <div className={styles.statusBox}>
             <span className={styles.pulseDot}></span> Ouverture en préparation
          </div>

          {/* Simplified Coming Soon Message */}
          <div className={styles.comingSoonBadge}>
             Bientôt en ligne
          </div>

          {/* Subscription Section */}
          <div className={styles.subscriptionArea}>
            {!isSubscribed ? (
               <form className={styles.loungeForm} onSubmit={(e) => { e.preventDefault(); setIsSubscribed(true); }}>
                  <input type="email" placeholder="Demander une invitation (Email)" required />
                  <button type="submit">S'inscrire</button>
               </form>
            ) : (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.welcomeMsg}>
                 ✓ Votre invitation est en cours de traitement.
               </motion.div>
            )}
          </div>
        </motion.div>

        {/* Floating Decorative Elements */}
        <div className={styles.decorativeQr}>
           <ScanQrCode size={120} strokeWidth={0.5} opacity={0.05} />
        </div>
      </main>

      <footer className={styles.loungeFooter}>
        <div className={styles.footerFlex}>
          <span>© 2026 LECTUS CLUB — LUXURY LOUNGE & BAR</span>
          <div className={styles.socialIcons}>
            <Share2 size={18} />
          </div>
        </div>
      </footer>
    </div>
  );
}
