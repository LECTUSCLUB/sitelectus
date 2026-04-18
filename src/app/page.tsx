"use client";

import React, { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const targetDate = useRef(new Date("2025-12-01T00:00:00").getTime());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate.current - now;

      if (difference < 0) return;

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, "0"),
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
      });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.ambientGlow} aria-hidden="true" />

      <main className={styles.main}>
        {/* Logo */}
        <div className={`${styles.logo} reveal`} style={{ animationDelay: "0.15s" }}>
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor">
            <rect x="2" y="2" width="36" height="36" strokeWidth="1.5" opacity="0.3" />
            <path d="M12 10 V30 H22" strokeWidth="2" strokeLinecap="square" />
            <path d="M28 14 C25 10 18 10 18 20 C18 30 25 30 28 26" strokeWidth="2" strokeLinecap="square" />
          </svg>
        </div>

        <h1 className="reveal" style={{ animationDelay: "0.3s" }}>Lectus Club</h1>

        <p className={`${styles.tagline} reveal`} style={{ animationDelay: "0.45s" }}>
          Un espace en préparation. Quelque chose d'extraordinaire arrive.
        </p>

        {/* Countdown */}
        <div className={`${styles.countdown} reveal`} style={{ animationDelay: "0.6s" }} aria-label="Compte à rebours jusqu'au lancement">
          <div className={styles.countdownItem}>
            <div className={styles.countdownValue}>
              <span key={timeLeft.days}>{timeLeft.days}</span>
            </div>
            <div className={styles.countdownLabel}>Jours</div>
          </div>
          <div className={styles.separator}>:</div>
          <div className={styles.countdownItem}>
            <div className={styles.countdownValue}>
              <span key={timeLeft.hours}>{timeLeft.hours}</span>
            </div>
            <div className={styles.countdownLabel}>Heures</div>
          </div>
          <div className={styles.separator}>:</div>
          <div className={styles.countdownItem}>
            <div className={styles.countdownValue}>
              <span key={timeLeft.minutes}>{timeLeft.minutes}</span>
            </div>
            <div className={styles.countdownLabel}>Minutes</div>
          </div>
          <div className={styles.separator}>:</div>
          <div className={styles.countdownItem}>
            <div className={styles.countdownValue}>
              <span key={timeLeft.seconds}>{timeLeft.seconds}</span>
            </div>
            <div className={styles.countdownLabel}>Secondes</div>
          </div>
        </div>

        {/* Form */}
        <div className={`${styles.formContainer} reveal`} style={{ animationDelay: "0.75s" }}>
          {!isSubscribed ? (
            <form className={styles.emailForm} onSubmit={handleSubmit}>
              <input type="email" placeholder="Votre email" required aria-label="Adresse email" />
              <button type="submit">M'avertir</button>
            </form>
          ) : (
            <div className={styles.successMessage} role="status" aria-live="polite">
              ✓ Vous serez parmi les premiers informés.
            </div>
          )}
        </div>
      </main>

      <footer className={`${styles.footer} reveal`} style={{ animationDelay: "0.9s" }}>
        © 2025 LECTUS CLUB — En construction
      </footer>
    </div>
  );
}
