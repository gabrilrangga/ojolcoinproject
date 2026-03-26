'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Language, getTranslations, languageNames } from '@/lib/translations';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Zap,
  TrendingDown,
  TrendingUp,
  MapPin,
  Shield,
  Award,
  Headphones,
  Smartphone,
  Car,
  CheckCircle2,
  ArrowRight,
  X,
  Send,
  Github,
  Twitter,
  ChevronRight,
  Users,
  Star,
  Clock,
  Target,
  Rocket,
  CheckCircle,
  Circle,
  Cpu,
  Lock,
  Heart,
  Trophy,
  Smartphone as SmartphoneIcon,
  Bike,
  UtensilsCrossed,
  Package,
  Gift,
  Coins,
  UserPlus,
  Wallet,
  Sparkles,
  Globe,
  Flame,
  Gem,
  Crown,
  Lightning,
  Diamond,
} from 'lucide-react';

export default function OJOLPage() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const t = getTranslations(currentLang);

  // Scroll progress for header
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.34, 1.56, 0.64, 1] 
      } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const pulseGlow = {
    animate: {
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Header blur and background intensity based on scroll
  const headerOpacity = Math.min(scrollY / 300, 0.95);
  const headerBorder = Math.min(scrollY / 500, 1);

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      {/* Enhanced Background with Multiple Layers */}
      <motion.div 
        style={{ y: backgroundY, scale: backgroundScale }}
        className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url("/background.png")',
          }}
        />
      </motion.div>

      {/* Multi-layer Dark Overlay with Gradient Animation */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0e27]/98 via-[#0f172a]/95 to-[#050714]/98" />
      
      {/* Animated Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      {/* Enhanced Background Effects with More Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large blue orbs */}
        <motion.div 
          {...pulseGlow.animate}
          className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] animate-pulse"
        />
        <motion.div 
          {...pulseGlow.animate}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] animate-pulse delay-1000"
        />
        <motion.div 
          {...pulseGlow.animate}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[10%] left-[30%] w-[550px] h-[550px] bg-blue-700/15 rounded-full blur-[140px] animate-pulse delay-2000"
        />
        
        {/* Additional accent orbs */}
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[30%] right-[40%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[110px]"
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30 - Math.random() * 20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full blur-[2px]"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10">

      {/* Enhanced Header with Dynamic Effects */}
      <header
        className="fixed top-0 left-0 right-0 z-50 border-b border-blue-500/20 bg-slate-900/70"
        style={{
          backdropFilter: `blur(${20 + scrollY / 30}px)`,
          backgroundColor: `rgba(15, 23, 42, ${0.5 + headerOpacity * 0.5})`,
          borderBottomColor: `rgba(59, 130, 246, ${0.1 + headerBorder * 0.2})`,
        }}
      >
        {/* Gradient line at top of header */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          style={{ opacity: 0.3 + headerBorder * 0.7 }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Enhanced Logo with Glow Effect */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="relative">
                {/* Animated glow ring */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                <motion.img
                  src="/ojol-logo.png"
                  alt="OJOL Logo"
                  className="relative w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-[length:200%_auto]">
                OJOL
              </span>
            </motion.div>

            {/* Enhanced Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-1">
              {['home', 'vision', 'features', 'community', 'token', 'roadmap'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-300 group px-4 py-2"
                >
                  {t.nav[item as keyof typeof t.nav]}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-500 ease-out" />
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </motion.a>
              ))}
            </nav>

            {/* Enhanced Language Switcher */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-blue-500/20 rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-cyan-500/20 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
        
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center space-y-10"
          >
            {/* Enhanced Logo Animation with Float Effect */}
            <motion.div
              {...floatAnimation}
              variants={scaleIn}
              className="relative inline-block mb-8"
            >
              {/* Glow rings */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 border-2 border-blue-500/20 rounded-full"
              />
              <motion.img
                src="/ojol-logo.png"
                alt="OJOL Logo"
                className="relative w-48 h-48 mx-auto object-contain drop-shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Enhanced Headline with Text Shadow and Animation */}
            <motion.h1 
              variants={fadeInUp} 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
            >
              <span className="text-white drop-shadow-2xl">{t.hero.title}</span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
                animate={{ backgroundPosition: ['0% center', '200% center', '0% center'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              >
                {t.hero.titleHighlight}
              </motion.span>
            </motion.h1>

            {/* Enhanced Subtitle with Better Typography */}
            <motion.p 
              variants={fadeInUp} 
              className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            {/* Enhanced CTA Buttons with More Dramatic Effects */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-10"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-600 text-white font-semibold px-10 py-7 rounded-2xl transition-all duration-500 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/60 hover:scale-105 hover:-translate-y-1"
              >
                {/* Animated background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
                  animate={{ 
                    x: ['-100%', '100%'],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  {t.hero.cta}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </span>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-2 border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/50 px-10 py-7 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  {t.hero.learnMore}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>

            {/* Enhanced Market Opportunity & Stats */}
            <motion.div
              variants={fadeInUp}
              className="pt-20 max-w-5xl mx-auto space-y-10"
            >
              {/* Enhanced Market Stats */}
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group relative text-center p-10 bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-2xl border border-blue-500/20 rounded-3xl hover:border-blue-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden"
                >
                  {/* Animated gradient overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Shimmer effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    animate={{ 
                      x: ['-100%', '100%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 1, type: 'spring' }}
                      className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3 drop-shadow-lg"
                    >
                      {t.hero.marketDrivers}
                    </motion.div>
                    <div className="text-base text-slate-300 font-medium">
                      {currentLang === 'en' ? 'Online Ride-Hailing Drivers in Indonesia' :
                       currentLang === 'id' ? 'Pengemudi Ojek Online di Indonesia' :
                       '印度尼西亚网约车司机'}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group relative text-center p-10 bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-2xl border border-blue-500/20 rounded-3xl hover:border-blue-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    animate={{ 
                      x: ['-100%', '100%'],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                  />
                  <div className="relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.2, type: 'spring' }}
                      className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3 drop-shadow-lg"
                    >
                      {t.hero.marketUsers}
                    </motion.div>
                    <div className="text-base text-slate-300 font-medium">
                      {currentLang === 'en' ? 'Active Users in Indonesia' :
                       currentLang === 'id' ? 'Pengguna Aktif di Indonesia' :
                       '印度尼西亚活跃用户'}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Opportunity Statement */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative text-center p-10 bg-gradient-to-r from-blue-900/50 via-cyan-900/40 to-blue-900/50 backdrop-blur-2xl border border-blue-500/30 rounded-3xl overflow-hidden group hover:border-blue-500/50 transition-all duration-500"
              >
                {/* Animated gradient border */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl" />
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400/50 rounded-full" />
                <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400/50 rounded-full" />
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400/50 rounded-full" />
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-400/50 rounded-full" />
                <p className="relative text-lg sm:text-xl text-slate-200 leading-relaxed font-medium drop-shadow-lg">
                  {t.hero.marketOpportunity}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-7 h-12 border-2 border-blue-400/40 rounded-full flex items-start justify-center p-2 bg-slate-900/30 backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Vision Section */}
      <section id="vision" className="py-32 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
            >
              {t.vision.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              {t.vision.subtitle}
            </motion.p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-lg text-slate-300 max-w-4xl mx-auto mb-20 leading-relaxed"
          >
            {t.vision.description}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {t.vision.points.map((point, index) => (
              <motion.div
                key={point.title}
                variants={fadeInUp}
                className="relative group"
              >
                {/* Glow effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <Card className="h-full bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-2xl border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 rounded-3xl overflow-hidden">
                  {/* Gradient line at top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500" />
                  <CardHeader className="pt-10">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:shadow-blue-500/50 group-hover:scale-110 transition-all duration-500"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {index === 0 && <Trophy className="w-8 h-8 text-white" />}
                      {index === 1 && <Cpu className="w-8 h-8 text-white" />}
                      {index === 2 && <Shield className="w-8 h-8 text-white" />}
                    </motion.div>
                    <CardTitle className="text-2xl mb-4 group-hover:text-blue-300 transition-colors duration-300">{point.title}</CardTitle>
                    <CardDescription className="text-base text-slate-400 leading-relaxed">
                      {point.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-32 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
            >
              {t.features.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-3xl mx-auto">
              {t.features.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {t.features.items.map((feature, index) => {
              const IconComponent = {
                Zap,
                TrendingDown,
                MapPin,
                Shield,
                Award,
                Headphones,
              }[feature.icon] || Zap;

              return (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="group"
                >
                  <Card className="h-full bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-2xl border-blue-500/10 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 rounded-2xl overflow-hidden">
                    {/* Gradient line at top */}
                    <motion.div 
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <CardHeader>
                      <motion.div 
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/30 flex items-center justify-center mb-5 group-hover:from-blue-600/50 group-hover:to-cyan-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      >
                        <IconComponent className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                      </motion.div>
                      <CardTitle className="text-xl mb-3 group-hover:text-blue-300 transition-colors duration-300">{feature.title}</CardTitle>
                      <CardDescription className="text-base text-slate-400 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Community Section */}
      <section id="community" className="py-32 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInLeft} className="space-y-8">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">{t.community.title}</h2>
              <p className="text-xl text-slate-400 leading-relaxed">{t.community.subtitle}</p>
              <p className="text-lg text-slate-300 leading-relaxed">{t.community.description}</p>

              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-600 text-white font-semibold px-10 py-7 rounded-2xl transition-all duration-500 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/60 hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  {t.community.cta}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
              </Button>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-8">
              {t.community.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="group relative text-center p-10 bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-2xl border border-blue-500/20 rounded-3xl hover:border-blue-500/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1, type: 'spring' }}
                      className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3 drop-shadow-lg"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-base text-slate-300 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Token Section */}
      <section id="token" className="py-32 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
            >
              {t.token.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-3xl mx-auto">
              {t.token.subtitle}
            </motion.p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-lg text-slate-300 max-w-4xl mx-auto mb-20 leading-relaxed"
          >
            {t.token.description}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {t.token.utilities.map((utility, index) => (
              <motion.div
                key={utility.title}
                variants={fadeInUp}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-2xl border-blue-500/10 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 rounded-2xl overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <CardHeader>
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/30 flex items-center justify-center mb-5 group-hover:from-blue-600/50 group-hover:to-cyan-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    >
                      <Award className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    </motion.div>
                    <CardTitle className="text-xl mb-3 group-hover:text-blue-300 transition-colors duration-300">{utility.title}</CardTitle>
                    <CardDescription className="text-base text-slate-400 leading-relaxed">
                      {utility.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced BUY TOKEN Button in Token Section */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mt-20"
          >
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center"
            >
              {/* Multi-layer glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-all duration-500"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Main button */}
              <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-600 text-white font-bold text-2xl px-16 py-6 rounded-2xl transition-all duration-500 shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/70 hover:scale-110 hover:-translate-y-1 flex items-center gap-5 border border-blue-400/30">
                <motion.div
                  animate={{ x: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-8 h-8" />
                </motion.div>
                <span className="relative z-10">{t.hero.buyToken}</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-8 h-8" />
                </motion.div>
                
                {/* Enhanced shine effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ 
                    x: ['-100%', '100%'],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Pulsing ring effect */}
                <motion.div 
                  className="absolute inset-0 border-2 border-blue-400/30 rounded-2xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </a>
            
            {/* Enhanced supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 text-base text-slate-400 font-medium"
            >
              Join the future of transportation
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
            >
              {t.services.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-3xl mx-auto">
              {t.services.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {t.services.items.map((service, index) => {
              const iconMap = {
                Bike,
                UtensilsCrossed,
                Package,
                Gift,
                Coins,
              };

              const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Award;

              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="group relative"
                >
                  {/* Enhanced glow effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <Card className="h-full relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-2xl border border-blue-500/10 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 rounded-2xl overflow-hidden">
                    {/* Animated gradient line at top */}
                    <motion.div 
                      className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <CardHeader className="text-center pt-8">
                      {/* Enhanced Icon Container */}
                      <div className="relative w-20 h-20 mx-auto mb-6">
                        {/* Pulsing glow */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        {/* Rotating ring */}
                        <motion.div 
                          className="absolute -inset-2 border-2 border-blue-500/20 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        />
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600/40 to-cyan-500/40 border-2 border-blue-500/40 flex items-center justify-center group-hover:from-blue-600/60 group-hover:to-cyan-500/60 group-hover:scale-110 transition-all duration-500">
                          <IconComponent className="w-9 h-9 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                        </div>
                      </div>

                      <CardTitle className="text-xl mb-4 group-hover:text-blue-300 transition-colors duration-300 leading-tight">{service.title}</CardTitle>
                      <CardDescription className="text-sm text-slate-400 leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Enhanced App Structure Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/3 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
            >
              {t.app.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400">
              {t.app.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-10"
          >
            {/* Enhanced Rider App */}
            <motion.div variants={fadeInLeft} className="relative group">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-80 transition-all duration-500"
              />
              <Card className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-2xl border border-blue-500/20 rounded-3xl p-10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden">
                {/* Gradient line */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex items-center gap-5 mb-8">
                  <motion.div 
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <SmartphoneIcon className="w-10 h-10 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{t.app.rider.title}</h3>
                  </div>
                </div>
                <p className="text-slate-400 mb-8 text-lg leading-relaxed">{t.app.rider.description}</p>
                <ul className="space-y-4">
                  {t.app.rider.features.map((feature, idx) => (
                    <motion.li 
                      key={feature} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-center gap-4 text-slate-300 text-base"
                    >
                      <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Enhanced Driver App */}
            <motion.div variants={fadeInRight} className="relative group">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-80 transition-all duration-500"
              />
              <Card className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-800/70 backdrop-blur-2xl border border-blue-500/20 rounded-3xl p-10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden">
                {/* Gradient line */}
                <motion.div 
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex items-center gap-5 mb-8">
                  <motion.div 
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Car className="w-10 h-10 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{t.app.driver.title}</h3>
                  </div>
                </div>
                <p className="text-slate-400 mb-8 text-lg leading-relaxed">{t.app.driver.description}</p>
                <ul className="space-y-4">
                  {t.app.driver.features.map((feature, idx) => (
                    <motion.li 
                      key={feature} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className="flex items-center gap-4 text-slate-300 text-base"
                    >
                      <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-cyan-500/3 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
            >
              {t.howItWorks.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400">
              {t.howItWorks.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {t.howItWorks.steps.map((step, index) => {
              const iconMap = {
                UserPlus,
                Wallet,
                Sparkles,
                TrendingUp,
                Star,
              };

              const IconComponent = iconMap[step.icon as keyof typeof iconMap] || Award;

              return (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="group relative"
                >
                  {/* Enhanced glow effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <Card className="h-full relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-2xl border border-blue-500/10 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 rounded-2xl overflow-hidden">
                    {/* Animated gradient line at top */}
                    <motion.div 
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Number Badge */}
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-sm font-bold px-4 py-2 rounded-bl-2xl shadow-lg">
                      {step.number}
                    </div>

                    <CardHeader className="text-center pt-10">
                      {/* Enhanced Icon Container */}
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        {/* Multiple rotating rings */}
                        <motion.div 
                          className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.div 
                          className="absolute -inset-2 border-2 border-cyan-500/10 rounded-full"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                        />
                        
                        {/* Pulsing glow */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ duration: 4, repeat: Infinity }}
                        />
                        
                        {/* Inner circle with icon */}
                        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-600/50 to-cyan-500/50 border-2 border-blue-500/40 flex items-center justify-center group-hover:from-blue-600/70 group-hover:to-cyan-500/70 group-hover:scale-110 transition-all duration-500">
                          <IconComponent className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                        </div>
                      </div>

                      <CardTitle className="text-xl mb-4 group-hover:text-blue-300 transition-colors duration-300 leading-tight font-semibold">
                        {step.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-slate-400 leading-relaxed">
                        {step.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Roadmap Section */}
      <section id="roadmap" className="py-32 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
            >
              {t.roadmap.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400">
              {t.roadmap.subtitle}
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-8">
            {t.roadmap.phases.map((phase, index) => {
              const statusConfig = {
                completed: {
                  icon: CheckCircle,
                  color: 'text-green-400',
                  bg: 'bg-green-400/10',
                  border: 'border-green-400/40',
                  glow: 'shadow-green-500/30',
                },
                'in-progress': {
                  icon: Clock,
                  color: 'text-blue-400',
                  bg: 'bg-blue-400/10',
                  border: 'border-blue-400/40',
                  glow: 'shadow-blue-500/30',
                },
                upcoming: {
                  icon: Circle,
                  color: 'text-slate-500',
                  bg: 'bg-slate-800/50',
                  border: 'border-slate-700/50',
                  glow: 'shadow-slate-500/20',
                },
              };

              const config = statusConfig[phase.status];
              const StatusIcon = config.icon;

              return (
                <motion.div
                  key={phase.quarter}
                  variants={fadeInUp}
                  className="relative group"
                >
                  {/* Animated connecting line */}
                  <motion.div 
                    className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/60 via-blue-500/30 to-transparent last:hidden"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <div className="flex gap-8 items-start">
                    <motion.div 
                      className={`w-14 h-14 rounded-full ${config.bg} border-3 ${config.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500 shadow-lg ${config.glow}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <StatusIcon className={`w-7 h-7 ${config.color}`} />
                    </motion.div>
                    <Card className="flex-1 bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-2xl border border-blue-500/10 hover:border-blue-500/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 overflow-hidden">
                      {/* Gradient line at top */}
                      <motion.div 
                        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <CardHeader>
                        <div className="flex items-center justify-between mb-4">
                          <CardTitle className="text-2xl font-semibold">{phase.quarter}</CardTitle>
                          <motion.span 
                            className={`text-sm font-bold ${config.color} ${config.bg} px-4 py-2 rounded-full border ${config.border}`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {phase.status === 'completed' && 'Completed'}
                            {phase.status === 'in-progress' && 'In Progress'}
                            {phase.status === 'upcoming' && 'Upcoming'}
                          </motion.span>
                        </div>
                        <ul className="space-y-3 mt-6">
                          {phase.items.map((item, idx) => (
                            <motion.li 
                              key={item} 
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              className="flex items-center gap-3 text-slate-400 text-base group/item hover:text-slate-300 transition-colors duration-300"
                            >
                              <motion.div
                                whileHover={{ x: 3 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 group-hover/item:text-blue-300" />
                              </motion.div>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </CardHeader>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Trust Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-500/3 to-transparent" />
        
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"
            >
              {t.trust.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-3xl mx-auto">
              {t.trust.description}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {t.trust.points.map((point, index) => {
              const IconComponent = [
                Lock,
                Shield,
                Users,
                Heart,
              ][index];

              return (
                <motion.div
                  key={point.title}
                  variants={fadeInUp}
                  className="group"
                >
                  <Card className="h-full bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur-2xl border border-blue-500/10 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 rounded-2xl overflow-hidden">
                    {/* Gradient line at top */}
                    <motion.div 
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <CardHeader>
                      <motion.div 
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/30 flex items-center justify-center mb-5 group-hover:from-blue-600/50 group-hover:to-cyan-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {IconComponent && <IconComponent className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />}
                      </motion.div>
                      <CardTitle className="text-xl mb-3 group-hover:text-blue-300 transition-colors duration-300">{point.title}</CardTitle>
                      <CardDescription className="text-base text-slate-400 leading-relaxed">
                        {point.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-blue-500/10 bg-gradient-to-b from-slate-900/90 to-slate-950/95 backdrop-blur-2xl mt-auto relative overflow-hidden">
        {/* Footer decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur-lg opacity-40" />
                  <img
                    src="/ojol-logo.png"
                    alt="OJOL Logo"
                    className="relative w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  OJOL
                </span>
              </motion.div>
              <p className="text-slate-400 max-w-sm leading-relaxed text-base">{t.footer.description}</p>

              {/* Enhanced Social Links */}
              <div className="flex space-x-4">
                <motion.a
                  href="https://x.com/OJOLASIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-full bg-slate-800/80 hover:bg-blue-500/20 border border-slate-700 hover:border-blue-500/50 flex items-center justify-center transition-all duration-500 hover:scale-110"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <X className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.a>
                <motion.a
                  href="https://t.me/+8wyXrTEEddc4OTA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-full bg-slate-800/80 hover:bg-blue-500/20 border border-slate-700 hover:border-blue-500/50 flex items-center justify-center transition-all duration-500 hover:scale-110"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Send className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.a>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider">
                {t.footer.links.product}
              </h3>
              <ul className="space-y-3">
                {t.footer.productLinks.map((link, idx) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <a href="#" className="text-base text-slate-400 hover:text-blue-400 transition-colors duration-300 group inline-flex items-center gap-2">
                      {link}
                      <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider">
                {t.footer.links.company}
              </h3>
              <ul className="space-y-3">
                {t.footer.companyLinks.map((link, idx) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <a href="#" className="text-base text-slate-400 hover:text-blue-400 transition-colors duration-300 group inline-flex items-center gap-2">
                      {link}
                      <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-5">
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-wider">
                {t.footer.links.legal}
              </h3>
              <ul className="space-y-3">
                {t.footer.legalLinks.map((link, idx) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <a href="#" className="text-base text-slate-400 hover:text-blue-400 transition-colors duration-300 group inline-flex items-center gap-2">
                      {link}
                      <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enhanced Bottom Bar */}
          <div className="pt-10 border-t border-blue-500/10">
            <motion.p 
              className="text-center text-base text-slate-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              © 2025 OJOL. {t.footer.rights}
            </motion.p>
          </div>
        </div>
      </footer>

      {/* Enhanced Floating Buy Token Button */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.a
          href="https://pump.fun"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Enhanced glow effect with pulse */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 rounded-full blur-2xl opacity-50"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Main button */}
          <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 hover:from-green-500 hover:via-emerald-400 hover:to-green-500 text-white font-bold px-8 py-4 rounded-full transition-all duration-500 shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 flex items-center gap-3 border-2 border-green-400/30">
            {/* Animated arrow */}
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <TrendingUp className="w-6 h-6" />
            </motion.div>
            <span className="hidden sm:inline text-lg">{t.hero.buyToken}</span>
            <span className="sm:hidden font-bold">
              {currentLang === 'en' ? 'BUY' : currentLang === 'id' ? 'BELI' : '购买'}
            </span>
            
            {/* Shine effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ 
                x: ['-100%', '100%'],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
            />
            
            {/* Pulsing ring */}
            <motion.div 
              className="absolute inset-0 border-2 border-green-400/30 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.a>
      </motion.div>
      </div>
    </div>
  );
}
