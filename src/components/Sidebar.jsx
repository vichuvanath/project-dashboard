import { Home, FileQuestion, Users, BarChart3, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
    return (
        <aside className="w-64 bg-sidebar flex flex-col h-full border-r border-border">
            {/* Brand */}
            <div className="h-16 flex items-center px-6 border-b border-border">
                <div className="flex items-center gap-2">
                    <div className="bg-blue-active p-1.5 rounded-lg">
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                    </div>
                    <span className="text-white font-semibold text-xl tracking-tight">EduAdmin</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto w-full px-3 py-4 space-y-6">
                {/* Main Menu */}
                <div className="space-y-1">
                    <a href="#" className="flex items-center gap-3 px-3 py-2 bg-blue-active rounded-lg text-white font-medium">
                        <Home className="w-5 h-5" />
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-text-muted hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
                        <FileQuestion className="w-5 h-5" />
                        Question Bank
                    </a>
                    <a href="#" className="flex items-center justify-between px-3 py-2 text-text-muted hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
                        <div className="flex items-center gap-3">
                            <Users className="w-5 h-5" />
                            Users
                        </div>
                        <span className="bg-blue-active/90 text-white text-xs py-0.5 px-2 rounded-full font-medium">
                            12
                        </span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 text-text-muted hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
                        <BarChart3 className="w-5 h-5" />
                        Reports
                    </a>
                </div>

                {/* System Menu */}
                <div>
                    <div className="px-3 mb-2 text-xs font-semibold text-text-muted/60 uppercase tracking-wider">
                        System
                    </div>
                    <div className="space-y-1">
                        <a href="#" className="flex items-center gap-3 px-3 py-2 text-text-muted hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors">
                            <Settings className="w-5 h-5" />
                            Settings
                        </a>
                    </div>
                </div>
            </nav>

            {/* User Footer */}
            <div className="p-4">
                <div className="flex items-center justify-between p-3 bg-card rounded-xl border border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center font-bold text-orange-800 shrink-0">
                            <div className="w-3 h-1 bg-white/70 rounded-full"></div>
                        </div>
                        <div className="overflow-hidden">
                            <div className="text-sm font-semibold text-white truncate">Tom Cook</div>
                            <div className="text-xs text-text-muted truncate">admin@edu.com</div>
                        </div>
                    </div>
                    <button className="p-1.5 text-text-muted hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                        <LogOut className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
