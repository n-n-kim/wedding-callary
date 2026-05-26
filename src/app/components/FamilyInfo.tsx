import { motion } from 'motion/react';
import { Users } from 'lucide-react';
import page3Bg from '../../assets/page3.jpg';

export function FamilyInfo() {
  return (
    <section className="relative overflow-hidden py-20 px-6" id="family">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${page3Bg})`,
          }}
        />

        {/* Layer trắng */}
        <div className="absolute inset-0 bg-white/65" />

        {/* Layer vàng nhạt mờ */}
        <div className="absolute inset-0 bg-[#F7F1D8]/35" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring' }}
            className="inline-flex items-center justify-center mb-6"
          >
            <Users className="w-8 h-8 text-[#345938]" />
          </motion.div>

          <h2
            className="text-4xl md:text-5xl text-[#345938] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Gia Đình Hai Bên
          </h2>
          <p className="text-gray-600">Trân trọng giới thiệu</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Nhà Trai */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/30 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-8 md:p-10"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#1C4F7C]/20 via-[#1C4F7C] to-[#1C4F7C]/20" />

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#1C4F7C] text-white text-sm tracking-[0.2em] uppercase shadow-sm">
                Nhà Trai
              </div>
            </div>

            <div className="space-y-8 text-center">
              <div>
                <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-gray-500 mb-3">
                  Cha
                </p>
                <p
                  className="text-[28px] md:text-[32px] leading-snug text-[#345938]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Ông Trịnh Quang Vinh
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#CFD6AD] to-transparent" />
              </div>

              <div>
                <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-gray-500 mb-3">
                  Mẹ
                </p>
                <p
                  className="text-[28px] md:text-[32px] leading-snug text-[#345938]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Bà Nguyễn Thị Thùy Trang
                </p>
              </div>
            </div>
          </motion.div>

          {/* Nhà Gái */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/30 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-8 md:p-10"
          >
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#F3BDCB]/20 via-[#F3BDCB] to-[#F3BDCB]/20" />

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#F3BDCB] text-[#345938] text-sm tracking-[0.2em] uppercase shadow-sm">
                Nhà Gái
              </div>
            </div>

            <div className="space-y-8 text-center">
              <div>
                <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-gray-500 mb-3">
                  Cha
                </p>
                <p
                  className="text-[28px] md:text-[32px] leading-snug text-[#345938]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Ông Trần Tuấn Kiệt
                </p>
              </div>

              <div className="flex items-center justify-center">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#F3BDCB] to-transparent" />
              </div>

              <div>
                <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-gray-500 mb-3">
                  Mẹ
                </p>
                <p
                  className="text-[28px] md:text-[32px] leading-snug text-[#345938]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Bà Ngô Ngọc Phỉ
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex items-center justify-center"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#CFD6AD] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
