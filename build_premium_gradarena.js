const fs = require('fs');
const path = require('path');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GradArena — AI Hiring Intelligence & Assessment Platform</title>

  <!-- Google Fonts: Plus Jakarta Sans & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <!-- Google Fonts: Montserrat (Headings & Brand) + Inter (Complementary UI & Body) + JetBrains Mono -->
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
      transform: translateY(-1.5px);
      box-shadow: 
        0 4px 8px 0 rgba(15, 23, 42, 0.02),
        0 12px 24px -2px rgba(15, 23, 42, 0.035),
        0 24px 48px -4px rgba(16, 122, 204, 0.07);
      border-color: rgba(189, 224, 248, 0.9);
    }

    /* Sub-panels and rectangular modules with low-opacity drop shadows */
    .module-rect {
      background: #FFFFFF;
      border: 1px solid rgba(226, 232, 240, 0.8);
      border-radius: 16px;
      box-shadow: 
        0 1px 2px 0 rgba(15, 23, 42, 0.02),
        0 4px 14px -2px rgba(16, 122, 204, 0.035);
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .module-rect:hover {
      box-shadow: 
        0 3px 6px 0 rgba(15, 23, 42, 0.02),
        0 8px 22px -2px rgba(16, 122, 204, 0.065);
      border-color: rgba(189, 224, 248, 0.85);
    }

    /* Active Nav Item */
    .nav-item-active {
      background: linear-gradient(135deg, #107ACC 0%, #1A8CF5 100%) !important;
      color: #FFFFFF !important;
      font-weight: 600;
      border-radius: 14px;
      box-shadow: 0 4px 14px 0 rgba(16, 122, 204, 0.28);
    }
    .nav-item-active svg {
      color: #FFFFFF !important;
      stroke: #FFFFFF !important;
    }
    .nav-item-inactive {
      color: #64748B;
      font-weight: 500;
      border-radius: 12px;
      transition: all 0.15s ease;
    }
    .nav-item-inactive:hover {
      background-color: #F1F5F9;
      color: #0F172A;
    }

    /* Laser scan animation */
    @keyframes laserSweep {
      0% { top: 6px; opacity: 0.9; }
      50% { top: calc(100% - 10px); opacity: 1; }
      100% { top: 6px; opacity: 0.9; }
    }
    .animate-laser {
      position: absolute;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, rgba(16,122,204,0) 0%, rgba(16,122,204,1) 50%, rgba(16,122,204,0) 100%);
      box-shadow: 0 0 14px rgba(16,122,204,0.9);
      animation: laserSweep 2s ease-in-out infinite;
    }

    /* Pulse glow */
    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(16, 122, 204, 0.25); }
      50% { box-shadow: 0 0 0 10px rgba(16, 122, 204, 0); }
    }
    .pulse-glow {
      animation: pulseGlow 2.2s infinite;
    }

    /* Pop-in animation */
    @keyframes popIn {
      0% { opacity: 0; transform: scale(0.88) translateY(4px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    .pop-in {
      animation: popIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    /* Chart Bar Grow */
    @keyframes barGrow {
      0% { transform: scaleY(0); }
      100% { transform: scaleY(1); }
    }
    .animate-bar {
      transform-origin: bottom;
      animation: barGrow 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    /* Donut chart stroke animation */
    @keyframes donutDash {
      0% { stroke-dashoffset: 283; }
      100% { stroke-dashoffset: 0; }
    }
    .animate-donut {
      animation: donutDash 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  </style>
</head>
<body class="bg-[#F8FAFC] text-slate-800 antialiased h-screen overflow-hidden flex">

  <!-- ============================================================ -->
  <!-- 1. SLEEK ENTERPRISE SIDEBAR NAVIGATION                       -->
  <!-- ============================================================ -->
  <aside class="w-64 bg-white/95 backdrop-blur-md border-r border-slate-200/80 flex flex-col justify-between shrink-0 h-screen overflow-y-auto custom-scrollbar z-30 shadow-[1px_0_12px_rgba(0,0,0,0.02)]">
    
    <div>
      <!-- Brand Logo Header -->
      <div class="h-20 px-6 flex items-center border-b border-slate-100">
        <div class="cursor-pointer" onclick="switchScreen('dashboard')">
          <img src="Grad Arena Logo-01.svg" alt="GradArena Logo" class="h-10 w-auto object-contain hover:scale-105 transition" />
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="p-4 space-y-1 text-xs">
        
        <button onclick="switchScreen('dashboard')" id="nav-dashboard" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-active transition">
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="3" width="7" height="7" rx="1.5"></rect><rect x="14" y="14" width="7" height="7" rx="1.5"></rect><rect x="3" y="14" width="7" height="7" rx="1.5"></rect></svg>
            <span class="font-semibold text-sm">Dashboard</span>
          </div>
          <span class="w-1.5 h-1.5 rounded-full bg-white/80"></span>
        </button>

        <button onclick="switchScreen('creators')" id="nav-creators" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition">
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            <span class="font-medium text-sm">Manage Test Creators</span>
          </div>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">5</span>
        </button>

        <button onclick="switchScreen('test-create')" id="nav-test-create" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition">
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            <span class="font-medium text-sm">Test Creation</span>
          </div>
          <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-[#107acc]">AI</span>
        </button>

        <button onclick="switchScreen('tests')" id="nav-tests" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition">
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            <span class="font-medium text-sm">Tests Library</span>
          </div>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">18</span>
        </button>

        <button onclick="switchScreen('reviews')" id="nav-reviews" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition">
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span class="font-medium text-sm">Pending Reviews</span>
          </div>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">3</span>
        </button>

        <button onclick="switchScreen('candidates')" id="nav-candidates" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition">
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <span class="font-medium text-sm">Candidates</span>
          </div>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">284</span>
        </button>

        <button onclick="switchScreen('chat')" id="nav-chat" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition">
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            <span class="font-medium text-sm">Messages</span>
          </div>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-[#107acc]">2</span>
        </button>

        <button onclick="switchScreen('tickets')" id="nav-tickets" class="w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition">
          <div class="flex items-center gap-3">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"></rect><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <span class="font-medium text-sm">Tickets</span>
          </div>
        </button>

      </nav>
    </div>

    <!-- Sidebar Bottom: Organization Switcher & Credit Card -->
    <div class="p-4 space-y-3 border-t border-slate-100">
      


      <!-- Account Badge -->
      <div class="flex items-center gap-3 p-2 rounded-xl bg-slate-50/80 border border-slate-200/60">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#107acc] to-[#38bdf8] text-white flex items-center justify-center font-bold text-xs shadow-xs">
          GA
        </div>
        <div class="overflow-hidden">
          <span class="text-xs font-bold text-slate-800 block truncate">GADigital Solutions</span>
          <span class="text-[10px] text-slate-400 flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Verified Enterprise
          </span>
        </div>
      </div>

    </div>

  </aside>

  <!-- ============================================================ -->
  <!-- 2. MAIN WORKSPACE CONTENT AREA                               -->
  <!-- ============================================================ -->
  <div class="flex-1 flex flex-col h-screen min-w-0 overflow-hidden">
    
    <!-- Top Utility Header Bar -->
    <header class="h-20 shrink-0 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-8 flex items-center justify-between sticky top-0 z-20 shadow-xs">
      
      <!-- Breadcrumb / Active Screen Title -->
      <div class="flex items-center gap-3">
        <div id="breadcrumbIcon" class="w-8 h-8 rounded-lg bg-blue-50 text-[#107acc] flex items-center justify-center font-bold text-sm">
          📊
        </div>
        <div>
          <h1 id="screenTitle" class="text-xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
          <p id="screenSubtitle" class="text-xs text-slate-400">Real-time candidate intelligence & assessment telemetry</p>
        </div>
      </div>

      <!-- Top Right Controls -->
      <div class="flex items-center gap-3.5">
        
        <!-- Search bar -->
        <div class="relative hidden md:block w-64">
          <input type="text" placeholder="Search tests, candidates, creators..." class="w-full pl-9 pr-8 py-2 rounded-xl border border-slate-200/90 text-xs bg-slate-50/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc] transition" />
          <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <span class="text-[10px] font-mono text-slate-400 absolute right-2.5 top-2.5 bg-slate-200/60 px-1.5 py-0.5 rounded">⌘K</span>
        </div>

        <!-- Notification Bell -->
        <div class="relative">
          <button class="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition shadow-xs relative">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            <span class="w-2 h-2 rounded-full bg-rose-500 absolute top-2.5 right-2.5 animate-pulse"></span>
          </button>
        </div>

        <!-- Manager Profile Dropdown Pill -->
        <div class="relative">
          <button id="profileDropdownBtn" onclick="toggleProfileDropdown()" class="flex items-center gap-3 pl-2 border-l border-slate-200 hover:opacity-90 transition focus:outline-none cursor-pointer">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#107acc] to-[#2590e8] text-white flex items-center justify-center font-bold text-sm shadow-xs border border-blue-200/60">
              R
            </div>
            <div class="hidden lg:block text-left">
              <span class="text-xs font-bold text-slate-800 block">rajini@gadigitalsolutions.com</span>
              <span class="text-[10px] font-semibold text-[#107acc] block">Operations Manager</span>
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
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Enterprise Workspace
                  </div>
                </div>
              </div>
              <button onclick="openProfileSettingsModal('org')" title="Manage Organization Logo" class="text-[10px] font-bold text-[#107acc] hover:underline px-2 py-1 rounded-md bg-white border border-blue-200 shadow-2xs hover:bg-blue-50 transition">
                Edit Logo
              </button>
            </div>

            <!-- User Profile Card -->
            <div class="p-3 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-center gap-3 mb-1">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#107acc] to-[#38bdf8] text-white flex items-center justify-center font-bold text-sm shadow-xs shrink-0">
                R
              </div>
              <div class="overflow-hidden flex-1">
                <span class="text-xs font-bold text-slate-900 block truncate">Rajini K</span>
                <span class="text-[11px] text-slate-500 block truncate">rajini@gadigitalsolutions.com</span>
                <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-[#107acc] inline-block mt-1">OPERATIONS MANAGER</span>
              </div>
            </div>

            <!-- Menu Item 1: Profile Settings -->
            <button onclick="openProfileSettingsModal()" class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 text-xs text-slate-700 font-semibold transition group">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-blue-50 text-[#107acc] flex items-center justify-center group-hover:scale-105 transition">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <span>Profile Settings</span>
              </div>
              <span class="text-[10px] text-slate-400">Edit</span>
            </button>

            <!-- Menu Item 2: Organization & Logo Settings -->
            <button onclick="openProfileSettingsModal('org')" class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 text-xs text-slate-700 font-semibold transition group">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <span>Organization & Logo</span>
              </div>
              <span class="text-[10px] font-bold text-[#107acc]">GADigital</span>
            </button>

            <!-- Menu Item 3: Billing & Credits -->
            <button onclick="alert('Organization Billing: 222.23 Credits Remaining on Enterprise Plan.');" class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 text-xs text-slate-700 font-semibold transition group">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-105 transition">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                </div>
                <span>Credits & Billing</span>
              </div>
              <span class="text-[10px] font-mono font-bold text-[#107acc]">222.23</span>
            </button>

            <!-- Menu Item 4: Security & Preferences -->
            <button onclick="openProfileSettingsModal('security')" class="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 text-xs text-slate-700 font-semibold transition group">
              <div class="flex items-center gap-2.5">
                <div class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                </div>
                <span>Security & 2FA</span>
              </div>
              <span class="text-[10px] font-bold text-emerald-600">Active</span>
            </button>

            <div class="border-t border-slate-100 my-1 pt-1"></div>

            <!-- Menu Item 5: Log Out / Sign Out -->
            <button onclick="handleLogout()" class="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-rose-50 text-xs text-rose-600 font-bold transition group">
              <div class="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center group-hover:scale-105 transition">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              </div>
              <span>Log Out</span>
            </button>

          </div>
        </div>

      </div>

    </header>

    <!-- Page Workspace Container -->
    <main class="flex-1 p-8 overflow-y-auto custom-scrollbar">

      <!-- ============================================================ -->
      <!-- SCREEN 1: MODERNIZED PREMIUM DASHBOARD (WITH CHARTS & GRAPHS) -->
      <!-- ============================================================ -->
      <div id="screen-dashboard" class="screen-view space-y-8">
        
        <!-- Top Hero Metrics Grid (4 Dimensional Cards) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <!-- Metric 1: Active Hiring Drives -->
          <div class="premium-card p-5 relative overflow-hidden group">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-50 to-blue-100/70 border border-blue-200/60 text-[#107acc] flex items-center justify-center font-bold text-xs shadow-xs">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                </div>
                <span class="text-xs font-bold text-slate-600 uppercase tracking-wider">Active Drives</span>
              </div>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#107acc] border border-blue-200/80 flex items-center gap-1">
                <span>↑ 14%</span> vs last mo
              </span>
            </div>
            <div class="mt-3.5 flex items-baseline justify-between">
              <span class="text-3xl font-bold text-slate-900 tracking-tight font-mono">32</span>
              <!-- Mini SVG Area Sparkline -->
              <svg class="w-24 h-10" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="spark1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#107acc" stop-opacity="0.25"/>
                    <stop offset="100%" stop-color="#107acc" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,35 Q20,30 40,25 T80,10 T100,5 L100,40 L0,40 Z" fill="url(#spark1)" />
                <path d="M0,35 Q20,30 40,25 T80,10 T100,5" fill="none" stroke="#107acc" stroke-width="2.5" stroke-linecap="round" />
              </svg>
            </div>
            <p class="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 4 new assessments live this week
            </p>
          </div>

          <!-- Metric 2: Total Candidates -->
          <div class="premium-card p-5 relative overflow-hidden group">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-50 to-emerald-100/70 border border-emerald-200/60 text-emerald-600 flex items-center justify-center font-bold text-xs shadow-xs">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <span class="text-xs font-bold text-slate-600 uppercase tracking-wider">Candidates</span>
              </div>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 flex items-center gap-1">
                <span>↑ 8.2%</span> pace
              </span>
            </div>
            <div class="mt-3.5 flex items-baseline justify-between">
              <span class="text-3xl font-bold text-slate-900 tracking-tight font-mono">284</span>
              <!-- Mini SVG Area Sparkline -->
              <svg class="w-24 h-10" viewBox="0 0 100 40">
                <defs>
                  <linearGradient id="spark2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
                    <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,38 Q30,28 50,30 T80,14 T100,6 L100,40 L0,40 Z" fill="url(#spark2)" />
                <path d="M0,38 Q30,28 50,30 T80,14 T100,6" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" />
              </svg>
            </div>
            <p class="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Across 18 active organization pipelines
            </p>
          </div>

          <!-- Metric 3: Interview Conversion -->
          <div class="premium-card p-5 relative overflow-hidden group">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Interview Conversion</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#107acc] border border-blue-200/80">
                Benchmark 45%
              </span>
            </div>
            <div class="mt-3 flex items-baseline justify-between">
              <span class="text-3xl font-bold text-slate-900 tracking-tight font-mono">48%</span>
              <!-- Mini SVG Donut Meter -->
              <svg class="w-10 h-10 transform -rotate-90">
                <circle cx="20" cy="20" r="15" stroke="#E2E8F0" stroke-width="3.5" fill="transparent"/>
                <circle cx="20" cy="20" r="15" stroke="#107acc" stroke-width="3.5" stroke-dasharray="94.2" stroke-dashoffset="49" stroke-linecap="round" fill="transparent"/>
              </svg>
            </div>
            <p class="text-[11px] text-slate-400 mt-1">Qualified candidates proceeding to offer</p>
          </div>

          <!-- Metric 4: Credit Consumption -->
          <div class="premium-card p-5 relative overflow-hidden group">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Credit Allocation</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200/80">
                212 Actions
              </span>
            </div>
            <div class="mt-3 flex items-baseline justify-between">
              <span class="text-3xl font-bold text-slate-900 tracking-tight font-mono">13.7</span>
              <span class="text-xs font-bold text-slate-400 font-mono">/ 222.23 LEFT</span>
            </div>
            <div class="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
              <div class="bg-gradient-to-r from-[#107acc] to-indigo-500 h-1.5 rounded-full" style="width: 14%"></div>
            </div>
          </div>

        </div>

        <!-- ========================================================= -->
        <!-- CHARTS SECTION: 1. BAR CHART (VOLUME) + 2. DONUT (PIE)    -->
        <!-- ========================================================= -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- Chart A: 7-Day Hiring Volume Bar Chart (8 Columns) -->
          <div class="lg:col-span-7 premium-card p-6 flex flex-col justify-between">
            <div>
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                    Weekly Assessment Velocity & Candidate Volume
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#107acc] border border-blue-200/60">Live Bar Chart</span>
                  </h3>
                  <p class="text-xs text-slate-400 mt-0.5">Daily candidate invitations vs successfully qualified candidates</p>
                </div>
                <div class="flex items-center gap-2.5">
                  <div class="flex items-center p-1 rounded-xl bg-slate-100/80 border border-slate-200/60 text-[11px] font-semibold text-slate-600">
                    <button class="px-2.5 py-1 rounded-lg bg-white text-[#107acc] font-bold shadow-xs">7 Days</button>
                    <button class="px-2.5 py-1 rounded-lg hover:text-slate-900 transition">30 Days</button>
                    <button class="px-2.5 py-1 rounded-lg hover:text-slate-900 transition">Quarter</button>
                  </div>
                  <div class="flex items-center gap-3 text-xs pl-2 border-l border-slate-200">
                    <span class="flex items-center gap-1.5 text-slate-500 font-medium">
                      <span class="w-2.5 h-2.5 rounded-sm bg-slate-200"></span> Invited
                    </span>
                    <span class="flex items-center gap-1.5 text-[#107acc] font-bold">
                      <span class="w-2.5 h-2.5 rounded-sm bg-gradient-to-t from-[#107acc] to-[#38bdf8]"></span> Qualified
                    </span>
                  </div>
                </div>
              </div>

              <!-- Bar Chart Visual Workspace -->
              <div class="pt-6 pb-2">
                <div class="h-56 flex items-end justify-between gap-3 px-2 border-b border-slate-100 relative">
                  
                  <!-- Target line -->
                  <div class="absolute left-0 right-0 top-16 border-b border-dashed border-slate-200/90 pointer-events-none flex justify-end">
                    <span class="text-[9px] font-mono font-semibold text-slate-400 bg-white px-1 -mt-2.5">TARGET: 30 / DAY</span>
                  </div>

                  <!-- Monday -->
                  <div class="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
                    <div class="w-full flex items-end justify-center gap-1 h-44">
                      <div class="w-4 bg-slate-200 rounded-t-md transition-all group-hover:bg-slate-300" style="height: 60%"></div>
                      <div class="w-4 bg-gradient-to-t from-[#107acc] to-[#38bdf8] rounded-t-md shadow-xs transition-all group-hover:brightness-110 animate-bar" style="height: 45%"></div>
                    </div>
                    <span class="text-[11px] font-bold text-slate-600 group-hover:text-[#107acc]">Mon</span>
                  </div>

                  <!-- Tuesday -->
                  <div class="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
                    <div class="w-full flex items-end justify-center gap-1 h-44">
                      <div class="w-4 bg-slate-200 rounded-t-md transition-all group-hover:bg-slate-300" style="height: 75%"></div>
                      <div class="w-4 bg-gradient-to-t from-[#107acc] to-[#38bdf8] rounded-t-md shadow-xs transition-all group-hover:brightness-110 animate-bar" style="height: 58%"></div>
                    </div>
                    <span class="text-[11px] font-bold text-slate-600 group-hover:text-[#107acc]">Tue</span>
                  </div>

                  <!-- Wednesday -->
                  <div class="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
                    <div class="w-full flex items-end justify-center gap-1 h-44">
                      <div class="w-4 bg-slate-200 rounded-t-md transition-all group-hover:bg-slate-300" style="height: 90%"></div>
                      <div class="w-4 bg-gradient-to-t from-[#107acc] to-[#38bdf8] rounded-t-md shadow-xs transition-all group-hover:brightness-110 animate-bar" style="height: 72%"></div>
                    </div>
                    <span class="text-[11px] font-bold text-[#107acc]">Wed</span>
                  </div>

                  <!-- Thursday -->
                  <div class="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
                    <div class="w-full flex items-end justify-center gap-1 h-44">
                      <div class="w-4 bg-slate-200 rounded-t-md transition-all group-hover:bg-slate-300" style="height: 80%"></div>
                      <div class="w-4 bg-gradient-to-t from-[#107acc] to-[#38bdf8] rounded-t-md shadow-xs transition-all group-hover:brightness-110 animate-bar" style="height: 64%"></div>
                    </div>
                    <span class="text-[11px] font-bold text-slate-600 group-hover:text-[#107acc]">Thu</span>
                  </div>

                  <!-- Friday -->
                  <div class="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
                    <div class="w-full flex items-end justify-center gap-1 h-44">
                      <div class="w-4 bg-slate-200 rounded-t-md transition-all group-hover:bg-slate-300" style="height: 95%"></div>
                      <div class="w-4 bg-gradient-to-t from-[#107acc] to-[#38bdf8] rounded-t-md shadow-xs transition-all group-hover:brightness-110 animate-bar" style="height: 85%"></div>
                    </div>
                    <span class="text-[11px] font-bold text-slate-600 group-hover:text-[#107acc]">Fri</span>
                  </div>

                  <!-- Saturday -->
                  <div class="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
                    <div class="w-full flex items-end justify-center gap-1 h-44">
                      <div class="w-4 bg-slate-200 rounded-t-md transition-all group-hover:bg-slate-300" style="height: 40%"></div>
                      <div class="w-4 bg-gradient-to-t from-[#107acc] to-[#38bdf8] rounded-t-md shadow-xs transition-all group-hover:brightness-110 animate-bar" style="height: 30%"></div>
                    </div>
                    <span class="text-[11px] font-bold text-slate-600 group-hover:text-[#107acc]">Sat</span>
                  </div>

                  <!-- Sunday -->
                  <div class="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
                    <div class="w-full flex items-end justify-center gap-1 h-44">
                      <div class="w-4 bg-slate-200 rounded-t-md transition-all group-hover:bg-slate-300" style="height: 30%"></div>
                      <div class="w-4 bg-gradient-to-t from-[#107acc] to-[#38bdf8] rounded-t-md shadow-xs transition-all group-hover:brightness-110 animate-bar" style="height: 22%"></div>
                    </div>
                    <span class="text-[11px] font-bold text-slate-600 group-hover:text-[#107acc]">Sun</span>
                  </div>

                </div>
              </div>
            </div>

            <!-- Bar Chart Footer Metrics -->
            <div class="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span class="text-slate-500 font-medium">Peak Performance: <strong class="text-slate-800">Friday (42 Assessments Passed)</strong></span>
              <span class="text-[#107acc] font-bold hover:underline cursor-pointer" onclick="switchScreen('candidates')">View candidate breakdown ➔</span>
            </div>
          </div>

          <!-- Chart B: Donut / Pie Chart (Candidate Outcome Distribution) (5 Columns) -->
          <div class="lg:col-span-5 premium-card p-6 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
                    Candidate Outcome Breakdown
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">Pie / Donut</span>
                  </h3>
                  <p class="text-xs text-slate-400 mt-0.5">284 Total candidates processed in talent pool</p>
                </div>
                <button class="text-slate-400 hover:text-slate-600">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </button>
              </div>

              <!-- Vector Donut Chart Graphic with Legend -->
              <div class="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
                
                <!-- SVG Donut Chart -->
                <div class="relative w-40 h-40 shrink-0 flex items-center justify-center">
                  <svg class="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="pieBlue" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#107acc"/>
                        <stop offset="100%" stop-color="#38bdf8"/>
                      </linearGradient>
                      <linearGradient id="pieAmber" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#f59e0b"/>
                        <stop offset="100%" stop-color="#fbbf24"/>
                      </linearGradient>
                      <linearGradient id="pieRose" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#f43f5e"/>
                        <stop offset="100%" stop-color="#fb7185"/>
                      </linearGradient>
                    </defs>

                    <!-- Background Base Track -->
                    <circle cx="50" cy="50" r="38" stroke="#F1F5F9" stroke-width="12" fill="transparent"/>

                    <!-- Segment 1: Qualified (68% = 162.7 dash) -->
                    <circle cx="50" cy="50" r="38" stroke="url(#pieBlue)" stroke-width="12" stroke-dasharray="162.7 238.7" stroke-dashoffset="0" fill="transparent" class="animate-donut"/>

                    <!-- Segment 2: In Review (22% = 52.5 dash) -->
                    <circle cx="50" cy="50" r="38" stroke="url(#pieAmber)" stroke-width="12" stroke-dasharray="52.5 238.7" stroke-dashoffset="-162.7" fill="transparent" class="animate-donut"/>

                    <!-- Segment 3: Disqualified (10% = 23.5 dash) -->
                    <circle cx="50" cy="50" r="38" stroke="url(#pieRose)" stroke-width="12" stroke-dasharray="23.5 238.7" stroke-dashoffset="-215.2" fill="transparent" class="animate-donut"/>
                  </svg>

                  <!-- Center Statistic -->
                  <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span class="text-2xl font-bold text-slate-900 font-mono">77%</span>
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PASS RATE</span>
                  </div>
                </div>

                <!-- Interactive Legend with Low-Opacity Drop Shadows -->
                <div class="space-y-2.5 w-full sm:w-auto text-xs">
                  
                  <div class="module-rect flex items-center justify-between gap-5 p-2.5 px-3 bg-gradient-to-r from-blue-50/70 to-white">
                    <div class="flex items-center gap-2.5">
                      <span class="w-3 h-3 rounded-full bg-gradient-to-tr from-[#107acc] to-[#38bdf8] shadow-xs"></span>
                      <span class="font-bold text-slate-800">Qualified</span>
                    </div>
                    <span class="font-mono font-bold text-[#107acc]">193 (68%)</span>
                  </div>

                  <div class="module-rect flex items-center justify-between gap-5 p-2.5 px-3 bg-gradient-to-r from-amber-50/70 to-white">
                    <div class="flex items-center gap-2.5">
                      <span class="w-3 h-3 rounded-full bg-amber-500 shadow-xs"></span>
                      <span class="font-bold text-slate-800">In Review</span>
                    </div>
                    <span class="font-mono font-bold text-amber-700">62 (22%)</span>
                  </div>

                  <div class="module-rect flex items-center justify-between gap-5 p-2.5 px-3 bg-gradient-to-r from-rose-50/70 to-white">
                    <div class="flex items-center gap-2.5">
                      <span class="w-3 h-3 rounded-full bg-rose-500 shadow-xs"></span>
                      <span class="font-bold text-slate-800">Failed / Exit</span>
                    </div>
                    <span class="font-mono font-bold text-rose-700">29 (10%)</span>
                  </div>

                </div>

              </div>
            </div>

            <div class="pt-4 mt-2 border-t border-slate-100 text-center">
              <span class="text-[11px] text-slate-400">Automated candidate proctoring threshold calibrated at 60%</span>
            </div>
          </div>

        </div>

        <!-- ========================================================= -->
        <!-- BOTTOM SECTION: ACTIVE ASSESSMENTS + AI CREDIT USAGE      -->
        <!-- ========================================================= -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- Active Assessments Monitor (7 cols) -->
          <div class="lg:col-span-7 premium-card p-6 space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 class="text-base font-bold text-slate-900">Active Organization Assessments</h3>
                <p class="text-xs text-slate-400">Live assessments currently receiving candidate attempts</p>
              </div>
              <button onclick="switchScreen('test-create')" class="px-3.5 py-1.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs">
                <span>+ Create Test</span>
              </button>
            </div>

            <!-- Assessment Row 1 with Low-Opacity Drop Shadow -->
            <div class="module-rect p-4.5 space-y-2.5 group cursor-pointer hover:border-[#107acc]" onclick="switchScreen('test-detail')">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-slate-900 group-hover:text-[#107acc] transition">Hardware Support (Tier 1)</span>
                  <span class="text-[11px] text-slate-400 block">Client: WFM Enterprise • Created by P Hemachandra</span>
                </div>
                <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ● ACTIVE PIPELINE
                </span>
              </div>
              <div class="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>Stages: <strong class="text-slate-800">Dwaani Voice (70%) ➔ GradArena MCQ (60%)</strong></span>
                <span class="font-mono font-bold text-[#107acc]">1 Candidate Tested</span>
              </div>
            </div>

            <!-- Assessment Row 2 with Low-Opacity Drop Shadow -->
            <div class="module-rect p-4.5 space-y-2.5 group cursor-pointer hover:border-[#107acc]" onclick="switchScreen('test-detail')">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-slate-900 group-hover:text-[#107acc] transition">LEAD generation Executive</span>
                  <span class="text-[11px] text-slate-400 block">Client: Niitaka Meru Pvt Ltd • Created by Madhuri ReddyShetty</span>
                </div>
                <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-[#107acc] border border-blue-200">
                  PUBLISHED
                </span>
              </div>
              <div class="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>Stages: <strong class="text-slate-800">GradArena Proctored Assessment</strong></span>
                <span class="font-mono font-bold text-slate-400">0 Candidates</span>
              </div>
            </div>

          </div>

          <!-- Team Performance & Test Creators (5 cols) -->
          <div class="lg:col-span-5 premium-card p-6 space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 class="text-base font-bold text-slate-900">Test Creator Leaders</h3>
                <p class="text-xs text-slate-400">Organizational review velocity</p>
              </div>
              <button onclick="switchScreen('creators')" class="text-xs font-bold text-[#107acc] hover:underline">
                View All 5 ➔
              </button>
            </div>

            <div class="space-y-3">
              
              <div class="module-rect flex items-center justify-between p-3 cursor-pointer group" onclick="switchScreen('creator-detail')">
                <div class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-lg bg-amber-50 text-amber-700 border border-amber-200/80 font-mono font-bold text-[11px] flex items-center justify-center shadow-xs">#1</span>
                  <img src="assets/creators/creator-hemachandra.jpg" class="w-10 h-10 rounded-xl object-cover border border-slate-200 group-hover:scale-105 transition" alt="P Hemachandra" />
                  <div>
                    <span class="text-xs font-bold text-slate-800 group-hover:text-[#107acc] transition block">P Hemachandra</span>
                    <span class="text-[10px] font-semibold text-slate-400">104 Reviews • Tier-1 Lead</span>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/70 shadow-xs">
                  4.9 ★
                </span>
              </div>

              <div class="module-rect flex items-center justify-between p-3 cursor-pointer group" onclick="switchScreen('creator-detail')">
                <div class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-lg bg-slate-100 text-slate-600 border border-slate-200 font-mono font-bold text-[11px] flex items-center justify-center shadow-xs">#2</span>
                  <img src="assets/creators/creator-madhuri.jpg" class="w-10 h-10 rounded-xl object-cover border border-slate-200 group-hover:scale-105 transition" alt="Madhuri" />
                  <div>
                    <span class="text-xs font-bold text-slate-800 group-hover:text-[#107acc] transition block">Madhuri ReddyShetty</span>
                    <span class="text-[10px] font-semibold text-[#107acc]">MANAGER • 48 Reviews</span>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-blue-50 text-[#107acc] border border-blue-200/70 shadow-xs">
                  4.8 ★
                </span>
              </div>

              <div class="module-rect flex items-center justify-between p-3 cursor-pointer group" onclick="switchScreen('creator-detail')">
                <div class="flex items-center gap-3">
                  <span class="w-6 h-6 rounded-lg bg-slate-100 text-slate-500 border border-slate-200 font-mono font-bold text-[11px] flex items-center justify-center shadow-xs">#3</span>
                  <img src="assets/creators/creator-prashanti.jpg" class="w-10 h-10 rounded-xl object-cover border border-slate-200 group-hover:scale-105 transition" alt="Prashanti" />
                  <div>
                    <span class="text-xs font-bold text-slate-800 group-hover:text-[#107acc] transition block">K Prashanti</span>
                    <span class="text-[10px] font-semibold text-slate-400">4 Reviews • Reviewer</span>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-100 text-slate-600 border border-slate-200/70 shadow-xs">
                  4.7 ★
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 2: MANAGE TEST CREATORS (PREMIUM ROSTER)              -->
      <!-- ============================================================ -->
      <div id="screen-creators" class="screen-view hidden space-y-6">
        
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-slate-900 tracking-tight">Manage Test Creators & Recruiters</h2>
            <p class="text-xs text-slate-500">Oversee team members, assignment velocity, test ownership, and evaluation permissions.</p>
          </div>
          <button onclick="alert('Invite Creator dialog opened. Enter corporate email to grant test-creator access.');" class="px-4 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab] transition flex items-center gap-1.5 shadow-xs">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add New Test Creator
          </button>
        </div>

        <!-- 3 Stat Metrics -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="premium-card p-5">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">TOTAL ACTIVE CREATORS</span>
            <span class="text-2xl font-bold text-slate-900 font-mono mt-1 block">5</span>
            <span class="text-xs text-emerald-600 font-bold mt-1 block">● All 5 Active in Organization</span>
          </div>
          <div class="premium-card p-5">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">ASSIGNED ASSESSMENTS</span>
            <span class="text-2xl font-bold text-[#107acc] font-mono mt-1 block">18</span>
            <span class="text-xs text-slate-400 mt-1 block">Across 12 enterprise clients</span>
          </div>
          <div class="premium-card p-5">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">AVERAGE REVIEW TIME</span>
            <span class="text-2xl font-bold text-emerald-600 font-mono mt-1 block">18m 42s</span>
            <span class="text-xs text-slate-400 mt-1 block">Fast evaluation SLA standard</span>
          </div>
        </div>

        <!-- Creators Grid with Real Portraits -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Card 1: Hemachandra -->
          <div class="premium-card p-6 space-y-4 hover:border-[#107acc] transition cursor-pointer" onclick="switchScreen('creator-detail')">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3.5">
                <img src="assets/creators/creator-hemachandra.jpg" class="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-xs" alt="P Hemachandra" />
                <div>
                  <h4 class="text-sm font-bold text-slate-900 hover:text-[#107acc]">P Hemachandra</h4>
                  <span class="text-[11px] text-slate-400">hemachandra@gadigital.com</span>
                  <div class="flex items-center gap-1.5 mt-1">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#107acc]">TEST_CREATOR</span>
                    <span class="text-[10px] text-emerald-600 font-bold">● Online</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
              <div class="p-2 rounded-xl bg-slate-50">
                <span class="text-[10px] text-slate-400 block font-medium">TESTS CREATED</span>
                <span class="font-bold text-slate-900 font-mono">104</span>
              </div>
              <div class="p-2 rounded-xl bg-slate-50">
                <span class="text-[10px] text-slate-400 block font-medium">SATISFACTION</span>
                <span class="font-bold text-emerald-600 font-mono">4.9 / 5.0</span>
              </div>
            </div>
          </div>

          <!-- Card 2: Madhuri -->
          <div class="premium-card p-6 space-y-4 hover:border-[#107acc] transition cursor-pointer" onclick="switchScreen('creator-detail')">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3.5">
                <img src="assets/creators/creator-madhuri.jpg" class="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-xs" alt="Madhuri" />
                <div>
                  <h4 class="text-sm font-bold text-slate-900 hover:text-[#107acc]">Madhuri ReddyShetty</h4>
                  <span class="text-[11px] text-slate-400">madhuri@gadigital.com</span>
                  <div class="flex items-center gap-1.5 mt-1">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700">MANAGER</span>
                    <span class="text-[10px] text-slate-400">● Active</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
              <div class="p-2 rounded-xl bg-slate-50">
                <span class="text-[10px] text-slate-400 block font-medium">TESTS CREATED</span>
                <span class="font-bold text-slate-900 font-mono">48</span>
              </div>
              <div class="p-2 rounded-xl bg-slate-50">
                <span class="text-[10px] text-slate-400 block font-medium">SATISFACTION</span>
                <span class="font-bold text-[#107acc] font-mono">4.8 / 5.0</span>
              </div>
            </div>
          </div>

          <!-- Card 3: Prashanti -->
          <div class="premium-card p-6 space-y-4 hover:border-[#107acc] transition cursor-pointer" onclick="switchScreen('creator-detail')">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3.5">
                <img src="assets/creators/creator-prashanti.jpg" class="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-xs" alt="K Prashanti" />
                <div>
                  <h4 class="text-sm font-bold text-slate-900 hover:text-[#107acc]">K Prashanti</h4>
                  <span class="text-[11px] text-slate-400">prashanti@gadigital.com</span>
                  <div class="flex items-center gap-1.5 mt-1">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">TEST_CREATOR</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
              <div class="p-2 rounded-xl bg-slate-50">
                <span class="text-[10px] text-slate-400 block font-medium">TESTS CREATED</span>
                <span class="font-bold text-slate-900 font-mono">4</span>
              </div>
              <div class="p-2 rounded-xl bg-slate-50">
                <span class="text-[10px] text-slate-400 block font-medium">SATISFACTION</span>
                <span class="font-bold text-slate-700 font-mono">4.7 / 5.0</span>
              </div>
            </div>
          </div>

          <!-- Card 4: Kalpana -->
          <div class="premium-card p-6 space-y-4 hover:border-[#107acc] transition cursor-pointer" onclick="switchScreen('creator-detail')">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3.5">
                <img src="assets/creators/creator-kalpana.jpg" class="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-xs" alt="Sai Kalpana" />
                <div>
                  <h4 class="text-sm font-bold text-slate-900 hover:text-[#107acc]">Sai Kalpana</h4>
                  <span class="text-[11px] text-slate-400">kalpana@gadigital.com</span>
                  <div class="flex items-center gap-1.5 mt-1">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">TEST_CREATOR</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
              <div class="p-2 rounded-xl bg-slate-50">
                <span class="text-[10px] text-slate-400 block font-medium">TESTS CREATED</span>
                <span class="font-bold text-slate-900 font-mono">1</span>
              </div>
              <div class="p-2 rounded-xl bg-slate-50">
                <span class="text-[10px] text-slate-400 block font-medium">SATISFACTION</span>
                <span class="font-bold text-slate-700 font-mono">5.0 / 5.0</span>
              </div>
            </div>
          </div>

          <!-- Card 5: Uzma Roohi -->
          <div class="premium-card p-6 space-y-4 hover:border-[#107acc] transition cursor-pointer" onclick="switchScreen('creator-detail')">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3.5">
                <img src="assets/creators/creator-uzma.jpg" class="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-xs" alt="Uzma Roohi" />
                <div>
                  <h4 class="text-sm font-bold text-slate-900 hover:text-[#107acc]">Uzma Roohi</h4>
                  <span class="text-[11px] text-slate-400">uzma@gadigital.com</span>
                  <div class="flex items-center gap-1.5 mt-1">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">RECRUITER</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
              <div class="p-2 rounded-xl bg-slate-50">
                <span class="text-[10px] text-slate-400 block font-medium">TESTS CREATED</span>
                <span class="font-bold text-slate-900 font-mono">0</span>
              </div>
              <div class="p-2 rounded-xl bg-slate-50">
                <span class="text-[10px] text-slate-400 block font-medium">SATISFACTION</span>
                <span class="font-bold text-slate-700 font-mono">--</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 3: TEST CREATOR DETAIL                                -->
      <!-- ============================================================ -->
      <div id="screen-creator-detail" class="screen-view hidden space-y-6">
        
        <!-- Navigation Breadcrumb -->
        <div class="flex items-center justify-between">
          <button onclick="switchScreen('creators')" class="text-xs font-bold text-slate-500 hover:text-[#107acc] flex items-center gap-1.5 transition">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            Back to All Test Creators
          </button>
          <div class="flex items-center gap-2 text-xs text-slate-400">
            <span>Creators</span>
            <span>/</span>
            <span class="text-slate-700 font-semibold">P Hemachandra</span>
            <span>/</span>
            <span class="text-[#107acc] font-bold">Created Tests & Reviews</span>
          </div>
        </div>

        <!-- Creator Profile Banner Card -->
        <div class="premium-card p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div class="flex items-start md:items-center gap-5">
            <div class="relative shrink-0">
              <img src="assets/creators/creator-hemachandra.jpg" class="w-20 h-20 rounded-2xl object-cover border-2 border-white shadow-card" alt="P Hemachandra" />
              <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[9px] font-bold" title="Online & Active">✓</span>
            </div>
            <div class="space-y-1.5">
              <div class="flex flex-wrap items-center gap-2.5">
                <h3 class="text-xl font-bold text-slate-900">P Hemachandra</h3>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#107acc] border border-blue-200/80">SENIOR TEST CREATOR</span>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80">TOP AUTHOR</span>
              </div>
              <p class="text-xs text-slate-500">hemachandra@gadigitalsolutions.com • Senior Assessment Engineer • Team: Enterprise Engineering</p>
              <p class="text-xs text-slate-600 max-w-2xl leading-relaxed">
                Specialized in configuring automated IT Support, Hardware Diagnostics, Cloud Architecture, and multi-stage Voice/MCQ evaluation blueprints. Joined organizational assessment roster Jan 2025.
              </p>
            </div>
          </div>
          <div class="flex items-center gap-3 shrink-0 w-full lg:w-auto">
            <button onclick="switchScreen('chat')" class="flex-1 lg:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition flex items-center justify-center gap-2 shadow-xs">
              <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              Message Creator
            </button>
            <button onclick="switchScreen('test-create')" class="flex-1 lg:flex-none px-4 py-2.5 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab] transition flex items-center justify-center gap-2 shadow-xs">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Assign New Test
            </button>
          </div>
        </div>

        <!-- 4 Creator Key Metrics Cards ("How many tests created & review stats") -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <!-- Metric 1: Total Tests Created -->
          <div class="premium-card p-5 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">TOTAL TESTS CREATED</span>
              <div class="w-7 h-7 rounded-lg bg-blue-50 text-[#107acc] flex items-center justify-center">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              </div>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-bold text-slate-900 font-mono">104</span>
              <span class="text-xs text-emerald-600 font-bold">↑ 14% vs Q2</span>
            </div>
            <div class="flex items-center gap-3 text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span class="text-emerald-700 font-semibold">86 Live</span>
              <span>•</span>
              <span class="text-amber-700 font-semibold">12 In Review</span>
              <span>•</span>
              <span class="text-slate-400">6 Archived</span>
            </div>
          </div>

          <!-- Metric 2: Review Approval Rate -->
          <div class="premium-card p-5 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">REVIEW APPROVAL RATE</span>
              <div class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-bold text-emerald-600 font-mono">94.2%</span>
              <span class="text-xs text-slate-400">First-pass 88%</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span>Average Review Turnaround</span>
              <span class="font-bold text-slate-800 font-mono">3.8 hrs</span>
            </div>
          </div>

          <!-- Metric 3: Candidates Evaluated -->
          <div class="premium-card p-5 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CANDIDATES EVALUATED</span>
              <div class="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-bold text-slate-900 font-mono">2,418</span>
              <span class="text-xs text-[#107acc] font-bold">18 Client Drives</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span>Avg Candidate Pass Rate</span>
              <span class="font-bold text-slate-800 font-mono">78.6%</span>
            </div>
          </div>

          <!-- Metric 4: Creator Quality Rating -->
          <div class="premium-card p-5 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CREATOR QUALITY SCORE</span>
              <div class="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
            </div>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-bold text-[#107acc] font-mono">4.9</span>
              <span class="text-xs text-slate-400">/ 5.0 (186 reviews)</span>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span>Proctoring Integrity</span>
              <span class="font-bold text-emerald-600 font-mono">99.4% SLA</span>
            </div>
          </div>

        </div>

        <!-- Review Cycle Summary & Latest Audit Banner -->
        <div class="premium-card p-5 bg-gradient-to-r from-blue-50/70 via-indigo-50/30 to-white border border-blue-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex items-start gap-3.5">
            <div class="w-9 h-9 rounded-xl bg-white border border-blue-200 text-[#107acc] flex items-center justify-center shrink-0 shadow-2xs">
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h4 class="text-xs font-bold text-slate-900">Latest Manager Review Sign-Off: Hardware Support (Tier 1)</h4>
                <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">APPROVED</span>
              </div>
              <p class="text-xs text-slate-600 mt-0.5">
                <strong class="text-slate-800">Review Note by Rajini K (Operations Manager)</strong>: "Excellent question balance between Dwaani Voice proctoring and Windows AD hardware troubleshooting. Calibrated proctoring threshold at 60%."
              </p>
            </div>
          </div>
          <div class="text-right shrink-0">
            <span class="text-[10px] text-slate-400 block">Reviewed on</span>
            <span class="text-xs font-bold text-slate-800 font-mono">Oct 19, 2026 • 14:32 IST</span>
          </div>
        </div>

        <!-- Created Tests Table with Review Stats & Created Date ("stats for the review with created date") -->
        <div class="premium-card p-6 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
            <div>
              <h4 class="text-base font-bold text-slate-900">Created Assessments & Review Telemetry (104 Tests)</h4>
              <p class="text-xs text-slate-500">Track tests created by P Hemachandra, submission dates, manager review timestamps, and approval statuses.</p>
            </div>
            <div class="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
              <button class="px-3 py-1.5 rounded-lg bg-white text-slate-900 font-bold shadow-xs">All (104)</button>
              <button class="px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-800">Live (86)</button>
              <button class="px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-800">In Review (12)</button>
              <button class="px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-800">Drafts (6)</button>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50/80 text-slate-500 uppercase font-semibold border-b border-slate-100 text-[10px] tracking-wider">
                <tr>
                  <th class="p-3.5">TEST TITLE & CODE</th>
                  <th class="p-3.5">CREATED DATE</th>
                  <th class="p-3.5">CLIENT / DOMAIN</th>
                  <th class="p-3.5">REVIEW STATUS</th>
                  <th class="p-3.5">REVIEW DATE & REVIEWER</th>
                  <th class="p-3.5">ATTEMPTS & PASS RATE</th>
                  <th class="p-3.5 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                
                <!-- Row 1 -->
                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('test-detail')">Hardware Support (Tier 1)</div>
                    <div class="text-[10px] text-slate-400 font-mono">TEST-HW-8821 • 3 Stages (Voice + MCQ + Practical)</div>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 18, 2026</span>
                    <span class="text-[10px] text-slate-400">4 days ago (10:14 IST)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[11px]">WFM Enterprise</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 w-fit">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> APPROVED & LIVE
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 19, 2026 • 14:32</span>
                    <span class="text-[10px] text-slate-500">by Rajini K (Turnaround: 4.2h)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono font-bold text-slate-900 block">284 attempts</span>
                    <span class="text-[10px] font-bold text-emerald-600">77% Pass Rate</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('test-detail')" class="px-3 py-1.5 rounded-lg bg-blue-50 text-[#107acc] font-bold hover:bg-blue-100 transition shadow-2xs">
                      View Blueprint
                    </button>
                  </td>
                </tr>

                <!-- Row 2 -->
                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('test-detail')">Cloud Solutions Architect (AWS / Azure)</div>
                    <div class="text-[10px] text-slate-400 font-mono">TEST-CSA-9042 • 2 Stages (Architecture Scenario + AI Voice)</div>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 14, 2026</span>
                    <span class="text-[10px] text-slate-400">8 days ago (16:45 IST)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-semibold text-[11px]">CloudOps Infra</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 w-fit">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> APPROVED & LIVE
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 15, 2026 • 11:20</span>
                    <span class="text-[10px] text-slate-500">by Rajini K (Turnaround: 2.5h)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono font-bold text-slate-900 block">162 attempts</span>
                    <span class="text-[10px] font-bold text-emerald-600">81% Pass Rate</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('test-detail')" class="px-3 py-1.5 rounded-lg bg-blue-50 text-[#107acc] font-bold hover:bg-blue-100 transition shadow-2xs">
                      View Blueprint
                    </button>
                  </td>
                </tr>

                <!-- Row 3: In Review -->
                <tr class="hover:bg-slate-50/70 transition bg-amber-50/20">
                  <td class="p-3.5">
                    <div class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('test-detail')">Python Backend & Fast-API Lead</div>
                    <div class="text-[10px] text-slate-400 font-mono">TEST-PY-7719 • 3 Stages (Coding Sandbox + System Design)</div>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 21, 2026</span>
                    <span class="text-[10px] text-amber-700 font-semibold">Yesterday (18:10 IST)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold text-[11px]">Fintech Platform</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1 w-fit">
                      <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span> IN REVIEW (QUEUE #2)
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-amber-900 block">Assigned to Rajini K</span>
                    <span class="text-[10px] text-amber-700">Estimated sign-off: Today, 15:00</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono font-bold text-slate-400 block">-- attempts</span>
                    <span class="text-[10px] text-slate-400">Pre-launch testing</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('reviews')" class="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-800 font-bold hover:bg-amber-200 transition shadow-2xs">
                      Review Now
                    </button>
                  </td>
                </tr>

                <!-- Row 4 -->
                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('test-detail')">Network Security & Enterprise VPN</div>
                    <div class="text-[10px] text-slate-400 font-mono">TEST-NET-6604 • 2 Stages (Packet Tracing + Security Policy)</div>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 08, 2026</span>
                    <span class="text-[10px] text-slate-400">2 weeks ago (09:30 IST)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[11px]">CyberDefense Inc</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 w-fit">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> APPROVED & LIVE
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Oct 08, 2026 • 15:40</span>
                    <span class="text-[10px] text-slate-500">by Rajini K (Turnaround: 6.1h)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono font-bold text-slate-900 block">98 attempts</span>
                    <span class="text-[10px] font-bold text-emerald-600">64% Pass Rate</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('test-detail')" class="px-3 py-1.5 rounded-lg bg-blue-50 text-[#107acc] font-bold hover:bg-blue-100 transition shadow-2xs">
                      View Blueprint
                    </button>
                  </td>
                </tr>

                <!-- Row 5 -->
                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('test-detail')">Lead Generation & Inside Sales Executive</div>
                    <div class="text-[10px] text-slate-400 font-mono">TEST-LGE-5510 • 2 Stages (Dwaani Voice Pitch + Sales Aptitude)</div>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Sep 28, 2026</span>
                    <span class="text-[10px] text-slate-400">3 weeks ago (14:22 IST)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold text-[11px]">GrowthTech Global</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 w-fit">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> APPROVED & LIVE
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Sep 29, 2026 • 10:15</span>
                    <span class="text-[10px] text-slate-500">by Madhuri R (Turnaround: 3.2h)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono font-bold text-slate-900 block">142 attempts</span>
                    <span class="text-[10px] font-bold text-emerald-600">73% Pass Rate</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('test-detail')" class="px-3 py-1.5 rounded-lg bg-blue-50 text-[#107acc] font-bold hover:bg-blue-100 transition shadow-2xs">
                      View Blueprint
                    </button>
                  </td>
                </tr>

                <!-- Row 6: Revision Note -->
                <tr class="hover:bg-slate-50/70 transition">
                  <td class="p-3.5">
                    <div class="font-bold text-slate-900 hover:text-[#107acc] cursor-pointer" onclick="switchScreen('test-detail')">DevOps & Kubernetes Containerization</div>
                    <div class="text-[10px] text-slate-400 font-mono">TEST-DOK-4432 • 3 Stages (YAML Cluster + Helm + Voice)</div>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Sep 15, 2026</span>
                    <span class="text-[10px] text-slate-400">1 month ago (11:05 IST)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[11px]">InfraCloud Labs</span>
                  </td>
                  <td class="p-3.5">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200 flex items-center gap-1 w-fit">
                      <span class="w-1.5 h-1.5 rounded-full bg-purple-500"></span> REVISED & RE-APPROVED
                    </span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-bold text-slate-800 block">Sep 16, 2026 • 17:00</span>
                    <span class="text-[10px] text-slate-500">by Rajini K (Revision cycle resolved)</span>
                  </td>
                  <td class="p-3.5">
                    <span class="font-mono font-bold text-slate-900 block">84 attempts</span>
                    <span class="text-[10px] font-bold text-emerald-600">88% Pass Rate</span>
                  </td>
                  <td class="p-3.5 text-right">
                    <button onclick="switchScreen('test-detail')" class="px-3 py-1.5 rounded-lg bg-blue-50 text-[#107acc] font-bold hover:bg-blue-100 transition shadow-2xs">
                      View Blueprint
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <!-- Table Footer Pagination / Summary -->
          <div class="flex items-center justify-between pt-3 text-xs text-slate-500 border-t border-slate-100">
            <span>Showing 6 of 104 created assessments by P Hemachandra</span>
            <div class="flex items-center gap-2">
              <button class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold" disabled>Previous</button>
              <button class="px-3 py-1.5 rounded-lg bg-[#107acc] text-white font-bold">1</button>
              <button class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">2</button>
              <button class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">3</button>
              <span>...</span>
              <button class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">18</button>
              <button class="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">Next</button>
            </div>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 4: TEST CREATION WIZARD (CONFIGURABLE MULTI-STAGE)    -->
      <!-- ============================================================ -->
      <div id="screen-test-create" class="screen-view hidden space-y-6">
        
        <!-- Connected 3-Step Wizard Header -->
        <div class="premium-card p-6">
          <div class="flex items-center justify-between max-w-2xl mx-auto relative">
            
            <!-- Step 1 -->
            <div class="flex flex-col items-center gap-1.5 cursor-pointer z-10" onclick="setCreationStep(1)">
              <div id="stepCircle-1" class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#107acc] to-[#38bdf8] text-white flex items-center justify-center font-bold text-sm shadow-brand-glow transition">
                1
              </div>
              <span id="stepLabel-1" class="text-xs font-bold text-[#107acc]">1. Architecture & Flow</span>
            </div>

            <div id="stepLine-1" class="flex-1 h-1 bg-slate-200 mx-2 -mt-5 transition-all"></div>

            <!-- Step 2 -->
            <div class="flex flex-col items-center gap-1.5 cursor-pointer z-10" onclick="setCreationStep(2)">
              <div id="stepCircle-2" class="w-10 h-10 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm transition">
                2
              </div>
              <span id="stepLabel-2" class="text-xs font-semibold text-slate-400">2. AI Question Studio</span>
            </div>

            <div id="stepLine-2" class="flex-1 h-1 bg-slate-200 mx-2 -mt-5 transition-all"></div>

            <!-- Step 3 -->
            <div class="flex flex-col items-center gap-1.5 cursor-pointer z-10" onclick="setCreationStep(3)">
              <div id="stepCircle-3" class="w-10 h-10 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm transition">
                3
              </div>
              <span id="stepLabel-3" class="text-xs font-semibold text-slate-400">3. Blueprint & Review</span>
            </div>

          </div>
        </div>

        <!-- ==================== STEP 1 CONTENT ==================== -->
        <div id="createStep-1" class="premium-card p-8 space-y-6">
          
          <div class="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 class="text-xl font-bold text-slate-900">Assessment Architecture & Intake Flow</h2>
              <p class="text-xs text-slate-500 mt-1">Configure candidate progression stages, pass thresholds, and intake parameters.</p>
            </div>
            <button class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition flex items-center gap-2 shadow-xs">
              <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload Assessment JSON
            </button>
          </div>

          <!-- Dual Tab Intake Switcher: Link vs AI Resume/JD Dropzone -->
          <div class="space-y-4">
            <div class="flex items-center gap-2 border-b border-slate-200/80 pb-2">
              <button id="tabBtn-jobLink" onclick="switchIntakeTab('link')" class="px-4 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold transition shadow-xs">
                🔗 Auto-fill from Job Link
              </button>
              <button id="tabBtn-resumeUpload" onclick="switchIntakeTab('resume')" class="px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:text-[#107acc] text-xs font-bold transition">
                📄 AI Resume / JD Intake Studio
              </button>
            </div>

            <!-- Tab Content 1: Job Link -->
            <div id="tabContent-jobLink" class="p-5 rounded-2xl bg-[#F0F7FD] border border-[#BDE0F8] space-y-3">
              <div class="flex items-center gap-2 text-xs font-bold text-[#107acc]">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                Auto-fill from Job Posting URL
              </div>
              <p class="text-[11px] text-slate-500">Paste a job posting URL (LinkedIn, Indeed, UdyogGenie) to extract competencies.</p>
              <div class="flex items-center gap-2">
                <input type="text" placeholder="https://www.linkedin.com/jobs/view/..." class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
                <button class="px-5 py-2.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs">
                  Extract Details
                </button>
              </div>
            </div>

            <!-- Tab Content 2: Resume / JD Dropzone with Animated Scan -->
            <div id="tabContent-resume" class="hidden p-6 rounded-2xl bg-white border-2 border-dashed border-[#107acc]/40 hover:border-[#107acc] transition space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#107acc] animate-ping"></span>
                    AI Resume & Job Description Intake Studio
                  </h4>
                  <p class="text-[11px] text-slate-500 mt-0.5">Drop candidate resume (PDF/DOCX) or JD to parse skills and synthesize assessment stages</p>
                </div>
                <button onclick="openTestGenerateModal()" class="px-4 py-2 rounded-xl bg-gradient-to-r from-[#107acc] to-[#38bdf8] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-brand-glow">
                  <span>Generate Test with AI ➔</span>
                </button>
              </div>

              <!-- Interactive In-Page Dropzone -->
              <div id="inpageDropzone" onclick="triggerInPageResumeScan('Kalyani_Lead_IT_Support.pdf', 1.4)" class="cursor-pointer border border-slate-200/90 bg-slate-50/60 hover:bg-blue-50/40 rounded-xl p-5 text-center transition group">
                <div class="flex flex-col items-center gap-2">
                  <div class="w-10 h-10 rounded-xl bg-blue-100 text-[#107acc] flex items-center justify-center group-hover:scale-110 transition">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                  </div>
                  <div>
                    <span class="text-xs font-bold text-slate-800">Drag & drop candidate resume or JD here, or click to browse</span>
                    <span class="text-[10px] text-slate-400 block mt-0.5">Supports PDF, DOCX, TXT up to 15MB • Automated OCR & Competency Extraction</span>
                  </div>
                </div>
              </div>

              <!-- Quick Clickable Sample Resumes -->
              <div class="flex items-center gap-2 pt-1">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Try Sample:</span>
                <button type="button" onclick="triggerInPageResumeScan('Kalyani_Lead_IT_Support.pdf', 1.4)" class="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:border-[#107acc] text-[11px] font-semibold text-slate-700 transition flex items-center gap-1">
                  📄 Kalyani (Lead IT Support).pdf
                </button>
                <button type="button" onclick="triggerInPageResumeScan('Nazeer_DevOps_Architect.docx', 2.1)" class="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:border-[#107acc] text-[11px] font-semibold text-slate-700 transition flex items-center gap-1">
                  📄 Nazeer (Cloud Architect).docx
                </button>
              </div>

              <!-- In-Page Scan Progress Card (Initially Hidden) -->
              <div id="inPageScanCard" class="hidden p-4 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/60 to-white space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-blue-100 text-[#107acc] flex items-center justify-center font-bold text-xs">PDF</div>
                    <div>
                      <span id="inPageFileName" class="text-xs font-bold text-slate-800 block">Kalyani_Lead_IT_Support.pdf</span>
                      <span id="inPageFileStatus" class="text-[10px] text-slate-500">Uploading & scanning with OCR engine...</span>
                    </div>
                  </div>
                  <span id="inPagePercent" class="text-xs font-mono font-bold text-[#107acc]">0%</span>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div id="inPageProgressBar" class="bg-[#107acc] h-2 rounded-full transition-all duration-300" style="width: 0%"></div>
                </div>
                <!-- Extracted Badges -->
                <div id="inPageExtractedBadges" class="hidden pt-2 border-t border-blue-100 space-y-2">
                  <span class="text-[11px] font-bold text-slate-700 block">Extracted Competencies:</span>
                  <div class="flex flex-wrap gap-1.5">
                    <span class="px-2 py-0.5 rounded-md bg-blue-100 text-[#107acc] text-[11px] font-semibold pop-in">Hardware Diagnostics</span>
                    <span class="px-2 py-0.5 rounded-md bg-blue-100 text-[#107acc] text-[11px] font-semibold pop-in">TCP/IP Network</span>
                    <span class="px-2 py-0.5 rounded-md bg-blue-100 text-[#107acc] text-[11px] font-semibold pop-in">Windows Server AD</span>
                    <span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-semibold pop-in">5.5 Yrs Exp</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- STAGE SELECTION & CONFIGURABLE WORKFLOW -->
          <div class="p-6 rounded-2xl bg-white border-2 border-dashed border-slate-200 space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="text-sm font-bold text-slate-900">Configurable Assessment Stages</h4>
                <p class="text-xs text-slate-500 mt-0.5">Choose single stage or combine GradArena & Dwaani AI Interview into an automated funnel</p>
              </div>
              <span id="stageFunnelBadge" class="px-3 py-1 rounded-full text-xs font-bold bg-[#F0F7FD] text-[#107acc] border border-[#BDE0F8]">
                Combined 2-Stage Funnel
              </span>
            </div>

            <!-- Stage Toggles -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              
              <!-- Stage A: Dwaani AI Voice Interview -->
              <div id="cardStageDwaani" class="p-4 rounded-xl border-2 border-[#107acc] bg-[#F0F7FD]/40 transition space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-blue-100 text-[#107acc] flex items-center justify-center font-bold">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                    </div>
                    <div>
                      <span class="text-xs font-bold text-slate-900 block">Stage: Dwaani AI Voice Interview</span>
                      <span class="text-[10px] text-slate-500">Autonomous conversational screening</span>
                    </div>
                  </div>
                  <input type="checkbox" id="toggleDwaani" checked onchange="handleStageToggle()" class="w-5 h-5 rounded text-[#107acc] accent-[#107acc] cursor-pointer" />
                </div>
                <div class="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span class="text-slate-600 font-medium">Pass Threshold:</span>
                  <div class="flex items-center gap-1 font-mono">
                    <input type="number" id="thresholdDwaaniInput" value="70" min="1" max="100" class="w-14 px-2 py-1 rounded-lg border border-slate-200 text-center font-bold text-xs" />
                    <span>%</span>
                  </div>
                </div>
              </div>

              <!-- Stage B: GradArena Proctored Assessment -->
              <div id="cardStageGradarena" class="p-4 rounded-xl border-2 border-[#107acc] bg-[#F0F7FD]/40 transition space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-blue-100 text-[#107acc] flex items-center justify-center font-bold">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    </div>
                    <div>
                      <span class="text-xs font-bold text-slate-900 block">Stage: GradArena Proctored Assessment</span>
                      <span class="text-[10px] text-slate-500">Automated MCQ & coding evaluation</span>
                    </div>
                  </div>
                  <input type="checkbox" id="toggleGradarena" checked onchange="handleStageToggle()" class="w-5 h-5 rounded text-[#107acc] accent-[#107acc] cursor-pointer" />
                </div>
                <div class="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span class="text-slate-600 font-medium">Pass Threshold:</span>
                  <div class="flex items-center gap-1 font-mono">
                    <input type="number" id="thresholdGradarenaInput" value="60" min="1" max="100" class="w-14 px-2 py-1 rounded-lg border border-slate-200 text-center font-bold text-xs" />
                    <span>%</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- Sequence Ordering & Conditional Rules -->
            <div id="sequenceOrderingBlock" class="pt-3 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-800">Execution Sequence Order</label>
                <select id="stageSequenceOrderSelect" onchange="updateSequenceOrder(this.value)" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-700">
                  <option value="dwaani_first">1. Dwaani AI Interview ➔ 2. GradArena Assessment</option>
                  <option value="gradarena_first">1. GradArena Assessment ➔ 2. Dwaani AI Interview</option>
                </select>
              </div>

              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-800">If Candidate Fails Stage 1:</label>
                <select class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-700">
                  <option>Stop Workflow (Candidate Exits)</option>
                  <option>Hold for Manual Review by Recruiter</option>
                  <option>Allow Retest (1 Attempt Allowed)</option>
                </select>
              </div>
            </div>

          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-4 border-t border-slate-100 flex items-center justify-end">
            <button onclick="setCreationStep(2)" class="px-6 py-2.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5">
              <span>Next: Set Sections & Questions ➔</span>
            </button>
          </div>

        </div>

        <!-- ==================== STEP 2 CONTENT ==================== -->
        <div id="createStep-2" class="premium-card p-8 hidden space-y-6">
          
          <!-- Blue Gradient Banner: Generate Sections with JD -->
          <div class="p-6 rounded-2xl bg-gradient-to-r from-[#107acc] via-[#1283d9] to-[#2590e8] text-white flex items-center justify-between shadow-brand-glow">
            <div class="space-y-1">
              <h3 class="text-lg font-bold flex items-center gap-2">
                <span>AI Question Studio & Section Generator</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white">GPT-4o</span>
              </h3>
              <p class="text-xs text-blue-100">Let our AI analyze job descriptions and synthesize calibrated assessment questions automatically.</p>
              <div class="pt-3">
                <button onclick="openTestGenerateModal()" class="px-5 py-2.5 rounded-xl bg-white text-[#107acc] font-bold text-xs hover:bg-blue-50 transition flex items-center gap-1.5 shadow-sm">
                  <svg class="w-4 h-4 text-[#107acc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  Generate Now ➔
                </button>
              </div>
            </div>
            <div class="hidden sm:block opacity-90">
              <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
          </div>

          <!-- Section Tabs -->
          <div class="flex items-center gap-2 border-b border-slate-200 pb-2">
            <button class="px-4 py-2 rounded-lg bg-blue-50 text-[#107acc] font-bold text-xs border border-blue-200">
              Section 1: Hardware Support
            </button>
            <button class="px-4 py-2 rounded-lg text-slate-500 font-semibold text-xs hover:bg-slate-50 transition">
              + Add Section
            </button>
          </div>

          <!-- Section 1 Question List Preview -->
          <div class="space-y-3">
            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between">
              <div class="space-y-1">
                <span class="text-xs font-bold text-slate-800">Q1. Which of the following is typically the first step in troubleshooting a computer issue?</span>
                <span class="text-[11px] text-slate-500 block">Options: A) Replacing hardware • B) Gathering info (Correct) • C) Reinstalling OS</span>
              </div>
              <span class="px-2.5 py-1 rounded-md text-[10px] font-bold bg-blue-100 text-[#107acc]">1 MARK • EASY</span>
            </div>

            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between">
              <div class="space-y-1">
                <span class="text-xs font-bold text-slate-800">Q2. A user reports their printer is not printing. What is a common initial troubleshooting step?</span>
                <span class="text-[11px] text-slate-500 block">Options: A) Replace printer • B) Checking if powered and connected (Correct)</span>
              </div>
              <span class="px-2.5 py-1 rounded-md text-[10px] font-bold bg-amber-100 text-amber-800">1 MARK • MEDIUM</span>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-6 border-t border-slate-100 flex items-center justify-between">
            <button onclick="setCreationStep(1)" class="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition">
              Back to Architecture
            </button>
            <button onclick="setCreationStep(3)" class="px-6 py-2.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs">
              Next: Review & Confirm ➔
            </button>
          </div>

        </div>

        <!-- ==================== STEP 3 CONTENT ==================== -->
        <div id="createStep-3" class="premium-card p-8 hidden space-y-6">
          
          <div class="border-b border-slate-100 pb-4">
            <h2 class="text-xl font-bold text-slate-900">Blueprint Review & Confirmation</h2>
            <p class="text-xs text-slate-500 mt-1">Verify multi-stage execution rules, questions allocation, and pass thresholds before publishing.</p>
          </div>

          <!-- Multi-Stage Blueprint Summary Card -->
          <div class="p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 border border-[#BDE0F8] space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-[#107acc] uppercase tracking-wider">CONFIGURED EXECUTION FLOW</span>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">READY TO DEPLOY</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                <span class="text-[10px] font-bold text-slate-400 uppercase">STAGE 1</span>
                <span id="previewStage1Name" class="text-sm font-bold text-slate-900 block">Dwaani AI Voice Interview</span>
                <span id="previewStage1Pass" class="text-xs font-mono font-bold text-[#107acc]">Min 70% Pass Required</span>
              </div>

              <div class="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                <span class="text-[10px] font-bold text-slate-400 uppercase">STAGE 2</span>
                <span id="previewStage2Name" class="text-sm font-bold text-slate-900 block">GradArena Proctored Assessment</span>
                <span id="previewStage2Pass" class="text-xs font-mono font-bold text-[#107acc]">Min 60% Pass Required</span>
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-6 border-t border-slate-100 flex items-center justify-between">
            <button onclick="setCreationStep(2)" class="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition">
              Back to Sections
            </button>
            <div class="flex items-center gap-3">
              <button class="px-5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-xs font-bold hover:bg-slate-100 transition">
                Export Blueprint JSON
              </button>
              <button onclick="alert('Assessment pipeline published and live! Candidates can now be invited.'); switchScreen('tests');" class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-success-glow">
                Publish Assessment Live
              </button>
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
            <h2 class="text-xl font-bold text-slate-900 tracking-tight">Organization Assessments Library</h2>
            <p class="text-xs text-slate-500">Manage all assessment assets, stage sequencing, and candidate participation.</p>
          </div>
          <button onclick="switchScreen('test-create')" class="px-4 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab] transition flex items-center gap-1.5 shadow-xs">
            + Create New Assessment
          </button>
        </div>

        <!-- Tests Table -->
        <div class="premium-card overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50/80 text-slate-500 uppercase font-semibold border-b border-slate-100">
                <tr>
                  <th class="p-4 w-10"><input type="checkbox" class="rounded border-slate-300" /></th>
                  <th class="py-4 px-2">ASSESSMENT NAME</th>
                  <th class="py-4 px-2">CLIENT</th>
                  <th class="py-4 px-2">CREATED BY</th>
                  <th class="py-4 px-2">STAGES</th>
                  <th class="py-4 px-2">STATS</th>
                  <th class="py-4 px-2">STATUS</th>
                  <th class="py-4 px-4 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                
                <tr class="hover:bg-slate-50/80 transition">
                  <td class="p-4"><input type="checkbox" class="rounded border-slate-300" /></td>
                  <td class="py-4 px-2 font-bold text-slate-900 cursor-pointer hover:text-[#107acc]" onclick="switchScreen('test-detail')">
                    Hardware Support (Tier 1)
                  </td>
                  <td class="py-4 px-2 text-slate-600">WFM Enterprise</td>
                  <td class="py-4 px-2">
                    <span class="font-bold text-slate-800 block">P Hemachandra</span>
                    <span class="text-[10px] text-slate-400">TEST_CREATOR</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#107acc]">Dwaani ➔ GradArena</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="font-bold text-slate-900 block font-mono">1 Candidate</span>
                    <span class="text-[10px] text-rose-600 font-bold">0% Pass</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">PUBLISHED</span>
                  </td>
                  <td class="py-4 px-4 text-right">
                    <button onclick="switchScreen('test-detail')" class="text-[#107acc] font-bold hover:underline">View ➔</button>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/80 transition">
                  <td class="p-4"><input type="checkbox" class="rounded border-slate-300" /></td>
                  <td class="py-4 px-2 font-bold text-slate-900 cursor-pointer hover:text-[#107acc]" onclick="switchScreen('test-detail')">
                    LEAD generation Executive
                  </td>
                  <td class="py-4 px-2 text-slate-600">Niitaka Meru Pvt Ltd</td>
                  <td class="py-4 px-2">
                    <span class="font-bold text-slate-800 block">Madhuri ReddyShetty</span>
                    <span class="text-[10px] text-purple-700 font-bold">MANAGER</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">GradArena Proctored</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="font-bold text-slate-900 block font-mono">0 Candidates</span>
                    <span class="text-[10px] text-slate-400">N/A</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">PUBLISHED</span>
                  </td>
                  <td class="py-4 px-4 text-right">
                    <button onclick="switchScreen('test-detail')" class="text-[#107acc] font-bold hover:underline">View ➔</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 6: TEST BLUEPRINT DETAIL                              -->
      <!-- ============================================================ -->
      <div id="screen-test-detail" class="screen-view hidden space-y-6">
        
        <button onclick="switchScreen('tests')" class="text-xs font-bold text-slate-500 hover:text-[#107acc] flex items-center gap-1">
          ← Back to Tests Library
        </button>

        <!-- Test Header Blueprint -->
        <div class="premium-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2">
              <h2 class="text-xl font-bold text-slate-900">Hardware Support (Tier 1)</h2>
              <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">PUBLISHED</span>
            </div>
            <p class="text-xs text-slate-500 mt-1">Client: WFM Enterprise • Created by P Hemachandra • Multi-Stage Configured</p>
          </div>
          <div class="flex items-center gap-3">
            <button onclick="switchScreen('test-create')" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition">
              Edit Test
            </button>
            <button onclick="switchScreen('candidates')" class="px-4 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab] transition">
              View Candidates (1)
            </button>
          </div>
        </div>

        <!-- 3 Columns Blueprint -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="premium-card p-5 space-y-2">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">STAGE 1</span>
            <span class="text-sm font-bold text-slate-900 block">Dwaani AI Voice Interview</span>
            <span class="text-xs text-[#107acc] font-bold font-mono">Min 70% Pass Threshold</span>
          </div>

          <div class="premium-card p-5 space-y-2">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">STAGE 2</span>
            <span class="text-sm font-bold text-slate-900 block">GradArena Assessment</span>
            <span class="text-xs text-[#107acc] font-bold font-mono">Min 60% Pass Threshold</span>
          </div>

          <div class="premium-card p-5 space-y-2">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">FAILURE ACTION</span>
            <span class="text-sm font-bold text-slate-900 block">Stop Workflow</span>
            <span class="text-xs text-rose-600 font-bold">Candidate Exits Funnel</span>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 7: PENDING REVIEWS                                    -->
      <!-- ============================================================ -->
      <div id="screen-reviews" class="screen-view hidden space-y-6">
        
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-bold text-slate-900 tracking-tight">Assignment Review Requests</h2>
            <p class="text-xs text-slate-500">Submissions awaiting recruiter verification or proctoring flag resolution.</p>
          </div>
          <button class="px-4 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab] transition shadow-xs">
            Bulk Approve (3)
          </button>
        </div>

        <div class="premium-card p-6 space-y-4">
          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between">
            <div class="flex items-center gap-3.5">
              <img src="assets/candidate/avatar-kalyani.jpg" class="w-12 h-12 rounded-xl object-cover border border-slate-200" alt="Kalyani" />
              <div>
                <span class="text-xs font-bold text-slate-900 block">Kalyani Sundaram (ID: CAND-8842)</span>
                <span class="text-[11px] text-slate-500">Test: Hardware Support (Tier 1) • Score: 5%</span>
                <span class="text-[10px] font-bold text-rose-600 block mt-0.5">⚠️ Flagged: Multi-face suspect detected at 4:21 PM</span>
              </div>
            </div>
            <button onclick="switchScreen('candidate-detail')" class="px-4 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab] transition shadow-xs">
              Review Candidate Evaluation ➔
            </button>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 8: CANDIDATES TALENT POOL (WITH AVATARS)             -->
      <!-- ============================================================ -->
      <div id="screen-candidates" class="screen-view hidden space-y-6">
        
        <!-- Filter & Action Bar -->
        <div class="premium-card p-4 space-y-3">
          <div class="flex flex-wrap items-center justify-between gap-3">
            
            <div class="flex items-center gap-2">
              <button onclick="openResumeUploadModal()" class="px-4 py-2 rounded-xl bg-gradient-to-r from-[#107acc] to-[#38bdf8] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-brand-glow">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                UPLOAD & PARSE RESUMES
              </button>
              <button class="px-4 py-2 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-bold hover:bg-emerald-100 transition flex items-center gap-1.5 shadow-xs">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                EXPORT
              </button>
            </div>

            <div class="flex items-center gap-2">
              <input type="text" placeholder="Search candidate name or email..." class="w-64 px-4 py-2 rounded-xl border border-slate-200 text-xs bg-white" />
            </div>

          </div>
        </div>

        <!-- Candidates Table with Photos -->
        <div class="premium-card overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50/80 text-slate-500 uppercase font-semibold border-b border-slate-100">
                <tr>
                  <th class="p-4">CANDIDATE</th>
                  <th class="p-4">TEST NAME</th>
                  <th class="p-4">STATUS</th>
                  <th class="p-4">EMAIL</th>
                  <th class="p-4">ATTEMPT</th>
                  <th class="p-4">SCORE</th>
                  <th class="p-4 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                
                <tr class="hover:bg-slate-50/80 transition">
                  <td class="p-4 flex items-center gap-3">
                    <img src="assets/candidate/avatar-kalyani.jpg" class="w-9 h-9 rounded-xl object-cover border border-slate-200" alt="Kalyani" />
                    <span class="font-bold text-slate-900 cursor-pointer hover:text-[#107acc]" onclick="switchScreen('candidate-detail')">Kalyani Sundaram</span>
                  </td>
                  <td class="p-4 text-slate-700">Hardware Support (Tier 1)</td>
                  <td class="p-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-700">FAILED</span></td>
                  <td class="p-4 text-slate-500">kalyani@gaconsulting.in</td>
                  <td class="p-4 font-mono font-bold">#1</td>
                  <td class="p-4 font-mono font-bold text-rose-600">5 / 100</td>
                  <td class="p-4 text-right">
                    <button onclick="switchScreen('candidate-detail')" class="text-[#107acc] font-bold hover:underline">Evaluation Dossier ➔</button>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/80 transition">
                  <td class="p-4 flex items-center gap-3">
                    <img src="assets/candidate/avatar-nazeer.jpg" class="w-9 h-9 rounded-xl object-cover border border-slate-200" alt="Nazeer" />
                    <span class="font-bold text-slate-900">Nazeer Ahmed</span>
                  </td>
                  <td class="p-4 text-slate-700">Cloud & DevOps Architecture</td>
                  <td class="p-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">QUALIFIED</span></td>
                  <td class="p-4 text-slate-500">nazeer@gadigitalsolutions.com</td>
                  <td class="p-4 font-mono font-bold">#1</td>
                  <td class="p-4 font-mono font-bold text-emerald-600">92.5 / 100</td>
                  <td class="p-4 text-right">
                    <button onclick="switchScreen('candidate-detail')" class="text-[#107acc] font-bold hover:underline">View ➔</button>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/80 transition">
                  <td class="p-4 flex items-center gap-3">
                    <img src="assets/candidate/avatar-pramod.jpg" class="w-9 h-9 rounded-xl object-cover border border-slate-200" alt="Pramod" />
                    <span class="font-bold text-slate-900">Pramod Motupalli</span>
                  </td>
                  <td class="p-4 text-slate-700">Accountant & ERP</td>
                  <td class="p-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700">IN REVIEW</span></td>
                  <td class="p-4 text-slate-500">pramod@gaconsulting.com</td>
                  <td class="p-4 font-mono font-bold">#1</td>
                  <td class="p-4 font-mono font-bold text-amber-700">32.14 / 100</td>
                  <td class="p-4 text-right">
                    <button onclick="switchScreen('candidate-detail')" class="text-[#107acc] font-bold hover:underline">View ➔</button>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/80 transition">
                  <td class="p-4 flex items-center gap-3">
                    <img src="assets/candidate/avatar-manikanta.jpg" class="w-9 h-9 rounded-xl object-cover border border-slate-200" alt="Manikanta" />
                    <span class="font-bold text-slate-900">Manikanta Goud</span>
                  </td>
                  <td class="p-4 text-slate-700">Website Technologies</td>
                  <td class="p-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">QUALIFIED</span></td>
                  <td class="p-4 text-slate-500">manigoud@gmail.com</td>
                  <td class="p-4 font-mono font-bold">#1</td>
                  <td class="p-4 font-mono font-bold text-emerald-600">47.5 / 100</td>
                  <td class="p-4 text-right">
                    <button onclick="switchScreen('candidate-detail')" class="text-[#107acc] font-bold hover:underline">View ➔</button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 9: CANDIDATE EVALUATION DETAIL (WITH WEBCAM & MEDIA)  -->
      <!-- ============================================================ -->
      <div id="screen-candidate-detail" class="screen-view hidden space-y-6">
        
        <div class="flex items-center justify-between">
          <button onclick="switchScreen('candidates')" class="text-xs font-bold text-slate-500 hover:text-[#107acc] flex items-center gap-1">
            ← Back to Candidates Roster
          </button>
          <div class="flex items-center gap-2">
            <button class="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50">Share</button>
            <button class="px-4 py-1.5 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab]">PDF Report</button>
          </div>
        </div>

        <!-- Candidate Dossier Header -->
        <div class="premium-card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div class="flex items-center gap-4">
            <img src="assets/candidate/avatar-kalyani.jpg" class="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-card" alt="Kalyani" />
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <h3 class="text-lg font-bold text-slate-900">Kalyani Sundaram</h3>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700">ID: CAND-8842</span>
              </div>
              <p class="text-xs text-slate-500">
                Overall Score: <strong class="text-rose-600 font-mono">5%</strong> • Attempt: <strong>#1</strong> • Started: Oct 7, 2026, 4:03 PM
              </p>
              <p class="text-[11px] text-slate-400">Completed in 20m 23s • Assessment: Hardware Support (Tier 1)</p>
            </div>
          </div>

          <!-- Tilted FAILED Stamp -->
          <div class="px-5 py-2 border-2 border-rose-500 rounded-xl text-rose-600 font-bold text-sm tracking-widest transform rotate-6 uppercase">
            FAILED
          </div>
        </div>

        <!-- Proctoring Timeline (8 Real Webcam Snapshots) -->
        <div class="premium-card p-6 space-y-4">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-slate-900">Proctoring Timeline</span>
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#107acc]">PRIMARY CAMERA • 8 SHOTS</span>
            </div>
            <div class="flex items-center gap-3 text-xs">
              <span class="text-emerald-600 font-bold">● Normal</span>
              <span class="text-amber-600 font-bold">● Caution</span>
              <span class="text-rose-600 font-bold">● Flagged</span>
            </div>
          </div>

          <!-- 8 Photos Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            
            <div class="space-y-1">
              <div class="relative rounded-xl overflow-hidden border-2 border-emerald-500 shadow-xs">
                <img src="assets/candidate/webcam-1.jpg" class="w-full h-20 object-cover" />
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute top-1.5 left-1.5"></span>
              </div>
              <span class="text-[10px] text-slate-400 block text-center font-mono">4:03:00 PM</span>
            </div>

            <div class="space-y-1">
              <div class="relative rounded-xl overflow-hidden border-2 border-emerald-500 shadow-xs">
                <img src="assets/candidate/webcam-2.jpg" class="w-full h-20 object-cover" />
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute top-1.5 left-1.5"></span>
              </div>
              <span class="text-[10px] text-slate-400 block text-center font-mono">4:05:08 PM</span>
            </div>

            <div class="space-y-1">
              <div class="relative rounded-xl overflow-hidden border-2 border-emerald-500 shadow-xs">
                <img src="assets/candidate/webcam-3.jpg" class="w-full h-20 object-cover" />
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute top-1.5 left-1.5"></span>
              </div>
              <span class="text-[10px] text-slate-400 block text-center font-mono">4:09:16 PM</span>
            </div>

            <div class="space-y-1">
              <div class="relative rounded-xl overflow-hidden border-2 border-amber-500 shadow-xs">
                <img src="assets/candidate/webcam-4.jpg" class="w-full h-20 object-cover" />
                <span class="w-2.5 h-2.5 rounded-full bg-amber-500 absolute top-1.5 left-1.5"></span>
              </div>
              <span class="text-[10px] text-amber-600 font-bold block text-center font-mono">4:13:24 PM</span>
            </div>

            <div class="space-y-1">
              <div class="relative rounded-xl overflow-hidden border-2 border-emerald-500 shadow-xs">
                <img src="assets/candidate/webcam-5.jpg" class="w-full h-20 object-cover" />
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute top-1.5 left-1.5"></span>
              </div>
              <span class="text-[10px] text-slate-400 block text-center font-mono">4:17:32 PM</span>
            </div>

            <div class="space-y-1">
              <div class="relative rounded-xl overflow-hidden border-2 border-rose-500 shadow-xs">
                <img src="assets/candidate/webcam-6.jpg" class="w-full h-20 object-cover" />
                <span class="w-2.5 h-2.5 rounded-full bg-rose-500 absolute top-1.5 left-1.5 animate-pulse"></span>
              </div>
              <span class="text-[10px] text-rose-600 font-bold block text-center font-mono">4:21:40 PM</span>
            </div>

            <div class="space-y-1">
              <div class="relative rounded-xl overflow-hidden border-2 border-emerald-500 shadow-xs">
                <img src="assets/candidate/webcam-7.jpg" class="w-full h-20 object-cover" />
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute top-1.5 left-1.5"></span>
              </div>
              <span class="text-[10px] text-slate-400 block text-center font-mono">4:22:48 PM</span>
            </div>

            <div class="space-y-1">
              <div class="relative rounded-xl overflow-hidden border-2 border-emerald-500 shadow-xs">
                <img src="assets/candidate/webcam-8.jpg" class="w-full h-20 object-cover" />
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute top-1.5 left-1.5"></span>
              </div>
              <span class="text-[10px] text-slate-400 block text-center font-mono">4:23:56 PM</span>
            </div>

          </div>
        </div>

        <!-- Mid Exam Verification Media (Room Scan Video + Audio) -->
        <div class="premium-card p-6 space-y-4">
          <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">Mid Exam Verification Media</h4>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <!-- Video Player -->
            <div class="space-y-2">
              <span class="text-xs font-bold text-slate-700 block">📹 360° Room Scan Video (15s)</span>
              <div class="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                <img src="assets/candidate/room-scan.jpg" class="w-full h-44 object-cover opacity-80" alt="Room Scan" />
                <div class="absolute inset-0 flex items-center justify-center">
                  <button class="w-12 h-12 rounded-full bg-white/90 text-[#107acc] flex items-center justify-center shadow-lg hover:scale-110 transition">
                    ▶
                  </button>
                </div>
                <div class="absolute bottom-2 left-3 right-3 text-[10px] font-mono text-white flex justify-between bg-black/60 px-2.5 py-1 rounded-lg">
                  <span>0:00 / 0:16</span>
                  <span>1080p HD</span>
                </div>
              </div>
            </div>

            <!-- Voice Player -->
            <div class="space-y-2">
              <span class="text-xs font-bold text-slate-700 block">🎙️ Candidate Voice Verification (10s)</span>
              <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3">
                <button class="w-10 h-10 rounded-xl bg-[#107acc] text-white flex items-center justify-center font-bold shadow-xs">
                  ▶
                </button>
                <div class="flex-1 space-y-1">
                  <div class="w-full bg-slate-200 rounded-full h-2">
                    <div class="bg-[#107acc] h-2 rounded-full" style="width: 35%"></div>
                  </div>
                  <span class="text-[10px] text-slate-400 font-mono">0:03 / 0:10 • Audio biometric match verified</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- AI Concept Analysis -->
        <div class="premium-card p-6 bg-purple-50/40 border border-purple-200 space-y-2">
          <span class="text-xs font-bold text-purple-900 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-purple-600"></span> AI Concept Analysis
          </span>
          <p class="text-xs text-purple-950 leading-relaxed font-mono">
            { "summary": "The candidate demonstrates significant weaknesses in fundamental IT support and troubleshooting methodologies, including initial diagnostic steps, software management, and documentation. Recommended for hardware tier-1 re-training." }
          </p>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 10: MESSAGES HUB                                      -->
      <!-- ============================================================ -->
      <div id="screen-chat" class="screen-view hidden space-y-6">
        
        <div class="premium-card h-[640px] flex overflow-hidden">
          
          <!-- Contact List (1/3) -->
          <div class="w-80 border-r border-slate-200/90 flex flex-col justify-between bg-slate-50/50">
            <div>
              <div class="p-4 border-b border-slate-200/80">
                <input type="text" placeholder="Search chats..." class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white" />
              </div>
              <div class="divide-y divide-slate-100">
                <div class="p-3.5 bg-white border-l-4 border-[#107acc] flex items-center gap-3 cursor-pointer">
                  <img src="assets/creators/creator-hemachandra.jpg" class="w-10 h-10 rounded-xl object-cover" />
                  <div class="flex-1 overflow-hidden">
                    <div class="flex justify-between items-center">
                      <span class="text-xs font-bold text-slate-900 truncate">P Hemachandra</span>
                      <span class="text-[10px] text-slate-400 font-mono">4:12 PM</span>
                    </div>
                    <span class="text-[11px] text-slate-500 truncate block">Candidate Kalyani review flagged.</span>
                  </div>
                </div>

                <div class="p-3.5 hover:bg-slate-50 flex items-center gap-3 cursor-pointer">
                  <img src="assets/creators/creator-madhuri.jpg" class="w-10 h-10 rounded-xl object-cover" />
                  <div class="flex-1 overflow-hidden">
                    <div class="flex justify-between items-center">
                      <span class="text-xs font-bold text-slate-900 truncate">Madhuri ReddyShetty</span>
                      <span class="text-[10px] text-slate-400 font-mono">Yesterday</span>
                    </div>
                    <span class="text-[11px] text-slate-500 truncate block">Published LEAD generation test.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Chat Conversation (2/3) -->
          <div class="flex-1 flex flex-col justify-between bg-white">
            
            <!-- Chat Header -->
            <div class="p-4 border-b border-slate-100 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img src="assets/creators/creator-hemachandra.jpg" class="w-9 h-9 rounded-xl object-cover" />
                <div>
                  <span class="text-xs font-bold text-slate-900 block">P Hemachandra</span>
                  <span class="text-[10px] text-emerald-600 font-bold">● Active Now</span>
                </div>
              </div>
            </div>

            <!-- Messages Area -->
            <div id="chatMessageArea" class="flex-1 p-6 space-y-4 overflow-y-auto custom-scrollbar">
              <div class="flex flex-col items-start max-w-sm">
                <div class="p-3 rounded-2xl bg-slate-100 text-xs text-slate-800">
                  Hi Rajini, please inspect candidate Kalyani Sundaram on Tier-1 Hardware Support. The camera recorded multi-face activity.
                </div>
                <span class="text-[10px] text-slate-400 mt-1">4:12 PM</span>
              </div>
            </div>

            <!-- Chat Input -->
            <div class="p-4 border-t border-slate-100 flex items-center gap-2">
              <input id="chatInputBox" type="text" placeholder="Type a message to recruiter..." class="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" onkeypress="if(event.key==='Enter') sendChatMessage()" />
              <button onclick="sendChatMessage()" class="px-5 py-2.5 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab] transition">
                Send
              </button>
            </div>

          </div>

        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 11: TICKETS & SUPPORT                                 -->
      <!-- ============================================================ -->
      <div id="screen-tickets" class="screen-view hidden space-y-6">
        <div class="premium-card p-6 space-y-4">
          <h2 class="text-xl font-bold text-slate-900 tracking-tight">Organization Support Tickets</h2>
          <p class="text-xs text-slate-500">Track candidate technical appeals and proctoring review petitions.</p>
          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex justify-between items-center">
            <div>
              <span class="text-xs font-bold text-slate-900 block">TICK-1092: Candidate appeal for webcam disconnect</span>
              <span class="text-[11px] text-slate-500">Filed by Kalyani Sundaram • Status: In Review</span>
            </div>
            <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">HIGH PRIORITY</span>
          </div>
        </div>
      </div>

    </main>

  </div>

  <!-- =================================================================== -->
  <!-- MODAL 1: AI RESUME UPLOAD & PARSING STUDIO (ANIMATED LIFECYCLE)     -->
  <!-- =================================================================== -->
  <div id="modal-resume-parser" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden transform transition-all">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900">AI Resume Upload & Skill Parsing Studio</h3>
            <p class="text-xs text-slate-500">Upload candidate resumes for automated OCR, skills extraction, and role benchmark scoring</p>
          </div>
        </div>
        <button onclick="closeResumeUploadModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">✕</button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 space-y-5">
        
        <div id="resumeDropArea" class="border-2 border-dashed border-slate-200 hover:border-[#107acc] rounded-2xl p-6 text-center bg-slate-50/60 hover:bg-blue-50/30 transition cursor-pointer" onclick="startResumeAnimation('Kalyani_Lead_IT_Support.pdf', 1.4)">
          <div class="flex flex-col items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-blue-100 text-[#107acc] flex items-center justify-center">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            </div>
            <div>
              <span class="text-sm font-bold text-slate-800 block">Drag and drop resume here, or click to upload</span>
              <span class="text-xs text-slate-500 block mt-1">Supports PDF, DOCX, TXT up to 10MB</span>
            </div>
            <div class="flex items-center gap-2 pt-2">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick Sample:</span>
              <button type="button" onclick="event.stopPropagation(); startResumeAnimation('Kalyani_Lead_IT_Support.pdf', 1.4);" class="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#107acc]">
                📄 Kalyani.pdf
              </button>
              <button type="button" onclick="event.stopPropagation(); startResumeAnimation('Nazeer_DevOps_Architect.docx', 2.1);" class="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#107acc]">
                📄 Nazeer.docx
              </button>
            </div>
          </div>
        </div>

        <!-- Animated Scanning Area -->
        <div id="resumeScanningArea" class="hidden space-y-4">
          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center font-bold text-xs">PDF</div>
              <div>
                <span id="scanFileName" class="text-xs font-bold text-slate-900 block">Kalyani_Lead_IT_Support.pdf</span>
                <span id="scanFileSize" class="text-[11px] text-slate-500">1.4 MB • Uploaded just now</span>
              </div>
            </div>
            <span id="scanPercentage" class="text-sm font-mono font-bold text-[#107acc]">0%</span>
          </div>

          <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div id="scanProgressBar" class="bg-[#107acc] h-2.5 rounded-full transition-all duration-300" style="width: 0%"></div>
          </div>

          <!-- Laser Scan Terminal -->
          <div class="relative bg-slate-900 text-white p-4 rounded-xl overflow-hidden font-mono text-xs">
            <div id="laserBeam" class="animate-laser"></div>
            <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 text-[10px] text-slate-400">
              <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> AI NEURAL OCR & ENTITY PARSER</span>
              <span id="scanStepBadge" class="text-emerald-400 font-bold">STAGE 1: SCANNING TEXT</span>
            </div>
            <div id="scanLogArea" class="space-y-1 text-[11px] h-24 overflow-hidden text-slate-300">
              <div>[0.12s] Connecting to GradArena High-Speed OCR Pipeline...</div>
            </div>
          </div>

          <!-- Results -->
          <div id="scanResultsArea" class="hidden space-y-4 pt-2">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div class="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60 flex items-center gap-3">
                <div class="relative w-12 h-12 flex items-center justify-center">
                  <svg class="w-12 h-12 transform -rotate-90">
                    <circle cx="24" cy="24" r="20" stroke="#CBD5E1" stroke-width="4" fill="transparent" />
                    <circle id="matchScoreCircle" cx="24" cy="24" r="20" stroke="#16A34A" stroke-width="4" stroke-dasharray="125.6" stroke-dashoffset="125.6" fill="transparent" class="transition-all duration-1000 ease-out" />
                  </svg>
                  <span id="matchScoreText" class="absolute text-xs font-bold text-emerald-700">0%</span>
                </div>
                <div>
                  <span class="text-[10px] font-bold text-emerald-800 uppercase block">ROLE BENCHMARK</span>
                  <span class="text-xs font-bold text-emerald-900">High Match Fit</span>
                </div>
              </div>

              <div class="p-3.5 rounded-xl border border-slate-200 bg-white">
                <span class="text-[10px] font-bold text-slate-400 uppercase block">CANDIDATE</span>
                <span class="text-xs font-bold text-slate-900 block truncate">Kalyani Sundaram</span>
                <span class="text-[11px] text-slate-500">5.5 Years Exp • Tier-1 Lead</span>
              </div>

              <div class="p-3.5 rounded-xl border border-slate-200 bg-white">
                <span class="text-[10px] font-bold text-slate-400 uppercase block">RECOMMENDED TEST</span>
                <span class="text-xs font-bold text-[#107acc] block truncate">Hardware Support (Tier 1)</span>
                <span class="text-[11px] text-slate-500">Dwaani + GradArena Flow</span>
              </div>
            </div>

            <div class="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <span class="text-xs font-bold text-slate-800 block">Extracted Skill & Competency Tags (9 Found):</span>
              <div class="flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Hardware Diagnostics</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">TCP/IP Network Config</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Windows Server & AD</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Helpdesk SLA</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Bash & PowerShell</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <button onclick="resetResumeModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition">
          Reset / Upload Another
        </button>
        <div class="flex items-center gap-2">
          <button onclick="closeResumeUploadModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition">Close</button>
          <button onclick="addCandidateToRosterFromResume()" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs">Add Candidate to Talent Pool</button>
        </div>
      </div>

    </div>
  </div>

  <!-- =================================================================== -->
  <!-- MODAL 2: AI TEST & QUESTION GENERATION ENGINE (ANIMATED LIFECYCLE)  -->
  <!-- =================================================================== -->
  <div id="modal-test-generator" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden transform transition-all">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-blue-50/50 via-white to-indigo-50/30">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-[#107acc] text-white flex items-center justify-center shadow-xs">⚡</div>
          <div>
            <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
              AI Question Studio & Test Generator
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-[#107acc]">GPT-4o + Dwaani</span>
            </h3>
            <p class="text-xs text-slate-500">Synthesizing calibrated MCQ sections, diagnostic scenarios, and AI voice rubrics</p>
          </div>
        </div>
        <button onclick="closeTestGenerateModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">✕</button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 space-y-5">
        
        <!-- 4-Node Pipeline Tracker -->
        <div class="grid grid-cols-4 gap-2 text-center text-xs">
          <div id="genNode-1" class="p-2.5 rounded-xl border border-[#107acc] bg-blue-50 text-[#107acc] font-bold transition">
            <div id="nodeIcon-1" class="w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center">1</div>
            <span class="text-[11px] block">Role Taxonomy</span>
          </div>
          <div id="genNode-2" class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 font-semibold transition">
            <div id="nodeIcon-2" class="w-5 h-5 mx-auto mb-1 rounded-full bg-slate-200 text-slate-600 text-[10px] flex items-center justify-center">2</div>
            <span class="text-[11px] block">Section Design</span>
          </div>
          <div id="genNode-3" class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 font-semibold transition">
            <div id="nodeIcon-3" class="w-5 h-5 mx-auto mb-1 rounded-full bg-slate-200 text-slate-600 text-[10px] flex items-center justify-center">3</div>
            <span class="text-[11px] block">Question Synth</span>
          </div>
          <div id="genNode-4" class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 font-semibold transition">
            <div id="nodeIcon-4" class="w-5 h-5 mx-auto mb-1 rounded-full bg-slate-200 text-slate-600 text-[10px] flex items-center justify-center">4</div>
            <span class="text-[11px] block">Dwaani Voice</span>
          </div>
        </div>

        <!-- Progress -->
        <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
          <div class="flex items-center justify-between">
            <span id="genStatusText" class="text-xs font-bold text-slate-800 flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-[#107acc] animate-ping"></span> Analyzing role taxonomy: "Lead IT Support Engineer"...
            </span>
            <span id="genQuestionsCount" class="text-xs font-mono font-bold text-[#107acc]">Questions: 0 / 25</span>
          </div>
          <div class="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div id="genProgressBar" class="bg-[#107acc] h-2 rounded-full transition-all duration-300" style="width: 5%"></div>
          </div>
        </div>

        <!-- Live Question Stream -->
        <div class="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div class="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
            <span class="font-mono font-bold text-slate-700">LIVE GENERATION STREAM</span>
            <span id="genSectionTag" class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-[#107acc]">SECTION 1: HARDWARE SUPPORT</span>
          </div>
          <div class="p-4 space-y-3 font-mono text-xs">
            <p id="genQuestionText" class="text-slate-800 leading-relaxed font-semibold">
              Extracting Blooms cognitive taxonomy standards for Hardware Tier-1 & Tier-2 competencies...
            </p>
            <div id="genOptionsList" class="space-y-1.5 pl-2 text-slate-600">
              <div class="text-slate-400">Parsing 24 core knowledge dimensions...</div>
            </div>
          </div>
        </div>

        <!-- Sections Preview Grid -->
        <div id="genSectionsGrid" class="hidden space-y-2 pt-1">
          <span class="text-xs font-bold text-slate-800 block">Synthesized Assessment Blueprint:</span>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div class="p-3 rounded-xl border border-blue-200 bg-blue-50/50 space-y-1">
              <span class="text-[10px] font-bold text-[#107acc] uppercase block">SECTION 1</span>
              <span class="font-bold text-slate-800 block">Hardware Diagnostics</span>
              <span class="text-[11px] text-slate-500 block">10 MCQs • 20 Marks</span>
            </div>
            <div class="p-3 rounded-xl border border-blue-200 bg-blue-50/50 space-y-1">
              <span class="text-[10px] font-bold text-[#107acc] uppercase block">SECTION 2</span>
              <span class="font-bold text-slate-800 block">Network & Windows AD</span>
              <span class="text-[11px] text-slate-500 block">10 MCQs • 20 Marks</span>
            </div>
            <div class="p-3 rounded-xl border border-purple-200 bg-purple-50/50 space-y-1">
              <span class="text-[10px] font-bold text-purple-700 uppercase block">SECTION 3 (DWAANI)</span>
              <span class="font-bold text-slate-800 block">Live Voice Scenarios</span>
              <span class="text-[11px] text-slate-500 block">5 Voice Prompts • 10 Marks</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <button onclick="startTestGenerateAnimation()" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition flex items-center gap-1.5">
          Regenerate
        </button>
        <div class="flex items-center gap-2">
          <button onclick="closeTestGenerateModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition">Close</button>
          <button id="btnApplyGeneratedTest" onclick="applyGeneratedTestBlueprint()" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 opacity-50 cursor-not-allowed" disabled>
            <span>Apply Blueprint & View Questions ➔</span>
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- Client-side controllers -->
  <script>
    const screenTitles = {
      'dashboard': { title: 'Dashboard', subtitle: 'Real-time candidate intelligence & assessment telemetry', icon: '📊' },
      'creators': { title: 'Manage Test Creators', subtitle: 'Manage organizational permissions, test ownership & evaluation volume', icon: '👥' },
      'creator-detail': { title: 'Test Creator Profile', subtitle: 'Detailed activity, turnaround speed, and assigned organization tests', icon: '👤' },
      'test-create': { title: 'Test Creation & AI Question Studio', subtitle: 'Design multi-stage assessment pipelines with Dwaani Voice and GradArena', icon: '⚡' },
      'tests': { title: 'Tests Library', subtitle: 'Manage organization assessment assets and view participation statistics', icon: '📄' },
      'test-detail': { title: 'Assessment Blueprint Details', subtitle: 'Configuration blueprint, question catalog, and candidate conversion stats', icon: '📋' },
      'reviews': { title: 'Pending Reviews', subtitle: 'Candidate submissions awaiting recruiter approval or proctoring verification', icon: '⏳' },
      'candidates': { title: 'Candidates Talent Pool', subtitle: 'Comprehensive candidate roster with AI match scores and status filtering', icon: '🎯' },
      'candidate-detail': { title: 'Candidate Evaluation Dossier', subtitle: 'Proctoring timeline webcam captures, audio/video scan, and AI diagnostic score', icon: '🔍' },
      'chat': { title: 'Messages & Communication', subtitle: 'Real-time collaboration between managers, recruiters, and test creators', icon: '💬' },
      'tickets': { title: 'Tickets & Support', subtitle: 'Organization support issues, candidate technical appeals, and proctoring disputes', icon: '🎫' },
    };

    function switchScreen(screenId) {
      document.querySelectorAll('.screen-view').forEach(s => s.classList.add('hidden'));
      const target = document.getElementById('screen-' + screenId);
      if (target) target.classList.remove('hidden');

      // Update nav active states
      document.querySelectorAll('aside nav button').forEach(b => {
        b.className = 'w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition';
      });
      const activeNav = document.getElementById('nav-' + screenId);
      if (activeNav) {
        activeNav.className = 'w-full flex items-center justify-between px-3.5 py-3 nav-item-active transition';
      }

      // Update titles
      const meta = screenTitles[screenId] || { title: 'GradArena Platform', subtitle: '', icon: '⚡' };
      const titleEl = document.getElementById('screenTitle');
      const subEl = document.getElementById('screenSubtitle');
      const iconEl = document.getElementById('breadcrumbIcon');
      if (titleEl) titleEl.textContent = meta.title;
      if (subEl) subEl.textContent = meta.subtitle;
      if (iconEl) iconEl.textContent = meta.icon;

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function setCreationStep(step) {
      document.getElementById('createStep-1').classList.add('hidden');
      document.getElementById('createStep-2').classList.add('hidden');
      document.getElementById('createStep-3').classList.add('hidden');

      const activeEl = document.getElementById('createStep-' + step);
      if (activeEl) activeEl.classList.remove('hidden');

      for (let i = 1; i <= 3; i++) {
        const circle = document.getElementById('stepCircle-' + i);
        const label = document.getElementById('stepLabel-' + i);
        if (circle && label) {
          if (i === step) {
            circle.className = 'w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#107acc] to-[#38bdf8] text-white flex items-center justify-center font-bold text-sm shadow-brand-glow transition';
            label.className = 'text-xs font-bold text-[#107acc]';
          } else if (i < step) {
            circle.className = 'w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold text-sm transition';
            circle.innerHTML = '✓';
            label.className = 'text-xs font-semibold text-slate-600';
          } else {
            circle.className = 'w-10 h-10 rounded-2xl bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm transition';
            circle.innerHTML = i;
            label.className = 'text-xs font-semibold text-slate-400';
          }
        }
      }

      const line1 = document.getElementById('stepLine-1');
      const line2 = document.getElementById('stepLine-2');
      if (line1) line1.style.backgroundColor = step > 1 ? '#107acc' : '#E2E8F0';
      if (line2) line2.style.backgroundColor = step > 2 ? '#107acc' : '#E2E8F0';
    }

    function switchIntakeTab(tab) {
      const btnLink = document.getElementById('tabBtn-jobLink');
      const btnResume = document.getElementById('tabBtn-resumeUpload');
      const contentLink = document.getElementById('tabContent-jobLink');
      const contentResume = document.getElementById('tabContent-resume');

      if (tab === 'link') {
        btnLink.className = 'px-4 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold transition shadow-xs';
        btnResume.className = 'px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:text-[#107acc] text-xs font-bold transition';
        contentLink.classList.remove('hidden');
        contentResume.classList.add('hidden');
      } else {
        btnResume.className = 'px-4 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold transition shadow-xs';
        btnLink.className = 'px-4 py-2 rounded-xl bg-slate-100 text-slate-600 hover:text-[#107acc] text-xs font-bold transition';
        contentResume.classList.remove('hidden');
        contentLink.classList.add('hidden');
      }
    }

    function triggerInPageResumeScan(filename, sizeMb) {
      const card = document.getElementById('inPageScanCard');
      const bar = document.getElementById('inPageProgressBar');
      const pct = document.getElementById('inPagePercent');
      const status = document.getElementById('inPageFileStatus');
      const badges = document.getElementById('inPageExtractedBadges');
      const nameEl = document.getElementById('inPageFileName');

      if (nameEl) nameEl.textContent = filename;
      card.classList.remove('hidden');
      badges.classList.add('hidden');
      bar.style.width = '0%';
      pct.textContent = '0%';
      status.textContent = 'Uploading ' + filename + ' (' + sizeMb + ' MB)...';

      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress > 100) progress = 100;
        bar.style.width = progress + '%';
        pct.textContent = progress + '%';

        if (progress === 30) status.textContent = 'Executing Neural OCR text extraction...';
        else if (progress === 60) status.textContent = 'Identifying domain skills & experience...';
        else if (progress === 90) status.textContent = 'Mapping competencies to assessment blueprint...';
        else if (progress === 100) {
          clearInterval(interval);
          status.textContent = 'Parsing complete! Auto-filled test parameters.';
          badges.classList.remove('hidden');
        }
      }, 100);
    }

    function handleStageToggle() {
      const dwaani = document.getElementById('toggleDwaani').checked;
      const grad = document.getElementById('toggleGradarena').checked;
      const orderBlock = document.getElementById('sequenceOrderingBlock');
      const badge = document.getElementById('stageFunnelBadge');

      if (dwaani && grad) {
        orderBlock.classList.remove('hidden');
        badge.textContent = 'Combined 2-Stage Funnel';
        badge.className = 'px-3 py-1 rounded-full text-xs font-bold bg-[#F0F7FD] text-[#107acc] border border-[#BDE0F8]';
      } else if (dwaani) {
        orderBlock.classList.add('hidden');
        badge.textContent = 'Single Stage: Dwaani AI Voice Interview';
        badge.className = 'px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200';
      } else if (grad) {
        orderBlock.classList.add('hidden');
        badge.textContent = 'Single Stage: GradArena Assessment';
        badge.className = 'px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200';
      } else {
        document.getElementById('toggleGradarena').checked = true;
        handleStageToggle();
      }
    }

    function updateSequenceOrder(val) {
      const p1 = document.getElementById('previewStage1Name');
      const p2 = document.getElementById('previewStage2Name');
      const pass1 = document.getElementById('previewStage1Pass');
      const pass2 = document.getElementById('previewStage2Pass');
      const dwThresh = document.getElementById('thresholdDwaaniInput').value;
      const grThresh = document.getElementById('thresholdGradarenaInput').value;

      if (val === 'dwaani_first') {
        if (p1) p1.textContent = 'Dwaani AI Voice Interview';
        if (p2) p2.textContent = 'GradArena Proctored Assessment';
        if (pass1) pass1.textContent = 'Min ' + dwThresh + '% Pass Required';
        if (pass2) pass2.textContent = 'Min ' + grThresh + '% Pass Required';
      } else {
        if (p1) p1.textContent = 'GradArena Proctored Assessment';
        if (p2) p2.textContent = 'Dwaani AI Voice Interview';
        if (pass1) pass1.textContent = 'Min ' + grThresh + '% Pass Required';
        if (pass2) pass2.textContent = 'Min ' + dwThresh + '% Pass Required';
      }
    }

    function openResumeUploadModal() {
      document.getElementById('modal-resume-parser').classList.remove('hidden');
      resetResumeModal();
    }

    function closeResumeUploadModal() {
      document.getElementById('modal-resume-parser').classList.add('hidden');
    }

    function resetResumeModal() {
      document.getElementById('resumeDropArea').classList.remove('hidden');
      document.getElementById('resumeScanningArea').classList.add('hidden');
      document.getElementById('scanResultsArea').classList.add('hidden');
      const bar = document.getElementById('scanProgressBar');
      if (bar) bar.style.width = '0%';
      const pct = document.getElementById('scanPercentage');
      if (pct) pct.textContent = '0%';
      const circle = document.getElementById('matchScoreCircle');
      if (circle) circle.style.strokeDashoffset = '125.6';
    }

    function startResumeAnimation(filename, sizeMb) {
      document.getElementById('resumeDropArea').classList.add('hidden');
      document.getElementById('resumeScanningArea').classList.remove('hidden');
      document.getElementById('scanFileName').textContent = filename;
      document.getElementById('scanFileSize').textContent = sizeMb + ' MB • Uploaded just now';
      
      const bar = document.getElementById('scanProgressBar');
      const pct = document.getElementById('scanPercentage');
      const logArea = document.getElementById('scanLogArea');
      const stepBadge = document.getElementById('scanStepBadge');
      const resultsArea = document.getElementById('scanResultsArea');
      const scoreCircle = document.getElementById('matchScoreCircle');
      const scoreText = document.getElementById('matchScoreText');

      logArea.innerHTML = '<div>[0.10s] Ingesting binary document payload (' + sizeMb + ' MB)...</div>';

      let p = 0;
      const timer = setInterval(() => {
        p += 5;
        if (p > 100) p = 100;
        bar.style.width = p + '%';
        pct.textContent = p + '%';

        if (p === 20) {
          stepBadge.textContent = 'STAGE 2: OCR TEXT ANALYSIS';
          logArea.innerHTML += '<div>[0.45s] Text layer verified: 4,120 clean characters parsed.</div>';
          logArea.scrollTop = logArea.scrollHeight;
        } else if (p === 45) {
          stepBadge.textContent = 'STAGE 3: EXTRACTING ENTITIES';
          logArea.innerHTML += '<div>[0.92s] Identified Candidate: Kalyani Sundaram (kalyani@gaconsulting.in)</div>';
          logArea.innerHTML += '<div>[1.15s] Experience confirmed: 5.5 Years @ WFM Enterprise IT</div>';
          logArea.scrollTop = logArea.scrollHeight;
        } else if (p === 75) {
          stepBadge.textContent = 'STAGE 4: BENCHMARK ROLE FIT';
          logArea.innerHTML += '<div>[1.65s] Benchmarking against "Hardware Support (Tier 1)" matrix...</div>';
          logArea.scrollTop = logArea.scrollHeight;
        } else if (p === 100) {
          clearInterval(timer);
          stepBadge.textContent = 'STAGE 5: COMPLETE';
          logArea.innerHTML += '<div>[2.10s] Fit score calibrated at 89%. Profile ready for test allocation.</div>';
          logArea.scrollTop = logArea.scrollHeight;
          resultsArea.classList.remove('hidden');

          setTimeout(() => {
            if (scoreCircle) scoreCircle.style.strokeDashoffset = '13.8';
            if (scoreText) scoreText.textContent = '89%';
          }, 150);
        }
      }, 70);
    }

    function addCandidateToRosterFromResume() {
      alert('Candidate "Kalyani Sundaram" successfully added to the candidate talent pool with an 89% benchmark fit score!');
      closeResumeUploadModal();
      switchScreen('candidates');
    }

    function openTestGenerateModal() {
      document.getElementById('modal-test-generator').classList.remove('hidden');
      startTestGenerateAnimation();
    }

    function closeTestGenerateModal() {
      document.getElementById('modal-test-generator').classList.add('hidden');
    }

    function startTestGenerateAnimation() {
      const bar = document.getElementById('genProgressBar');
      const statusText = document.getElementById('genStatusText');
      const countEl = document.getElementById('genQuestionsCount');
      const questionText = document.getElementById('genQuestionText');
      const optionsList = document.getElementById('genOptionsList');
      const sectionTag = document.getElementById('genSectionTag');
      const sectionsGrid = document.getElementById('genSectionsGrid');
      const applyBtn = document.getElementById('btnApplyGeneratedTest');

      bar.style.width = '5%';
      countEl.textContent = 'Questions: 0 / 25';
      sectionsGrid.classList.add('hidden');
      applyBtn.disabled = true;
      applyBtn.className = 'px-5 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold transition shadow-xs opacity-50 cursor-not-allowed';

      for (let n = 1; n <= 4; n++) {
        const el = document.getElementById('genNode-' + n);
        const icon = document.getElementById('nodeIcon-' + n);
        if (n === 1) {
          el.className = 'p-2.5 rounded-xl border border-[#107acc] bg-blue-50 text-[#107acc] font-bold transition';
          icon.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center';
          icon.textContent = '1';
        } else {
          el.className = 'p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 font-semibold transition';
          icon.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-slate-200 text-slate-600 text-[10px] flex items-center justify-center';
          icon.textContent = n;
        }
      }

      statusText.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-[#107acc] animate-ping"></span> Analyzing role taxonomy: "Lead IT Support Engineer"...';
      questionText.textContent = 'Extracting Blooms cognitive taxonomy standards for Hardware Tier-1 & Tier-2 competencies...';
      optionsList.innerHTML = '<div class="text-slate-400">Parsing 24 core knowledge dimensions...</div>';

      setTimeout(() => {
        bar.style.width = '30%';
        const i1 = document.getElementById('nodeIcon-1');
        i1.innerHTML = '✓';
        i1.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';
        
        const n2 = document.getElementById('genNode-2');
        const i2 = document.getElementById('nodeIcon-2');
        n2.className = 'p-2.5 rounded-xl border border-[#107acc] bg-blue-50 text-[#107acc] font-bold transition';
        i2.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center';

        statusText.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-[#107acc] animate-ping"></span> Formulating 3 section blueprints & weightages...';
        sectionTag.textContent = 'BLUEPRINT CALIBRATION';
        questionText.textContent = 'Partitioning assessment into: Section 1 (Hardware), Section 2 (Network/AD), Section 3 (Dwaani Voice Scenarios).';
        optionsList.innerHTML = 
          '<div>• Section 1 Weight: 40% (10 MCQs)</div>' +
          '<div>• Section 2 Weight: 40% (10 MCQs)</div>' +
          '<div>• Section 3 Dwaani AI Voice: 20% (5 Audio Prompts)</div>';
      }, 1200);

      setTimeout(() => {
        bar.style.width = '65%';
        const i2 = document.getElementById('nodeIcon-2');
        i2.innerHTML = '✓';
        i2.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';
        
        const n3 = document.getElementById('genNode-3');
        const i3 = document.getElementById('nodeIcon-3');
        n3.className = 'p-2.5 rounded-xl border border-[#107acc] bg-blue-50 text-[#107acc] font-bold transition';
        i3.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center';

        statusText.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-[#107acc] animate-ping"></span> Synthesizing adaptive question pool...';
        sectionTag.textContent = 'SECTION 1: HARDWARE DIAGNOSTICS';
        questionText.textContent = 'Q12. When a workstation experiences intermittent kernel panics accompanied by memory register parity errors, which diagnostic methodology isolates faulty DIMM banks most accurately?';
        optionsList.innerHTML = 
          '<div class="p-1 rounded bg-slate-50">[A] Run MemTest86 sequentially per single memory socket</div>' +
          '<div class="p-1 rounded bg-slate-50">[B] Re-flash motherboard CMOS firmware</div>' +
          '<div class="p-1 rounded bg-slate-50">[C] Increase thermal throttling thresholds</div>';

        let q = 0;
        const qTimer = setInterval(() => {
          q += 3;
          if (q >= 20) {
            q = 20;
            clearInterval(qTimer);
          }
          countEl.textContent = 'Questions: ' + q + ' / 25';
        }, 120);
      }, 2500);

      setTimeout(() => {
        bar.style.width = '90%';
        const i3 = document.getElementById('nodeIcon-3');
        i3.innerHTML = '✓';
        i3.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';
        
        const n4 = document.getElementById('genNode-4');
        const i4 = document.getElementById('nodeIcon-4');
        n4.className = 'p-2.5 rounded-xl border border-[#107acc] bg-blue-50 text-[#107acc] font-bold transition';
        i4.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center';

        statusText.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-purple-600 animate-ping"></span> Calibrating Dwaani AI Voice scoring rubrics...';
        sectionTag.textContent = 'DWAANI AI VOICE SYNTHESIS';
        questionText.textContent = 'Voice Prompt #1: "Describe a scenario where a high-severity server outage occurred during your shift. How did you prioritize stakeholder communication vs triage?"';
        optionsList.innerHTML = 
          '<div class="text-purple-700 font-semibold">• Speech Cadence & Fluency Rubric (Weight: 30%)</div>' +
          '<div class="text-purple-700 font-semibold">• Technical Resolution Accuracy (Weight: 50%)</div>';
        countEl.textContent = 'Questions: 25 / 25';
      }, 3800);

      setTimeout(() => {
        bar.style.width = '100%';
        const i4 = document.getElementById('nodeIcon-4');
        i4.innerHTML = '✓';
        i4.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';

        statusText.innerHTML = '<span class="text-emerald-600 font-bold">✓ Generation Complete! 25 Questions Formulated.</span>';
        sectionsGrid.classList.remove('hidden');
        applyBtn.disabled = false;
        applyBtn.className = 'px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer';
      }, 4800);
    }

    function applyGeneratedTestBlueprint() {
      closeTestGenerateModal();
      switchScreen('test-create');
      setCreationStep(2);
      alert('AI assessment blueprint successfully loaded! 3 sections and 25 questions are now populated in your test creation workspace.');
    }

    function sendChatMessage() {
      const input = document.getElementById('chatInputBox');
      const text = input.value.trim();
      if (!text) return;
      const area = document.getElementById('chatMessageArea');
      const msg = document.createElement('div');
      msg.className = 'flex flex-col items-end max-w-sm ml-auto';
      msg.innerHTML = 
        '<div class="p-3.5 rounded-2xl bg-[#107acc] text-white text-xs shadow-xs">' + text + '</div>' +
        '<div class="flex items-center gap-1 text-[10px] text-slate-400 mt-1">' +
          '<span>Just now</span><span class="text-[#107acc]">✓</span>' +
        '</div>';
      area.appendChild(msg);
      area.scrollTop = area.scrollHeight;
      input.value = '';
    }


    // Profile Dropdown & Settings Controllers
    function toggleProfileDropdown() {
      const menu = document.getElementById('profileDropdownMenu');
      const chevron = document.getElementById('profileChevron');
      if (menu) {
        menu.classList.toggle('hidden');
        if (chevron) {
          chevron.style.transform = menu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        }
      }
    }

    function openProfileSettingsModal(tab) {
      const modal = document.getElementById('modal-profile-settings');
      if (modal) modal.classList.remove('hidden');
      const menu = document.getElementById('profileDropdownMenu');
      if (menu) menu.classList.add('hidden');
      if (tab) switchProfileTab(tab);
      else switchProfileTab('general');
    }

    function closeProfileSettingsModal() {
      const modal = document.getElementById('modal-profile-settings');
      if (modal) modal.classList.add('hidden');
    }

    function switchProfileTab(tab) {
      ['general', 'org', 'security'].forEach(t => {
        const btn = document.getElementById('pTabBtn-' + t);
        const content = document.getElementById('pTabContent-' + t);
        if (btn && content) {
          if (t === tab) {
            btn.className = 'px-3.5 py-2 font-bold text-[#107acc] border-b-2 border-[#107acc]';
            content.classList.remove('hidden');
          } else {
            btn.className = 'px-3.5 py-2 font-semibold text-slate-500 hover:text-slate-800';
            content.classList.add('hidden');
          }
        }
      });
    }

    function handleLogout() {
      if (confirm('Are you sure you want to log out of GradArena Enterprise?')) {
        alert('You have successfully logged out. Redirecting to login portal...');
        window.location.reload();
      }
    }

    // Close profile dropdown when clicking outside
    document.addEventListener('click', (e) => {
      const btn = document.getElementById('profileDropdownBtn');
      const menu = document.getElementById('profileDropdownMenu');
      if (btn && menu && !btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
        const chevron = document.getElementById('profileChevron');
        if (chevron) chevron.style.transform = 'rotate(0deg)';
      }
    });

    window.addEventListener('DOMContentLoaded', () => {
      const params = new URLSearchParams(window.location.search);
      const s = params.get('screen') || window.location.hash.replace('#', '');
      if (s && screenTitles[s]) {
        switchScreen(s);
      }
      const step = params.get('step');
      if (step) {
        setCreationStep(parseInt(step));
      }
      const scrollY = params.get('scroll');
      if (scrollY) {
        setTimeout(() => {
          const main = document.querySelector('main');
          if (main) main.scrollTop = parseInt(scrollY);
        }, 200);
      }
      const modal = params.get('modal');
      const intake = params.get('intake');
      if (modal === 'resume-scan') {
        switchScreen('candidates');
        openResumeUploadModal();
        startResumeAnimation('Kalyani_Lead_IT_Support.pdf', 1.4);
      } else if (modal === 'resume-complete') {
        switchScreen('candidates');
        openResumeUploadModal();
        startResumeAnimation('Kalyani_Lead_IT_Support.pdf', 1.4);
        setTimeout(() => {
          const bar = document.getElementById('scanProgressBar');
          if (bar) bar.style.width = '100%';
          const pct = document.getElementById('scanPercentage');
          if (pct) pct.textContent = '100%';
          const badge = document.getElementById('scanStepBadge');
          if (badge) badge.textContent = 'STAGE 5: COMPLETE';
          const res = document.getElementById('scanResultsArea');
          if (res) res.classList.remove('hidden');
          const circle = document.getElementById('matchScoreCircle');
          if (circle) circle.style.strokeDashoffset = '13.8';
          const text = document.getElementById('matchScoreText');
          if (text) text.textContent = '89%';
        }, 150);
      } else if (modal === 'test-gen') {
        switchScreen('test-create');
        openTestGenerateModal();
      } else if (modal === 'test-gen-complete') {
        switchScreen('test-create');
        openTestGenerateModal();
        setTimeout(() => {
          const bar = document.getElementById('genProgressBar');
          if (bar) bar.style.width = '100%';
          const count = document.getElementById('genQuestionsCount');
          if (count) count.textContent = 'Questions: 25 / 25';
          const stat = document.getElementById('genStatusText');
          if (stat) stat.innerHTML = '<span class="text-emerald-600 font-bold">✓ Generation Complete! 25 Questions Formulated.</span>';
          const grid = document.getElementById('genSectionsGrid');
          if (grid) grid.classList.remove('hidden');
          const apply = document.getElementById('btnApplyGeneratedTest');
          if (apply) {
            apply.disabled = false;
            apply.className = 'px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 cursor-pointer';
          }
          for (let n = 1; n <= 4; n++) {
            const icon = document.getElementById('nodeIcon-' + n);
            if (icon) {
              icon.innerHTML = '✓';
              icon.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';
            }
            const node = document.getElementById('genNode-' + n);
            if (node) node.className = 'p-2.5 rounded-xl border border-emerald-300 bg-emerald-50/60 text-emerald-800 font-bold transition';
          }
        }, 150);
      }
      if (intake === 'resume') {
        switchScreen('test-create');
        switchIntakeTab('resume');
        triggerInPageResumeScan('Kalyani_Lead_IT_Support.pdf', 1.4);
      }
    });
  </script>


  <!-- =================================================================== -->
  <!-- MODAL 3: USER PROFILE & ORGANIZATION LOGO SETTINGS                  -->
  <!-- =================================================================== -->
  <div id="modal-profile-settings" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden transform transition-all">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900">Profile & Organization Settings</h3>
            <p class="text-xs text-slate-500">Manage account details, organization logo, and security preferences</p>
          </div>
        </div>
        <button onclick="closeProfileSettingsModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">✕</button>
      </div>

      <!-- Modal Tabs -->
      <div class="flex items-center gap-2 px-6 pt-3 border-b border-slate-100 text-xs">
        <button id="pTabBtn-general" onclick="switchProfileTab('general')" class="px-3.5 py-2 font-bold text-[#107acc] border-b-2 border-[#107acc]">
          Personal Profile
        </button>
        <button id="pTabBtn-org" onclick="switchProfileTab('org')" class="px-3.5 py-2 font-semibold text-slate-500 hover:text-slate-800">
          Organization & Logo
        </button>
        <button id="pTabBtn-security" onclick="switchProfileTab('security')" class="px-3.5 py-2 font-semibold text-slate-500 hover:text-slate-800">
          Security & 2FA
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 space-y-4 text-xs">
        
        <!-- Tab 1: General Personal Profile -->
        <div id="pTabContent-general" class="space-y-4">
          <div class="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#107acc] to-[#38bdf8] text-white flex items-center justify-center font-bold text-xl shadow-xs">
              R
            </div>
            <div class="space-y-1">
              <span class="text-xs font-bold text-slate-900 block">Rajini K</span>
              <span class="text-[11px] text-slate-500 block">rajini@gadigitalsolutions.com</span>
              <button onclick="alert('Profile photo upload dialog opened');" class="text-[11px] font-bold text-[#107acc] hover:underline">Change Profile Picture</button>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="font-bold text-slate-700">First Name</label>
              <input type="text" value="Rajini" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
            </div>
            <div class="space-y-1">
              <label class="font-bold text-slate-700">Last Name</label>
              <input type="text" value="K" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
            </div>
          </div>

          <div class="space-y-1">
            <label class="font-bold text-slate-700">Corporate Email</label>
            <input type="email" value="rajini@gadigitalsolutions.com" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 text-slate-600" readonly />
          </div>

          <div class="space-y-1">
            <label class="font-bold text-slate-700">Job Title & Role</label>
            <input type="text" value="Operations Manager" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white" />
          </div>
        </div>

        <!-- Tab 2: Organization & Logo -->
        <div id="pTabContent-org" class="hidden space-y-4">
          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
            <div class="flex items-center justify-between">
              <div>
                <span class="text-xs font-bold text-slate-900 block">Organization Logo</span>
                <span class="text-[11px] text-slate-500">Displayed in sidebar, candidate test headers, and PDF reports</span>
              </div>
              <img src="Grad Arena Logo-01.svg" class="h-9 w-auto bg-white p-1 rounded-lg border border-slate-200" alt="Logo" />
            </div>
            <div class="flex items-center gap-2">
              <button onclick="alert('Choose SVG / PNG logo up to 2MB.');" class="px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white font-bold text-slate-700 hover:bg-slate-100 transition shadow-xs">
                Upload New Logo
              </button>
              <span class="text-[11px] text-slate-400">Current: Grad Arena Logo-01.svg</span>
            </div>
          </div>

          <div class="space-y-1">
            <label class="font-bold text-slate-700">Organization Name</label>
            <input type="text" value="GADigital Solutions" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white" />
          </div>

          <div class="space-y-1">
            <label class="font-bold text-slate-700">Primary Domain</label>
            <input type="text" value="gadigitalsolutions.com" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white" />
          </div>
        </div>

        <!-- Tab 3: Security & 2FA -->
        <div id="pTabContent-security" class="hidden space-y-4">
          <div class="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60 flex items-center justify-between">
            <div>
              <span class="text-xs font-bold text-emerald-900 block">Two-Factor Authentication (2FA)</span>
              <span class="text-[11px] text-emerald-700">Account secured with Authenticator TOTP</span>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-200 text-emerald-800">ACTIVE</span>
          </div>

          <div class="space-y-1">
            <label class="font-bold text-slate-700">Current Password</label>
            <input type="password" value="••••••••••••" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white" />
          </div>

          <div class="space-y-1">
            <label class="font-bold text-slate-700">New Password</label>
            <input type="password" placeholder="Enter new password" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white" />
          </div>
        </div>

      </div>

      <!-- Modal Footer -->
      <div class="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <button onclick="closeProfileSettingsModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition">
          Cancel
        </button>
        <button onclick="alert('Profile settings saved successfully!'); closeProfileSettingsModal();" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs">
          Save Changes
        </button>
      </div>

    </div>
  </div>

</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'manager-panel.html'), html, 'utf8');
fs.writeFileSync(path.join(__dirname, 'manager-dashboard.html'), html, 'utf8');
console.log('Successfully written trending premium GradArena UI to manager-panel.html & manager-dashboard.html (' + html.length + ' bytes)');
