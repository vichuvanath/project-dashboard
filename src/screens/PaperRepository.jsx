import { Menu, Search, FileText, Download } from 'lucide-react';

const PaperRepository = ({ setScreen }) => {
    return (
        <div className="flex-1 overflow-y-auto bg-[#0a0f1a] p-4 flex flex-col h-full text-white pb-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <button className="text-gray-400 hover:text-white transition-colors" onClick={() => setScreen('manage')}>
                    <Menu className="w-6 h-6" />
                </button>
                <div className="text-lg font-bold tracking-wide">Paper Repository</div>
                <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 font-semibold border border-blue-500/30">
                    AC
                </div>
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-500" />
                </div>
                <input
                    type="text"
                    className="w-full pl-12 pr-4 py-3.5 bg-[#141a27] border border-[#232a3b] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-2xl text-white placeholder-gray-500 text-sm transition-colors outline-none shadow-sm"
                    placeholder="Search by subject or code..."
                />
            </div>

            {/* Filters */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide mb-6 -mx-4 px-4 sticky top-0 z-10 bg-[#0a0f1a]/80 backdrop-blur-md">
                <button className="whitespace-nowrap px-5 py-2 rounded-full bg-blue-600 text-white font-medium text-sm shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                    All Papers
                </button>
                <button className="whitespace-nowrap px-5 py-2 rounded-full border border-[#232a3b] text-gray-400 hover:bg-[#141a27] font-medium text-sm transition-colors">
                    Mid-Term
                </button>
                <button className="whitespace-nowrap px-5 py-2 rounded-full border border-[#232a3b] text-gray-400 hover:bg-[#141a27] font-medium text-sm transition-colors">
                    Finals
                </button>
                <button className="whitespace-nowrap px-5 py-2 rounded-full border border-[#232a3b] text-gray-400 hover:bg-[#141a27] font-medium text-sm transition-colors">
                    Quizzes
                </button>
            </div>

            {/* List Header */}
            <div className="flex items-center justify-between mb-4 mt-2">
                <div className="text-xs font-bold text-gray-500 tracking-widest uppercase">
                    Recent Uploads
                </div>
                <button className="text-blue-500 text-xs font-semibold hover:text-blue-400">
                    View All
                </button>
            </div>

            {/* Paper Cards */}
            <div className="space-y-4">
                {/* Card 1 */}
                <div className="bg-[#141a27] rounded-3xl p-5 border border-[#1e2536] shadow-md hover:border-[#2a354f] transition-all">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="inline-block px-2.5 py-1 rounded bg-blue-900/30 text-blue-400 text-[10px] font-bold tracking-wider mb-2 border border-blue-500/20">
                                CS-302
                            </span>
                            <h3 className="font-bold text-lg leading-tight mb-2">Intro to Machine Learning</h3>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <span className="flex items-center gap-1">📅 Fall 2023</span>
                                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                <span className="flex items-center gap-1">🎓 Mid-Term</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#1e2536] flex items-center justify-center shrink-0 border border-[#2a354f]">
                            <FileText className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-[0_0_12px_rgba(37,99,235,0.4)]">
                        <Download className="w-4 h-4" />
                        Download PDF
                    </button>
                </div>

                {/* Card 2 */}
                <div className="bg-[#141a27] rounded-3xl p-5 border border-[#1e2536] shadow-md hover:border-[#2a354f] transition-all">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="inline-block px-2.5 py-1 rounded bg-purple-900/30 text-purple-400 text-[10px] font-bold tracking-wider mb-2 border border-purple-500/20">
                                ENG-101
                            </span>
                            <h3 className="font-bold text-lg leading-tight mb-2">Advanced Technical Writing</h3>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <span className="flex items-center gap-1">📅 Spring 2023</span>
                                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                <span className="flex items-center gap-1">🎓 Finals</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#1e2536] flex items-center justify-center shrink-0 border border-[#2a354f]">
                            <FileText className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                    <button className="w-full bg-transparent border-2 border-[#1e2536] hover:bg-[#1e2536] text-white font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                        <Download className="w-4 h-4" />
                        Download PDF
                    </button>
                </div>

                {/* Card 3 */}
                <div className="bg-[#141a27] rounded-3xl p-5 border border-[#1e2536] shadow-md hover:border-[#2a354f] transition-all">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="inline-block px-2.5 py-1 rounded bg-teal-900/30 text-teal-400 text-[10px] font-bold tracking-wider mb-2 border border-teal-500/20">
                                MTH-204
                            </span>
                            <h3 className="font-bold text-lg leading-tight mb-2">Linear Algebra & ODEs</h3>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <span className="flex items-center gap-1">📅 Spring 2023</span>
                                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                <span className="flex items-center gap-1">🎓 Quiz 2</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#1e2536] flex items-center justify-center shrink-0 border border-[#2a354f]">
                            <FileText className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                    <button className="w-full bg-transparent border-2 border-[#1e2536] hover:bg-[#1e2536] text-white font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                        <Download className="w-4 h-4" />
                        Download PDF
                    </button>
                </div>

                {/* Card 4 */}
                <div className="bg-[#141a27] rounded-3xl p-5 border border-[#1e2536] shadow-md hover:border-[#2a354f] transition-all mb-4">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="inline-block px-2.5 py-1 rounded bg-orange-900/30 text-orange-400 text-[10px] font-bold tracking-wider mb-2 border border-orange-500/20">
                                PHY-101
                            </span>
                            <h3 className="font-bold text-lg leading-tight mb-2">Mechanics & Wave Motion</h3>
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <span className="flex items-center gap-1">📅 Fall 2022</span>
                                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                <span className="flex items-center gap-1">🎓 Finals</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#1e2536] flex items-center justify-center shrink-0 border border-[#2a354f]">
                            <FileText className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>
                    <button className="w-full bg-transparent border-2 border-[#1e2536] hover:bg-[#1e2536] text-white font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                        <Download className="w-4 h-4" />
                        Download PDF
                    </button>
                </div>

            </div>
        </div>
    );
};

export default PaperRepository;
