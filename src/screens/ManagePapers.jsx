import { ArrowLeft, Settings, Search, SlidersHorizontal, Eye, Download, Trash2, Home, Folder, GraduationCap, User, Plus } from 'lucide-react';

const ManagePapers = ({ setScreen }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#131722] text-white">
            {/* Header */}
            <div className="flex items-center justify-between p-4 mb-2">
                <button className="text-white hover:text-gray-300 transition-colors" onClick={() => setScreen('repository')}>
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <div className="text-lg font-bold tracking-wide">Manage Papers</div>
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
                        placeholder="Search by code or subject..."
                    />
                </div>
            </div>

            {/* Filters Row */}
            <div className="flex items-center gap-3 px-4 mb-6 overflow-x-auto scrollbar-hide">
                <button className="w-10 h-10 rounded-full bg-[#1c212d] border border-[#2a3142] flex items-center justify-center shrink-0">
                    <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                </button>

                <div className="flex items-center bg-blue-600 rounded-full pl-4 pr-1 py-1.5 shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.3)]">
                    <span className="text-sm font-medium mr-2">Year: 2023</span>
                    <button className="w-6 h-6 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center bg-[#1c212d] border border-[#2a3142] rounded-full px-4 py-2 shrink-0">
                    <span className="text-sm font-medium text-gray-300 mr-2">Dept: CS</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>

                <div className="flex items-center bg-[#1c212d] border border-[#2a3142] rounded-full px-4 py-2 shrink-0">
                    <span className="text-sm font-medium text-gray-300 mr-2">Subject</span>
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto px-4 pb-32 space-y-4">

                {/* Item 1 */}
                <div className="bg-[#1c212d] rounded-2xl p-4 border border-[#2a3142] hover:border-[#3a4358] transition-colors">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                                <path d="M8 12h8v2H8zm0 4h5v2H8z" />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-semibold text-base truncate pr-2">CS101 - Data Structures</h3>
                                <span className="inline-block px-2 py-0.5 rounded bg-emerald-900/40 text-emerald-400 text-xs font-medium border border-emerald-500/20 shrink-0">Final</span>
                            </div>
                            <p className="text-sm text-gray-400 truncate mb-1">Computer Science • Fall 2023</p>
                            <p className="text-xs text-gray-500">PDF • 2.4 MB • Uploaded Oct 12</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#2a3142]">
                        <button className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            <Eye className="w-4 h-4" /> View
                        </button>
                        <button className="flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors">
                            <Download className="w-4 h-4" /> Download
                        </button>
                        <button className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="bg-[#1c212d] rounded-2xl p-4 border border-[#2a3142] hover:border-[#3a4358] transition-colors">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-900/30 flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-2h4v2zm0-4H7v-2h4v2zm0-4H7V7h4v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-semibold text-base truncate pr-2">MAT202 - Linear Algebra</h3>
                                <span className="inline-block px-2 py-0.5 rounded bg-blue-900/40 text-blue-400 text-xs font-medium border border-blue-500/20 shrink-0">Midterm</span>
                            </div>
                            <p className="text-sm text-gray-400 truncate mb-1">Mathematics • Fall 2023</p>
                            <p className="text-xs text-gray-500">PDF • 1.8 MB • Uploaded Oct 10</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#2a3142]">
                        <button className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            <Eye className="w-4 h-4" /> View
                        </button>
                        <button className="flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors">
                            <Download className="w-4 h-4" /> Download
                        </button>
                        <button className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="bg-[#1c212d] rounded-2xl p-4 border border-[#2a3142] hover:border-[#3a4358] transition-colors">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-900/30 flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-semibold text-base truncate pr-2">PHY101 - Mechanics</h3>
                                <span className="inline-block px-2 py-0.5 rounded bg-emerald-900/40 text-emerald-400 text-xs font-medium border border-emerald-500/20 shrink-0">Final</span>
                            </div>
                            <p className="text-sm text-gray-400 truncate mb-1">Physics • Spring 2023</p>
                            <p className="text-xs text-gray-500">PDF • 3.1 MB • Uploaded Sep 28</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#2a3142]">
                        <button className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            <Eye className="w-4 h-4" /> View
                        </button>
                        <button className="flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors">
                            <Download className="w-4 h-4" /> Download
                        </button>
                        <button className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="bg-[#1c212d] rounded-2xl p-4 border border-[#2a3142] hover:border-[#3a4358] transition-colors mb-[5rem]">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-teal-900/30 flex items-center justify-center shrink-0">
                            <svg className="w-6 h-6 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                            </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-semibold text-base truncate pr-2">PSY201 - Intro to Psych</h3>
                                <span className="inline-block px-2 py-0.5 rounded bg-yellow-900/40 text-yellow-400 text-xs font-medium border border-yellow-500/20 shrink-0">Quiz 1</span>
                            </div>
                            <p className="text-sm text-gray-400 truncate mb-1">Psychology • Fall 2022</p>
                            <p className="text-xs text-gray-500">PDF • 950 KB • Uploaded Aug 15</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#2a3142]">
                        <button className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            <Eye className="w-4 h-4" /> View
                        </button>
                        <button className="flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors">
                            <Download className="w-4 h-4" /> Download
                        </button>
                        <button className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                        </button>
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
                <button className="flex flex-col items-center gap-1 text-blue-500 transition-colors">
                    <Folder className="w-6 h-6" />
                    <span className="text-[10px] font-medium">Papers</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors" onClick={() => setScreen('classes')}>
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

export default ManagePapers;
