import { motion } from 'motion/react';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import pic1 from '../../assets/pic1.png';
import pic2 from '../../assets/pic2.png';
import pic3 from '../../assets/pic3.png';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { url: pic1, alt: 'Ảnh cưới 1' },
    { url: pic2, alt: 'Ảnh cưới 2' },
    { url: pic3, alt: 'Ảnh cưới 3' },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    setSelectedImage((prev) =>
      prev === null ? null : prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setSelectedImage((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );
  };

  return (
    <section
      className="py-20 px-6 bg-gradient-to-b from-white to-[#F7F1E8]"
      id="gallery"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl text-[#5C4033] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Album Ảnh Cưới
          </h2>
          <p className="text-[#8A6A57]">
            Những khoảnh khắc đẹp nhất của chúng tôi
          </p>
        </div>

        {/* Gallery dạng masonry, giữ nguyên tỉ lệ gốc của ảnh */}
        <div className="columns-1 md:columns-2 gap-6 [column-fill:_balance]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="mb-6 break-inside-avoid cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-[28px] shadow-md hover:shadow-xl transition-all duration-300 bg-white p-2">
                <div className="relative overflow-hidden rounded-[22px]">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-auto block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white text-sm tracking-wide">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
