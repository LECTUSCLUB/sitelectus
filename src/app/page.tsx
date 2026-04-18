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
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className={styles.logoWrapper}
          >
            <Image 
              src="/logo.png" 
              alt="Lectus Club Logo" 
              width={180} 
              height={180} 
              className={styles.mainLogo}
              priority
            />
          </motion.div>

          <h1 className={styles.loungeTitle}>
            LECTUS<span>SOCIAL</span>CLUB
          </h1>
          
          <p className={styles.loungeTagline}>
            L’exclusivité au sommet de son art. <br />
            Un cercle privé dédié à l’élégance et au raffinement.
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
          <span>LECTUS SOCIAL CLUB — HAUTE CONCIERGERIE & CERCLE PRIVÉ</span>
          <div className={styles.socialIcons}>
            <Share2 size={16} />
          </div>
        </div>
      </footer>
    </div>
  );
}
