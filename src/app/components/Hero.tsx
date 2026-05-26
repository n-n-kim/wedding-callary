import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import frontpage from '../../assets/frontpage.jpg';

interface HeroProps {
  onOpen: () => void;
}

export function Hero({ onOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={frontpage}
          alt="Front page"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F6F2]/75 via-[#F7F6F2]/65 to-[#F7F6F2]/85" />
        <div className="absolute inset-0 bg-[#F3E7B8]/22" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-2xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          className="mb-8 flex justify-center"
        >
          <div className="px-5 py-2 rounded-full border border-[#345938]/20 bg-[#F7F6F2]/50">
            <span className="text-xs md:text-sm uppercase tracking-[0.35em] text-[#345938] whitespace-nowrap">
              Save The Date
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm tracking-[0.3em] uppercase text-[#345938] mb-6"
        >
          Thư mời tiệc cưới
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-5xl md:text-7xl mb-4 text-[#345938] relative inline-block"
          style={{ fontFamily: "'Edwardian Script ITC3', cursive" }}
        >
          Quốc Tân
          <span className="block text-3xl md:text-4xl my-4 text-[#345938]">&</span>
          Ngọc Trâm
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 mb-12"
        >
          <p
            className="text-2xl md:text-3xl text-[#345938]"
            style={{ fontFamily: "'Playfair Display Italic', serif" }}
          >
            20.06.2026
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="px-8 py-4 bg-[#345938] text-white rounded-full hover:bg-[#345938]/90 transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Mở thiệp cưới
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-6 text-sm text-gray-600"
        >
          Nhấn để xem lời mời
        </motion.p>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#CFD6AD]/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#F3BDCB]/20 blur-3xl"
      />
    </section>
  );
}
