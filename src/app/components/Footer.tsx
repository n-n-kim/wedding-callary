import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-b from-white to-[#EEDFCA]/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Decorative divider
        <div className="mb-8 flex items-center justify-center">
          <div className="h-px w-20 bg-[#CFD6AD]" />
          <div className="mx-4">
            <span className="text-4xl text-[#345938] font-bold">♡</span>
          </div>
          <div className="h-px w-20 bg-[#CFD6AD]" />
        </div> */}

        {/* Thank you message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <p
            className="text-2xl md:text-3xl text-[#345938] mb-6 leading-relaxed"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cảm ơn các bạn đã dành thời gian xem lời mời của chúng mình
          </p>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Sự hiện diện của các bạn trong ngày trọng đại này là niềm hạnh phúc và vinh hạnh lớn nhất đối với gia đình chúng mình.
            Rất mong được đón tiếp các bạn!
          </p>
        </motion.div>

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div
            className="text-3xl md:text-4xl text-[#345938]"
            style={{ fontFamily: "'Edwardian Script ITC3', cursive" }}
          >
            Quốc Tân & Ngọc Trâm 
          </div>

          <div
            className="text-3xl md:text-4xl text-[#345938]"
            style={{ fontFamily: "'Edwardian Script ITC3', serif" }}
          >
            kính mời !
          </div>
        </motion.div>

        {/* Wedding date */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <p className="text-lg text-gray-600">20.06.2026</p>
        </motion.div>

        {/* Decorative divider */}
        <div className="mb-8 flex items-center justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#CFD6AD] to-transparent" />
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-gray-500 mt-6">
  <a
    href="https://orange-hill-077720b00.7.azurestaticapps.net/"
    target="_blank"
    rel="noopener noreferrer"
    // className="text-[#345938] font-medium hover:underline"
  >
    Thiệp cưới - Danh thiếp Tiến Đạt
  </a>
</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
