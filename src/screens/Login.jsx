import { Mail, Lock, Eye, ArrowRight } from 'lucide-react';

const LoginScreen = ({ setScreen }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#1b2130] text-white">
            <div className="flex items-center justify-between p-4">
                <button className="text-gray-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <div className="flex items-center gap-2 text-blue-500 font-bold uppercase tracking-wider text-sm">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    UNIPORTAL
                </div>
                <button className="text-gray-400 text-sm font-medium">Help</button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="w-full max-w-sm bg-[#22293d] p-8 rounded-3xl border border-white/5 shadow-xl">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-[#2a354f] rounded-2xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM6 20V4h7v5h5v11H6z" />
                                <path d="M8 12h8v2H8zm0 4h5v2H8z" />
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
                    <p className="text-gray-400 text-center text-sm mb-8 px-4">
                        Sign in to access the Question Paper System
                    </p>

                    <div className="flex p-1 bg-[#1a2133] rounded-xl mb-6">
                        <button className="flex-1 py-2.5 bg-blue-500 text-white rounded-lg font-medium text-sm transition-colors">
                            Student
                        </button>
                        <button className="flex-1 py-2.5 text-gray-400 hover:text-white rounded-lg font-medium text-sm transition-colors">
                            Admin
                        </button>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setScreen('manage'); }}>
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-400 tracking-wide uppercase">Email / Domain ID</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="email"
                                    className="w-full pl-11 pr-4 py-3 bg-[#1a2133] border border-[#2a354f] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-white placeholder-gray-500 text-sm transition-colors outline-none"
                                    placeholder="student@university.edu"
                                    defaultValue="student@university.edu"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-gray-400 tracking-wide uppercase">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="password"
                                    className="w-full pl-11 pr-11 py-3 bg-[#1a2133] border border-[#2a354f] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl text-white placeholder-gray-500 text-sm transition-colors outline-none tracking-widest"
                                    placeholder="••••••••"
                                    defaultValue="password"
                                />
                                <button type="button" className="absolute inset-y-0 right-0 pr-3.5 flex items-center">
                                    <Eye className="h-5 w-5 text-gray-500 hover:text-gray-300 transition-colors" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="w-4 h-4 rounded border border-gray-600 group-hover:border-gray-400 bg-transparent flex items-center justify-center transition-colors">
                                </div>
                                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-blue-500 hover:text-blue-400 transition-colors">Forgot Password?</a>
                        </div>

                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-6">
                            Login
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>

            <div className="p-6 text-center text-xs text-gray-500">
                <p className="mb-2">© 2024 University Academic System.</p>
                <div className="flex justify-center gap-4">
                    <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">Contact Support</a>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
