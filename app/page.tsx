'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  BadgeDollarSign,
  Bell,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Coins,
  Flame,
  Home,
  Camera,
  LayoutGrid,
  Play,
  Plus,
  Settings,
  Sparkles,
  TrendingUp,
  Wallet,
  X,
  Video,
} from 'lucide-react'

const activities = [
  { icon: Camera, title: 'Watched an Instagram Reel', time: '2 min ago', amount: '+12 RC', color: 'text-pink-400', bg: 'bg-pink-500/10' },
  { icon: Play, title: 'Completed a watch session', time: '18 min ago', amount: '+48 RC', color: 'text-[#f9c513]', bg: 'bg-[#f9c513]/10' },
  { icon: Video, title: 'Watched a TikTok', time: '31 min ago', amount: '+25 RC', color: 'text-cyan-300', bg: 'bg-cyan-400/10' },
]

const navItems = [
  { label: 'Overview', icon: Home },
  { label: 'Earn', icon: Coins },
  { label: 'Wallet', icon: Wallet },
]

export default function Page() {
  const [activeNav, setActiveNav] = useState('Overview')
  const [showNotice, setShowNotice] = useState(true)
  const [claiming, setClaiming] = useState(false)
  const [claimed, setClaimed] = useState(false)

  function claimBonus() {
    setClaiming(true)
    window.setTimeout(() => {
      setClaiming(false)
      setClaimed(true)
    }, 700)
  }

  return (
    <main className="min-h-screen bg-[#0b0b0c] text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-[1440px]">
        <aside className="hidden w-[244px] shrink-0 border-r border-white/[0.07] bg-[#101011] px-5 py-6 lg:flex lg:flex-col">
          <div className="flex items-center gap-3 px-2">
            <img src="/rot-coin-logo.png" alt="Rot Coin" className="h-11 w-11 object-contain" />
            <div>
              <div className="text-[17px] font-black tracking-tight">Rot Coin</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">Scroll. Earn. Repeat.</div>
            </div>
          </div>
          <div className="mt-12 space-y-1">
            <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">Workspace</div>
            {navItems.map(({ label, icon: Icon }) => (
              <button key={label} onClick={() => setActiveNav(label)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${activeNav === label ? 'bg-[#f9c513] text-black shadow-[0_6px_24px_rgba(249,197,19,0.12)]' : 'text-zinc-500 hover:bg-white/[0.05] hover:text-white'}`}>
                <Icon size={18} strokeWidth={activeNav === label ? 2.5 : 2} />{label}
                {label === 'Earn' && <span className="ml-auto rounded-full bg-black/10 px-2 py-0.5 text-[10px] font-bold">+2</span>}
              </button>
            ))}
          </div>
          <div className="mt-auto space-y-1">
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-zinc-500 hover:bg-white/[0.05] hover:text-white"><Settings size={18} /> Settings</button>
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-zinc-500 hover:bg-white/[0.05] hover:text-white"><CircleHelp size={18} /> Help center</button>
            <div className="mt-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-3">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Demo mode active</div>
              <p className="mt-2 text-[11px] leading-4 text-zinc-600">Balances are simulated for this prototype. No real payouts are processed.</p>
            </div>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex h-[78px] items-center justify-between border-b border-white/[0.07] px-5 sm:px-8 lg:px-10">
            <div className="flex items-center gap-3 lg:hidden"><img src="/rot-coin-logo.png" alt="Rot Coin" className="h-9 w-9 object-contain" /><span className="font-black">Rot Coin</span></div>
            <div className="hidden text-sm font-medium text-zinc-500 lg:block">Tuesday, September 29, 2026 <span className="mx-2 text-zinc-700">/</span> <span className="text-zinc-300">Overview</span></div>
            <div className="flex items-center gap-3">
              <button aria-label="Notifications" className="relative rounded-xl p-2.5 text-zinc-500 hover:bg-white/[0.06] hover:text-white"><Bell size={18} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#f9c513]" /></button>
              <div className="h-7 w-px bg-white/[0.08]" />
              <button className="flex items-center gap-2 rounded-xl p-1.5 pr-2 hover:bg-white/[0.05]"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f9c513] text-xs font-black text-black">JC</div><span className="hidden text-sm font-semibold sm:block">Jordan Carter</span><ChevronDown size={15} className="text-zinc-600" /></button>
            </div>
          </header>

          <div className="px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
            {showNotice && <div className="mb-6 flex items-start gap-3 rounded-xl border border-[#f9c513]/15 bg-[#f9c513]/[0.06] px-4 py-3 text-sm text-[#e7c849]"><Sparkles size={17} className="mt-0.5 shrink-0 text-[#f9c513]" /><p className="flex-1 leading-5"><strong className="font-bold text-[#f9c513]">Welcome to Rot Coin.</strong> Your feed is ready — start scrolling to grow your balance.</p><button aria-label="Dismiss" onClick={() => setShowNotice(false)} className="text-[#a58d36] hover:text-[#f9c513]"><X size={16} /></button></div>}
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f9c513]">Your dashboard</p><h1 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">Good morning, Jordan<span className="text-[#f9c513]">.</span></h1><p className="mt-2 text-sm text-zinc-500">Here&apos;s how your rot is paying off today.</p></div><button className="flex w-fit items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-bold text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.04]"><Clock3 size={16} /> History <ArrowUpRight size={14} className="text-zinc-600" /></button></div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl border border-[#f9c513]/20 bg-gradient-to-br from-[#f9c513] to-[#d99e00] p-5 text-black"><div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-[18px] border-black/[0.07]" /><div className="flex items-center justify-between"><span className="text-xs font-black uppercase tracking-[0.16em] text-black/60">Available balance</span><div className="rounded-lg bg-black/10 p-2"><Coins size={18} /></div></div><div className="mt-5 flex items-baseline gap-2"><span className="text-4xl font-black tracking-[-0.06em]">2,840</span><span className="text-sm font-black">RC</span></div><div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-black/65"><TrendingUp size={14} /> +420 RC this week</div></div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#111112] p-5"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Earned this week</span><div className="rounded-lg bg-emerald-400/10 p-2 text-emerald-400"><TrendingUp size={18} /></div></div><div className="mt-5 flex items-baseline gap-2"><span className="text-4xl font-black tracking-[-0.06em] text-white">420</span><span className="text-sm font-bold text-zinc-500">RC</span></div><div className="mt-4 text-xs font-semibold text-zinc-600">That&apos;s 17% more than last week</div></div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#111112] p-5"><div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Current streak</span><div className="rounded-lg bg-orange-400/10 p-2 text-orange-400"><Flame size={18} /></div></div><div className="mt-5 flex items-baseline gap-2"><span className="text-4xl font-black tracking-[-0.06em] text-white">7</span><span className="text-sm font-bold text-zinc-500">days</span></div><div className="mt-4 text-xs font-semibold text-orange-300">Keep it going for a 2× bonus</div></div>
            </div>

            <div className="mt-7 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
              <div className="rounded-2xl border border-white/[0.08] bg-[#111112] p-5 sm:p-6"><div className="flex items-start justify-between"><div><h2 className="font-black tracking-tight text-white">Your earnings</h2><p className="mt-1 text-xs text-zinc-600">RC earned over the last 7 days</p></div><button className="flex items-center gap-1 rounded-lg border border-white/[0.08] px-2.5 py-1.5 text-xs font-bold text-zinc-400">This week <ChevronDown size={13} /></button></div><div className="mt-7 flex h-44 items-end gap-2 sm:gap-4">{[38, 54, 46, 72, 61, 84, 68].map((height, index) => <div key={index} className="group flex h-full flex-1 flex-col items-center justify-end gap-2"><div className="relative w-full max-w-[42px] rounded-t-md bg-[#f9c513]/80 transition group-hover:bg-[#f9c513]" style={{ height: `${height}%` }}><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-zinc-600 opacity-0 transition group-hover:opacity-100">{[42, 61, 52, 84, 70, 104, 86][index]}</span></div><span className="text-[10px] font-bold text-zinc-600">{['M','T','W','T','F','S','S'][index]}</span></div>)}</div></div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#111112] p-5 sm:p-6"><div className="flex items-center justify-between"><div><h2 className="font-black tracking-tight text-white">Quick earn</h2><p className="mt-1 text-xs text-zinc-600">Small tasks, quick coins</p></div><LayoutGrid size={18} className="text-zinc-600" /></div><div className="mt-5 space-y-3"><button className="flex w-full items-center gap-3 rounded-xl border border-white/[0.07] p-3 text-left transition hover:border-[#f9c513]/30 hover:bg-[#f9c513]/[0.04]"><div className="rounded-lg bg-pink-500/10 p-2 text-pink-400"><Camera size={17} /></div><div className="flex-1"><div className="text-xs font-bold text-zinc-200">Watch 5 Reels</div><div className="mt-1 text-[11px] text-zinc-600">~ 3 minutes</div></div><span className="text-xs font-black text-[#f9c513]">+60 RC</span></button><button className="flex w-full items-center gap-3 rounded-xl border border-white/[0.07] p-3 text-left transition hover:border-[#f9c513]/30 hover:bg-[#f9c513]/[0.04]"><div className="rounded-lg bg-cyan-400/10 p-2 text-cyan-300"><Play size={17} /></div><div className="flex-1"><div className="text-xs font-bold text-zinc-200">Daily check-in</div><div className="mt-1 text-[11px] text-zinc-600">Streak day 7 of 7</div></div><span className="text-xs font-black text-[#f9c513]">+100 RC</span></button></div><button onClick={() => setActiveNav('Earn')} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white/[0.06] py-2.5 text-xs font-bold text-zinc-300 transition hover:bg-white/[0.1]">View all tasks <ArrowUpRight size={14} /></button></div>
            </div>

            <div className="mt-7 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]"><div className="rounded-2xl border border-white/[0.08] bg-[#111112] p-5 sm:p-6"><div className="mb-5 flex items-center justify-between"><div><h2 className="font-black tracking-tight text-white">Recent activity</h2><p className="mt-1 text-xs text-zinc-600">Your latest Rot Coin moments</p></div><button className="text-xs font-bold text-[#f9c513] hover:underline">View all</button></div><div className="space-y-1">{activities.map(({ icon: Icon, title, time, amount, color, bg }) => <div key={title} className="flex items-center gap-3 rounded-xl px-2 py-3"><div className={`rounded-lg p-2.5 ${bg} ${color}`}><Icon size={16} /></div><div className="flex-1"><div className="text-sm font-bold text-zinc-300">{title}</div><div className="mt-1 text-[11px] text-zinc-600">{time}</div></div><span className="text-sm font-black text-emerald-400">{amount}</span><Check size={15} className="text-emerald-500" /></div>)}</div></div><div className="rounded-2xl border border-white/[0.08] bg-[#111112] p-5 sm:p-6"><div className="flex items-center justify-between"><div><h2 className="font-black tracking-tight text-white">Daily bonus</h2><p className="mt-1 text-xs text-zinc-600">Come back every day</p></div><BadgeDollarSign size={20} className="text-[#f9c513]" /></div><div className="mt-5 flex items-center gap-1.5">{[1,2,3,4,5,6,7].map(day => <div key={day} className={`flex h-8 flex-1 items-center justify-center rounded-md text-[10px] font-black ${day < 7 ? 'bg-[#f9c513] text-black' : 'border border-dashed border-[#f9c513]/40 text-[#f9c513]'}`}>{day < 7 ? <Check size={13} /> : day}</div>)}</div><button onClick={claimBonus} disabled={claimed || claiming} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#f9c513] py-3 text-sm font-black text-black transition hover:bg-[#ffd63e] disabled:cursor-default disabled:opacity-70">{claimed ? <><Check size={16} /> Bonus claimed</> : claiming ? 'Claiming…' : <><Plus size={16} /> Claim 100 RC</>}</button></div></div>
            <p className="mt-8 text-center text-[11px] text-zinc-700">Rot Coin is a simulated rewards experience. RC has no cash value and cannot be redeemed.</p>
          </div>
        </section>
      </div>
    </main>
  )
}
