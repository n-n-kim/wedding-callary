import { useEffect, useMemo, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { ChevronDown, LogOut, Users } from 'lucide-react';
import { useAuth } from '../providers/AuthProvider';
import { db } from '../../lib/firebase';

type RSVPRecord = {
  id: string;
  attendance: string;
  createdAt?: { seconds: number };
  email: string;
  guests: number;
  message: string;
  name: string;
  photoURL?: string;
  updatedAt?: { seconds: number };
};

const ATTENDING_VALUE = 'Tôi sẽ tham dự';

function formatDate(value?: { seconds: number }) {
  if (!value?.seconds) {
    return 'Vừa cập nhật';
  }

  return new Intl.DateTimeFormat('vi-VN', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(value.seconds * 1000));
}

export function AdminResponses() {
  const { isAdmin, signOutUser, user } = useAuth();
  const [items, setItems] = useState<RSVPRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAdmin || !db) {
      setIsLoading(false);
      setItems([]);
      return;
    }

    const responsesQuery = query(collection(db, 'rsvps'), orderBy('updatedAt', 'desc'));
    const unsubscribe = onSnapshot(responsesQuery, (snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<RSVPRecord, 'id'>) })));
      setIsLoading(false);
    });

    return unsubscribe;
  }, [isAdmin]);

  const stats = useMemo(() => {
    const attending = items.filter((item) => item.attendance === ATTENDING_VALUE);
    const declined = items.length - attending.length;
    const totalGuests = attending.reduce((sum, item) => sum + Number(item.guests || 0), 0);

    return {
      attending: attending.length,
      declined,
      totalGuests,
      totalResponses: items.length,
    };
  }, [items]);

  if (!isAdmin) {
    return null;
  }

  return (
    <section className="bg-[#faf6ef] px-6 py-20" id="admin-rsvp">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#8c6b5a]">Admin</p>
            <h2
              className="mb-3 text-4xl text-[#345938] md:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Danh sách phản hồi RSVP
            </h2>
            <p className="text-gray-600">
              Chỉ hiển thị nhanh trạng thái tham gia, bấm vào từng người để xem chi tiết.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-[#CFD6AD]/50 bg-white px-4 py-3 text-sm text-gray-700">
              {user?.email}
            </div>
            <button
              type="button"
              onClick={() => void signOutUser()}
              className="inline-flex items-center gap-2 rounded-full border border-[#345938]/20 px-5 py-3 text-sm text-[#345938] transition hover:bg-[#345938] hover:text-white"
            >
              <LogOut className="h-4 w-4" />
              Đăng xuất
            </button>
          </div>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-[#CFD6AD]/40 bg-white p-5">
            <p className="mb-2 text-sm text-gray-500">Tổng phản hồi</p>
            <p className="text-3xl text-[#345938]">{stats.totalResponses}</p>
          </div>
          <div className="rounded-3xl border border-[#CFD6AD]/40 bg-white p-5">
            <p className="mb-2 text-sm text-gray-500">Sẽ tham dự</p>
            <p className="text-3xl text-[#345938]">{stats.attending}</p>
          </div>
          <div className="rounded-3xl border border-[#CFD6AD]/40 bg-white p-5">
            <p className="mb-2 text-sm text-gray-500">Không tham dự</p>
            <p className="text-3xl text-[#345938]">{stats.declined}</p>
          </div>
          <div className="rounded-3xl border border-[#CFD6AD]/40 bg-white p-5">
            <p className="mb-2 text-sm text-gray-500">Số khách dự kiến</p>
            <p className="text-3xl text-[#345938]">{stats.totalGuests}</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#CFD6AD]/40 bg-white p-6 md:p-8">
          {isLoading ? (
            <p className="text-gray-600">Đang tải phản hồi...</p>
          ) : items.length === 0 ? (
            <div className="py-12 text-center text-gray-600">
              <Users className="mx-auto mb-4 h-12 w-12 text-[#CFD6AD]" />
              Chưa có phản hồi nào.
            </div>
          ) : (
            <div className="grid gap-4">
              {items.map((item) => (
                <details
                  key={item.id}
                  className="group rounded-3xl border border-[#CFD6AD]/30 bg-[#fffdfa] px-5 py-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      {item.photoURL ? (
                        <img
                          src={item.photoURL}
                          alt={item.name}
                          className="h-11 w-11 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEDFCA] text-[#345938]">
                          {item.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="truncate text-lg text-[#345938]">{item.name}</h3>
                        <p className="text-sm text-gray-500">{formatDate(item.updatedAt || item.createdAt)}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-sm ${
                          item.attendance === ATTENDING_VALUE
                            ? 'bg-[#CFD6AD]/40 text-[#4e5b34]'
                            : 'bg-[#F3BDCB]/35 text-[#8c4d64]'
                        }`}
                      >
                        {item.attendance === ATTENDING_VALUE ? 'Có tham gia' : 'Không tham gia'}
                      </span>
                      <ChevronDown className="h-5 w-5 text-gray-400 transition group-open:rotate-180" />
                    </div>
                  </summary>

                  <div className="mt-4 grid gap-3 border-t border-[#CFD6AD]/20 pt-4 text-sm text-gray-700">
                    <p>Email: {item.email}</p>
                    <p>Số lượng khách: {item.guests}</p>
                    <p>Phản hồi chi tiết: {item.attendance}</p>
                    {item.message ? (
                      <p className="rounded-2xl bg-white px-4 py-3 text-gray-700">{item.message}</p>
                    ) : (
                      <p className="text-gray-400">Không có lời nhắn.</p>
                    )}
                  </div>
                </details>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
