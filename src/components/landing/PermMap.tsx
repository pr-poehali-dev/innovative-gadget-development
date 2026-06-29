import { motion } from "framer-motion"

export default function PermMap({ isActive }: { isActive: boolean }) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, x: 80 }}
      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      {/* Glow behind map */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-[#FF4D00]/20 blur-3xl" />
      </div>

      <motion.div
        animate={isActive ? { rotateY: [8, -4, 8], rotateX: [6, 3, 6] } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", perspective: 800 }}
        className="relative drop-shadow-2xl"
      >
        {/* Shadow layer (3D depth) */}
        <svg
          viewBox="0 0 400 500"
          className="absolute top-3 left-3 w-36 md:w-44 lg:w-52 opacity-30 blur-sm"
          fill="#FF4D00"
        >
          <path d="M200 30 L230 45 L260 40 L280 60 L300 55 L320 75 L315 100 L330 120 L325 145 L340 165 L335 190 L350 210 L340 235 L320 250 L310 275 L290 290 L275 315 L255 330 L240 355 L220 365 L200 380 L180 365 L160 355 L145 330 L125 315 L110 290 L90 275 L80 250 L60 235 L50 210 L65 190 L60 165 L75 145 L70 120 L85 100 L80 75 L100 55 L120 40 L140 45 L160 35 L180 25 Z" />
        </svg>

        {/* Main map shape — Пермский край */}
        <svg
          viewBox="0 0 400 500"
          className="w-36 md:w-44 lg:w-52 relative z-10"
          fill="none"
        >
          <defs>
            <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B2B" />
              <stop offset="100%" stopColor="#CC3A00" />
            </linearGradient>
            <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C55" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FF4D00" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Основная форма Пермского края (стилизованная) */}
          <path
            d="M195 28 L218 35 L245 32 L268 48 L290 44 L312 62 L318 88 L335 108 L332 136 L348 158 L344 185 L358 208 L346 232 L324 246 L314 272 L294 288 L278 314 L256 328 L242 354 L220 368 L200 378 L180 368 L158 354 L144 328 L122 314 L106 288 L86 272 L76 246 L54 232 L42 208 L56 185 L52 158 L68 136 L65 108 L82 88 L88 62 L110 44 L132 48 L155 32 L178 35 Z"
            fill="url(#mapGrad)"
            filter="url(#glow)"
            strokeWidth="1.5"
            stroke="#FF6B2B"
          />

          {/* Highlight — верхний блик */}
          <path
            d="M195 28 L218 35 L245 32 L268 48 L290 44 L312 62 L318 88 L300 80 L270 58 L240 42 L200 36 Z"
            fill="white"
            opacity="0.12"
          />

          {/* Внутренние детали — реки/рельеф */}
          <path d="M200 80 Q210 140 195 200 Q185 260 200 320" stroke="white" strokeWidth="1" strokeOpacity="0.2" fill="none" strokeDasharray="4 6" />
          <path d="M150 120 Q175 160 170 220" stroke="white" strokeWidth="0.8" strokeOpacity="0.15" fill="none" strokeDasharray="3 5" />
          <path d="M250 100 Q230 150 240 210" stroke="white" strokeWidth="0.8" strokeOpacity="0.15" fill="none" strokeDasharray="3 5" />

          {/* Точка Перми */}
          <motion.circle
            cx="200"
            cy="295"
            r="7"
            fill="white"
            animate={isActive ? { r: [7, 10, 7], opacity: [1, 0.7, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="200"
            cy="295"
            r="14"
            fill="white"
            fillOpacity="0"
            stroke="white"
            strokeWidth="1.5"
            animate={isActive ? { r: [14, 22, 14], opacity: [0.6, 0, 0.6] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Контур края */}
          <path
            d="M195 28 L218 35 L245 32 L268 48 L290 44 L312 62 L318 88 L335 108 L332 136 L348 158 L344 185 L358 208 L346 232 L324 246 L314 272 L294 288 L278 314 L256 328 L242 354 L220 368 L200 378 L180 368 L158 354 L144 328 L122 314 L106 288 L86 272 L76 246 L54 232 L42 208 L56 185 L52 158 L68 136 L65 108 L82 88 L88 62 L110 44 L132 48 L155 32 L178 35 Z"
            fill="none"
            stroke="url(#edgeGrad)"
            strokeWidth="2"
          />
        </svg>

        {/* Подпись */}
        <motion.div
          className="absolute bottom-[-2rem] left-0 right-0 text-center"
          animate={isActive ? { opacity: [0.6, 1, 0.6] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase">Пермский край</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}