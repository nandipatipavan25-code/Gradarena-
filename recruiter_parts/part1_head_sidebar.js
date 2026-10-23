module.exports = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GradArena Recruiter — AI Assessment & Candidate Intelligence Portal</title>

  <!-- Google Fonts: Montserrat (Headings, Brand & Buttons) + Lato (Clean UI, Tables & Body) + JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Lato"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
            heading: ['"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
            montserrat: ['"Montserrat"', 'system-ui', '-apple-system', 'sans-serif'],
            lato: ['"Lato"', 'system-ui', '-apple-system', 'sans-serif'],
            inter: ['"Lato"', 'system-ui', '-apple-system', 'sans-serif'],
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
              canvas: '#F5F6FA',
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
      --font-body: 'Lato', system-ui, -apple-system, sans-serif;
    }

    body {
      font-family: 'Lato', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.01em;
      background-color: #F5F6FA;
      color: #0F172A;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      background-image: 
        radial-gradient(at 0% 0%, rgba(16, 122, 204, 0.035) 0px, transparent 45%),
        radial-gradient(at 100% 0%, rgba(99, 102, 241, 0.025) 0px, transparent 40%),
        radial-gradient(at 50% 100%, rgba(16, 185, 129, 0.02) 0px, transparent 50%);
      background-attachment: fixed;
    }

    /* Headings, Brand, Navigation, Metric labels and Action Buttons use Montserrat (Max weight 700 Bold, strictly NO extra bold) */
    h1, h2, h3, h4, h5, h6,
    .font-heading,
    .brand-title,
    nav a,
    nav button,
    .btn-action,
    .screen-title {
      font-family: 'Montserrat', system-ui, -apple-system, sans-serif;
      letter-spacing: -0.02em;
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

    /* Modern Ultra-Clean 24px Rounded Cards & Diffused Shadows (Inspired by Modern Dribbble/Behance UI) */
    .premium-card {
      background: #FFFFFF;
      border: 1px solid rgba(226, 232, 240, 0.7);
      border-radius: 24px;
      box-shadow: 
        0 10px 30px -5px rgba(16, 122, 204, 0.04),
        0 2px 8px -2px rgba(15, 23, 42, 0.02);
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .premium-card:hover {
      box-shadow: 
        0 16px 36px -4px rgba(16, 122, 204, 0.08),
        0 4px 12px -2px rgba(15, 23, 42, 0.03);
    }

    .module-rect {
      background: #FFFFFF;
      border: 1px solid rgba(226, 232, 240, 0.8);
      border-radius: 20px;
      box-shadow: 
        0 4px 14px 0 rgba(16, 122, 204, 0.03);
      transition: all 0.2s ease;
    }
    .module-rect:hover {
      box-shadow: 
        0 8px 20px -2px rgba(16, 122, 204, 0.08);
      border-color: rgba(16, 122, 204, 0.3);
    }

    .nav-item-active {
      background: rgba(16, 122, 204, 0.09);
      color: #107ACC;
      font-weight: 700;
      border-radius: 16px;
    }
    .nav-item-inactive {
      color: #64748B;
      font-weight: 500;
      border-radius: 16px;
    }
    .nav-item-inactive:hover {
      background: #F1F5F9;
      color: #0F172A;
    }

    /* Modern Fluid Screen & Interaction Animations */
    @keyframes screenFadeIn {
      from {
        opacity: 0;
        transform: translateY(6px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .screen-view:not(.hidden) {
      animation: screenFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    @keyframes pulseGlow {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.65; transform: scale(1.1); }
    }
    .pulse-dot {
      animation: pulseGlow 1.8s infinite ease-in-out;
    }

    @keyframes scanBeam {
      0% { top: 0%; opacity: 0.8; }
      50% { opacity: 1; }
      100% { top: 96%; opacity: 0.8; }
    }
    .radar-sweep {
      animation: scanBeam 2s ease-in-out infinite alternate;
    }

    @keyframes audioWave {
      0%, 100% { height: 6px; }
      50% { height: 22px; }
    }
    .audio-bar-1 { animation: audioWave 1.1s infinite ease-in-out; }
    .audio-bar-2 { animation: audioWave 0.8s infinite ease-in-out 0.2s; }
    .audio-bar-3 { animation: audioWave 1.3s infinite ease-in-out 0.4s; }
    .audio-bar-4 { animation: audioWave 0.9s infinite ease-in-out 0.1s; }

    @keyframes bounceDot {
      0%, 80%, 100% { transform: scale(0); opacity: 0.3; }
      40% { transform: scale(1); opacity: 1; }
    }
    .bounce-1 { animation: bounceDot 1.4s infinite ease-in-out; }
    .bounce-2 { animation: bounceDot 1.4s infinite ease-in-out 0.2s; }
    .bounce-3 { animation: bounceDot 1.4s infinite ease-in-out 0.4s; }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    .skeleton-shimmer {
      background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
    }
  </style>
</head>

<body class="bg-[#F8FAFC] text-slate-800 antialiased h-screen overflow-hidden flex">

  <!-- =================================================================== -->
  <!-- FIXED LEFT SIDEBAR                                                  -->
  <!-- =================================================================== -->
  <aside id="sidebar" class="w-64 bg-white border-r border-slate-200/90 flex flex-col justify-between shrink-0 h-screen z-30 transition-all duration-300">
    
    <!-- Top Brand Area -->
    <div class="px-5 py-4 border-b border-slate-100 flex items-center">
      <div class="flex items-center gap-3 cursor-pointer" onclick="switchScreen('dashboard')">
        <img src="Grad Arena Logo-01.svg" alt="GradArena Logo" class="h-9 w-auto object-contain hover:scale-105 transition duration-200" />
      </div>
    </div>

    <!-- Prominent Primary Action Button (Directly inspired by Image 1 "Register patient +") -->
    <div class="px-4 pt-4 pb-1">
      <button onclick="switchScreen('create-test')" class="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#107acc] via-[#1688de] to-[#2590e8] hover:from-[#0c68ab] hover:to-[#107acc] text-white font-bold text-xs shadow-brand-glow flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer">
        <span>+ Create Assessment</span>
      </button>
    </div>

    <!-- Navigation Menu Items -->
    <div class="flex-1 overflow-y-auto custom-scrollbar py-3 px-3 space-y-1">
      
      <!-- 1. Dashboard -->
      <button onclick="switchScreen('dashboard')" id="nav-dashboard" class="w-full flex items-center justify-between px-3.5 py-2.5 nav-item-active transition">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          <span class="text-xs">Dashboard</span>
        </div>
        <span class="w-1.5 h-1.5 rounded-full bg-[#107acc]"></span>
      </button>

      <!-- 2. Create Test -->
      <button onclick="switchScreen('create-test')" id="nav-create-test" class="w-full flex items-center justify-between px-3.5 py-2.5 nav-item-inactive transition">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <span class="text-xs">Create Test</span>
        </div>
        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-100 text-[#107acc]">AI</span>
      </button>

      <!-- 3. My Tests -->
      <button onclick="switchScreen('my-tests')" id="nav-my-tests" class="w-full flex items-center justify-between px-3.5 py-2.5 nav-item-inactive transition">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          <span class="text-xs">My Tests</span>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">30</span>
      </button>

      <!-- 4. Modification Requests -->
      <button onclick="switchScreen('modifications')" id="nav-modifications" class="w-full flex items-center justify-between px-3.5 py-2.5 nav-item-inactive transition">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          <span class="text-xs">Modification Requests</span>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">2</span>
      </button>

      <!-- 5. Candidates Pool -->
      <button onclick="switchScreen('candidates')" id="nav-candidates" class="w-full flex items-center justify-between px-3.5 py-2.5 nav-item-inactive transition">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          <span class="text-xs">Candidates</span>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">285</span>
      </button>

      <!-- 6. Import & Invite Candidates -->
      <button onclick="switchScreen('import-candidates')" id="nav-import-candidates" class="w-full flex items-center justify-between px-3.5 py-2.5 nav-item-inactive transition">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
          <span class="text-xs">Import & Invite</span>
        </div>
        <span class="text-[10px] font-bold text-[#107acc]">CSV</span>
      </button>

      <!-- 7. Message -->
      <button onclick="switchScreen('message')" id="nav-message" class="w-full flex items-center justify-between px-3.5 py-2.5 nav-item-inactive transition">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          <span class="text-xs">Message</span>
        </div>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-[#107acc]">3</span>
      </button>

      <!-- 8. Tickets -->
      <button onclick="switchScreen('tickets')" id="nav-tickets" class="w-full flex items-center justify-between px-3.5 py-2.5 nav-item-inactive transition">
        <div class="flex items-center gap-3">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          <span class="text-xs">Tickets</span>
        </div>
      </button>

    </div>

    <!-- Bottom Promo / AI Assistant Card (Directly inspired by Image 1 "Get mobile app" widget) -->
    <div class="p-4 border-t border-slate-100">
      <div class="p-3.5 rounded-2xl bg-gradient-to-br from-blue-50/90 via-indigo-50/50 to-slate-50 border border-blue-100 space-y-2 relative overflow-hidden">
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-xl bg-[#107acc] text-white flex items-center justify-center text-xs font-bold shadow-xs">
            ⚡
          </div>
          <div>
            <span class="text-xs font-bold text-slate-900 block">Dwaani Voice AI</span>
            <span class="text-[10px] text-emerald-600 font-semibold">● v2.4 Proctor Ready</span>
          </div>
        </div>
        <p class="text-[10px] text-slate-500 leading-tight">Proctoring and AI audio decibels actively verifying sessions.</p>
        <button onclick="switchScreen('candidates')" class="w-full py-1.5 rounded-xl bg-white hover:bg-slate-50 text-[10px] font-bold text-[#107acc] border border-blue-200/80 transition shadow-2xs">
          View Live Feed ➔
        </button>
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
        
        <!-- Search bar -->
        <div class="relative hidden md:block">
          <input id="globalSearchInput" type="text" placeholder="Search tests, candidates, JDs..." class="w-64 pl-8 pr-3 py-1.5 text-xs bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:bg-white transition" />
          <svg class="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>

        <!-- Credits Badge & Popover -->
        <div class="relative">
          <button id="creditsBtn" onclick="toggleCreditsPopover()" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200/80 text-[#107acc] font-bold text-xs shadow-2xs hover:bg-blue-100/70 transition cursor-pointer">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            <span class="font-mono">222.23</span>
            <span class="text-[10px] font-semibold text-slate-600 hidden sm:inline">Credits</span>
          </button>

          <!-- Credits Details Popover -->
          <div id="creditsPopover" class="hidden absolute right-0 top-12 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200/90 z-50 p-4 space-y-3 transform transition-all duration-150 origin-top-right">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <span class="text-xs font-bold text-slate-900">AI Credits Breakdown</span>
              <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-700">ENTERPRISE POOL</span>
            </div>
            <div class="space-y-2 text-xs">
              <div class="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span class="text-slate-600">Company Balance</span>
                <span class="font-mono font-bold text-slate-900">222.225</span>
              </div>
              <div class="flex items-center justify-between p-2 rounded-xl bg-blue-50/50 border border-blue-100">
                <span class="text-[#107acc] font-semibold">Your Usage Today</span>
                <span class="font-mono font-bold text-[#107acc]">0.300</span>
              </div>
              <div class="text-[10px] text-slate-400 space-y-1 pt-1">
                <div class="flex justify-between"><span>• JD Extraction (LinkedIn)</span><span class="font-mono">0.100</span></div>
                <div class="flex justify-between"><span>• AI Question Synthesis</span><span class="font-mono">0.200</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Notification Bell & Drawer -->
        <div class="relative">
          <button id="notifBellBtn" onclick="toggleNotificationDrawer()" class="relative w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600 transition cursor-pointer">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            <span class="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 pulse-dot"></span>
          </button>

          <!-- Notification Drawer -->
          <div id="notificationDrawer" class="hidden absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 z-50 p-4 space-y-3 transform transition-all duration-150 origin-top-right">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold text-slate-900">Notifications</span>
                <span class="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-rose-50 text-rose-600">3 new</span>
              </div>
              <button onclick="showToast('Cleared', 'All notifications marked as read', 'info'); document.getElementById('notificationDrawer').classList.add('hidden');" class="text-[10px] font-bold text-[#107acc] hover:underline">Mark read</button>
            </div>
            <div class="space-y-2 text-xs max-h-64 overflow-y-auto custom-scrollbar">
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1 hover:bg-slate-100/70 transition cursor-pointer" onclick="switchScreen('candidate-eval')">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-slate-800">Test Completed</span>
                  <span class="text-[9px] font-mono text-slate-400">10m ago</span>
                </div>
                <p class="text-[11px] text-slate-600 leading-tight">Kalyani Sundaram finished Hardware Support Tier 1 (Score: 74% - Passed).</p>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1 hover:bg-slate-100/70 transition cursor-pointer" onclick="switchScreen('modifications')">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-emerald-700">Modification Approved</span>
                  <span class="text-[9px] font-mono text-slate-400">1h ago</span>
                </div>
                <p class="text-[11px] text-slate-600 leading-tight">Rajini K approved blueprint edits for Cloud Solutions Architect.</p>
              </div>
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1 hover:bg-slate-100/70 transition cursor-pointer" onclick="switchScreen('tickets')">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-amber-700">New Support Ticket</span>
                  <span class="text-[9px] font-mono text-slate-400">2h ago</span>
                </div>
                <p class="text-[11px] text-slate-600 leading-tight">Candidate appeal TICK-1092 logged for Section 1 reconnect.</p>
              </div>
            </div>
          </div>
        </div>

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
            <button onclick="toggleCreditsPopover(); closeProfileDropdown();" class="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 text-xs text-slate-700 font-semibold transition group">
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
