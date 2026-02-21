import { Menu, Upload, FileType, CheckCircle2 } from 'lucide-react';

const UploadPaper = () => {
    return (
        <div className="flex-1 overflow-y-auto bg-[#131722] p-4 flex flex-col h-full text-white">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <button className="w-10 h-10 bg-[#1c212d] rounded-full flex items-center justify-center border border-[#2a3142]">
                    <Menu className="w-5 h-5 text-gray-300" />
                </button>
                <div className="text-lg font-semibold tracking-wide">Upload Paper</div>
                <div className="w-10 h-10 rounded-full bg-[#fca5a5] flex items-center justify-center p-1 border-2 border-[#131722] shadow-[0_0_0_2px_#2a3142]">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix`} alt="Profile" className="w-full h-full rounded-full" />
                </div>
            </div>

            {/* Dropzone */}
            <div className="relative bg-[#1c212d] rounded-3xl p-8 flex flex-col items-center justify-center border-2 border-dashed border-[#2a3142] hover:border-blue-500/50 transition-colors cursor-pointer group mb-6 shadow-lg">
                <div className="absolute top-8 right-12 bg-blue-500/90 text-white text-xs font-bold px-3 py-2 rounded-lg -rotate-12 shadow-lg z-10">
                    DOC
                </div>
                <div className="absolute bottom-16 left-12 bg-red-500/90 text-white text-xs font-bold px-3 py-2 rounded-lg rotate-12 shadow-lg z-10">
                    PDF
                </div>

                <div className="w-24 h-24 rounded-full bg-[#131722] flex items-center justify-center mb-6 relative group-hover:scale-105 transition-transform z-0">
                    <Upload className="w-10 h-10 text-blue-500" />
                    {/* Decorative rings */}
                    <div className="absolute inset-0 rounded-full border border-blue-500/20 scale-125"></div>
                    <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-150"></div>
                </div>

                <div className="text-xl font-bold mb-2">Tap to Upload</div>
                <div className="text-gray-400 text-center text-sm">
                    Supported formats: PDF, Word, Excel,<br />
                    TXT. Max size: 25MB.
                </div>
            </div>

            {/* Form */}
            <div className="space-y-5 flex-1 pb-24">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-300">Subject Name</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <span className="text-gray-500 font-serif">📖</span>
                        </div>
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-3 bg-[#171c28] border border-transparent focus:border-[#2a3142] focus:bg-[#1a2130] rounded-xl text-white placeholder-gray-600/70 text-sm transition-colors outline-none"
                            placeholder="e.g. Advanced Calculus"
                        />
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-300">Course Code</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                            <span className="text-gray-500 font-bold">#</span>
                        </div>
                        <input
                            type="text"
                            className="w-full pl-10 pr-4 py-3 bg-[#171c28] border border-transparent focus:border-[#2a3142] focus:bg-[#1a2130] rounded-xl text-white placeholder-gray-600/70 text-sm transition-colors outline-none"
                            placeholder="e.g. MAT-401"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-300">Year</label>
                        <select className="w-full px-4 py-3 bg-[#171c28] border border-transparent focus:border-[#2a3142] focus:bg-[#1a2130] rounded-xl text-white placeholder-gray-600/70 text-sm transition-colors outline-none appearance-none">
                            <option>2024</option>
                            <option>2023</option>
                        </select>
                        {/* Custom select arrow missing, would add absolute icon here */}
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-300">Semester</label>
                        <select className="w-full px-4 py-3 bg-[#171c28] border border-transparent focus:border-[#2a3142] focus:bg-[#1a2130] rounded-xl text-white placeholder-gray-600/70 text-sm transition-colors outline-none appearance-none">
                            <option>Spring</option>
                            <option>Fall</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-gray-300">Access Level</label>
                    <div className="flex p-1 bg-[#171c28] rounded-xl">
                        <button className="flex-1 py-2.5 text-gray-400 hover:text-white rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
                            <span>🌍</span> Public
                        </button>
                        <button className="flex-1 py-2.5 bg-[#1c212d] shadow-sm text-blue-500 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
                            <span>🏢</span> Domain
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#131722] via-[#131722] to-transparent pt-8 z-50">
                <button className="w-full bg-blue-600 hover:bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)] text-white font-semibold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-base active:scale-[0.98]">
                    <Upload className="w-5 h-5" />
                    Upload Document
                </button>
            </div>
        </div>
    );
};

export default UploadPaper;
