const fs = require('fs');

console.log('Generating GradArena Recruiter Panel...');

const part1_head = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GradArena Recruiter — AI Assessment & Candidate Intelligence Portal</title>

  <!-- Google Fonts: Montserrat (Headings & Display) + Inter (Complementary UI & Body) + JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
            heading: ['"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
            montserrat: ['"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
            inter: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            brand: {
              50: '#F0F7FD',
              100: '#DDEEFB',
              200: '#BDE0F8',
              300: '#8BC8F3',
              400: '#52ABEC',
              500: '#107ACC', // Official GradArena Cerulean Logo Blue
              600: '#0C67AE',
              700: '#0A528B',
              800: '#094573',
              900: '#0B3A60',
              950: '#072540',
            },
            surface: {
              canvas: '#F8FAFC',
              card: '#FFFFFF',
              subtle: '#F1F5F9',
              border: '#E2E8F0',
            }
          },
          boxShadow: {
            'card': '0 1px 3px 0 rgba(0, 0, 0, 0.03), 0 6px 16px -2px rgba(16, 122, 204, 0.04)',
            'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 12px 28px -4px rgba(16, 122, 204, 0.08)',
            'brand-glow': '0 4px 14px 0 rgba(16, 122, 204, 0.28)',
            'success-glow': '0 4px 14px 0 rgba(16, 185, 129, 0.25)',
          }
        }
      }
    }
  </script>

  <style>
    :root {
      --font-heading: 'Montserrat', system-ui, -apple-system, sans-serif;
      --font-body: 'Inter', system-ui, -apple-system, sans-serif;
    }

    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background-color: #F8FAFC;
      color: #0F172A;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-image: 
        radial-gradient(at 0% 0%, rgba(16, 122, 204, 0.035) 0px, transparent 45%),
        radial-gradient(at 100% 0%, rgba(99, 102, 241, 0.025) 0px, transparent 40%),
        radial-gradient(at 50% 100%, rgba(16, 185, 129, 0.02) 0px, transparent 50%);
      background-attachment: fixed;
    }

    /* Headings, Brand, Navigation, Metric labels and Action Buttons use Montserrat without extra bold */
    h1, h2, h3, h4, h5, h6,
    .font-heading,
    .brand-title,
    nav a,
    nav button,
    .btn-action,
    .screen-title {
      font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.015em;
    }

    /* Custom Scrollbar */
    .custom-scrollbar::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #F1F5F9;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #CBD5E1;
      border-radius: 9999px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #94A3B8;
    }

    /* Low-Opacity Diffused Drop Shadows for Rectangles & Cards */
    .premium-card {
      background: #FFFFFF;
      border: 1px solid rgba(226, 232, 240, 0.85);
      border-radius: 20px;
      box-shadow: 
        0 1px 2px 0 rgba(15, 23, 42, 0.02),
        0 4px 12px 0 rgba(15, 23, 42, 0.025),
        0 16px 36px -4px rgba(16, 122, 204, 0.04);
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .premium-card:hover {
      transform: translateY(-1px);
      box-shadow: 
        0 2px 6px 0 rgba(15, 23, 42, 0.03),
        0 8px 24px -2px rgba(16, 122, 204, 0.08);
      border-color: rgba(16, 122, 204, 0.35);
    }

    .module-rect {
      background: #FFFFFF;
      border: 1px solid rgba(226, 232, 240, 0.9);
      border-radius: 16px;
      box-shadow: 
        0 1px 2px 0 rgba(15, 23, 42, 0.02),
        0 4px 10px 0 rgba(16, 122, 204, 0.03);
      transition: all 0.2s ease;
    }
    .module-rect:hover {
      box-shadow: 
        0 4px 14px -1px rgba(16, 122, 204, 0.09);
      border-color: rgba(16, 122, 204, 0.3);
    }

    .nav-item-active {
      background: linear-gradient(90deg, rgba(16, 122, 204, 0.12) 0%, rgba(16, 122, 204, 0.03) 100%);
      color: #107ACC;
      font-weight: 700;
      border-left: 3px solid #107ACC;
    }
    .nav-item-inactive {
      color: #64748B;
      font-weight: 500;
      border-left: 3px solid transparent;
    }
    .nav-item-inactive:hover {
      background: #F8FAFC;
      color: #0F172A;
    }
  </style>
</head>

<body class="bg-[#F8FAFC] text-slate-800 antialiased h-screen overflow-hidden flex">

  <!-- =================================================================== -->
  <!-- FIXED LEFT SIDEBAR                                                  -->
  <!-- =================================================================== -->
  <aside id="sidebar" class="w-64 bg-white border-r border-slate-200/90 flex flex-col justify-between shrink-0 h-screen z-30 transition-all duration-300">
    
    <!-- Top Brand Area -->
    <div class="p-5 border-b border-slate-100 flex items-center justify-between">
      <div class="flex items-center gap-3 cursor-pointer" onclick="switchScreen('dashboard')">
        <img src="Grad Arena Logo-01.svg" alt="GradArena Logo" class="h-9 w-auto object-contain hover:scale-105 transition duration-200" />
      </div>
      <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-[#107acc] border border-blue-200/80 uppercase tracking-wider">
        Recruiter
      </span>
    </div>

    <!-- Navigation Menu Items -->
    <div class="flex-1 overflow-y-auto custom-scrollbar py-3 px-2 space-y-1">
      
      <!-- 1. Dashboard -->
      <button onclick="switchScreen('dashboard')" id="nav-dashboard" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-active transition rounded-xl">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span class="text-xs">Dashboard</span>
        </div>
        <span class="w-1.5 h-1.5 rounded-full bg-[#107acc]"></span>
      </button>

      <!-- 2. Create Test -->
      <button onclick="switchScreen('create-test')" id="nav-create-test" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition rounded-xl">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <span class="text-xs">Create Test</span>
        </div>
        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-100 text-[#107acc]">AI</span>
      </button>

      <!-- 3. My Tests -->
      <button onclick="switchScreen('my-tests')" id="nav-my-tests" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition rounded-xl">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span class="text-xs">My Tests</span>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">30</span>
      </button>

      <!-- 4. Modification Requests -->
      <button onclick="switchScreen('modifications')" id="nav-modifications" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition rounded-xl">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          <span class="text-xs">Modification Requests</span>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">2</span>
      </button>

      <!-- 5. Candidates Pool -->
      <button onclick="switchScreen('candidates')" id="nav-candidates" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition rounded-xl">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span class="text-xs">Candidates</span>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">285</span>
      </button>

      <!-- 6. Import & Invite Candidates -->
      <button onclick="switchScreen('import-candidates')" id="nav-import-candidates" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition rounded-xl">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
          <span class="text-xs">Import & Invite</span>
        </div>
        <span class="text-[10px] font-bold text-[#107acc]">CSV</span>
      </button>

      <!-- 7. Message -->
      <button onclick="switchScreen('message')" id="nav-message" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition rounded-xl">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          <span class="text-xs">Message</span>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-[#107acc]">3</span>
      </button>

      <!-- 8. Tickets -->
      <button onclick="switchScreen('tickets')" id="nav-tickets" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition rounded-xl">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <span class="text-xs">Tickets</span>
        </div>
      </button>

    </div>

    <!-- Bottom Organization Brand Footer -->
    <div class="p-4 border-t border-slate-100 bg-slate-50/50">
      <div class="flex items-center gap-3 p-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#107acc] to-[#38bdf8] text-white flex items-center justify-center font-bold text-xs shadow-xs">
          GA
        </div>
        <div class="overflow-hidden flex-1">
          <span class="text-xs font-bold text-slate-800 block truncate">GADigital Solutions</span>
          <span class="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Verified Enterprise
          </span>
        </div>
      </div>
    </div>

  </aside>

  <!-- =================================================================== -->
  <!-- MAIN WORKSPACE CONTAINER (WITH FIXED TOP NAVBAR)                    -->
  <!-- =================================================================== -->
  <div class="flex-1 flex flex-col h-screen overflow-hidden">
    
    <!-- FIXED TOP NAVBAR -->
    <header class="sticky top-0 z-20 h-16 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-6 flex items-center justify-between shrink-0 shadow-xs">
      
      <!-- Left: Screen Breadcrumb & Title -->
      <div class="flex items-center gap-3">
        <div id="breadcrumbIcon" class="w-8 h-8 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center text-sm shadow-2xs">
          📊
        </div>
        <div>
          <h1 id="screenTitle" class="text-lg font-bold text-slate-900 tracking-tight leading-tight">Dashboard</h1>
          <p id="screenSubtitle" class="text-[11px] text-slate-500 hidden sm:block leading-tight">Recruiter telemetry, candidate invitations & test oversight</p>
        </div>
      </div>

      <!-- Right: Search, Credits, Notifications, Profile Dropdown -->
      <div class="flex items-center gap-3">
        
        <!-- Search bar with ⌘K -->
        <div class="relative hidden md:block">
          <input type="text" placeholder="Search tests, candidates, JDs..." class="w-64 pl-8 pr-8 py-1.5 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:bg-white transition" />
          <svg class="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span class="absolute right-2 top-2 text-[10px] font-mono text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200">⌘K</span>
        </div>

        <!-- Credits Badge -->
        <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200/80 text-[#107acc] font-bold text-xs shadow-2xs">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          <span class="font-mono">222.23</span>
          <span class="text-[10px] font-semibold text-slate-600 hidden sm:inline">Credits</span>
        </div>

        <!-- Notification Bell -->
        <button class="relative w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600 transition" onclick="alert('Notification Center: 3 new candidate completions and 1 modification approved by Manager Rajini K.');">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          <span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500"></span>
        </button>

        <!-- Recruiter Profile Dropdown Pill -->
        <div class="relative">
          <button id="profileDropdownBtn" onclick="toggleProfileDropdown()" class="flex items-center gap-3 pl-2 border-l border-slate-200 hover:opacity-90 transition focus:outline-none cursor-pointer">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#107acc] to-[#2590e8] text-white flex items-center justify-center font-bold text-sm shadow-xs border border-blue-200/60">
              G
            </div>
            <div class="hidden lg:block text-left">
              <span class="text-xs font-bold text-slate-800 block">gadigitalsmartbot@gmail.com</span>
              <span class="text-[10px] font-semibold text-[#107acc] block">Senior Recruiter</span>
            </div>
            <svg id="profileChevron" class="w-4 h-4 text-slate-400 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>

          <!-- Interactive Dropdown Menu with Logo & Profile Settings -->
          <div id="profileDropdownMenu" class="hidden absolute right-0 top-14 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 z-50 p-2.5 space-y-1.5 transform transition-all duration-150 origin-top-right">
            
            <!-- Organization & Logo Header Banner -->
            <div class="p-2.5 rounded-xl bg-gradient-to-r from-blue-50/80 via-indigo-50/40 to-slate-50 border border-blue-100 flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="h-8 w-8 rounded-lg bg-white p-1 border border-slate-200 shadow-2xs flex items-center justify-center shrink-0">
                  <img src="Grad Arena Logo-01.svg" class="h-6 w-auto object-contain" alt="Logo" />
                </div>
                <div>
                  <div class="text-xs font-bold text-slate-900 leading-tight">GADigital Solutions</div>
                  <div class="text-[10px] font-semibold text-[#107acc] flex items-center gap-1 leading-tight mt-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Recruiter Workspace
                  </div>
                </div>
              </div>
              <button onclick="openProfileSettingsModal('org')" title="Manage Organization Logo" class="text-[10px] font-bold text-[#107acc] hover:underline px-2 py-1 rounded-md bg-white border border-blue-200 shadow-2xs hover:bg-blue-50 transition">
                Edit Logo
              </button>
            </div>

            <!-- Recruiter Profile Card -->
            <div class="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#107acc] to-[#38bdf8] text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                G
              </div>
              <div class="overflow-hidden flex-1">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-slate-900 block truncate">GADigital SmartBot</span>
                  <span class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-[#107acc]">RECRUITER</span>
                </div>
                <span class="text-[11px] text-slate-500 block truncate">gadigitalsmartbot@gmail.com</span>
              </div>
            </div>

            <!-- Switch to Manager Portal Button -->
            <a href="manager-panel.html" class="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-blue-50/60 hover:bg-blue-100/70 text-[#107acc] font-bold text-xs transition border border-blue-200/60">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span>Switch to Manager Portal</span>
              </div>
              <span class="text-[10px] bg-white px-1.5 py-0.5 rounded shadow-2xs font-mono">Rajini K ➔</span>
            </a>

            <!-- Menu Item 1: Profile Settings -->
            <button onclick="openProfileSettingsModal()" class="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 text-xs text-slate-700 font-semibold transition group">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-blue-50 text-[#107acc] flex items-center justify-center group-hover:scale-105 transition">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <span>Profile Settings</span>
              </div>
              <span class="text-[10px] text-slate-400">Edit</span>
            </button>

            <!-- Menu Item 2: Organization & Logo Settings -->
            <button onclick="openProfileSettingsModal('org')" class="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 text-xs text-slate-700 font-semibold transition group">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <span>Organization & Logo</span>
              </div>
              <span class="text-[10px] font-bold text-[#107acc]">GADigital</span>
            </button>

            <!-- Menu Item 3: Billing & Credits -->
            <button onclick="alert('Shared Pool: 222.23 Credits Remaining on Enterprise Plan. Your usage: 0.3 Credits.');" class="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 text-xs text-slate-700 font-semibold transition group">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-105 transition">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                </div>
                <span>Credits & Billing</span>
              </div>
              <span class="text-[10px] font-mono font-bold text-[#107acc]">222.23</span>
            </button>

            <div class="border-t border-slate-100 my-1 pt-1"></div>

            <!-- Menu Item 4: Log Out -->
            <button onclick="handleLogout()" class="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-rose-50 text-xs text-rose-600 font-bold transition group">
              <div class="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center group-hover:scale-105 transition">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              </div>
              <span>Log Out</span>
            </button>

          </div>
        </div>

      </div>

    </header>

    <!-- SCROLLABLE MAIN CONTENT AREA -->
    <main id="mainContent" class="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 custom-scrollbar">
`;

fs.writeFileSync('temp_part1.html', part1_head, 'utf8');
console.log('Part 1 written.');
