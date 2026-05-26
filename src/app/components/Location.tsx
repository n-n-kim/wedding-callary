import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';
import page5 from '../../assets/callary.jpg';

export function Location() {
  const handleDirections = () => {
    window.open('https://share.google/g22kvBRaisPBkjhbc', '_blank');
  };

  return (
    <section
      className="py-20 px-6 bg-gradient-to-b from-[#FFFDF8] via-[#FCF7EA] to-[#F7F1D8]"
      id="location"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring' }}
            className="inline-flex items-center justify-center mb-6"
          >
            <MapPin className="w-8 h-8 text-[#345938]" />
          </motion.div>

          <h2
            className="text-4xl md:text-5xl text-[#345938] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Địa Điểm Tổ Chức
          </h2>

          <p className="text-gray-600">Lễ thành hôn</p>
        </div>

        <div className="bg-white/70 rounded-3xl overflow-hidden border border-[#CFD6AD]/30 shadow-xl backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-video relative overflow-hidden"
          >
            <img
              src={page5}
              alt="Wedding venue"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-[#345938] rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" fill="white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 md:p-10"
          >
            <h3
              className="text-3xl md:text-4xl text-[#345938] mb-4 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sảnh Magnolia - Lầu 5
            </h3>

            <p className="text-center text-gray-700 mb-8 leading-relaxed">
              Callary Wedding & Events - Trung tâm Tiệc cưới và Hội nghị Callary  
            </p>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDirections}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#345938] text-white rounded-full hover:bg-[#345938]/90 transition-colors shadow-lg"
              >
                <Navigation className="w-5 h-5" />
                <span>Xem chỉ đường</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
