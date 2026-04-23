'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { MoonIcon, SunIcon, FileText } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  
  // Placeholder to prevent layout shift during hydration
  if (!mounted) return <div className="h-8 w-8" />

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-all hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon size={14} strokeWidth={2.5} />
      ) : (
        <MoonIcon size={14} strokeWidth={2.5} />
      )}
    </button>
  )
}

export function Header() {
  return (
    <header className=" relative mb-20 space-y-10 ">
      {/* Top Navigation Bar */}
      
      <nav className="flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-900 ">
        <div className="flex items-center gap-5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          <Link href="#projects" className="transition-colors hover:text-black dark:hover:text-white">
            Projects
          </Link>
          <Link href="#skills" className="transition-colors hover:text-black dark:hover:text-white">
            Skills
          </Link>
          <Link href="#education" className="transition-colors hover:text-black dark:hover:text-white">
            Education
          </Link>
          <a
            href="https://drive.google.com/file/d/15AW8tq5vzYfQuPDvz2z7SQ9hDgHYfNtj/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-black dark:hover:text-white"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>
        </div>

        <ThemeToggle />
      </nav>

      {/* Profile Section */}
      <div className="flex items-center justify-between ">
        <div className="space-y-1">
          <Link href="/" className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Muskan Tarafder
          </Link>
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            className="text-zinc-500 dark:text-zinc-400"
            delay={0.2}
          >
            Backend Developer
          </TextEffect>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-100 opacity-50 blur-md transition-all group-hover:opacity-100 dark:from-zinc-800 dark:to-zinc-900" />
          <div className="relative h-35 w-35 overflow-hidden rounded-full border border-zinc-300 dark:border-zinc-700">
            <img
              src="/images/profilepic.jpg"
              alt="Muskan Tarafder"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </header>
  )
}