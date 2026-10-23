const fs = require('fs');
const path = require('path');

// Complete modernized enterprise HTML
const enterpriseHtml = `<!DOCTYPE html>
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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            app: {
              bg: '#F6F8FB',
              surface: '#FFFFFF',
              border: '#E3E8EF',
              borderDark: '#CDD5DF',
            },
            text: {
              primary: '#172033',
              secondary: '#5F6B7A',
              muted: '#7B8798',
            },
            primary: {
              DEFAULT: '#1769D2',
              hover: '#1256B0',
              subtle: '#EFF6FF',
              border: '#B2DDFF',
            },
            ai: {
              DEFAULT: '#6941C6',
              bg: '#F9F5FF',
              border: '#E9D7FE',
              subtle: '#7F56D9',
            },
            success: {
              DEFAULT: '#027A48',
              bg: '#ECFDF3',
              border: '#ABEFC6',
            },
            warning: {
              DEFAULT: '#B54708',
              bg: '#FFFAEB',
              border: '#FEDF89',
            },
            destructive: {
              DEFAULT: '#B42318',
              bg: '#FEF3F2',
              border: '#FECDCA',
            }
          },
          boxShadow: {
            'xs': '0 1px 2px 0 rgba(16, 24, 40, 0.04)',
            'sm': '0 1px 3px 0 rgba(16, 24, 40, 0.08), 0 1px 2px -1px rgba(16, 24, 40, 0.04)',
            'md': '0 4px 8px -2px rgba(16, 24, 40, 0.08), 0 2px 4px -2px rgba(16, 24, 40, 0.04)',
          }
        }
      }
    }
  </script>

  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: #F6F8FB;
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

    .sidebar-transition {
      transition: width 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .content-transition {
      transition: margin-left 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* Custom subtle scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #F6F8FB;
    }
    ::-webkit-scrollbar-thumb {
      background: #CDD5DF;
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #9AA4B2;
    }

    @keyframes live-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.35; }
    }
    .live-dot {
      animation: live-pulse 2s ease-in-out infinite;
    }
  </style>
</head>
<body class="min-h-screen flex bg-[#F6F8FB] text-[#172033] antialiased">

  <!-- ============================================================ -->
  <!-- SIDEBAR NAVIGATION SHELL (240px Desktop, Refined & Crisp)     -->
  <!-- ============================================================ -->
  <aside id="sidebar" class="sidebar-transition fixed top-0 bottom-0 left-0 z-40 bg-white border-r border-[#E3E8EF] w-[240px] flex flex-col justify-between select-none">
    
    <div class="flex-1 flex flex-col min-h-0">
      
      <!-- Brand Header -->
      <div class="h-14 px-4 flex items-center justify-between border-b border-[#E3E8EF]">
        <div id="brandBlock" class="flex items-center gap-2.5 cursor-pointer overflow-hidden" onclick="switchScreen('dashboard')">
          <div class="w-8 h-8 rounded-lg bg-[#1769D2] text-white flex items-center justify-center shrink-0 shadow-xs">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5 4.5-1.35 8-6.25 8-11.5V6l-8-4z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          </div>
          <div class="brand-text truncate">
            <div class="flex items-center gap-1.5">
              <span class="text-sm font-semibold tracking-tight text-[#172033]">GradArena</span>
              <span class="px-1.5 py-0.2 rounded text-[10px] font-medium bg-[#F9F5FF] text-[#6941C6] border border-[#E9D7FE]">AI</span>
            </div>
            <div class="text-[11px] text-[#7B8798] truncate">Hiring Intelligence</div>
          </div>
        </div>

        <button id="toggleBtn" onclick="toggleSidebar()" title="Toggle Sidebar (⌘B)" class="w-7 h-7 rounded-md text-[#7B8798] hover:text-[#172033] hover:bg-[#F6F8FB] flex items-center justify-center transition shrink-0">
          <svg id="toggleIcon" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      </div>

      <!-- Scope Context Capsule -->
      <div class="px-3 pt-3 pb-2">
        <div class="px-2.5 py-2 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF] flex items-center justify-between">
          <div class="flex items-center gap-2 min-w-0">
            <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0 live-dot"></span>
            <div class="brand-text truncate">
              <div class="text-xs font-semibold text-[#172033] truncate">Capgemini GCC</div>
              <div class="text-[11px] text-[#7B8798] truncate">Engineering Practice</div>
            </div>
          </div>
          <span class="brand-text text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-white text-[#5F6B7A] border border-[#E3E8EF]">HQ</span>
        </div>
      </div>

      <!-- Navigation Tree -->
      <nav class="flex-1 px-3 py-2 space-y-4 overflow-y-auto">
        
        <!-- SECTION 1: WORKSPACE -->
        <div>
          <div class="brand-text px-2 mb-1.5 text-[11px] font-semibold tracking-wider text-[#7B8798] uppercase">
            Workspace
          </div>
          <div class="space-y-0.5">
            
            <button onclick="switchScreen('dashboard')" id="nav-dashboard" class="nav-item w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium transition text-left bg-[#EFF6FF] text-[#1769D2]">
              <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span class="brand-text truncate">Dashboard</span>
            </button>

            <button onclick="switchScreen('creators')" id="nav-creators" class="nav-item w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition text-left">
              <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span class="brand-text truncate">Manage Test Creators</span>
            </button>

            <button onclick="switchScreen('test-create')" id="nav-test-create" class="nav-item w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition text-left">
              <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              <span class="brand-text truncate">Test Creation Studio</span>
            </button>

            <button onclick="switchScreen('tests')" id="nav-tests" class="nav-item w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-sm font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition text-left">
              <div class="flex items-center gap-2.5 min-w-0">
                <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                </svg>
                <span class="brand-text truncate">Tests Library</span>
              </div>
              <span class="brand-text text-xs text-[#7B8798] tabular-nums font-mono">32</span>
            </button>

          </div>
        </div>

        <!-- SECTION 2: AI SCREENING & CONTROL -->
        <div>
          <div class="brand-text px-2 mb-1.5 text-[11px] font-semibold tracking-wider text-[#7B8798] uppercase">
            AI Screening & Control
          </div>
          <div class="space-y-0.5">
            
            <button onclick="switchScreen('reviews')" id="nav-reviews" class="nav-item w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-sm font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition text-left">
              <div class="flex items-center gap-2.5 min-w-0">
                <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 14 14"></polyline>
                </svg>
                <span class="brand-text truncate">Pending Reviews</span>
              </div>
              <span class="brand-text text-xs font-medium px-2 py-0.5 rounded-full bg-[#FFFAEB] text-[#B54708] border border-[#FEDF89] tabular-nums">4</span>
            </button>

            <button onclick="switchScreen('candidates')" id="nav-candidates" class="nav-item w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-sm font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition text-left">
              <div class="flex items-center gap-2.5 min-w-0">
                <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <polyline points="17 11 19 13 23 9"></polyline>
                </svg>
                <span class="brand-text truncate">Candidates Pool</span>
              </div>
              <span class="brand-text text-xs text-[#7B8798] tabular-nums font-mono">284</span>
            </button>

            <button onclick="switchScreen('live')" id="nav-live" class="nav-item w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-sm font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition text-left">
              <div class="flex items-center gap-2.5 min-w-0">
                <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
                <span class="brand-text truncate">Live AI Sessions</span>
              </div>
              <span class="brand-text text-xs font-medium px-2 py-0.5 rounded-full bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6] flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 live-dot"></span> 4
              </span>
            </button>

            <button onclick="switchScreen('chat')" id="nav-chat" class="nav-item w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition text-left">
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
    <div class="p-3 border-t border-[#E3E8EF] bg-white">
      <div class="p-2 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF] flex items-center gap-2.5">
        <div class="relative shrink-0">
          <div class="w-8 h-8 rounded-full bg-[#1769D2] text-white font-semibold flex items-center justify-center text-xs">
            RG
          </div>
          <span class="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white"></span>
        </div>
        <div class="brand-text min-w-0 flex-1">
          <div class="text-xs font-semibold text-[#172033] truncate">Rajini Gadi</div>
          <div class="text-[11px] text-[#7B8798] truncate">Department Manager</div>
        </div>
      </div>
    </div>

  </aside>

  <!-- ============================================================ -->
  <!-- MAIN CONTENT AREA                                            -->
  <!-- ============================================================ -->
  <div id="mainContent" class="content-transition flex-1 ml-[240px] min-h-screen flex flex-col">

    <!-- TOP HEADER -->
    <header class="h-14 px-6 bg-white border-b border-[#E3E8EF] sticky top-0 z-30 flex items-center justify-between gap-4">
      
      <!-- Breadcrumb & Screen Title -->
      <div class="flex items-center gap-3 min-w-0">
        <div class="flex items-center gap-1.5 text-xs text-[#7B8798]">
          <span id="topNavGroup">Workspace</span>
          <span>/</span>
        </div>
        <h1 id="topPageTitle" class="text-lg font-semibold text-[#172033] tracking-tight truncate">Dashboard</h1>
      </div>

      <!-- Search Input Bar -->
      <div class="hidden md:flex items-center flex-1 max-w-md mx-4">
        <div class="relative w-full">
          <svg class="w-4 h-4 text-[#7B8798] absolute left-3 top-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" id="globalSearchInput" placeholder="Search tests, candidate 3D scores, creators... (⌘K)" 
                 class="w-full pl-9 pr-12 py-1.5 text-xs bg-[#F6F8FB] hover:bg-white focus:bg-white border border-[#E3E8EF] focus:border-[#1769D2] rounded-lg outline-none transition text-[#172033] placeholder:text-[#7B8798]">
          <kbd class="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-[10px] font-mono text-[#7B8798] bg-white border border-[#E3E8EF] rounded shadow-xs">⌘K</kbd>
        </div>
      </div>

      <!-- Right Header Actions -->
      <div class="flex items-center gap-3 shrink-0">
        
        <!-- AI Engines Status -->
        <span class="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 live-dot"></span>
          AI Active
        </span>

        <!-- Credits Pill -->
        <div class="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#EFF6FF] border border-[#B2DDFF] text-[#1769D2] text-xs font-semibold">
          <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          <span>222.23</span>
          <span class="hidden lg:inline text-[11px] text-[#5F6B7A] font-normal border-l border-[#B2DDFF] pl-1.5">₹18,520 Val</span>
        </div>

        <!-- Notification Bell -->
        <button class="relative p-1.5 rounded-lg text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white"></span>
        </button>

        <!-- Profile Menu Dropdown Button -->
        <div class="flex items-center gap-2 pl-1 cursor-pointer">
          <div class="w-8 h-8 rounded-full bg-[#1769D2] text-white font-semibold text-xs flex items-center justify-center">
            R
          </div>
          <div class="hidden xl:block text-left">
            <div class="text-xs font-medium text-[#172033]">Rajini Gadi</div>
            <div class="text-[11px] text-[#7B8798]">Manager</div>
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
        
        <!-- Top 4 Decision-Oriented KPI Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div class="p-5 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-[#5F6B7A]">Active Hiring Drives</span>
              <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-xs font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">+14%</span>
            </div>
            <div class="text-2xl font-semibold text-[#172033] mt-2 tabular-nums">32</div>
            <div class="text-xs text-[#7B8798] mt-1">Across 4 GCC clients</div>
          </div>

          <div class="p-5 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-[#5F6B7A]">Total Candidates Tested</span>
              <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-xs font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">+8.2%</span>
            </div>
            <div class="text-2xl font-semibold text-[#172033] mt-2 tabular-nums">284</div>
            <div class="text-xs text-[#7B8798] mt-1">216 completed assessments</div>
          </div>

          <div class="p-5 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-[#5F6B7A]">Interview Conversion</span>
              <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-xs font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">+5.0%</span>
            </div>
            <div class="text-2xl font-semibold text-[#172033] mt-2 tabular-nums">48.2%</div>
            <div class="text-xs text-[#7B8798] mt-1">78 candidates shortlisted (≥80%)</div>
          </div>

          <div class="p-5 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <div class="flex items-center justify-between">
              <span class="text-xs font-medium text-[#5F6B7A]">Credit Consumption</span>
              <span class="text-xs font-mono text-[#5F6B7A]">212 Actions</span>
            </div>
            <div class="text-2xl font-semibold text-[#172033] mt-2 tabular-nums">13.7 <span class="text-sm font-normal text-[#7B8798]">/ day</span></div>
            <div class="text-xs text-[#7B8798] mt-1">₹18,520 reserve remaining</div>
          </div>

        </div>

        <!-- 2-Column Strategic Operational Section -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <!-- Funnel & Throughput (2 Cols) -->
          <div class="lg:col-span-2 bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-5">
            <div class="flex items-center justify-between border-b border-[#E3E8EF] pb-4">
              <div>
                <h3 class="text-sm font-semibold text-[#172033]">Recruitment Funnel & Candidate Throughput</h3>
                <p class="text-xs text-[#5F6B7A] mt-0.5">End-to-end candidate stage conversions from test creation to GCC selection</p>
              </div>
              <span class="text-xs font-medium text-[#7B8798] bg-[#F6F8FB] px-2.5 py-1 rounded border border-[#E3E8EF]">Last 30 Days</span>
            </div>

            <!-- 5 Operational Stages -->
            <div class="space-y-4">
              <div>
                <div class="flex justify-between text-xs mb-1.5">
                  <span class="font-medium text-[#172033]">1. Created Requisitions & Tests</span>
                  <span class="text-[#5F6B7A] font-mono tabular-nums">32 drives (100%)</span>
                </div>
                <div class="w-full bg-[#F6F8FB] h-2 rounded-full overflow-hidden border border-[#E3E8EF]">
                  <div class="bg-[#1769D2] h-full rounded-full" style="width: 100%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs mb-1.5">
                  <span class="font-medium text-[#172033]">2. Candidates Invited via Magic Link</span>
                  <span class="text-[#5F6B7A] font-mono tabular-nums">284 candidates (8.8 avg/test)</span>
                </div>
                <div class="w-full bg-[#F6F8FB] h-2 rounded-full overflow-hidden border border-[#E3E8EF]">
                  <div class="bg-[#1769D2] h-full rounded-full" style="width: 88%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs mb-1.5">
                  <span class="font-medium text-[#172033]">3. Assessments Completed (Dwaani Voice + Coding)</span>
                  <span class="text-[#5F6B7A] font-mono tabular-nums">216 candidates (76.0% turnout)</span>
                </div>
                <div class="w-full bg-[#F6F8FB] h-2 rounded-full overflow-hidden border border-[#E3E8EF]">
                  <div class="bg-[#1769D2] h-full rounded-full" style="width: 76%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs mb-1.5">
                  <span class="font-medium text-[#172033]">4. Shortlisted by AI (Composite ≥ 80%)</span>
                  <span class="text-[#027A48] font-mono tabular-nums font-semibold">78 qualified (36.1% pass rate)</span>
                </div>
                <div class="w-full bg-[#F6F8FB] h-2 rounded-full overflow-hidden border border-[#E3E8EF]">
                  <div class="bg-emerald-500 h-full rounded-full" style="width: 36.1%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs mb-1.5">
                  <span class="font-medium text-[#172033]">5. Selected / Hired in GCC</span>
                  <span class="text-[#027A48] font-mono tabular-nums font-semibold">42 offers accepted (14.8% yield)</span>
                </div>
                <div class="w-full bg-[#F6F8FB] h-2 rounded-full overflow-hidden border border-[#E3E8EF]">
                  <div class="bg-emerald-600 h-full rounded-full" style="width: 14.8%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Manager Approval Gate (1 Col) -->
          <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div class="flex items-center justify-between border-b border-[#E3E8EF] pb-3">
                <div>
                  <h3 class="text-sm font-semibold text-[#172033]">Manager Approval Gate</h3>
                  <p class="text-xs text-[#5F6B7A] mt-0.5">Author submissions requiring sign-off</p>
                </div>
                <button onclick="switchScreen('reviews')" class="text-xs text-[#1769D2] hover:underline font-medium">View All (4)</button>
              </div>

              <div class="space-y-3 mt-4">
                <!-- Approval Item 1 -->
                <div class="p-3.5 rounded-lg border border-[#E3E8EF] hover:border-[#CDD5DF] transition bg-white space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-[11px] font-medium px-2 py-0.5 rounded bg-[#EFF6FF] text-[#1769D2]">Capgemini GCC</span>
                    <span class="text-[11px] text-[#7B8798]">12m ago</span>
                  </div>
                  <div class="text-xs font-semibold text-[#172033]">Senior Java Microservices Architect</div>
                  <div class="text-[11px] text-[#5F6B7A]">Author: K. Prashanti • 15 MCQ + 1 Coding</div>
                  <div class="pt-1 flex items-center gap-2">
                    <button onclick="switchScreen('reviews')" class="flex-1 py-1.5 text-xs font-medium bg-[#1769D2] hover:bg-[#1256B0] text-white rounded transition text-center">
                      Inspect & Approve
                    </button>
                    <button onclick="switchScreen('chat')" class="px-2.5 py-1.5 text-xs font-medium text-[#5F6B7A] hover:bg-[#F6F8FB] border border-[#E3E8EF] rounded transition">
                      Message
                    </button>
                  </div>
                </div>

                <!-- Approval Item 2 -->
                <div class="p-3.5 rounded-lg border border-[#E3E8EF] hover:border-[#CDD5DF] transition bg-white space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-[11px] font-medium px-2 py-0.5 rounded bg-[#EFF6FF] text-[#1769D2]">Deloitte USI</span>
                    <span class="text-[11px] text-[#7B8798]">1h ago</span>
                  </div>
                  <div class="text-xs font-semibold text-[#172033]">Data Science & LLM Pipeline Specialist</div>
                  <div class="text-[11px] text-[#5F6B7A]">Author: Ananya Sharma • 5 Voice + 2 Coding</div>
                  <div class="pt-1 flex items-center gap-2">
                    <button onclick="switchScreen('reviews')" class="flex-1 py-1.5 text-xs font-medium bg-[#1769D2] hover:bg-[#1256B0] text-white rounded transition text-center">
                      Inspect & Approve
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-2 text-center text-xs text-[#7B8798] border-t border-[#E3E8EF]">
              2 more tests awaiting authorization
            </div>
          </div>

        </div>

        <!-- Recent Candidate Screenings Table -->
        <div class="bg-white rounded-lg border border-[#E3E8EF] shadow-xs space-y-4 p-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E3E8EF] pb-4">
            <div>
              <h3 class="text-sm font-semibold text-[#172033]">Recent Candidate Screenings</h3>
              <p class="text-xs text-[#5F6B7A] mt-0.5">Real-time evaluations powered by GradArena AI 3D scoring</p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="switchScreen('candidates')" class="text-xs font-medium text-[#1769D2] hover:underline flex items-center gap-1">
                Open Full Talent Ledger →
              </button>
            </div>
          </div>

          <!-- Table Container -->
          <div class="overflow-x-auto rounded-lg border border-[#E3E8EF]">
            <table class="w-full text-left text-xs">
              <thead class="bg-[#F6F8FB] text-[11px] font-semibold text-[#5F6B7A] uppercase tracking-wider border-b border-[#E3E8EF]">
                <tr>
                  <th class="p-3.5">Candidate</th>
                  <th class="p-3.5">Assigned Assessment</th>
                  <th class="p-3.5">3D AI Composite</th>
                  <th class="p-3.5">Proctor Integrity</th>
                  <th class="p-3.5">Status</th>
                  <th class="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E3E8EF] text-[#172033]">
                
                <tr class="hover:bg-[#F6F8FB] transition-colors cursor-pointer" onclick="openDossier('S. Siddharth Rao')">
                  <td class="p-3.5">
                    <div class="font-medium text-[#172033]">S. Siddharth Rao</div>
                    <div class="text-[11px] text-[#7B8798]">siddharth.rao@gmail.com</div>
                  </td>
                  <td class="p-3.5">
                    <div class="font-medium text-[#172033]">Lead Python Backend Architect</div>
                    <div class="text-[11px] text-[#7B8798]">Invesco GCC</div>
                  </td>
                  <td class="p-3.5">
                    <div class="flex items-center gap-2">
                      <span class="font-semibold text-emerald-700 font-mono tabular-nums">88.4%</span>
                      <span class="px-1.5 py-0.2 rounded text-[10px] font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Top 5%</span>
                    </div>
                  </td>
                  <td class="p-3.5">
                    <span class="inline-flex items-center gap-1 text-[11px] font-medium text-[#027A48]">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                      Dual-Cam (0 Flags)
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Recommended</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button class="text-xs font-medium text-[#1769D2] hover:underline">View Dossier →</button>
                  </td>
                </tr>

                <tr class="hover:bg-[#F6F8FB] transition-colors cursor-pointer" onclick="openDossier('Pooja Varma')">
                  <td class="p-3.5">
                    <div class="font-medium text-[#172033]">Pooja Varma</div>
                    <div class="text-[11px] text-[#7B8798]">pooja.varma@outlook.com</div>
                  </td>
                  <td class="p-3.5">
                    <div class="font-medium text-[#172033]">Senior Fullstack Engineer</div>
                    <div class="text-[11px] text-[#7B8798]">Capgemini GCC</div>
                  </td>
                  <td class="p-3.5">
                    <div class="flex items-center gap-2">
                      <span class="font-semibold text-emerald-700 font-mono tabular-nums">81.5%</span>
                      <span class="px-1.5 py-0.2 rounded text-[10px] font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Qualified</span>
                    </div>
                  </td>
                  <td class="p-3.5">
                    <span class="inline-flex items-center gap-1 text-[11px] font-medium text-[#027A48]">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                      Dual-Cam (0 Flags)
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Recommended</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button class="text-xs font-medium text-[#1769D2] hover:underline">View Dossier →</button>
                  </td>
                </tr>

                <tr class="hover:bg-[#F6F8FB] transition-colors cursor-pointer" onclick="openDossier('Rohan Kulkarni')">
                  <td class="p-3.5">
                    <div class="font-medium text-[#172033]">Rohan Kulkarni</div>
                    <div class="text-[11px] text-[#7B8798]">rohan.kulkarni@gmail.com</div>
                  </td>
                  <td class="p-3.5">
                    <div class="font-medium text-[#172033]">Lead DevOps Kubernetes</div>
                    <div class="text-[11px] text-[#7B8798]">Deloitte USI</div>
                  </td>
                  <td class="p-3.5">
                    <div class="flex items-center gap-2">
                      <span class="font-semibold text-amber-700 font-mono tabular-nums">64.2%</span>
                      <span class="px-1.5 py-0.2 rounded text-[10px] font-medium bg-[#FFFAEB] text-[#B54708] border border-[#FEDF89]">Borderline</span>
                    </div>
                  </td>
                  <td class="p-3.5">
                    <span class="inline-flex items-center gap-1 text-[11px] font-medium text-amber-700">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      2 Flags (Multiple Voices)
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#FFFAEB] text-[#B54708] border border-[#FEDF89]">Under Review</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button class="text-xs font-medium text-[#1769D2] hover:underline">View Dossier →</button>
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
      <div id="screen-creators" class="screen-view hidden space-y-6">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-semibold text-[#172033]">Manage Test Creators</h2>
            <p class="text-xs text-[#5F6B7A] mt-0.5">Supervise test authoring standards, approval turnarounds, and content quotas</p>
          </div>
          <button onclick="alert('Invite modal: Dispatch link to new author.')" class="h-9 px-4 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium shadow-xs transition flex items-center gap-2 self-start sm:self-auto">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Invite Test Creator
          </button>
        </div>

        <!-- 4 Summary Metrics -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Total Assigned Authors</span>
            <div class="text-xl font-semibold text-[#172033] mt-1 tabular-nums">14 Creators</div>
          </div>
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Active Drafts in Authoring</span>
            <div class="text-xl font-semibold text-[#172033] mt-1 tabular-nums">38 Assessments</div>
          </div>
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Avg First-Pass Approval</span>
            <div class="text-xl font-semibold text-emerald-700 mt-1 tabular-nums">94.2%</div>
          </div>
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Avg Review Turnaround</span>
            <div class="text-xl font-semibold text-[#172033] mt-1 tabular-nums">2.4 Hours</div>
          </div>
        </div>

        <!-- Filter Ribbon -->
        <div class="bg-white p-4 rounded-lg border border-[#E3E8EF] shadow-xs flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2.5 flex-1 min-w-[260px]">
            <input type="text" placeholder="Search by creator name or specialization..." class="w-full max-w-sm px-3 py-1.5 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] text-[#172033]">
            <select class="px-3 py-1.5 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg text-[#172033] outline-none">
              <option>All Specializations</option>
              <option>Cloud & Microservices</option>
              <option>Data Engineering & AI</option>
              <option>Fullstack Architecture</option>
            </select>
          </div>
          <span class="text-xs text-[#7B8798]">Showing 14 active authors</span>
        </div>

        <!-- Creators Table -->
        <div class="bg-white rounded-lg border border-[#E3E8EF] shadow-xs overflow-hidden">
          <table class="w-full text-left text-xs">
            <thead class="bg-[#F6F8FB] text-[11px] font-semibold text-[#5F6B7A] uppercase tracking-wider border-b border-[#E3E8EF]">
              <tr>
                <th class="p-3.5">Test Creator</th>
                <th class="p-3.5">Specialization</th>
                <th class="p-3.5">Active Assignments</th>
                <th class="p-3.5">Workload Quota</th>
                <th class="p-3.5">Approval Score</th>
                <th class="p-3.5">Status</th>
                <th class="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E3E8EF] text-[#172033]">
              
              <tr class="hover:bg-[#F6F8FB] transition-colors">
                <td class="p-3.5">
                  <div class="font-medium text-[#172033]">K. Prashanti</div>
                  <div class="text-[11px] text-[#7B8798]">prashanti.k@gadidigital.com</div>
                </td>
                <td class="p-3.5">
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#EFF6FF] text-[#1769D2]">Java & Microservices</span>
                </td>
                <td class="p-3.5 font-mono tabular-nums">4 Published • 2 Review</td>
                <td class="p-3.5">
                  <div class="w-24 bg-[#F6F8FB] h-1.5 rounded-full overflow-hidden border border-[#E3E8EF]">
                    <div class="bg-[#1769D2] h-full rounded-full" style="width: 75%"></div>
                  </div>
                  <span class="text-[10px] text-[#7B8798] mt-0.5 block">6 / 8 Cap</span>
                </td>
                <td class="p-3.5 font-semibold text-emerald-700 font-mono tabular-nums">96.4%</td>
                <td class="p-3.5">
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Active</span>
                </td>
                <td class="p-3.5 text-right space-x-2">
                  <button onclick="openCreatorProfile('K. Prashanti')" class="text-xs font-medium text-[#1769D2] hover:underline">View Profile</button>
                  <button onclick="switchScreen('chat')" class="text-xs text-[#5F6B7A] hover:text-[#172033]">Message</button>
                </td>
              </tr>

              <tr class="hover:bg-[#F6F8FB] transition-colors">
                <td class="p-3.5">
                  <div class="font-medium text-[#172033]">P. Hemachandra</div>
                  <div class="text-[11px] text-[#7B8798]">hemachandra.p@gadidigital.com</div>
                </td>
                <td class="p-3.5">
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#EFF6FF] text-[#1769D2]">Cloud & Distributed DB</span>
                </td>
                <td class="p-3.5 font-mono tabular-nums">5 Published • 1 Review</td>
                <td class="p-3.5">
                  <div class="w-24 bg-[#F6F8FB] h-1.5 rounded-full overflow-hidden border border-[#E3E8EF]">
                    <div class="bg-[#1769D2] h-full rounded-full" style="width: 85%"></div>
                  </div>
                  <span class="text-[10px] text-[#7B8798] mt-0.5 block">7 / 8 Cap</span>
                </td>
                <td class="p-3.5 font-semibold text-emerald-700 font-mono tabular-nums">92.1%</td>
                <td class="p-3.5">
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Active</span>
                </td>
                <td class="p-3.5 text-right space-x-2">
                  <button onclick="openCreatorProfile('P. Hemachandra')" class="text-xs font-medium text-[#1769D2] hover:underline">View Profile</button>
                  <button onclick="switchScreen('chat')" class="text-xs text-[#5F6B7A] hover:text-[#172033]">Message</button>
                </td>
              </tr>

              <tr class="hover:bg-[#F6F8FB] transition-colors">
                <td class="p-3.5">
                  <div class="font-medium text-[#172033]">Ananya Sharma</div>
                  <div class="text-[11px] text-[#7B8798]">ananya.s@gadidigital.com</div>
                </td>
                <td class="p-3.5">
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F9F5FF] text-[#6941C6] border border-[#E9D7FE]">Data Science & LLMs</span>
                </td>
                <td class="p-3.5 font-mono tabular-nums">3 Published • 1 Review</td>
                <td class="p-3.5">
                  <div class="w-24 bg-[#F6F8FB] h-1.5 rounded-full overflow-hidden border border-[#E3E8EF]">
                    <div class="bg-amber-500 h-full rounded-full" style="width: 100%"></div>
                  </div>
                  <span class="text-[10px] text-amber-700 font-medium mt-0.5 block">8 / 8 Full</span>
                </td>
                <td class="p-3.5 font-semibold text-emerald-700 font-mono tabular-nums">98.0%</td>
                <td class="p-3.5">
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#FFFAEB] text-[#B54708] border border-[#FEDF89]">At Capacity</span>
                </td>
                <td class="p-3.5 text-right space-x-2">
                  <button onclick="openCreatorProfile('Ananya Sharma')" class="text-xs font-medium text-[#1769D2] hover:underline">View Profile</button>
                  <button onclick="switchScreen('chat')" class="text-xs text-[#5F6B7A] hover:text-[#172033]">Message</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 3: TEST CREATOR PROFILE                               -->
      <!-- ============================================================ -->
      <div id="screen-creator-detail" class="screen-view hidden space-y-6">
        
        <!-- Profile Header -->
        <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-full bg-[#1769D2] text-white font-semibold text-lg flex items-center justify-center shrink-0">
              KP
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h2 id="creatorProfileName" class="text-lg font-semibold text-[#172033]">K. Prashanti</h2>
                <span class="px-2 py-0.5 rounded text-xs font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Active Author</span>
              </div>
              <p class="text-xs text-[#5F6B7A] mt-0.5">Senior Assessment Specialist — Java & Cloud Engineering Corridors</p>
              <div class="text-[11px] text-[#7B8798] mt-1 flex items-center gap-4">
                <span>prashanti.k@gadidigital.com</span>
                <span>•</span>
                <span>Reports to: Rajini Gadi (Manager)</span>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-2.5">
            <button onclick="switchScreen('creators')" class="h-9 px-3.5 rounded-lg border border-[#E3E8EF] hover:bg-[#F6F8FB] text-xs font-medium text-[#5F6B7A] transition">
              ← Back to Creators
            </button>
            <button onclick="switchScreen('chat')" class="h-9 px-4 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium transition flex items-center gap-1.5 shadow-xs">
              Direct Message
            </button>
          </div>
        </div>

        <!-- 4 Creator KPI Tiles -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Total Authored Assessments</span>
            <div class="text-xl font-semibold text-[#172033] mt-1 tabular-nums">14 Tests</div>
            <span class="text-[11px] text-[#7B8798]">10 published, 4 in review</span>
          </div>
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">First-Pass Approval Rating</span>
            <div class="text-xl font-semibold text-emerald-700 mt-1 tabular-nums">96.4%</div>
            <span class="text-[11px] text-[#7B8798]">High quality questions</span>
          </div>
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Avg Review Turnaround</span>
            <div class="text-xl font-semibold text-[#172033] mt-1 tabular-nums">2.1 Hours</div>
            <span class="text-[11px] text-[#7B8798]">Fastest in department</span>
          </div>
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Candidates Evaluated</span>
            <div class="text-xl font-semibold text-[#172033] mt-1 tabular-nums">142 Candidates</div>
            <span class="text-[11px] text-[#7B8798]">71.2% average score</span>
          </div>
        </div>

        <!-- Authored Tests Listing -->
        <div class="bg-white rounded-lg border border-[#E3E8EF] shadow-xs p-6 space-y-4">
          <h3 class="text-sm font-semibold text-[#172033]">Authored Assessments Portfolio</h3>
          <div class="overflow-x-auto rounded-lg border border-[#E3E8EF]">
            <table class="w-full text-left text-xs">
              <thead class="bg-[#F6F8FB] text-[11px] font-semibold text-[#5F6B7A] uppercase tracking-wider border-b border-[#E3E8EF]">
                <tr>
                  <th class="p-3.5">Test ID & Title</th>
                  <th class="p-3.5">Client Requisition</th>
                  <th class="p-3.5">Format & Structure</th>
                  <th class="p-3.5">Candidates</th>
                  <th class="p-3.5">Status</th>
                  <th class="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#E3E8EF] text-[#172033]">
                <tr class="hover:bg-[#F6F8FB] transition-colors">
                  <td class="p-3.5 font-medium text-[#172033]">TST-8842: Senior Java Microservices Architect</td>
                  <td class="p-3.5 text-[#5F6B7A]">Capgemini GCC</td>
                  <td class="p-3.5">15 MCQ + 1 Coding Challenge (60m)</td>
                  <td class="p-3.5 font-mono tabular-nums">124 Tested</td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Published</span></td>
                  <td class="p-3.5 text-right"><button onclick="switchScreen('test-detail')" class="text-xs text-[#1769D2] hover:underline">Inspect →</button></td>
                </tr>
                <tr class="hover:bg-[#F6F8FB] transition-colors">
                  <td class="p-3.5 font-medium text-[#172033]">TST-8841: Lead Python Backend Architect</td>
                  <td class="p-3.5 text-[#5F6B7A]">Invesco GCC</td>
                  <td class="p-3.5">15 MCQ + 1 Coding Challenge (60m)</td>
                  <td class="p-3.5 font-mono tabular-nums">98 Tested</td>
                  <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Published</span></td>
                  <td class="p-3.5 text-right"><button onclick="switchScreen('test-detail')" class="text-xs text-[#1769D2] hover:underline">Inspect →</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 4: TEST CREATION STUDIO (FLUID MULTI-MODAL WORKSPACE)  -->
      <!-- ============================================================ -->
      <div id="screen-test-create" class="screen-view hidden space-y-6">
        
        <!-- Studio Header -->
        <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-4">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#E3E8EF]">
            <div>
              <div class="flex items-center gap-2">
                <span class="w-6 h-6 rounded-md bg-[#1769D2] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </span>
                <h2 class="text-base font-semibold text-[#172033]">Assessment & Interview Architecture Studio</h2>
              </div>
              <p class="text-xs text-[#5F6B7A] mt-0.5">Orchestrate multi-modal screening funnels: proctored technical evaluations, conversational voice AI, and resume ATS calibration.</p>
            </div>

            <div class="flex items-center gap-2.5 self-start lg:self-auto">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium bg-[#F6F8FB] text-[#5F6B7A] border border-[#E3E8EF]">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Draft • Auto-saved
              </span>
              <button onclick="previewCandidatePortal()" class="h-9 px-3.5 rounded-lg border border-[#E3E8EF] hover:bg-[#F6F8FB] text-xs font-medium text-[#172033] transition flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-[#5F6B7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                Candidate Preview
              </button>
              <button onclick="saveAndActivateWorkflow()" class="h-9 px-4 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium shadow-xs transition flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Deploy Campaign
              </button>
            </div>
          </div>

          <!-- Studio Modern Stepper Tabs (Linear/Vercel Style) -->
          <div class="flex items-center gap-1.5 pt-1 overflow-x-auto">
            <button onclick="switchStudioTab('pipeline')" id="tab-nav-pipeline" class="studio-tab-btn flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition bg-[#1769D2] text-white shadow-xs">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              <span>1. Pipeline & Gating</span>
            </button>

            <button onclick="switchStudioTab('builder')" id="tab-nav-builder" class="studio-tab-btn flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
              <span>2. GradArena Test Builder</span>
              <span class="px-1.5 py-0.2 rounded text-[10px] font-mono bg-[#F6F8FB] text-[#7B8798]">16 Qs</span>
            </button>

            <button onclick="switchStudioTab('resumes')" id="tab-nav-resumes" class="studio-tab-btn flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
              <span>3. Resume Screening & AI ATS</span>
              <span class="px-1.5 py-0.2 rounded text-[10px] font-mono bg-[#ECFDF3] text-[#027A48]">4 Staged</span>
            </button>

            <button onclick="switchStudioTab('proctor')" id="tab-nav-proctor" class="studio-tab-btn flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>4. Proctoring & Security</span>
              <span class="px-1.5 py-0.2 rounded text-[10px] font-mono bg-[#F6F8FB] text-[#7B8798]">Dual-Cam</span>
            </button>

            <button onclick="switchStudioTab('blueprint')" id="tab-nav-blueprint" class="studio-tab-btn flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              <span>5. Review & Deploy</span>
            </button>
          </div>
        </div>

        <!-- TAB 1: WORKFLOW PIPELINE & GATING -->
        <div id="studio-pane-pipeline" class="studio-pane space-y-6">
          
          <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-[#E3E8EF] pb-3">
              <div>
                <h3 class="text-xs font-semibold text-[#172033] uppercase tracking-wider font-mono">1. Assessment Requisition Scope</h3>
                <p class="text-xs text-[#5F6B7A] mt-0.5">Define campaign parameters and associated hiring entity</p>
              </div>
              <span class="text-xs font-mono text-[#7B8798]">REQ-2026-CLOUD-994</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-medium text-[#172033] mb-1.5">Assessment Workflow Title *</label>
                <input id="workflowTitleInput" type="text" value="Senior Java & Distributed Cloud Architect" class="w-full px-3 py-2 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] font-medium text-[#172033]">
              </div>
              <div>
                <label class="block text-xs font-medium text-[#172033] mb-1.5">Hiring Enterprise Tenant *</label>
                <select class="w-full px-3 py-2 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] text-[#172033]">
                  <option selected>Capgemini GCC - Hyderabad</option>
                  <option>Invesco Enterprise Hub</option>
                  <option>Deloitte USI Tech Practice</option>
                  <option>Standard Chartered Global Business</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-medium text-[#172033] mb-1.5">Target Engineering Stream</label>
                <input type="text" value="Platform Engineering & Microservices" class="w-full px-3 py-2 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] text-[#172033]">
              </div>
            </div>
          </div>

          <!-- Multi-Stage Pipeline Composition -->
          <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E3E8EF] pb-3">
              <div>
                <h3 class="text-xs font-semibold text-[#172033] uppercase tracking-wider font-mono">2. Multi-Stage Pipeline Composition</h3>
                <p class="text-xs text-[#5F6B7A] mt-0.5">Select and configure the assessment components to execute in this hiring funnel</p>
              </div>
              <span id="workflowTypeBadge" class="px-2.5 py-1 rounded text-xs font-medium bg-[#F6F8FB] text-[#172033] border border-[#E3E8EF]">
                Combined 2-Stage Funnel
              </span>
            </div>

            <!-- Two Subtle Stage Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              
              <!-- STAGE CARD 1: DWAANI AI INTERVIEW -->
              <div id="card-stage-dwaani" class="p-5 rounded-lg border border-[#E3E8EF] bg-white shadow-xs space-y-4 transition-all">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-[#172033] text-white flex items-center justify-center shrink-0">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>
                      </svg>
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <h4 class="text-xs font-semibold text-[#172033]">Dwaani AI Voice Interview</h4>
                        <span class="px-1.5 py-0.2 text-[10px] font-medium bg-[#F9F5FF] text-[#6941C6] border border-[#E9D7FE] rounded">Voice AI</span>
                      </div>
                      <p class="text-[11px] text-[#5F6B7A] mt-0.5">Real-time conversational voice interview with adaptive probing & 3D scoring</p>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" id="check-stage-dwaani" checked onchange="toggleStage('dwaani')" class="sr-only peer">
                    <div class="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#172033]"></div>
                  </label>
                </div>

                <div id="dwaani-source-controls" class="p-3 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF] space-y-2.5">
                  <div class="flex items-center justify-between text-[11px]">
                    <span class="font-medium text-[#5F6B7A] uppercase font-mono">Interview Source:</span>
                    <span class="text-[#7B8798] font-mono">Groq Llama-3 Engine</span>
                  </div>
                  <div class="flex items-center gap-4 text-xs font-medium text-[#172033]">
                    <label class="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="dwaani_mode" value="new" checked onchange="setStageMode('dwaani', 'new')" class="accent-[#172033]">
                      <span>Create New AI Interview</span>
                    </label>
                    <label class="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="dwaani_mode" value="existing" onchange="setStageMode('dwaani', 'existing')" class="accent-[#172033]">
                      <span>Select Existing Library</span>
                    </label>
                  </div>
                  <div id="dwaani-existing-select" class="hidden pt-1">
                    <select id="dwaaniExistingId" class="w-full px-3 py-1.5 text-xs bg-white border border-[#E3E8EF] rounded outline-none text-[#172033]">
                      <option value="INT-201" selected>INT-201: Distributed Systems & Saga Pattern Voice Screen (4 Qs • 25m)</option>
                      <option value="INT-204">INT-204: Senior Cloud Architect Resilience & Kafka (5 Qs • 30m)</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- STAGE CARD 2: GRADARENA ASSESSMENT -->
              <div id="card-stage-gradarena" class="p-5 rounded-lg border border-[#E3E8EF] bg-white shadow-xs space-y-4 transition-all">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg bg-[#172033] text-white flex items-center justify-center shrink-0">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5 4.5-1.35 8-6.25 8-11.5V6l-8-4z"/>
                        <circle cx="12" cy="11" r="2.5"/>
                      </svg>
                    </div>
                    <div>
                      <div class="flex items-center gap-2">
                        <h4 class="text-xs font-semibold text-[#172033]">GradArena Proctored Assessment</h4>
                        <span class="px-1.5 py-0.2 text-[10px] font-medium bg-[#EFF6FF] text-[#1769D2] border border-[#B2DDFF] rounded">Proctored Code</span>
                      </div>
                      <p class="text-[11px] text-[#5F6B7A] mt-0.5">MCQs, algorithmic coding sandbox & dual-camera live proctoring</p>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" id="check-stage-gradarena" checked onchange="toggleStage('gradarena')" class="sr-only peer">
                    <div class="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#172033]"></div>
                  </label>
                </div>

                <div id="gradarena-source-controls" class="p-3 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF] space-y-2.5">
                  <div class="flex items-center justify-between text-[11px]">
                    <span class="font-medium text-[#5F6B7A] uppercase font-mono">Assessment Source:</span>
                    <span class="text-[#7B8798] font-mono">Coding Sandbox & MCQ</span>
                  </div>
                  <div class="flex items-center gap-4 text-xs font-medium text-[#172033]">
                    <label class="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="gradarena_mode" value="new" checked onchange="setStageMode('gradarena', 'new')" class="accent-[#172033]">
                      <span>Create New Assessment</span>
                    </label>
                    <label class="flex items-center gap-1.5 cursor-pointer">
                      <input type="radio" name="gradarena_mode" value="existing" onchange="setStageMode('gradarena', 'existing')" class="accent-[#172033]">
                      <span>Select Existing Library</span>
                    </label>
                  </div>
                  <div id="gradarena-existing-select" class="hidden pt-1">
                    <select id="gradArenaExistingId" class="w-full px-3 py-1.5 text-xs bg-white border border-[#E3E8EF] rounded outline-none text-[#172033]">
                      <option value="TST-8842" selected>TST-8842: Senior Java Microservices Architect (15 MCQ + 1 Coding • 60m)</option>
                      <option value="TST-8841">TST-8841: Lead Python Backend Architect (15 MCQ + 1 Coding • 60m)</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Sequence Ordering & Flow Execution -->
          <div id="section-sequence-config" class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E3E8EF] pb-3">
              <div>
                <h3 class="text-xs font-semibold text-[#172033] uppercase tracking-wider font-mono">3. Execution Sequence & Ordering</h3>
                <p class="text-xs text-[#5F6B7A] mt-0.5">Determine which assessment runs first and how candidates unlock the next stage</p>
              </div>
              <button onclick="swapSequence()" class="h-8 px-3 rounded-lg bg-[#F6F8FB] hover:bg-[#E3E8EF] text-[#172033] text-xs font-medium transition flex items-center gap-1.5 border border-[#E3E8EF]">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16"/></svg>
                ⇄ Swap Execution Sequence
              </button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label id="label-seq-dwaani-first" class="p-4 rounded-lg border border-[#CDD5DF] bg-[#F6F8FB] flex items-start gap-3 cursor-pointer transition">
                <input type="radio" name="flow_sequence" value="dwaani_first" checked onchange="setSequence('dwaani_first')" class="mt-0.5 accent-[#172033]">
                <div>
                  <div class="text-xs font-semibold text-[#172033] flex items-center gap-2">
                    <span>Example A: Dwaani AI Interview → GradArena Assessment</span>
                    <span class="px-1.5 py-0.2 rounded text-[10px] font-mono bg-[#172033] text-white">Voice Screen First</span>
                  </div>
                  <p class="text-[11px] text-[#5F6B7A] mt-1 leading-relaxed">
                    Candidates complete the Dwaani AI voice interview first. Qualifiers (≥ 70%) unlock the GradArena proctored technical test.
                  </p>
                </div>
              </label>

              <label id="label-seq-gradarena-first" class="p-4 rounded-lg border border-[#E3E8EF] bg-white hover:border-[#CDD5DF] flex items-start gap-3 cursor-pointer transition">
                <input type="radio" name="flow_sequence" value="gradarena_first" onchange="setSequence('gradarena_first')" class="mt-0.5 accent-[#172033]">
                <div>
                  <div class="text-xs font-semibold text-[#172033] flex items-center gap-2">
                    <span>Example B: GradArena Assessment → Dwaani AI Interview</span>
                    <span class="px-1.5 py-0.2 rounded text-[10px] font-mono bg-[#F6F8FB] text-[#5F6B7A]">Code Test First</span>
                  </div>
                  <p class="text-[11px] text-[#5F6B7A] mt-1 leading-relaxed">
                    Candidates take the GradArena technical test (MCQ/Coding) first. Only qualifiers (≥ 60%) advance to the Dwaani voice round.
                  </p>
                </div>
              </label>
            </div>

            <!-- Architecture Diagram -->
            <div class="p-4 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF]">
              <div class="text-[11px] font-mono font-medium text-[#7B8798] uppercase mb-2">Live Candidate Progression Pipeline:</div>
              <div id="visual-flow-diagram" class="flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
                <!-- Dynamically populated via JS -->
              </div>
            </div>
          </div>

          <!-- Pass Thresholds & Conditional Gating Rules -->
          <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-[#E3E8EF] pb-3">
              <div>
                <h3 class="text-xs font-semibold text-[#172033] uppercase tracking-wider font-mono">4. Pass Thresholds & Progression Gates</h3>
                <p class="text-xs text-[#5F6B7A] mt-0.5">Define qualification cutoffs and automated failure dropoff rules for each stage.</p>
              </div>
              <span class="text-xs font-mono text-[#7B8798]">Autonomous Gate Evaluation</span>
            </div>

            <div id="stage-thresholds-container" class="space-y-4">
              <!-- Dynamically populated via JS -->
            </div>
          </div>

          <!-- Tab Navigation Footer -->
          <div class="flex items-center justify-between bg-white p-4 rounded-lg border border-[#E3E8EF] shadow-xs">
            <button onclick="switchScreen('tests')" class="h-9 px-4 rounded-lg border border-[#E3E8EF] text-[#5F6B7A] text-xs font-medium hover:bg-[#F6F8FB] transition">Cancel</button>
            <button onclick="switchStudioTab('builder')" class="h-9 px-4 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium shadow-xs transition flex items-center gap-1.5">
              Next: Configure GradArena Assessment Questions →
            </button>
          </div>

        </div>

        <!-- TAB 2: GRADARENA TEST BUILDER -->
        <div id="studio-pane-builder" class="studio-pane hidden space-y-6">
          
          <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-[#E3E8EF] pb-3">
              <div>
                <h3 class="text-xs font-semibold text-[#172033] uppercase tracking-wider font-mono">GradArena Assessment Parameters</h3>
                <p class="text-xs text-[#5F6B7A] mt-0.5">Configure test duration, marks allocation, negative marking, and navigation modes</p>
              </div>
              <span class="px-2 py-0.5 text-xs font-mono font-medium bg-[#F6F8FB] text-[#5F6B7A] border border-[#E3E8EF] rounded">ID: TST-8842</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label class="block text-xs font-medium text-[#172033] mb-1.5">Assessment Title</label>
                <input type="text" id="builderTestTitle" value="Senior Java Microservices & Cloud Assessment" class="w-full px-3 py-2 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] text-[#172033]">
              </div>
              <div>
                <label class="block text-xs font-medium text-[#172033] mb-1.5">Total Duration</label>
                <div class="flex items-center gap-2">
                  <input type="number" id="builderDuration" value="60" class="w-full px-3 py-2 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] text-[#172033] font-mono">
                  <span class="text-xs text-[#5F6B7A]">Mins</span>
                </div>
              </div>
              <div>
                <label class="block text-xs font-medium text-[#172033] mb-1.5">Total Marks</label>
                <input type="number" id="builderTotalMarks" value="100" class="w-full px-3 py-2 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] text-[#172033] font-mono">
              </div>
              <div>
                <label class="block text-xs font-medium text-[#172033] mb-1.5">Negative Marking</label>
                <select class="w-full px-3 py-2 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] text-[#172033]">
                  <option selected>Enabled (-0.5 per wrong MCQ)</option>
                  <option>Strict (-1.0 per wrong MCQ)</option>
                  <option>Disabled (0 penalty)</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Section Breakdown Manager -->
          <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-[#E3E8EF] pb-3">
              <div>
                <h3 class="text-xs font-semibold text-[#172033] uppercase tracking-wider font-mono">Test Sections & Question Breakdown</h3>
                <p class="text-xs text-[#5F6B7A] mt-0.5">Divide test into structured modules with independent time limits and question pools</p>
              </div>
              <button onclick="alert('Section added to assessment.')" class="h-8 px-3 rounded-lg border border-[#E3E8EF] hover:bg-[#F6F8FB] text-[#172033] text-xs font-medium transition flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                + Add Section
              </button>
            </div>

            <!-- Section Pill Selector -->
            <div class="flex items-center gap-2 border-b border-[#E3E8EF] pb-3 overflow-x-auto">
              <button onclick="switchTestSection('mcq')" id="btn-sec-mcq" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#172033] text-white">
                Section 1: Architecture & Concurrency MCQs (15 Qs • 30 Marks)
              </button>
              <button onclick="switchTestSection('coding')" id="btn-sec-coding" class="px-3 py-1.5 rounded-lg text-xs font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition">
                Section 2: Algorithmic Coding Challenge (1 Problem • 40 Marks)
              </button>
              <button onclick="switchTestSection('essay')" id="btn-sec-essay" class="px-3 py-1.5 rounded-lg text-xs font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition">
                Section 3: System Design & Scalability (2 Qs • 30 Marks)
              </button>
            </div>

            <!-- SUBPANE 1: MCQ BUILDER -->
            <div id="subpane-sec-mcq" class="space-y-4 pt-1">
              <div class="flex items-center justify-between">
                <div class="text-xs font-semibold text-[#172033] flex items-center gap-2">
                  <span>Question 1 of 15 (Single Choice MCQ)</span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">+2.0 / -0.5 Marks</span>
                </div>
                <div class="flex items-center gap-2">
                  <button onclick="alert('Question duplicated.')" class="h-7 px-2.5 text-xs text-[#5F6B7A] hover:text-[#172033] border border-[#E3E8EF] rounded">Duplicate</button>
                  <button onclick="alert('Question deleted.')" class="h-7 px-2.5 text-xs text-[#B42318] hover:text-[#912018] border border-[#FECDCA] rounded">Delete</button>
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="block text-xs font-medium text-[#172033]">Question Prompt</label>
                <textarea rows="3" class="w-full p-3 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] font-mono text-[#172033] leading-relaxed">In an Apache Kafka consumer group processing microservices events, which partition assignment strategy guarantees that existing consumers retain their partition assignments during an incremental group rebalance, avoiding full stop-the-world rebalance storms?</textarea>
              </div>

              <!-- Options Grid -->
              <div class="space-y-2 pt-1">
                <div class="text-xs font-medium text-[#5F6B7A]">Options (Select radio button for Correct Answer):</div>
                
                <div class="flex items-center gap-3 p-2.5 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF]">
                  <input type="radio" name="mcq_q1_correct" value="A" class="accent-[#172033]">
                  <span class="text-xs font-semibold font-mono text-[#5F6B7A]">A</span>
                  <input type="text" value="org.apache.kafka.clients.consumer.RangeAssignor" class="flex-1 text-xs bg-transparent outline-none text-[#172033]">
                </div>

                <div class="flex items-center gap-3 p-2.5 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF]">
                  <input type="radio" name="mcq_q1_correct" value="B" class="accent-[#172033]">
                  <span class="text-xs font-semibold font-mono text-[#5F6B7A]">B</span>
                  <input type="text" value="org.apache.kafka.clients.consumer.RoundRobinAssignor" class="flex-1 text-xs bg-transparent outline-none text-[#172033]">
                </div>

                <div class="flex items-center gap-3 p-2.5 rounded-lg bg-[#ECFDF3] border border-[#ABEFC6]">
                  <input type="radio" name="mcq_q1_correct" value="C" checked class="accent-[#027A48]">
                  <span class="text-xs font-semibold font-mono text-[#027A48]">C (Correct)</span>
                  <input type="text" value="org.apache.kafka.clients.consumer.CooperativeStickyAssignor" class="flex-1 text-xs bg-transparent outline-none font-semibold text-[#027A48]">
                </div>

                <div class="flex items-center gap-3 p-2.5 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF]">
                  <input type="radio" name="mcq_q1_correct" value="D" class="accent-[#172033]">
                  <span class="text-xs font-semibold font-mono text-[#5F6B7A]">D</span>
                  <input type="text" value="org.apache.kafka.clients.consumer.UniformStickyAssignor" class="flex-1 text-xs bg-transparent outline-none text-[#172033]">
                </div>
              </div>

              <!-- Explanation Box -->
              <div class="p-3 bg-[#F6F8FB] rounded-lg border border-[#E3E8EF] text-xs space-y-1">
                <span class="font-semibold text-[#172033]">Explanation for Evaluator:</span>
                <p class="text-[#5F6B7A] text-[11px] leading-relaxed">
                  CooperativeStickyAssignor follows the cooperative rebalance protocol (KIP-429), reassigning only partitions that must move rather than revoking all partitions across the consumer group.
                </p>
              </div>

              <div class="pt-2 flex items-center justify-between border-t border-[#E3E8EF]">
                <span class="text-xs text-[#7B8798] font-mono">14 more MCQs configured in this section</span>
                <button onclick="alert('New MCQ draft created.')" class="h-8 px-3 rounded-lg border border-[#E3E8EF] hover:bg-[#F6F8FB] text-[#172033] text-xs font-medium transition">+ Add Next MCQ</button>
              </div>
            </div>

            <!-- SUBPANE 2: CODING CHALLENGE -->
            <div id="subpane-sec-coding" class="hidden space-y-4 pt-1">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-xs font-semibold text-[#172033]">Problem 1: Algorithmic Sandbox Challenge</h4>
                  <p class="text-[11px] text-[#5F6B7A]">Live multi-language code compilation with automated test case evaluation</p>
                </div>
                <span class="px-2 py-0.5 text-xs font-mono font-medium bg-[#FFFAEB] text-[#B54708] border border-[#FEDF89] rounded">40 Marks • Hard</span>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="md:col-span-2 space-y-1.5">
                  <label class="block text-xs font-medium text-[#172033]">Problem Title</label>
                  <input type="text" value="Design a High-Throughput Concurrent Task Scheduler with Exponential Backoff" class="w-full px-3 py-2 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none font-semibold text-[#172033]">
                </div>
                <div class="space-y-1.5">
                  <label class="block text-xs font-medium text-[#172033]">Allowed Languages</label>
                  <div class="text-[11px] font-mono p-2 bg-[#F6F8FB] rounded-lg border border-[#E3E8EF] text-[#172033] flex flex-wrap gap-1">
                    <span class="px-1.5 py-0.2 bg-white rounded border border-[#E3E8EF]">Java 21</span>
                    <span class="px-1.5 py-0.2 bg-white rounded border border-[#E3E8EF]">Python 3.12</span>
                    <span class="px-1.5 py-0.2 bg-white rounded border border-[#E3E8EF]">Go 1.22</span>
                    <span class="px-1.5 py-0.2 bg-white rounded border border-[#E3E8EF]">TypeScript</span>
                  </div>
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="block text-xs font-medium text-[#172033]">Problem Description & Constraints</label>
                <textarea rows="3" class="w-full p-3 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none font-mono text-[#172033] leading-relaxed">Implement class 'PriorityTaskScheduler' with methods: submitTask(id, priority, taskFn), pollNextTask(), and retryFailedTask(id). Must guarantee sub-millisecond thread safety under 32 concurrent worker threads without blocking high-priority queue starvation.</textarea>
              </div>

              <!-- Test Cases Suite -->
              <div class="space-y-2 pt-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-[#172033]">Test Cases Suite (Grading Criteria):</span>
                  <button onclick="addTestCaseRow()" class="text-xs font-medium text-[#1769D2] hover:underline flex items-center gap-1">+ Add Test Case</button>
                </div>

                <div class="overflow-x-auto rounded-lg border border-[#E3E8EF]">
                  <table class="w-full text-left text-xs">
                    <thead class="bg-[#F6F8FB] text-[10px] font-mono font-semibold text-[#5F6B7A] uppercase border-b border-[#E3E8EF]">
                      <tr>
                        <th class="p-2.5">Case #</th>
                        <th class="p-2.5">Standard Input</th>
                        <th class="p-2.5">Expected Output</th>
                        <th class="p-2.5">Weight</th>
                        <th class="p-2.5">Visibility</th>
                        <th class="p-2.5 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody id="testCaseRowsContainer" class="divide-y divide-[#E3E8EF] font-mono text-[11px]">
                      <tr class="hover:bg-[#F6F8FB]">
                        <td class="p-2.5 font-bold text-[#172033]">TC-01</td>
                        <td class="p-2.5 text-[#5F6B7A]">5 tasks: priorities [2, 10, 4, 10, 1]</td>
                        <td class="p-2.5 text-[#027A48] font-semibold">[10, 10, 4, 2, 1]</td>
                        <td class="p-2.5 text-[#172033]">10 Marks</td>
                        <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[9px] bg-[#F6F8FB] text-[#5F6B7A] border border-[#E3E8EF]">Public (Sample)</span></td>
                        <td class="p-2.5 text-right"><button class="text-[#7B8798] hover:text-[#172033]">Edit</button></td>
                      </tr>
                      <tr class="hover:bg-[#F6F8FB]">
                        <td class="p-2.5 font-bold text-[#172033]">TC-02</td>
                        <td class="p-2.5 text-[#5F6B7A]">Concurrent stress: 1,000 tasks across 16 threads</td>
                        <td class="p-2.5 text-[#027A48] font-semibold">1,000 processed, 0 dropped</td>
                        <td class="p-2.5 text-[#172033]">15 Marks</td>
                        <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[9px] bg-[#FFFAEB] text-[#B54708] border border-[#FEDF89]">Hidden (Stress)</span></td>
                        <td class="p-2.5 text-right"><button class="text-[#7B8798] hover:text-[#172033]">Edit</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- SUBPANE 3: ESSAY -->
            <div id="subpane-sec-essay" class="hidden space-y-4 pt-1">
              <div class="p-4 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF] text-xs space-y-2">
                <span class="font-semibold text-[#172033]">Section 3: Architectural Design & Trade-Off Analysis</span>
                <p class="text-[#5F6B7A] leading-relaxed">
                  Candidate provides structured technical essays evaluated by AI on architectural coherence, database sharding strategies, and CAP theorem trade-offs.
                </p>
                <div class="text-[11px] font-mono text-[#7B8798]">
                  2 Prompts Configured • 30 Total Marks • Manual / AI Rubric Scoring
                </div>
              </div>
            </div>

          </div>

          <!-- AI Question Studio Generator Bar -->
          <div class="bg-white p-5 rounded-lg border border-[#E3E8EF] shadow-xs space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-xs font-semibold text-[#172033] font-mono uppercase tracking-wider">AI Question Studio Generator</span>
                <span class="px-2 py-0.2 rounded text-[10px] font-mono bg-[#F9F5FF] text-[#6941C6] border border-[#E9D7FE] font-medium">Groq Llama-3</span>
              </div>
              <span class="text-xs text-[#7B8798]">Generate fresh scenario-based questions from topic or JD</span>
            </div>

            <div class="flex items-center gap-2">
              <input type="text" id="aiGenPromptInput" placeholder="E.g. Generate 3 questions on Spring Cloud Resilience4j Circuit Breakers & fallback patterns" class="flex-1 px-3.5 py-2 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] text-[#172033]">
              <button onclick="triggerAiQuestionGeneration()" class="h-9 px-4 rounded-lg bg-[#172033] hover:bg-black text-white text-xs font-medium shadow-xs transition flex items-center gap-2 shrink-0">
                <svg class="w-3.5 h-3.5 text-[#B2DDFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                ✨ Generate Questions
              </button>
            </div>
          </div>

          <!-- Tab Navigation Footer -->
          <div class="flex items-center justify-between bg-white p-4 rounded-lg border border-[#E3E8EF] shadow-xs">
            <button onclick="switchStudioTab('pipeline')" class="h-9 px-4 rounded-lg border border-[#E3E8EF] text-[#5F6B7A] text-xs font-medium hover:bg-[#F6F8FB] transition">← Back to Pipeline</button>
            <button onclick="switchStudioTab('resumes')" class="h-9 px-4 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium shadow-xs transition flex items-center gap-1.5">
              Next: Candidate Resumes & AI ATS Ingestion →
            </button>
          </div>

        </div>

        <!-- TAB 3: RESUME SCREENING & AI ATS -->
        <div id="studio-pane-resumes" class="studio-pane hidden space-y-6">
          
          <!-- Job Description Context -->
          <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-[#E3E8EF] pb-3">
              <div>
                <h3 class="text-xs font-semibold text-[#172033] uppercase tracking-wider font-mono">Target Job Description (ATS Semantic Anchor)</h3>
                <p class="text-xs text-[#5F6B7A] mt-0.5">Resumes uploaded below will be parsed and evaluated against this requisition anchor.</p>
              </div>
              <div class="flex items-center gap-2 text-xs font-mono text-[#5F6B7A]">
                <span class="px-2 py-0.5 bg-[#F6F8FB] border border-[#E3E8EF] rounded">Skills (40%)</span>
                <span class="px-2 py-0.5 bg-[#F6F8FB] border border-[#E3E8EF] rounded">Exp (30%)</span>
                <span class="px-2 py-0.5 bg-[#F6F8FB] border border-[#E3E8EF] rounded">Arch (20%)</span>
                <span class="px-2 py-0.5 bg-[#F6F8FB] border border-[#E3E8EF] rounded">Edu (10%)</span>
              </div>
            </div>

            <textarea rows="3" class="w-full p-3 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] font-mono text-[#172033] leading-relaxed">Role: Senior Java Microservices & Cloud Architect (5-8 Years). Mandatory Skills: Java 17/21, Spring Boot, Apache Kafka, Distributed Transactions (Saga), Kubernetes, AWS/Azure, Docker, Microservices Security, Redis. Experience designing high-volume reactive systems.</textarea>
          </div>

          <!-- Dropzone -->
          <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-[#E3E8EF] pb-3">
              <div>
                <h3 class="text-xs font-semibold text-[#172033] uppercase tracking-wider font-mono">Resume Upload & Parsing Chamber</h3>
                <p class="text-xs text-[#5F6B7A] mt-0.5">Upload individual candidate resumes or bulk zip archives for automatic OCR & AI profile extraction</p>
              </div>
              <button onclick="simulateBulkIngestion()" class="h-8 px-3 rounded-lg border border-[#E3E8EF] hover:bg-[#F6F8FB] text-[#172033] text-xs font-medium transition flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                ⚡ Ingest 4 Candidate Resumes
              </button>
            </div>

            <div class="border-2 border-dashed border-[#E3E8EF] hover:border-[#CDD5DF] bg-[#F6F8FB] rounded-lg p-8 text-center transition cursor-pointer">
              <div class="w-10 h-10 rounded-full bg-white border border-[#E3E8EF] shadow-xs mx-auto flex items-center justify-center text-[#5F6B7A] mb-2.5">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
                </svg>
              </div>
              <div class="text-xs font-semibold text-[#172033]">Drag and drop candidate resumes here, or click to browse</div>
              <div class="text-[11px] text-[#7B8798] mt-0.5">Supports PDF, DOCX, TXT, or ZIP archive (up to 50MB per file)</div>
            </div>

            <div class="p-3.5 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF] flex items-start gap-2.5">
              <input type="checkbox" id="check-resume-calibration" checked class="mt-0.5 accent-[#172033] w-4 h-4 cursor-pointer">
              <div>
                <label for="check-resume-calibration" class="text-xs font-semibold text-[#172033] cursor-pointer">
                  Enable Resume-Aware AI Question Calibration
                </label>
                <p class="text-[11px] text-[#5F6B7A] mt-0.5 leading-relaxed">
                  When enabled, Dwaani AI Interview and GradArena dynamically calibrate test questions to match each candidate's extracted projects, technologies, and skill gaps — eliminating generic questions.
                </p>
              </div>
            </div>
          </div>

          <!-- Parsed Candidates Table -->
          <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E3E8EF] pb-3">
              <div>
                <h3 class="text-xs font-semibold text-[#172033] uppercase tracking-wider font-mono">Ingested Candidates & ATS Scoring (4 Applicants)</h3>
                <p class="text-xs text-[#5F6B7A] mt-0.5">Semantic alignment rating and customized AI interview focus angles</p>
              </div>
              <button onclick="dispatchInvitesToAll()" class="h-8 px-3 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium shadow-xs transition flex items-center gap-1.5 self-start sm:self-auto">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Dispatch Magic Invites to All (4)
              </button>
            </div>

            <div class="overflow-x-auto rounded-lg border border-[#E3E8EF]">
              <table class="w-full text-left text-xs">
                <thead class="bg-[#F6F8FB] text-[10px] font-mono font-semibold text-[#5F6B7A] uppercase border-b border-[#E3E8EF]">
                  <tr>
                    <th class="p-3">Candidate</th>
                    <th class="p-3">Experience & Skills</th>
                    <th class="p-3">ATS Match %</th>
                    <th class="p-3">AI Dynamic Probing Angle</th>
                    <th class="p-3">Access Token</th>
                    <th class="p-3 text-right">Status / Action</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#E3E8EF] text-[#172033]">
                  <tr class="hover:bg-[#F6F8FB]">
                    <td class="p-3">
                      <div class="font-medium text-[#172033]">Aarav Mehta</div>
                      <div class="text-[11px] text-[#7B8798] font-mono">aarav_mehta_cv.pdf</div>
                    </td>
                    <td class="p-3">
                      <div class="text-xs font-medium text-[#172033]">6.2 Years • Senior Backend</div>
                      <div class="flex flex-wrap gap-1 mt-1 text-[10px] font-mono">
                        <span class="px-1.5 py-0.2 bg-[#F6F8FB] border border-[#E3E8EF] rounded">Java 21</span>
                        <span class="px-1.5 py-0.2 bg-[#F6F8FB] border border-[#E3E8EF] rounded">Kafka</span>
                        <span class="px-1.5 py-0.2 bg-[#F6F8FB] border border-[#E3E8EF] rounded">AWS</span>
                      </div>
                    </td>
                    <td class="p-3">
                      <div class="flex items-center gap-1.5 font-semibold text-emerald-700 font-mono">88% <span class="px-1.5 py-0.2 rounded text-[10px] bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">High Fit</span></div>
                    </td>
                    <td class="p-3 text-[11px] text-[#5F6B7A] max-w-xs leading-relaxed">
                      "Probe Saga compensation transactions & partition lag under Kafka 3.6."
                    </td>
                    <td class="p-3 font-mono text-[11px] text-[#7B8798]">c9a4-8f2e</td>
                    <td class="p-3 text-right">
                      <button onclick="inviteCandidate('Aarav Mehta', 'c9a4-8f2e')" class="h-7 px-2.5 rounded bg-[#172033] hover:bg-black text-white text-xs font-medium transition">Send Invite</button>
                    </td>
                  </tr>

                  <tr class="hover:bg-[#F6F8FB]">
                    <td class="p-3">
                      <div class="font-medium text-[#172033]">Priyanka Rao</div>
                      <div class="text-[11px] text-[#7B8798] font-mono">priyanka_rao_resume.docx</div>
                    </td>
                    <td class="p-3">
                      <div class="text-xs font-medium text-[#172033]">5.8 Years • Distributed Systems</div>
                      <div class="flex flex-wrap gap-1 mt-1 text-[10px] font-mono">
                        <span class="px-1.5 py-0.2 bg-[#F6F8FB] border border-[#E3E8EF] rounded">Go</span>
                        <span class="px-1.5 py-0.2 bg-[#F6F8FB] border border-[#E3E8EF] rounded">K8s</span>
                        <span class="px-1.5 py-0.2 bg-[#F6F8FB] border border-[#E3E8EF] rounded">gRPC</span>
                      </div>
                    </td>
                    <td class="p-3">
                      <div class="flex items-center gap-1.5 font-semibold text-emerald-700 font-mono">91% <span class="px-1.5 py-0.2 rounded text-[10px] bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Exceptional</span></div>
                    </td>
                    <td class="p-3 text-[11px] text-[#5F6B7A] max-w-xs leading-relaxed">
                      "Probe multi-region failover replication, Raft consensus, and gRPC streaming."
                    </td>
                    <td class="p-3 font-mono text-[11px] text-[#7B8798]">7b31-e01d</td>
                    <td class="p-3 text-right">
                      <span class="inline-flex items-center gap-1 text-[11px] font-medium text-[#027A48]">
                        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                        Invited
                      </span>
                    </td>
                  </tr>

                  <tr class="hover:bg-[#F6F8FB]">
                    <td class="p-3">
                      <div class="font-medium text-[#172033]">Vikramaditya Sen</div>
                      <div class="text-[11px] text-[#7B8798] font-mono">vikram_sen_profile.pdf</div>
                    </td>
                    <td class="p-3">
                      <div class="text-xs font-medium text-[#172033]">4.1 Years • Python & Microservices</div>
                      <div class="flex flex-wrap gap-1 mt-1 text-[10px] font-mono">
                        <span class="px-1.5 py-0.2 bg-[#F6F8FB] border border-[#E3E8EF] rounded">Python</span>
                        <span class="px-1.5 py-0.2 bg-[#F6F8FB] border border-[#E3E8EF] rounded">FastAPI</span>
                      </div>
                    </td>
                    <td class="p-3">
                      <div class="flex items-center gap-1.5 font-semibold text-amber-700 font-mono">64% <span class="px-1.5 py-0.2 rounded text-[10px] bg-[#FFFAEB] text-[#B54708] border border-[#FEDF89]">Borderline</span></div>
                    </td>
                    <td class="p-3 text-[11px] text-[#5F6B7A] max-w-xs leading-relaxed">
                      "Calibrate baseline microservices architecture & evaluate core Java proficiency."
                    </td>
                    <td class="p-3 font-mono text-[11px] text-[#7B8798]">4e29-9a1b</td>
                    <td class="p-3 text-right">
                      <button onclick="alert('Held in Recruiter Review queue.')" class="h-7 px-2.5 rounded border border-[#E3E8EF] text-[#5F6B7A] hover:bg-[#F6F8FB] text-xs font-medium">Hold</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Tab Navigation Footer -->
          <div class="flex items-center justify-between bg-white p-4 rounded-lg border border-[#E3E8EF] shadow-xs">
            <button onclick="switchStudioTab('builder')" class="h-9 px-4 rounded-lg border border-[#E3E8EF] text-[#5F6B7A] text-xs font-medium hover:bg-[#F6F8FB] transition">← Back to Test Builder</button>
            <button onclick="switchStudioTab('proctor')" class="h-9 px-4 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium shadow-xs transition flex items-center gap-1.5">
              Next: Proctoring & Exam Integrity →
            </button>
          </div>

        </div>

        <!-- TAB 4: PROCTORING & SECURITY -->
        <div id="studio-pane-proctor" class="studio-pane hidden space-y-6">
          <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-5">
            <div class="border-b border-[#E3E8EF] pb-3 flex items-center justify-between">
              <div>
                <h3 class="text-xs font-semibold text-[#172033] uppercase tracking-wider font-mono">Proctoring & Exam Security Architecture</h3>
                <p class="text-xs text-[#5F6B7A] mt-0.5">Hardware integrity checks, dual-camera mobile pairing, and automated malpractice prevention</p>
              </div>
              <span class="px-2.5 py-1 rounded text-xs font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">
                AI Shield Active
              </span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div class="p-4 rounded-lg border border-[#E3E8EF] bg-white space-y-2.5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded bg-[#172033] text-white flex items-center justify-center text-xs">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                    </div>
                    <div>
                      <h4 class="text-xs font-semibold text-[#172033]">Dual-Camera Mobile QR Pairing</h4>
                      <p class="text-[11px] text-[#5F6B7A]">Secondary phone stream capturing hands & room</p>
                    </div>
                  </div>
                  <input type="checkbox" checked class="accent-[#172033] w-4 h-4">
                </div>
                <p class="text-[11px] text-[#5F6B7A] leading-relaxed">
                  Candidate scans a secure dynamic QR code on smartphone. Secondary WebRTC feed continuously verifies keyboard, desk, and room boundaries.
                </p>
              </div>

              <div class="p-4 rounded-lg border border-[#E3E8EF] bg-white space-y-2.5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded bg-[#172033] text-white flex items-center justify-center text-xs">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                    </div>
                    <div>
                      <h4 class="text-xs font-semibold text-[#172033]">Tab-Switch & Fullscreen Lock</h4>
                      <p class="text-[11px] text-[#5F6B7A]">Listens to document.visibilitychange events</p>
                    </div>
                  </div>
                  <input type="checkbox" checked class="accent-[#172033] w-4 h-4">
                </div>
                <div class="flex items-center justify-between text-xs">
                  <span class="text-[#5F6B7A]">Disqualification Threshold:</span>
                  <select class="p-1 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded font-mono text-[#172033]">
                    <option selected>2 Warnings (Max Strict)</option>
                    <option>3 Warnings (Standard)</option>
                  </select>
                </div>
              </div>

              <div class="p-4 rounded-lg border border-[#E3E8EF] bg-white space-y-2.5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded bg-[#172033] text-white flex items-center justify-center text-xs">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
                    </div>
                    <div>
                      <h4 class="text-xs font-semibold text-[#172033]">Audio Noise Floor & Speech Isolation</h4>
                      <p class="text-[11px] text-[#5F6B7A]">Detects secondary whisperers or prompting</p>
                    </div>
                  </div>
                  <input type="checkbox" checked class="accent-[#172033] w-4 h-4">
                </div>
                <p class="text-[11px] text-[#5F6B7A] leading-relaxed">
                  Real-time Web Audio API tracks ambient noise floor. Flags secondary human voices, dictation, and background prompting during interviews.
                </p>
              </div>

              <div class="p-4 rounded-lg border border-[#E3E8EF] bg-white space-y-2.5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 rounded bg-rose-700 text-white flex items-center justify-center text-xs">
                      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
                    </div>
                    <div>
                      <h4 class="text-xs font-semibold text-[#172033]">Malpractice Immediate Abort</h4>
                      <p class="text-[11px] text-[#5F6B7A]">Auto-terminates session on critical breach</p>
                    </div>
                  </div>
                  <input type="checkbox" checked class="accent-rose-600 w-4 h-4">
                </div>
                <p class="text-[11px] text-[#5F6B7A] leading-relaxed">
                  If unauthorized devices, multiple faces, or persistent tab-switching are detected, the assessment locks immediately and awards 0 marks.
                </p>
              </div>

            </div>
          </div>

          <div class="flex items-center justify-between bg-white p-4 rounded-lg border border-[#E3E8EF] shadow-xs">
            <button onclick="switchStudioTab('resumes')" class="h-9 px-4 rounded-lg border border-[#E3E8EF] text-[#5F6B7A] text-xs font-medium hover:bg-[#F6F8FB] transition">← Back to Resumes</button>
            <button onclick="switchStudioTab('blueprint')" class="h-9 px-4 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium shadow-xs transition flex items-center gap-1.5">
              Next: Review Blueprint & Launch Campaign →
            </button>
          </div>
        </div>

        <!-- TAB 5: BLUEPRINT & DEPLOY -->
        <div id="studio-pane-blueprint" class="studio-pane hidden space-y-6">
          <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-5">
            <div class="border-b border-[#E3E8EF] pb-4 flex items-center justify-between">
              <div>
                <h3 class="text-sm font-semibold text-[#172033]">Campaign Blueprint & Deployment Summary</h3>
                <p class="text-xs text-[#5F6B7A] mt-0.5">End-to-end audit summary of the configured stages, pass criteria, and candidate cohort</p>
              </div>
              <span class="px-2.5 py-1 rounded text-xs font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">
                Ready for Production Launch
              </span>
            </div>

            <div class="p-4 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF] space-y-3">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-[10px] font-mono text-[#7B8798] uppercase">Workflow Blueprint</span>
                  <div id="summaryWorkflowTitle" class="text-sm font-semibold text-[#172033] mt-0.5">Senior Java & Distributed Cloud Architect</div>
                </div>
                <span class="px-2.5 py-1 rounded text-xs font-medium font-mono bg-white border border-[#E3E8EF] text-[#172033]">
                  2 Sequential Stages
                </span>
              </div>

              <div id="summaryStepsList" class="space-y-2">
                <!-- Dynamically populated via JS -->
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              <div>
                <label class="block text-xs font-medium text-[#172033] mb-1">Supervising Test Creator</label>
                <select class="w-full px-3 py-2 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none text-[#172033]">
                  <option selected>K. Prashanti (Senior Assessment Specialist)</option>
                  <option>P. Hemachandra (Technical Question Author)</option>
                </select>
              </div>
              <div>
                <label class="block text-xs font-medium text-[#172033] mb-1">Link Expiration (Candidate Token)</label>
                <input type="date" value="2026-11-30" class="w-full px-3 py-2 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none font-mono text-[#172033]">
              </div>
              <div>
                <label class="block text-xs font-medium text-[#172033] mb-1">Staged Candidate Cohort</label>
                <div class="px-3 py-2 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg font-mono text-[#172033] flex items-center justify-between">
                  <span>4 Resumes Processed</span>
                  <span class="text-emerald-700 font-bold">100% Calibrated</span>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-[#E3E8EF]">
              <button onclick="switchStudioTab('proctor')" class="h-9 px-4 rounded-lg border border-[#E3E8EF] text-[#5F6B7A] text-xs font-medium hover:bg-[#F6F8FB] transition">← Back to Proctoring</button>
              
              <div class="flex items-center gap-2.5">
                <button onclick="alert('Workflow saved as Draft in Tests Library.')" class="h-9 px-4 rounded-lg border border-[#E3E8EF] text-[#172033] text-xs font-medium hover:bg-[#F6F8FB] transition">Save Draft</button>
                <button onclick="saveAndActivateWorkflow()" class="h-9 px-5 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium shadow-xs transition flex items-center gap-2">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Confirm & Launch Assessment Campaign
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 5: TESTS LIBRARY                                      -->
      <!-- ============================================================ -->
      <div id="screen-tests" class="screen-view hidden space-y-6">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-semibold text-[#172033]">Tests Library</h2>
            <p class="text-xs text-[#5F6B7A] mt-0.5">Centralized repository of published, pending review, and draft assessment blueprints</p>
          </div>
          <button onclick="switchScreen('test-create')" class="h-9 px-4 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium shadow-xs transition flex items-center gap-2 self-start sm:self-auto">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Create Assessment
          </button>
        </div>

        <!-- Filter Ribbon -->
        <div class="bg-white p-4 rounded-lg border border-[#E3E8EF] shadow-xs flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2.5 flex-1 min-w-[260px]">
            <input type="text" placeholder="Search by test ID, role, or hiring client..." class="w-full max-w-sm px-3 py-1.5 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] text-[#172033]">
            <select class="px-3 py-1.5 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg text-[#172033] outline-none">
              <option>All Statuses</option>
              <option>Published (24)</option>
              <option>Pending Review (4)</option>
              <option>Draft (4)</option>
            </select>
          </div>
          <span class="text-xs text-[#7B8798]">32 Total Assessments</span>
        </div>

        <!-- Tests Table -->
        <div class="bg-white rounded-lg border border-[#E3E8EF] shadow-xs overflow-hidden">
          <table class="w-full text-left text-xs">
            <thead class="bg-[#F6F8FB] text-[11px] font-semibold text-[#5F6B7A] uppercase tracking-wider border-b border-[#E3E8EF]">
              <tr>
                <th class="p-3.5">Test ID & Title</th>
                <th class="p-3.5">Hiring Client</th>
                <th class="p-3.5">Assessment Stages</th>
                <th class="p-3.5">Structure & Duration</th>
                <th class="p-3.5">Supervising Creator</th>
                <th class="p-3.5">Status</th>
                <th class="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E3E8EF] text-[#172033]">
              
              <tr class="hover:bg-[#F6F8FB] transition-colors">
                <td class="p-3.5">
                  <div class="font-medium text-[#172033]">TST-8842: Senior Java Microservices Architect</div>
                  <div class="text-[11px] text-[#7B8798] font-mono">Last modified 2h ago</div>
                </td>
                <td class="p-3.5 text-[#5F6B7A]">Capgemini GCC - Hyderabad</td>
                <td class="p-3.5">
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#EFF6FF] text-[#1769D2]">Dwaani AI + Coding</span>
                </td>
                <td class="p-3.5 font-mono tabular-nums">15 MCQ + 1 Coding (60m)</td>
                <td class="p-3.5">K. Prashanti</td>
                <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Published</span></td>
                <td class="p-3.5 text-right space-x-2">
                  <button onclick="switchScreen('test-detail')" class="text-xs font-medium text-[#1769D2] hover:underline">Blueprint</button>
                  <button onclick="alert('Assign candidates modal opened.')" class="text-xs text-[#5F6B7A] hover:text-[#172033]">Assign</button>
                </td>
              </tr>

              <tr class="hover:bg-[#F6F8FB] transition-colors">
                <td class="p-3.5">
                  <div class="font-medium text-[#172033]">TST-8841: Lead Python Backend Architect</div>
                  <div class="text-[11px] text-[#7B8798] font-mono">Last modified Yesterday</div>
                </td>
                <td class="p-3.5 text-[#5F6B7A]">Invesco Enterprise Hub</td>
                <td class="p-3.5">
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#EFF6FF] text-[#1769D2]">GradArena Proctored</span>
                </td>
                <td class="p-3.5 font-mono tabular-nums">15 MCQ + 1 Coding (60m)</td>
                <td class="p-3.5">K. Prashanti</td>
                <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Published</span></td>
                <td class="p-3.5 text-right space-x-2">
                  <button onclick="switchScreen('test-detail')" class="text-xs font-medium text-[#1769D2] hover:underline">Blueprint</button>
                  <button onclick="alert('Assign candidates modal opened.')" class="text-xs text-[#5F6B7A] hover:text-[#172033]">Assign</button>
                </td>
              </tr>

              <tr class="hover:bg-[#F6F8FB] transition-colors">
                <td class="p-3.5">
                  <div class="font-medium text-[#172033]">TST-8854: Data Science & LLM Pipeline Specialist</div>
                  <div class="text-[11px] text-[#7B8798] font-mono">Submitted 1h ago</div>
                </td>
                <td class="p-3.5 text-[#5F6B7A]">Deloitte USI Tech</td>
                <td class="p-3.5">
                  <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#F9F5FF] text-[#6941C6] border border-[#E9D7FE]">Dwaani Voice Only</span>
                </td>
                <td class="p-3.5 font-mono tabular-nums">5 Voice Scenarios (30m)</td>
                <td class="p-3.5">Ananya Sharma</td>
                <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#FFFAEB] text-[#B54708] border border-[#FEDF89]">Pending Review</span></td>
                <td class="p-3.5 text-right space-x-2">
                  <button onclick="switchScreen('reviews')" class="text-xs font-medium text-[#1769D2] hover:underline">Review Now</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 6: TEST BLUEPRINT & ANALYTICS                         -->
      <!-- ============================================================ -->
      <div id="screen-test-detail" class="screen-view hidden space-y-6">
        
        <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2.5">
              <span class="px-2 py-0.5 rounded text-xs font-mono font-medium bg-[#F6F8FB] text-[#5F6B7A] border border-[#E3E8EF]">TST-8842</span>
              <h2 class="text-lg font-semibold text-[#172033]">Senior Java Microservices Architect</h2>
              <span class="px-2 py-0.5 rounded text-xs font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Published (Live)</span>
            </div>
            <p class="text-xs text-[#5F6B7A] mt-1">Capgemini GCC - Hyderabad • Platform Engineering Practice • Supervising Author: K. Prashanti</p>
          </div>

          <div class="flex items-center gap-2.5">
            <button onclick="switchScreen('tests')" class="h-9 px-3.5 rounded-lg border border-[#E3E8EF] hover:bg-[#F6F8FB] text-xs font-medium text-[#5F6B7A] transition">
              ← Back to Tests
            </button>
            <button onclick="alert('Candidate assignment link generated.')" class="h-9 px-4 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium transition shadow-xs">
              Assign Candidates
            </button>
          </div>
        </div>

        <!-- 4 Test Performance Metrics -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Candidates Evaluated</span>
            <div class="text-xl font-semibold text-[#172033] mt-1 tabular-nums">124 Tested</div>
          </div>
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Average Score</span>
            <div class="text-xl font-semibold text-[#172033] mt-1 tabular-nums">71.8%</div>
          </div>
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Pass Conversion</span>
            <div class="text-xl font-semibold text-emerald-700 mt-1 tabular-nums">48.0%</div>
          </div>
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Integrity Flags</span>
            <div class="text-xl font-semibold text-[#172033] mt-1 tabular-nums">0 Critical</div>
          </div>
        </div>

        <!-- Blueprint Specification Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-3">
            <h3 class="text-xs font-semibold text-[#172033] uppercase font-mono tracking-wider">Stage 1: Dwaani AI Voice Interview</h3>
            <div class="text-xs text-[#5F6B7A] space-y-1.5">
              <div>Format: <span class="font-medium text-[#172033]">Adaptive Conversational Voice Screening</span></div>
              <div>Question Count: <span class="font-medium text-[#172033]">4 Deep Architecture Scenarios</span></div>
              <div>Duration: <span class="font-medium text-[#172033]">25 Minutes</span></div>
              <div>Passing Threshold: <span class="font-semibold text-emerald-700 font-mono">≥ 70%</span></div>
              <div>Failure Dropoff: <span class="font-medium text-rose-700">Stop Workflow & Send Regret</span></div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs space-y-3">
            <h3 class="text-xs font-semibold text-[#172033] uppercase font-mono tracking-wider">Stage 2: GradArena Proctored Assessment</h3>
            <div class="text-xs text-[#5F6B7A] space-y-1.5">
              <div>Format: <span class="font-medium text-[#172033]">MCQs & Algorithmic Code Compilation</span></div>
              <div>Sections: <span class="font-medium text-[#172033]">15 MCQ (30 Marks) + 1 Coding Sandbox (40 Marks)</span></div>
              <div>Duration: <span class="font-medium text-[#172033]">60 Minutes</span></div>
              <div>Passing Threshold: <span class="font-semibold text-emerald-700 font-mono">≥ 60%</span></div>
              <div>Proctor Shield: <span class="font-medium text-[#172033]">Dual-Camera QR Pairing Enforced</span></div>
            </div>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 7: PENDING REVIEWS & APPROVAL GATES                    -->
      <!-- ============================================================ -->
      <div id="screen-reviews" class="screen-view hidden space-y-6">
        
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-semibold text-[#172033]">Pending Reviews & Approvals</h2>
            <p class="text-xs text-[#5F6B7A] mt-0.5">Author submissions requiring managerial verification and publication sign-off</p>
          </div>
          <span class="px-2.5 py-1 rounded text-xs font-medium bg-[#FFFAEB] text-[#B54708] border border-[#FEDF89]">
            4 Tests Pending Authorization
          </span>
        </div>

        <!-- Active Review Work Area -->
        <div class="bg-white rounded-lg border border-[#E3E8EF] shadow-xs p-6 space-y-6">
          <div class="border-b border-[#E3E8EF] pb-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded text-xs font-mono font-medium bg-[#F6F8FB] text-[#5F6B7A] border border-[#E3E8EF]">TST-8842</span>
                <h3 class="text-base font-semibold text-[#172033]">Senior Java Microservices Architect</h3>
              </div>
              <div class="text-xs text-[#5F6B7A] mt-0.5">Submitted by <span class="font-medium text-[#172033]">K. Prashanti</span> • 12 mins ago for Capgemini GCC Requisition</div>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="requestChangesReview('TST-8842')" class="h-9 px-3.5 rounded-lg border border-[#E3E8EF] hover:bg-[#F6F8FB] text-xs font-medium text-[#5F6B7A] transition">
                Request Changes
              </button>
              <button onclick="approveReview('TST-8842')" class="h-9 px-4 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium shadow-xs transition flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Approve & Publish
              </button>
            </div>
          </div>

          <!-- Diff Inspection Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div class="space-y-3">
              <h4 class="text-xs font-semibold text-[#172033] uppercase font-mono tracking-wider">Test Section & Content Breakdown</h4>
              <div class="p-3.5 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF] space-y-2 text-xs">
                <div class="font-medium text-[#172033]">Section 1: 15 Architecture MCQs (30 Marks)</div>
                <div class="text-[11px] text-[#5F6B7A]">Covers Kafka partitions, thread pools, and distributed Saga patterns.</div>
                <div class="font-medium text-[#172033] pt-2">Section 2: Concurrent Task Queue Coding (40 Marks)</div>
                <div class="text-[11px] text-[#5F6B7A]">Multi-language compiler test with 3 test cases (1 public sample, 2 hidden stress).</div>
              </div>
            </div>

            <div class="space-y-3">
              <h4 class="text-xs font-semibold text-[#172033] uppercase font-mono tracking-wider">AI Scoring Rubrics & Integrity Settings</h4>
              <div class="p-3.5 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF] space-y-2 text-xs">
                <div class="flex justify-between">
                  <span class="text-[#5F6B7A]">Technical Accuracy Weight:</span>
                  <span class="font-semibold text-[#172033] font-mono">40%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-[#5F6B7A]">System Architecture Relevance:</span>
                  <span class="font-semibold text-[#172033] font-mono">40%</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-[#5F6B7A]">Communication Clarity:</span>
                  <span class="font-semibold text-[#172033] font-mono">20%</span>
                </div>
                <div class="flex justify-between border-t border-[#E3E8EF] pt-2">
                  <span class="text-[#5F6B7A]">Proctoring Enforcement:</span>
                  <span class="font-medium text-[#027A48]">Dual-Cam Mobile QR Pairing</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Manager Review Feedback Box -->
          <div class="space-y-1.5 pt-2">
            <label class="block text-xs font-medium text-[#172033]">Manager Sign-Off Feedback / Revision Instructions</label>
            <textarea id="reviewCommentText" rows="2" placeholder="Optional notes to the author regarding test quality or adjustments..." class="w-full p-3 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] text-[#172033]"></textarea>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 8: CANDIDATES TALENT POOL                             -->
      <!-- ============================================================ -->
      <div id="screen-candidates" class="screen-view hidden space-y-6">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-semibold text-[#172033]">Candidates Talent Pool</h2>
            <p class="text-xs text-[#5F6B7A] mt-0.5">Comprehensive audit ledger of candidate 3D performance and proctor integrity</p>
          </div>
          <button onclick="alert('Exporting full candidate dataset as CSV.')" class="h-9 px-4 rounded-lg border border-[#E3E8EF] hover:bg-[#F6F8FB] text-[#172033] text-xs font-medium transition flex items-center gap-1.5 self-start sm:self-auto">
            <svg class="w-3.5 h-3.5 text-[#5F6B7A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            Export CSV
          </button>
        </div>

        <!-- Filter Ribbon -->
        <div class="bg-white p-4 rounded-lg border border-[#E3E8EF] shadow-xs flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2.5 flex-1 min-w-[260px]">
            <input type="text" placeholder="Search candidate, email, ID..." class="w-full max-w-sm px-3 py-1.5 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] text-[#172033]">
            <select class="px-3 py-1.5 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg text-[#172033] outline-none">
              <option>All Clients</option>
              <option>Capgemini GCC</option>
              <option>Invesco Enterprise</option>
              <option>Deloitte USI</option>
            </select>
            <select class="px-3 py-1.5 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg text-[#172033] outline-none">
              <option>All Statuses</option>
              <option>Recommended (78)</option>
              <option>Under Review (36)</option>
            </select>
          </div>
          <span class="text-xs text-[#7B8798]">284 Total Candidates</span>
        </div>

        <!-- Candidate Directory Table -->
        <div class="bg-white rounded-lg border border-[#E3E8EF] shadow-xs overflow-hidden">
          <table class="w-full text-left text-xs">
            <thead class="bg-[#F6F8FB] text-[11px] font-semibold text-[#5F6B7A] uppercase tracking-wider border-b border-[#E3E8EF]">
              <tr>
                <th class="p-3.5">Candidate Name</th>
                <th class="p-3.5">Target Requisition / Test</th>
                <th class="p-3.5">3D AI Score</th>
                <th class="p-3.5">Proctor Integrity</th>
                <th class="p-3.5">Stage Completed</th>
                <th class="p-3.5">Status</th>
                <th class="p-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#E3E8EF] text-[#172033]">
              
              <tr class="hover:bg-[#F6F8FB] transition-colors cursor-pointer" onclick="openDossier('S. Siddharth Rao')">
                <td class="p-3.5">
                  <div class="font-medium text-[#172033]">S. Siddharth Rao</div>
                  <div class="text-[11px] text-[#7B8798]">siddharth.rao@gmail.com</div>
                </td>
                <td class="p-3.5 text-[#5F6B7A]">Lead Python Backend (Invesco GCC)</td>
                <td class="p-3.5 font-semibold text-emerald-700 font-mono tabular-nums">88.4% Composite</td>
                <td class="p-3.5">
                  <span class="inline-flex items-center gap-1 text-[11px] font-medium text-[#027A48]">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Dual-Cam (0 Flags)
                  </span>
                </td>
                <td class="p-3.5">Stage 2 (Coding Sandbox)</td>
                <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Recommended</span></td>
                <td class="p-3.5 text-right"><button class="text-xs font-medium text-[#1769D2] hover:underline">View Dossier →</button></td>
              </tr>

              <tr class="hover:bg-[#F6F8FB] transition-colors cursor-pointer" onclick="openDossier('Pooja Varma')">
                <td class="p-3.5">
                  <div class="font-medium text-[#172033]">Pooja Varma</div>
                  <div class="text-[11px] text-[#7B8798]">pooja.varma@outlook.com</div>
                </td>
                <td class="p-3.5 text-[#5F6B7A]">Senior Fullstack (Capgemini GCC)</td>
                <td class="p-3.5 font-semibold text-emerald-700 font-mono tabular-nums">81.5% Composite</td>
                <td class="p-3.5">
                  <span class="inline-flex items-center gap-1 text-[11px] font-medium text-[#027A48]">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                    Dual-Cam (0 Flags)
                  </span>
                </td>
                <td class="p-3.5">Stage 2 (Coding Sandbox)</td>
                <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Recommended</span></td>
                <td class="p-3.5 text-right"><button class="text-xs font-medium text-[#1769D2] hover:underline">View Dossier →</button></td>
              </tr>

              <tr class="hover:bg-[#F6F8FB] transition-colors cursor-pointer" onclick="openDossier('Rohan Kulkarni')">
                <td class="p-3.5">
                  <div class="font-medium text-[#172033]">Rohan Kulkarni</div>
                  <div class="text-[11px] text-[#7B8798]">rohan.kulkarni@gmail.com</div>
                </td>
                <td class="p-3.5 text-[#5F6B7A]">DevOps Kubernetes (Deloitte USI)</td>
                <td class="p-3.5 font-semibold text-amber-700 font-mono tabular-nums">64.2% Composite</td>
                <td class="p-3.5">
                  <span class="inline-flex items-center gap-1 text-[11px] font-medium text-amber-700">
                    <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    2 Flags (Audio Noise)
                  </span>
                </td>
                <td class="p-3.5">Stage 1 (Voice Screen)</td>
                <td class="p-3.5"><span class="px-2 py-0.5 rounded text-[11px] font-medium bg-[#FFFAEB] text-[#B54708] border border-[#FEDF89]">Under Review</span></td>
                <td class="p-3.5 text-right"><button class="text-xs font-medium text-[#1769D2] hover:underline">View Dossier →</button></td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 9: CANDIDATE EVALUATION DOSSIER                       -->
      <!-- ============================================================ -->
      <div id="screen-candidate-detail" class="screen-view hidden space-y-6">
        
        <!-- Candidate Identity Header -->
        <div class="bg-white p-6 rounded-lg border border-[#E3E8EF] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-full bg-[#172033] text-white font-semibold text-lg flex items-center justify-center shrink-0">
              SR
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h2 id="dossierCandidateName" class="text-lg font-semibold text-[#172033]">S. Siddharth Rao</h2>
                <span class="px-2 py-0.5 rounded text-xs font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Recommended for Offer</span>
              </div>
              <p class="text-xs text-[#5F6B7A] mt-0.5">Assigned: Lead Python Backend Architect (Invesco GCC) • Token: c9a4-8f2e</p>
              <div class="text-[11px] text-[#7B8798] mt-1">siddharth.rao@gmail.com • Evaluated on Oct 14, 2026</div>
            </div>
          </div>

          <div class="flex items-center gap-2.5">
            <button onclick="switchScreen('candidates')" class="h-9 px-3.5 rounded-lg border border-[#E3E8EF] hover:bg-[#F6F8FB] text-xs font-medium text-[#5F6B7A] transition">
              ← Back to Candidates
            </button>
            <button onclick="alert('Exporting Candidate Evaluation Dossier as PDF...')" class="h-9 px-4 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium transition shadow-xs">
              Export PDF Dossier
            </button>
          </div>
        </div>

        <!-- 3D Competency Radar & Breakdown -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Composite 3D Score</span>
            <div class="text-2xl font-semibold text-emerald-700 mt-1 font-mono tabular-nums">88.4%</div>
            <span class="text-[11px] text-[#7B8798]">Rank #2 of 48 tested</span>
          </div>
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Domain Relevance</span>
            <div class="text-2xl font-semibold text-[#172033] mt-1 font-mono tabular-nums">92%</div>
            <span class="text-[11px] text-[#7B8798]">High architectural alignment</span>
          </div>
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Technical Accuracy</span>
            <div class="text-2xl font-semibold text-[#172033] mt-1 font-mono tabular-nums">88%</div>
            <span class="text-[11px] text-[#7B8798]">Clean concurrency principles</span>
          </div>
          <div class="p-4 bg-white rounded-lg border border-[#E3E8EF] shadow-xs">
            <span class="text-xs text-[#5F6B7A]">Communication Clarity</span>
            <div class="text-2xl font-semibold text-[#172033] mt-1 font-mono tabular-nums">85%</div>
            <span class="text-[11px] text-[#7B8798]">Structured articulation</span>
          </div>
        </div>

        <!-- Dossier Subsections (Tabs) -->
        <div class="bg-white rounded-lg border border-[#E3E8EF] shadow-xs p-6 space-y-5">
          <div class="flex items-center gap-2 border-b border-[#E3E8EF] pb-3">
            <button class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#172033] text-white">
              Executive AI Synthesis
            </button>
            <button class="px-3 py-1.5 rounded-lg text-xs font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB]">
              Question-by-Question Evaluation (4)
            </button>
            <button class="px-3 py-1.5 rounded-lg text-xs font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB]">
              Proctoring Forensic Ledger (0 Flags)
            </button>
          </div>

          <div class="space-y-4 text-xs">
            <div class="p-4 rounded-lg bg-[#F6F8FB] border border-[#E3E8EF] space-y-2">
              <span class="font-semibold text-[#172033]">Evaluator Executive Summary:</span>
              <p class="text-[#5F6B7A] leading-relaxed">
                Candidate demonstrated exemplary depth across distributed systems, explaining transaction rollback in saga choreographies without hesitation. Code sandbox solution achieved 100% test case pass rate with O(log N) priority queue insertion.
              </p>
            </div>

            <div class="p-4 rounded-lg border border-[#E3E8EF] space-y-2">
              <span class="font-semibold text-[#172033]">Proctoring & Integrity Audit:</span>
              <div class="text-[#5F6B7A] leading-relaxed">
                Dual-Camera WebRTC recording active for 48m 12s. Zero tab-switch interruptions registered. Audio noise floor remained below 32dB with zero secondary voice incidents.
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 10: LIVE AI SCREENING HUB                             -->
      <!-- ============================================================ -->
      <div id="screen-live" class="screen-view hidden space-y-6">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-semibold text-[#172033]">Live AI Screening Hub</h2>
            <p class="text-xs text-[#5F6B7A] mt-0.5">Real-time command center monitoring active candidate interview chambers</p>
          </div>
          <span class="px-3 py-1 rounded text-xs font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6] flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 live-dot"></span>
            4 Active Monitoring Chambers
          </span>
        </div>

        <!-- 4 Live Session Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <!-- Chamber 1 -->
          <div class="bg-white p-5 rounded-lg border border-[#E3E8EF] shadow-xs space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-xs font-semibold text-[#172033]">Ananya Sharma</span>
                <span class="text-[11px] text-[#7B8798] block">Cloud Data Architect • Deloitte USI</span>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Q3 of 5 • 14:22</span>
            </div>
            <div class="h-32 bg-[#F6F8FB] rounded-lg border border-[#E3E8EF] flex items-center justify-center text-xs text-[#7B8798] flex-col gap-1">
              <svg class="w-6 h-6 text-[#7B8798]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
              <span>Dual-Cam Feed Synchronized (30 FPS)</span>
            </div>
            <div class="flex items-center justify-between text-xs pt-1">
              <span class="text-emerald-700 font-medium">0 Integrity Flags</span>
              <button onclick="alert('Connected to live chamber.')" class="h-7 px-3 text-xs bg-[#1769D2] hover:bg-[#1256B0] text-white rounded transition">Monitor Feed</button>
            </div>
          </div>

          <!-- Chamber 2 -->
          <div class="bg-white p-5 rounded-lg border border-[#E3E8EF] shadow-xs space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-xs font-semibold text-[#172033]">Karan Verma</span>
                <span class="text-[11px] text-[#7B8798] block">Senior Java Lead • Capgemini GCC</span>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Q2 of 4 • 08:45</span>
            </div>
            <div class="h-32 bg-[#F6F8FB] rounded-lg border border-[#E3E8EF] flex items-center justify-center text-xs text-[#7B8798] flex-col gap-1">
              <svg class="w-6 h-6 text-[#7B8798]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
              <span>Dual-Cam Feed Synchronized (30 FPS)</span>
            </div>
            <div class="flex items-center justify-between text-xs pt-1">
              <span class="text-emerald-700 font-medium">0 Integrity Flags</span>
              <button onclick="alert('Connected to live chamber.')" class="h-7 px-3 text-xs bg-[#1769D2] hover:bg-[#1256B0] text-white rounded transition">Monitor Feed</button>
            </div>
          </div>

          <!-- Chamber 3 (Warning) -->
          <div class="bg-white p-5 rounded-lg border border-[#FEDF89] shadow-xs space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-xs font-semibold text-[#172033]">Rohan Kulkarni</span>
                <span class="text-[11px] text-[#7B8798] block">DevOps Kubernetes • Deloitte USI</span>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#FFFAEB] text-[#B54708] border border-[#FEDF89]">Q4 of 5 • 22:10</span>
            </div>
            <div class="h-32 bg-[#FFFAEB] rounded-lg border border-[#FEDF89] flex items-center justify-center text-xs text-amber-800 flex-col gap-1">
              <svg class="w-6 h-6 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              <span>Elevated Noise Floor (2 Warning Flags)</span>
            </div>
            <div class="flex items-center justify-between text-xs pt-1">
              <span class="text-amber-700 font-medium">Secondary Speech Detected</span>
              <button onclick="alert('Intervention warning sent to candidate.')" class="h-7 px-3 text-xs bg-amber-600 hover:bg-amber-700 text-white rounded transition">Audit / Warn</button>
            </div>
          </div>

          <!-- Chamber 4 -->
          <div class="bg-white p-5 rounded-lg border border-[#E3E8EF] shadow-xs space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-xs font-semibold text-[#172033]">Pooja Varma</span>
                <span class="text-[11px] text-[#7B8798] block">Fullstack Engineer • Capgemini GCC</span>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#ECFDF3] text-[#027A48] border border-[#ABEFC6]">Coding Task • 34:15</span>
            </div>
            <div class="h-32 bg-[#F6F8FB] rounded-lg border border-[#E3E8EF] flex items-center justify-center text-xs text-[#7B8798] flex-col gap-1">
              <svg class="w-6 h-6 text-[#7B8798]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
              <span>Live Compiler Sandbox Active</span>
            </div>
            <div class="flex items-center justify-between text-xs pt-1">
              <span class="text-emerald-700 font-medium">0 Integrity Flags</span>
              <button onclick="alert('Connected to live chamber.')" class="h-7 px-3 text-xs bg-[#1769D2] hover:bg-[#1256B0] text-white rounded transition">Monitor Feed</button>
            </div>
          </div>

        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 11: MESSAGE HUB                                       -->
      <!-- ============================================================ -->
      <div id="screen-chat" class="screen-view hidden space-y-6">
        
        <div class="bg-white rounded-lg border border-[#E3E8EF] shadow-xs flex flex-col md:flex-row h-[700px] overflow-hidden">
          
          <!-- Conversations List (Left Pane) -->
          <div class="w-full md:w-80 border-r border-[#E3E8EF] flex flex-col">
            <div class="p-4 border-b border-[#E3E8EF] space-y-3">
              <h3 class="text-sm font-semibold text-[#172033]">Message Hub</h3>
              <input type="text" placeholder="Search conversations..." class="w-full px-3 py-1.5 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none text-[#172033]">
            </div>

            <div class="flex-1 overflow-y-auto divide-y divide-[#E3E8EF]">
              <div class="p-3.5 bg-[#EFF6FF] cursor-pointer space-y-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-[#172033]">K. Prashanti</span>
                  <span class="text-[10px] text-[#7B8798]">12m ago</span>
                </div>
                <div class="text-[11px] text-[#5F6B7A] truncate">I updated the Kafka test cases as discussed in review...</div>
              </div>

              <div class="p-3.5 hover:bg-[#F6F8FB] cursor-pointer space-y-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-[#172033]">P. Hemachandra</span>
                  <span class="text-[10px] text-[#7B8798]">1h ago</span>
                </div>
                <div class="text-[11px] text-[#5F6B7A] truncate">Draft TST-8849 is ready for your review.</div>
              </div>

              <div class="p-3.5 hover:bg-[#F6F8FB] cursor-pointer space-y-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-semibold text-[#172033]">Ananya Sharma</span>
                  <span class="text-[10px] text-[#7B8798]">Yesterday</span>
                </div>
                <div class="text-[11px] text-[#5F6B7A] truncate">Can we increase the timeout for the Spark problem?</div>
              </div>
            </div>
          </div>

          <!-- Active Conversation Thread (Right Pane) -->
          <div class="flex-1 flex flex-col justify-between">
            <div class="p-4 border-b border-[#E3E8EF] flex items-center justify-between">
              <div>
                <h4 class="text-xs font-semibold text-[#172033]">K. Prashanti</h4>
                <span class="text-[11px] text-[#7B8798]">Senior Assessment Specialist • Engineering Practice</span>
              </div>
              <button onclick="openCreatorProfile('K. Prashanti')" class="text-xs text-[#1769D2] hover:underline font-medium">View Author Profile</button>
            </div>

            <div id="chatMessagesContainer" class="p-4 overflow-y-auto space-y-3 flex-1 text-xs">
              <div class="flex items-start gap-2 max-w-md">
                <div class="w-7 h-7 rounded-full bg-[#1769D2] text-white font-semibold text-[10px] flex items-center justify-center shrink-0">KP</div>
                <div class="p-3 bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg text-[#172033]">
                  Hi Rajini, I have drafted the new Kafka Saga test cases for the Senior Java Microservices requisition. Please review when free.
                  <span class="text-[10px] text-[#7B8798] block mt-1">11:15 AM</span>
                </div>
              </div>

              <div class="flex items-start gap-2 max-w-md ml-auto flex-row-reverse">
                <div class="w-7 h-7 rounded-full bg-[#172033] text-white font-semibold text-[10px] flex items-center justify-center shrink-0">RG</div>
                <div class="p-3 bg-[#1769D2] text-white rounded-lg">
                  Thanks Prashanti. I checked the hidden test cases — looks solid. Approving TST-8842 now.
                  <span class="text-[10px] text-white/80 block mt-1">11:24 AM</span>
                </div>
              </div>
            </div>

            <!-- Composer -->
            <div class="p-4 border-t border-[#E3E8EF] bg-white flex items-center gap-2">
              <input type="text" id="chatMessageInput" placeholder="Write a reply to K. Prashanti... (Press Enter)" class="flex-1 px-3 py-2 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded-lg outline-none focus:bg-white focus:border-[#1769D2] text-[#172033]" onkeydown="if(event.key === 'Enter') sendChatMessage()">
              <button onclick="sendChatMessage()" class="h-9 px-4 rounded-lg bg-[#1769D2] hover:bg-[#1256B0] text-white text-xs font-medium transition shadow-xs">
                Send
              </button>
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

    // Backward compatibility alias
    const flowState = studioState;

    function switchScreen(screenId) {
      if (screenId && screenId.startsWith('test-create-')) {
        const tab = screenId.replace('test-create-', '');
        switchScreen('test-create');
        if (typeof switchStudioTab === 'function') switchStudioTab(tab);
        return;
      }

      // Hide all screen views
      document.querySelectorAll('.screen-view').forEach(view => {
        view.classList.add('hidden');
      });

      // Show selected screen
      const activeScreen = document.getElementById('screen-' + screenId);
      if (activeScreen) {
        activeScreen.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Update Header Title & Group
      const titleEl = document.getElementById('topPageTitle');
      if (titleEl && screenTitles[screenId]) {
        titleEl.textContent = screenTitles[screenId];
      }
      const groupEl = document.getElementById('topNavGroup');
      if (groupEl && navGroups[screenId]) {
        groupEl.textContent = navGroups[screenId];
      }

      // Update Sidebar Navigation States
      document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('bg-[#EFF6FF]', 'text-[#1769D2]', 'font-semibold');
        item.classList.add('text-[#5F6B7A]', 'font-medium');
      });

      const navBtn = document.getElementById('nav-' + screenId);
      if (navBtn) {
        navBtn.classList.add('bg-[#EFF6FF]', 'text-[#1769D2]', 'font-semibold');
        navBtn.classList.remove('text-[#5F6B7A]', 'font-medium');
      }
    }

    let isSidebarCollapsed = false;
    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const main = document.getElementById('mainContent');
      const brandTexts = document.querySelectorAll('.brand-text');
      const toggleIcon = document.getElementById('toggleIcon');

      isSidebarCollapsed = !isSidebarCollapsed;

      if (isSidebarCollapsed) {
        sidebar.classList.remove('w-[240px]');
        sidebar.classList.add('w-[68px]');
        main.classList.remove('ml-[240px]');
        main.classList.add('ml-[68px]');
        brandTexts.forEach(el => el.classList.add('hidden'));
        if (toggleIcon) toggleIcon.classList.add('rotate-180');
      } else {
        sidebar.classList.remove('w-[68px]');
        sidebar.classList.add('w-[240px]');
        main.classList.remove('ml-[68px]');
        main.classList.add('ml-[240px]');
        brandTexts.forEach(el => el.classList.remove('hidden'));
        if (toggleIcon) toggleIcon.classList.remove('rotate-180');
      }
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
        e.preventDefault();
        toggleSidebar();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('globalSearchInput');
        if (searchInput) searchInput.focus();
      }
    });

    // Studio Tab Switching
    function switchStudioTab(tabId) {
      studioState.activeTab = tabId;

      document.querySelectorAll('.studio-pane').forEach(el => el.classList.add('hidden'));
      const targetPane = document.getElementById('studio-pane-' + tabId);
      if (targetPane) targetPane.classList.remove('hidden');

      document.querySelectorAll('.studio-tab-btn').forEach(btn => {
        btn.classList.remove('bg-[#1769D2]', 'text-white', 'shadow-xs', 'font-semibold');
        btn.classList.add('text-[#5F6B7A]', 'font-medium');
      });

      const activeBtn = document.getElementById('tab-nav-' + tabId);
      if (activeBtn) {
        activeBtn.classList.remove('text-[#5F6B7A]', 'font-medium');
        activeBtn.classList.add('bg-[#1769D2]', 'text-white', 'shadow-xs', 'font-semibold');
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

      document.getElementById('btn-sec-mcq').className = 'px-3 py-1.5 rounded-lg text-xs font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition';
      document.getElementById('btn-sec-coding').className = 'px-3 py-1.5 rounded-lg text-xs font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition';
      document.getElementById('btn-sec-essay').className = 'px-3 py-1.5 rounded-lg text-xs font-medium text-[#5F6B7A] hover:text-[#172033] hover:bg-[#F6F8FB] transition';

      const targetSub = document.getElementById('subpane-sec-' + secId);
      const targetBtn = document.getElementById('btn-sec-' + secId);
      if (targetSub) targetSub.classList.remove('hidden');
      if (targetBtn) {
        targetBtn.className = 'px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#172033] text-white';
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
      if (stage === 'dwaani') {
        studioState.dwaaniMode = mode;
        const sel = document.getElementById('dwaani-existing-select');
        if (sel) sel.classList.toggle('hidden', mode !== 'existing');
      } else if (stage === 'gradarena') {
        studioState.gradArenaMode = mode;
        const sel = document.getElementById('gradarena-existing-select');
        if (sel) sel.classList.toggle('hidden', mode !== 'existing');
      }
      updateFlowUI();
    }

    function setSequence(seq) {
      studioState.sequence = seq;
      const labelDwaani = document.getElementById('label-seq-dwaani-first');
      const labelGrad = document.getElementById('label-seq-gradarena-first');

      if (seq === 'dwaani_first') {
        if (labelDwaani) labelDwaani.className = 'p-4 rounded-lg border border-[#CDD5DF] bg-[#F6F8FB] flex items-start gap-3 cursor-pointer transition';
        if (labelGrad) labelGrad.className = 'p-4 rounded-lg border border-[#E3E8EF] bg-white hover:border-[#CDD5DF] flex items-start gap-3 cursor-pointer transition';
      } else {
        if (labelDwaani) labelDwaani.className = 'p-4 rounded-lg border border-[#E3E8EF] bg-white hover:border-[#CDD5DF] flex items-start gap-3 cursor-pointer transition';
        if (labelGrad) labelGrad.className = 'p-4 rounded-lg border border-[#CDD5DF] bg-[#F6F8FB] flex items-start gap-3 cursor-pointer transition';
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
            diagram.innerHTML = `
              <div class="flex-1 p-3 rounded-lg bg-white border border-[#E3E8EF] shadow-xs">
                <div class="text-[10px] font-mono font-medium text-[#7B8798] uppercase">Step 1 (First Screen)</div>
                <div class="font-semibold text-[#172033] mt-0.5">Dwaani AI Voice Interview</div>
                <div class="text-[11px] text-[#5F6B7A] mt-1 font-mono">Pass Cutoff: ≥ ${studioState.dwaaniThreshold}%</div>
              </div>
              <div class="text-[#7B8798] font-medium shrink-0 flex flex-col items-center">
                <span>→ [Gating Rule: ≥ ${studioState.dwaaniThreshold}%] →</span>
                <span class="text-[10px] text-rose-600 font-mono">Fail: ${studioState.dwaaniFailureRule === 'stop' ? 'Stop' : 'Hold'}</span>
              </div>
              <div class="flex-1 p-3 rounded-lg bg-white border border-[#E3E8EF] shadow-xs">
                <div class="text-[10px] font-mono font-medium text-[#7B8798] uppercase">Step 2 (Technical Test)</div>
                <div class="font-semibold text-[#172033] mt-0.5">GradArena Assessment</div>
                <div class="text-[11px] text-[#5F6B7A] mt-1 font-mono">Pass Cutoff: ≥ ${studioState.gradArenaThreshold}%</div>
              </div>
              <div class="text-emerald-700 font-semibold shrink-0">→ Shortlist</div>
            `;
          } else {
            diagram.innerHTML = `
              <div class="flex-1 p-3 rounded-lg bg-white border border-[#E3E8EF] shadow-xs">
                <div class="text-[10px] font-mono font-medium text-[#7B8798] uppercase">Step 1 (First Screen)</div>
                <div class="font-semibold text-[#172033] mt-0.5">GradArena Assessment</div>
                <div class="text-[11px] text-[#5F6B7A] mt-1 font-mono">Pass Cutoff: ≥ ${studioState.gradArenaThreshold}%</div>
              </div>
              <div class="text-[#7B8798] font-medium shrink-0 flex flex-col items-center">
                <span>→ [Gating Rule: ≥ ${studioState.gradArenaThreshold}%] →</span>
                <span class="text-[10px] text-rose-600 font-mono">Fail: ${studioState.gradArenaFailureRule === 'stop' ? 'Stop' : 'Hold'}</span>
              </div>
              <div class="flex-1 p-3 rounded-lg bg-white border border-[#E3E8EF] shadow-xs">
                <div class="text-[10px] font-mono font-medium text-[#7B8798] uppercase">Step 2 (Voice Screen)</div>
                <div class="font-semibold text-[#172033] mt-0.5">Dwaani AI Voice Interview</div>
                <div class="text-[11px] text-[#5F6B7A] mt-1 font-mono">Pass Cutoff: ≥ ${studioState.dwaaniThreshold}%</div>
              </div>
              <div class="text-emerald-700 font-semibold shrink-0">→ Shortlist</div>
            `;
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

        const dwaaniCard = `
          <div class="p-4 rounded-lg border border-[#E3E8EF] bg-white space-y-3">
            <div class="flex items-center justify-between border-b border-[#E3E8EF] pb-2">
              <span class="text-xs font-semibold text-[#172033]">Dwaani AI Voice Interview Passing Threshold</span>
              <span class="text-xs font-mono font-semibold text-[#172033]">${studioState.dwaaniThreshold}% Minimum</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div class="md:col-span-2 space-y-1">
                <input id="dwaaniThreshRange" type="range" min="40" max="95" value="${studioState.dwaaniThreshold}" oninput="updateThreshold('dwaani', this.value)" class="w-full accent-[#172033]">
              </div>
              <div>
                <input id="dwaaniThreshNum" type="number" min="40" max="95" value="${studioState.dwaaniThreshold}" onchange="updateThreshold('dwaani', this.value)" class="w-full p-1.5 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded font-mono font-semibold text-[#172033]">
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-[#E3E8EF] text-xs">
              <div>
                <label class="block text-[11px] font-medium text-[#5F6B7A] mb-1">Gating Requirement:</label>
                <label class="flex items-center gap-1.5 text-xs text-[#172033] cursor-pointer">
                  <input type="checkbox" checked class="accent-[#172033]">
                  <span>Require Passing Score (≥ ${studioState.dwaaniThreshold}%) to unlock next round</span>
                </label>
              </div>
              <div>
                <label class="block text-[11px] font-medium text-[#5F6B7A] mb-1">When Candidate Fails This Stage:</label>
                <select onchange="updateFailureRule('dwaani', this.value)" class="w-full p-1.5 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded text-[#172033]">
                  <option value="stop" ${studioState.dwaaniFailureRule === 'stop' ? 'selected' : ''}>Stop Workflow Immediately (Auto-Regret Email)</option>
                  <option value="review" ${studioState.dwaaniFailureRule === 'review' ? 'selected' : ''}>Route to Recruiter Manual Review Pool (Hold)</option>
                </select>
              </div>
            </div>
          </div>
        `;

        const gradCard = `
          <div class="p-4 rounded-lg border border-[#E3E8EF] bg-white space-y-3">
            <div class="flex items-center justify-between border-b border-[#E3E8EF] pb-2">
              <span class="text-xs font-semibold text-[#172033]">GradArena Assessment Passing Threshold</span>
              <span class="text-xs font-mono font-semibold text-[#172033]">${studioState.gradArenaThreshold}% Minimum</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div class="md:col-span-2 space-y-1">
                <input id="gradArenaThreshRange" type="range" min="40" max="95" value="${studioState.gradArenaThreshold}" oninput="updateThreshold('gradarena', this.value)" class="w-full accent-[#172033]">
              </div>
              <div>
                <input id="gradArenaThreshNum" type="number" min="40" max="95" value="${studioState.gradArenaThreshold}" onchange="updateThreshold('gradarena', this.value)" class="w-full p-1.5 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded font-mono font-semibold text-[#172033]">
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-[#E3E8EF] text-xs">
              <div>
                <label class="block text-[11px] font-medium text-[#5F6B7A] mb-1">Gating Requirement:</label>
                <label class="flex items-center gap-1.5 text-xs text-[#172033] cursor-pointer">
                  <input type="checkbox" checked class="accent-[#172033]">
                  <span>Require Passing Score (≥ ${studioState.gradArenaThreshold}%) to Shortlist</span>
                </label>
              </div>
              <div>
                <label class="block text-[11px] font-medium text-[#5F6B7A] mb-1">When Candidate Fails This Stage:</label>
                <select onchange="updateFailureRule('gradarena', this.value)" class="w-full p-1.5 text-xs bg-[#F6F8FB] border border-[#E3E8EF] rounded text-[#172033]">
                  <option value="review" ${studioState.gradArenaFailureRule === 'review' ? 'selected' : ''}>Route to Recruiter Manual Review Pool (Hold)</option>
                  <option value="stop" ${studioState.gradArenaFailureRule === 'stop' ? 'selected' : ''}>Stop Workflow Immediately (Auto-Regret Email)</option>
                </select>
              </div>
            </div>
          </div>
        `;

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

          summaryList.innerHTML = `
            <div class="p-3 rounded-lg bg-white border border-[#E3E8EF] space-y-1.5 text-xs">
              <div class="flex items-center justify-between font-semibold text-[#172033]">
                <span>Step 1: ${stage1Name}</span>
                <span class="font-mono">Pass: ≥ ${stage1Thresh}%</span>
              </div>
              <div class="text-[11px] text-[#5F6B7A]">Candidates must score ≥ ${stage1Thresh}% to unlock Step 2. Failure triggers: ${isDwaaniFirst ? studioState.dwaaniFailureRule : studioState.gradArenaFailureRule}.</div>
            </div>
            <div class="p-3 rounded-lg bg-white border border-[#E3E8EF] space-y-1.5 text-xs">
              <div class="flex items-center justify-between font-semibold text-[#172033]">
                <span>Step 2: ${stage2Name}</span>
                <span class="font-mono">Pass: ≥ ${stage2Thresh}%</span>
              </div>
              <div class="text-[11px] text-[#5F6B7A]">Dual-Camera QR Live Proctoring required (0 critical malpractice flags). Qualifiers automatically shortlisted.</div>
            </div>
          `;
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
      tr.className = 'hover:bg-[#F6F8FB]';
      tr.innerHTML = `
        <td class="p-2.5 font-bold text-[#172033]">TC-0${count}</td>
        <td class="p-2.5 text-[#5F6B7A]">Custom input vector</td>
        <td class="p-2.5 text-[#027A48] font-semibold">Expected validation response</td>
        <td class="p-2.5 text-[#172033]">10 Marks</td>
        <td class="p-2.5"><span class="px-2 py-0.5 rounded text-[9px] bg-[#F6F8FB] text-[#5F6B7A] border border-[#E3E8EF]">Public Sample</span></td>
        <td class="p-2.5 text-right"><button onclick="this.closest('tr').remove()" class="text-[#B42318] hover:underline">Delete</button></td>
      `;
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
        msgDiv.className = 'flex items-start gap-2 max-w-md ml-auto flex-row-reverse';
        msgDiv.innerHTML = `
          <div class="w-7 h-7 rounded-full bg-[#172033] text-white font-semibold text-[10px] flex items-center justify-center shrink-0">RG</div>
          <div class="p-3 bg-[#1769D2] text-white rounded-lg">
            ` + text + `
            <span class="text-[10px] text-white/80 block mt-1">Just now</span>
          </div>
        `;
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
        if (s.startsWith('test-create-') || screenTitles[s]) {
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

fs.writeFileSync(path.join(__dirname, 'manager-panel.html'), enterpriseHtml, 'utf8');
fs.writeFileSync(path.join(__dirname, 'manager-dashboard.html'), enterpriseHtml, 'utf8');

console.log('Successfully modernized manager-panel.html and manager-dashboard.html!');
