import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { CheckCircle2, LogIn, Send } from 'lucide-react';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useAuth } from '../providers/AuthProvider';
import { db } from '../../lib/firebase';

const ATTENDING_VALUE = 'Tôi sẽ tham dự';
const DECLINED_VALUE = 'Rất tiếc tôi không thể tham dự';

export function RSVP() {
  const { isConfigured, isLoading, signInWithGoogle, user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    attendance: '',
    guests: '1',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!user) {
      return;
    }

    setFormData((current) => ({
      ...current,
      name: current.name || user.displayName || '',
    }));
  }, [user]);

  useEffect(() => {
    async function loadExistingResponse() {
      if (!user || !db) {
        return;
      }

      try {
        const responseRef = doc(db, 'rsvps', user.uid);
        const responseSnap = await getDoc(responseRef);

        if (!responseSnap.exists()) {
          return;
        }

        const savedResponse = responseSnap.data();
        setFormData({
          attendance: savedResponse.attendance ?? '',
          guests: String(savedResponse.guests ?? '1'),
          message: savedResponse.message ?? '',
          name: savedResponse.name ?? user.displayName ?? '',
        });
      } catch (error) {
        console.error(error);
      }
    }

    void loadExistingResponse();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!isConfigured || !db) {
      setErrorMessage('Firebase chưa được cấu hình. Hãy hoàn tất phần thiết lập trước.');
      return;
    }

    if (!user) {
      setErrorMessage('Vui lòng đăng nhập Google trước khi gửi phản hồi.');
      return;
    }

    setIsSubmitting(true);

    try {
      const responseRef = doc(db, 'rsvps', user.uid);
      const existingResponse = await getDoc(responseRef);
      const guests = formData.attendance === ATTENDING_VALUE ? Number(formData.guests || 1) : 0;

      await setDoc(
        responseRef,
        {
          attendance: formData.attendance,
          createdAt: existingResponse.exists() ? existingResponse.data().createdAt : serverTimestamp(),
          email: user.email ?? '',
          guests,
          message: formData.message.trim(),
          name: formData.name.trim(),
          photoURL: user.photoURL ?? '',
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

      setIsSubmitted(true);

      window.setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      setErrorMessage('Có lỗi khi gửi xác nhận. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage('');
    setIsSigningIn(true);

    try {
      await signInWithGoogle();
    } catch (error) {
      console.error(error);

      const code = typeof error === 'object' && error && 'code' in error ? String(error.code) : '';

      if (code === 'auth/popup-blocked') {
        setErrorMessage('Trình duyệt đang chặn cửa sổ đăng nhập. Hãy cho phép popup rồi thử lại.');
      } else if (code === 'auth/popup-closed-by-user') {
        setErrorMessage('Bạn đã đóng cửa sổ đăng nhập trước khi hoàn tất.');
      } else if (code === 'auth/unauthorized-domain') {
        setErrorMessage('Domain hiện tại chưa được thêm vào Authorized domains của Firebase.');
      } else if (code === 'auth/operation-not-allowed') {
        setErrorMessage('Google Sign-In chưa được bật trong Firebase Authentication.');
      } else {
        setErrorMessage('Không thể đăng nhập Google. Kiểm tra lại cấu hình Firebase rồi thử lại.');
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  return (
    <section className="py-20 px-6 bg-white" id="rsvp">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl text-[#5C4033] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Xác Nhận Tham Dự
          </h2>
          <p className="text-gray-600">Vui lòng xác nhận sự có mặt của bạn để chúng tôi có thể chuẩn bị chu đáo hơn</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#EEDFCA]/30 to-[#F3BDCB]/20 rounded-3xl p-8 md:p-10 border border-[#CFD6AD]/30"
        >
          {!isConfigured ? (
            <div className="rounded-2xl border border-[#F3BDCB]/40 bg-white/80 p-6 text-center text-gray-700">
              Firebase chưa được cấu hình. Hãy thêm các biến môi trường trước khi dùng tính năng RSVP.
            </div>
          ) : isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <CheckCircle2 className="w-16 h-16 text-[#CFD6AD] mx-auto mb-4" />
              <h3
                className="text-2xl text-[#5C4033] mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Cảm ơn bạn!
              </h3>
              <p className="text-gray-700">Phản hồi RSVP của bạn đã được ghi nhận.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Họ và tên <span className="text-[#F3BDCB]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#CFD6AD]/30 bg-white focus:outline-none focus:border-[#5C4033] transition-colors"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>

                <div>
                  <label htmlFor="attendance" className="block text-sm text-gray-700 mb-2">
                    Trạng thái tham dự <span className="text-[#F3BDCB]">*</span>
                  </label>
                  <select
                    id="attendance"
                    name="attendance"
                    required
                    value={formData.attendance}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#CFD6AD]/30 bg-white focus:outline-none focus:border-[#5C4033] transition-colors"
                  >
                    <option value="">Chọn trạng thái</option>
                    <option value={ATTENDING_VALUE}>{ATTENDING_VALUE}</option>
                    <option value={DECLINED_VALUE}>{DECLINED_VALUE}</option>
                  </select>
                </div>

                {formData.attendance === ATTENDING_VALUE ? (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                    <label htmlFor="guests" className="block text-sm text-gray-700 mb-2">
                      Số lượng người tham dự
                    </label>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      max="50"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#CFD6AD]/30 bg-white focus:outline-none focus:border-[#5C4033] transition-colors"
                      placeholder="Nhập số người"
                    />
                  </motion.div>
                ) : null}

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                    Lời nhắn hoặc ghi chú
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#CFD6AD]/30 bg-white focus:outline-none focus:border-[#5C4033] transition-colors resize-none"
                    placeholder="Gửi lời chúc đến cô dâu chú rể..."
                  />
                </div>

                <div className="rounded-2xl border border-[#CFD6AD]/30 bg-white/80 px-4 py-4">
                  {user ? (
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Tài khoản xác nhận</p>
                        <p className="text-[#5C4033]">{user.displayName || user.email}</p>
                      </div>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <p className="text-sm text-gray-600">
                        Bạn cần đăng nhập Google để gửi xác nhận tham dự.
                      </p>
                      <button
                        type="button"
                        disabled={isLoading || isSigningIn}
                        onClick={() => void handleGoogleSignIn()}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#5C4033]/20 px-5 py-2.5 text-sm text-[#5C4033] transition hover:bg-[#5C4033] hover:text-white disabled:opacity-60"
                      >
                        <LogIn className="h-4 w-4" />
                        {isLoading ? 'Đang kiểm tra...' : isSigningIn ? 'Đang mở đăng nhập...' : 'Đăng nhập với Google'}
                      </button>
                    </div>
                  )}
                </div>

                {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting || !user}
                  className="w-full py-4 bg-[#5C4033] text-white rounded-full hover:bg-[#5C4033]/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Đang gửi...' : 'Gửi xác nhận'}</span>
                </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
