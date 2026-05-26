import { motion } from 'motion/react';
import { Calendar, Clock, Heart } from 'lucide-react';
import page3Bg from '../../assets/page4.jpg';

export function WeddingSchedule() {
  return (
    <section
      className="relative overflow-hidden py-20 px-6"
      id="schedule"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${page3Bg})`,
          }}
        />

        {/* Layer trắng mờ */}
        <div className="absolute inset-0 bg-white/60" />

        {/* Layer vàng nhạt mờ */}
        <div className="absolute inset-0 bg-[#F7F1D8]/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 z-0 w-64 h-64 bg-[#5C4033]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 z-0 w-64 h-64 bg-[#EEDFCA]/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl text-[#5C4033] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Lễ Thành Hôn
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-600"
          >
            Trân trọng kính mời quý khách tham dự
          </motion.p>
        </div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/30 shadow-[0_18px_60px_rgba(92,64,51,0.12)] backdrop-blur-md"
        >
          {/* viền sáng nhẹ phía trên */}
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#CFD6AD] to-transparent" />

          {/* glow nền nhẹ */}
          <div className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#EEDFCA]/30 blur-3xl" />

          <div className="relative p-8 md:p-12">
            <div className="max-w-lg mx-auto">
              {/* Date */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-4 rounded-[28px] border border-[#EEDFCA]/50 bg-white/75 px-6 py-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#5C4033] flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1 pt-1">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#9A8F6A] mb-2">
                    Thời gian tổ chức
                  </p>
                  <p className="text-lg md:text-xl text-gray-800 font-medium">
                    Thứ Bảy, 20 tháng 06 năm 2026
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Ngày 06 tháng 05 năm Bính Ngọ
                  </p>
                </div>
              </motion.div>

              {/* Divider nổi bật ở giữa */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.68 }}
                className="relative flex items-center justify-center py-6"
              >
                <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D8CDA6] to-transparent" />
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border border-[#EEDFCA] bg-white shadow-md">
                  <Heart className="w-5 h-5 text-[#CFB57C] fill-[#CFB57C]/30" />
                </div>
              </motion.div>

              {/* Time */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="flex items-start gap-4 rounded-[28px] border border-[#5C4033]/15 bg-white/75 px-6 py-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#EEDFCA] flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-[#5C4033]" />
                </div>

                <div className="flex-1 pt-1">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#9A8F6A] mb-2">
                    Khung giờ buổi lễ
                  </p>
                  <p className="text-lg md:text-xl text-gray-800 font-medium">
                    Đón khách: 18h00
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Làm lễ: 19h00
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-gray-500 italic">
            Sự hiện diện của các bạn là niềm vinh hạnh cho gia đình chúng tôi
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}