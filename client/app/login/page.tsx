import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">

      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-[150px]" />

      <div className="relative z-10 px-6">
        <LoginForm />
      </div>

    </main>
  );
}