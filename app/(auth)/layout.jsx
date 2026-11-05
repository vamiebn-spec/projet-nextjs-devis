export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f9fc] p-4">
      {children}
    </div>
  );
}
