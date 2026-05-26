import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function Countdown() {
  const weddingDate = new Date('2026-06-20T18:00:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Ngày' },
    { value: timeLeft.hours, label: 'Giờ' },
    { value: timeLeft.minutes, label: 'Phút' },
    { value: timeLeft.seconds, label: 'Giây' },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#F3BDCB]/10 to-white" id="countdown">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring' }}
            className="inline-flex items-center justify-center mb-6"
          >
            <Clock className="w-8 h-8 text-[#345938]" />
          </motion.div>

          <h2
            className="text-4xl md:text-5xl text-[#345938] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Đếm Ngược Đến Ngày Cưới
          </h2>

          <p className="text-gray-600">Thời gian còn lại</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, type: 'spring' }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#CFD6AD]/30"
            >
              <div
                className="text-4xl md:text-5xl text-[#345938] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {String(unit.value).padStart(2, '0')}
              </div>

              <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p
            className="text-xl text-gray-700 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Hãy đánh dấu ngày này trong lịch của bạn
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
