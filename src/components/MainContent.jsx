import { FileText, GraduationCap, ClipboardList, Menu } from 'lucide-react';

const MainContent = () => {
    return (
        <main className="flex-1 overflow-y-auto p-8 relative">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Action Header */}
                <div className="flex justify-start mb-8">
                    <button className="bg-blue-active hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium flex items-center gap-3 transition-colors">
                        <Menu className="w-5 h-5" />
                        <span className="text-base">d</span>
                    </button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Card 1 */}
                    <div className="bg-card border border-border rounded-3xl p-8 flex flex-col items-center justify-center min-h-[160px] aspect-video sm:aspect-auto cursor-pointer hover:border-white/10 transition-colors">
                        <FileText className="w-12 h-12 text-blue-500/50 mb-2" />
                    </div>

                    {/* Card 2 */}
                    <div className="bg-card border border-border rounded-3xl p-8 flex flex-col items-center justify-center min-h-[160px] aspect-video sm:aspect-auto cursor-pointer hover:border-white/10 transition-colors">
                        <GraduationCap className="w-12 h-12 text-purple-500/50 mb-2" />
                    </div>

                    {/* Card 3 */}
                    <div className="bg-card border border-border rounded-3xl p-8 flex flex-col items-center justify-center min-h-[160px] aspect-video sm:aspect-auto cursor-pointer hover:border-white/10 transition-colors">
                        <div className="relative">
                            <ClipboardList className="w-12 h-12 text-orange-500/50 mb-2" />
                            <div className="absolute right-0 bottom-2 bg-card rounded-full p-0.5">
                                <div className="w-4 h-4 rounded-full bg-orange-500/50 flex items-center justify-center">
                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Activity Feed Section */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-medium text-white/90">Recent Activity</h2>
                        <button className="text-blue-active hover:text-blue-400 font-medium text-sm transition-colors">View All</button>
                    </div>

                    <div className="bg-card border border-border rounded-3xl divide-y divide-border">
                        {/* Feed Item 1 */}
                        <div className="p-6 flex justify-between items-center hover:bg-white/[0.02] transition-colors rounded-t-3xl">
                            <div>
                                <div className="text-white font-medium mb-1">New Question Added</div>
                                <div className="text-sm text-text-muted">By Sarah Connor in Mathematics</div>
                            </div>
                            <div className="text-right flex items-center gap-3">
                                <span className="text-sm font-medium text-text-muted">2m ago</span>
                                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
                            </div>
                        </div>

                        {/* Feed Item 2 */}
                        <div className="p-6 flex justify-between items-center hover:bg-white/[0.02] transition-colors">
                            <div>
                                <div className="text-white font-medium mb-1">User Report Generated</div>
                                <div className="text-sm text-text-muted">System auto-generated monthly report</div>
                            </div>
                            <div className="text-right flex items-center gap-3 text-text-muted">
                                <span className="text-sm font-medium">1h ago</span>
                                <div className="w-2 h-2 rounded-full bg-transparent"></div> {/* Spacer to align with green dot above */}
                            </div>
                        </div>
                        {/* Feed Item 3 */}
                        <div className="p-6 flex justify-between items-center hover:bg-white/[0.02] transition-colors rounded-b-3xl">
                            <div>
                                <div className="text-white font-medium mb-1">System Update</div>
                                <div className="text-sm text-text-muted">Version 2.4.1 deployed successfully</div>
                            </div>
                            <div className="text-right flex items-center gap-3 text-text-muted">
                                <span className="text-sm font-medium">3h ago</span>
                                <div className="w-2 h-2 rounded-full bg-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
