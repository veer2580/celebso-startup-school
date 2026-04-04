"use client";

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center px-4">
      <div className="relative w-full max-w-md">
 
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#fcb900]/30 via-transparent to-transparent blur-xl opacity-40" />

 
        <form className="relative bg-[#141414] border border-white/10 rounded-2xl p-8 space-y-6 backdrop-blur">
       
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Admin Access
            </h1>
            <p className="text-sm text-white/50">
              Secure login for dashboard control
            </p>
          </div>

           
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-white/40">
              Email
            </label>
            <input
              type="email"
              placeholder="admin@domain.com"
              required
              className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#fcb900] transition"
            />
          </div>
 
          <div className="space-y-1">
            <label className="text-xs uppercase tracking-widest text-white/40">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              required
              className="w-full bg-transparent border-b border-white/20 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#fcb900] transition"
            />
          </div>

        
          <button
            type="submit"
            className="w-full mt-6 py-3 bg-[#fcb900] text-black text-sm font-medium uppercase tracking-wider hover:brightness-110 transition disabled:opacity-50"
          >
            Enter Dashboard
          </button>

        
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-xs uppercase tracking-widest text-white/40 hover:text-[#fcb900] transition"
            >
              ← Back to Website
            </a>
          </div>

        </form>
      </div>
    </div>
  );
}
