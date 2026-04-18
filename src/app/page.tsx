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
            <h1 className={styles.mainStatement}>LECTUS SOCIAL CLUB PRÉPARE SON OUVERTURE.</h1>
          </div>
          
          <p className={styles.loungeTagline}>
            Bientôt en ligne.
          </p>

          <div className={styles.subscriptionArea}>
            {!isSubscribed ? (
               <form 
                 className={styles.loungeForm} 
                 name="invitation-request"
                 method="POST" 
                 data-netlify="true"
                 onSubmit={(e) => { 
                   // Let Netlify handle the submission, but we'll show the success message locally too
                   setIsSubscribed(true); 
                 }}
               >
                  <input type="hidden" name="form-name" value="invitation-request" />
                  <input type="email" name="email" placeholder="Saisissez votre adresse email" required />
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
