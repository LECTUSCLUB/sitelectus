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
            <h1 className={styles.mainStatement}>L'excellence pour seul horizon.</h1>
          </div>
          
          <p className={styles.loungeTagline}>
            LECTUS SOCIAL CLUB — Ouverture prochaine.
          </p>

          <div className={styles.subscriptionArea}>
            {!isSubscribed ? (
               <form 
                 className={styles.loungeForm} 
                 name="invitation-request"
                 onSubmit={(e) => { 
                   e.preventDefault();
                   const modalForm = e.target;
                   const formData = new FormData(modalForm);
                   fetch("/", {
                     method: "POST",
                     headers: { "Content-Type": "application/x-www-form-urlencoded" },
                     body: new URLSearchParams(formData as any).toString(),
                   })
                   .then(() => setIsSubscribed(true))
                   .catch((error) => console.error(error));
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
