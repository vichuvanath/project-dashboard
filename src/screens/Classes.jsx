import { ArrowLeft, Settings, Search, SlidersHorizontal, Users, Calendar, Clock, Home, Folder, GraduationCap, User, Plus, MoreVertical } from 'lucide-react';

const ClassesScreen = ({ setScreen }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#131722] text-white">
            {/* Header */}
            <div className="flex items-center justify-between p-4 mb-2">
                <button className="text-white hover:text-gray-300 transition-colors" onClick={() => setScreen('manage')}>
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <div className="text-lg font-bold tracking-wide">My Classes</div>
                <button className="text-white hover:text-gray-300 transition-colors">
                    <Settings className="w-6 h-6" />
                </button>
            </div>

            {/* Search */}
            <div className="px-4 mb-4">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        className="w-full pl-12 pr-4 py-3 bg-[#1c212d] border border-[#2a3142] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-white placeholder-gray-500 text-sm transition-colors outline-none shadow-sm"
                        placeholder="Search classes..."
                    />
                </div>
            </div>

            {/* Filters Row */}
            <div className="flex items-center gap-3 px-4 mb-6 overflow-x-auto scrollbar-hide">
                <button className="w-10 h-10 rounded-full bg-[#1c212d] border border-[#2a3142] flex items-center justify-center shrink-0">
                    <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                </button>

                <div className="flex items-center bg-blue-600 rounded-full pl-4 pr-1 py-1.5 shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.3)]">
                    <span className="text-sm font-medium mr-2">Semester: Fall 2023</span>
                    <button className="w-6 h-6 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center bg-[#1c212d] border border-[#2a3142] rounded-full px-4 py-2 shrink-0">
                    <span className="text-sm font-medium text-gray-300 mr-2">Status: Active</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto px-4 pb-32 space-y-4">

                {/* Class Card 1 */}
                <div className="bg-[#1c212d] rounded-2xl p-5 border border-[#2a3142] hover:border-[#3a4358] transition-colors relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-bl-[100px] -z-0"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <span className="inline-block px-2.5 py-1 rounded bg-blue-900/40 text-blue-400 text-[10px] font-bold tracking-wider mb-2 border border-blue-500/20">
                                    CS-101
                                </span>
                                <h3 className="font-bold text-lg leading-tight">Data Structures</h3>
                            </div>
                            <button className="text-gray-400 hover:text-white mt-1">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            Prof. Alan Turing
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#131722] px-3 py-2 rounded-lg border border-[#2a3142]">
                                <Users className="w-4 h-4 text-blue-400" />
                                124 Students
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#131722] px-3 py-2 rounded-lg border border-[#2a3142]">
                                <Calendar className="w-4 h-4 text-purple-400" />
                                Mon, Wed, Fri
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[#2a3142]">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <Clock className="w-4 h-4 text-emerald-400" />
                                Next class in 2h 15m
                            </div>
                            <button className="text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors">
                                View Details &rarr;
                            </button>
                        </div>
                    </div>
                </div>

                {/* Class Card 2 */}
                <div className="bg-[#1c212d] rounded-2xl p-5 border border-[#2a3142] hover:border-[#3a4358] transition-colors relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-bl-[100px] -z-0"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <span className="inline-block px-2.5 py-1 rounded bg-orange-900/40 text-orange-400 text-[10px] font-bold tracking-wider mb-2 border border-orange-500/20">
                                    MAT-202
                                </span>
                                <h3 className="font-bold text-lg leading-tight">Linear Algebra</h3>
                            </div>
                            <button className="text-gray-400 hover:text-white mt-1">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                            Prof. Emmy Noether
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#131722] px-3 py-2 rounded-lg border border-[#2a3142]">
                                <Users className="w-4 h-4 text-orange-400" />
                                86 Students
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#131722] px-3 py-2 rounded-lg border border-[#2a3142]">
                                <Calendar className="w-4 h-4 text-purple-400" />
                                Tue, Thu
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[#2a3142]">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <Clock className="w-4 h-4 text-gray-500" />
                                Next class tomorrow
                            </div>
                            <button className="text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors">
                                View Details &rarr;
                            </button>
                        </div>
                    </div>
                </div>

                {/* Class Card 3 */}
                <div className="bg-[#1c212d] rounded-2xl p-5 border border-[#2a3142] hover:border-[#3a4358] transition-colors relative overflow-hidden mb-[5rem]">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-bl-[100px] -z-0"></div>
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <span className="inline-block px-2.5 py-1 rounded bg-teal-900/40 text-teal-400 text-[10px] font-bold tracking-wider mb-2 border border-teal-500/20">
                                    PHY-101
                                </span>
                                <h3 className="font-bold text-lg leading-tight">Mechanics & Wave</h3>
                            </div>
                            <button className="text-gray-400 hover:text-white mt-1">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                            Prof. Richard Feynman
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#131722] px-3 py-2 rounded-lg border border-[#2a3142]">
                                <Users className="w-4 h-4 text-teal-400" />
                                210 Students
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-300 bg-[#131722] px-3 py-2 rounded-lg border border-[#2a3142]">
                                <Calendar className="w-4 h-4 text-purple-400" />
                                Mon, Wed, Fri
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-[#2a3142]">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <Clock className="w-4 h-4 text-gray-500" />
                                Next class on Friday
                            </div>
                            <button className="text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors">
                                View Details &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-24 right-6 pointer-events-auto">
                <button
                    className="w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-transform active:scale-95"
                    onClick={() => setScreen('upload')}
                >
                    <Plus className="w-7 h-7 text-white" />
                </button>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#171c28] border-t border-[#2a3142] px-6 py-3 pb-8 flex justify-between items-center z-50">
                <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors" onClick={() => setScreen('login')}>
                    <Home className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Home</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors" onClick={() => setScreen('manage')}>
                    <Folder className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Papers</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-blue-500 transition-colors">
                    <GraduationCap className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Classes</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
                    <User className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Profile</span>
                </button>
            </div>
        </div>
    );
};

export default ClassesScreen;
