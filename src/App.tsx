import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Calendar, Music, VolumeX, Coffee, Utensils, Compass, MessageCircle } from 'lucide-react';

// Define the shape of background floating elements
interface FloatingElement {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  symbol: string;
}

// Define animated SVG cat components for offline reliability and cute aesthetics
function PleadingCat() {
  return (
    <motion.div
      animate={{
        y: [0, -4, 4, -4, 0],
        rotate: [0, -1, 1, -1, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut"
      }}
      className="w-60 h-60 flex items-center justify-center"
    >
      <svg viewBox="0 0 240 240" className="w-full h-full filter drop-shadow-md">
        {/* Ears */}
        {/* Left Ear */}
        <motion.g
          animate={{ rotate: [0, -6, 0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.5, ease: "easeInOut" }}
          style={{ transformOrigin: "80px 110px" }}
        >
          <polygon points="50,65 80,105 30,105" fill="#ffffff" stroke="#ffa6c9" strokeWidth="4" strokeLinejoin="round" />
          <polygon points="53,73 75,102 37,102" fill="#ffa6c9" />
        </motion.g>

        {/* Right Ear */}
        <motion.g
          animate={{ rotate: [0, 6, 0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" }}
          style={{ transformOrigin: "160px 110px" }}
        >
          <polygon points="190,65 160,105 210,105" fill="#ffffff" stroke="#ffa6c9" strokeWidth="4" strokeLinejoin="round" />
          <polygon points="187,73 165,102 203,102" fill="#ffa6c9" />
        </motion.g>

        {/* Head */}
        <ellipse cx="120" cy="125" rx="85" ry="70" fill="#ffffff" stroke="#ffa6c9" strokeWidth="4" />

        {/* Big Pleading Eyes */}
        {/* Left Eye */}
        <g>
          <ellipse cx="85" cy="120" rx="14" ry="18" fill="#3d3546" />
          <motion.circle
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            cx="81" cy="113" r="5.5" fill="#ffffff"
          />
          <circle cx="90" cy="126" r="2.5" fill="#ffffff" />
        </g>

        {/* Right Eye */}
        <g>
          <ellipse cx="155" cy="120" rx="14" ry="18" fill="#3d3546" />
          <motion.circle
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
            cx="151" cy="113" r="5.5" fill="#ffffff"
          />
          <circle cx="160" cy="126" r="2.5" fill="#ffffff" />
        </g>

        {/* Eyebrows (Cute pleading tilt) */}
        <path d="M 72 96 Q 85 91 93 100" fill="none" stroke="#ffa6c9" strokeWidth="3" strokeLinecap="round" />
        <path d="M 168 96 Q 155 91 147 100" fill="none" stroke="#ffa6c9" strokeWidth="3" strokeLinecap="round" />

        {/* Blush Cheeks */}
        <ellipse cx="65" cy="138" rx="11" ry="6" fill="#ff7f9f" opacity="0.4" />
        <ellipse cx="175" cy="138" rx="11" ry="6" fill="#ff7f9f" opacity="0.4" />

        {/* Cute Mouth (w shape) */}
        <path d="M 110 133 Q 115 140 120 133 Q 125 140 130 133" fill="none" stroke="#ff7f9f" strokeWidth="3.5" strokeLinecap="round" />

        {/* Paws holding the bottom edge */}
        <ellipse cx="85" cy="178" rx="13" ry="9" fill="#ffffff" stroke="#ffa6c9" strokeWidth="3" />
        <ellipse cx="155" cy="178" rx="13" ry="9" fill="#ffffff" stroke="#ffa6c9" strokeWidth="3" />

        {/* Little pulsing hearts near head */}
        <motion.path
          d="M 40 130 C 35 120, 20 125, 30 140 L 40 150 L 50 140 C 60 125, 45 120, 40 130 Z"
          fill="#ff69b4"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: "40px 135px" }}
        />
        <motion.path
          d="M 200 130 C 195 120, 180 125, 190 140 L 200 150 L 210 140 C 220 125, 205 120, 200 130 Z"
          fill="#ff69b4"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 135px" }}
        />
      </svg>
    </motion.div>
  );
}

function CelebratingCat() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0, -10, 0],
        scale: [1, 1.03, 0.98, 1.03, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut"
      }}
      className="w-60 h-60 flex items-center justify-center"
    >
      <svg viewBox="0 0 240 240" className="w-full h-full filter drop-shadow-md">
        {/* Happy Ears Twitching */}
        <motion.g
          animate={{ rotate: [0, 8, -8, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ transformOrigin: "80px 110px" }}
        >
          <polygon points="50,65 80,105 30,105" fill="#ffffff" stroke="#ffa6c9" strokeWidth="4" strokeLinejoin="round" />
          <polygon points="53,73 75,102 37,102" fill="#ffa6c9" />
        </motion.g>

        <motion.g
          animate={{ rotate: [0, -8, 8, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.2, ease: "easeInOut" }}
          style={{ transformOrigin: "160px 110px" }}
        >
          <polygon points="190,65 160,105 210,105" fill="#ffffff" stroke="#ffa6c9" strokeWidth="4" strokeLinejoin="round" />
          <polygon points="187,73 165,102 203,102" fill="#ffa6c9" />
        </motion.g>

        {/* Head */}
        <ellipse cx="120" cy="125" rx="85" ry="70" fill="#ffffff" stroke="#ffa6c9" strokeWidth="4" />

        {/* Happy Closed Smiling Eyes (^^) */}
        <path d="M 70 120 Q 82 105 95 120" fill="none" stroke="#3d3546" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 145 120 Q 158 105 171 120" fill="none" stroke="#3d3546" strokeWidth="4.5" strokeLinecap="round" />

        {/* Blush Cheeks */}
        <ellipse cx="65" cy="132" rx="12" ry="7" fill="#ff7f9f" opacity="0.6" />
        <ellipse cx="175" cy="132" rx="12" ry="7" fill="#ff7f9f" opacity="0.6" />

        {/* Big Open Happy Smile */}
        <path d="M 112 133 Q 120 148 128 133 Z" fill="#ff69b4" stroke="#ffa6c9" strokeWidth="2.5" />

        {/* Raised Happy Paws */}
        <motion.ellipse
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          cx="45" cy="100" rx="11" ry="13" fill="#ffffff" stroke="#ffa6c9" strokeWidth="3"
        />
        <motion.ellipse
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1, delay: 0.1, ease: "easeInOut" }}
          cx="195" cy="100" rx="11" ry="13" fill="#ffffff" stroke="#ffa6c9" strokeWidth="3"
        />

        {/* Big Heart in the center of body */}
        <motion.path
          d="M 120 170 C 115 158, 98 163, 108 180 L 120 192 L 132 180 C 142 163, 125 158, 120 170 Z"
          fill="#ff1493"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          style={{ transformOrigin: "120px 175px" }}
        />

        {/* Animated stars around */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          style={{ transformOrigin: "120px 125px" }}
        >
          {/* Sparkles */}
          <polygon points="35,80 38,85 43,86 38,87 35,92 32,87 27,86 32,85" fill="#ffd700" />
          <polygon points="205,80 208,85 213,86 208,87 205,92 202,87 197,86 202,85" fill="#ffd700" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

export default function App() {

  // UI States
  const [yesSelected, setYesSelected] = useState(false);
  const [noAttempts, setNoAttempts] = useState(0);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [noDisappeared, setNoDisappeared] = useState(false);
  const [lastAttemptTime, setLastAttemptTime] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState<string>('Surprise me! 🎁');

  // Music States
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);

  // Element Refs
  const noButtonRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate background elements once using useMemo to avoid rerender shaking
  const floatingElements = useMemo<FloatingElement[]>(() => {
    const symbols = ['💖', '🌸', '🫧', '✨', '💕', '🎈'];
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage left
      size: Math.random() * 20 + 16, // size in px (16px to 36px)
      delay: Math.random() * 8, // delay in seconds
      duration: Math.random() * 12 + 10, // speed (10s to 22s)
      symbol: symbols[i % symbols.length],
    }));
  }, []);

  // Web Audio API music box synth playing a cute lullaby melody
  const toggleMusic = () => {
    if (isMusicPlaying) {
      setIsMusicPlaying(false);
      isPlayingRef.current = false;
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      return;
    }

    setIsMusicPlaying(true);
    isPlayingRef.current = true;

    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContextClass();
    audioContextRef.current = ctx;

    // A sweet pentatonic major chord progression (Cmaj7 -> Fmaj7 -> G6 -> Cmaj7)
    // to give a warm, nostalgic music box feel.
    const melody = [
      261.63, 329.63, 392.00, 493.88, // C, E, G, B (Cmaj7)
      349.23, 440.00, 523.25, 659.25, // F, A, C, E (Fmaj7)
      392.00, 493.88, 587.33, 783.99, // G, B, D, G (G6)
      523.25, 493.88, 440.00, 392.00  // C, B, A, G (Resolution)
    ];
    let noteIndex = 0;

    const playNext = () => {
      if (!isPlayingRef.current || !ctx) return;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine'; // Soft, warm wave
      osc.frequency.setValueAtTime(melody[noteIndex], ctx.currentTime);

      // Cute music box pluck envelope (instant attack, long exponential decay)
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.07, ctx.currentTime + 0.05); // low volume
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 1.3);

      noteIndex = (noteIndex + 1) % melody.length;
      setTimeout(playNext, 750); // play note every 750ms
    };

    playNext();
  };

  // Clean up audio context on unmount
  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  // Proximity detection and evasive movement
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (yesSelected || noDisappeared) return;
      if (!noButtonRef.current || !containerRef.current) return;

      const button = noButtonRef.current;
      const container = containerRef.current;

      const buttonRect = button.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Button Center Coordinates relative to viewport
      const bx = buttonRect.left + buttonRect.width / 2;
      const by = buttonRect.top + buttonRect.height / 2;

      // Pointer coordinates
      const px = e.clientX;
      const py = e.clientY;

      // Distance from pointer to button center
      const dx = px - bx;
      const dy = py - by;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Detection threshold (trigger evasion if within 95 pixels)
      const threshold = 95;

      if (distance < threshold) {
        const now = Date.now();

        // Increment attempts with a cooldown to ensure deliberate actions
        if (now - lastAttemptTime > 600) {
          setLastAttemptTime(now);
          setNoAttempts((prev) => {
            const next = prev + 1;
            if (next >= 5) {
              // Float away animation starts
              setTimeout(() => {
                setNoDisappeared(true);
              }, 400);
            }
            return next;
          });
        }

        // Avoid division by zero
        const len = distance || 1;
        // Direction vector from finger to button
        const dirX = -dx / len;
        const dirY = -dy / len;

        // Evasion speed factor based on proximity (closer = faster zip)
        const intensity = (threshold - distance) / threshold;
        const basePush = 130;
        const extraPush = intensity * 70;
        const pushX = dirX * (basePush + extraPush);
        const pushY = dirY * (basePush + extraPush);

        // Intended target coordinates for button center
        let targetBx = (buttonRect.left + buttonRect.width / 2) + pushX;
        let targetBy = (buttonRect.top + buttonRect.height / 2) + pushY;

        // Container boundary restrictions to keep button visible inside the card
        const padding = 20;
        const minX = containerRect.left + buttonRect.width / 2 + padding;
        const maxX = containerRect.right - buttonRect.width / 2 - padding;
        const minY = containerRect.top + buttonRect.height / 2 + padding;
        const maxY = containerRect.bottom - buttonRect.height / 2 - padding;

        // Clamp button center to container safe area
        targetBx = Math.max(minX, Math.min(targetBx, maxX));
        targetBy = Math.max(minY, Math.min(targetBy, maxY));

        // Derive initial center relative to viewport by subtracting current relative positions
        const bxInitial = (buttonRect.left + buttonRect.width / 2) - noButtonPos.x;
        const byInitial = (buttonRect.top + buttonRect.height / 2) - noButtonPos.y;

        // Set target translate values
        setNoButtonPos({
          x: targetBx - bxInitial,
          y: targetBy - byInitial,
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [noButtonPos, yesSelected, noDisappeared, lastAttemptTime]);

  // Yes Celebration Confetti Storm
  const handleYesClick = () => {
    setYesSelected(true);

    const duration = 6 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 60 * (timeLeft / duration);

      // Spray from left side of screen
      confetti({
        particleCount,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ['#ff69b4', '#ff1493', '#ffc0cb', '#ffd700', '#da70d6'],
      });

      // Spray from right side of screen
      confetti({
        particleCount,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ['#ff69b4', '#ff1493', '#ffc0cb', '#ffd700', '#da70d6'],
      });
    }, 250);

    // Initial big burst
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#ff8da1', '#ff1493', '#ffd700', '#9b5de5'],
    });
  };

  // Pre-fill caption text depending on attempts
  const getCaption = () => {
    if (noAttempts === 0) return "Choose wisely... 💝";
    if (noAttempts === 1) return "Wait, what? 😮 Try again!";
    if (noAttempts === 2) return "Hey! Catch me if you can! 🏃‍♀️";
    if (noAttempts === 3) return "Anti-gravity forcefield active! 🚀";
    if (noAttempts === 4) return "Almost had it! 🤪 One last try...";
    return "Oops! It floated away! 🎈";
  };

  const MESSENGER_USERNAME = 'your.username'; // Replace with your Messenger/Facebook username
  const getMessengerLink = () => {
    const text = `Yes! I would love to go on a date with you! 💖 I select: ${selectedActivity} ✨`;
    return `https://m.me/${MESSENGER_USERNAME}?text=${encodeURIComponent(text)}`;
  };

  const activities = [
    { name: 'Sushi date 🍣', icon: Utensils },
    { name: 'Coffee & walk ☕', icon: Coffee },
    { name: 'Arcade / Games 🎮', icon: Compass },
    { name: 'Surprise me! 🎁', icon: Sparkles },
  ];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-[#fff0f5] via-[#ffe4e1] to-[#f3e5f5] overflow-hidden select-none no-select">
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floatingElements.map((item) => (
          <motion.div
            key={item.id}
            className="absolute bottom-0 text-pink-300 opacity-0"
            style={{
              left: `${item.x}%`,
              fontSize: `${item.size}px`,
            }}
            animate={{
              y: ['105vh', '-15vh'],
              x: ['0px', `${Math.sin(item.id) * 35}px`],
              opacity: [0, 0.7, 0.7, 0],
              rotate: [0, item.id % 2 === 0 ? 360 : -360],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: 'linear',
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>

      {/* Main Glassmorphic Container */}
      <div
        ref={containerRef}
        className="relative w-full max-w-md bg-white/70 backdrop-blur-lg rounded-3xl border border-white/40 shadow-2xl p-6 md:p-8 flex flex-col items-center justify-between text-center z-10 min-h-[520px] transition-all duration-300"
      >
        
        {/* Top Control Bar (Music & Heart Decoration) */}
        <div className="w-full flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 bg-pink-100/50 px-3 py-1 rounded-full text-pink-600 font-bold text-xs">
            <Heart className="w-3.5 h-3.5 fill-pink-500 stroke-pink-500 animate-pulse" />
            <span>Special Invitation</span>
          </div>
          <button
            onClick={toggleMusic}
            className={`p-2.5 rounded-full border border-pink-200/50 shadow-sm transition-all duration-200 ${
              isMusicPlaying 
                ? 'bg-pink-200 text-pink-700 animate-bounce' 
                : 'bg-white/80 text-pink-400 hover:text-pink-600'
            }`}
            title={isMusicPlaying ? 'Stop music box' : 'Play cute lofi music'}
          >
            {isMusicPlaying ? <Music className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!yesSelected ? (
            /* ASKING STATE */
            <motion.div
              key="asking-state"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="flex flex-col items-center flex-1 w-full"
            >
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#d81b60] tracking-tight drop-shadow-sm font-quicksand leading-tight">
                Will you go on a date with me? 🥺
              </h1>

              {/* Centered Cat SVG Card */}
              <div className="my-2">
                <PleadingCat />
              </div>

              {/* Status Hint */}
              <p className="text-[#a855f7] font-bold text-sm h-6 mb-6 tracking-wide drop-shadow-sm">
                {getCaption()}
              </p>

              {/* Button Container */}
              <div className="flex items-center justify-center gap-6 w-full relative h-20">
                
                {/* YES BUTTON (Pulses gently) */}
                <motion.button
                  onClick={handleYesClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    scale: {
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-extrabold text-lg rounded-2xl shadow-lg hover:shadow-pink-300/50 active:scale-95 transition-all duration-200 cursor-pointer min-w-[130px]"
                >
                  Yes! 💖
                </motion.button>

                {/* NO BUTTON (Evading forcefield & Floating) */}
                <AnimatePresence>
                  {!noDisappeared && (
                    <motion.div
                      ref={noButtonRef}
                      style={{ x: noButtonPos.x, y: noButtonPos.y }}
                      exit={{
                        y: -500,
                        opacity: 0,
                        scale: 0.4,
                        transition: { duration: 1.2, ease: "easeIn" },
                      }}
                      transition={{ type: "spring", stiffness: 220, damping: 17 }}
                      className="touch-none select-none z-20 absolute"
                    >
                      <motion.button
                        type="button"
                        animate={noAttempts < 5 ? {
                          y: [0, -6, 5, -5, 0],
                          x: [0, 5, -4, 4, 0],
                        } : {}}
                        transition={{
                          repeat: Infinity,
                          duration: 5.5,
                          ease: "easeInOut",
                        }}
                        className="px-6 py-3.5 bg-white/90 text-gray-500 font-extrabold text-md rounded-2xl border border-pink-100 shadow-md min-w-[110px] cursor-pointer"
                      >
                        No 😢
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            /* CELEBRATION STATE */
            <motion.div
              key="celebration-state"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="flex flex-col items-center flex-1 w-full"
            >
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#d81b60] leading-tight drop-shadow-sm">
                Yay! Best decision ever! 💖 See you soon!
              </h1>

              {/* Celebrating Cat SVG Card */}
              <div className="my-2">
                <CelebratingCat />
              </div>

              {/* Planning details */}
              <div className="w-full bg-pink-50/60 rounded-2xl p-4 border border-pink-100/40 text-left mb-5">
                <span className="text-xs uppercase font-extrabold text-pink-500 tracking-wider flex items-center gap-1 mb-2">
                  <Calendar className="w-3.5 h-3.5" /> What should we do?
                </span>
                
                <div className="grid grid-cols-2 gap-2">
                  {activities.map((act) => {
                    const IconComp = act.icon;
                    const isSel = selectedActivity === act.name;
                    return (
                      <button
                        key={act.name}
                        onClick={() => setSelectedActivity(act.name)}
                        className={`p-2.5 rounded-xl border text-xs font-bold transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                          isSel 
                            ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white border-pink-400 shadow-sm' 
                            : 'bg-white text-gray-600 border-gray-200/50 hover:bg-gray-50'
                        }`}
                      >
                        <IconComp className={`w-3.5 h-3.5 ${isSel ? 'text-white' : 'text-pink-400'}`} />
                        <span>{act.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Messenger confirmation button */}
              <a
                href={getMessengerLink()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-gradient-to-r from-[#0084ff] to-[#a200ff] text-white font-extrabold rounded-2xl shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2.5 transition-all duration-200 transform hover:scale-[1.02] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#0084ff]" />
                <span>Send Messenger RSVP! 💬</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Small branding or cute tag at bottom */}
        <div className="mt-5 text-[10px] font-bold text-pink-400/80 tracking-widest uppercase">
          Made with Love & Anti-Gravity 🪐
        </div>
      </div>
    </div>
  );
}
