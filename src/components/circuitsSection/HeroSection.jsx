import { ChevronDown } from "lucide-react"
import {motion} from "framer-motion";

function HeroSection() {
  return (
    <div>
       <section className="relative h-screen">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          muted 
          loop
          playsInline
          poster="/api/placeholder/1920/1080"
        >
          <source src="https://videocdn.cdnpk.net/cdn/content/video/premium/video0043/large_watermarked/305_305-0044_preview.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl font-bold mb-6">Circuit des Pangalanes</h1>
            <p className="text-2xl mb-8">Une aventure unique le long du plus grand canal de Madagascar</p>
            <button 
              onClick={() => document.getElementById('overview').scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-700 transition-colors"
            >
              Découvrir
              <ChevronDown className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
