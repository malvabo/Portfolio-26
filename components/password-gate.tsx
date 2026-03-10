"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PasswordGateProps {
  password: string
  children: React.ReactNode
}

export function PasswordGate({ password, children }: PasswordGateProps) {
  const [unlocked, setUnlocked] = useState(false)
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!unlocked) {
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [unlocked])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (value === password) {
      setUnlocked(true)
    } else {
      setError(true)
      setShake(true)
      setValue("")
      setTimeout(() => setShake(false), 400)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }

  if (unlocked) return <>{children}</>

  return (
    <div className="min-h-screen bg-background flex flex-col px-8 lg:px-12">
      <div className="pt-7">
        <Link
          href="/#work"
          scroll={false}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3 h-3" />
          All projects
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className={`w-full max-w-[340px] ${shake ? "animate-shake" : ""}`}>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            Guest area
          </p>
          <h1 className="font-serif text-[1.6rem] leading-[1.2] tracking-[-0.02em] text-foreground mb-8">
            This case study is password protected.
          </h1>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="password"
              className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2"
            >
              Enter password
            </label>
            <input
              ref={inputRef}
              id="password"
              type="password"
              value={value}
              onChange={(e) => { setValue(e.target.value); setError(false) }}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-[#F5F3F0] border border-transparent rounded-lg text-[15px] text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-border transition-colors mb-1"
            />
            <div className="h-5 mb-4">
              {error && (
                <p className="text-[12px] text-red-500 mt-1">Incorrect password.</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 text-[14px] font-medium bg-foreground text-background rounded-lg hover:opacity-75 transition-opacity"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }
        .animate-shake { animation: shake 0.35s ease-in-out; }
      `}</style>
    </div>
  )
}
