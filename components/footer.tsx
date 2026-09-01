export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 md:py-12" style={{ backgroundColor: '#4F46A8' }}>
      <div className="w-full max-w-6xl mx-auto" style={{ paddingInline: '14px', boxSizing: 'border-box' }}>
        <div className="text-center text-xs sm:text-sm space-y-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
          <p>© {currentYear} Microbiologia Visual. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
