export default function SiteHeader() {
  return (
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold text-blue-700">SimAutoEntrepreneur</span>
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">2026</span>
        </a>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm text-gray-600">
          <a href="/guide-charges-2026" className="hover:text-blue-600 transition-colors hidden sm:inline">
            Guide 2026
          </a>
          <a href="/comparaison-statuts" className="hover:text-blue-600 transition-colors hidden sm:inline">
            Comparer les statuts
          </a>
          <a
            href="/"
            className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full hover:bg-blue-700 transition-colors"
          >
            Simulateur
          </a>
        </nav>
      </div>
    </header>
  );
}
