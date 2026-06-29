import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"
import PermMap from "./PermMap"

const LOGO_URL = 'https://cdn.poehali.dev/projects/89c0a7a0-04c3-42ad-b9f8-d18d1f152981/bucket/c3ec2cd8-2afc-43b7-a3b8-4441708e9a43.jpg'

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, tariffs, showLogo, showMap, bgImage }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-hidden">
      {bgImage && (
        <>
          <motion.div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${bgImage})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/70 z-0" />
        </>
      )}
      <div className="relative z-10 flex flex-col justify-center h-full">
        {showLogo && (
          <motion.div
            className="absolute top-4 left-0 md:top-6"
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1, rotate: [0, -8, 8, -4, 4, 0], scale: [1, 1.08, 1] } : {}}
            transition={{ duration: 0.6, rotate: { duration: 1.2, delay: 0.4 }, scale: { duration: 1.2, delay: 0.4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } }}
          >
            <motion.img
              src={LOGO_URL}
              alt="ШтатМомент"
              className="h-12 w-12 md:h-14 md:w-14 rounded-xl object-cover"
              animate={isActive ? { y: [0, -5, 0] } : {}}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
        {subtitle && (
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {subtitle}
          </motion.div>
        )}
        <motion.h2
          className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        {content && (
          <motion.p
            className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-300"
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {content}
          </motion.p>
        )}
        {tariffs && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-4xl mt-10"
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {tariffs.map((t) => (
              <div
                key={t.position}
                className="group rounded-2xl border border-neutral-700 bg-black/50 backdrop-blur-sm p-5 transition-colors hover:border-[#FF4D00]"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF4D00]/10 text-[#FF4D00]">
                    <Icon name={t.icon} fallback="Briefcase" size={20} />
                  </span>
                  <span className="text-lg font-semibold text-white">{t.position}</span>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-[#FF4D00]">{t.price}</span>
                  <span className="text-sm text-neutral-400">{t.unit}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
        {showMap && (
          <div className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2">
            <PermMap isActive={isActive} />
          </div>
        )}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 md:mt-16"
          >
            <Button
              variant="outline"
              size="lg"
              className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
            >
              {buttonText}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}