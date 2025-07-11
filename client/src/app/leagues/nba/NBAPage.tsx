import { useState } from "react";
import Sidebar from "../components/Sidebar";
import LeagueHeader from "../components/LeagueHeader";
import Footer from "../components/Footer";
import NBABasketBall from "../../../assets/images/leagues/nba/NBABasketBall.jpg";

const SIDEBAR_WIDTH = 240;
const HEADER_HEIGHT = 160;
const FOOTER_HEIGHT = 130;

const NBAPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="h-screen w-full flex flex-row bg-black overflow-hidden">
            {/* Sidebar for desktop, overlay for mobile */}
            {/* Hamburger for mobile */}
            <button
                className="md:hidden fixed top-4 left-4 z-30 bg-gray-900 bg-opacity-80 p-2 rounded focus:outline-none"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
            >
                <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            {/* Sidebar: hidden on mobile, visible on md+ */}
            <div
                className="h-full hidden md:block"
                style={{ width: SIDEBAR_WIDTH }}
            >
                <Sidebar />
            </div>
            {/* Sidebar overlay for mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 flex md:hidden">
                    <div
                        className="bg-black bg-opacity-80 w-full h-full"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <div
                        className="relative bg-black h-full shadow-lg"
                        style={{ width: SIDEBAR_WIDTH }}
                    >
                        <button
                            className="absolute top-4 right-4 z-50 text-white"
                            onClick={() => setSidebarOpen(false)}
                            aria-label="Close sidebar"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <Sidebar />
                    </div>
                </div>
            )}
            {/* Main area */}
            <div className="flex flex-col h-full flex-1 min-w-0">
                <div
                    className="relative bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${NBABasketBall})`,
                        height: `calc(100vh - ${FOOTER_HEIGHT}px)`,
                        width: "100%",
                    }}
                >
                    <div
                        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(to bottom, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)",
                        }}
                    />
                    {/* Header */}
                    <div
                        className="absolute top-0 left-0 w-full z-20"
                        style={{ height: HEADER_HEIGHT }}
                    >
                        <LeagueHeader />
                    </div>

                    <div
                        className="w-full h-full px-2 sm:px-4 md:px-8 lg:px-16"
                        style={{ paddingTop: HEADER_HEIGHT }}
                    ></div>
                </div>
                {/* Footer */}
                <div style={{ height: FOOTER_HEIGHT }}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default NBAPage;
