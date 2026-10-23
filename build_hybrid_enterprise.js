const fs = require('fs');
const path = require('path');

// Write the complete hybrid enterprise HTML file
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GradArena AI — Enterprise Hiring Intelligence Platform</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts: Inter & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            workspace: '#F5F7FB',
            card: '#FFFFFF',
            navdark: '#151827',
            navhover: '#22263A',
            navborder: '#1E2235',
            primary: {
              DEFAULT: '#107acc',
              hover: '#0d62a4',
              subtle: '#EBF5FC',
              border: '#BCE0F7',
            },
            secondary: {
              DEFAULT: '#3B82F6',
              hover: '#2563EB',
              subtle: '#EFF6FF',
            },
            teal: {
              DEFAULT: '#14B8A6',
              subtle: '#F0FDFA',
            },
            text: {
              primary: '#172033',
              secondary: '#64748B',
              muted: '#8994A7',
            },
            border: {
              subtle: '#E5EAF2',
              focus: '#107acc',
            },
            success: '#16A34A',
            warning: '#D97706',
            error: '#DC2626',
          },
          boxShadow: {
            'card-3d': '0 2px 6px rgba(23, 32, 51, 0.035), 0 10px 28px rgba(23, 32, 51, 0.055)',
            'card-3d-hover': '0 5px 12px rgba(23, 32, 51, 0.045), 0 16px 36px rgba(23, 32, 51, 0.085)',
            'nav-active': '0 4px 14px rgba(16, 122, 204, 0.35)',
            'glass-dropdown': '0 12px 32px rgba(23, 32, 51, 0.12), 0 2px 6px rgba(23, 32, 51, 0.04)',
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: #F5F7FB;
      color: #172033;
      letter-spacing: -0.011em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11', 'ss01';
    }

    h1, h2, h3, h4, h5, h6 {
      letter-spacing: -0.02em;
    }

    .tabular-nums {
      font-variant-numeric: tabular-nums;
    }

    /* 3D Dimensional Card with Layered Soft Shadows */
    .dashboard-card {
      background: #FFFFFF;
      border: 1px solid #E5EAF2;
      border-radius: 18px;
      box-shadow: 0 2px 6px rgba(23, 32, 51, 0.035), 0 10px 28px rgba(23, 32, 51, 0.055);
      transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
    }
    .dashboard-card:hover {
      transform: translateY(-2px);
      border-color: #D8DDF0;
      box-shadow: 0 5px 12px rgba(23, 32, 51, 0.045), 0 16px 36px rgba(23, 32, 51, 0.085);
    }

    /* Modern Light Form Controls */
    .modern-input {
      background: #FFFFFF;
      border: 1px solid #E5EAF2;
      color: #172033;
      border-radius: 12px;
      transition: all 180ms ease;
    }
    .modern-input:focus {
      border-color: #107acc;
      box-shadow: 0 0 0 3px rgba(16, 122, 204, 0.12);
      outline: none;
    }

    /* Pill Active Navigation in Dark Sidebar */
    .active-nav-pill {
      background: linear-gradient(135deg, #107acc 0%, #0c68ab 100%) !important;
      color: #FFFFFF !important;
      font-weight: 600 !important;
      box-shadow: 0 4px 14px rgba(16, 122, 204, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
    }
    .active-nav-pill svg {
      color: #FFFFFF !important;
    }

    /* Inactive Nav Item */
    .inactive-nav-pill {
      color: #8994A7;
      background: transparent;
      border: 1px solid transparent;
      transition: all 180ms ease;
    }
    .inactive-nav-pill:hover {
      color: #FFFFFF;
      background: #22263A;
      border-color: rgba(255, 255, 255, 0.06);
    }

    /* Transitions for Collapsible Sidebar */
    .sidebar-transition {
      transition: width 220ms cubic-bezier(0.16, 1, 0.3, 1), transform 220ms cubic-bezier(0.16, 1, 0.3, 1);
    }
    .content-transition {
      transition: margin-left 220ms cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* Custom subtle scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #F5F7FB;
    }
    ::-webkit-scrollbar-thumb {
      background: #CBD5E1;
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #94A3B8;
    }

    @keyframes live-pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.4; transform: scale(0.9); }
    }
    .live-dot {
      animation: live-pulse 2s ease-in-out infinite;
    }
  </style>
</head>
<body class="min-h-screen flex bg-[#F5F7FB] text-[#172033] antialiased selection:bg-purple-100 selection:text-[#107acc]">

  <!-- Mobile Drawer Backdrop Overlay -->
  <div id="mobileBackdrop" onclick="toggleMobileSidebar()" class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm hidden md:hidden transition-opacity"></div>

  <!-- ============================================================ -->
  <!-- DARK SIDEBAR (250px Expanded / 72px Collapsed)               -->
  <!-- ============================================================ -->
  <aside id="sidebar" class="sidebar-transition fixed top-0 bottom-0 left-0 z-50 bg-[#151827] border-r border-[#1E2235] w-[250px] flex flex-col justify-between select-none shadow-xl -translate-x-full md:translate-x-0">
    
    <div class="flex-1 flex flex-col min-h-0">
      
      <!-- Brand Header -->
        <div id="sidebarHeader" class="h-16 px-4 flex items-center justify-between border-b border-[#1E2235] relative transition-all duration-300">
          <div id="brandBlock" class="flex items-center gap-2.5 cursor-pointer overflow-hidden transition-all duration-200" onclick="switchScreen('dashboard')">
            <img id="sidebarLogo" src="Grad Arena Logo-01.svg" alt="GradArena" class="h-9 w-auto shrink-0 drop-shadow-[0_2px_8px_rgba(16,122,204,0.35)] transition-all duration-200" />
            <div class="brand-text truncate transition-all duration-200">
              <div class="flex items-center gap-1.5">
                <span class="text-xs font-bold tracking-tight text-white uppercase font-mono">Platform</span>
                <span class="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-[#107acc]/20 text-[#38bdf8] border border-[#107acc]/30">AI</span>
              </div>
              <div class="text-[10px] text-[#8994A7] truncate font-mono">Hiring Intelligence</div>
            </div>
          </div>

          <button id="toggleBtn" onclick="toggleSidebar()" title="Toggle Sidebar (Collapse/Expand)" class="w-7 h-7 rounded-lg text-[#8994A7] hover:text-white hover:bg-[#22263A] flex items-center justify-center transition shrink-0 border border-transparent hover:border-white/10">
            <svg id="toggleIcon" class="w-4 h-4 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        </div>

        <!-- Scope Context Capsule -->
        <div id="scopeBlock" class="px-3 pt-3 pb-2 transition-all duration-200">
        <div class="px-3 py-2.5 rounded-xl bg-[#22263A]/60 border border-white/5 flex items-center justify-between shadow-xs">
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="w-2 h-2 rounded-full bg-emerald-400 shrink-0 live-dot shadow-[0_0_8px_rgba(52,211,153,0.6)]"></span>
            <div class="brand-text truncate">
              <div class="text-xs font-semibold text-white truncate">Capgemini GCC</div>
              <div class="text-[11px] text-[#8994A7] truncate">Engineering Practice</div>
            </div>
          </div>
          <span class="brand-text text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-white/5 text-[#8994A7] border border-white/10">HQ</span>
        </div>
      </div>

      <!-- Navigation Tree -->
      <nav class="flex-1 px-3 py-2 space-y-4 overflow-y-auto">
        
        <!-- SECTION 1: WORKSPACE -->
        <div>
          <div class="brand-text px-3 mb-1.5 text-[10px] font-bold tracking-wider text-[#64748B] uppercase">
            Workspace
          </div>
          <div class="space-y-1">
            
            <button onclick="switchScreen('dashboard')" id="nav-dashboard" title="Dashboard" class="nav-item active-nav-pill w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition text-left">
              <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span class="brand-text truncate">Dashboard</span>
            </button>

            <button onclick="switchScreen('creators')" id="nav-creators" title="Manage Test Creators" class="nav-item inactive-nav-pill w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition text-left">
              <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span class="brand-text truncate">Manage Test Creators</span>
            </button>

            <button onclick="switchScreen('test-create')" id="nav-test-create" title="Test Creation Studio" class="nav-item inactive-nav-pill w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition text-left">
              <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <span class="brand-text truncate">Test Creation Studio</span>
            </button>

            <button onclick="switchScreen('tests')" id="nav-tests" title="Tests Library" class="nav-item inactive-nav-pill w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition text-left">
              <div class="flex items-center gap-3 min-w-0">
                <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <span class="brand-text truncate">Tests Library</span>
              </div>
              <span class="brand-text text-xs text-[#8994A7] tabular-nums font-mono px-2 py-0.5 rounded-md bg-white/5">32</span>
            </button>

          </div>
        </div>

        <!-- SECTION 2: AI SCREENING & CONTROL -->
        <div>
          <div class="brand-text px-3 mb-1.5 text-[10px] font-bold tracking-wider text-[#64748B] uppercase">
            AI Screening & Control
          </div>
          <div class="space-y-1">
            
            <button onclick="switchScreen('reviews')" id="nav-reviews" title="Pending Reviews" class="nav-item inactive-nav-pill w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition text-left">
              <div class="flex items-center gap-3 min-w-0">
                <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 14 14"></polyline>
                </svg>
                <span class="brand-text truncate">Pending Reviews</span>
              </div>
              <span class="brand-text text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 tabular-nums">4</span>
            </button>

            <button onclick="switchScreen('candidates')" id="nav-candidates" title="Candidates Pool" class="nav-item inactive-nav-pill w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition text-left">
              <div class="flex items-center gap-3 min-w-0">
                <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
                <span class="brand-text truncate">Candidates Pool</span>
              </div>
              <span class="brand-text text-xs text-[#8994A7] tabular-nums font-mono px-2 py-0.5 rounded-md bg-white/5">284</span>
            </button>

            <button onclick="switchScreen('live')" id="nav-live" title="Live AI Sessions" class="nav-item inactive-nav-pill w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition text-left">
              <div class="flex items-center gap-3 min-w-0">
                <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
                <span class="brand-text truncate">Live AI Sessions</span>
              </div>
              <span class="brand-text text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot"></span> 4
              </span>
            </button>

            <button onclick="switchScreen('chat')" id="nav-chat" title="Message Hub" class="nav-item inactive-nav-pill w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition text-left">
              <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span class="brand-text truncate">Message Hub</span>
            </button>

          </div>
        </div>

      </nav>

    </div>

    <!-- Manager Profile Footer -->
    <div class="p-3 border-t border-[#1E2235] bg-[#151827]">
      <div class="p-2.5 rounded-xl bg-[#22263A]/60 border border-white/5 flex items-center gap-3 shadow-xs">
        <div class="relative shrink-0">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#107acc] to-[#0c68ab] text-white font-bold flex items-center justify-center text-xs shadow-md border border-white/20">
            RG
          </div>
          <span class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#151827]"></span>
        </div>
        <div class="brand-text min-w-0 flex-1">
          <div class="text-xs font-semibold text-white truncate">Rajini Gadi</div>
          <div class="text-[11px] text-[#8994A7] truncate">Department Manager</div>
        </div>
      </div>
    </div>

  </aside>

  <!-- ============================================================ -->
  <!-- MAIN CONTENT AREA (Light Workspace #F5F7FB)                  -->
  <!-- ============================================================ -->
  <div id="mainContent" class="content-transition flex-1 md:ml-[250px] min-h-screen flex flex-col bg-[#F5F7FB]">

    <!-- TOP HEADER: CLEAN LIGHT WITH SUBTLE BORDER -->
    <header class="h-16 px-6 bg-white/95 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-[#E5EAF2] shadow-xs">
      
      <!-- Mobile Toggle & Breadcrumb -->
      <div class="flex items-center gap-3 min-w-0">
        <button onclick="toggleMobileSidebar()" class="md:hidden p-2 rounded-xl text-[#64748B] hover:text-[#172033] hover:bg-[#F5F7FB] border border-[#E5EAF2]">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <div class="flex items-center gap-2 text-xs text-[#64748B]">
          <span id="topNavGroup" class="font-medium">Workspace</span>
          <span class="text-[#CBD5E1]">/</span>
        </div>
        <h1 id="topPageTitle" class="text-base md:text-lg font-bold text-[#172033] tracking-tight truncate">Dashboard</h1>
      </div>

      <!-- Search Input Bar -->
      <div class="hidden md:flex items-center flex-1 max-w-md mx-4">
        <div class="relative w-full">
          <svg class="w-4 h-4 text-[#8994A7] absolute left-3 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="globalSearchInput" placeholder="Search tests, candidate 3D scores, creators... (⌘K)" 
                 class="w-full pl-9 pr-12 py-2 text-xs modern-input placeholder:text-[#8994A7]">
          <kbd class="absolute right-2.5 top-1/2 -translate-y-1/2 px-2 py-0.5 text-[10px] font-mono text-[#8994A7] bg-[#F5F7FB] border border-[#E5EAF2] rounded-md shadow-xs">⌘K</kbd>
        </div>
      </div>

      <!-- Right Header Actions -->
      <div class="flex items-center gap-3 shrink-0">
        
        <!-- AI Engines Status -->
        <span class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 live-dot"></span>
          AI Active
        </span>

        <!-- Credits Pill -->
        <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#EBF5FC] border border-[#BCE0F7] text-[#107acc] text-xs font-semibold shadow-xs">
          <svg class="w-3.5 h-3.5 fill-current text-[#107acc]" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          <span>222.23</span>
          <span class="hidden lg:inline text-[11px] text-[#64748B] font-normal border-l border-[#BCE0F7] pl-2">₹18,520 Val</span>
        </div>

        <!-- Notification Bell -->
        <button class="relative p-2 rounded-xl text-[#64748B] hover:text-[#172033] hover:bg-[#F5F7FB] border border-[#E5EAF2] transition">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white shadow-xs"></span>
        </button>

        <!-- Profile Menu Dropdown Button -->
        <div class="flex items-center gap-2.5 pl-1 cursor-pointer">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#107acc] to-[#0c68ab] text-white font-bold text-xs flex items-center justify-center border border-white/20 shadow-md">
            R
          </div>
          <div class="hidden xl:block text-left">
            <div class="text-xs font-semibold text-[#172033]">Rajini Gadi</div>
            <div class="text-[11px] text-[#64748B]">Manager</div>
          </div>
        </div>

      </div>

    </header>

    <!-- ============================================================ -->
    <!-- VIEW CONTAINER: ALL 11 MANAGER SCREENS                       -->
    <!-- ============================================================ -->
    <main class="p-6 md:p-8 space-y-6 flex-1 max-w-[1500px] w-full mx-auto">
      
      <!-- ============================================================ -->
      <!-- SCREEN 1: MANAGER DASHBOARD                                  -->
      <!-- ============================================================ -->
      <div id="screen-dashboard" class="screen-view space-y-6">
        
        <!-- Top 4 Decision-Oriented 3D Dimensional KPI Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div class="p-5 dashboard-card">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-[#64748B]">Active Hiring Drives</span>
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">+14%</span>
            </div>
            <div class="text-3xl font-bold text-[#172033] mt-3 tabular-nums tracking-tight">32</div>
            <div class="text-xs text-[#64748B] mt-1.5 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#107acc]"></span>
              Across 4 GCC clients
            </div>
          </div>

          <div class="p-5 dashboard-card">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-[#64748B]">Total Candidates Tested</span>
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">+8.2%</span>
            </div>
            <div class="text-3xl font-bold text-[#172033] mt-3 tabular-nums tracking-tight">284</div>
            <div class="text-xs text-[#64748B] mt-1.5 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#3B82F6]"></span>
              216 completed assessments
            </div>
          </div>

          <div class="p-5 dashboard-card">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-[#64748B]">Interview Conversion</span>
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">+5.0%</span>
            </div>
            <div class="text-3xl font-bold text-[#172033] mt-3 tabular-nums tracking-tight">48.2%</div>
            <div class="text-xs text-[#64748B] mt-1.5 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#14B8A6]"></span>
              78 candidates shortlisted (≥80%)
            </div>
          </div>

          <div class="p-5 dashboard-card">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-[#64748B]">Credit Consumption</span>
              <span class="text-xs font-mono text-[#8994A7]">212 Actions</span>
            </div>
            <div class="text-3xl font-bold text-[#172033] mt-3 tabular-nums tracking-tight">13.7 <span class="text-sm font-normal text-[#64748B]">/ day</span></div>
            <div class="text-xs text-[#64748B] mt-1.5 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              ₹18,520 reserve remaining
            </div>
          </div>

        </div>

        <!-- Middle Operational Grid: Funnel Throughput & Review Queue -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <!-- Candidate Throughput Funnel -->
          <div class="lg:col-span-2 p-6 dashboard-card space-y-5">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-sm font-bold text-[#172033] tracking-tight">Recruitment Funnel & Candidate Throughput</h3>
                <p class="text-xs text-[#64748B] mt-0.5">End-to-end candidate stage conversions from test creation to GCC selection</p>
              </div>
              <span class="text-xs font-mono text-[#8994A7] px-2.5 py-1 rounded-lg bg-[#F5F7FB] border border-[#E5EAF2]">Last 30 Days</span>
            </div>

            <!-- Funnel Stage Bars -->
            <div class="space-y-4 pt-2">
              <div>
                <div class="flex items-center justify-between text-xs mb-1.5">
                  <span class="font-semibold text-[#172033]">1. Created Requisitions & Tests</span>
                  <span class="font-mono text-[#64748B]">32 drives (100%)</span>
                </div>
                <div class="w-full h-2 rounded-full bg-[#F5F7FB] overflow-hidden border border-[#E5EAF2]">
                  <div class="h-full bg-gradient-to-r from-[#107acc] to-[#0c68ab] rounded-full" style="width: 100%"></div>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between text-xs mb-1.5">
                  <span class="font-semibold text-[#172033]">2. Candidates Invited via Magic Link</span>
                  <span class="font-mono text-[#64748B]">284 candidates (8.8 avg/test)</span>
                </div>
                <div class="w-full h-2 rounded-full bg-[#F5F7FB] overflow-hidden border border-[#E5EAF2]">
                  <div class="h-full bg-gradient-to-r from-[#107acc] to-[#3B82F6] rounded-full" style="width: 88%"></div>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between text-xs mb-1.5">
                  <span class="font-semibold text-[#172033]">3. Assessments Completed (Dwaani Voice + Coding)</span>
                  <span class="font-mono text-[#64748B]">216 candidates (76.0% turnout)</span>
                </div>
                <div class="w-full h-2 rounded-full bg-[#F5F7FB] overflow-hidden border border-[#E5EAF2]">
                  <div class="h-full bg-gradient-to-r from-[#3B82F6] to-[#14B8A6] rounded-full" style="width: 76%"></div>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between text-xs mb-1.5">
                  <span class="font-semibold text-emerald-700">4. Shortlisted by AI (Composite ≥ 80%)</span>
                  <span class="font-mono text-emerald-700 font-bold">78 qualified (36.1% pass rate)</span>
                </div>
                <div class="w-full h-2 rounded-full bg-[#F5F7FB] overflow-hidden border border-[#E5EAF2]">
                  <div class="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style="width: 36.1%"></div>
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between text-xs mb-1.5">
                  <span class="font-semibold text-teal-700">5. Selected / Hired in GCC</span>
                  <span class="font-mono text-teal-700 font-bold">42 offers accepted (14.8% yield)</span>
                </div>
                <div class="w-full h-2 rounded-full bg-[#F5F7FB] overflow-hidden border border-[#E5EAF2]">
                  <div class="h-full bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full" style="width: 14.8%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pending Manager Approval Gate -->
          <div class="p-6 dashboard-card space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-sm font-bold text-[#172033] tracking-tight">Manager Approval Gate</h3>
                <p class="text-xs text-[#64748B] mt-0.5">Author submissions requiring sign-off</p>
              </div>
              <button onclick="switchScreen('reviews')" class="text-xs font-semibold text-[#107acc] hover:underline">View All (4)</button>
            </div>

            <div class="space-y-3">
              <div class="p-3.5 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] hover:border-[#BCE0F7] transition space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-[#107acc]">Capgemini GCC</span>
                  <span class="text-[11px] text-[#8994A7] font-mono">12m ago</span>
                </div>
                <div class="text-xs font-bold text-[#172033]">Senior Java Microservices Architect</div>
                <div class="text-[11px] text-[#64748B]">Author: K. Prashanti • 15 MCQ + 1 Coding</div>
                <div class="pt-2 flex items-center gap-2">
                  <button onclick="switchScreen('reviews')" class="flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs">Inspect & Approve</button>
                  <button onclick="switchScreen('chat')" class="py-1.5 px-3 rounded-lg text-xs font-medium text-[#64748B] bg-white border border-[#E5EAF2] hover:bg-[#F5F7FB]">Message</button>
                </div>
              </div>

              <div class="p-3.5 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] hover:border-[#BCE0F7] transition space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-[#3B82F6]">Deloitte USI</span>
                  <span class="text-[11px] text-[#8994A7] font-mono">1h ago</span>
                </div>
                <div class="text-xs font-bold text-[#172033]">Data Science & LLM Pipeline Specialist</div>
                <div class="text-[11px] text-[#64748B]">Author: Ananya Sharma • 5 Voice + 2 Coding</div>
                <div class="pt-2 flex items-center gap-2">
                  <button onclick="switchScreen('reviews')" class="flex-1 py-1.5 px-3 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs">Inspect & Approve</button>
                </div>
              </div>
            </div>

            <div class="text-center pt-1">
              <span class="text-[11px] text-[#8994A7]">2 more tests awaiting authorization</span>
            </div>
          </div>

        </div>

        <!-- Bottom Table: Real-Time Candidate Screenings -->
        <div class="p-6 dashboard-card space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-sm font-bold text-[#172033] tracking-tight">Recent Candidate Screenings</h3>
              <p class="text-xs text-[#64748B] mt-0.5">Real-time evaluations powered by GradArena AI 3D scoring</p>
            </div>
            <button onclick="switchScreen('candidates')" class="text-xs font-semibold text-[#107acc] hover:underline">Open Full Talent Ledger →</button>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="text-[#64748B] border-b border-[#E5EAF2] uppercase text-[10px] tracking-wider bg-[#F5F7FB]/50">
                <tr>
                  <th class="py-3 px-3">Candidate</th>
                  <th class="py-3 px-3">Assigned Assessment</th>
                  <th class="py-3 px-3">3D AI Composite</th>
                  <th class="py-3 px-3">Proctor Integrity</th>
                  <th class="py-3 px-3">Status</th>
                  <th class="py-3 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E5EAF2]">
                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="py-3.5 px-3">
                    <div class="font-bold text-[#172033]">S. Siddharth Rao</div>
                    <div class="text-[11px] text-[#8994A7] font-mono">siddharth.rao@gmail.com</div>
                  </td>
                  <td class="py-3.5 px-3 text-[#64748B]">
                    <div class="font-medium text-[#172033]">Lead Python Backend Architect</div>
                    <div class="text-[11px] text-[#8994A7]">Invesco GCC</div>
                  </td>
                  <td class="py-3.5 px-3">
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-emerald-700 font-mono text-sm">88.4%</span>
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Top 5%</span>
                    </div>
                  </td>
                  <td class="py-3.5 px-3">
                    <span class="text-emerald-700 text-xs font-semibold flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Dual-Cam (0 Flags)
                    </span>
                  </td>
                  <td class="py-3.5 px-3">
                    <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Recommended</span>
                  </td>
                  <td class="py-3.5 px-3 text-right">
                    <button onclick="openDossier('S. Siddharth Rao')" class="font-semibold text-[#107acc] hover:underline">View Dossier →</button>
                  </td>
                </tr>

                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="py-3.5 px-3">
                    <div class="font-bold text-[#172033]">Pooja Varma</div>
                    <div class="text-[11px] text-[#8994A7] font-mono">pooja.varma@outlook.com</div>
                  </td>
                  <td class="py-3.5 px-3 text-[#64748B]">
                    <div class="font-medium text-[#172033]">Senior Fullstack (Spring Boot + React)</div>
                    <div class="text-[11px] text-[#8994A7]">Capgemini GCC</div>
                  </td>
                  <td class="py-3.5 px-3">
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-emerald-700 font-mono text-sm">81.5%</span>
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Top 12%</span>
                    </div>
                  </td>
                  <td class="py-3.5 px-3">
                    <span class="text-emerald-700 text-xs font-semibold flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Dual-Cam (0 Flags)
                    </span>
                  </td>
                  <td class="py-3.5 px-3">
                    <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Recommended</span>
                  </td>
                  <td class="py-3.5 px-3 text-right">
                    <button onclick="openDossier('Pooja Varma')" class="font-semibold text-[#107acc] hover:underline">View Dossier →</button>
                  </td>
                </tr>

                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="py-3.5 px-3">
                    <div class="font-bold text-[#172033]">Rohan Kulkarni</div>
                    <div class="text-[11px] text-[#8994A7] font-mono">rohan.kulkarni@gmail.com</div>
                  </td>
                  <td class="py-3.5 px-3 text-[#64748B]">
                    <div class="font-medium text-[#172033]">DevOps Kubernetes Architect</div>
                    <div class="text-[11px] text-[#8994A7]">Deloitte USI</div>
                  </td>
                  <td class="py-3.5 px-3">
                    <div class="flex items-center gap-2">
                      <span class="font-bold text-amber-700 font-mono text-sm">64.2%</span>
                    </div>
                  </td>
                  <td class="py-3.5 px-3">
                    <span class="text-amber-700 text-xs font-semibold flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                      2 Flags (Audio Noise)
                    </span>
                  </td>
                  <td class="py-3.5 px-3">
                    <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">Under Review</span>
                  </td>
                  <td class="py-3.5 px-3 text-right">
                    <button onclick="openDossier('Rohan Kulkarni')" class="font-semibold text-[#107acc] hover:underline">View Dossier →</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 2: MANAGE TEST CREATORS                               -->
      <!-- ============================================================ -->
      <div id="screen-creators" class="screen-view space-y-6 hidden">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-[#172033]">Manage Test Creators</h2>
            <p class="text-xs text-[#64748B]">Supervise test authoring standards, approval turnarounds, and content quotas</p>
          </div>
          <button onclick="alert('Invite Creator dialog: Enter employee email to provision Test Author privileges.')" class="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs flex items-center gap-2 self-start sm:self-auto">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Invite Test Creator
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Total Assigned Authors</div>
            <div class="text-2xl font-bold text-[#172033] mt-2 tabular-nums">14 Creators</div>
          </div>
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Active Drafts in Authoring</div>
            <div class="text-2xl font-bold text-[#172033] mt-2 tabular-nums">38 Assessments</div>
          </div>
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Avg First-Pass Approval</div>
            <div class="text-2xl font-bold text-emerald-700 mt-2 tabular-nums">94.2%</div>
          </div>
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Avg Review Turnaround</div>
            <div class="text-2xl font-bold text-[#172033] mt-2 tabular-nums">2.4 Hours</div>
          </div>
        </div>

        <div class="p-6 dashboard-card space-y-4">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div class="relative w-full sm:w-72">
              <input type="text" placeholder="Search by creator name or specialization..." class="w-full p-2.5 pl-9 text-xs modern-input">
              <svg class="w-4 h-4 text-[#8994A7] absolute left-3 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <div class="flex items-center gap-2 self-end sm:self-auto text-xs">
              <select class="p-2 modern-input text-xs text-[#64748B]">
                <option>All Specializations</option>
                <option>Java & Microservices</option>
                <option>Cloud & DevOps</option>
                <option>AI & LLMs</option>
              </select>
              <span class="text-[#8994A7] font-mono">Showing 14 active authors</span>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="text-[#64748B] border-b border-[#E5EAF2] uppercase text-[10px] tracking-wider bg-[#F5F7FB]/50">
                <tr>
                  <th class="py-3 px-3.5">Test Creator</th>
                  <th class="py-3 px-3.5">Specialization</th>
                  <th class="py-3 px-3.5">Active Assignments</th>
                  <th class="py-3 px-3.5">Workload Quota</th>
                  <th class="py-3 px-3.5">Approval Score</th>
                  <th class="py-3 px-3.5">Status</th>
                  <th class="py-3 px-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E5EAF2]">
                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="p-3.5 font-medium text-[#172033]">
                    <div class="font-bold text-[#172033]">K. Prashanti</div>
                    <div class="text-[11px] text-[#8994A7]">prashanti.k@gadidigital.com</div>
                  </td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#EBF5FC] text-[#107acc] border border-[#BCE0F7]">Java & Microservices</span></td>
                  <td class="p-3.5 font-mono">4 Published • 2 Review</td>
                  <td class="p-3.5">
                    <div class="w-24 h-1.5 rounded-full bg-[#E5EAF2] overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-[#107acc] to-[#0c68ab] rounded-full" style="width: 75%"></div>
                    </div>
                    <span class="text-[10px] text-[#8994A7] font-mono mt-0.5 block">6 / 8 Cap</span>
                  </td>
                  <td class="p-3.5 font-mono text-emerald-700 font-bold">96.4%</td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Active</span></td>
                  <td class="p-3.5 text-right space-x-2">
                    <button onclick="openCreatorProfile('K. Prashanti')" class="font-semibold text-[#107acc] hover:underline">View Profile</button>
                    <button onclick="switchScreen('chat')" class="text-[#64748B] hover:text-[#172033]">Message</button>
                  </td>
                </tr>

                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="p-3.5 font-medium text-[#172033]">
                    <div class="font-bold text-[#172033]">P. Hemachandra</div>
                    <div class="text-[11px] text-[#8994A7]">hemachandra.p@gadidigital.com</div>
                  </td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#EFF6FF] text-[#3B82F6] border border-[#BFDBFE]">Cloud & Distributed DB</span></td>
                  <td class="p-3.5 font-mono">5 Published • 1 Review</td>
                  <td class="p-3.5">
                    <div class="w-24 h-1.5 rounded-full bg-[#E5EAF2] overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-[#3B82F6] to-[#14B8A6] rounded-full" style="width: 88%"></div>
                    </div>
                    <span class="text-[10px] text-[#8994A7] font-mono mt-0.5 block">7 / 8 Cap</span>
                  </td>
                  <td class="p-3.5 font-mono text-emerald-700 font-bold">92.1%</td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Active</span></td>
                  <td class="p-3.5 text-right space-x-2">
                    <button onclick="openCreatorProfile('P. Hemachandra')" class="font-semibold text-[#107acc] hover:underline">View Profile</button>
                    <button onclick="switchScreen('chat')" class="text-[#64748B] hover:text-[#172033]">Message</button>
                  </td>
                </tr>

                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="p-3.5 font-medium text-[#172033]">
                    <div class="font-bold text-[#172033]">Ananya Sharma</div>
                    <div class="text-[11px] text-[#8994A7]">ananya.s@gadidigital.com</div>
                  </td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-medium bg-purple-50 text-purple-700 border border-purple-200">Data Science & LLMs</span></td>
                  <td class="p-3.5 font-mono">3 Published • 1 Review</td>
                  <td class="p-3.5">
                    <div class="w-24 h-1.5 rounded-full bg-[#E5EAF2] overflow-hidden">
                      <div class="h-full bg-amber-500 rounded-full" style="width: 100%"></div>
                    </div>
                    <span class="text-[10px] text-amber-600 font-mono mt-0.5 block">8 / 8 Full</span>
                  </td>
                  <td class="p-3.5 font-mono text-emerald-700 font-bold">98.0%</td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">At Capacity</span></td>
                  <td class="p-3.5 text-right space-x-2">
                    <button onclick="openCreatorProfile('Ananya Sharma')" class="font-semibold text-[#107acc] hover:underline">View Profile</button>
                    <button onclick="switchScreen('chat')" class="text-[#64748B] hover:text-[#172033]">Message</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 3: TEST CREATOR PROFILE                               -->
      <!-- ============================================================ -->
      <div id="screen-creator-detail" class="screen-view space-y-6 hidden">
        <div class="p-6 dashboard-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#107acc] to-[#0c68ab] text-white font-bold text-xl flex items-center justify-center shadow-md">
              KP
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h2 id="creatorProfileName" class="text-xl font-bold text-[#172033]">K. Prashanti</h2>
                <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Active Author</span>
              </div>
              <p class="text-xs text-[#64748B] mt-0.5">Senior Assessment Specialist — Java & Cloud Engineering Corridors</p>
              <div class="flex items-center gap-3 text-xs text-[#8994A7] mt-1 font-mono">
                <span>prashanti.k@gadidigital.com</span>
                <span>•</span>
                <span>Reports to: Rajini Gadi (Manager)</span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2.5">
            <button onclick="switchScreen('creators')" class="px-3.5 py-2 rounded-xl text-xs font-medium text-[#64748B] bg-white border border-[#E5EAF2] hover:bg-[#F5F7FB]">← Back to Creators</button>
            <button onclick="switchScreen('chat')" class="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs">Direct Message</button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Total Authored Assessments</div>
            <div class="text-2xl font-bold text-[#172033] mt-2 tabular-nums">14 Tests</div>
            <div class="text-[11px] text-[#8994A7] mt-1">10 published, 4 in review</div>
          </div>
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">First-Pass Approval Rating</div>
            <div class="text-2xl font-bold text-emerald-700 mt-2 tabular-nums">96.4%</div>
            <div class="text-[11px] text-[#8994A7] mt-1">High quality questions</div>
          </div>
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Avg Review Turnaround</div>
            <div class="text-2xl font-bold text-[#172033] mt-2 tabular-nums">2.1 Hours</div>
            <div class="text-[11px] text-[#8994A7] mt-1">Fastest in department</div>
          </div>
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Candidates Evaluated</div>
            <div class="text-2xl font-bold text-[#172033] mt-2 tabular-nums">142 Candidates</div>
            <div class="text-[11px] text-[#8994A7] mt-1">71.2% average score</div>
          </div>
        </div>

        <div class="p-6 dashboard-card space-y-4">
          <h3 class="text-sm font-bold text-[#172033]">Authored Assessments Portfolio</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="text-[#64748B] border-b border-[#E5EAF2] uppercase text-[10px] tracking-wider bg-[#F5F7FB]/50">
                <tr>
                  <th class="py-3 px-3">Test ID & Title</th>
                  <th class="py-3 px-3">Client Requisition</th>
                  <th class="py-3 px-3">Format & Structure</th>
                  <th class="py-3 px-3">Candidates</th>
                  <th class="py-3 px-3">Status</th>
                  <th class="py-3 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E5EAF2]">
                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="p-3 font-semibold text-[#172033]">TST-8842: Senior Java Microservices Architect</td>
                  <td class="p-3 text-[#64748B]">Capgemini GCC</td>
                  <td class="p-3 font-mono">15 MCQ + 1 Coding Challenge (60m)</td>
                  <td class="p-3 font-mono">124 Tested</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Published</span></td>
                  <td class="p-3 text-right"><button onclick="switchScreen('test-detail')" class="font-semibold text-[#107acc] hover:underline">Inspect →</button></td>
                </tr>
                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="p-3 font-semibold text-[#172033]">TST-8841: Lead Python Backend Architect</td>
                  <td class="p-3 text-[#64748B]">Invesco GCC</td>
                  <td class="p-3 font-mono">15 MCQ + 1 Coding Challenge (60m)</td>
                  <td class="p-3 font-mono">98 Tested</td>
                  <td class="p-3"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Published</span></td>
                  <td class="p-3 text-right"><button onclick="switchScreen('test-detail')" class="font-semibold text-[#107acc] hover:underline">Inspect →</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 4: TEST CREATION STUDIO (5 FLUID TABS)                -->
      <!-- ============================================================ -->
      <div id="screen-test-create" class="screen-view space-y-6 hidden">
        
        <!-- Studio Header with Auto-save & Launch Status -->
        <div class="p-6 dashboard-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#107acc] to-[#0c68ab] text-white flex items-center justify-center shrink-0 shadow-md">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div>
              <h2 class="text-base font-bold text-[#172033] tracking-tight">Assessment & Interview Architecture Studio</h2>
              <p class="text-xs text-[#64748B]">Orchestrate multi-modal screening funnels: proctored technical evaluations, conversational voice AI, and resume ATS calibration.</p>
            </div>
          </div>
          <div class="flex items-center gap-3 self-end md:self-auto">
            <span class="px-3 py-1.5 rounded-lg text-xs font-mono text-[#64748B] bg-[#F5F7FB] border border-[#E5EAF2] flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Draft • Auto-saved
            </span>
            <button onclick="previewCandidatePortal()" class="px-3.5 py-2 rounded-xl text-xs font-medium text-[#64748B] bg-white border border-[#E5EAF2] hover:bg-[#F5F7FB] flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-[#8994A7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Candidate Preview
            </button>
            <button onclick="saveAndActivateWorkflow()" class="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Deploy Campaign
            </button>
          </div>
        </div>

        <!-- 5-Stage Studio Navigation Tabs -->
        <div class="p-2 dashboard-card">
          <div class="grid grid-cols-2 md:grid-cols-5 gap-2">
            
            <button onclick="switchStudioTab('pipeline')" id="tab-nav-pipeline" class="studio-tab-btn active-nav-pill py-3 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition text-left">
              <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              <span class="truncate font-medium">1. Pipeline & Gating</span>
            </button>

            <button onclick="switchStudioTab('builder')" id="tab-nav-builder" class="studio-tab-btn inactive-nav-pill py-3 px-3 rounded-xl text-xs flex items-center justify-between gap-1 transition text-left">
              <div class="flex items-center gap-2 truncate">
                <svg class="w-4 h-4 shrink-0 text-[#8994A7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path></svg>
                <span class="truncate font-medium text-[#64748B]">2. GradArena Test Builder</span>
              </div>
              <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#F5F7FB] text-[#8994A7] border border-[#E5EAF2]">16 Qs</span>
            </button>

            <button onclick="switchStudioTab('resumes')" id="tab-nav-resumes" class="studio-tab-btn inactive-nav-pill py-3 px-3 rounded-xl text-xs flex items-center justify-between gap-1 transition text-left">
              <div class="flex items-center gap-2 truncate">
                <svg class="w-4 h-4 shrink-0 text-[#8994A7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                <span class="truncate font-medium text-[#64748B]">3. Resume Screening & AI ATS</span>
              </div>
              <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">4 Staged</span>
            </button>

            <button onclick="switchStudioTab('proctor')" id="tab-nav-proctor" class="studio-tab-btn inactive-nav-pill py-3 px-3 rounded-xl text-xs flex items-center justify-between gap-1 transition text-left">
              <div class="flex items-center gap-2 truncate">
                <svg class="w-4 h-4 shrink-0 text-[#8994A7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <span class="truncate font-medium text-[#64748B]">4. Proctoring & Security</span>
              </div>
              <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#F5F7FB] text-[#8994A7] border border-[#E5EAF2]">Dual-Cam</span>
            </button>

            <button onclick="switchStudioTab('blueprint')" id="tab-nav-blueprint" class="studio-tab-btn inactive-nav-pill py-3 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition text-left">
              <svg class="w-4 h-4 shrink-0 text-[#8994A7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span class="truncate font-medium text-[#64748B]">5. Review & Deploy</span>
            </button>

          </div>
        </div>

        <!-- ========================================== -->
        <!-- TAB 1: PIPELINE & GATING CONFIG            -->
        <!-- ========================================== -->
        <div id="studio-pane-pipeline" class="studio-pane space-y-6">
          
          <!-- Requisition Metadata -->
          <div class="p-6 dashboard-card space-y-4">
            <div class="flex items-center justify-between border-b border-[#E5EAF2] pb-3">
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#64748B] font-mono">1. Assessment Requisition Scope</h3>
                <p class="text-xs text-[#8994A7]">Define campaign parameters and associated hiring entity</p>
              </div>
              <span class="text-xs font-mono text-[#8994A7]">REQ-2026-CLOUD-994</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-semibold text-[#172033] mb-1.5">Assessment Workflow Title *</label>
                <input id="workflowTitleInput" type="text" value="Senior Java & Distributed Cloud Architect" class="w-full p-2.5 text-xs modern-input font-medium">
              </div>
              <div>
                <label class="block text-xs font-semibold text-[#172033] mb-1.5">Hiring Enterprise Tenant *</label>
                <select class="w-full p-2.5 text-xs modern-input text-[#172033]">
                  <option>Capgemini GCC - Hyderabad</option>
                  <option>Invesco Enterprise Hub</option>
                  <option>Deloitte USI Tech</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-[#172033] mb-1.5">Target Engineering Stream</label>
                <input type="text" value="Platform Engineering & Microservices" class="w-full p-2.5 text-xs modern-input text-[#64748B]" readonly>
              </div>
            </div>
          </div>

          <!-- Stage Selection Grid -->
          <div class="p-6 dashboard-card space-y-4">
            <div class="flex items-center justify-between border-b border-[#E5EAF2] pb-3">
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#64748B] font-mono">2. Multi-Stage Pipeline Composition</h3>
                <p class="text-xs text-[#8994A7]">Select and configure the assessment components to execute in this hiring funnel</p>
              </div>
              <span id="workflowTypeBadge" class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#EBF5FC] text-[#107acc] border border-[#BCE0F7]">Combined 2-Stage Funnel</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <!-- Card: Dwaani AI Voice Interview -->
              <div class="p-5 rounded-2xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-4 hover:border-[#BCE0F7] transition">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-[#107acc]/10 text-[#107acc] flex items-center justify-center shrink-0 border border-[#107acc]/20">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="font-bold text-sm text-[#172033]">Dwaani AI Voice Interview</span>
                        <span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#EBF5FC] text-[#107acc] border border-[#BCE0F7]">Voice AI</span>
                      </div>
                      <p class="text-[11px] text-[#64748B]">Real-time conversational voice interview with adaptive probing & 3D scoring</p>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="check-stage-dwaani" type="checkbox" checked onchange="toggleStage('dwaani')" class="sr-only peer">
                    <div class="w-11 h-6 bg-[#CBD5E1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#CBD5E1] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#107acc]"></div>
                  </label>
                </div>

                <div class="pt-2 border-t border-[#E5EAF2] space-y-2">
                  <div class="flex items-center justify-between text-xs text-[#8994A7] font-mono">
                    <span>INTERVIEW SOURCE:</span>
                    <span class="text-[#107acc]">Groq Llama-3 Engine</span>
                  </div>
                  <div class="space-y-1.5 text-xs text-[#172033]">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="dwaani_mode" value="new" checked onchange="setStageMode('dwaani', 'new')" class="accent-[#107acc]">
                      <span>Create New AI Voice Interview Template</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="dwaani_mode" value="existing" onchange="setStageMode('dwaani', 'existing')" class="accent-[#107acc]">
                      <span>Select Existing Library Template</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Card: GradArena Technical Assessment -->
              <div class="p-5 rounded-2xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-4 hover:border-[#BFDBFE] transition">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center shrink-0 border border-[#3B82F6]/20">
                      <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="font-bold text-sm text-[#172033]">GradArena Proctored Assessment</span>
                        <span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#EFF6FF] text-[#3B82F6] border border-[#BFDBFE]">Proctored Code</span>
                      </div>
                      <p class="text-[11px] text-[#64748B]">MCQs, algorithmic coding sandbox & dual-camera live proctoring</p>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input id="check-stage-gradarena" type="checkbox" checked onchange="toggleStage('gradarena')" class="sr-only peer">
                    <div class="w-11 h-6 bg-[#CBD5E1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-[#CBD5E1] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#3B82F6]"></div>
                  </label>
                </div>

                <div class="pt-2 border-t border-[#E5EAF2] space-y-2">
                  <div class="flex items-center justify-between text-xs text-[#8994A7] font-mono">
                    <span>ASSESSMENT SOURCE:</span>
                    <span class="text-[#3B82F6]">Coding Sandbox & MCQ</span>
                  </div>
                  <div class="space-y-1.5 text-xs text-[#172033]">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gradarena_mode" value="new" checked onchange="setStageMode('gradarena', 'new')" class="accent-[#3B82F6]">
                      <span>Create New Assessment in Studio (Tab 2)</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="gradarena_mode" value="existing" onchange="setStageMode('gradarena', 'existing')" class="accent-[#3B82F6]">
                      <span>Select Existing Assessment (TST-8842)</span>
                    </label>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Section 3: Sequence Configuration -->
          <div id="section-sequence-config" class="p-6 dashboard-card space-y-4">
            <div class="flex items-center justify-between border-b border-[#E5EAF2] pb-3">
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#64748B] font-mono">3. Execution Sequence & Ordering</h3>
                <p class="text-xs text-[#8994A7]">Determine which assessment runs first and how candidates unlock the next stage</p>
              </div>
              <button onclick="swapSequence()" class="text-xs font-semibold text-[#107acc] hover:underline flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EBF5FC] border border-[#BCE0F7]">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Swap Execution Sequence
              </button>
            </div>

            <!-- Sequence Choice Radios -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label id="label-seq-dwaani-first" class="p-4 rounded-xl border border-[#BCE0F7] bg-[#EBF5FC] flex items-start gap-3 cursor-pointer transition shadow-xs">
                <input type="radio" name="flow_sequence" value="dwaani_first" checked onchange="setSequence('dwaani_first')" class="mt-1 accent-[#107acc]">
                <div>
                  <div class="font-bold text-xs text-[#172033]">Option A: Dwaani AI Voice → GradArena Assessment</div>
                  <div class="text-[11px] text-[#64748B] mt-0.5">High-volume automated voice screening filters candidates first; qualifiers advance to proctored technical sandbox.</div>
                </div>
              </label>

              <label id="label-seq-gradarena-first" class="p-4 rounded-xl border border-[#E5EAF2] bg-white hover:border-[#BCE0F7] flex items-start gap-3 cursor-pointer transition">
                <input type="radio" name="flow_sequence" value="gradarena_first" onchange="setSequence('gradarena_first')" class="mt-1 accent-[#107acc]">
                <div>
                  <div class="font-bold text-xs text-[#172033]">Option B: GradArena Assessment → Dwaani AI Voice</div>
                  <div class="text-[11px] text-[#64748B] mt-0.5">Algorithmic technical assessment runs first; candidates meeting code threshold proceed to AI voice interview.</div>
                </div>
              </label>
            </div>

            <!-- Visual Flow Representation -->
            <div class="p-4 rounded-xl bg-[#F5F7FB] border border-[#E5EAF2] space-y-2">
              <div class="text-[11px] font-mono text-[#8994A7] font-semibold">ACTIVE PIPELINE EXECUTION DIAGRAM:</div>
              <div id="visual-flow-diagram" class="flex flex-col sm:flex-row items-center gap-3 text-xs">
                <!-- Dynamically populated by updateFlowUI() -->
              </div>
            </div>
          </div>

          <!-- Section 4: Pass Thresholds & Progression Rules -->
          <div class="p-6 dashboard-card space-y-4">
            <div class="flex items-center justify-between border-b border-[#E5EAF2] pb-3">
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#64748B] font-mono">4. Stage Cutoffs & Progression Rules</h3>
                <p class="text-xs text-[#8994A7]">Calibrate individual passing thresholds and automated branch policies upon failure</p>
              </div>
            </div>

            <div id="stage-thresholds-container" class="space-y-4">
              <!-- Dynamically populated by updateFlowUI() -->
            </div>
          </div>

          <!-- Tab Action Bar -->
          <div class="flex items-center justify-between pt-2">
            <button onclick="switchScreen('dashboard')" class="px-4 py-2 rounded-xl text-xs font-medium text-[#64748B] bg-white border border-[#E5EAF2] hover:bg-[#F5F7FB]">Cancel</button>
            <button onclick="switchStudioTab('builder')" class="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs flex items-center gap-2">
              <span>Next: GradArena Test Builder</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>

        </div>

        <!-- ========================================== -->
        <!-- TAB 2: GRADARENA TEST & QUESTION BUILDER   -->
        <!-- ========================================== -->
        <div id="studio-pane-builder" class="studio-pane space-y-6 hidden">
          
          <!-- Test Basic Config -->
          <div class="p-6 dashboard-card space-y-4">
            <div class="flex items-center justify-between border-b border-[#E5EAF2] pb-3">
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#64748B] font-mono">GradArena Assessment Parameters</h3>
                <p class="text-xs text-[#8994A7]">Configure test duration, marks allocation, negative marking, and navigation modes</p>
              </div>
              <span class="text-xs font-mono text-[#8994A7]">ID: TST-8842</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="md:col-span-2">
                <label class="block text-xs font-semibold text-[#172033] mb-1.5">Assessment Title</label>
                <input type="text" value="Senior Java Microservices & Cloud Assessment" class="w-full p-2.5 text-xs modern-input font-medium">
              </div>
              <div>
                <label class="block text-xs font-semibold text-[#172033] mb-1.5">Total Duration</label>
                <div class="flex items-center gap-2">
                  <input type="number" value="60" class="w-full p-2.5 text-xs modern-input font-mono">
                  <span class="text-xs text-[#64748B]">Mins</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-semibold text-[#172033] mb-1.5">Total Marks</label>
                <input type="number" value="100" class="w-full p-2.5 text-xs modern-input font-mono" readonly>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div>
                <label class="block text-xs font-semibold text-[#172033] mb-1.5">Negative Marking</label>
                <select class="w-full p-2.5 text-xs modern-input text-[#172033]">
                  <option>Enabled (-0.5 per wrong MCQ)</option>
                  <option>Disabled (No penalty)</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-[#172033] mb-1.5">Question Shuffle Mode</label>
                <select class="w-full p-2.5 text-xs modern-input text-[#172033]">
                  <option>Randomize Order per Candidate</option>
                  <option>Fixed Sequential Order</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-[#172033] mb-1.5">Section Time Limit</label>
                <select class="w-full p-2.5 text-xs modern-input text-[#172033]">
                  <option>Strict per-section timers (20m/30m/10m)</option>
                  <option>Flexible global timer</option>
                </select>
              </div>
            </div>
          </div>

          <!-- AI Question Studio Generator Chamber -->
          <div class="p-6 dashboard-card border-[#BCE0F7] bg-gradient-to-r from-white via-[#EBF5FC]/40 to-white space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-[#107acc] text-white flex items-center justify-center text-xs shadow-xs">
                  ✨
                </div>
                <div>
                  <h4 class="text-xs font-bold text-[#172033]">AI Question Studio (Groq Llama-3 Rapid Synthesis)</h4>
                  <p class="text-[11px] text-[#64748B]">Generate targeted algorithmic and architectural questions directly from job specifications</p>
                </div>
              </div>
              <span class="text-[10px] font-mono text-[#107acc] bg-[#EBF5FC] border border-[#BCE0F7] px-2 py-0.5 rounded-full">Zero Hallucination Rubric</span>
            </div>

            <div class="flex items-center gap-3 pt-1">
              <input id="aiGenPromptInput" type="text" placeholder="e.g. Distributed Saga rollback orchestrations with Apache Kafka & Spring Boot 3" class="flex-1 p-2.5 text-xs modern-input">
              <button onclick="triggerAiQuestionGeneration()" class="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#107acc] hover:bg-[#0d62a4] shadow-xs flex items-center gap-1.5 shrink-0">
                <span>Generate Questions</span>
              </button>
            </div>
          </div>

          <!-- Section Tabs & Question Editor -->
          <div class="p-6 dashboard-card space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5EAF2] pb-3">
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#64748B] font-mono">Test Sections & Question Breakdown</h3>
                <p class="text-xs text-[#8994A7]">Divide test into structured modules with independent time limits and question pools</p>
              </div>
              <button onclick="alert('Add Section: Choose between MCQ pool, Coding Sandbox, or System Design.')" class="text-xs font-semibold text-[#107acc] hover:underline flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#EBF5FC] border border-[#BCE0F7] self-start sm:self-auto">
                + Add Section
              </button>
            </div>

            <!-- Section Pills -->
            <div class="flex items-center gap-2 border-b border-[#E5EAF2] pb-2 text-xs">
              <button onclick="switchTestSection('mcq')" id="btn-sec-mcq" class="px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#172033] text-white">Section 1: Architecture & Concurrency MCQs (15 Qs • 30 Marks)</button>
              <button onclick="switchTestSection('coding')" id="btn-sec-coding" class="px-3.5 py-2 rounded-xl text-xs font-medium text-[#64748B] hover:text-[#172033] hover:bg-[#F5F7FB] transition">Section 2: Algorithmic Coding Challenge (1 Problem • 40 Marks)</button>
              <button onclick="switchTestSection('essay')" id="btn-sec-essay" class="px-3.5 py-2 rounded-xl text-xs font-medium text-[#64748B] hover:text-[#172033] hover:bg-[#F5F7FB] transition">Section 3: System Design & Scalability (2 Qs • 30 Marks)</button>
            </div>

            <!-- SUBPANE: MCQ QUESTIONS -->
            <div id="subpane-sec-mcq" class="space-y-4">
              <div class="p-4 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-3">
                <div class="flex items-center justify-between text-xs">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-[#172033]">Question 1 of 15 (Single Choice MCQ)</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">+2.0 / -0.5 Marks</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <button class="text-xs text-[#64748B] hover:text-[#172033]">Duplicate</button>
                    <button class="text-xs text-rose-600 hover:underline">Delete</button>
                  </div>
                </div>

                <div>
                  <label class="block text-[11px] font-semibold text-[#64748B] mb-1">Question Prompt</label>
                  <textarea rows="2" class="w-full p-2.5 text-xs modern-input font-mono text-[#172033]">In an Apache Kafka consumer group processing microservices events, which partition assignment strategy guarantees that existing consumers retain their partition assignments during an incremental group rebalance, avoiding full stop-the-world rebalance storms?</textarea>
                </div>

                <div class="space-y-2 pt-1 text-xs">
                  <label class="block text-[11px] font-semibold text-[#64748B]">Options (Select radio button for Correct Answer):</label>
                  
                  <div class="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-[#E5EAF2]">
                    <input type="radio" name="q1_opt" class="accent-[#107acc]">
                    <span class="font-mono text-[#8994A7] font-semibold">A</span>
                    <input type="text" value="org.apache.kafka.clients.consumer.RangeAssignor" class="flex-1 text-xs bg-transparent border-0 focus:outline-none text-[#172033]">
                  </div>

                  <div class="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-[#E5EAF2]">
                    <input type="radio" name="q1_opt" class="accent-[#107acc]">
                    <span class="font-mono text-[#8994A7] font-semibold">B</span>
                    <input type="text" value="org.apache.kafka.clients.consumer.RoundRobinAssignor" class="flex-1 text-xs bg-transparent border-0 focus:outline-none text-[#172033]">
                  </div>

                  <div class="flex items-center gap-3 p-2.5 rounded-lg bg-[#EBF5FC] border border-[#BCE0F7]">
                    <input type="radio" name="q1_opt" checked class="accent-[#107acc]">
                    <span class="font-mono text-[#107acc] font-bold">C</span>
                    <input type="text" value="org.apache.kafka.clients.consumer.CooperativeStickyAssignor" class="flex-1 text-xs bg-transparent border-0 focus:outline-none text-[#172033] font-semibold">
                    <span class="text-[10px] font-bold font-mono text-[#107acc] uppercase px-2 py-0.5 rounded bg-white border border-[#BCE0F7]">Correct Answer</span>
                  </div>

                  <div class="flex items-center gap-3 p-2.5 rounded-lg bg-white border border-[#E5EAF2]">
                    <input type="radio" name="q1_opt" class="accent-[#107acc]">
                    <span class="font-mono text-[#8994A7] font-semibold">D</span>
                    <input type="text" value="org.apache.kafka.clients.consumer.StickyAssignor (Eager)" class="flex-1 text-xs bg-transparent border-0 focus:outline-none text-[#172033]">
                  </div>
                </div>
              </div>
            </div>

            <!-- SUBPANE: CODING CHALLENGE (Hidden by default) -->
            <div id="subpane-sec-coding" class="space-y-4 hidden">
              <div class="p-4 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-3">
                <div class="flex items-center justify-between text-xs">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-[#172033]">Problem 1: High-Throughput Concurrent Task Queue</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-50 text-sky-700 border border-sky-200">40 Marks</span>
                  </div>
                  <span class="text-xs text-[#64748B] font-mono">Languages: Java 17/21, Python 3.11, Go 1.22</span>
                </div>

                <div>
                  <label class="block text-[11px] font-semibold text-[#64748B] mb-1">Problem Specification & Constraints</label>
                  <textarea rows="3" class="w-full p-2.5 text-xs modern-input font-mono text-[#172033]">Implement a non-blocking Priority Task Scheduler that manages up to 10,000 asynchronous microservice jobs per second. Tasks with higher priority must preempt lower priority executions without causing thread starvation. Include error isolation such that any unhandled exception in an individual task does not terminate the scheduling daemon.</textarea>
                </div>

                <!-- Test Cases Suite Table -->
                <div class="pt-2">
                  <div class="flex items-center justify-between text-xs mb-2">
                    <span class="font-semibold text-[#172033]">Compiler Test Suite (Public + Hidden Stress Cases)</span>
                    <button onclick="addTestCaseRow()" class="text-xs font-semibold text-[#3B82F6] hover:underline">+ Add Test Case</button>
                  </div>
                  <table class="w-full text-left text-xs border border-[#E5EAF2] rounded-xl overflow-hidden bg-white">
                    <thead class="bg-[#F5F7FB] text-[#64748B] uppercase text-[10px] font-mono border-b border-[#E5EAF2]">
                      <tr>
                        <th class="p-2.5">Test Case ID</th>
                        <th class="p-2.5">Input Parameters</th>
                        <th class="p-2.5">Expected Output</th>
                        <th class="p-2.5">Score Weight</th>
                        <th class="p-2.5">Visibility</th>
                        <th class="p-2.5 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody id="testCaseRowsContainer" class="divide-y divide-[#E5EAF2]">
                      <tr>
                        <td class="p-2.5 font-bold text-[#172033] font-mono">TC-01</td>
                        <td class="p-2.5 text-[#64748B] font-mono">Tasks: [p=3, p=1, p=5], ThreadPool=2</td>
                        <td class="p-2.5 text-emerald-700 font-mono font-semibold">ExecOrder: [p=5, p=3, p=1]</td>
                        <td class="p-2.5 font-mono text-[#172033]">10 Marks</td>
                        <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[9px] bg-[#F5F7FB] text-[#64748B] border border-[#E5EAF2]">Public Sample</span></td>
                        <td class="p-2.5 text-right"><button onclick="this.closest('tr').remove()" class="text-rose-600 hover:underline">Delete</button></td>
                      </tr>
                      <tr>
                        <td class="p-2.5 font-bold text-[#172033] font-mono">TC-02</td>
                        <td class="p-2.5 text-[#64748B] font-mono">Stress: 10,000 tasks concurrently dispatched</td>
                        <td class="p-2.5 text-emerald-700 font-mono font-semibold">0 Deadlocks, Latency &lt; 45ms</td>
                        <td class="p-2.5 font-mono text-[#172033]">30 Marks</td>
                        <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[9px] bg-purple-50 text-purple-700 border border-purple-200">Hidden Evaluation</span></td>
                        <td class="p-2.5 text-right"><button onclick="this.closest('tr').remove()" class="text-rose-600 hover:underline">Delete</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- SUBPANE: SYSTEM DESIGN (Hidden by default) -->
            <div id="subpane-sec-essay" class="space-y-4 hidden">
              <div class="p-4 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-3">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-[#172033]">Design Scenario 1: Multi-Region Saga Orchestration</span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-50 text-purple-700 border border-purple-200">20 Marks</span>
                </div>
                <textarea rows="3" class="w-full p-2.5 text-xs modern-input font-mono text-[#172033]">Candidate must architect an event-driven distributed Saga pattern for credit card transactions spanning EU and US data residency zones with compensating transactions on bank gateway timeouts.</textarea>
              </div>
            </div>

          </div>

          <!-- Tab Action Bar -->
          <div class="flex items-center justify-between pt-2">
            <button onclick="switchStudioTab('pipeline')" class="px-4 py-2 rounded-xl text-xs font-medium text-[#64748B] bg-white border border-[#E5EAF2] hover:bg-[#F5F7FB]">← Back to Pipeline</button>
            <button onclick="switchStudioTab('resumes')" class="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs flex items-center gap-2">
              <span>Next: Resume Screening & ATS</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>

        </div>

        <!-- ========================================== -->
        <!-- TAB 3: RESUME SCREENING & AI ATS           -->
        <!-- ========================================== -->
        <div id="studio-pane-resumes" class="studio-pane space-y-6 hidden">
          
          <!-- Semantic Anchor & JD Settings -->
          <div class="p-6 dashboard-card space-y-4">
            <div class="flex items-center justify-between border-b border-[#E5EAF2] pb-3">
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#64748B] font-mono">Target Job Description (ATS Semantic Anchor)</h3>
                <p class="text-xs text-[#8994A7]">Resumes uploaded below will be parsed and evaluated against this requisition anchor</p>
              </div>
              <div class="flex items-center gap-2 text-xs">
                <span class="px-2.5 py-1 rounded-lg bg-[#F5F7FB] border border-[#E5EAF2] text-[#64748B] font-mono">Skills (40%)</span>
                <span class="px-2.5 py-1 rounded-lg bg-[#F5F7FB] border border-[#E5EAF2] text-[#64748B] font-mono">Exp (30%)</span>
                <span class="px-2.5 py-1 rounded-lg bg-[#F5F7FB] border border-[#E5EAF2] text-[#64748B] font-mono">Arch (20%)</span>
                <span class="px-2.5 py-1 rounded-lg bg-[#F5F7FB] border border-[#E5EAF2] text-[#64748B] font-mono">Edu (10%)</span>
              </div>
            </div>

            <textarea rows="3" class="w-full p-2.5 text-xs modern-input font-mono text-[#172033]" readonly>Role: Senior Java Microservices & Cloud Architect (5-8 Years). Mandatory Skills: Java 17/21, Spring Boot, Apache Kafka, Distributed Transactions (Saga), Kubernetes, AWS/Azure, Docker, Microservices Security, Redis. Experience designing high-volume reactive systems.</textarea>
          </div>

          <!-- Resume Upload Dropzone & Bulk Ingestion Simulator -->
          <div class="p-6 dashboard-card space-y-4">
            <div class="flex items-center justify-between border-b border-[#E5EAF2] pb-3">
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#64748B] font-mono">Resume Upload & Parsing Chamber</h3>
                <p class="text-xs text-[#8994A7]">Upload individual candidate resumes or bulk zip archives for automatic OCR & AI profile extraction</p>
              </div>
              <button onclick="simulateBulkIngestion()" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path></svg>
                Ingest 4 Candidate Resumes
              </button>
            </div>

            <!-- Drag & Drop Zone -->
            <div class="p-8 rounded-2xl border-2 border-dashed border-[#CBD5E1] hover:border-[#107acc] bg-[#F5F7FB]/50 hover:bg-[#EBF5FC]/20 transition flex flex-col items-center justify-center text-center cursor-pointer">
              <div class="w-12 h-12 rounded-2xl bg-white border border-[#E5EAF2] text-[#107acc] flex items-center justify-center shadow-xs mb-3">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              </div>
              <div class="text-xs font-bold text-[#172033]">Drag and drop candidate resumes here, or click to browse</div>
              <div class="text-[11px] text-[#8994A7] mt-1">Supports PDF, DOCX, TXT, or ZIP archive (up to 50MB per file)</div>
            </div>

            <!-- Auto-Calibration Toggle -->
            <div class="p-4 rounded-xl border border-[#BCE0F7] bg-[#EBF5FC] flex items-start gap-3">
              <input id="check-auto-calibration" type="checkbox" checked class="mt-1 accent-[#107acc]">
              <div>
                <div class="text-xs font-bold text-[#172033]">Enable Resume-Aware AI Question Calibration</div>
                <div class="text-[11px] text-[#64748B] mt-0.5">When enabled, Dwaani AI Interview and GradArena dynamically calibrate test questions to match each candidate's extracted projects, technologies, and skill gaps — eliminating generic questions.</div>
              </div>
            </div>
          </div>

          <!-- Staged Candidates Extracted Profiles -->
          <div class="p-6 dashboard-card space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#64748B] font-mono">Staged Candidate Pool (4 Applicants Extracted)</h3>
                <p class="text-xs text-[#8994A7]">Parsed profiles with automated JD fit score ready for test assignment</p>
              </div>
              <button onclick="dispatchInvitesToAll()" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs">Invite All 4 Candidates</button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div class="p-4 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <div class="font-bold text-[#172033]">S. Siddharth Rao</div>
                  <span class="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">94% JD Match</span>
                </div>
                <div class="text-[11px] text-[#64748B]">6.5 yrs exp • Current: Senior Backend Engineer @ FinTech Scaleup</div>
                <div class="flex flex-wrap gap-1.5 pt-1">
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#172033] border border-[#E5EAF2]">Java 21</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#172033] border border-[#E5EAF2]">Kafka</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#172033] border border-[#E5EAF2]">Saga Pattern</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#172033] border border-[#E5EAF2]">AWS EKS</span>
                </div>
                <div class="pt-2 flex items-center justify-between text-[11px]">
                  <span class="text-[#8994A7] font-mono">Token: c9a4-8f2e</span>
                  <button onclick="inviteCandidate('S. Siddharth Rao', 'c9a4-8f2e')" class="font-semibold text-[#107acc] hover:underline">Dispatch Invite Link →</button>
                </div>
              </div>

              <div class="p-4 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-2">
                <div class="flex items-center justify-between text-xs">
                  <div class="font-bold text-[#172033]">Pooja Varma</div>
                  <span class="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">91% JD Match</span>
                </div>
                <div class="text-[11px] text-[#64748B]">5.8 yrs exp • Current: Platform Engineer @ Cloud Systems</div>
                <div class="flex flex-wrap gap-1.5 pt-1">
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#172033] border border-[#E5EAF2]">Spring Boot</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#172033] border border-[#E5EAF2]">Kubernetes</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#172033] border border-[#E5EAF2]">Redis</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-[#172033] border border-[#E5EAF2]">PostgreSQL</span>
                </div>
                <div class="pt-2 flex items-center justify-between text-[11px]">
                  <span class="text-[#8994A7] font-mono">Token: b7d1-4190</span>
                  <button onclick="inviteCandidate('Pooja Varma', 'b7d1-4190')" class="font-semibold text-[#107acc] hover:underline">Dispatch Invite Link →</button>
                </div>
              </div>

            </div>
          </div>

          <!-- Tab Action Bar -->
          <div class="flex items-center justify-between pt-2">
            <button onclick="switchStudioTab('builder')" class="px-4 py-2 rounded-xl text-xs font-medium text-[#64748B] bg-white border border-[#E5EAF2] hover:bg-[#F5F7FB]">← Back to Test Builder</button>
            <button onclick="switchStudioTab('proctor')" class="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs flex items-center gap-2">
              <span>Next: Proctoring & Security</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>

        </div>

        <!-- ========================================== -->
        <!-- TAB 4: PROCTORING & EXAM INTEGRITY         -->
        <!-- ========================================== -->
        <div id="studio-pane-proctor" class="studio-pane space-y-6 hidden">
          
          <div class="p-6 dashboard-card space-y-5">
            <div class="flex items-center justify-between border-b border-[#E5EAF2] pb-3">
              <div>
                <h3 class="text-xs font-bold uppercase tracking-wider text-[#64748B] font-mono">Proctoring & Exam Security Architecture</h3>
                <p class="text-xs text-[#8994A7]">Hardware integrity checks, dual-camera mobile pairing, and automated malpractice prevention</p>
              </div>
              <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">AI Shield Active</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div class="p-5 rounded-2xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-[#172033] text-white flex items-center justify-center">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                    </div>
                    <div>
                      <div class="text-xs font-bold text-[#172033]">Dual-Camera Mobile QR Pairing</div>
                      <div class="text-[11px] text-[#64748B]">Secondary phone stream capturing hands & room</div>
                    </div>
                  </div>
                  <input type="checkbox" checked class="accent-[#107acc] w-4 h-4">
                </div>
                <p class="text-[11px] text-[#64748B]">Candidate scans a secure dynamic QR code on smartphone. Secondary WebRTC feed continuously verifies keyboard, desk, and room boundaries.</p>
              </div>

              <div class="p-5 rounded-2xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-[#172033] text-white flex items-center justify-center">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    </div>
                    <div>
                      <div class="text-xs font-bold text-[#172033]">Tab-Switch & Fullscreen Lock</div>
                      <div class="text-[11px] text-[#64748B]">Listens to document.visibilitychange events</div>
                    </div>
                  </div>
                  <input type="checkbox" checked class="accent-[#107acc] w-4 h-4">
                </div>
                <div class="flex items-center justify-between text-xs text-[#64748B] pt-1">
                  <span>Disqualification Threshold:</span>
                  <select class="p-1.5 modern-input text-xs">
                    <option>2 Warnings (Max Strict)</option>
                    <option>3 Warnings (Standard)</option>
                  </select>
                </div>
              </div>

              <div class="p-5 rounded-2xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-[#172033] text-white flex items-center justify-center">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line></svg>
                    </div>
                    <div>
                      <div class="text-xs font-bold text-[#172033]">Audio Noise Floor & Speech Isolation</div>
                      <div class="text-[11px] text-[#64748B]">Detects secondary whisperers or prompting</div>
                    </div>
                  </div>
                  <input type="checkbox" checked class="accent-[#107acc] w-4 h-4">
                </div>
                <p class="text-[11px] text-[#64748B]">Real-time Web Audio API tracks ambient noise floor. Flags secondary human voices, dictation, and background prompting during interviews.</p>
              </div>

              <div class="p-5 rounded-2xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                    </div>
                    <div>
                      <div class="text-xs font-bold text-[#172033]">Malpractice Immediate Abort</div>
                      <div class="text-[11px] text-[#64748B]">Auto-terminates session on critical breach</div>
                    </div>
                  </div>
                  <input type="checkbox" checked class="accent-rose-600 w-4 h-4">
                </div>
                <p class="text-[11px] text-[#64748B]">If unauthorized devices, multiple faces, or persistent tab-switching are detected, the assessment locks immediately and awards 0 marks.</p>
              </div>

            </div>
          </div>

          <!-- Tab Action Bar -->
          <div class="flex items-center justify-between pt-2">
            <button onclick="switchStudioTab('resumes')" class="px-4 py-2 rounded-xl text-xs font-medium text-[#64748B] bg-white border border-[#E5EAF2] hover:bg-[#F5F7FB]">← Back to Resumes</button>
            <button onclick="switchStudioTab('blueprint')" class="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs flex items-center gap-2">
              <span>Next: Review Blueprint & Launch Campaign</span>
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>

        </div>

        <!-- ========================================== -->
        <!-- TAB 5: REVIEW BLUEPRINT & DEPLOY           -->
        <!-- ========================================== -->
        <div id="studio-pane-blueprint" class="studio-pane space-y-6 hidden">
          
          <div class="p-6 dashboard-card space-y-5">
            <div class="flex items-center justify-between border-b border-[#E5EAF2] pb-3">
              <div>
                <h3 class="text-sm font-bold text-[#172033]">Campaign Blueprint & Deployment Summary</h3>
                <p class="text-xs text-[#64748B]">End-to-end audit summary of the configured stages, pass criteria, and candidate cohort</p>
              </div>
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Ready for Production Launch</span>
            </div>

            <!-- Blueprint Card -->
            <div class="p-5 rounded-2xl border border-[#BCE0F7] bg-gradient-to-r from-[#EBF5FC]/40 to-white space-y-3">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-[10px] font-mono uppercase text-[#107acc] font-semibold">Workflow Blueprint</div>
                  <div class="text-base font-bold text-[#172033] mt-0.5">Senior Java & Distributed Cloud Architect</div>
                </div>
                <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold text-[#107acc] bg-white border border-[#BCE0F7]">2 Sequential Stages</span>
              </div>

              <!-- Steps List Dynamic Container -->
              <div id="summaryStepsList" class="space-y-2 pt-2">
                <!-- Dynamically populated by updateFlowUI() -->
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div>
                <label class="block text-xs font-semibold text-[#172033] mb-1.5">Supervising Test Creator</label>
                <select class="w-full p-2.5 text-xs modern-input text-[#172033]">
                  <option>K. Prashanti (Senior Assessment Specialist)</option>
                  <option>P. Hemachandra (Cloud Architect)</option>
                  <option>Ananya Sharma (LLM Specialist)</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-semibold text-[#172033] mb-1.5">Link Expiration (Candidate Token)</label>
                <input type="date" value="2026-11-30" class="w-full p-2.5 text-xs modern-input font-mono">
              </div>
              <div>
                <label class="block text-xs font-semibold text-[#172033] mb-1.5">Staged Candidate Cohort</label>
                <div class="p-2.5 rounded-xl bg-[#F5F7FB] border border-[#E5EAF2] flex items-center justify-between text-xs font-mono">
                  <span class="text-[#172033]">4 Resumes Processed</span>
                  <span class="text-emerald-700 font-bold">100% Calibrated</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Deploy CTA Bar -->
          <div class="flex items-center justify-between pt-2">
            <button onclick="switchStudioTab('proctor')" class="px-4 py-2 rounded-xl text-xs font-medium text-[#64748B] bg-white border border-[#E5EAF2] hover:bg-[#F5F7FB]">← Back to Proctoring</button>
            <div class="flex items-center gap-3">
              <button onclick="switchScreen('tests')" class="px-4 py-2 rounded-xl text-xs font-medium text-[#64748B] bg-white border border-[#E5EAF2] hover:bg-[#F5F7FB]">Save Draft</button>
              <button onclick="saveAndActivateWorkflow()" class="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-md flex items-center gap-2">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Confirm & Launch Assessment Campaign
              </button>
            </div>
          </div>

        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 5: TESTS LIBRARY                                      -->
      <!-- ============================================================ -->
      <div id="screen-tests" class="screen-view space-y-6 hidden">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-[#172033]">Tests Library</h2>
            <p class="text-xs text-[#64748B]">Centralized repository of published, pending review, and draft assessment blueprints</p>
          </div>
          <button onclick="switchScreen('test-create')" class="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs flex items-center gap-2 self-start sm:self-auto">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Create Assessment
          </button>
        </div>

        <div class="p-6 dashboard-card space-y-4">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div class="relative w-full sm:w-72">
              <input type="text" placeholder="Search by test ID, role, or hiring client..." class="w-full p-2.5 pl-9 text-xs modern-input">
              <svg class="w-4 h-4 text-[#8994A7] absolute left-3 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <div class="flex items-center gap-2 self-end sm:self-auto text-xs">
              <select class="p-2 modern-input text-xs text-[#64748B]">
                <option>All Statuses</option>
                <option>Published</option>
                <option>Pending Review (4)</option>
                <option>Draft</option>
              </select>
              <span class="text-[#8994A7] font-mono">32 Total Assessments</span>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="text-[#64748B] border-b border-[#E5EAF2] uppercase text-[10px] tracking-wider bg-[#F5F7FB]/50">
                <tr>
                  <th class="py-3 px-3.5">Test ID & Title</th>
                  <th class="py-3 px-3.5">Hiring Client</th>
                  <th class="py-3 px-3.5">Assessment Stages</th>
                  <th class="py-3 px-3.5">Structure & Duration</th>
                  <th class="py-3 px-3.5">Supervising Creator</th>
                  <th class="py-3 px-3.5">Status</th>
                  <th class="py-3 px-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E5EAF2]">
                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="p-3.5">
                    <div class="font-bold text-[#172033]">TST-8842: Senior Java Microservices Architect</div>
                    <div class="text-[11px] text-[#8994A7] font-mono">Last modified 2h ago</div>
                  </td>
                  <td class="p-3.5 text-[#64748B]">Capgemini GCC - Hyderabad</td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#EFF6FF] text-[#3B82F6] border border-[#BFDBFE]">Dwaani AI + Coding</span>
                  </td>
                  <td class="p-3.5 font-mono tabular-nums">15 MCQ + 1 Coding (60m)</td>
                  <td class="p-3.5">K. Prashanti</td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Published</span></td>
                  <td class="p-3.5 text-right space-x-2">
                    <button onclick="switchScreen('test-detail')" class="text-xs font-semibold text-[#107acc] hover:underline">Blueprint</button>
                    <button onclick="alert('Assign candidate modal')" class="text-xs text-[#64748B] hover:text-[#172033]">Assign</button>
                  </td>
                </tr>

                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="p-3.5">
                    <div class="font-bold text-[#172033]">TST-8841: Lead Python Backend Architect</div>
                    <div class="text-[11px] text-[#8994A7] font-mono">Last modified Yesterday</div>
                  </td>
                  <td class="p-3.5 text-[#64748B]">Invesco Enterprise Hub</td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#EBF5FC] text-[#107acc] border border-[#BCE0F7]">GradArena Proctored</span>
                  </td>
                  <td class="p-3.5 font-mono tabular-nums">15 MCQ + 1 Coding (60m)</td>
                  <td class="p-3.5">K. Prashanti</td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Published</span></td>
                  <td class="p-3.5 text-right space-x-2">
                    <button onclick="switchScreen('test-detail')" class="text-xs font-semibold text-[#107acc] hover:underline">Blueprint</button>
                    <button onclick="alert('Assign candidate modal')" class="text-xs text-[#64748B] hover:text-[#172033]">Assign</button>
                  </td>
                </tr>

                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="p-3.5">
                    <div class="font-bold text-[#172033]">TST-8854: Data Science & LLM Pipeline Specialist</div>
                    <div class="text-[11px] text-[#8994A7] font-mono">Submitted 1h ago</div>
                  </td>
                  <td class="p-3.5 text-[#64748B]">Deloitte USI Tech</td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-purple-50 text-purple-700 border border-purple-200">Dwaani Voice Only</span>
                  </td>
                  <td class="p-3.5 font-mono tabular-nums">5 Voice Scenarios (30m)</td>
                  <td class="p-3.5">Ananya Sharma</td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-800 border border-amber-200 whitespace-nowrap inline-flex items-center">Pending Review</span></td>
                  <td class="p-3.5 text-right space-x-2">
                    <button onclick="switchScreen('reviews')" class="text-xs font-semibold text-[#107acc] hover:underline">Review Now</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 6: TEST BLUEPRINT & ANALYTICS                         -->
      <!-- ============================================================ -->
      <div id="screen-test-detail" class="screen-view space-y-6 hidden">
        <div class="p-6 dashboard-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono text-[#8994A7]">TST-8842</span>
              <h2 class="text-xl font-bold text-[#172033]">Senior Java Microservices Architect</h2>
              <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Published (Live)</span>
            </div>
            <p class="text-xs text-[#64748B] mt-0.5">Capgemini GCC - Hyderabad • Platform Engineering Practice • Supervising Author: K. Prashanti</p>
          </div>
          <div class="flex items-center gap-2.5">
            <button onclick="switchScreen('tests')" class="px-3.5 py-2 rounded-xl text-xs font-medium text-[#64748B] bg-white border border-[#E5EAF2] hover:bg-[#F5F7FB]">← Back to Tests</button>
            <button onclick="alert('Dispatch candidate link')" class="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs">Assign Candidates</button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Candidates Evaluated</div>
            <div class="text-2xl font-bold text-[#172033] mt-2 tabular-nums">124 Tested</div>
          </div>
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Average Score</div>
            <div class="text-2xl font-bold text-[#172033] mt-2 tabular-nums">71.8%</div>
          </div>
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Pass Conversion</div>
            <div class="text-2xl font-bold text-emerald-700 mt-2 tabular-nums">48.0%</div>
          </div>
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Integrity Flags</div>
            <div class="text-2xl font-bold text-emerald-700 mt-2 tabular-nums">0 Critical</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 dashboard-card space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#107acc] font-mono">Stage 1: Dwaani AI Voice Interview</h4>
            <div class="text-xs text-[#64748B] space-y-1.5">
              <div><span class="font-medium text-[#172033]">Format:</span> Adaptive Conversational Voice Screening</div>
              <div><span class="font-medium text-[#172033]">Question Count:</span> 4 Deep Architecture Scenarios</div>
              <div><span class="font-medium text-[#172033]">Duration:</span> 25 Minutes</div>
              <div><span class="font-medium text-[#172033]">Passing Threshold:</span> <span class="font-bold text-emerald-700">≥ 70%</span></div>
              <div><span class="font-medium text-[#172033]">Failure Dropoff:</span> <span class="text-rose-600 font-mono">Stop Workflow & Send Regret</span></div>
            </div>
          </div>

          <div class="p-6 dashboard-card space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-[#3B82F6] font-mono">Stage 2: GradArena Proctored Assessment</h4>
            <div class="text-xs text-[#64748B] space-y-1.5">
              <div><span class="font-medium text-[#172033]">Format:</span> MCQs & Algorithmic Code Compilation</div>
              <div><span class="font-medium text-[#172033]">Sections:</span> 15 MCQ (30 Marks) + 1 Coding Sandbox (40 Marks)</div>
              <div><span class="font-medium text-[#172033]">Duration:</span> 60 Minutes</div>
              <div><span class="font-medium text-[#172033]">Passing Threshold:</span> <span class="font-bold text-emerald-700">≥ 60%</span></div>
              <div><span class="font-medium text-[#172033]">Proctor Shield:</span> Dual-Camera QR Pairing Enforced</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 7: PENDING REVIEWS & APPROVALS                        -->
      <!-- ============================================================ -->
      <div id="screen-reviews" class="screen-view space-y-6 hidden">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-[#172033]">Pending Reviews & Approvals</h2>
            <p class="text-xs text-[#64748B]">Author submissions requiring managerial verification and publication sign-off</p>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 self-start sm:self-auto">4 Tests Pending Authorization</span>
        </div>

        <div class="p-6 dashboard-card space-y-5">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#E5EAF2] pb-4">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono text-[#8994A7] bg-[#F5F7FB] px-2 py-0.5 rounded border border-[#E5EAF2]">TST-8842</span>
                <h3 class="text-base font-bold text-[#172033]">Senior Java Microservices Architect</h3>
              </div>
              <div class="text-xs text-[#64748B] mt-1">Submitted by <strong class="text-[#172033]">K. Prashanti</strong> • 12 mins ago for Capgemini GCC Requisition</div>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="requestChangesReview('TST-8842')" class="px-3.5 py-2 rounded-xl text-xs font-medium text-[#64748B] bg-white border border-[#E5EAF2] hover:bg-[#F5F7FB]">Request Changes</button>
              <button onclick="approveReview('TST-8842')" class="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Approve & Publish
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-2">
              <div class="font-bold text-[#172033] uppercase text-[10px] font-mono tracking-wider">Test Section & Content Breakdown</div>
              <div class="text-[#64748B]"><strong>Section 1: 15 Architecture MCQs (30 Marks)</strong><br>Covers Kafka partitions, thread pools, and distributed Saga patterns.</div>
              <div class="text-[#64748B]"><strong>Section 2: Concurrent Task Queue Coding (40 Marks)</strong><br>Multi-language compiler test with 3 test cases (1 public sample, 2 hidden stress).</div>
            </div>
            <div class="p-4 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-2">
              <div class="font-bold text-[#172033] uppercase text-[10px] font-mono tracking-wider">AI Scoring Rubrics & Integrity Settings</div>
              <div class="flex justify-between text-[#64748B]"><span>Technical Accuracy Weight:</span><span class="font-mono text-[#172033]">40%</span></div>
              <div class="flex justify-between text-[#64748B]"><span>System Architecture Relevance:</span><span class="font-mono text-[#172033]">40%</span></div>
              <div class="flex justify-between text-[#64748B]"><span>Communication Clarity:</span><span class="font-mono text-[#172033]">20%</span></div>
              <div class="flex justify-between text-[#64748B]"><span>Proctoring Enforcement:</span><span class="font-semibold text-emerald-700">Dual-Cam Mobile QR Pairing</span></div>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-[#172033] mb-1.5">Manager Sign-Off Feedback / Revision Instructions</label>
            <textarea id="reviewCommentText" rows="2" placeholder="Optional notes to the author regarding test quality or adjustments..." class="w-full p-2.5 text-xs modern-input"></textarea>
          </div>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 8: CANDIDATES POOL                                    -->
      <!-- ============================================================ -->
      <div id="screen-candidates" class="screen-view space-y-6 hidden">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-[#172033]">Candidates Talent Pool</h2>
            <p class="text-xs text-[#64748B]">Comprehensive audit ledger of candidate 3D performance and proctor integrity</p>
          </div>
          <button onclick="alert('Export CSV ledger initiated.')" class="px-4 py-2 rounded-xl text-xs font-medium text-[#64748B] bg-white border border-[#E5EAF2] hover:bg-[#F5F7FB] flex items-center gap-1.5 self-start sm:self-auto">
            <svg class="w-3.5 h-3.5 text-[#8994A7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Export CSV
          </button>
        </div>

        <div class="p-6 dashboard-card space-y-4">
          <div class="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div class="relative w-full sm:w-72">
              <input type="text" placeholder="Search candidate, email, ID..." class="w-full p-2.5 pl-9 text-xs modern-input">
              <svg class="w-4 h-4 text-[#8994A7] absolute left-3 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <div class="flex items-center gap-2 self-end sm:self-auto text-xs">
              <select class="p-2 modern-input text-xs text-[#64748B]">
                <option>All Clients</option>
                <option>Capgemini GCC</option>
                <option>Invesco GCC</option>
                <option>Deloitte USI</option>
              </select>
              <select class="p-2 modern-input text-xs text-[#64748B]">
                <option>All Statuses</option>
                <option>Recommended</option>
                <option>Under Review</option>
              </select>
              <span class="text-[#8994A7] font-mono">284 Total Candidates</span>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="text-[#64748B] border-b border-[#E5EAF2] uppercase text-[10px] tracking-wider bg-[#F5F7FB]/50">
                <tr>
                  <th class="py-3 px-3.5">Candidate Name</th>
                  <th class="py-3 px-3.5">Target Requisition / Test</th>
                  <th class="py-3 px-3.5">3D AI Score</th>
                  <th class="py-3 px-3.5">Proctor Integrity</th>
                  <th class="py-3 px-3.5">Stage Completed</th>
                  <th class="py-3 px-3.5">Status</th>
                  <th class="py-3 px-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E5EAF2]">
                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="p-3.5">
                    <div class="font-bold text-[#172033]">S. Siddharth Rao</div>
                    <div class="text-[11px] text-[#8994A7] font-mono">siddharth.rao@gmail.com</div>
                  </td>
                  <td class="p-3.5 text-[#64748B]">Lead Python Backend (Invesco GCC)</td>
                  <td class="p-3.5 font-mono text-emerald-700 font-bold">88.4% Composite</td>
                  <td class="p-3.5 text-emerald-700 font-medium">✓ Dual-Cam (0 Flags)</td>
                  <td class="p-3.5 text-[#64748B]">Stage 2 (Coding Sandbox)</td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Recommended</span></td>
                  <td class="p-3.5 text-right"><button onclick="openDossier('S. Siddharth Rao')" class="font-semibold text-[#107acc] hover:underline">View Dossier →</button></td>
                </tr>

                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="p-3.5">
                    <div class="font-bold text-[#172033]">Pooja Varma</div>
                    <div class="text-[11px] text-[#8994A7] font-mono">pooja.varma@outlook.com</div>
                  </td>
                  <td class="p-3.5 text-[#64748B]">Senior Fullstack (Capgemini GCC)</td>
                  <td class="p-3.5 font-mono text-emerald-700 font-bold">81.5% Composite</td>
                  <td class="p-3.5 text-emerald-700 font-medium">✓ Dual-Cam (0 Flags)</td>
                  <td class="p-3.5 text-[#64748B]">Stage 2 (Coding Sandbox)</td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Recommended</span></td>
                  <td class="p-3.5 text-right"><button onclick="openDossier('Pooja Varma')" class="font-semibold text-[#107acc] hover:underline">View Dossier →</button></td>
                </tr>

                <tr class="hover:bg-[#F5F7FB] transition">
                  <td class="p-3.5">
                    <div class="font-bold text-[#172033]">Rohan Kulkarni</div>
                    <div class="text-[11px] text-[#8994A7] font-mono">rohan.kulkarni@gmail.com</div>
                  </td>
                  <td class="p-3.5 text-[#64748B]">DevOps Kubernetes (Deloitte USI)</td>
                  <td class="p-3.5 font-mono text-amber-700 font-bold">64.2% Composite</td>
                  <td class="p-3.5 text-amber-700 font-medium">⚑ 2 Flags (Audio Noise)</td>
                  <td class="p-3.5 text-[#64748B]">Stage 1 (Voice Screen)</td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">Under Review</span></td>
                  <td class="p-3.5 text-right"><button onclick="openDossier('Rohan Kulkarni')" class="font-semibold text-[#107acc] hover:underline">View Dossier →</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 9: CANDIDATE EVALUATION DOSSIER                       -->
      <!-- ============================================================ -->
      <div id="screen-candidate-detail" class="screen-view space-y-6 hidden">
        <div class="p-6 dashboard-card flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#107acc] to-[#0c68ab] text-white font-bold text-xl flex items-center justify-center shadow-md">
              SR
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h2 id="dossierCandidateName" class="text-xl font-bold text-[#172033]">S. Siddharth Rao</h2>
                <span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">Recommended for Offer</span>
              </div>
              <p class="text-xs text-[#64748B] mt-0.5">Assigned: Lead Python Backend Architect (Invesco GCC) • Token: c9a4-8f2e</p>
              <div class="text-[11px] text-[#8994A7] font-mono mt-1">siddharth.rao@gmail.com • Evaluated on Oct 14, 2026</div>
            </div>
          </div>
          <div class="flex items-center gap-2.5">
            <button onclick="switchScreen('candidates')" class="px-3.5 py-2 rounded-xl text-xs font-medium text-[#64748B] bg-white border border-[#E5EAF2] hover:bg-[#F5F7FB]">← Back to Candidates</button>
            <button onclick="alert('Exporting official candidate 3D dossier PDF with proctor telemetry logs...')" class="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs">Export PDF Dossier</button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Composite 3D Score</div>
            <div class="text-2xl font-bold text-emerald-700 mt-2 tabular-nums">88.4%</div>
            <div class="text-[11px] text-[#8994A7] mt-1">Rank #2 of 48 tested</div>
          </div>
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Domain Relevance</div>
            <div class="text-2xl font-bold text-[#172033] mt-2 tabular-nums">92%</div>
            <div class="text-[11px] text-[#8994A7] mt-1">High architectural alignment</div>
          </div>
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Technical Accuracy</div>
            <div class="text-2xl font-bold text-[#172033] mt-2 tabular-nums">88%</div>
            <div class="text-[11px] text-[#8994A7] mt-1">Clean concurrency principles</div>
          </div>
          <div class="p-4 dashboard-card">
            <div class="text-xs font-medium text-[#64748B]">Communication Clarity</div>
            <div class="text-2xl font-bold text-[#172033] mt-2 tabular-nums">85%</div>
            <div class="text-[11px] text-[#8994A7] mt-1">Structured articulation</div>
          </div>
        </div>

        <div class="p-6 dashboard-card space-y-4">
          <div class="flex items-center gap-3 border-b border-[#E5EAF2] pb-3 text-xs">
            <button class="font-bold text-[#172033] pb-1 border-b-2 border-[#107acc]">Executive AI Synthesis</button>
            <button class="text-[#64748B] hover:text-[#172033] pb-1">Question-by-Question Evaluation (4)</button>
            <button class="text-[#64748B] hover:text-[#172033] pb-1">Proctoring Forensic Ledger (0 Flags)</button>
          </div>

          <div class="space-y-4 text-xs">
            <div class="p-4 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-2">
              <div class="font-bold text-[#172033]">Evaluator Executive Summary:</div>
              <p class="text-[#64748B] leading-relaxed">Candidate demonstrated exemplary depth across distributed systems, explaining transaction rollback in saga choreographies without hesitation. Code sandbox solution achieved 100% test case pass rate with O(log N) priority queue insertion.</p>
            </div>

            <div class="p-4 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-2">
              <div class="font-bold text-[#172033]">Proctoring & Integrity Audit:</div>
              <p class="text-[#64748B] leading-relaxed">Dual-Camera WebRTC recording active for 48m 12s. Zero tab-switch interruptions registered. Audio noise floor remained below 32dB with zero secondary voice incidents.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 10: LIVE AI SCREENING HUB (FOCUSED HIGH-CONTRAST)     -->
      <!-- ============================================================ -->
      <div id="screen-live" class="screen-view space-y-6 hidden">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-[#172033]">Live AI Screening Hub</h2>
            <p class="text-xs text-[#64748B]">Real-time command center monitoring active candidate interview chambers</p>
          </div>
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 self-start sm:self-auto flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 live-dot"></span> 4 Active Monitoring Chambers
          </span>
        </div>

        <!-- 4-Chamber Video Feed Grid: Dark functional panels for high video contrast -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div class="dashboard-card overflow-hidden">
            <div class="p-4 flex items-center justify-between border-b border-[#E5EAF2]">
              <div>
                <span class="font-bold text-xs text-[#172033]">Ananya Sharma</span>
                <div class="text-[11px] text-[#64748B]">Cloud Data Architect • Deloitte USI</div>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">Q3 of 5 • 14:22</span>
            </div>
            <!-- High-Contrast Dark Video Simulator Panel -->
            <div class="bg-[#151827] h-48 flex items-center justify-center relative p-4 text-center">
              <div class="text-[#8994A7] text-xs font-mono">
                <svg class="w-8 h-8 text-[#8994A7]/60 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                Dual-Cam Feed Synchronized (30 FPS)
              </div>
            </div>
            <div class="p-3.5 bg-white flex items-center justify-between text-xs">
              <span class="text-emerald-700 font-semibold text-[11px]">0 Integrity Flags</span>
              <button onclick="alert('Monitoring candidate live feed full screen...')" class="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab]">Monitor Feed</button>
            </div>
          </div>

          <div class="dashboard-card overflow-hidden">
            <div class="p-4 flex items-center justify-between border-b border-[#E5EAF2]">
              <div>
                <span class="font-bold text-xs text-[#172033]">Karan Verma</span>
                <div class="text-[11px] text-[#64748B]">Senior Java Lead • Capgemini GCC</div>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">Q2 of 4 • 08:45</span>
            </div>
            <div class="bg-[#151827] h-48 flex items-center justify-center relative p-4 text-center">
              <div class="text-[#8994A7] text-xs font-mono">
                <svg class="w-8 h-8 text-[#8994A7]/60 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                Dual-Cam Feed Synchronized (30 FPS)
              </div>
            </div>
            <div class="p-3.5 bg-white flex items-center justify-between text-xs">
              <span class="text-emerald-700 font-semibold text-[11px]">0 Integrity Flags</span>
              <button onclick="alert('Monitoring candidate live feed full screen...')" class="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab]">Monitor Feed</button>
            </div>
          </div>

          <!-- Camera 3 with Telemetry Warning -->
          <div class="dashboard-card overflow-hidden border-amber-300">
            <div class="p-4 flex items-center justify-between border-b border-[#E5EAF2]">
              <div>
                <span class="font-bold text-xs text-[#172033]">Rohan Kulkarni</span>
                <div class="text-[11px] text-[#64748B]">DevOps Kubernetes • Deloitte USI</div>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-50 text-amber-700 border border-amber-200">Q4 of 5 • 22:10</span>
            </div>
            <div class="bg-[#151827] h-48 flex items-center justify-center relative p-4 text-center">
              <div class="p-3 rounded-xl bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-mono">
                <svg class="w-5 h-5 text-amber-400 mx-auto mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                Elevated Noise Floor (2 Warning Flags)
              </div>
            </div>
            <div class="p-3.5 bg-white flex items-center justify-between text-xs">
              <span class="text-amber-700 font-semibold text-[11px]">Secondary Speech Detected</span>
              <button onclick="alert('Audio intervention sent to candidate chamber.')" class="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700">Audit / Warn</button>
            </div>
          </div>

          <div class="dashboard-card overflow-hidden">
            <div class="p-4 flex items-center justify-between border-b border-[#E5EAF2]">
              <div>
                <span class="font-bold text-xs text-[#172033]">Pooja Varma</span>
                <div class="text-[11px] text-[#64748B]">Fullstack Engineer • Capgemini GCC</div>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">Coding Task • 34:15</span>
            </div>
            <div class="bg-[#151827] h-48 flex items-center justify-center relative p-4 text-center">
              <div class="text-[#8994A7] text-xs font-mono">
                <svg class="w-8 h-8 text-[#8994A7]/60 mx-auto mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                Live Compiler Sandbox Active
              </div>
            </div>
            <div class="p-3.5 bg-white flex items-center justify-between text-xs">
              <span class="text-emerald-700 font-semibold text-[11px]">0 Integrity Flags</span>
              <button onclick="alert('Monitoring candidate live feed full screen...')" class="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab]">Monitor Feed</button>
            </div>
          </div>

        </div>
      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 11: MESSAGE HUB                                       -->
      <!-- ============================================================ -->
      <div id="screen-chat" class="screen-view space-y-6 hidden">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <!-- Conversation List -->
          <div class="p-4 dashboard-card space-y-3">
            <h3 class="text-sm font-bold text-[#172033]">Message Hub</h3>
            <input type="text" placeholder="Search conversations..." class="w-full p-2 text-xs modern-input">
            <div class="space-y-1 text-xs">
              <div class="p-2.5 rounded-xl bg-[#EBF5FC] border border-[#BCE0F7] cursor-pointer">
                <div class="flex justify-between font-bold text-[#172033]">
                  <span>K. Prashanti</span>
                  <span class="text-[10px] text-[#8994A7] font-mono">12m ago</span>
                </div>
                <div class="text-[11px] text-[#64748B] truncate mt-0.5">I updated the Kafka test cases as discussed in review...</div>
              </div>

              <div class="p-2.5 rounded-xl hover:bg-[#F5F7FB] border border-transparent transition cursor-pointer">
                <div class="flex justify-between font-bold text-[#172033]">
                  <span>P. Hemachandra</span>
                  <span class="text-[10px] text-[#8994A7] font-mono">1h ago</span>
                </div>
                <div class="text-[11px] text-[#64748B] truncate mt-0.5">Draft TST-8849 is ready for your review.</div>
              </div>

              <div class="p-2.5 rounded-xl hover:bg-[#F5F7FB] border border-transparent transition cursor-pointer">
                <div class="flex justify-between font-bold text-[#172033]">
                  <span>Ananya Sharma</span>
                  <span class="text-[10px] text-[#8994A7] font-mono">Yesterday</span>
                </div>
                <div class="text-[11px] text-[#64748B] truncate mt-0.5">Can we increase the timeout for the Spark problem?</div>
              </div>
            </div>
          </div>

          <!-- Active Chat Window -->
          <div class="md:col-span-2 p-6 dashboard-card flex flex-col h-[520px]">
            <div class="flex items-center justify-between border-b border-[#E5EAF2] pb-3 mb-4">
              <div>
                <span class="font-bold text-xs text-[#172033]">K. Prashanti</span>
                <span class="text-[11px] text-[#64748B] block">Senior Assessment Specialist • Engineering Practice</span>
              </div>
              <button onclick="openCreatorProfile('K. Prashanti')" class="text-xs font-semibold text-[#107acc] hover:underline">View Author Profile</button>
            </div>

            <div id="chatMessagesContainer" class="flex-1 overflow-y-auto space-y-3 pr-2 text-xs">
              <div class="flex items-start gap-2.5 max-w-md">
                <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#3B82F6] to-[#14B8A6] text-white font-bold text-[10px] flex items-center justify-center shrink-0">KP</div>
                <div class="p-3 bg-[#F5F7FB] text-[#172033] rounded-2xl rounded-tl-sm border border-[#E5EAF2]">
                  Hi Rajini, I have drafted the new Kafka Saga test cases for the Senior Java Microservices requisition. Please review when free.
                  <span class="text-[10px] text-[#8994A7] block mt-1 font-mono">11:15 AM</span>
                </div>
              </div>

              <div class="flex items-start gap-2.5 max-w-md ml-auto flex-row-reverse">
                <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#107acc] to-[#0c68ab] text-white font-bold text-[10px] flex items-center justify-center shrink-0">RG</div>
                <div class="p-3 bg-gradient-to-r from-[#107acc] to-[#0c68ab] text-white rounded-2xl rounded-tr-sm shadow-xs">
                  Thanks Prashanti. I checked the hidden test cases — looks solid. Approving TST-8842 now.
                  <span class="text-[10px] text-white/70 block mt-1 font-mono">11:24 AM</span>
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-[#E5EAF2] flex items-center gap-2 mt-auto">
              <input id="chatMessageInput" type="text" placeholder="Write a reply to K. Prashanti... (Press Enter)" onkeydown="if(event.key==='Enter') sendChatMessage()" class="flex-1 p-2.5 text-xs modern-input">
              <button onclick="sendChatMessage()" class="px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#107acc] to-[#0c68ab] hover:opacity-95 shadow-xs">Send</button>
            </div>
          </div>

        </div>
      </div>

    </main>

  </div>

  <!-- ============================================================ -->
  <!-- JAVASCRIPT: APPLICATION LOGIC & STATE ENGINE                 -->
  <!-- ============================================================ -->
  <script>
    const screenTitles = {
      'dashboard': 'Dashboard',
      'creators': 'Manage Test Creators',
      'creator-detail': 'Test Creator Profile',
      'test-create': 'Test Creation Studio',
      'tests': 'Tests Library',
      'test-detail': 'Test Blueprint & Analytics',
      'reviews': 'Pending Reviews & Approvals',
      'candidates': 'Candidates Talent Pool',
      'candidate-detail': 'Candidate Evaluation Dossier',
      'live': 'Live AI Screening Hub',
      'chat': 'Message Hub'
    };

    const navGroups = {
      'dashboard': 'Workspace',
      'creators': 'Workspace',
      'creator-detail': 'Workspace',
      'test-create': 'Workspace',
      'tests': 'Workspace',
      'test-detail': 'Workspace',
      'reviews': 'AI Screening & Control',
      'candidates': 'AI Screening & Control',
      'candidate-detail': 'AI Screening & Control',
      'live': 'AI Screening & Control',
      'chat': 'AI Screening & Control'
    };

    const studioState = {
      activeTab: 'pipeline',
      activeSection: 'mcq',
      includeDwaani: true,
      includeGradArena: true,
      dwaaniMode: 'new',
      dwaaniExistingId: 'INT-201',
      gradArenaMode: 'new',
      gradArenaExistingId: 'TST-8842',
      sequence: 'dwaani_first', // 'dwaani_first' or 'gradarena_first'
      
      dwaaniThreshold: 70,
      dwaaniFailureRule: 'stop',
      dwaaniRequirePassToAdvance: true,
      
      gradArenaThreshold: 60,
      gradArenaFailureRule: 'review',
      gradArenaRequirePassToAdvance: true,
      gradArenaProctorZeroFlags: true,

      resumeCalibrationEnabled: true,
      ingestedCandidatesCount: 4
    };

    let sidebarCollapsed = false;
    let mobileOpen = false;

    function toggleSidebar(forceState) {
      if (typeof forceState === 'boolean') {
        sidebarCollapsed = forceState;
      } else {
        sidebarCollapsed = !sidebarCollapsed;
      }
      const sidebar = document.getElementById('sidebar');
      const main = document.getElementById('mainContent');
      const icon = document.getElementById('toggleIcon');
      const toggleBtn = document.getElementById('toggleBtn');
      const header = document.getElementById('sidebarHeader');
      const brandBlock = document.getElementById('brandBlock');
      const sidebarLogo = document.getElementById('sidebarLogo');
      const scopeBlock = document.getElementById('scopeBlock');
      const brandTexts = document.querySelectorAll('.brand-text');

      if (sidebarCollapsed) {
        sidebar.classList.remove('w-[250px]');
        sidebar.classList.add('w-[72px]');
        main.classList.remove('md:ml-[250px]');
        main.classList.add('md:ml-[72px]');
        if (icon) icon.style.transform = 'rotate(180deg)';
        if (header) {
          header.classList.remove('px-4', 'justify-between');
          header.classList.add('px-2', 'justify-center');
        }
        if (toggleBtn) {
          toggleBtn.classList.add('absolute', '-right-3.5', 'top-5', 'w-7', 'h-7', 'rounded-full', 'bg-[#1E2235]', 'border', 'border-white/20', 'shadow-md', 'z-50');
        }
        if (brandBlock) {
          brandBlock.classList.add('justify-center');
        }
        if (sidebarLogo) {
          sidebarLogo.classList.remove('h-9', 'w-auto');
          sidebarLogo.classList.add('h-7', 'max-w-[48px]');
        }
        if (scopeBlock) {
          scopeBlock.classList.add('hidden');
        }
        brandTexts.forEach(el => el.classList.add('hidden'));
        document.querySelectorAll('.nav-item').forEach(el => {
          el.classList.add('justify-center', 'px-0');
          el.classList.remove('px-3.5', 'gap-3');
        });
      } else {
        sidebar.classList.remove('w-[72px]');
        sidebar.classList.add('w-[250px]');
        main.classList.remove('md:ml-[72px]');
        main.classList.add('md:ml-[250px]');
        if (icon) icon.style.transform = 'rotate(0deg)';
        if (header) {
          header.classList.add('px-4', 'justify-between');
          header.classList.remove('px-2', 'justify-center');
        }
        if (toggleBtn) {
          toggleBtn.classList.remove('absolute', '-right-3.5', 'top-5', 'w-7', 'h-7', 'rounded-full', 'bg-[#1E2235]', 'border', 'border-white/20', 'shadow-md', 'z-50');
        }
        if (brandBlock) {
          brandBlock.classList.remove('justify-center');
        }
        if (sidebarLogo) {
          sidebarLogo.classList.remove('h-7', 'max-w-[48px]');
          sidebarLogo.classList.add('h-9', 'w-auto');
        }
        if (scopeBlock) {
          scopeBlock.classList.remove('hidden');
        }
        brandTexts.forEach(el => el.classList.remove('hidden'));
        document.querySelectorAll('.nav-item').forEach(el => {
          el.classList.remove('justify-center', 'px-0');
          el.classList.add('px-3.5', 'gap-3');
        });
      }
    }

    function toggleMobileSidebar() {
      mobileOpen = !mobileOpen;
      const sidebar = document.getElementById('sidebar');
      const backdrop = document.getElementById('mobileBackdrop');
      if (mobileOpen) {
        sidebar.classList.remove('-translate-x-full');
        backdrop.classList.remove('hidden');
      } else {
        sidebar.classList.add('-translate-x-full');
        backdrop.classList.add('hidden');
      }
    }

    function switchScreen(screenId) {
      if (screenId && screenId.startsWith('test-create-')) {
        const tab = screenId.replace('test-create-', '');
        switchScreen('test-create');
        if (typeof switchStudioTab === 'function') switchStudioTab(tab);
        return;
      }

      document.querySelectorAll('.screen-view').forEach(el => el.classList.add('hidden'));

      const target = document.getElementById('screen-' + screenId);
      if (target) {
        target.classList.remove('hidden');
      } else {
        const def = document.getElementById('screen-dashboard');
        if (def) def.classList.remove('hidden');
        screenId = 'dashboard';
      }

      document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active-nav-pill');
        btn.classList.add('inactive-nav-pill');
      });

      const activeNav = document.getElementById('nav-' + screenId);
      if (activeNav) {
        activeNav.classList.remove('inactive-nav-pill');
        activeNav.classList.add('active-nav-pill');
      }

      const topTitle = document.getElementById('topPageTitle');
      if (topTitle) topTitle.textContent = screenTitles[screenId] || 'Dashboard';

      const topGroup = document.getElementById('topNavGroup');
      if (topGroup) topGroup.textContent = navGroups[screenId] || 'Workspace';

      if (screenId === 'test-create') {
        updateFlowUI();
      }

      if (window.innerWidth < 768 && mobileOpen) {
        toggleMobileSidebar();
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function switchStudioTab(tabId) {
      studioState.activeTab = tabId;

      document.querySelectorAll('.studio-pane').forEach(el => el.classList.add('hidden'));
      const targetPane = document.getElementById('studio-pane-' + tabId);
      if (targetPane) targetPane.classList.remove('hidden');

      document.querySelectorAll('.studio-tab-btn').forEach(btn => {
        btn.classList.remove('active-nav-pill');
        btn.classList.add('inactive-nav-pill');
      });

      const activeBtn = document.getElementById('tab-nav-' + tabId);
      if (activeBtn) {
        activeBtn.classList.remove('inactive-nav-pill');
        activeBtn.classList.add('active-nav-pill');
      }

      updateFlowUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function setTestStudioStep(num) {
      const map = { 1: 'pipeline', 2: 'builder', 3: 'resumes', 4: 'proctor', 5: 'blueprint' };
      switchStudioTab(map[num] || 'pipeline');
    }

    function switchTestSection(secId) {
      studioState.activeSection = secId;
      document.getElementById('subpane-sec-mcq').classList.add('hidden');
      document.getElementById('subpane-sec-coding').classList.add('hidden');
      document.getElementById('subpane-sec-essay').classList.add('hidden');

      document.getElementById('btn-sec-mcq').className = 'px-3.5 py-2 rounded-xl text-xs font-medium text-[#64748B] hover:text-[#172033] hover:bg-[#F5F7FB] transition';
      document.getElementById('btn-sec-coding').className = 'px-3.5 py-2 rounded-xl text-xs font-medium text-[#64748B] hover:text-[#172033] hover:bg-[#F5F7FB] transition';
      document.getElementById('btn-sec-essay').className = 'px-3.5 py-2 rounded-xl text-xs font-medium text-[#64748B] hover:text-[#172033] hover:bg-[#F5F7FB] transition';

      const targetSub = document.getElementById('subpane-sec-' + secId);
      const targetBtn = document.getElementById('btn-sec-' + secId);
      if (targetSub) targetSub.classList.remove('hidden');
      if (targetBtn) {
        targetBtn.className = 'px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#172033] text-white';
      }
    }

    function toggleStage(stage) {
      if (stage === 'dwaani') {
        const chk = document.getElementById('check-stage-dwaani');
        studioState.includeDwaani = chk.checked;
      } else if (stage === 'gradarena') {
        const chk = document.getElementById('check-stage-gradarena');
        studioState.includeGradArena = chk.checked;
      }

      if (!studioState.includeDwaani && !studioState.includeGradArena) {
        alert('Assessment must contain at least one stage (Dwaani AI Voice Interview or GradArena Assessment).');
        if (stage === 'dwaani') {
          studioState.includeDwaani = true;
          document.getElementById('check-stage-dwaani').checked = true;
        } else {
          studioState.includeGradArena = true;
          document.getElementById('check-stage-gradarena').checked = true;
        }
      }

      updateFlowUI();
    }

    function setStageMode(stage, mode) {
      if (stage === 'dwaani') studioState.dwaaniMode = mode;
      else if (stage === 'gradarena') studioState.gradArenaMode = mode;
      updateFlowUI();
    }

    function setSequence(seq) {
      studioState.sequence = seq;
      const labelDwaani = document.getElementById('label-seq-dwaani-first');
      const labelGrad = document.getElementById('label-seq-gradarena-first');

      if (seq === 'dwaani_first') {
        if (labelDwaani) labelDwaani.className = 'p-4 rounded-xl border border-[#BCE0F7] bg-[#EBF5FC] flex items-start gap-3 cursor-pointer transition shadow-xs';
        if (labelGrad) labelGrad.className = 'p-4 rounded-xl border border-[#E5EAF2] bg-white hover:border-[#BCE0F7] flex items-start gap-3 cursor-pointer transition';
      } else {
        if (labelDwaani) labelDwaani.className = 'p-4 rounded-xl border border-[#E5EAF2] bg-white hover:border-[#BCE0F7] flex items-start gap-3 cursor-pointer transition';
        if (labelGrad) labelGrad.className = 'p-4 rounded-xl border border-[#BCE0F7] bg-[#EBF5FC] flex items-start gap-3 cursor-pointer transition shadow-xs';
      }
      updateFlowUI();
    }

    function swapSequence() {
      const newSeq = (studioState.sequence === 'dwaani_first') ? 'gradarena_first' : 'dwaani_first';
      const radios = document.getElementsByName('flow_sequence');
      radios.forEach(r => {
        if (r.value === newSeq) r.checked = true;
      });
      setSequence(newSeq);
    }

    function updateThreshold(stage, val) {
      const numVal = parseInt(val) || 0;
      if (stage === 'dwaani') {
        studioState.dwaaniThreshold = numVal;
        const range = document.getElementById('dwaaniThreshRange');
        const num = document.getElementById('dwaaniThreshNum');
        if (range && range.value != numVal) range.value = numVal;
        if (num && num.value != numVal) num.value = numVal;
      } else if (stage === 'gradarena') {
        studioState.gradArenaThreshold = numVal;
        const range = document.getElementById('gradArenaThreshRange');
        const num = document.getElementById('gradArenaThreshNum');
        if (range && range.value != numVal) range.value = numVal;
        if (num && num.value != numVal) num.value = numVal;
      }
      updateFlowUI();
    }

    function updateFailureRule(stage, rule) {
      if (stage === 'dwaani') studioState.dwaaniFailureRule = rule;
      else if (stage === 'gradarena') studioState.gradArenaFailureRule = rule;
      updateFlowUI();
    }

    function updateFlowUI() {
      const badge = document.getElementById('workflowTypeBadge');
      const seqSection = document.getElementById('section-sequence-config');
      const diagram = document.getElementById('visual-flow-diagram');

      if (studioState.includeDwaani && studioState.includeGradArena) {
        if (badge) badge.textContent = 'Combined 2-Stage Funnel';
        if (seqSection) seqSection.classList.remove('hidden');

        if (diagram) {
          if (studioState.sequence === 'dwaani_first') {
            diagram.innerHTML = 
              '<div class="flex-1 p-3.5 rounded-xl bg-white border border-[#E5EAF2] shadow-xs">' +
                '<div class="text-[10px] font-mono font-semibold text-[#107acc] uppercase">Step 1 (First Screen)</div>' +
                '<div class="font-bold text-[#172033] mt-0.5">Dwaani AI Voice Interview</div>' +
                '<div class="text-[11px] text-[#64748B] mt-1 font-mono">Pass Cutoff: ≥ ' + studioState.dwaaniThreshold + '%</div>' +
              '</div>' +
              '<div class="text-[#8994A7] font-medium shrink-0 flex flex-col items-center">' +
                '<span class="text-xs text-[#107acc]">→ [Gating Rule: ≥ ' + studioState.dwaaniThreshold + '%] →</span>' +
                '<span class="text-[10px] text-rose-600 font-mono">Fail: ' + (studioState.dwaaniFailureRule === 'stop' ? 'Stop Workflow' : 'Hold Review') + '</span>' +
              '</div>' +
              '<div class="flex-1 p-3.5 rounded-xl bg-white border border-[#E5EAF2] shadow-xs">' +
                '<div class="text-[10px] font-mono font-semibold text-[#3B82F6] uppercase">Step 2 (Technical Test)</div>' +
                '<div class="font-bold text-[#172033] mt-0.5">GradArena Assessment</div>' +
                '<div class="text-[11px] text-[#64748B] mt-1 font-mono">Pass Cutoff: ≥ ' + studioState.gradArenaThreshold + '%</div>' +
              '</div>' +
              '<div class="text-emerald-700 font-bold shrink-0">→ Shortlist</div>';
          } else {
            diagram.innerHTML = 
              '<div class="flex-1 p-3.5 rounded-xl bg-white border border-[#E5EAF2] shadow-xs">' +
                '<div class="text-[10px] font-mono font-semibold text-[#3B82F6] uppercase">Step 1 (First Screen)</div>' +
                '<div class="font-bold text-[#172033] mt-0.5">GradArena Assessment</div>' +
                '<div class="text-[11px] text-[#64748B] mt-1 font-mono">Pass Cutoff: ≥ ' + studioState.gradArenaThreshold + '%</div>' +
              '</div>' +
              '<div class="text-[#8994A7] font-medium shrink-0 flex flex-col items-center">' +
                '<span class="text-xs text-[#3B82F6]">→ [Gating Rule: ≥ ' + studioState.gradArenaThreshold + '%] →</span>' +
                '<span class="text-[10px] text-rose-600 font-mono">Fail: ' + (studioState.gradArenaFailureRule === 'stop' ? 'Stop Workflow' : 'Hold Review') + '</span>' +
              '</div>' +
              '<div class="flex-1 p-3.5 rounded-xl bg-white border border-[#E5EAF2] shadow-xs">' +
                '<div class="text-[10px] font-mono font-semibold text-[#107acc] uppercase">Step 2 (Voice Screen)</div>' +
                '<div class="font-bold text-[#172033] mt-0.5">Dwaani AI Voice Interview</div>' +
                '<div class="text-[11px] text-[#64748B] mt-1 font-mono">Pass Cutoff: ≥ ' + studioState.dwaaniThreshold + '%</div>' +
              '</div>' +
              '<div class="text-emerald-700 font-bold shrink-0">→ Shortlist</div>';
          }
        }
      } else {
        const sName = studioState.includeDwaani ? 'Single Stage: Dwaani AI Voice' : 'Single Stage: GradArena Assessment';
        if (badge) badge.textContent = sName;
        if (seqSection) seqSection.classList.add('hidden');
      }

      // Populate Threshold Container
      const threshContainer = document.getElementById('stage-thresholds-container');
      if (threshContainer) {
        let cardsHtml = '';

        const dwaaniCard = 
          '<div class="p-4 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-3">' +
            '<div class="flex items-center justify-between border-b border-[#E5EAF2] pb-2">' +
              '<span class="text-xs font-bold text-[#172033]">Dwaani AI Voice Interview Passing Threshold</span>' +
              '<span class="text-xs font-mono font-bold text-[#107acc]">' + studioState.dwaaniThreshold + '% Minimum</span>' +
            '</div>' +
            '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">' +
              '<div class="md:col-span-2 space-y-1">' +
                '<input id="dwaaniThreshRange" type="range" min="40" max="95" value="' + studioState.dwaaniThreshold + '" oninput="updateThreshold(\\'dwaani\\', this.value)" class="w-full accent-[#107acc]">' +
              '</div>' +
              '<div>' +
                '<input id="dwaaniThreshNum" type="number" min="40" max="95" value="' + studioState.dwaaniThreshold + '" onchange="updateThreshold(\\'dwaani\\', this.value)" class="w-full p-2 text-xs modern-input font-mono font-bold text-[#172033]">' +
              '</div>' +
            '</div>' +
            '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-[#E5EAF2] text-xs">' +
              '<div>' +
                '<label class="block text-[11px] font-medium text-[#64748B] mb-1">Gating Requirement:</label>' +
                '<label class="flex items-center gap-2 text-xs text-[#172033] cursor-pointer">' +
                  '<input type="checkbox" checked class="accent-[#107acc]">' +
                  '<span>Require Passing Score (≥ ' + studioState.dwaaniThreshold + '%) to unlock next round</span>' +
                '</label>' +
              '</div>' +
              '<div>' +
                '<label class="block text-[11px] font-medium text-[#64748B] mb-1">When Candidate Fails This Stage:</label>' +
                '<select onchange="updateFailureRule(\\'dwaani\\', this.value)" class="w-full p-2 text-xs modern-input text-[#172033]">' +
                  '<option value="stop" ' + (studioState.dwaaniFailureRule === 'stop' ? 'selected' : '') + '>Stop Workflow Immediately (Auto-Regret Email)</option>' +
                  '<option value="review" ' + (studioState.dwaaniFailureRule === 'review' ? 'selected' : '') + '>Route to Recruiter Manual Review Pool (Hold)</option>' +
                '</select>' +
              '</div>' +
            '</div>' +
          '</div>';

        const gradCard = 
          '<div class="p-4 rounded-xl border border-[#E5EAF2] bg-[#F5F7FB] space-y-3">' +
            '<div class="flex items-center justify-between border-b border-[#E5EAF2] pb-2">' +
              '<span class="text-xs font-bold text-[#172033]">GradArena Assessment Passing Threshold</span>' +
              '<span class="text-xs font-mono font-bold text-[#3B82F6]">' + studioState.gradArenaThreshold + '% Minimum</span>' +
            '</div>' +
            '<div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">' +
              '<div class="md:col-span-2 space-y-1">' +
                '<input id="gradArenaThreshRange" type="range" min="40" max="95" value="' + studioState.gradArenaThreshold + '" oninput="updateThreshold(\\'gradarena\\', this.value)" class="w-full accent-[#3B82F6]">' +
              '</div>' +
              '<div>' +
                '<input id="gradArenaThreshNum" type="number" min="40" max="95" value="' + studioState.gradArenaThreshold + '" onchange="updateThreshold(\\'gradarena\\', this.value)" class="w-full p-2 text-xs modern-input font-mono font-bold text-[#172033]">' +
              '</div>' +
            '</div>' +
            '<div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-[#E5EAF2] text-xs">' +
              '<div>' +
                '<label class="block text-[11px] font-medium text-[#64748B] mb-1">Gating Requirement:</label>' +
                '<label class="flex items-center gap-2 text-xs text-[#172033] cursor-pointer">' +
                  '<input type="checkbox" checked class="accent-[#3B82F6]">' +
                  '<span>Require Passing Score (≥ ' + studioState.gradArenaThreshold + '%) to Shortlist</span>' +
                '</label>' +
              '</div>' +
              '<div>' +
                '<label class="block text-[11px] font-medium text-[#64748B] mb-1">When Candidate Fails This Stage:</label>' +
                '<select onchange="updateFailureRule(\\'gradarena\\', this.value)" class="w-full p-2 text-xs modern-input text-[#172033]">' +
                  '<option value="review" ' + (studioState.gradArenaFailureRule === 'review' ? 'selected' : '') + '>Route to Recruiter Manual Review Pool (Hold)</option>' +
                  '<option value="stop" ' + (studioState.gradArenaFailureRule === 'stop' ? 'selected' : '') + '>Stop Workflow Immediately (Auto-Regret Email)</option>' +
                '</select>' +
              '</div>' +
            '</div>' +
          '</div>';

        if (studioState.includeDwaani && studioState.includeGradArena) {
          cardsHtml = (studioState.sequence === 'dwaani_first') ? (dwaaniCard + gradCard) : (gradCard + dwaaniCard);
        } else if (studioState.includeDwaani) {
          cardsHtml = dwaaniCard;
        } else {
          cardsHtml = gradCard;
        }

        threshContainer.innerHTML = cardsHtml;
      }

      // Populate Blueprint Summary
      const summaryList = document.getElementById('summaryStepsList');
      if (summaryList) {
        if (studioState.includeDwaani && studioState.includeGradArena) {
          const isDwaaniFirst = (studioState.sequence === 'dwaani_first');
          const stage1Name = isDwaaniFirst ? 'Dwaani AI Voice Interview' : 'GradArena Assessment';
          const stage1Thresh = isDwaaniFirst ? studioState.dwaaniThreshold : studioState.gradArenaThreshold;
          const stage2Name = isDwaaniFirst ? 'GradArena Assessment' : 'Dwaani AI Voice Interview';
          const stage2Thresh = isDwaaniFirst ? studioState.gradArenaThreshold : studioState.dwaaniThreshold;

          summaryList.innerHTML = 
            '<div class="p-3.5 rounded-xl bg-white border border-[#E5EAF2] space-y-1.5 text-xs shadow-xs">' +
              '<div class="flex items-center justify-between font-bold text-[#172033]">' +
                '<span>Step 1: ' + stage1Name + '</span>' +
                '<span class="font-mono text-emerald-700">Pass: ≥ ' + stage1Thresh + '%</span>' +
              '</div>' +
              '<div class="text-[11px] text-[#64748B]">Candidates must score ≥ ' + stage1Thresh + '% to unlock Step 2. Failure triggers: ' + (isDwaaniFirst ? studioState.dwaaniFailureRule : studioState.gradArenaFailureRule) + '.</div>' +
            '</div>' +
            '<div class="p-3.5 rounded-xl bg-white border border-[#E5EAF2] space-y-1.5 text-xs shadow-xs">' +
              '<div class="flex items-center justify-between font-bold text-[#172033]">' +
                '<span>Step 2: ' + stage2Name + '</span>' +
                '<span class="font-mono text-emerald-700">Pass: ≥ ' + stage2Thresh + '%</span>' +
              '</div>' +
              '<div class="text-[11px] text-[#64748B]">Dual-Camera QR Live Proctoring required (0 critical malpractice flags). Qualifiers automatically shortlisted.</div>' +
            '</div>';
        }
      }
    }

    // Helper functions
    function previewCandidatePortal() {
      alert('Opening Candidate Proctored Examination Sandbox in separate test view...');
    }

    function addTestCaseRow() {
      const tbody = document.getElementById('testCaseRowsContainer');
      if (!tbody) return;
      const count = tbody.children.length + 1;
      const tr = document.createElement('tr');
      tr.className = 'hover:bg-[#F5F7FB] transition';
      tr.innerHTML = 
        '<td class="p-2.5 font-bold text-[#172033] font-mono">TC-0' + count + '</td>' +
        '<td class="p-2.5 text-[#64748B] font-mono">Custom input vector</td>' +
        '<td class="p-2.5 text-emerald-700 font-mono font-semibold">Expected validation response</td>' +
        '<td class="p-2.5 font-mono text-[#172033]">10 Marks</td>' +
        '<td class="p-2.5"><span class="px-2 py-0.5 rounded text-[9px] bg-[#F5F7FB] text-[#64748B] border border-[#E5EAF2]">Public Sample</span></td>' +
        '<td class="p-2.5 text-right"><button onclick="this.closest(\\'tr\\').remove()" class="text-rose-600 hover:underline">Delete</button></td>';
      tbody.appendChild(tr);
    }

    function triggerAiQuestionGeneration() {
      const input = document.getElementById('aiGenPromptInput');
      const topic = (input && input.value) ? input.value : 'Distributed Transactions & Resilience';
      alert('✨ Groq Llama-3 AI Question Studio generated 3 new questions for "' + topic + '". Added to Section 1 MCQs and Section 2 Sandbox!');
      if (input) input.value = '';
    }

    function simulateBulkIngestion() {
      alert('⚡ Groq ATS Engine successfully parsed 4 resumes from archive! Extracted skills, experience, and computed ATS match scores.');
      switchStudioTab('resumes');
    }

    function inviteCandidate(name, token) {
      alert('✉️ Magic link and temporary 12-char credentials dispatched via email to ' + name + ' (Token: ' + token + '). Valid for 48 hours.');
    }

    function dispatchInvitesToAll() {
      alert('✉️ Magic examination links dispatched to all 4 candidates with active 48-hour expiration tokens!');
    }

    function saveAndActivateWorkflow() {
      try {
        localStorage.setItem('gradarena_configured_workflow', JSON.stringify(studioState));
      } catch (e) {}

      alert('Assessment Campaign Successfully Deployed! Requisition: Senior Java & Distributed Cloud Architect. Staged Candidates: 4 Applicants Invited. Security Level: Dual-Camera QR Pairing + Tab-Lock Enforced.');
      switchScreen('tests');
    }

    function openDossier(candidateName) {
      const nameEl = document.getElementById('dossierCandidateName');
      if (nameEl) nameEl.textContent = candidateName;
      switchScreen('candidate-detail');
    }

    function openCreatorProfile(creatorName) {
      const nameEl = document.getElementById('creatorProfileName');
      if (nameEl) nameEl.textContent = creatorName;
      switchScreen('creator-detail');
    }

    function approveReview(testId) {
      alert('Assessment ' + testId + ' approved by Manager! Published to Tests Library and unlocked for Recruiter candidate dispatch.');
      switchScreen('tests');
    }

    function requestChangesReview(testId) {
      const comment = document.getElementById('reviewCommentText');
      const text = (comment && comment.value) ? comment.value : 'Please revise Section 2 coding test cases.';
      alert('Change request dispatched to Author for ' + testId + ' with feedback: "' + text + '"');
      switchScreen('tests');
    }

    function sendChatMessage() {
      const input = document.getElementById('chatMessageInput');
      if (!input || !input.value.trim()) return;
      const text = input.value.trim();
      const container = document.getElementById('chatMessagesContainer');
      if (container) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'flex items-start gap-2.5 max-w-md ml-auto flex-row-reverse';
        msgDiv.innerHTML = 
          '<div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#107acc] to-[#0c68ab] text-white font-bold text-[10px] flex items-center justify-center shrink-0">RG</div>' +
          '<div class="p-3 bg-gradient-to-r from-[#107acc] to-[#0c68ab] text-white rounded-2xl rounded-tr-sm shadow-xs text-xs">' +
            text +
            '<span class="text-[10px] text-white/70 block mt-1 font-mono">Just now</span>' +
          '</div>';
        container.appendChild(msgDiv);
        container.scrollTop = container.scrollHeight;
      }
      input.value = '';
    }

    // Auto-switch screen and tab on startup via URL param (?screen=...&tab=...) or hash (#...)
    window.addEventListener('DOMContentLoaded', () => {
      if (typeof updateFlowUI === 'function') updateFlowUI();
      const params = new URLSearchParams(window.location.search);
      const s = params.get('screen') || window.location.hash.replace('#', '');
      if (s) {
        if (s === 'dashboard-collapsed') {
          switchScreen('dashboard');
          toggleSidebar(true);
        } else if (s.startsWith('test-create-') || screenTitles[s]) {
          switchScreen(s);
        }
      }
      const step = params.get('step');
      if (step && typeof setTestStudioStep === 'function') {
        setTestStudioStep(parseInt(step));
      }
      const tab = params.get('tab');
      if (tab && typeof switchStudioTab === 'function') {
        switchStudioTab(tab);
      }
    });
  </script>

</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'manager-panel.html'), html, 'utf8');
fs.writeFileSync(path.join(__dirname, 'manager-dashboard.html'), html, 'utf8');
console.log('Successfully wrote hybrid enterprise UI to manager-panel.html & manager-dashboard.html (' + html.length + ' bytes)');
