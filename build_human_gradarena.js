// Builder script for GradArena Authentic Human SaaS UI
// Matches the exact "old format" human design screens from "Manager Panel Screens - Gradarena"
const fs = require('fs');
const path = require('path');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GradArena — AI Hiring Intelligence & Assessment Platform</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          },
          colors: {
            brand: {
              DEFAULT: '#107acc',
              50: '#EBF5FC',
              100: '#D7ECF9',
              200: '#BCE0F7',
              500: '#107acc',
              600: '#0c68ab',
              700: '#09538a',
            }
          }
        }
      }
    }
  </script>
  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      background-color: #F8FAFC;
      color: #1E293B;
      -webkit-font-smoothing: antialiased;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
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
    /* Natural human card shadow */

    /* Laser scan animation */
    @keyframes laserSweep {
      0% { top: 6px; opacity: 0.9; }
      50% { top: calc(100% - 12px); opacity: 1; }
      100% { top: 6px; opacity: 0.9; }
    }
    .animate-laser {
      position: absolute;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, rgba(16,122,204,0) 0%, rgba(16,122,204,1) 50%, rgba(16,122,204,0) 100%);
      box-shadow: 0 0 12px rgba(16,122,204,0.8);
      animation: laserSweep 2s ease-in-out infinite;
    }
    /* Pulse glow */
    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(16, 122, 204, 0.2); }
      50% { box-shadow: 0 0 0 8px rgba(16, 122, 204, 0); }
    }
    .pulse-glow {
      animation: pulseGlow 2s infinite;
    }
    /* Stagger pop-in */
    @keyframes popIn {
      0% { opacity: 0; transform: scale(0.85) translateY(4px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    .pop-in {
      animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    /* Shimmer stream */
    @keyframes textStream {
      0% { opacity: 0.4; }
      50% { opacity: 1; }
      100% { opacity: 0.4; }
    }
    .animate-streaming {
      animation: textStream 1.4s ease-in-out infinite;
    }

    .card-human {
      background: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 16px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02);
      transition: all 0.2s ease;
    }
    .card-human:hover {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.03);
    }
    /* Active Nav Item */
    .nav-active {
      background-color: #107acc !important;
      color: #FFFFFF !important;
      font-weight: 600;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }
    .nav-active svg {
      color: #FFFFFF !important;
      stroke: #FFFFFF !important;
    }
    .nav-inactive {
      color: #64748B;
      font-weight: 500;
      border-radius: 8px;
    }
    .nav-inactive:hover {
      background-color: #F1F5F9;
      color: #0F172A;
    }
  </style>
</head>
<body class="bg-[#F8FAFC] text-slate-800 antialiased min-h-screen">

  <!-- ============================================================ -->
  <!-- 1. CLEAN WHITE SIDEBAR (OLD FORMAT HUMAN DESIGN)              -->
  <!-- ============================================================ -->
  <aside id="sidebar" class="fixed top-0 left-0 h-screen w-64 bg-white border-r border-slate-200/90 z-40 flex flex-col transition-all duration-300">
    
    <!-- Logo Header (Matches original GradArena screenshot) -->
    <div class="h-20 px-6 flex items-center border-b border-slate-100">
      <a href="javascript:void(0)" onclick="switchScreen('dashboard')" class="flex items-center gap-3">
        <img src="Grad Arena Logo-01.svg" alt="GradArena" class="h-10 w-auto" />
      </a>
    </div>

    <!-- Navigation Menu Items -->
    <nav class="flex-1 py-4 pr-3 pl-0 space-y-1 overflow-y-auto custom-scrollbar">
      
      <!-- Dashboard -->
      <button id="nav-dashboard" onclick="switchScreen('dashboard')" class="w-full flex items-center gap-3.5 px-6 py-3 text-sm transition nav-item nav-active">
        <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        <span>Dashboard</span>
      </button>

      <!-- Manage Test Creators -->
      <button id="nav-creators" onclick="switchScreen('creators')" class="w-full flex items-center gap-3.5 px-6 py-3 text-sm transition nav-item nav-inactive">
        <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <span>Manage Test Creators</span>
      </button>

      <!-- Test Creation -->
      <button id="nav-test-create" onclick="switchScreen('test-create')" class="w-full flex items-center gap-3.5 px-6 py-3 text-sm transition nav-item nav-inactive">
        <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <span>Test Creation</span>
      </button>

      <!-- Tests -->
      <button id="nav-tests" onclick="switchScreen('tests')" class="w-full flex items-center gap-3.5 px-6 py-3 text-sm transition nav-item nav-inactive">
        <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span>Tests</span>
      </button>

      <!-- Pending Reviews -->
      <button id="nav-reviews" onclick="switchScreen('reviews')" class="w-full flex items-center gap-3.5 px-6 py-3 text-sm transition nav-item nav-inactive">
        <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>Pending Reviews</span>
      </button>

      <!-- Candidates -->
      <button id="nav-candidates" onclick="switchScreen('candidates')" class="w-full flex items-center gap-3.5 px-6 py-3 text-sm transition nav-item nav-inactive">
        <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>Candidates</span>
      </button>

      <!-- Message -->
      <button id="nav-chat" onclick="switchScreen('chat')" class="w-full flex items-center gap-3.5 px-6 py-3 text-sm transition nav-item nav-inactive">
        <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>Message</span>
      </button>

      <!-- Tickets -->
      <button id="nav-tickets" onclick="switchScreen('tickets')" class="w-full flex items-center gap-3.5 px-6 py-3 text-sm transition nav-item nav-inactive">
        <svg class="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
        <span>Tickets</span>
      </button>

    </nav>
  </aside>

  <!-- ============================================================ -->
  <!-- 2. MAIN WRAPPER (ML-64 WITH WHITE TOPBAR)                     -->
  <!-- ============================================================ -->
  <div class="ml-64 min-h-screen flex flex-col">

    <!-- Top Header (Matches original GradArena screenshot) -->
    <header class="h-20 bg-white border-b border-slate-200/90 px-8 flex items-center justify-between sticky top-0 z-30">
      
      <!-- Page Title -->
      <div>
        <h1 id="topPageTitle" class="text-2xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
      </div>

      <!-- Right Header Actions -->
      <div class="flex items-center gap-5">
        
        <!-- Credits Pill -->
        <div class="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EBF5FC] text-[#107acc] border border-[#BCE0F7] text-xs font-semibold shadow-xs">
          <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
          <span>222.23 Credits</span>
        </div>

        <!-- Notification Bell -->
        <button class="relative p-2 text-slate-500 hover:text-slate-800 transition">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span class="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>

        <!-- User Profile Dropdown -->
        <div class="flex items-center gap-2.5 pl-2 cursor-pointer group">
          <div class="w-8 h-8 rounded-full bg-[#107acc] text-white flex items-center justify-center font-bold text-sm shadow-xs">
            R
          </div>
          <div class="text-left hidden md:block">
            <div class="text-xs font-semibold text-slate-900 leading-tight">rajini@gadigitalsolutions.com</div>
            <div class="text-[11px] text-slate-500 font-medium">Manager</div>
          </div>
          <svg class="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

      </div>
    </header>

    <!-- Main Workspace Content -->
    <main class="flex-1 p-8">

      <!-- ============================================================ -->
      <!-- SCREEN 1: DASHBOARD (EXACT ORIGINAL LAYOUT)                   -->
      <!-- ============================================================ -->
      <div id="screen-dashboard" class="screen-view space-y-6">
        
        <!-- 4 Top Stat Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Card 1: Active Hiring Drives -->
          <div class="card-human p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 flex items-center gap-1">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline></svg>
                +14%
              </span>
            </div>
            <div class="text-xs font-medium text-slate-500">Active Hiring Drives</div>
            <div class="text-3xl font-extrabold text-slate-900 mt-1">32</div>
          </div>

          <!-- Card 2: Total Candidates -->
          <div class="card-human p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 flex items-center gap-1">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline></svg>
                +8.2%
              </span>
            </div>
            <div class="text-xs font-medium text-slate-500">Total Candidates</div>
            <div class="text-3xl font-extrabold text-slate-900 mt-1">284</div>
          </div>

          <!-- Card 3: Interview Conversion -->
          <div class="card-human p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 flex items-center gap-1">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline></svg>
                +5%
              </span>
            </div>
            <div class="text-xs font-medium text-slate-500">Interview Conversion</div>
            <div class="text-3xl font-extrabold text-slate-900 mt-1">48%</div>
          </div>

          <!-- Card 4: My Credit Usage -->
          <div class="card-human p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 flex items-center gap-1">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline></svg>
                212 Actions
              </span>
            </div>
            <div class="text-xs font-medium text-slate-500">My Credit Usage</div>
            <div class="text-3xl font-extrabold text-slate-900 mt-1">13.7</div>
          </div>

        </div>

        <!-- 2-Column Dashboard Body -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- Left Column (7 cols): Funnel & Ongoing Assessments -->
          <div class="lg:col-span-7 space-y-6">
            
            <!-- Recruitment Funnel -->
            <div class="card-human p-6">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h3 class="text-base font-bold text-slate-900">Recruitment Funnel</h3>
                  <p class="text-xs text-slate-400 mt-0.5">Efficiency across candidate journey</p>
                </div>
                <button class="px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 transition">
                  Team Stats
                </button>
              </div>

              <!-- Horizontal Bars with dotted guides -->
              <div class="space-y-6 py-4">
                
                <!-- Bar 1: Candidates -->
                <div class="space-y-1.5">
                  <div class="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Candidates</span>
                    <span>284 Candidates</span>
                  </div>
                  <div class="w-full bg-slate-100 rounded-lg h-7 overflow-hidden p-0.5">
                    <div class="bg-[#D7ECF9] h-full rounded-md w-full transition-all duration-500"></div>
                  </div>
                </div>

                <!-- Bar 2: Tests Taken -->
                <div class="space-y-1.5">
                  <div class="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Tests Taken</span>
                    <span>216 Completed (76%)</span>
                  </div>
                  <div class="w-full bg-slate-100 rounded-lg h-7 overflow-hidden p-0.5">
                    <div class="bg-[#78BEEB] h-full rounded-md w-[76%] transition-all duration-500"></div>
                  </div>
                </div>

                <!-- Bar 3: Tests Passed -->
                <div class="space-y-1.5">
                  <div class="flex justify-between text-xs font-semibold text-slate-700">
                    <span>Tests Passed</span>
                    <span>78 Qualified (36.1%)</span>
                  </div>
                  <div class="w-full bg-slate-100 rounded-lg h-7 overflow-hidden p-0.5">
                    <div class="bg-[#107acc] h-full rounded-md w-[36%] transition-all duration-500"></div>
                  </div>
                </div>

              </div>
            </div>

            <!-- Ongoing Assessments -->
            <div class="card-human p-6">
              <div class="flex items-center gap-2 mb-6">
                <svg class="w-5 h-5 text-[#107acc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                <h3 class="text-base font-bold text-slate-900">Ongoing Assessments</h3>
              </div>
              <div class="py-12 flex flex-col items-center justify-center text-center">
                <div class="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 mb-2">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div class="text-xs text-slate-400 font-medium">No active assessments</div>
              </div>
            </div>

          </div>

          <!-- Right Column (5 cols): Usage Details & Team Performance -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- My Usage Details -->
            <div class="card-human p-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 24 24">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  <h3 class="text-base font-bold text-slate-900">My Usage Details</h3>
                </div>
                <span class="text-xs font-semibold text-slate-400">TOTAL: 13.7 CREDITS</span>
              </div>

              <!-- Usage rows -->
              <div class="divide-y divide-slate-100 text-xs">
                <div onclick="openTestGenerateModal()" class="py-3 flex justify-between items-center cursor-pointer hover:bg-slate-50/80 px-2 rounded-lg transition">
                  <div>
                    <div class="font-semibold text-slate-800 flex items-center gap-1.5">
                      <span>Generate Test from JD</span>
                      <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-[#107acc]">AI</span>
                    </div>
                    <div class="text-[11px] text-slate-400">39 occurrences</div>
                  </div>
                  <div class="text-right">
                    <span class="font-bold text-[#107acc]">7.90</span>
                    <span class="text-[10px] text-slate-400 block font-mono">USED</span>
                  </div>
                </div>

                <div class="py-3 flex justify-between items-center">
                  <div>
                    <div class="font-semibold text-slate-800">Question Generation</div>
                    <div class="text-[11px] text-slate-400">112 occurrences</div>
                  </div>
                  <div class="text-right">
                    <span class="font-bold text-[#107acc]">5.12</span>
                    <span class="text-[10px] text-slate-400 block font-mono">USED</span>
                  </div>
                </div>

                <div class="py-3 flex justify-between items-center">
                  <div>
                    <div class="font-semibold text-slate-800">Candidate Evaluation</div>
                    <div class="text-[11px] text-slate-400">52 occurrences</div>
                  </div>
                  <div class="text-right">
                    <span class="font-bold text-[#107acc]">0.52</span>
                    <span class="text-[10px] text-slate-400 block font-mono">USED</span>
                  </div>
                </div>

                <div class="py-3 flex justify-between items-center">
                  <div>
                    <div class="font-semibold text-slate-800">Job Description Extraction</div>
                    <div class="text-[11px] text-slate-400">9 occurrences</div>
                  </div>
                  <div class="text-right">
                    <span class="font-bold text-[#107acc]">0.17</span>
                    <span class="text-[10px] text-slate-400 block font-mono">USED</span>
                  </div>
                </div>
              </div>

              <!-- Blue banner at bottom -->
              <div class="mt-4 p-3.5 rounded-xl bg-[#EBF5FC] border border-[#BCE0F7] flex items-center justify-between text-xs">
                <span class="font-bold text-[#107acc]">TOTAL COMPANY CREDITS LEFT</span>
                <span class="font-extrabold text-[#107acc] text-sm">222.225</span>
              </div>
            </div>

            <!-- Team Performance -->
            <div class="card-human p-6">
              <div class="flex items-center justify-between mb-2">
                <div>
                  <h3 class="text-base font-bold text-slate-900">Team Performance</h3>
                  <p class="text-xs text-slate-400">Test creators activity & rating</p>
                </div>
                <button class="text-slate-400 hover:text-slate-600">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </button>
              </div>

              <!-- Member rows -->
              <div class="divide-y divide-slate-100 text-xs">
                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-semibold text-slate-800">K Prashanti</span>
                  <div class="flex items-center gap-4 text-slate-500">
                    <span><strong class="text-slate-800">4</strong> Reviews</span>
                    <span class="text-slate-400">--- Avg</span>
                    <span class="font-bold text-emerald-600">0 ↗</span>
                  </div>
                </div>

                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-semibold text-slate-800">Sai Kalpana</span>
                  <div class="flex items-center gap-4 text-slate-500">
                    <span><strong class="text-slate-800">1</strong> Reviews</span>
                    <span class="text-slate-400">--- Avg</span>
                    <span class="font-bold text-emerald-600">0 ↗</span>
                  </div>
                </div>

                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-semibold text-slate-800">Uzma Roohi</span>
                  <div class="flex items-center gap-4 text-slate-500">
                    <span><strong class="text-slate-800">0</strong> Reviews</span>
                    <span class="text-slate-400">--- Avg</span>
                    <span class="font-bold text-emerald-600">0 ↗</span>
                  </div>
                </div>

                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-semibold text-slate-800">P Hemachandra</span>
                  <div class="flex items-center gap-4 text-slate-500">
                    <span><strong class="text-slate-800">104</strong> Reviews</span>
                    <span class="text-slate-400">--- Avg</span>
                    <span class="font-bold text-emerald-600">0 ↗</span>
                  </div>
                </div>

                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-semibold text-slate-800">Sunil Ajay</span>
                  <div class="flex items-center gap-4 text-slate-500">
                    <span><strong class="text-slate-800">1</strong> Reviews</span>
                    <span class="text-slate-400">--- Avg</span>
                    <span class="font-bold text-emerald-600">0 ↗</span>
                  </div>
                </div>

                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-semibold text-slate-800">Sheena J</span>
                  <div class="flex items-center gap-4 text-slate-500">
                    <span><strong class="text-slate-800">0</strong> Reviews</span>
                    <span class="text-slate-400">--- Avg</span>
                    <span class="font-bold text-emerald-600">0 ↗</span>
                  </div>
                </div>

                <div class="py-2.5 flex items-center justify-between">
                  <span class="font-semibold text-slate-800">Testing</span>
                  <div class="flex items-center gap-4 text-slate-500">
                    <span><strong class="text-slate-800">0</strong> Reviews</span>
                    <span class="text-slate-400">--- Avg</span>
                    <span class="font-bold text-emerald-600">0 ↗</span>
                  </div>
                </div>
              </div>

              <!-- Manage team access button -->
              <div class="mt-4 pt-2">
                <button onclick="switchScreen('creators')" class="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition flex items-center justify-center gap-2">
                  <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
                  Manage Team Access
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 2: MANAGE TEST CREATORS (EXACT ORIGINAL LAYOUT)        -->
      <!-- ============================================================ -->
      <div id="screen-creators" class="screen-view hidden space-y-6">
        
        <!-- Header Subtitle & Action Bar -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p class="text-sm text-slate-500">Oversee the test creators in your team.</p>
          <div class="flex items-center gap-3">
            <div class="relative w-72">
              <input type="text" placeholder="Search by name or email..." class="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
              <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <button class="px-4 py-2 rounded-xl bg-[#107acc] text-white text-xs font-semibold hover:bg-[#0c68ab] transition flex items-center gap-1.5 shadow-xs">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              Invite Test Creator
            </button>
          </div>
        </div>

        <!-- Creators Grid (7 Creators matching screenshot) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Creator 1: K Prashanti -->
          <div onclick="switchScreen('creator-detail')" class="card-human p-6 text-center cursor-pointer relative group hover:border-[#107acc]/40">
            <span class="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
            <button class="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </button>
            <div class="w-24 h-24 rounded-2xl bg-[#1E293B] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 mt-2 shadow-sm group-hover:scale-105 transition-transform">
              K
            </div>
            <h4 class="text-base font-bold text-slate-900 group-hover:text-[#107acc] transition">K Prashanti</h4>
            <div class="mt-2">
              <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-600 uppercase">TEST CREATOR</span>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex justify-end">
              <button onclick="event.stopPropagation(); switchScreen('chat');" class="p-2 rounded-lg text-slate-400 hover:text-[#107acc] hover:bg-blue-50 transition" title="Message">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </button>
            </div>
          </div>

          <!-- Creator 2: Sai Kalpana -->
          <div onclick="switchScreen('creator-detail')" class="card-human p-6 text-center cursor-pointer relative group hover:border-[#107acc]/40">
            <span class="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
            <button class="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </button>
            <div class="w-24 h-24 rounded-2xl bg-[#1E293B] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 mt-2 shadow-sm group-hover:scale-105 transition-transform">
              S
            </div>
            <h4 class="text-base font-bold text-slate-900 group-hover:text-[#107acc] transition">Sai Kalpana</h4>
            <div class="mt-2">
              <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-600 uppercase">TEST CREATOR</span>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex justify-end">
              <button onclick="event.stopPropagation(); switchScreen('chat');" class="p-2 rounded-lg text-slate-400 hover:text-[#107acc] hover:bg-blue-50 transition" title="Message">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </button>
            </div>
          </div>

          <!-- Creator 3: Uzma Roohi -->
          <div onclick="switchScreen('creator-detail')" class="card-human p-6 text-center cursor-pointer relative group hover:border-[#107acc]/40">
            <span class="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
            <button class="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </button>
            <div class="w-24 h-24 rounded-2xl bg-[#1E293B] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 mt-2 shadow-sm group-hover:scale-105 transition-transform">
              U
            </div>
            <h4 class="text-base font-bold text-slate-900 group-hover:text-[#107acc] transition">Uzma Roohi</h4>
            <div class="mt-2">
              <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-600 uppercase">TEST CREATOR</span>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex justify-end">
              <button onclick="event.stopPropagation(); switchScreen('chat');" class="p-2 rounded-lg text-slate-400 hover:text-[#107acc] hover:bg-blue-50 transition" title="Message">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </button>
            </div>
          </div>

          <!-- Creator 4: P Hemachandra -->
          <div onclick="switchScreen('creator-detail')" class="card-human p-6 text-center cursor-pointer relative group hover:border-[#107acc]/40">
            <span class="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
            <button class="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </button>
            <div class="w-24 h-24 rounded-2xl bg-[#1E293B] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 mt-2 shadow-sm group-hover:scale-105 transition-transform">
              P
            </div>
            <h4 class="text-base font-bold text-slate-900 group-hover:text-[#107acc] transition">P Hemachandra</h4>
            <div class="mt-2">
              <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-600 uppercase">TEST CREATOR</span>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex justify-end">
              <button onclick="event.stopPropagation(); switchScreen('chat');" class="p-2 rounded-lg text-slate-400 hover:text-[#107acc] hover:bg-blue-50 transition" title="Message">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </button>
            </div>
          </div>

          <!-- Creator 5: Sunil Ajay -->
          <div onclick="switchScreen('creator-detail')" class="card-human p-6 text-center cursor-pointer relative group hover:border-[#107acc]/40">
            <span class="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
            <button class="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </button>
            <div class="w-24 h-24 rounded-2xl bg-[#1E293B] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 mt-2 shadow-sm group-hover:scale-105 transition-transform">
              S
            </div>
            <h4 class="text-base font-bold text-slate-900 group-hover:text-[#107acc] transition">Sunil Ajay</h4>
            <div class="mt-2">
              <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-600 uppercase">TEST CREATOR</span>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex justify-end">
              <button onclick="event.stopPropagation(); switchScreen('chat');" class="p-2 rounded-lg text-slate-400 hover:text-[#107acc] hover:bg-blue-50 transition" title="Message">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </button>
            </div>
          </div>

          <!-- Creator 6: Sheena J -->
          <div onclick="switchScreen('creator-detail')" class="card-human p-6 text-center cursor-pointer relative group hover:border-[#107acc]/40">
            <span class="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
            <button class="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </button>
            <div class="w-24 h-24 rounded-2xl bg-[#1E293B] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 mt-2 shadow-sm group-hover:scale-105 transition-transform">
              S
            </div>
            <h4 class="text-base font-bold text-slate-900 group-hover:text-[#107acc] transition">Sheena J</h4>
            <div class="mt-2">
              <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-600 uppercase">TEST CREATOR</span>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex justify-end">
              <button onclick="event.stopPropagation(); switchScreen('chat');" class="p-2 rounded-lg text-slate-400 hover:text-[#107acc] hover:bg-blue-50 transition" title="Message">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </button>
            </div>
          </div>

          <!-- Creator 7: Testing -->
          <div onclick="switchScreen('creator-detail')" class="card-human p-6 text-center cursor-pointer relative group hover:border-[#107acc]/40">
            <span class="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></span>
            <button class="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </button>
            <div class="w-24 h-24 rounded-2xl bg-[#1E293B] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 mt-2 shadow-sm group-hover:scale-105 transition-transform">
              T
            </div>
            <h4 class="text-base font-bold text-slate-900 group-hover:text-[#107acc] transition">Testing</h4>
            <div class="mt-2">
              <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-600 uppercase">TEST CREATOR</span>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex justify-end">
              <button onclick="event.stopPropagation(); switchScreen('chat');" class="p-2 rounded-lg text-slate-400 hover:text-[#107acc] hover:bg-blue-50 transition" title="Message">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </button>
            </div>
          </div>

        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 3: CREATOR DETAIL / PROFILE OVERVIEW                   -->
      <!-- ============================================================ -->
      <div id="screen-creator-detail" class="screen-view hidden space-y-6">
        
        <!-- Breadcrumb & Top Bar -->
        <div class="flex items-center justify-between">
          <div class="text-xs text-slate-500 flex items-center gap-2">
            <span class="cursor-pointer hover:text-slate-900" onclick="switchScreen('creators')">Test Creators</span>
            <span>/</span>
            <span class="font-semibold text-slate-800">Test Creator Details</span>
          </div>
          <button class="px-3.5 py-1.5 rounded-xl border border-red-200 text-red-600 text-xs font-semibold hover:bg-red-50 transition flex items-center gap-1.5">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 9h6v6H9z"></path></svg>
            Mark as Inactive
          </button>
        </div>

        <h2 class="text-xl font-bold text-slate-900">Profile Overview</h2>

        <!-- Profile Hero Card -->
        <div class="card-human p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          <div class="w-24 h-24 rounded-2xl bg-slate-100 text-slate-400 text-2xl font-bold flex items-center justify-center shrink-0">
            KP
          </div>
          <div class="space-y-2 flex-1 text-center md:text-left">
            <div class="flex flex-col md:flex-row md:items-center gap-2">
              <h3 class="text-xl font-bold text-slate-900">K Prashanti</h3>
              <span class="px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider bg-emerald-50 text-emerald-600 uppercase self-center md:self-auto">TEST CREATOR</span>
            </div>
            <p class="text-xs text-slate-500 max-w-2xl leading-relaxed">
              Specializing in technical assessment design and recruitment workflow optimization. Expertise in creating high-quality, proctored evaluations for diverse engineering roles.
            </p>
            <div class="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-600">
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                prashanti.k@gaconsulting.in
              </span>
              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +919876543000
              </span>
            </div>
          </div>
        </div>

        <!-- 3 Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card-human p-6">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">TESTS COMPLETED</span>
              <div class="w-8 h-8 rounded-lg bg-blue-50 text-[#107acc] flex items-center justify-center">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
              </div>
            </div>
            <div class="text-3xl font-extrabold text-slate-900">0</div>
            <span class="inline-block mt-2 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-600">+5%</span>
          </div>

          <div class="card-human p-6">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">AVG. CANDIDATE SCORE</span>
              <div class="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </div>
            </div>
            <div class="text-3xl font-extrabold text-slate-900">0%</div>
            <span class="inline-block mt-2 px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-600">INDUSTRY STANDARD</span>
          </div>

          <div class="card-human p-6">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">PUBLISHED TESTS</span>
              <div class="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path></svg>
              </div>
            </div>
            <div class="text-3xl font-extrabold text-slate-900">2</div>
            <button class="mt-2 text-xs font-semibold text-[#107acc] hover:underline block">View Details</button>
          </div>
        </div>

        <!-- Tests Created Table -->
        <div class="card-human p-6">
          <div class="flex items-center gap-2 mb-4">
            <svg class="w-4 h-4 text-[#107acc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
            <h3 class="text-base font-bold text-slate-900">Tests Created</h3>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead>
                <tr class="text-slate-400 uppercase font-semibold border-b border-slate-100">
                  <th class="pb-3">ASSESSMENT NAME</th>
                  <th class="pb-3">STATUS</th>
                  <th class="pb-3">CREATED DATE</th>
                  <th class="pb-3">CANDIDATES</th>
                  <th class="pb-3 text-right">ACTION</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr>
                  <td class="py-4 font-bold text-slate-900">GA Front end Developer</td>
                  <td class="py-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-600">LIVE</span></td>
                  <td class="py-4 text-slate-500">4/16/2026</td>
                  <td class="py-4 font-semibold text-slate-800"><span class="text-[#107acc]">6</span> TOTAL</td>
                  <td class="py-4 text-right">
                    <button class="p-1 text-slate-400 hover:text-[#107acc]"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
                  </td>
                </tr>
                <tr>
                  <td class="py-4 font-bold text-slate-900">WFM - Desktop Support Skill Test</td>
                  <td class="py-4"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-600">LIVE</span></td>
                  <td class="py-4 text-slate-500">4/10/2026</td>
                  <td class="py-4 font-semibold text-slate-800"><span class="text-[#107acc]">1</span> TOTAL</td>
                  <td class="py-4 text-right">
                    <button class="p-1 text-slate-400 hover:text-[#107acc]"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 4: TEST CREATION STUDIO (AUTHENTIC 3-STEP FLOW)        -->
      <!-- ============================================================ -->
      <div id="screen-test-create" class="screen-view hidden space-y-6">
        
        <!-- 3-Step Human Stepper Bar (Exact match with Screen-1,2,3 screenshots) -->
        <div class="card-human p-6">
          <div class="flex items-center justify-between max-w-3xl mx-auto relative">
            
            <!-- Step 1 Indicator -->
            <div class="flex flex-col items-center gap-2 cursor-pointer z-10" onclick="setCreationStep(1)">
              <div id="stepCircle-1" class="w-9 h-9 rounded-full bg-[#107acc] text-white flex items-center justify-center font-bold text-sm shadow-xs transition">
                1
              </div>
              <span id="stepLabel-1" class="text-xs font-bold text-[#107acc]">Test Details</span>
            </div>

            <!-- Divider Line 1-2 -->
            <div class="flex-1 h-0.5 mx-4 transition-colors" id="stepLine-1" style="background-color: #CBD5E1;"></div>

            <!-- Step 2 Indicator -->
            <div class="flex flex-col items-center gap-2 cursor-pointer z-10" onclick="setCreationStep(2)">
              <div id="stepCircle-2" class="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm transition">
                2
              </div>
              <span id="stepLabel-2" class="text-xs font-semibold text-slate-500">Set sections and questions</span>
            </div>

            <!-- Divider Line 2-3 -->
            <div class="flex-1 h-0.5 mx-4 transition-colors" id="stepLine-2" style="background-color: #CBD5E1;"></div>

            <!-- Step 3 Indicator -->
            <div class="flex flex-col items-center gap-2 cursor-pointer z-10" onclick="setCreationStep(3)">
              <div id="stepCircle-3" class="w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm transition">
                3
              </div>
              <span id="stepLabel-3" class="text-xs font-semibold text-slate-500">Preview</span>
            </div>

          </div>
        </div>

        <!-- ==================== STEP 1 CONTENT ==================== -->
        <div id="createStep-1" class="card-human p-8 space-y-6">
          
          <div class="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h2 class="text-xl font-bold text-slate-900">Assessment Details</h2>
              <p class="text-xs text-slate-500 mt-1">Enter the basic information about your assessment or upload a saved assessment</p>
            </div>
            <button class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition flex items-center gap-2 shadow-xs">
              <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              Upload Assessment JSON
            </button>
          </div>

          <!-- Assessment Intake Selector: Link vs Resume/JD AI Extractor -->
          <div class="space-y-3">
            <div class="flex items-center gap-2 border-b border-slate-200 pb-2">
              <button id="tabBtn-jobLink" onclick="switchIntakeTab('link')" class="px-4 py-1.5 rounded-lg bg-[#107acc] text-white text-xs font-bold transition shadow-xs">
                🔗 Auto-fill from Job Link
              </button>
              <button id="tabBtn-resumeUpload" onclick="switchIntakeTab('resume')" class="px-4 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-[#107acc] text-xs font-bold transition">
                📄 Upload Resume / JD (AI Auto-Fill & Generate)
              </button>
            </div>

            <!-- Tab 1: Job Link -->
            <div id="tabContent-jobLink" class="p-5 rounded-2xl bg-[#F0F7FD] border border-[#CDE4F7] space-y-3">
              <div class="flex items-center gap-2 text-xs font-bold text-[#107acc]">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                Auto-fill from Job Link
              </div>
              <p class="text-[11px] text-slate-500">Paste a job post link (LinkedIn, UdyogGenie, etc.) to automatically extract details.</p>
              <div class="flex items-center gap-2">
                <div class="relative flex-1">
                  <input type="text" placeholder="Paste Job URL (LinkedIn, UdyogGenie...)" class="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
                  <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
                <button class="px-5 py-2 rounded-xl bg-[#8BC7F2] hover:bg-[#68B2E8] text-white text-xs font-semibold transition shadow-xs">
                  Extract Details
                </button>
              </div>
            </div>

            <!-- Tab 2: Resume / JD Drag & Drop with Animated Scanning -->
            <div id="tabContent-resume" class="hidden p-5 rounded-2xl bg-white border-2 border-dashed border-[#107acc]/40 hover:border-[#107acc] transition space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#107acc] animate-ping"></span>
                    AI Resume & Job Description Intake Studio
                  </h4>
                  <p class="text-[11px] text-slate-500 mt-0.5">Drop candidate resume (PDF/DOCX) or JD to parse skills and synthesize assessment stages</p>
                </div>
                <button onclick="openTestGenerateModal()" class="px-4 py-1.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  Generate Test with AI ➔
                </button>
              </div>

              <!-- Interactive In-Page Dropzone -->
              <div id="inpageDropzone" onclick="triggerInPageResumeScan('Kalyani_Lead_IT_Support_Resume.pdf', 1.4)" class="cursor-pointer border border-slate-200 bg-slate-50/70 hover:bg-blue-50/40 rounded-xl p-5 text-center transition group">
                <div class="flex flex-col items-center gap-2">
                  <div class="w-10 h-10 rounded-xl bg-blue-100/80 text-[#107acc] flex items-center justify-center group-hover:scale-110 transition">
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
                <button type="button" onclick="triggerInPageResumeScan('Priya_Frontend_Engineer.pdf', 1.8)" class="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:border-[#107acc] text-[11px] font-semibold text-slate-700 transition flex items-center gap-1">
                  📄 Priya (Frontend Lead).pdf
                </button>
              </div>

              <!-- In-Page Scan Progress Card (Initially Hidden) -->
              <div id="inPageScanCard" class="hidden p-4 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/60 to-white space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-blue-100 text-[#107acc] flex items-center justify-center font-bold text-xs">
                      PDF
                    </div>
                    <div>
                      <span id="inPageFileName" class="text-xs font-bold text-slate-800 block">Kalyani_Lead_IT_Support.pdf</span>
                      <span id="inPageFileStatus" class="text-[10px] text-slate-500">Uploading & scanning with OCR engine...</span>
                    </div>
                  </div>
                  <span id="inPagePercent" class="text-xs font-mono font-bold text-[#107acc]">0%</span>
                </div>

                <!-- Progress Bar -->
                <div class="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div id="inPageProgressBar" class="bg-[#107acc] h-2 rounded-full transition-all duration-300" style="width: 0%"></div>
                </div>

                <!-- Extracted Badges (Revealed on Complete) -->
                <div id="inPageExtractedBadges" class="hidden pt-2 border-t border-blue-100 space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-[11px] font-bold text-slate-700">Extracted Competencies & Auto-Filled Parameters:</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">✓ Parsed</span>
                  </div>
                  <div class="flex flex-wrap gap-1.5">
                    <span class="px-2 py-0.5 rounded-md bg-blue-100 text-[#107acc] text-[11px] font-semibold pop-in">Hardware Diagnostics</span>
                    <span class="px-2 py-0.5 rounded-md bg-blue-100 text-[#107acc] text-[11px] font-semibold pop-in">TCP/IP & DHCP</span>
                    <span class="px-2 py-0.5 rounded-md bg-blue-100 text-[#107acc] text-[11px] font-semibold pop-in">Windows Server</span>
                    <span class="px-2 py-0.5 rounded-md bg-blue-100 text-[#107acc] text-[11px] font-semibold pop-in">Active Directory</span>
                    <span class="px-2 py-0.5 rounded-md bg-blue-100 text-[#107acc] text-[11px] font-semibold pop-in">SLA Helpdesk</span>
                    <span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-semibold pop-in">5.5 Yrs Exp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- STAGE SELECTION & CONFIGURABLE WORKFLOW (USER REQUIREMENT) -->
          <div class="p-5 rounded-2xl bg-white border-2 border-dashed border-slate-200 space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="text-sm font-bold text-slate-900">Configurable Assessment Stages</h4>
                <p class="text-xs text-slate-500 mt-0.5">Choose single stage or combine GradArena & Dwaani AI Interview into an automated funnel</p>
              </div>
              <span id="stageFunnelBadge" class="px-3 py-1 rounded-full text-xs font-bold bg-[#EBF5FC] text-[#107acc] border border-[#BCE0F7]">
                Combined 2-Stage Funnel
              </span>
            </div>

            <!-- Stage Toggles -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              
              <!-- Stage A: Dwaani AI Voice Interview -->
              <div id="cardStageDwaani" class="p-4 rounded-xl border-2 border-[#107acc] bg-[#EBF5FC]/40 transition space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-blue-100 text-[#107acc] flex items-center justify-center font-bold">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                    </div>
                    <div>
                      <div class="text-xs font-bold text-slate-900">Dwaani AI Voice Interview</div>
                      <div class="text-[11px] text-slate-500">Conversational AI with adaptive probing</div>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="toggleDwaani" checked onchange="handleStageToggle()" class="sr-only peer">
                    <div class="w-10 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#107acc]"></div>
                  </label>
                </div>

                <div class="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span class="font-medium text-slate-600">Minimum Passing Threshold:</span>
                  <div class="flex items-center gap-1.5 font-bold text-[#107acc]">
                    <input type="number" id="thresholdDwaaniInput" value="70" min="0" max="100" class="w-14 px-2 py-1 rounded border border-slate-200 text-center text-xs" />
                    <span>%</span>
                  </div>
                </div>
              </div>

              <!-- Stage B: GradArena Proctored Assessment -->
              <div id="cardStageGradarena" class="p-4 rounded-xl border-2 border-[#107acc] bg-[#EBF5FC]/40 transition space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-blue-100 text-[#107acc] flex items-center justify-center font-bold">
                      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    </div>
                    <div>
                      <div class="text-xs font-bold text-slate-900">GradArena Proctored Assessment</div>
                      <div class="text-[11px] text-slate-500">MCQs, Coding sandbox & Proctoring</div>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="toggleGradarena" checked onchange="handleStageToggle()" class="sr-only peer">
                    <div class="w-10 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#107acc]"></div>
                  </label>
                </div>

                <div class="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs">
                  <span class="font-medium text-slate-600">Minimum Passing Threshold:</span>
                  <div class="flex items-center gap-1.5 font-bold text-[#107acc]">
                    <input type="number" id="thresholdGradarenaInput" value="60" min="0" max="100" class="w-14 px-2 py-1 rounded border border-slate-200 text-center text-xs" />
                    <span>%</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- Sequence Ordering & Conditional Rules (Visible when both are selected) -->
            <div id="sequenceOrderingBlock" class="pt-3 border-t border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <span class="text-xs font-bold text-slate-700">Execution Order:</span>
                <select id="sequenceSelect" onchange="updateSequenceOrder(this.value)" class="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#107acc]">
                  <option value="dwaani_first">1. Dwaani AI Interview ➔ 2. GradArena Assessment</option>
                  <option value="gradarena_first">1. GradArena Assessment ➔ 2. Dwaani AI Interview</option>
                </select>
              </div>

              <div class="flex items-center gap-3">
                <span class="text-xs font-bold text-slate-700">If Candidate Fails Stage 1:</span>
                <select id="failureRuleSelect" class="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#107acc]">
                  <option value="stop">Stop Workflow (Candidate Exits)</option>
                  <option value="review">Hold for Recruiter Review</option>
                </select>
              </div>
            </div>

          </div>

          <!-- Divider -->
          <div class="relative py-2">
            <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-200"></div></div>
            <div class="relative flex justify-center text-xs uppercase"><span class="bg-white px-3 text-slate-400 font-semibold tracking-wider">OR FILL MANUALLY</span></div>
          </div>

          <!-- Form Fields (Exact replica of original Screen 1) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-800">Assessment Title <span class="text-red-500">*</span></label>
              <input type="text" id="inputQuizTitle" value="Senior Full Stack Java & Cloud Architect" placeholder="e.g., History Quiz" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-800">Level <span class="text-red-500">*</span></label>
              <select class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]">
                <option>Advanced / Principal</option>
                <option>Mid-Level</option>
                <option>Entry-Level</option>
              </select>
            </div>

            <div class="md:col-span-2 space-y-1.5">
              <div class="flex justify-between items-center">
                <label class="text-xs font-bold text-slate-800">Job Description <span class="text-red-500">*</span></label>
                <button class="text-xs text-[#107acc] font-semibold hover:underline flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"></path><path d="M9 21H3v-6"></path><path d="M21 3l-7 7"></path><path d="M3 21l7-7"></path></svg>
                  Maximize
                </button>
              </div>
              <textarea rows="4" placeholder="Enter job description..." class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]">Design and scale fault-tolerant distributed microservices using Spring Boot, Kafka, and Kubernetes. Conduct algorithmic evaluations and assess architectural resilience.</textarea>
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-800">Client Name</label>
              <input type="text" value="Capgemini GCC" placeholder="e.g., Acme Corp" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-800">Percentage to Pass <span class="text-red-500">*</span></label>
              <input type="text" value="65" placeholder="e.g., 60" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
            </div>

            <div class="md:col-span-2 space-y-1.5">
              <label class="text-xs font-bold text-slate-800">Skills</label>
              <input type="text" value="Java 17, Spring Cloud, Kafka, Distributed Systems, Docker, AWS" placeholder="e.g. ReactJS, NodeJS..." class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
            </div>

          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-6 border-t border-slate-100 flex justify-end">
            <button onclick="setCreationStep(2)" class="px-6 py-2.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-semibold transition shadow-xs">
              Next
            </button>
          </div>

        </div>

        <!-- ==================== STEP 2 CONTENT ==================== -->
        <div id="createStep-2" class="card-human p-8 hidden space-y-6">
          
          <!-- Blue Banner: Generate Sections with JD -->
          <div class="p-6 rounded-2xl bg-[#107acc] text-white flex items-center justify-between shadow-xs">
            <div class="space-y-1">
              <h3 class="text-lg font-bold">Generate Sections with JD</h3>
              <p class="text-xs text-blue-100">Let our AI analyze the JD and suggest high-quality questions automatically.</p>
              <div class="pt-3">
                <button onclick="openTestGenerateModal()" class="px-5 py-2 rounded-xl bg-white text-[#107acc] font-bold text-xs hover:bg-blue-50 transition flex items-center gap-1.5 shadow-sm">
                  <svg class="w-4 h-4 text-[#107acc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  Generate Now ➔
                </button>
              </div>
            </div>
            <div class="hidden sm:block opacity-80">
              <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
          </div>

          <!-- Section Tabs -->
          <div class="flex items-center gap-2 border-b border-slate-200 pb-2">
            <button class="px-4 py-2 rounded-lg bg-slate-100 text-[#107acc] font-bold text-xs border border-slate-200">
              Section 1
            </button>
            <button class="px-4 py-2 rounded-lg text-slate-500 font-semibold text-xs hover:bg-slate-50 transition">
              + Add Section
            </button>
          </div>

          <!-- Section Form Fields (Exact replica of original Screen 2) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-800">Section Name <span class="text-red-500">*</span></label>
              <input type="text" value="Core Java & Distributed Microservices" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-800">Section Type <span class="text-red-500">*</span></label>
              <select class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]">
                <option>Multiple Choice (MCQs)</option>
                <option>Algorithmic Coding Sandbox</option>
                <option>System Architecture Design</option>
              </select>
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-800">Time Limit (HH:MM:SS) <span class="text-red-500">*</span></label>
              <input type="text" value="00:45:00" placeholder="HH:MM:SS" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-800">No of Questions</label>
              <input type="text" value="15" readonly class="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-500" />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-800">Expected No of Questions <span class="text-red-500">*</span></label>
              <input type="text" value="15" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-800">Marks Per Question <span class="text-red-500">*</span></label>
              <input type="text" value="2" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold text-slate-800">Negative Marks Per Question <span class="text-red-500">*</span></label>
              <input type="text" value="0.5" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
            </div>

          </div>

          <div>
            <button class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition shadow-xs">
              + Add Question
            </button>
          </div>

          <!-- Bottom Nav Buttons -->
          <div class="pt-6 border-t border-slate-100 flex items-center justify-between">
            <button onclick="setCreationStep(1)" class="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition">
              Back
            </button>
            <button onclick="setCreationStep(3)" class="px-6 py-2.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-semibold transition shadow-xs">
              Update and Next
            </button>
          </div>

        </div>

        <!-- ==================== STEP 3 CONTENT ==================== -->
        <div id="createStep-3" class="card-human p-8 hidden space-y-8">
          
          <!-- Quiz Details Accordion (Exact replica of original Screen 3) -->
          <div class="space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div class="flex items-center gap-2">
                <h3 class="text-lg font-bold text-slate-900">Quiz Details</h3>
                <button class="text-slate-400 hover:text-slate-600">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                </button>
              </div>
              <svg class="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-xs">
              <div>
                <span class="text-slate-400 block mb-0.5">Quiz Title</span>
                <span class="font-bold text-slate-800 text-sm">Senior Full Stack Java & Cloud Architect</span>
              </div>
              <div>
                <span class="text-slate-400 block mb-0.5">Description</span>
                <span class="text-slate-600">Design and scale fault-tolerant distributed microservices.</span>
              </div>
              <div>
                <span class="text-slate-400 block mb-0.5">Level</span>
                <span class="font-semibold text-slate-800">Advanced / Principal</span>
              </div>
              <div>
                <span class="text-slate-400 block mb-0.5">Duration</span>
                <span class="font-semibold text-slate-800 font-mono">00:45:00</span>
              </div>
              <div>
                <span class="text-slate-400 block mb-0.5">Passing Percentage</span>
                <span class="font-semibold text-[#107acc]">65%</span>
              </div>
            </div>
          </div>

          <!-- Workflow Funnel Blueprint Confirmation (User Requirement Step 5: Review and Create) -->
          <div class="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700">Multi-Stage Workflow Execution Sequence</h4>
            
            <div class="flex flex-col sm:flex-row items-center gap-3 text-xs">
              
              <!-- Stage 1 Capsule -->
              <div class="flex-1 p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                <div>
                  <span class="text-[10px] font-bold text-slate-400 uppercase font-mono block">STEP 1</span>
                  <span id="previewStage1Name" class="font-bold text-slate-900">Dwaani AI Voice Interview</span>
                </div>
                <span id="previewStage1Pass" class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#EBF5FC] text-[#107acc]">Min 70% Pass</span>
              </div>

              <!-- Arrow -->
              <div class="text-slate-400 font-bold shrink-0">➔</div>

              <!-- Stage 2 Capsule -->
              <div class="flex-1 p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                <div>
                  <span class="text-[10px] font-bold text-slate-400 uppercase font-mono block">STEP 2</span>
                  <span id="previewStage2Name" class="font-bold text-slate-900">GradArena Proctored Assessment</span>
                </div>
                <span id="previewStage2Pass" class="px-2 py-0.5 rounded text-[11px] font-bold bg-[#EBF5FC] text-[#107acc]">Min 60% Pass</span>
              </div>

            </div>

            <p class="text-[11px] text-slate-500 pt-1">
              * Progression Rule: Candidates meeting Step 1 threshold will automatically unlock Step 2. Candidates falling below will follow the configured failure policy.
            </p>
          </div>

          <!-- Sections Accordion -->
          <div class="space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div class="flex items-center gap-2">
                <h3 class="text-lg font-bold text-slate-900">Sections</h3>
                <button class="text-slate-400 hover:text-slate-600">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                </button>
              </div>
              <svg class="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </div>
            <div class="text-xs text-slate-600">
              <strong>Section 1:</strong> Core Java & Distributed Microservices (15 Questions, 30 Marks Total)
            </div>
          </div>

          <!-- Bottom Action Buttons (Exact replica of original Screen 3) -->
          <div class="pt-6 border-t border-slate-100 flex items-center justify-between">
            <button onclick="setCreationStep(2)" class="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition">
              Back
            </button>
            <div class="flex items-center gap-3">
              <button class="px-5 py-2.5 rounded-xl border border-slate-200 bg-[#EBF5FC] text-[#107acc] text-xs font-bold hover:bg-blue-100 transition flex items-center gap-1.5 shadow-xs">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download Test JSON
              </button>
              <button onclick="alert('Assessment created and deployed successfully!'); switchScreen('tests');" class="px-6 py-2.5 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white text-xs font-bold transition shadow-xs">
                Publish Test
              </button>
            </div>
          </div>

        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 5: TESTS LIST (EXACT ORIGINAL LAYOUT)                  -->
      <!-- ============================================================ -->
      <div id="screen-tests" class="screen-view hidden space-y-6">
        
        <!-- Header & Action -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p class="text-sm text-slate-500">Manage and oversee all assessment assets for your organization with localized data.</p>
          <button onclick="switchScreen('test-create')" class="px-4 py-2 rounded-xl bg-[#107acc] text-white text-xs font-semibold hover:bg-[#0c68ab] transition flex items-center gap-1.5 shadow-xs">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Create New Test
          </button>
        </div>

        <!-- 3 Stat Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card-human p-6">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
              </div>
              <div>
                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">ACTIVE TESTS</span>
                <span class="text-3xl font-extrabold text-slate-900">30</span>
              </div>
            </div>
          </div>

          <div class="card-human p-6">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
              </div>
              <div>
                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">TOTAL CANDIDATES</span>
                <span class="text-3xl font-extrabold text-slate-900">284</span>
              </div>
            </div>
          </div>

          <div class="card-human p-6">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>
              <div>
                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">AVG. PASS RATE</span>
                <span class="text-3xl font-extrabold text-slate-900">26.2%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Filter Row (Exact match with original screenshot) -->
        <div class="card-human p-4 flex flex-wrap items-center gap-3">
          <div class="relative flex-1 min-w-[200px]">
            <input type="text" placeholder="Search assessment..." class="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
            <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <select class="px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white text-slate-700">
            <option>All Creators</option>
          </select>
          <select class="px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white text-slate-700">
            <option>All Clients</option>
          </select>
          <select class="px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white text-slate-700">
            <option>All Statuses</option>
          </select>
          <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-500">
            <span>mm/dd/yyyy</span>
            <span>TO</span>
            <span>mm/dd/yyyy</span>
          </div>
        </div>

        <!-- Tests Table (Exact match with original screenshot) -->
        <div class="card-human overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead>
                <tr class="bg-slate-50/70 text-slate-500 uppercase font-semibold border-b border-slate-100">
                  <th class="p-4 w-10"><input type="checkbox" class="rounded border-slate-300" /></th>
                  <th class="py-4 px-2">TEST NAME</th>
                  <th class="py-4 px-2">CLIENT NAME</th>
                  <th class="py-4 px-2">CREATED BY</th>
                  <th class="py-4 px-2">TIMELINE ↓</th>
                  <th class="py-4 px-2">STATS</th>
                  <th class="py-4 px-2">STATUS</th>
                  <th class="py-4 px-4 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                
                <tr class="hover:bg-slate-50/80 transition">
                  <td class="p-4"><input type="checkbox" class="rounded border-slate-300" /></td>
                  <td class="py-4 px-2 font-bold text-slate-900 cursor-pointer hover:text-[#107acc]" onclick="switchScreen('test-detail')">
                    LEAD generation Excutive
                  </td>
                  <td class="py-4 px-2 text-slate-600">Niitaka Meru Private Limited</td>
                  <td class="py-4 px-2">
                    <span class="font-semibold text-slate-800 block">Madhuri ReddyShetty</span>
                    <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-[#107acc]">MANAGER</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="text-[10px] text-slate-400 uppercase font-mono block">LAST MODIFIED</span>
                    <span class="font-semibold text-slate-700">Oct 12, 2026</span>
                    <span class="text-[11px] text-slate-400 block">06:11 PM</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="font-extrabold text-slate-900 text-sm block">0</span>
                    <span class="text-[10px] text-slate-400 uppercase">CANDIDATES</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-600 ml-1">0% Pass</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600">PUBLISHED</span>
                  </td>
                  <td class="py-4 px-4 text-right">
                    <div class="flex items-center justify-end gap-2 text-slate-400">
                      <button class="hover:text-slate-700"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>
                      <button class="hover:text-slate-700"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button>
                      <button class="hover:text-slate-700"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></button>
                      <button class="hover:text-red-600"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
                    </div>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/80 transition">
                  <td class="p-4"><input type="checkbox" class="rounded border-slate-300" /></td>
                  <td class="py-4 px-2 font-bold text-slate-900 cursor-pointer hover:text-[#107acc]" onclick="switchScreen('test-detail')">
                    Hardware Support (Tier 1)
                  </td>
                  <td class="py-4 px-2 text-slate-600">WFM</td>
                  <td class="py-4 px-2">
                    <span class="font-semibold text-slate-800 block">P Hemachandra</span>
                    <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-600">TEST_CREATOR</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="text-[10px] text-slate-400 uppercase font-mono block">LAST MODIFIED</span>
                    <span class="font-semibold text-slate-700">Oct 7, 2026</span>
                    <span class="text-[11px] text-slate-400 block">03:53 PM</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="font-extrabold text-slate-900 text-sm block">1</span>
                    <span class="text-[10px] text-slate-400 uppercase">CANDIDATES</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-600 ml-1">0% Pass</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600">PUBLISHED</span>
                  </td>
                  <td class="py-4 px-4 text-right">
                    <div class="flex items-center justify-end gap-2 text-slate-400">
                      <button class="hover:text-slate-700"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>
                      <button class="hover:text-slate-700"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button>
                      <button class="hover:text-slate-700"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></button>
                      <button class="hover:text-red-600"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
                    </div>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/80 transition">
                  <td class="p-4"><input type="checkbox" class="rounded border-slate-300" /></td>
                  <td class="py-4 px-2 font-bold text-slate-900 cursor-pointer hover:text-[#107acc]" onclick="switchScreen('test-detail')">
                    Accountant
                  </td>
                  <td class="py-4 px-2 text-slate-600">Meha</td>
                  <td class="py-4 px-2">
                    <span class="font-semibold text-slate-800 block">Sunil Ajay</span>
                    <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-600">TEST_CREATOR</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="text-[10px] text-slate-400 uppercase font-mono block">LAST MODIFIED</span>
                    <span class="font-semibold text-slate-700">Sep 30, 2026</span>
                    <span class="text-[11px] text-slate-400 block">04:55 PM</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="font-extrabold text-slate-900 text-sm block">2</span>
                    <span class="text-[10px] text-slate-400 uppercase">CANDIDATES</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-600 ml-1">0% Pass</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600">PUBLISHED</span>
                  </td>
                  <td class="py-4 px-4 text-right">
                    <div class="flex items-center justify-end gap-2 text-slate-400">
                      <button class="hover:text-slate-700"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>
                      <button class="hover:text-slate-700"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button>
                      <button class="hover:text-slate-700"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></button>
                      <button class="hover:text-red-600"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
                    </div>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/80 transition">
                  <td class="p-4"><input type="checkbox" class="rounded border-slate-300" /></td>
                  <td class="py-4 px-2 font-bold text-slate-900 cursor-pointer hover:text-[#107acc]" onclick="switchScreen('test-detail')">
                    Manual Tester
                  </td>
                  <td class="py-4 px-2 text-slate-600">Testing</td>
                  <td class="py-4 px-2">
                    <span class="font-semibold text-slate-800 block">Madhuri ReddyShetty</span>
                    <span class="px-2 py-0.5 rounded text-[9px] font-bold bg-blue-50 text-[#107acc]">MANAGER</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="text-[10px] text-slate-400 uppercase font-mono block">LAST MODIFIED</span>
                    <span class="font-semibold text-slate-700">Sep 30, 2026</span>
                    <span class="text-[11px] text-slate-400 block">04:36 PM</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="font-extrabold text-slate-900 text-sm block">0</span>
                    <span class="text-[10px] text-slate-400 uppercase">CANDIDATES</span>
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-50 text-emerald-600 ml-1">0% Pass</span>
                  </td>
                  <td class="py-4 px-2">
                    <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600">DRAFT</span>
                  </td>
                  <td class="py-4 px-4 text-right">
                    <div class="flex items-center justify-end gap-2 text-slate-400">
                      <button class="hover:text-slate-700"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>
                      <button class="hover:text-slate-700"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button>
                      <button class="hover:text-slate-700"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg></button>
                      <button class="hover:text-red-600"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <!-- Pagination Bar -->
          <div class="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Showing <strong>1</strong> to <strong>4</strong> of <strong>32</strong> tests</span>
            <div class="flex items-center gap-1.5">
              <button class="w-7 h-7 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">&lt;</button>
              <button class="w-7 h-7 rounded bg-[#107acc] text-white font-bold flex items-center justify-center">1</button>
              <button class="w-7 h-7 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">2</button>
              <button class="w-7 h-7 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">3</button>
              <span class="px-1 text-slate-400">...</span>
              <button class="w-7 h-7 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">8</button>
              <button class="w-7 h-7 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">&gt;</button>
            </div>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 6: TEST DETAIL & BLUEPRINT                             -->
      <!-- ============================================================ -->
      <div id="screen-test-detail" class="screen-view hidden space-y-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-xs text-slate-500">
            <span class="cursor-pointer hover:text-slate-900" onclick="switchScreen('tests')">Tests</span>
            <span>/</span>
            <span class="font-semibold text-slate-800">LEAD generation Excutive</span>
          </div>
          <button onclick="switchScreen('tests')" class="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition">
            ← Back to Tests
          </button>
        </div>

        <div class="card-human p-6">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div class="flex items-center gap-2.5">
                <h2 class="text-xl font-bold text-slate-900">LEAD generation Excutive</h2>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600">PUBLISHED</span>
              </div>
              <p class="text-xs text-slate-500 mt-1">Niitaka Meru Private Limited • Created by Madhuri ReddyShetty</p>
            </div>
            <button onclick="switchScreen('test-create')" class="px-4 py-2 rounded-xl bg-[#107acc] text-white text-xs font-semibold hover:bg-[#0c68ab] transition">
              Edit Assessment
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span class="text-xs text-slate-400 uppercase font-semibold">Total Questions</span>
              <div class="text-2xl font-bold text-slate-900 mt-1">20</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span class="text-xs text-slate-400 uppercase font-semibold">Duration</span>
              <div class="text-2xl font-bold text-slate-900 mt-1 font-mono">40m</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span class="text-xs text-slate-400 uppercase font-semibold">Pass Threshold</span>
              <div class="text-2xl font-bold text-[#107acc] mt-1">70%</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span class="text-xs text-slate-400 uppercase font-semibold">Candidates Invited</span>
              <div class="text-2xl font-bold text-slate-900 mt-1">12</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 7: PENDING REVIEWS (EXACT ORIGINAL LAYOUT)             -->
      <!-- ============================================================ -->
      <div id="screen-reviews" class="screen-view hidden space-y-6">
        
        <!-- Header & Action -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p class="text-sm text-slate-500">Review and manage pending assessments from your team.</p>
          <div class="flex items-center gap-3">
            <div class="relative w-64">
              <input type="text" placeholder="Search reviews..." class="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
              <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <select class="px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white text-slate-700">
              <option>All Clients</option>
            </select>
            <button class="px-4 py-2 rounded-xl bg-[#107acc] text-white text-xs font-semibold hover:bg-[#0c68ab] transition flex items-center gap-1.5 shadow-xs">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Bulk Approve
            </button>
          </div>
        </div>

        <!-- 3 Stat Cards (Exact match with screenshot) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card-human p-6">
            <div class="flex items-center justify-between mb-2">
              <div class="w-10 h-10 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              </div>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600">↗ 12%</span>
            </div>
            <div class="text-xs font-medium text-slate-500">Total Pending</div>
            <div class="text-3xl font-extrabold text-slate-900 mt-1">0</div>
          </div>

          <div class="card-human p-6">
            <div class="flex items-center justify-between mb-2">
              <div class="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-red-600">↗ 2</span>
            </div>
            <div class="text-xs font-medium text-slate-500">Overdue Reviews</div>
            <div class="text-3xl font-extrabold text-slate-900 mt-1">0</div>
          </div>

          <div class="card-human p-6">
            <div class="flex items-center justify-between mb-2">
              <div class="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600">✓ Today</span>
            </div>
            <div class="text-xs font-medium text-slate-500">Approved Today</div>
            <div class="text-3xl font-extrabold text-slate-900 mt-1">0</div>
          </div>
        </div>

        <!-- Empty State Container (Exact match with screenshot) -->
        <div class="card-human p-16 text-center">
          <div class="w-16 h-16 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mx-auto mb-4 border border-slate-100">
            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h4 class="text-base font-bold text-slate-800">No pending reviews found.</h4>
          <p class="text-xs text-slate-400 mt-1">Great job! You're all caught up.</p>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 8: CANDIDATES (EXACT ORIGINAL LAYOUT)                  -->
      <!-- ============================================================ -->
      <div id="screen-candidates" class="screen-view hidden space-y-6">
        
        <!-- Filter Bar (Exact match with screenshot) -->
        <div class="card-human p-4 space-y-3">
          <div class="flex flex-wrap items-center gap-3">
            <div class="relative flex-1 min-w-[240px]">
              <input type="text" placeholder="Search candidates..." class="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 focus:border-[#107acc]" />
              <svg class="w-4 h-4 text-slate-400 absolute left-3 top-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <select class="px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white text-slate-700">
              <option>All Clients</option>
            </select>
            <select class="px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white text-slate-700">
              <option>All Tests</option>
            </select>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
            <div class="flex flex-wrap items-center gap-3">
              <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs text-slate-500">
                <span>mm/dd/yyyy</span>
                <span>TO</span>
                <span>mm/dd/yyyy</span>
              </div>
              <div class="flex items-center gap-1.5 text-xs text-slate-500">
                <input type="text" placeholder="Min %" class="w-16 px-2 py-1.5 rounded-xl border border-slate-200 text-center text-xs" />
                <span>-</span>
                <input type="text" placeholder="Max %" class="w-16 px-2 py-1.5 rounded-xl border border-slate-200 text-center text-xs" />
              </div>
              <select class="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-700">
                <option>All Recs</option>
              </select>
              <select class="px-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-white text-slate-700">
                <option>All Candidates</option>
              </select>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="openResumeUploadModal()" class="px-4 py-1.5 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition flex items-center gap-1.5 shadow-xs">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                UPLOAD & PARSE RESUMES
              </button>
              <button class="px-4 py-1.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 text-xs font-bold hover:bg-emerald-100 transition flex items-center gap-1.5 shadow-xs">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                EXPORT
              </button>
            </div>
          </div>
        </div>

        <!-- 3 Stat Cards (Exact match with screenshot) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card-human p-6">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
              </div>
              <div>
                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">TOTAL CANDIDATES</span>
                <span class="text-3xl font-extrabold text-slate-900">284</span>
              </div>
            </div>
          </div>

          <div class="card-human p-6">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
              </div>
              <div>
                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">EVALUATED CANDIDATES</span>
                <span class="text-3xl font-extrabold text-slate-900">0</span>
              </div>
            </div>
          </div>

          <div class="card-human p-6">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>
              <div>
                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider block">AVG. PASS RATE</span>
                <span class="text-3xl font-extrabold text-slate-900">77%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Candidates Table (Exact replica of original screenshot) -->
        <div class="card-human overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead>
                <tr class="bg-slate-50/70 text-slate-500 uppercase font-semibold border-b border-slate-100">
                  <th class="py-4 px-6">CANDIDATE NAME</th>
                  <th class="py-4 px-4">TEST NAME</th>
                  <th class="py-4 px-4">STATUS</th>
                  <th class="py-4 px-4">EMAIL ID</th>
                  <th class="py-4 px-4">ATTEMPT</th>
                  <th class="py-4 px-4">SCORE</th>
                  <th class="py-4 px-6 text-right">ACTIONS</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                
                <tr class="hover:bg-slate-50/80 transition cursor-pointer" onclick="switchScreen('candidate-detail')">
                  <td class="py-4 px-6 font-bold text-slate-900 flex items-center gap-2.5">
                    <img src="assets/candidate/avatar-nazeer.jpg" alt="nazeer" class="w-7 h-7 rounded-full object-cover shrink-0 border border-slate-200" />
                    <span>nazeer</span>
                  </td>
                  <td class="py-4 px-4 text-slate-600 font-medium">WEB APPLICATION 1</td>
                  <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600">COMPLETED</span></td>
                  <td class="py-4 px-4 text-slate-500">nazeer@gadigitalsolutions.com</td>
                  <td class="py-4 px-4 font-bold text-slate-800">#1</td>
                  <td class="py-4 px-4 font-bold text-[#107acc]">1.25/100</td>
                  <td class="py-4 px-6 text-right">
                    <button class="p-1.5 text-slate-400 hover:text-[#107acc]"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/80 transition cursor-pointer" onclick="switchScreen('candidate-detail')">
                  <td class="py-4 px-6 font-bold text-slate-900 flex items-center gap-2.5">
                    <img src="assets/candidate/avatar-kalyani.jpg" alt="Kalyani" class="w-7 h-7 rounded-full object-cover shrink-0 border border-slate-200" />
                    <span>Kalyani</span>
                  </td>
                  <td class="py-4 px-4 text-slate-600 font-medium">Hardware Support (Tier 1)</td>
                  <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600">COMPLETED</span></td>
                  <td class="py-4 px-4 text-slate-500">kalyani@gaconsulting.in</td>
                  <td class="py-4 px-4 font-bold text-slate-800">#1</td>
                  <td class="py-4 px-4 font-bold text-[#107acc]">5/100</td>
                  <td class="py-4 px-6 text-right">
                    <button class="p-1.5 text-slate-400 hover:text-[#107acc]"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/80 transition cursor-pointer" onclick="switchScreen('candidate-detail')">
                  <td class="py-4 px-6 font-bold text-slate-900">nazeer</td>
                  <td class="py-4 px-4 text-slate-600 font-medium">Accountant</td>
                  <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600">SENT</span></td>
                  <td class="py-4 px-4 text-slate-500">pramodmotupalli31@gmail.com</td>
                  <td class="py-4 px-4 font-bold text-slate-800">#1</td>
                  <td class="py-4 px-4 font-bold text-slate-400">N/A</td>
                  <td class="py-4 px-6 text-right">
                    <button class="p-1.5 text-slate-400 hover:text-[#107acc]"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/80 transition cursor-pointer" onclick="switchScreen('candidate-detail')">
                  <td class="py-4 px-6 font-bold text-slate-900 flex items-center gap-2.5">
                    <img src="assets/candidate/avatar-pramod.jpg" alt="Pramod" class="w-7 h-7 rounded-full object-cover shrink-0 border border-slate-200" />
                    <span>Pramod</span>
                  </td>
                  <td class="py-4 px-4 text-slate-600 font-medium">Accountant</td>
                  <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600">COMPLETED</span></td>
                  <td class="py-4 px-4 text-slate-500">sunilgaconsulting@gmail.com</td>
                  <td class="py-4 px-4 font-bold text-slate-800">#1</td>
                  <td class="py-4 px-4 font-bold text-[#107acc]">32.14/100</td>
                  <td class="py-4 px-6 text-right">
                    <button class="p-1.5 text-slate-400 hover:text-[#107acc]"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
                  </td>
                </tr>

                <tr class="hover:bg-slate-50/80 transition cursor-pointer" onclick="switchScreen('candidate-detail')">
                  <td class="py-4 px-6 font-bold text-slate-900 flex items-center gap-2.5">
                    <img src="assets/candidate/avatar-manikanta.jpg" alt="Manikanta" class="w-7 h-7 rounded-full object-cover shrink-0 border border-slate-200" />
                    <span>Manikanta</span>
                  </td>
                  <td class="py-4 px-4 text-slate-600 font-medium">Website Technologies</td>
                  <td class="py-4 px-4"><span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600">COMPLETED</span></td>
                  <td class="py-4 px-4 text-slate-500">manigoudkandhala@gmail.com</td>
                  <td class="py-4 px-4 font-bold text-slate-800">#1</td>
                  <td class="py-4 px-4 font-bold text-[#107acc]">47.5/100</td>
                  <td class="py-4 px-6 text-right">
                    <button class="p-1.5 text-slate-400 hover:text-[#107acc]"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <!-- Pagination Bar -->
          <div class="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Showing <strong>1</strong> to <strong>5</strong> of <strong>284</strong></span>
            <div class="flex items-center gap-1.5">
              <button class="w-7 h-7 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">&lt;</button>
              <button class="w-7 h-7 rounded bg-[#107acc] text-white font-bold flex items-center justify-center">1</button>
              <button class="w-7 h-7 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">2</button>
              <span class="px-1 text-slate-400">...</span>
              <button class="w-7 h-7 rounded border border-slate-200 flex items-center justify-center hover:bg-slate-50">57</button>
              <button class="w-7 h-7 rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50">&gt;</button>
            </div>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 9: CANDIDATE DETAIL / EVALUATION (EXACT ORIGINAL)      -->
      <!-- ============================================================ -->
      <div id="screen-candidate-detail" class="screen-view hidden space-y-6">
        
        <!-- Back Navigation & Top Bar -->
        <div class="flex items-center justify-between">
          <button onclick="switchScreen('candidates')" class="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition flex items-center gap-1.5">
            ← Back
          </button>
          <div class="flex items-center gap-2">
            <button class="px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition flex items-center gap-1.5">
              <svg class="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
              Share
            </button>
            <button class="px-4 py-1.5 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab] transition">
              PDF Report
            </button>
          </div>
        </div>

        <!-- Candidate Banner (Matches Kalyani screenshot with authentic photo) -->
        <div class="card-human p-6 relative overflow-hidden">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-4">
              <img src="assets/candidate/avatar-kalyani.jpg" alt="Kalyani" class="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-slate-100 shrink-0" />
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="text-xl font-bold text-slate-900">Kalyani</h3>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">ID: CAND-8842</span>
                </div>
                <div class="text-xs text-slate-500 flex items-center gap-2 mt-1">
                  <span class="font-bold text-[#107acc]">Overall Score: 5%</span>
                  <span>•</span>
                  <span class="font-semibold text-emerald-600">ATTEMPT #1</span>
                  <span>•</span>
                  <span>Started: Oct 7, 2026, 4:03 PM</span>
                </div>
                <div class="text-[11px] text-slate-400 mt-0.5">
                  Completed: Oct 7, 2026, 4:23 PM • Time: 20m 23s • Hardware Support (Tier 1)
                </div>
              </div>
            </div>
            
            <!-- Red FAILED Stamp from screenshot -->
            <div class="border-2 border-red-500 text-red-500 font-extrabold text-sm tracking-widest px-3 py-1 rounded rotate-[-12deg] self-start sm:self-center bg-red-50/50 shadow-xs">
              FAILED
            </div>
          </div>
        </div>

        <!-- Section Navigation Bar -->
        <div class="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
          <button class="text-slate-400 hover:text-slate-700">&lt;</button>
          <div class="text-center">
            <span class="font-bold text-slate-900">Section: Core IT Support & Hardware</span>
            <div class="text-[11px] text-slate-500 mt-0.5">
              Avg Time: 7.6s • Total Time: 76s • Fast Answers: 6
            </div>
          </div>
          <button class="text-slate-400 hover:text-slate-700">&gt;</button>
        </div>

        <!-- Proctoring Timeline (Authentic 8 Webcam Snapshots from screenshot) -->
        <div class="card-human p-6 space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2">
              <h4 class="font-bold text-slate-900">Proctoring Timeline</h4>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-[#EBF5FC] text-[#107acc]">PRIMARY CAMERA (WEBCAM) • 8 SHOTS</span>
            </div>
            <div class="flex items-center gap-4 text-[11px] font-medium text-slate-500">
              <label class="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" class="rounded border-slate-300 text-[#107acc] focus:ring-0" />
                <span>SELECT ALL (8)</span>
              </label>
              <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> NORMAL</span>
              <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-500"></span> CAUTION</span>
              <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-red-500"></span> FLAGGED</span>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            
            <!-- Snapshot 1 -->
            <div class="rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-1.jpg" alt="Webcam 4:03:00 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-slate-500 text-center mt-1.5">4:03:00 PM</div>
            </div>

            <!-- Snapshot 2 -->
            <div class="rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-2.jpg" alt="Webcam 4:05:08 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-slate-500 text-center mt-1.5">4:05:08 PM</div>
            </div>

            <!-- Snapshot 3 -->
            <div class="rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-3.jpg" alt="Webcam 4:09:16 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-slate-500 text-center mt-1.5">4:09:16 PM</div>
            </div>

            <!-- Snapshot 4 (Caution) -->
            <div class="rounded-xl border border-amber-200 bg-amber-50/30 p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-4.jpg" alt="Webcam 4:13:24 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-amber-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-amber-700 text-center mt-1.5 font-bold">4:13:24 PM</div>
            </div>

            <!-- Snapshot 5 -->
            <div class="rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-5.jpg" alt="Webcam 4:17:32 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-slate-500 text-center mt-1.5">4:17:32 PM</div>
            </div>

            <!-- Snapshot 6 (Flagged) -->
            <div class="rounded-xl border border-red-200 bg-red-50/30 p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-6.jpg" alt="Webcam 4:21:40 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-red-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-red-700 text-center mt-1.5 font-bold">4:21:40 PM</div>
            </div>

            <!-- Snapshot 7 -->
            <div class="rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-7.jpg" alt="Webcam 4:22:48 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-slate-500 text-center mt-1.5">4:22:48 PM</div>
            </div>

            <!-- Snapshot 8 -->
            <div class="rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xs hover:shadow-xs transition group">
              <div class="relative rounded-lg overflow-hidden h-20 bg-slate-100">
                <img src="assets/candidate/webcam-8.jpg" alt="Webcam 4:23:56 PM" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span class="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                <input type="checkbox" class="absolute top-1 right-1 rounded border-white/60 bg-white/80 w-3.5 h-3.5" />
              </div>
              <div class="text-[10px] font-mono text-slate-500 text-center mt-1.5">4:23:56 PM</div>
            </div>

          </div>

          <!-- Pagination Bar for Snapshots -->
          <div class="pt-2 flex items-center justify-center gap-1 text-xs text-slate-500">
            <button class="w-6 h-6 rounded bg-[#107acc] text-white font-bold flex items-center justify-center">1</button>
            <button class="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center">2</button>
            <button class="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center">3</button>
            <button class="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center">4</button>
            <button class="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center">5</button>
            <span class="px-1 text-slate-400">...</span>
            <button class="w-6 h-6 rounded hover:bg-slate-100 flex items-center justify-center">&gt;</button>
          </div>
        </div>

        <!-- Question Breakdown Sample (Q1-Q3 from screenshot) -->
        <div class="space-y-4">
          
          <!-- Q1 -->
          <div class="card-human p-6 space-y-3">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-slate-900">Q1. Which of the following is typically the first step in troubleshooting a computer issue?</span>
              <span class="text-slate-400 font-mono">Time: 12s • Visits: 1</span>
            </div>
            <div class="space-y-2 text-xs">
              <div class="p-2.5 rounded-lg border border-red-200 bg-red-50 text-red-700 flex justify-between items-center">
                <span><strong>A</strong> Replacing hardware components</span>
                <span class="font-bold uppercase text-[10px]">SELECTED</span>
              </div>
              <div class="p-2.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 flex justify-between items-center">
                <span><strong>B</strong> Gathering information about the problem</span>
                <span class="font-bold uppercase text-[10px]">CORRECT</span>
              </div>
              <div class="p-2.5 rounded-lg border border-slate-200 text-slate-600">
                <span><strong>C</strong> Reinstalling the operating system</span>
              </div>
            </div>
            <div class="text-[11px] font-bold text-red-500">Marks Allotted: 0 / 1</div>
          </div>

          <!-- Q2 -->
          <div class="card-human p-6 space-y-3">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-slate-900">Q2. A user reports that their printer is not printing. What is a common initial troubleshooting step?</span>
              <span class="text-slate-400 font-mono">Time: 1s • Visits: 4 (Very Fast)</span>
            </div>
            <div class="space-y-2 text-xs">
              <div class="p-2.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 flex justify-between items-center">
                <span><strong>B</strong> Checking if the printer is powered on and connected</span>
                <span class="font-bold uppercase text-[10px]">CORRECT</span>
              </div>
              <div class="p-2.5 rounded-lg border border-red-200 bg-red-50 text-red-700 flex justify-between items-center">
                <span><strong>D</strong> Installing a new operating system on the computer</span>
                <span class="font-bold uppercase text-[10px]">SELECTED</span>
              </div>
            </div>
            <div class="text-[11px] font-bold text-red-500">Marks Allotted: 0 / 1</div>
          </div>

        </div>

        <!-- Section Navigation Buttons (Matches screenshot) -->
        <div class="flex items-center justify-center gap-3">
          <button class="px-5 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition">
            Previous Section
          </button>
          <button class="px-6 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold hover:bg-[#0c68ab] transition shadow-xs">
            Next Section
          </button>
        </div>

        <!-- Mid Exam Verification Media (Room Scan Video & Voice Verification from screenshot) -->
        <div class="card-human p-6 space-y-5">
          <h4 class="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">Mid Exam Verification Media</h4>
          
          <!-- Room Scan Video (15s) with actual image and player controls -->
          <div class="space-y-2">
            <div class="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#107acc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                Room Scan Video (15s)
              </span>
              <button class="text-slate-400 hover:text-red-500"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
            </div>

            <div class="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 max-w-2xl mx-auto shadow-sm">
              <img src="assets/candidate/room-scan.jpg" alt="Room Scan Video Frame" class="w-full h-80 object-cover opacity-95" />
              
              <!-- Center Play Icon -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition shadow-lg">
                  <svg class="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </div>

              <!-- Video Scrubber Bar Overlay (Matching screenshot) -->
              <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 text-white text-xs flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <button class="text-white hover:text-[#107acc]"><svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button>
                  <span class="font-mono text-[11px] text-slate-200">0:00 / 0:16</span>
                  <div class="w-48 h-1 bg-white/30 rounded-full overflow-hidden hidden sm:block">
                    <div class="w-1/4 h-full bg-[#107acc]"></div>
                  </div>
                </div>
                <div class="flex items-center gap-2.5 text-slate-300">
                  <svg class="w-4 h-4 hover:text-white cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                  <svg class="w-4 h-4 hover:text-white cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                  <svg class="w-4 h-4 hover:text-white cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Voice Verification Audio (10s) -->
          <div class="space-y-2 pt-2 border-t border-slate-100">
            <div class="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-[#107acc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                Voice Verification Audio (10s)
              </span>
              <button class="text-slate-400 hover:text-red-500"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
            </div>
            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between max-w-2xl mx-auto text-xs">
              <div class="flex items-center gap-3">
                <button class="w-8 h-8 rounded-full bg-[#107acc] text-white flex items-center justify-center hover:bg-[#0c68ab] shadow-xs">
                  <svg class="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </button>
                <span class="font-mono text-slate-600 text-[11px]">0:00 / 0:10</span>
                <div class="w-40 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div class="w-1/3 h-full bg-[#107acc]"></div>
                </div>
              </div>
              <svg class="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            </div>
          </div>

        </div>

        <!-- AI Concept Analysis Box (Exact JSON text from original screenshot) -->
        <div class="p-6 rounded-2xl bg-[#FAF5FF] border border-purple-200 space-y-2">
          <div class="flex items-center gap-2 text-xs font-bold text-purple-900">
            <svg class="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path></svg>
            AI Concept Analysis
          </div>
          <div class="text-xs text-purple-950 font-mono leading-relaxed bg-white/70 p-4 rounded-xl border border-purple-100">
            { "summary": "The candidate demonstrates significant weaknesses in fundamental IT support and troubleshooting methodologies, including initial diagnostic steps, software management, and the importance of documentation and identifying recurring issues. They also lack basic knowledge of computer hardware, networking concepts, and essential security practices like password management. Furthermore, there's a clear gap in understanding the purpose and critical aspects of specialized system integrations, such as pharmacy interfaces, and effective communication with non-technical users." }
          </div>
        </div>

        <!-- Candidate Experience Feedback & Manager Decision Box (From screenshot) -->
        <div class="card-human p-6 space-y-4">
          <div class="flex items-center gap-2 text-xs font-bold text-slate-900 border-b border-slate-100 pb-3">
            <svg class="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
            Candidate Experience Feedback
          </div>

          <div class="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="text-amber-500 font-bold">★★★★★</span>
              <span class="font-bold text-emerald-800">Rating: 5/5</span>
            </div>
            <span class="text-slate-500">GENERAL FEEDBACK: <strong class="text-slate-800">"good"</strong></span>
          </div>

          <!-- Manager Evaluation Input -->
          <div class="space-y-3 pt-2">
            <div>
              <label class="text-xs font-bold text-slate-800 block mb-1">Score</label>
              <input type="text" value="5" readonly class="w-24 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-bold text-slate-800" />
            </div>

            <div>
              <label class="text-xs font-bold text-slate-800 block mb-1.5">Recommendation</label>
              <div class="flex items-center gap-6 text-xs font-medium text-slate-700">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="recommendation" class="text-emerald-600 focus:ring-0" />
                  <span>Pass</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="recommendation" checked class="text-red-600 focus:ring-0" />
                  <span>Fail</span>
                </label>
              </div>
            </div>

            <div>
              <label class="text-xs font-bold text-slate-800 block mb-1">Comment</label>
              <textarea rows="3" placeholder="Add evaluation comments..." class="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#107acc]"></textarea>
            </div>

            <div class="pt-2">
              <button onclick="alert('Decision confirmed successfully!'); switchScreen('candidates');" class="px-6 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs">
                Confirm
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 10: MESSAGE / CHAT MODULE (EXACT ORIGINAL LAYOUT)      -->
      <!-- ============================================================ -->
      <div id="screen-chat" class="screen-view hidden">
        <div class="card-human overflow-hidden h-[720px] flex">
          
          <!-- Left User List Column (Exact replica of original screenshot) -->
          <div class="w-80 border-r border-slate-200 flex flex-col bg-white">
            <div class="p-4 border-b border-slate-100 flex items-center gap-2">
              <div class="relative flex-1">
                <input type="text" placeholder="Search users..." class="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#107acc]" />
                <svg class="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <button class="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-slate-600">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>
              </button>
            </div>

            <!-- User Rows -->
            <div class="flex-1 overflow-y-auto divide-y divide-slate-100 text-xs custom-scrollbar">
              
              <div class="p-3.5 flex items-center gap-3 hover:bg-slate-50 cursor-pointer">
                <div class="w-9 h-9 rounded-full bg-blue-100 text-[#107acc] font-bold flex items-center justify-center shrink-0">K</div>
                <div class="flex-1 min-w-0">
                  <div class="font-bold text-slate-900 truncate">K Prashanti</div>
                  <div class="text-[11px] text-slate-400 truncate">Recruiter</div>
                </div>
              </div>

              <div class="p-3.5 flex items-center gap-3 bg-[#EBF5FC] cursor-pointer">
                <div class="w-9 h-9 rounded-full bg-blue-100 text-[#107acc] font-bold flex items-center justify-center shrink-0">P</div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-900 truncate">P Hemachandra</span>
                    <span class="text-[10px] text-slate-400">12:34 PM</span>
                  </div>
                  <div class="text-[11px] text-slate-600 truncate mt-0.5">hello Good morning</div>
                </div>
              </div>

              <div class="p-3.5 flex items-center gap-3 hover:bg-slate-50 cursor-pointer">
                <div class="w-9 h-9 rounded-full bg-blue-100 text-[#107acc] font-bold flex items-center justify-center shrink-0">R</div>
                <div class="flex-1 min-w-0">
                  <div class="font-bold text-slate-900 truncate">Rajini ReddyShetty</div>
                  <div class="text-[11px] text-slate-400 truncate">Business Owner</div>
                </div>
              </div>

              <div class="p-3.5 flex items-center gap-3 hover:bg-slate-50 cursor-pointer">
                <div class="w-9 h-9 rounded-full bg-blue-100 text-[#107acc] font-bold flex items-center justify-center shrink-0">S</div>
                <div class="flex-1 min-w-0">
                  <div class="font-bold text-slate-900 truncate">Sai Kalpana</div>
                  <div class="text-[11px] text-slate-400 truncate">Recruiter</div>
                </div>
              </div>

              <div class="p-3.5 flex items-center gap-3 hover:bg-slate-50 cursor-pointer">
                <div class="w-9 h-9 rounded-full bg-blue-100 text-[#107acc] font-bold flex items-center justify-center shrink-0">S</div>
                <div class="flex-1 min-w-0">
                  <div class="font-bold text-slate-900 truncate">Sheena J</div>
                  <div class="text-[11px] text-slate-400 truncate">Recruiter</div>
                </div>
              </div>

              <div class="p-3.5 flex items-center gap-3 hover:bg-slate-50 cursor-pointer">
                <div class="w-9 h-9 rounded-full bg-blue-100 text-[#107acc] font-bold flex items-center justify-center shrink-0">S</div>
                <div class="flex-1 min-w-0">
                  <div class="font-bold text-slate-900 truncate">Sunil Ajay</div>
                  <div class="text-[11px] text-slate-400 truncate">Recruiter</div>
                </div>
              </div>

              <div class="p-3.5 flex items-center gap-3 hover:bg-slate-50 cursor-pointer">
                <div class="w-9 h-9 rounded-full bg-blue-100 text-[#107acc] font-bold flex items-center justify-center shrink-0">U</div>
                <div class="flex-1 min-w-0">
                  <div class="font-bold text-slate-900 truncate">Uzma Roohi</div>
                  <div class="text-[11px] text-slate-400 truncate">Recruiter</div>
                </div>
              </div>

            </div>
          </div>

          <!-- Right Chat Column (Exact match with Chat module detail screenshot) -->
          <div class="flex-1 flex flex-col bg-white">
            
            <!-- Chat Header -->
            <div class="h-16 px-6 border-b border-slate-200 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full bg-blue-100 text-[#107acc] font-bold flex items-center justify-center">P</div>
                <div>
                  <div class="font-bold text-slate-900 text-xs">P Hemachandra</div>
                  <div class="text-[11px] text-slate-400 flex items-center gap-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Offline
                  </div>
                </div>
              </div>

              <div class="flex items-center gap-3 text-slate-400">
                <button class="hover:text-slate-600"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                <button class="hover:text-slate-600"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></button>
                <div class="h-4 w-px bg-slate-200"></div>
                <button class="hover:text-slate-600"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></button>
              </div>
            </div>

            <!-- Messages Area with Dotted Pattern -->
            <div id="chatMessageArea" class="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/50" style="background-image: radial-gradient(#CBD5E1 1px, transparent 1px); background-size: 16px 16px;">
              <div class="text-center">
                <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-mono font-medium">03/24/2026</span>
              </div>

              <!-- Message from Hemachandra -->
              <div class="flex flex-col items-end max-w-sm ml-auto">
                <div class="p-3.5 rounded-2xl bg-[#68B2E8] text-white text-xs shadow-xs">
                  hello Good morning
                </div>
                <div class="flex items-center gap-1 text-[10px] text-slate-400 mt-1">
                  <span>12:34 PM</span>
                  <span class="text-[#107acc]">✓✓</span>
                </div>
              </div>
            </div>

            <!-- Chat Input Footer -->
            <div class="p-4 border-t border-slate-200 flex items-center gap-3 bg-white">
              <button class="p-2 text-slate-400 hover:text-slate-600"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg></button>
              <button class="p-2 text-slate-400 hover:text-slate-600"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg></button>
              
              <input type="text" id="chatInputBox" placeholder="Type a message..." onkeydown="if(event.key==='Enter') sendChatMessage()" class="flex-1 px-4 py-2 rounded-full border border-slate-200 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-[#107acc]" />

              <button class="p-2 text-slate-400 hover:text-slate-600"><svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg></button>
              <button onclick="sendChatMessage()" class="p-2 rounded-full bg-[#107acc] text-white hover:bg-[#0c68ab] transition shadow-xs">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>

          </div>

        </div>
      </div>

      <!-- ============================================================ -->
      <!-- SCREEN 11: TICKETS                                            -->
      <!-- ============================================================ -->
      <div id="screen-tickets" class="screen-view hidden space-y-6">
        <div class="card-human p-12 text-center">
          <div class="w-14 h-14 rounded-full bg-blue-50 text-[#107acc] flex items-center justify-center mx-auto mb-3">
            <svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
          </div>
          <h3 class="text-base font-bold text-slate-900">Support Tickets</h3>
          <p class="text-xs text-slate-500 mt-1 max-w-sm mx-auto">All organizational support tickets are currently resolved. You're completely up to date.</p>
        </div>
      </div>

    </main>
  </div>

  <!-- ============================================================ -->
  <!-- CLIENT LOGIC & ROUTING                                        -->
  <!-- ============================================================ -->
  <script>
    const screenTitles = {
      'dashboard': 'Dashboard',
      'creators': 'Manage Test Creators',
      'creator-detail': 'Test Creator Profile',
      'test-create': 'Test Creation',
      'tests': 'Tests',
      'test-detail': 'Test Blueprint',
      'reviews': 'Pending Reviews',
      'candidates': 'Candidates',
      'candidate-detail': 'Candidate Evaluation',
      'chat': 'Message',
      'tickets': 'Tickets'
    };

    function switchScreen(screenId) {
      document.querySelectorAll('.screen-view').forEach(el => el.classList.add('hidden'));

      const target = document.getElementById('screen-' + screenId);
      if (target) {
        target.classList.remove('hidden');
      } else {
        const def = document.getElementById('screen-dashboard');
        if (def) def.classList.remove('hidden');
        screenId = 'dashboard';
      }

      // Update Navigation State
      document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('nav-active');
        btn.classList.add('nav-inactive');
      });

      const activeNav = document.getElementById('nav-' + screenId);
      if (activeNav) {
        activeNav.classList.remove('nav-inactive');
        activeNav.classList.add('nav-active');
      }

      const topTitle = document.getElementById('topPageTitle');
      if (topTitle) topTitle.textContent = screenTitles[screenId] || 'Dashboard';

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Test Creation 3-Step Wizard Navigation
    let currentCreationStep = 1;

    function setCreationStep(step) {
      currentCreationStep = step;

      // Hide all steps
      document.getElementById('createStep-1').classList.add('hidden');
      document.getElementById('createStep-2').classList.add('hidden');
      document.getElementById('createStep-3').classList.add('hidden');

      // Show active step
      const activeEl = document.getElementById('createStep-' + step);
      if (activeEl) activeEl.classList.remove('hidden');

      // Update step circles & labels
      for (let i = 1; i <= 3; i++) {
        const circle = document.getElementById('stepCircle-' + i);
        const label = document.getElementById('stepLabel-' + i);
        if (circle && label) {
          if (i === step) {
            circle.className = 'w-9 h-9 rounded-full bg-[#107acc] text-white flex items-center justify-center font-bold text-sm shadow-xs transition';
            label.className = 'text-xs font-bold text-[#107acc]';
          } else if (i < step) {
            circle.className = 'w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm transition';
            circle.innerHTML = '✓';
            label.className = 'text-xs font-semibold text-slate-600';
          } else {
            circle.className = 'w-9 h-9 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm transition';
            circle.innerHTML = i;
            label.className = 'text-xs font-semibold text-slate-500';
          }
        }
      }

      // Update lines
      const line1 = document.getElementById('stepLine-1');
      const line2 = document.getElementById('stepLine-2');
      if (line1) line1.style.backgroundColor = step > 1 ? '#107acc' : '#CBD5E1';
      if (line2) line2.style.backgroundColor = step > 2 ? '#107acc' : '#CBD5E1';
    }

    // Configurable Funnel Stage Handlers
    function handleStageToggle() {
      const dwaani = document.getElementById('toggleDwaani').checked;
      const grad = document.getElementById('toggleGradarena').checked;
      const orderBlock = document.getElementById('sequenceOrderingBlock');
      const badge = document.getElementById('stageFunnelBadge');

      if (dwaani && grad) {
        orderBlock.classList.remove('hidden');
        badge.textContent = 'Combined 2-Stage Funnel';
        badge.className = 'px-3 py-1 rounded-full text-xs font-bold bg-[#EBF5FC] text-[#107acc] border border-[#BCE0F7]';
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
        if (pass1) pass1.textContent = 'Min ' + dwThresh + '% Pass';
        if (pass2) pass2.textContent = 'Min ' + grThresh + '% Pass';
      } else {
        if (p1) p1.textContent = 'GradArena Proctored Assessment';
        if (p2) p2.textContent = 'Dwaani AI Voice Interview';
        if (pass1) pass1.textContent = 'Min ' + grThresh + '% Pass';
        if (pass2) pass2.textContent = 'Min ' + dwThresh + '% Pass';
      }
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

    // Auto-switch via URL param or hash on startup
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
    });
  </script>


  <!-- =================================================================== -->
  <!-- MODAL 1: AI RESUME UPLOAD & PARSING STUDIO (ANIMATED LIFECYCLE)     -->
  <!-- =================================================================== -->
  <div id="modal-resume-parser" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden transform transition-all">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900">AI Resume Upload & Skill Parsing Studio</h3>
            <p class="text-xs text-slate-500">Upload candidate resumes for automated OCR, skills extraction, and role benchmark scoring</p>
          </div>
        </div>
        <button onclick="closeResumeUploadModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">
          ✕
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 space-y-5">
        
        <!-- Dropzone Box (Hidden during active scan) -->
        <div id="resumeDropArea" class="border-2 border-dashed border-slate-200 hover:border-[#107acc] rounded-2xl p-6 text-center bg-slate-50/60 hover:bg-blue-50/30 transition cursor-pointer" onclick="startResumeAnimation('Kalyani_Lead_IT_Support_Resume.pdf', 1.4)">
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
              <button type="button" onclick="event.stopPropagation(); startResumeAnimation('Pramod_Senior_Dev.pdf', 1.8);" class="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#107acc]">
                📄 Pramod.pdf
              </button>
            </div>
          </div>
        </div>

        <!-- Animated Scanning Stage (Visible when scanning) -->
        <div id="resumeScanningArea" class="hidden space-y-4">
          
          <!-- File & Scanning Header -->
          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#EBF5FC] text-[#107acc] flex items-center justify-center font-bold text-xs shadow-xs">
                PDF
              </div>
              <div>
                <span id="scanFileName" class="text-xs font-bold text-slate-900 block">Kalyani_Lead_IT_Support.pdf</span>
                <span id="scanFileSize" class="text-[11px] text-slate-500">1.4 MB • Uploaded just now</span>
              </div>
            </div>
            <span id="scanPercentage" class="text-sm font-mono font-bold text-[#107acc]">0%</span>
          </div>

          <!-- Animated Progress Bar -->
          <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div id="scanProgressBar" class="bg-[#107acc] h-2.5 rounded-full transition-all duration-300" style="width: 0%"></div>
          </div>

          <!-- Laser Scanning Document Visualizer -->
          <div class="relative bg-slate-900 text-white p-4 rounded-xl overflow-hidden font-mono text-xs">
            <!-- Animated Laser Line -->
            <div id="laserBeam" class="animate-laser"></div>
            
            <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 text-[10px] text-slate-400">
              <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> AI NEURAL OCR & ENTITY PARSER</span>
              <span id="scanStepBadge" class="text-emerald-400 font-bold">STAGE 1: SCANNING TEXT</span>
            </div>

            <!-- Terminal logs of parsing steps -->
            <div id="scanLogArea" class="space-y-1 text-[11px] h-24 overflow-hidden text-slate-300">
              <div>[0.12s] Connecting to GradArena High-Speed OCR Pipeline...</div>
            </div>
          </div>

          <!-- Extracted Entities & AI Match Score (Fades in at stage 4) -->
          <div id="scanResultsArea" class="hidden space-y-4 pt-2">
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <!-- Score Radial -->
              <div class="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/60 flex items-center gap-3">
                <div class="relative w-12 h-12 flex items-center justify-center">
                  <svg class="w-12 h-12 transform -rotate-90">
                    <circle cx="24" cy="24" r="20" stroke="#CBD5E1" stroke-width="4" fill="transparent" />
                    <circle id="matchScoreCircle" cx="24" cy="24" r="20" stroke="#16A34A" stroke-width="4" stroke-dasharray="125.6" stroke-dashoffset="125.6" fill="transparent" class="transition-all duration-1000 ease-out" />
                  </svg>
                  <span id="matchScoreText" class="absolute text-xs font-extrabold text-emerald-700">0%</span>
                </div>
                <div>
                  <span class="text-[10px] font-bold text-emerald-800 uppercase block">ROLE BENCHMARK</span>
                  <span class="text-xs font-bold text-emerald-900">High Match Fit</span>
                </div>
              </div>

              <!-- Candidate Info -->
              <div class="p-3.5 rounded-xl border border-slate-200 bg-white">
                <span class="text-[10px] font-bold text-slate-400 uppercase block">CANDIDATE</span>
                <span class="text-xs font-bold text-slate-900 block truncate">Kalyani Sundaram</span>
                <span class="text-[11px] text-slate-500">5.5 Years Exp • Tier-1 Lead</span>
              </div>

              <!-- Recommendation -->
              <div class="p-3.5 rounded-xl border border-slate-200 bg-white">
                <span class="text-[10px] font-bold text-slate-400 uppercase block">RECOMMENDED TEST</span>
                <span class="text-xs font-bold text-[#107acc] block truncate">Hardware Support (Tier 1)</span>
                <span class="text-[11px] text-slate-500">Dwaani + GradArena Flow</span>
              </div>
            </div>

            <!-- Extracted Skills Chips -->
            <div class="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
              <span class="text-xs font-bold text-slate-800 block">Extracted Skill & Competency Tags (9 Found):</span>
              <div class="flex flex-wrap gap-1.5" id="extractedSkillsList">
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Hardware Diagnostics</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">TCP/IP Network Config</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Windows Server & AD</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Helpdesk SLA Ticketing</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Bash & PowerShell</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">Peripheral Maintenance</span>
                <span class="px-2.5 py-1 rounded-lg bg-blue-50 text-[#107acc] border border-blue-200 text-xs font-semibold pop-in">DHCP Relay</span>
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
          <button onclick="closeResumeUploadModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition">
            Close
          </button>
          <button id="btnAddToRoster" onclick="addCandidateToRosterFromResume()" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5">
            <span>Add Candidate to Talent Pool</span>
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>

    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 2: AI TEST & QUESTION GENERATION ENGINE (ANIMATED LIFECYCLE)  -->
  <!-- =================================================================== -->
  <div id="modal-test-generator" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden transform transition-all">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-blue-50/50 via-white to-indigo-50/30">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-[#107acc] text-white flex items-center justify-center shadow-xs">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900 flex items-center gap-2">
              AI Question Studio & Test Generator
              <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#EBF5FC] text-[#107acc]">GPT-4o + Dwaani Audio</span>
            </h3>
            <p class="text-xs text-slate-500">Synthesizing calibrated MCQ sections, diagnostic scenarios, and AI voice interview rubrics</p>
          </div>
        </div>
        <button onclick="closeTestGenerateModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">
          ✕
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 space-y-5">
        
        <!-- Animated 4-Node Pipeline Tracker -->
        <div class="grid grid-cols-4 gap-2 text-center text-xs">
          
          <div id="genNode-1" class="p-2.5 rounded-xl border border-[#107acc] bg-[#EBF5FC] text-[#107acc] font-bold transition">
            <div class="w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center" id="nodeIcon-1">1</div>
            <span class="text-[11px] block">Role Taxonomy</span>
          </div>

          <div id="genNode-2" class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 font-semibold transition">
            <div class="w-5 h-5 mx-auto mb-1 rounded-full bg-slate-200 text-slate-600 text-[10px] flex items-center justify-center" id="nodeIcon-2">2</div>
            <span class="text-[11px] block">Section Design</span>
          </div>

          <div id="genNode-3" class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 font-semibold transition">
            <div class="w-5 h-5 mx-auto mb-1 rounded-full bg-slate-200 text-slate-600 text-[10px] flex items-center justify-center" id="nodeIcon-3">3</div>
            <span class="text-[11px] block">Question Synth</span>
          </div>

          <div id="genNode-4" class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 font-semibold transition">
            <div class="w-5 h-5 mx-auto mb-1 rounded-full bg-slate-200 text-slate-600 text-[10px] flex items-center justify-center" id="nodeIcon-4">4</div>
            <span class="text-[11px] block">Dwaani Voice</span>
          </div>

        </div>

        <!-- Live Question Counter & Overall Progress -->
        <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
          <div class="flex items-center justify-between">
            <span id="genStatusText" class="text-xs font-bold text-slate-800 flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-[#107acc] animate-ping"></span>
              Analyzing job description & competency weights...
            </span>
            <span id="genQuestionsCount" class="text-xs font-mono font-bold text-[#107acc]">Questions: 0 / 25</span>
          </div>
          <div class="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div id="genProgressBar" class="bg-[#107acc] h-2 rounded-full transition-all duration-300" style="width: 5%"></div>
          </div>
        </div>

        <!-- Live Streaming Question Formulation Preview -->
        <div class="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
          <div class="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
            <span class="font-mono font-bold text-slate-700">LIVE GENERATION STREAM</span>
            <span id="genSectionTag" class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-[#107acc]">SECTION 1: HARDWARE SUPPORT</span>
          </div>
          <div class="p-4 space-y-3 font-mono text-xs">
            <p id="genQuestionText" class="text-slate-800 leading-relaxed font-semibold">
              Initializing neural question synthesis prompt matrix...
            </p>
            <div id="genOptionsList" class="space-y-1.5 pl-2 text-slate-600">
              <!-- Options populated dynamically -->
            </div>
          </div>
        </div>

        <!-- Generated Sections Preview Grid (Revealed at finish) -->
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
        <button onclick="retriggerTestGenerate()" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
          Regenerate
        </button>
        <div class="flex items-center gap-2">
          <button onclick="closeTestGenerateModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition">
            Close
          </button>
          <button id="btnApplyGeneratedTest" onclick="applyGeneratedTestBlueprint()" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white text-xs font-bold transition shadow-xs flex items-center gap-1.5 opacity-50 cursor-not-allowed" disabled>
            <span>Apply Blueprint & View Questions ➔</span>
          </button>
        </div>
      </div>

    </div>
  </div>

  <!-- Client-side animation controllers -->
  <script>
    // ==========================================
    // INTAKE TAB SWITCHER (JOB LINK VS RESUME)
    // ==========================================
    function switchIntakeTab(tab) {
      const btnLink = document.getElementById('tabBtn-jobLink');
      const btnResume = document.getElementById('tabBtn-resumeUpload');
      const contentLink = document.getElementById('tabContent-jobLink');
      const contentResume = document.getElementById('tabContent-resume');

      if (tab === 'link') {
        btnLink.className = 'px-4 py-1.5 rounded-lg bg-[#107acc] text-white text-xs font-bold transition shadow-xs';
        btnResume.className = 'px-4 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-[#107acc] text-xs font-bold transition';
        contentLink.classList.remove('hidden');
        contentResume.classList.add('hidden');
      } else {
        btnResume.className = 'px-4 py-1.5 rounded-lg bg-[#107acc] text-white text-xs font-bold transition shadow-xs';
        btnLink.className = 'px-4 py-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-[#107acc] text-xs font-bold transition';
        contentResume.classList.remove('hidden');
        contentLink.classList.add('hidden');
      }
    }

    // ==========================================
    // IN-PAGE RESUME SCAN ANIMATION
    // ==========================================
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

        if (progress === 30) {
          status.textContent = 'Executing Neural OCR text extraction...';
        } else if (progress === 60) {
          status.textContent = 'Identifying domain skills & years of experience...';
        } else if (progress === 90) {
          status.textContent = 'Mapping competencies to assessment blueprint...';
        } else if (progress === 100) {
          clearInterval(interval);
          status.textContent = 'Parsing complete! Auto-filled test parameters.';
          badges.classList.remove('hidden');
        }
      }, 100);
    }

    // ==========================================
    // MODAL 1: RESUME UPLOAD & PARSING MODAL
    // ==========================================
    function openResumeUploadModal() {
      const m = document.getElementById('modal-resume-parser');
      m.classList.remove('hidden');
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

          // Animate circular match gauge (89% -> stroke-dashoffset = 125.6 * (1 - 0.89) = 13.8)
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

    // ==========================================
    // MODAL 2: AI TEST GENERATOR ENGINE
    // ==========================================
    function openTestGenerateModal() {
      const m = document.getElementById('modal-test-generator');
      m.classList.remove('hidden');
      startTestGenerateAnimation();
    }

    function closeTestGenerateModal() {
      document.getElementById('modal-test-generator').classList.add('hidden');
    }

    function retriggerTestGenerate() {
      startTestGenerateAnimation();
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

      // Reset
      bar.style.width = '5%';
      countEl.textContent = 'Questions: 0 / 25';
      sectionsGrid.classList.add('hidden');
      applyBtn.disabled = true;
      applyBtn.className = 'px-5 py-2 rounded-xl bg-[#107acc] text-white text-xs font-bold transition shadow-xs opacity-50 cursor-not-allowed';

      // Reset node styles
      for (let n = 1; n <= 4; n++) {
        const el = document.getElementById('genNode-' + n);
        const icon = document.getElementById('nodeIcon-' + n);
        if (n === 1) {
          el.className = 'p-2.5 rounded-xl border border-[#107acc] bg-[#EBF5FC] text-[#107acc] font-bold transition';
          icon.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center';
          icon.textContent = '1';
        } else {
          el.className = 'p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-400 font-semibold transition';
          icon.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-slate-200 text-slate-600 text-[10px] flex items-center justify-center';
          icon.textContent = n;
        }
      }

      // Step 1: Role analysis
      statusText.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-[#107acc] animate-ping"></span> Analyzing role taxonomy: "Lead IT Support Engineer"...';
      questionText.textContent = 'Extracting Blooms cognitive taxonomy standards for Hardware Tier-1 & Tier-2 competencies...';
      optionsList.innerHTML = '<div class="text-slate-400">Parsing 24 core knowledge dimensions...</div>';

      // Step 2 at 1.2s
      setTimeout(() => {
        bar.style.width = '30%';
        const n1 = document.getElementById('genNode-1');
        const i1 = document.getElementById('nodeIcon-1');
        i1.innerHTML = '✓';
        i1.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';
        
        const n2 = document.getElementById('genNode-2');
        const i2 = document.getElementById('nodeIcon-2');
        n2.className = 'p-2.5 rounded-xl border border-[#107acc] bg-[#EBF5FC] text-[#107acc] font-bold transition';
        i2.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center';

        statusText.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-[#107acc] animate-ping"></span> Formulating 3 section blueprints & weightages...';
        sectionTag.textContent = 'BLUEPRINT CALIBRATION';
        questionText.textContent = 'Partitioning assessment into: Section 1 (Hardware), Section 2 (Network/AD), Section 3 (Dwaani Voice Scenarios).';
        optionsList.innerHTML = 
          '<div>• Section 1 Weight: 40% (10 MCQs)</div>' +
          '<div>• Section 2 Weight: 40% (10 MCQs)</div>' +
          '<div>• Section 3 Dwaani AI Voice: 20% (5 Audio Prompts)</div>';
      }, 1200);

      // Step 3 at 2.4s: Question Synth
      setTimeout(() => {
        bar.style.width = '65%';
        const i2 = document.getElementById('nodeIcon-2');
        i2.innerHTML = '✓';
        i2.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';
        
        const n3 = document.getElementById('genNode-3');
        const i3 = document.getElementById('nodeIcon-3');
        n3.className = 'p-2.5 rounded-xl border border-[#107acc] bg-[#EBF5FC] text-[#107acc] font-bold transition';
        i3.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center';

        statusText.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-[#107acc] animate-ping"></span> Synthesizing adaptive question pool...';
        sectionTag.textContent = 'SECTION 1: HARDWARE DIAGNOSTICS';
        questionText.textContent = 'Q12. When a workstation experiences intermittent kernel panics accompanied by memory register parity errors, which diagnostic methodology isolates faulty DIMM banks most accurately?';
        optionsList.innerHTML = 
          '<div class="p-1 rounded bg-slate-50">[A] Run MemTest86 sequentially per single memory socket</div>' +
          '<div class="p-1 rounded bg-slate-50">[B] Re-flash motherboard CMOS firmware</div>' +
          '<div class="p-1 rounded bg-slate-50">[C] Increase thermal throttling thresholds</div>' +
          '<div class="p-1 rounded bg-slate-50">[D] Re-seat hard drive SATA connectors</div>';

        // Fast counter animation
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

      // Step 4 at 3.8s: Dwaani Voice rubrics
      setTimeout(() => {
        bar.style.width = '90%';
        const i3 = document.getElementById('nodeIcon-3');
        i3.innerHTML = '✓';
        i3.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center';
        
        const n4 = document.getElementById('genNode-4');
        const i4 = document.getElementById('nodeIcon-4');
        n4.className = 'p-2.5 rounded-xl border border-[#107acc] bg-[#EBF5FC] text-[#107acc] font-bold transition';
        i4.className = 'w-5 h-5 mx-auto mb-1 rounded-full bg-[#107acc] text-white text-[10px] flex items-center justify-center';

        statusText.innerHTML = '<span class="w-2.5 h-2.5 rounded-full bg-purple-600 animate-ping"></span> Calibrating Dwaani AI Voice Interview scoring rubrics...';
        sectionTag.textContent = 'DWAANI AI VOICE SYNTHESIS';
        questionText.textContent = 'Voice Prompt #1: "Describe a scenario where a high-severity server outage occurred during your shift. How did you prioritize stakeholder communication vs triage?"';
        optionsList.innerHTML = 
          '<div class="text-purple-700 font-semibold">• Speech Cadence & Fluency Rubric (Weight: 30%)</div>' +
          '<div class="text-purple-700 font-semibold">• Technical Resolution Accuracy (Weight: 50%)</div>' +
          '<div class="text-purple-700 font-semibold">• Stress Resilience & Composure (Weight: 20%)</div>';
        countEl.textContent = 'Questions: 25 / 25';
      }, 3800);

      // Step 5 at 4.8s: Complete!
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

    // Auto-execute query actions
    window.addEventListener('DOMContentLoaded', () => {
      const params = new URLSearchParams(window.location.search);
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
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'manager-panel.html'), html, 'utf8');
fs.writeFileSync(path.join(__dirname, 'manager-dashboard.html'), html, 'utf8');
console.log('Successfully written authentic human GradArena UI to manager-panel.html & manager-dashboard.html (' + html.length + ' bytes)');
