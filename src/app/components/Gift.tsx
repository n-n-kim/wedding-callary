import { motion } from 'motion/react';
import { Gift as GiftIcon, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import qrCode from '../../assets/qr-code.png';

export function Gift() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankAccount = {
    bank: 'VietinBank',
    accountNumber: '12228111',
    accountName: 'TRAN NGOC TRAM',
    qrCode,
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#EEDFCA]/20 to-white" id="gift">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring' }}
            className="inline-flex items-center justify-center mb-6"
          >
            <GiftIcon className="w-8 h-8 text-[#345938]" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl text-[#345938] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Mừng Cưới
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Sự hiện diện của các bạn là món quà quý giá nhất với chúng mình.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-[#CFD6AD]/30"
        >
          <div className="flex justify-center mb-4">
            <div className="w-56 h-56 bg-gradient-to-br from-[#EEDFCA]/30 to-[#F3BDCB]/20 rounded-2xl flex items-center justify-center border border-[#CFD6AD]/30">
              <img
                src={bankAccount.qrCode}
                alt={`QR ${bankAccount.accountName}`}
                className="w-48 h-48 rounded-xl object-cover bg-white p-2"
              />
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mb-8">Quét mã để chuyển khoản</p>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Ngân hàng</p>
              <p className="text-lg text-[#345938]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {bankAccount.bank}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Số tài khoản</p>
              <div className="flex items-center justify-between bg-[#EEDFCA]/30 rounded-xl px-4 py-3">
                <p className="text-lg text-[#345938]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {bankAccount.accountNumber}
                </p>
                <button
                  onClick={() => copyToClipboard(bankAccount.accountNumber, 'account')}
                  className="ml-2 p-2 hover:bg-white rounded-lg transition-colors"
                  title="Copy"
                >
                  {copiedField === 'account' ? (
                    <Check className="w-5 h-5 text-[#CFD6AD]" />
                  ) : (
                    <Copy className="w-5 h-5 text-[#345938]" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Chủ tài khoản</p>
              <div className="flex items-center justify-between bg-[#EEDFCA]/30 rounded-xl px-4 py-3">
                <p className="text-lg text-[#345938]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {bankAccount.accountName}
                </p>
                <button
                  onClick={() => copyToClipboard(bankAccount.accountName, 'name')}
                  className="ml-2 p-2 hover:bg-white rounded-lg transition-colors"
                  title="Copy"
                >
                  {copiedField === 'name' ? (
                    <Check className="w-5 h-5 text-[#CFD6AD]" />
                  ) : (
                    <Copy className="w-5 h-5 text-[#345938]" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >

        </motion.div>
      </motion.div>
    </section>
  );
}
