'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';

export default function OJOLPage() {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  const t = getTranslations(currentLang);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/background.png")',
        }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0e27]/95 via-[#0f172a]/90 to-[#050714]/95" />

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Content Container */}
      <div className="relative z-10">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-slate-900/70 border-b border-blue-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl blur-md opacity-30" />
                <img
                  src="/ojol-logo.png"
                  alt="OJOL Logo"
                  className="relative w-10 h-10 object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                OJOL
              </span>
            </motion.div>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              {['home', 'vision', 'features', 'community', 'token', 'roadmap'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors duration-200 relative group"
                >
                  {t.nav[item as keyof typeof t.nav]}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Language Switcher */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center space-y-8"
          >
            {/* Logo Animation */}
            <motion.div
              variants={fadeInUp}
              className="relative inline-block mb-8"
            >
              <img
                src="/ojol-logo.png"
                alt="OJOL Logo"
                className="w-40 h-40 mx-auto object-contain"
              />
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              <span className="text-white">{t.hero.title}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 px-8 py-6 rounded-xl transition-all duration-300"
              >
                {t.hero.learnMore}
              </Button>
            </motion.div>

            {/* Market Opportunity & Stats */}
            <motion.div
              variants={fadeInUp}
              className="pt-16 max-w-5xl mx-auto space-y-8"
            >
              {/* Market Stats */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="group relative text-center p-8 bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      {t.hero.marketDrivers}
                    </div>
                    <div className="text-sm text-slate-300">
                      {currentLang === 'en' ? 'Online Ride-Hailing Drivers in Indonesia' :
                       currentLang === 'id' ? 'Pengemudi Ojek Online di Indonesia' :
                       '印度尼西亚网约车司机'}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="group relative text-center p-8 bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      {t.hero.marketUsers}
                    </div>
                    <div className="text-sm text-slate-300">
                      {currentLang === 'en' ? 'Active Users in Indonesia' :
                       currentLang === 'id' ? 'Pengguna Aktif di Indonesia' :
                       '印度尼西亚活跃用户'}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Opportunity Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="relative text-center p-8 bg-gradient-to-r from-blue-900/30 via-cyan-900/20 to-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-3xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-3xl" />
                <p className="relative text-lg sm:text-xl text-slate-200 leading-relaxed">
                  {t.hero.marketOpportunity}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-blue-400/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-3 bg-blue-400 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.vision.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-3xl mx-auto">
              {t.vision.subtitle}
            </motion.p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-lg text-slate-300 max-w-4xl mx-auto mb-16"
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
                <Card className="h-full bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-xl border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 rounded-2xl">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all duration-300">
                      {index === 0 && <Trophy className="w-7 h-7 text-white" />}
                      {index === 1 && <Cpu className="w-7 h-7 text-white" />}
                      {index === 2 && <Shield className="w-7 h-7 text-white" />}
                    </div>
                    <CardTitle className="text-xl mb-3">{point.title}</CardTitle>
                    <CardDescription className="text-slate-400">
                      {point.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.features.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400">
              {t.features.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                  <Card className="h-full bg-slate-900/40 backdrop-blur-xl border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-blue-600/30 group-hover:to-cyan-500/30 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <CardTitle className="text-lg mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-slate-400">
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

      {/* Community Section */}
      <section id="community" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{t.community.title}</h2>
              <p className="text-xl text-slate-400">{t.community.subtitle}</p>
              <p className="text-lg text-slate-300">{t.community.description}</p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
              >
                {t.community.cta}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-6">
              {t.community.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="group relative text-center p-8 bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-xl border border-blue-500/20 rounded-3xl hover:border-blue-500/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Token Section */}
      <section id="token" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.token.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-3xl mx-auto">
              {t.token.subtitle}
            </motion.p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-center text-lg text-slate-300 max-w-4xl mx-auto mb-16"
          >
            {t.token.description}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {t.token.utilities.map((utility, index) => (
              <motion.div
                key={utility.title}
                variants={fadeInUp}
                className="group"
              >
                <Card className="h-full bg-slate-900/40 backdrop-blur-xl border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-blue-600/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      <Award className="w-6 h-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-lg mb-2">{utility.title}</CardTitle>
                    <CardDescription className="text-slate-400">
                      {utility.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* BUY TOKEN Button in Token Section */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-center mt-16"
          >
            <a
              href="https://pump.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500" />
              
              {/* Main button */}
              <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-cyan-400 hover:to-blue-600 text-white font-bold text-xl px-14 py-5 rounded-2xl transition-all duration-500 shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 flex items-center gap-4 border border-blue-400/20">
                <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="relative z-10">{t.hero.buyToken}</span>
                <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </a>
            
            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 text-sm text-slate-400"
            >
              Join the future of transportation
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
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
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <Card className="h-full relative bg-slate-900/60 backdrop-blur-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 rounded-2xl overflow-hidden">
                    {/* Decorative gradient line at top */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500" />

                    <CardHeader className="text-center">
                      {/* Icon Container with special styling */}
                      <div className="relative w-16 h-16 mx-auto mb-4">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse" />
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-500/30 border-2 border-blue-500/30 flex items-center justify-center group-hover:from-blue-600/50 group-hover:to-cyan-500/50 transition-all duration-300">
                          <IconComponent className="w-8 h-8 text-blue-400" />
                        </div>
                      </div>

                      <CardTitle className="text-lg mb-3 group-hover:text-blue-300 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
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

      {/* App Structure Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.app.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400">
              {t.app.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Rider App */}
            <motion.div variants={fadeInUp} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <Card className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <SmartphoneIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{t.app.rider.title}</h3>
                  </div>
                </div>
                <p className="text-slate-400 mb-6">{t.app.rider.description}</p>
                <ul className="space-y-3">
                  {t.app.rider.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Driver App */}
            <motion.div variants={fadeInUp} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <Card className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{t.app.driver.title}</h3>
                  </div>
                </div>
                <p className="text-slate-400 mb-6">{t.app.driver.description}</p>
                <ul className="space-y-3">
                  {t.app.driver.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
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
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <Card className="h-full relative bg-slate-900/60 backdrop-blur-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 rounded-2xl overflow-hidden">
                    {/* Number Badge */}
                    <div className="absolute top-0 right-0 bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-sm font-bold px-3 py-1.5 rounded-bl-2xl">
                      {step.number}
                    </div>

                    <CardHeader className="text-center pt-8">
                      {/* Icon Container */}
                      <div className="relative w-20 h-20 mx-auto mb-6">
                        {/* Outer ring with pulse */}
                        <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300 animate-pulse" />
                        
                        {/* Inner circle with icon */}
                        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600/40 to-cyan-500/40 border-2 border-blue-500/40 flex items-center justify-center group-hover:from-blue-600/60 group-hover:to-cyan-500/60 transition-all duration-300">
                          <IconComponent className="w-10 h-10 text-blue-400" />
                        </div>
                      </div>

                      <CardTitle className="text-lg mb-3 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
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

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.roadmap.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400">
              {t.roadmap.subtitle}
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6">
            {t.roadmap.phases.map((phase, index) => {
              const statusConfig = {
                completed: {
                  icon: CheckCircle,
                  color: 'text-green-400',
                  bg: 'bg-green-400/10',
                  border: 'border-green-400/30',
                },
                'in-progress': {
                  icon: Clock,
                  color: 'text-blue-400',
                  bg: 'bg-blue-400/10',
                  border: 'border-blue-400/30',
                },
                upcoming: {
                  icon: Circle,
                  color: 'text-slate-500',
                  bg: 'bg-slate-800/50',
                  border: 'border-slate-700/50',
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
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent last:hidden" />
                  <div className="flex gap-6 items-start">
                    <div className={`w-12 h-12 rounded-full ${config.bg} border-2 ${config.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <StatusIcon className={`w-6 h-6 ${config.color}`} />
                    </div>
                    <Card className="flex-1 bg-slate-900/40 backdrop-blur-xl border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">{phase.quarter}</CardTitle>
                          <span className={`text-sm font-medium ${config.color} ${config.bg} px-3 py-1 rounded-full`}>
                            {phase.status === 'completed' && 'Completed'}
                            {phase.status === 'in-progress' && 'In Progress'}
                            {phase.status === 'upcoming' && 'Upcoming'}
                          </span>
                        </div>
                        <ul className="space-y-2 mt-4">
                          {phase.items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-slate-400">
                              <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              {item}
                            </li>
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

      {/* Trust Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {t.trust.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400 max-w-3xl mx-auto">
              {t.trust.description}
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                  <Card className="h-full bg-slate-900/40 backdrop-blur-xl border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-blue-600/30 group-hover:to-cyan-500/30 transition-all duration-300">
                        {IconComponent && <IconComponent className="w-6 h-6 text-blue-400" />}
                      </div>
                      <CardTitle className="text-lg mb-2">{point.title}</CardTitle>
                      <CardDescription className="text-slate-400">
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

      {/* Footer */}
      <footer className="border-t border-blue-500/10 bg-slate-900/80 backdrop-blur-xl mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/ojol-logo.png"
                  alt="OJOL Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  OJOL
                </span>
              </div>
              <p className="text-slate-400 max-w-sm">{t.footer.description}</p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://x.com/OJOLASIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500/20 border border-slate-700 hover:border-blue-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5 text-slate-400 hover:text-blue-400" />
                </a>
                <a
                  href="https://t.me/+8wyXrTEEddc4OTA1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-500/20 border border-slate-700 hover:border-blue-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Send className="w-5 h-5 text-slate-400 hover:text-blue-400" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                {t.footer.links.product}
              </h3>
              <ul className="space-y-2">
                {t.footer.productLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                {t.footer.links.company}
              </h3>
              <ul className="space-y-2">
                {t.footer.companyLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                {t.footer.links.legal}
              </h3>
              <ul className="space-y-2">
                {t.footer.legalLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-blue-500/10">
            <p className="text-center text-sm text-slate-500">
              © 2025 OJOL. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Buy Token Button */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="https://pump.fun"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse" />
          <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:scale-105 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <span className="hidden sm:inline">{t.hero.buyToken}</span>
            <span className="sm:hidden">{currentLang === 'en' ? 'BUY' : currentLang === 'id' ? 'BELI' : '购买'}</span>
          </div>
        </a>
      </motion.div>
      </div>
    </div>
  );
}
