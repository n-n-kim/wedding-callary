import { motion } from "motion/react";
import testBg from "../../assets/page1.png";

interface PersonalInvitationProps {
  guestName?: string;
}

function SparkleDivider() {
  return (
    <div className="flex items-center justify-center text-[#5C4033] text-sm md:text-base tracking-wider select-none">
      <motion.span
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.25, 1],
          filter: [
            "drop-shadow(0 0 0px rgba(92,64,51,0))",
            "drop-shadow(0 0 8px rgba(92,64,51,0.5))",
            "drop-shadow(0 0 0px rgba(92,64,51,0))",
          ],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="inline-block"
      >
        ✦
      </motion.span>

      <span className="mx-2">─</span>
      <span>❀</span>
      <span className="mx-2">─</span>

      <motion.span
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.25, 1],
          filter: [
            "drop-shadow(0 0 0px rgba(92,64,51,0))",
            "drop-shadow(0 0 8px rgba(92,64,51,0.5))",
            "drop-shadow(0 0 0px rgba(92,64,51,0))",
          ],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.9,
        }}
        className="inline-block"
      >
        ✦
      </motion.span>
    </div>
  );
}

export function PersonalInvitation({
  guestName,
}: PersonalInvitationProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 px-0 overflow-hidden"
      id="invitation"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={testBg}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Warm yellow translucent layer */}
      <div className="absolute inset-0 z-10 bg-[#FFF8E8]/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-20 w-full text-center"
      >
        <div className="w-full px-6 py-8 md:px-12 md:py-10 bg-[#F7F6F2]/15 backdrop-blur-sm rounded-none shadow-lg border-y border-white/40">
          {/* Decorative line */}
          {/* <div className="mb-10 flex items-center justify-center">
            <SparkleDivider />
            <div className="mx-4 w-2.5 h-2.5 rounded-full bg-[#5C4033]" />
            <SparkleDivider />
          </div> */}

          <p
            className="text-4xl md:text-6xl text-[#5C4033] mb-10"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Trân Trọng Kính Mời
          </p>

          {guestName && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-10 max-w-2xl mx-auto p-6 md:p-8 bg-gradient-to-br from-[#EEDFCA]/30 to-[#F3BDCB]/20 rounded-2xl border border-[#5C4033]/30"
            >
              <p
                className="text-4xl md:text-5xl text-[#5C4033] mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {guestName}
              </p>
            </motion.div>
          )}

          <div
            className="mx-auto max-w-3xl text-gray-700 leading-relaxed text-xl md:text-2xl"
            style={{ fontFamily: "'Times New Roman', normal" }}
          >
            <p className="mb-1">
              Với niềm vui và hạnh phúc vô bờ, chúng mình trân trọng
              kính mời {guestName || "các bạn"} đến dự buổi lễ
              đính hôn của con chúng mình.
            </p>
          </div>

          {/* Decorative line */}
          {/* <div className="mt-14 flex items-center justify-center">
            <SparkleDivider />
            <div className="mx-4 w-12 h-1 bg-[#5C4033]" />
            <SparkleDivider />
          </div> */}
        </div>
      </motion.div>
    </section>
  );
}