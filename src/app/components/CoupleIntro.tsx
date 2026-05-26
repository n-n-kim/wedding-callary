import { motion } from 'motion/react';
import page2Bg from '../../assets/page2.jpg';
import page2Main from '../../assets/page2-2.jpg.png';

export function CoupleIntro() {
  return (
    <section
      className="relative overflow-hidden py-20 px-6"
      id="couple"
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        {/* Ảnh nền */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 blur-md scale-110"
          style={{
            backgroundImage: `url(${page2Bg})`,
          }}
        />

        {/* Lớp trắng phủ lên */}
        <div className="absolute inset-0 bg-[#F7F1D8]/40" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Main couple section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center mb-8"
          >
            <div
              className="text-5xl md:text-7xl"
              style={{ fontFamily: "'Edwardian Script ITC3', cursive" }}
            >
              <span className="text-[#345938]">Trịnh Quốc Tân</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="my-8 flex items-center justify-center"
          >
            <div className="h-px w-20 bg-[#CFD6AD]" />
            <div className="mx-6">
              <span
                className="text-6xl text-[#345938] leading-none"
                style={{ fontFamily: "'Parisienne', 'Great Vibes', cursive" }}
              >
                &
              </span>
            </div>
            <div className="h-px w-20 bg-[#CFD6AD]" />
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: 'spring' }}
            className="text-5xl md:text-7xl"
            style={{ fontFamily: "'Edwardian Script ITC3', cursive" }}
          >
            <span className="text-[#345938]">Trần Ngọc Trâm</span>
          </motion.div>
        </div>

        {/* Couple image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src={page2Main}
            alt="Couple"
            className="w-full aspect-[3/4] object-cover"
          />
        </motion.div>

        {/* Quote or description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p
            className="text-xl md:text-2xl text-gray-700 italic leading-relaxed"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            "Two hearts - one love - one lifetime"
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
