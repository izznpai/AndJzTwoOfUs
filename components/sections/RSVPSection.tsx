"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FloralDecoration } from "@/components/ui/FloralDecoration";

type Attending = "yes" | "no" | null;

export function RSVPSection() {
  const heroRef = useRef(null);
  const formRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });

  const [attending, setAttending] = useState<Attending>(null);
  const [guests, setGuests] = useState("1");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dietary, setDietary] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function choose(choice: Attending) {
    setAttending(choice);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || attending === null) return;
    setSubmitted(true);
  }

  return (
    <section id="rsvp" className="relative overflow-hidden">

      {/* ── Decorative top ── */}
      <div
        ref={heroRef}
        className="relative py-36 md:py-48 overflow-hidden"
        style={{ backgroundColor: "#1F2B22" }}
      >
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />

        {/* Botanical branches */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-12 top-1/4 opacity-[0.15] hidden lg:block"
        >
          <FloralDecoration variant="branch-left" color="#FAF7F2" opacity={1} className="scale-150" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -1.5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute -right-12 top-1/4 opacity-[0.15] hidden lg:block"
        >
          <FloralDecoration variant="branch-right" color="#FAF7F2" opacity={1} className="scale-150" />
        </motion.div>

        <div className="container-narrow text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <FloralDecoration variant="wreath" color="#8FAF87" opacity={0.7} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-sans text-[10px] tracking-[0.45em] uppercase text-[#FAF7F2]/50 mb-8"
          >
            You are warmly invited
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif font-light italic text-[#FAF7F2] mb-6 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Will you join us?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-script text-4xl md:text-5xl text-[#A8C5A0] mb-10"
          >
            Andi &amp; Jz
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={heroInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            <FloralDecoration variant="divider" color="#8FAF87" opacity={0.55} className="mb-10" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-serif italic font-light text-[#FAF7F2]/70 text-lg md:text-xl leading-loose mb-4 max-w-xl mx-auto"
          >
            Your presence is the greatest gift.
            Please let us know you&apos;ll be celebrating with us.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#FAF7F2]/35 mb-16"
          >
            Kindly RSVP before June 30
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => choose("yes")}
              className="inline-flex items-center gap-3 px-14 py-5 font-sans text-[10px] tracking-[0.35em] uppercase transition-all duration-500 hover:scale-[1.02] bg-sage text-white hover:bg-sage-dark"
            >
              Joyfully Accept
            </button>

            <button
              onClick={() => choose("no")}
              className="inline-flex items-center gap-3 px-14 py-5 font-sans text-[10px] tracking-[0.35em] uppercase transition-all duration-500 hover:scale-[1.02] bg-transparent text-[#FAF7F2]/70 border border-[#FAF7F2]/25 hover:border-[#FAF7F2]/60 hover:text-[#FAF7F2]"
            >
              Regretfully Decline
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Form — only visible after a choice ── */}
      <AnimatePresence>
        {attending !== null && (
          <motion.div
            ref={formRef}
            key="form-section"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
            style={{ backgroundColor: "#EDE8DF" }}
          >
            <div className="relative py-20 md:py-28">
              <div className="absolute inset-0 bg-gradient-to-b from-[#F2EDE4] via-transparent to-transparent pointer-events-none" />

              <div className="container-wide relative z-10 max-w-2xl mx-auto">
                <div className="relative bg-white border border-[#3a3530]/08 shadow-elegant px-8 md:px-14 py-12 md:py-16">
                  <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-sage/20" />
                  <div className="absolute top-3 right-3 w-8 h-8 border-t border-r border-sage/20" />
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b border-l border-sage/20" />
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-sage/20" />

                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="thanks"
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center py-8"
                      >
                        <FloralDecoration variant="wreath" color="#8FAF87" opacity={0.5} className="mb-6" />
                        <h3 className="font-script text-[3rem] text-sage mb-4">Thank You!</h3>
                        {attending === "yes" ? (
                          <>
                            <p className="font-serif italic font-light text-[#3a3530]/80 text-lg mb-2">
                              We&apos;re so happy you&apos;ll be with us, <span className="text-[#3a3530]">{name}</span>.
                            </p>
                            <p className="font-serif italic font-light text-[#3a3530]/60 text-base">
                              We can&apos;t wait to celebrate with you on October 22, 2026.
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="font-serif italic font-light text-[#3a3530]/80 text-lg mb-2">
                              We&apos;ll miss you, <span className="text-[#3a3530]">{name}</span>.
                            </p>
                            <p className="font-serif italic font-light text-[#3a3530]/60 text-base">
                              Thank you for letting us know. You&apos;ll be in our hearts on the day.
                            </p>
                          </>
                        )}
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-8"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {/* Status bar */}
                        <div className="flex items-center gap-3 pb-5 border-b border-[#3a3530]/15">
                          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#3a3530]/55 mr-auto">
                            {attending === "yes" ? "Attending — October 22, 2026" : "Unable to attend"}
                          </p>
                          <button
                            type="button"
                            onClick={() => setAttending(attending === "yes" ? "no" : "yes")}
                            className="font-sans text-[8px] tracking-[0.3em] uppercase text-sage underline underline-offset-4 hover:text-sage-dark transition-colors"
                          >
                            Change
                          </button>
                        </div>

                        {/* Name */}
                        <div>
                          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#3a3530]/60 mb-3">
                            01 — Your full name
                          </p>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Maria Santos"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-transparent border-b border-[#3a3530]/30 pb-2 font-serif font-light text-[#3a3530] text-lg placeholder:text-[#3a3530]/35 focus:outline-none focus:border-sage transition-colors duration-300"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#3a3530]/60 mb-3">
                            02 — Email <span className="normal-case tracking-normal text-[#3a3530]/40">(optional)</span>
                          </p>
                          <input
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent border-b border-[#3a3530]/30 pb-2 font-serif font-light text-[#3a3530] text-lg placeholder:text-[#3a3530]/35 focus:outline-none focus:border-sage transition-colors duration-300"
                          />
                        </div>

                        {/* Attending-only fields */}
                        <AnimatePresence>
                          {attending === "yes" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4 }}
                              className="flex flex-col gap-8 overflow-hidden"
                            >
                              <div>
                                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#3a3530]/60 mb-3">
                                  03 — Number of guests (including yourself)
                                </p>
                                <div className="flex gap-3">
                                  {["1", "2", "3", "4+"].map((n) => (
                                    <button
                                      key={n}
                                      type="button"
                                      onClick={() => setGuests(n)}
                                      className={`w-12 h-12 border font-serif font-light text-lg transition-all duration-300 ${
                                        guests === n
                                          ? "bg-sage text-white border-sage"
                                          : "bg-white text-[#3a3530]/70 border-[#3a3530]/25 hover:border-sage/50"
                                      }`}
                                    >
                                      {n}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#3a3530]/60 mb-3">
                                  04 — Dietary restrictions <span className="normal-case tracking-normal text-[#3a3530]/40">(optional)</span>
                                </p>
                                <input
                                  type="text"
                                  placeholder="e.g. Vegetarian, gluten-free…"
                                  value={dietary}
                                  onChange={(e) => setDietary(e.target.value)}
                                  className="w-full bg-transparent border-b border-[#3a3530]/30 pb-2 font-serif font-light text-[#3a3530] text-lg placeholder:text-[#3a3530]/35 focus:outline-none focus:border-sage transition-colors duration-300"
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Message */}
                        <div>
                          <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#3a3530]/60 mb-3">
                            {attending === "yes" ? "05" : "03"} — Leave a message <span className="normal-case tracking-normal text-[#3a3530]/40">(optional)</span>
                          </p>
                          <textarea
                            rows={3}
                            placeholder="Share your wishes for the couple…"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-transparent border-b border-[#3a3530]/30 pb-2 font-serif font-light text-[#3a3530] text-lg placeholder:text-[#3a3530]/35 focus:outline-none focus:border-sage transition-colors duration-300 resize-none"
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={!name}
                          className="w-full py-5 bg-sage text-white font-sans text-[10px] tracking-[0.4em] uppercase transition-all duration-500 hover:bg-sage-dark disabled:opacity-30 disabled:cursor-not-allowed mt-2"
                        >
                          Send My RSVP
                        </button>

                        <p className="text-center font-sans text-[9px] tracking-[0.2em] text-[#3a3530]/50">
                          Questions? Reach us at{" "}
                          <a href="mailto:andiluna17@gmail.com" className="text-sage underline underline-offset-4">
                            andiluna17@gmail.com
                          </a>
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
