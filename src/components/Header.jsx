import { Bell, Search } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-16 flex items-center justify-between px-8 border-b border-border bg-sidebar/50 backdrop-blur-sm sticky top-0 z-10 w-full">
            <div className="flex-1"></div> {/* Spacer for alignment */}

            <div className="flex items-center gap-6 text-text-muted">
                {/* Notifications */}
                <button className="relative hover:text-white transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-sidebar"></span>
                </button>

                {/* Search */}
                <button className="hover:text-white transition-colors">
                    <Search className="w-5 h-5" />
                </button>
            </div>
        </header>
    );
};

export default Header;
