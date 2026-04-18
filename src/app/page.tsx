"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScanQrCode, ShieldCheck, Share2 } from "lucide-react";
import ParticleBackground from "./components/ParticleBackground";
import styles from "./page.module.css";

export default function Home() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className={styles.loungeContainer}>
      <ParticleBackground />
      
      <main className={styles.loungeHero}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={styles.glassCard}
        >
          {/* Logo Section */}
          <div className={styles.logoWrapper}>
            <Image 
              src="/logo.png" 
              alt="Lectus Social Club" 
              width={180} 
              height={180} 
              className={styles.mainLogo}
              priority
            />
          </div>

          <div className={styles.comingSoonHeader}>
            <h1 className={styles.mainStatement}>L'adresse de l'exception.</h1>
          </div>
          
          <p className={styles.loungeTagline}>
            Ouverture prochaine de l'espace numérique membres.
          </p>

          <div className={styles.statusBox}>
            <span className={styles.pulseDot}></span> Ouverture Prochaine
          </div>

          {/* Subscription Section */}
          <div className={styles.subscriptionArea}>
            {!isSubscribed ? (
               <form className={styles.loungeForm} onSubmit={(e) => { e.preventDefault(); setIsSubscribed(true); }}>
                  <input type="email" placeholder="Saisissez votre adresse email" required />
                  <button type="submit">Demander l'accès</button>
               </form>
            ) : (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.welcomeMsg}>
                 ✓ Votre demande a été transmise avec succès.
               </motion.div>
            )}
          </div>
          
          {/* Simplified Footer / Feature Info */}
          <div className={styles.welcomeMsgWrapper}>
            {isSubscribed && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.welcomeMsg}>
                 ✓ Votre demande a été transmise.
               </motion.div>
            )}
          </div>
        </motion.div>
      </main>

      <footer className={styles.loungeFooter}>
        <div className={styles.footerFlex}>
          <span>LECTUS SOCIAL CLUB — HAUTE CONCIERGERIE</span>
        </div>
      </footer>
    </div>
  );
}
