import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { PersonalInvitation } from './components/PersonalInvitation';
import { CoupleIntro } from './components/CoupleIntro';
import { FamilyInfo } from './components/FamilyInfo';
import { WeddingSchedule } from './components/WeddingSchedule';
import { Location } from './components/Location';
import { Countdown } from './components/Countdown';
import { RSVP } from './components/RSVP';
import { AdminResponses } from './components/AdminResponses';
import { Gallery } from './components/Gallery';
import { Gift } from './components/Gift';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

export default function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [guestName, setGuestName] = useState<string>('');

  useEffect(() => {
    // Get guest name from URL query param
    const params = new URLSearchParams(window.location.search);
    const guest = params.get('guest');
    if (guest) {
      setGuestName(decodeURIComponent(guest));
    }
  }, []);

  const openInvitation = () => {
    setIsInvitationOpen(true);
  };

  if (!isInvitationOpen) {
    return <Hero onOpen={openInvitation} />;
  }

  return (
    <div className="min-h-screen">
      <PersonalInvitation guestName={guestName} />
      <CoupleIntro />
      <FamilyInfo />
      <WeddingSchedule />
      <Location />
      <Countdown />
      <RSVP />
      <AdminResponses />
      <Gallery />
      <Gift />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
