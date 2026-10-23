module.exports = `
    </main>
  </div>

  <!-- =================================================================== -->
  <!-- MODAL 1: REQUEST EDIT PERMISSION MODAL                              -->
  <!-- =================================================================== -->
  <div id="modal-req-edit" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden transform transition-all duration-200">
      
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-amber-50/70 via-orange-50/40 to-slate-50">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900">Request Edit Permission</h3>
            <p class="text-xs text-slate-500">Submit modification rationale to Operations Manager</p>
          </div>
        </div>
        <button onclick="closeReqEditModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">✕</button>
      </div>

      <form onsubmit="submitReqEdit(event)" class="p-6 space-y-4 text-xs">
        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-[10px] uppercase font-bold text-slate-500 tracking-wider">TARGET ASSESSMENT</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#107acc]">PUBLISHED</span>
          </div>
          <div id="reqEditTestTitle" class="text-sm font-bold text-slate-900">Hardware Support (Tier 1)</div>
          <div class="text-[11px] text-slate-500 flex items-center gap-2">
            <span>ID: <code id="reqEditTestId" class="font-mono text-slate-700">GA-TEST-2024-001</code></span>
            <span>•</span>
            <span>24 Active Enrolled Candidates</span>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-[11px] flex items-start gap-2.5 leading-relaxed">
          <svg class="w-4 h-4 text-amber-700 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <span>This test is actively published. Changes to questions, durations, or passing cutoffs require approval from Operations Manager <strong>Rajini K</strong> to maintain assessment integrity.</span>
        </div>

        <div class="space-y-1.5">
          <label class="font-bold text-slate-700 block">Scope of Modifications Needed <span class="text-rose-500">*</span></label>
          <div class="grid grid-cols-2 gap-2 text-[11px]">
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer">
              <input type="checkbox" checked class="rounded text-[#107acc]" />
              <span>Questions & Rubric</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer">
              <input type="checkbox" checked class="rounded text-[#107acc]" />
              <span>Passing Cutoff (%)</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer">
              <input type="checkbox" class="rounded text-[#107acc]" />
              <span>Section Durations</span>
            </label>
            <label class="flex items-center gap-2 p-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 cursor-pointer">
              <input type="checkbox" class="rounded text-[#107acc]" />
              <span>Proctoring Sensitivity</span>
            </label>
          </div>
        </div>

        <div class="space-y-1.5">
          <label class="font-bold text-slate-700 block">Recruiter Modification Justification <span class="text-rose-500">*</span></label>
          <textarea id="reqEditReason" rows="3" required placeholder="Describe why modifications are required..." class="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20 leading-relaxed font-sans">Client WFM Enterprise requested updating passing threshold to 65% and replacing 2 outdated legacy hardware questions with modern cloud hybrid virtualization questions.</textarea>
        </div>

        <div class="space-y-1.5">
          <label class="font-bold text-slate-700 block">Urgency / Candidate Drive Impact</label>
          <select id="reqEditUrgency" class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20">
            <option value="normal">Normal (Next scheduled batch is 48+ hours away)</option>
            <option value="urgent" selected>Urgent (Candidates scheduled to test tomorrow)</option>
            <option value="critical">Critical Blocker (Live drive paused pending edit)</option>
          </select>
        </div>

        <div class="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <button type="button" onclick="closeReqEditModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold transition">
            Cancel
          </button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white font-bold transition shadow-brand-glow flex items-center gap-2">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"></path><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            <span>Submit Request to Manager</span>
          </button>
        </div>
      </form>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 2: ADD CANDIDATE MANUALLY                                     -->
  <!-- =================================================================== -->
  <div id="modal-add-candidate" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden transform transition-all duration-200">
      
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900">Add Candidate Manually</h3>
            <p class="text-xs text-slate-500">Enroll new applicant for assessment</p>
          </div>
        </div>
        <button onclick="closeAddCandidateModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">✕</button>
      </div>

      <form onsubmit="submitAddCandidate(event)" class="p-6 space-y-4 text-xs">
        <div class="space-y-1">
          <label class="font-bold text-slate-700 block">Candidate Full Name <span class="text-rose-500">*</span></label>
          <input type="text" id="addCandName" required placeholder="e.g. Arjun Ramanathan" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700 block">Email Address <span class="text-rose-500">*</span></label>
          <input type="email" id="addCandEmail" required placeholder="e.g. arjun.ram@outlook.com" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700 block">Phone Number</label>
          <input type="tel" id="addCandPhone" placeholder="e.g. +91 98765 43210" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-mono focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700 block">Assign to Assessment</label>
          <select id="addCandTest" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20">
            <option value="Hardware Support (Tier 1)" selected>Hardware Support (Tier 1)</option>
            <option value="LEAD generation Executive">LEAD generation Executive</option>
            <option value="Accountant">Accountant</option>
            <option value="Senior Cloud Architect">Senior Cloud Architect</option>
          </select>
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700 block">Candidate Experience</label>
          <select id="addCandExp" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20">
            <option value="Fresher">Entry Level / College Graduate (0 - 1 Years)</option>
            <option value="Mid-Level" selected>Intermediate Engineer (1 - 3 Years)</option>
            <option value="Senior">Senior Specialist (3 - 5+ Years)</option>
          </select>
        </div>

        <div class="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <button type="button" onclick="closeAddCandidateModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold transition">
            Cancel
          </button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white font-bold transition shadow-brand-glow">
            Add to Candidate Roster
          </button>
        </div>
      </form>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 3: RECRUITER PROFILE & ORGANIZATION LOGO SETTINGS             -->
  <!-- =================================================================== -->
  <div id="modal-profile-settings" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-xl w-full overflow-hidden transform transition-all duration-200">
      
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900">Profile & Organization Settings</h3>
            <p class="text-xs text-slate-500">Manage recruiter identity, organization logo branding, and preferences</p>
          </div>
        </div>
        <button onclick="closeProfileSettingsModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">✕</button>
      </div>

      <div class="flex items-center gap-2 px-6 pt-3 border-b border-slate-100 text-xs">
        <button id="pTabBtn-general" onclick="switchProfileTab('general')" class="px-3.5 py-2 font-bold text-[#107acc] border-b-2 border-[#107acc]">Personal Profile</button>
        <button id="pTabBtn-org" onclick="switchProfileTab('org')" class="px-3.5 py-2 font-semibold text-slate-500 hover:text-slate-800">Organization & Logo</button>
        <button id="pTabBtn-security" onclick="switchProfileTab('security')" class="px-3.5 py-2 font-semibold text-slate-500 hover:text-slate-800">Security & 2FA</button>
      </div>

      <div class="p-6 space-y-4 text-xs">
        <!-- Tab 1: General Personal Profile -->
        <div id="pTabContent-general" class="space-y-4">
          <div class="flex items-center gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#107acc] to-[#38bdf8] text-white flex items-center justify-center font-bold text-xl shadow-xs">G</div>
            <div class="space-y-1">
              <span class="text-xs font-bold text-slate-900 block">Girish K</span>
              <span class="text-[11px] text-slate-500 block">gadigitalsmartbot@gmail.com</span>
              <button onclick="showToast('Avatar Upload', 'Profile picture update feature simulated.', 'info')" class="text-[11px] font-bold text-[#107acc] hover:underline">Change Profile Picture</button>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="font-bold text-slate-700">First Name</label>
              <input type="text" value="Girish" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
            </div>
            <div class="space-y-1">
              <label class="font-bold text-slate-700">Last Name</label>
              <input type="text" value="K" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
            </div>
          </div>

          <div class="space-y-1">
            <label class="font-bold text-slate-700">Recruiter Email</label>
            <input type="email" value="gadigitalsmartbot@gmail.com" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 text-slate-600" readonly />
          </div>

          <div class="space-y-1">
            <label class="font-bold text-slate-700">Assigned Role</label>
            <input type="text" value="Senior Technical Recruiter" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white" />
          </div>

          <div class="flex items-center justify-end gap-2 pt-2">
            <button onclick="showToast('Profile Saved', 'Your recruiter account information has been updated.', 'success'); closeProfileSettingsModal();" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white font-bold transition shadow-xs">
              Save Changes
            </button>
          </div>
        </div>

        <!-- Tab 2: Organization & Logo -->
        <div id="pTabContent-org" class="hidden space-y-4">
          <div class="space-y-1">
            <label class="font-bold text-slate-700">Organization Legal Name</label>
            <input type="text" value="GADigital Solutions Pvt Ltd" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white font-semibold" />
          </div>

          <div class="space-y-2">
            <label class="font-bold text-slate-700 flex items-center justify-between">
              <span>Organization Logo</span>
              <span class="text-[10px] text-slate-400 font-normal">Appears on candidate invites & reports</span>
            </label>
            
            <div class="p-4 rounded-2xl border-2 border-dashed border-slate-200 hover:border-[#107acc] transition bg-slate-50/50 flex flex-col items-center justify-center gap-3 text-center">
              <div class="h-16 w-48 rounded-xl bg-white p-2 border border-slate-200 shadow-2xs flex items-center justify-center">
                <img id="orgLogoPreview" src="Grad Arena Logo-01.svg" class="max-h-12 max-w-full object-contain" alt="Current Logo" />
              </div>
              <div class="space-y-1">
                <div class="flex items-center justify-center gap-2">
                  <label class="px-3 py-1.5 rounded-lg bg-[#107acc] hover:bg-[#0c68ab] text-white text-[11px] font-bold cursor-pointer transition shadow-2xs">
                    <span>Upload New Logo</span>
                    <input type="file" id="orgLogoInput" accept="image/*" class="hidden" onchange="handleLogoUpload(event)" />
                  </label>
                  <button onclick="document.getElementById('orgLogoPreview').src='Grad Arena Logo-01.svg'; showToast('Reset Logo', 'Restored official GradArena vector logo.', 'info');" class="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-600 text-[11px] font-semibold transition">
                    Reset
                  </button>
                </div>
                <p class="text-[10px] text-slate-400">Recommended: Transparent SVG or PNG (min 300x80 px)</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="font-bold text-slate-700">Brand Primary Color</label>
              <div class="flex items-center gap-2">
                <input type="color" value="#107acc" class="w-9 h-9 rounded-xl border border-slate-200 cursor-pointer p-0.5" />
                <span class="font-mono text-xs text-slate-700 font-bold">#107ACC</span>
              </div>
            </div>
            <div class="space-y-1">
              <label class="font-bold text-slate-700">Sub-Domain</label>
              <input type="text" value="gadigital.gradarena.ai" readonly class="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 text-slate-600 font-mono" />
            </div>
          </div>

          <div class="flex items-center justify-end gap-2 pt-2">
            <button onclick="showToast('Branding Saved', 'Organization logo and brand palette updated across all recruiter screens.', 'success'); closeProfileSettingsModal();" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white font-bold transition shadow-xs">
              Save Organization Branding
            </button>
          </div>
        </div>

        <!-- Tab 3: Security & 2FA -->
        <div id="pTabContent-security" class="hidden space-y-4">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div>
              <div class="text-xs font-bold text-slate-900">Two-Factor Authentication (2FA)</div>
              <div class="text-[11px] text-slate-500">Require an authenticator code when logging in</div>
            </div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked class="sr-only peer" />
              <div class="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#107acc]"></div>
            </label>
          </div>

          <div class="space-y-1">
            <label class="font-bold text-slate-700">Current Password</label>
            <input type="password" placeholder="••••••••••••" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div class="space-y-1">
              <label class="font-bold text-slate-700">New Password</label>
              <input type="password" placeholder="Enter new password" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white" />
            </div>
            <div class="space-y-1">
              <label class="font-bold text-slate-700">Confirm Password</label>
              <input type="password" placeholder="Confirm password" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white" />
            </div>
          </div>

          <div class="flex items-center justify-end gap-2 pt-2">
            <button onclick="showToast('Password Updated', 'Your security credentials were updated successfully.', 'success'); closeProfileSettingsModal();" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white font-bold transition shadow-xs">
              Update Password
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 4: AI JOB EXTRACTION ANIMATION PROGRESS MODAL                 -->
  <!-- =================================================================== -->
  <div id="modal-job-extract-anim" class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-md w-full p-6 space-y-5 text-center transform transition-all duration-300">
      <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#107acc] to-[#38bdf8] text-white flex items-center justify-center mx-auto shadow-brand-glow animate-pulse">
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
      </div>
      <div>
        <h3 class="text-base font-bold text-slate-900">GradArena AI Job Parser</h3>
        <p class="text-xs text-slate-500 mt-1">Extracting technical requirements and competencies from URL</p>
      </div>

      <div class="space-y-3 text-left bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
        <div id="extractStep1" class="flex items-center gap-3 text-slate-700">
          <div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</div>
          <span>Connecting to LinkedIn / Job portal gateway</span>
        </div>
        <div id="extractStep2" class="flex items-center gap-3 text-slate-700">
          <div class="w-5 h-5 rounded-full bg-blue-100 text-[#107acc] flex items-center justify-center text-[10px] font-bold animate-spin">↻</div>
          <span class="font-semibold">Parsing job description & seniority requirements</span>
        </div>
        <div id="extractStep3" class="flex items-center gap-3 text-slate-400">
          <div class="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold">3</div>
          <span>Synthesizing diagnostic technical competencies</span>
        </div>
        <div id="extractStep4" class="flex items-center gap-3 text-slate-400">
          <div class="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold">4</div>
          <span>Populating assessment configuration fields</span>
        </div>
      </div>

      <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
        <div id="extractProgressBar" class="bg-gradient-to-r from-[#107acc] to-[#38bdf8] h-full w-1/4 transition-all duration-300"></div>
      </div>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 5: AI QUESTION GENERATION PROGRESS MODAL                      -->
  <!-- =================================================================== -->
  <div id="modal-ai-test-gen" class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full p-6 space-y-5 text-center transform transition-all duration-300">
      <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-[#107acc] text-white flex items-center justify-center mx-auto shadow-brand-glow animate-pulse">
        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
      </div>
      <div>
        <h3 class="text-base font-bold text-slate-900">GradArena AI Question Synthesis</h3>
        <p class="text-xs text-slate-500 mt-1">Generating psychometric & technical questions with rubric verification</p>
      </div>

      <div class="space-y-2.5 text-left bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
        <div id="aiGenStep1" class="flex items-center justify-between text-slate-700">
          <span class="flex items-center gap-2">
            <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 inline-flex items-center justify-center text-[10px] font-bold">✓</span>
            <span>Synthesizing Section 1: Hardware Troubleshooting (5 MCQs)</span>
          </span>
          <span class="font-mono text-[10px] text-emerald-600 font-bold">DONE</span>
        </div>
        <div id="aiGenStep2" class="flex items-center justify-between text-slate-700">
          <span class="flex items-center gap-2">
            <span class="w-4 h-4 rounded-full bg-blue-100 text-[#107acc] inline-flex items-center justify-center text-[10px] font-bold animate-spin">↻</span>
            <span class="font-semibold">Generating answer explanations & distractor analysis</span>
          </span>
          <span class="font-mono text-[10px] text-[#107acc] font-bold">ACTIVE</span>
        </div>
        <div id="aiGenStep3" class="flex items-center justify-between text-slate-400">
          <span class="flex items-center gap-2">
            <span class="w-4 h-4 rounded-full bg-slate-200 inline-flex items-center justify-center text-[10px] font-bold">3</span>
            <span>Configuring Dwaani AI Voice Viva prompt & customer scenario</span>
          </span>
          <span class="font-mono text-[10px]">PENDING</span>
        </div>
      </div>

      <div class="space-y-1">
        <div class="flex items-center justify-between text-[11px] font-bold text-slate-700">
          <span>Synthesis Progress</span>
          <span id="aiGenPercentText" class="font-mono text-[#107acc]">65%</span>
        </div>
        <div class="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
          <div id="aiGenProgressBar" class="bg-gradient-to-r from-[#107acc] to-purple-600 h-full w-[65%] transition-all duration-300"></div>
        </div>
      </div>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 6: JD-RESUME SEMANTIC FIT SCORING RADAR ANIMATION MODAL       -->
  <!-- =================================================================== -->
  <div id="modal-resume-fit-scan" class="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-md w-full p-6 space-y-5 text-center transform transition-all duration-300">
      
      <!-- Animated Radar / Pulse Ring -->
      <div class="relative w-24 h-24 mx-auto flex items-center justify-center">
        <div class="absolute inset-0 rounded-full border-2 border-[#107acc]/30 animate-ping"></div>
        <div class="absolute inset-2 rounded-full border-2 border-dashed border-[#107acc]/50 animate-spin"></div>
        <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-[#107acc] to-[#38bdf8] text-white flex items-center justify-center shadow-brand-glow">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="2" x2="12" y2="12"></line><line x1="12" y1="12" x2="19" y2="19"></line></svg>
        </div>
      </div>

      <div>
        <h3 class="text-base font-bold text-slate-900">Calculating JD-Resume Fit Scores</h3>
        <p class="text-xs text-slate-500 mt-1">Comparing candidate experience vectors against Hardware Support (Tier 1) rubric...</p>
      </div>

      <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-left text-xs font-mono">
        <div class="flex items-center justify-between text-slate-700">
          <span>Parsing: Kalyani Sundaram</span>
          <span class="text-emerald-600 font-bold">94% Match</span>
        </div>
        <div class="flex items-center justify-between text-slate-700">
          <span>Parsing: Arjun Ramanathan</span>
          <span class="text-blue-600 font-bold">88% Match</span>
        </div>
        <div class="flex items-center justify-between text-slate-700">
          <span>Parsing: Sneha Mukherjee</span>
          <span class="text-amber-600 font-bold">76% Match</span>
        </div>
      </div>

      <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
        <div id="fitScanProgress" class="bg-gradient-to-r from-[#107acc] to-emerald-500 h-full w-3/4 animate-pulse"></div>
      </div>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 7: DRAG & DROP CANDIDATE CSV UPLOAD MODAL                     -->
  <!-- =================================================================== -->
  <div id="modal-csv-upload" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden transform transition-all duration-200">
      
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900">Upload Candidates CSV</h3>
            <p class="text-xs text-slate-500">Bulk enroll candidate cohort with instant validation</p>
          </div>
        </div>
        <button onclick="closeCsvUploadModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">✕</button>
      </div>

      <div class="p-6 space-y-4 text-xs">
        <!-- Drag & Drop Zone -->
        <div id="csvDropZone" ondragover="event.preventDefault(); this.classList.add('border-[#107acc]','bg-blue-50/30');" ondragleave="this.classList.remove('border-[#107acc]','bg-blue-50/30');" ondrop="handleCsvDrop(event)" class="border-2 border-dashed border-slate-300 hover:border-[#107acc] rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-3 bg-slate-50/50 transition cursor-pointer">
          <div class="w-12 h-12 rounded-2xl bg-blue-50 text-[#107acc] flex items-center justify-center">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <div>
            <p class="font-bold text-slate-800 text-sm">Drag and drop your candidate CSV file here</p>
            <p class="text-slate-400 text-xs mt-0.5">Supports .CSV, .XLSX files up to 10MB (max 10,000 candidates)</p>
          </div>
          <label class="px-4 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white font-bold cursor-pointer transition shadow-xs">
            <span>Browse Computer Files</span>
            <input type="file" id="csvFileInput" accept=".csv" class="hidden" onchange="handleCsvFileSelect(event)" />
          </label>
        </div>

        <!-- Sample Download & Format Notes -->
        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
          <div class="space-y-0.5">
            <span class="font-bold text-slate-800 block">GradArena Sample Format</span>
            <span class="text-slate-500 text-[11px] block">Columns required: Full Name, Email, Phone, Experience, Resume URL</span>
          </div>
          <button onclick="downloadSampleCsv()" class="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-white text-slate-700 font-semibold text-[11px] transition">
            Download Template
          </button>
        </div>

        <div class="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
          <button onclick="closeCsvUploadModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">Cancel</button>
          <button onclick="simulateCsvParse()" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white font-bold transition shadow-xs">
            Import Cohort
          </button>
        </div>
      </div>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 8: IMPORT FROM PREVIOUS TESTS MODAL                           -->
  <!-- =================================================================== -->
  <div id="modal-import-previous" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden transform transition-all duration-200">
      
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900">Import from Previous Assessment</h3>
            <p class="text-xs text-slate-500">Reuse vetted candidates from past drives</p>
          </div>
        </div>
        <button onclick="closeImportPreviousModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">✕</button>
      </div>

      <div class="p-6 space-y-4 text-xs">
        <div class="space-y-1">
          <label class="font-bold text-slate-700">Select Past Assessment Drive</label>
          <select id="importPastSelect" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20">
            <option value="lead">LEAD generation Executive (42 Candidates)</option>
            <option value="cloud">Senior Cloud Architect (18 Candidates)</option>
            <option value="acc">Accountant (64 Candidates)</option>
          </select>
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between text-slate-500 font-semibold text-[11px]">
            <span>Candidates Available (Top Ranked)</span>
            <span>Select All (3)</span>
          </div>
          <div class="space-y-1.5 max-h-48 overflow-y-auto custom-scrollbar border border-slate-200 rounded-xl p-2 bg-slate-50">
            <label class="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100 cursor-pointer hover:bg-blue-50/40">
              <div class="flex items-center gap-2.5">
                <input type="checkbox" checked class="rounded text-[#107acc]" />
                <div>
                  <span class="font-bold text-slate-900 block">Vikramaditya Sengupta</span>
                  <span class="text-[10px] text-slate-400">vikram.sen@gmail.com • 3 Yrs Exp</span>
                </div>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">92% Prior Score</span>
            </label>
            <label class="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100 cursor-pointer hover:bg-blue-50/40">
              <div class="flex items-center gap-2.5">
                <input type="checkbox" checked class="rounded text-[#107acc]" />
                <div>
                  <span class="font-bold text-slate-900 block">Divya Nair</span>
                  <span class="text-[10px] text-slate-400">divya.nair@live.in • 2 Yrs Exp</span>
                </div>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">88% Prior Score</span>
            </label>
            <label class="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100 cursor-pointer hover:bg-blue-50/40">
              <div class="flex items-center gap-2.5">
                <input type="checkbox" checked class="rounded text-[#107acc]" />
                <div>
                  <span class="font-bold text-slate-900 block">Karan Mehra</span>
                  <span class="text-[10px] text-slate-400">karan.m@techcorp.com • 1.5 Yrs Exp</span>
                </div>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#107acc]">81% Prior Score</span>
            </label>
          </div>
        </div>

        <div class="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <button onclick="closeImportPreviousModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">Cancel</button>
          <button onclick="confirmImportPrevious()" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white font-bold transition shadow-xs">
            Import 3 Selected Candidates
          </button>
        </div>
      </div>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 9: CANDIDATE WEBCAM PROCTORING INSPECTOR (ZOOM + AI BOUNDING) -->
  <!-- =================================================================== -->
  <div id="modal-webcam-inspect" class="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 hidden flex items-center justify-center p-4">
    <div class="bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 max-w-2xl w-full overflow-hidden transform transition-all duration-200">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-xl bg-blue-500/20 text-[#38bdf8] flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
          </div>
          <div>
            <h3 class="text-sm font-bold text-white flex items-center gap-2">
              <span>Proctoring Snapshot Telemetry</span>
              <span id="inspectFlagBadge" class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">VERIFIED NORMAL</span>
            </h3>
            <p id="inspectTimeMeta" class="text-[11px] text-slate-400 font-mono">Timestamp: 10:14:02 AM • Section 1, Question 3</p>
          </div>
        </div>
        <button onclick="closeWebcamInspector()" class="w-8 h-8 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition">✕</button>
      </div>

      <!-- Image Viewer with AI Bounding Box Overlay -->
      <div class="p-6 space-y-4">
        <div class="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-slate-800 group">
          <img id="inspectModalImg" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80" class="w-full h-full object-cover" alt="Webcam Feed Zoom" />
          
          <!-- AI Face Bounding Box HUD Overlay -->
          <div class="absolute inset-x-[32%] inset-y-[15%] border-2 border-emerald-400/80 rounded-xl pointer-events-none flex flex-col justify-between p-1.5 shadow-lg shadow-emerald-500/20">
            <div class="flex items-center justify-between text-[9px] font-mono font-bold text-emerald-300 bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-xs">
              <span>FACE: PRIMARY CANDIDATE</span>
              <span>99.4% CONF</span>
            </div>
            <div class="flex items-center justify-between text-[9px] font-mono text-emerald-300 bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-xs">
              <span>GAZE: CENTER SCREEN</span>
              <span>NO SECOND PERSON</span>
            </div>
          </div>

          <!-- Bottom Telemetry HUD Bar -->
          <div class="absolute bottom-3 inset-x-3 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl flex items-center justify-between text-xs border border-slate-700/60">
            <div class="flex items-center gap-3">
              <span class="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Webcam 1080p Stream
              </span>
              <span class="text-slate-500">|</span>
              <span class="text-slate-300 text-[11px] font-mono">Ambient Audio: 22 dB (Silent)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded font-mono">FPS: 30</span>
              <span class="text-[10px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded font-mono">Hash: #a89f-21</span>
            </div>
          </div>
        </div>

        <!-- Telemetry Metrics Row -->
        <div class="grid grid-cols-3 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-0.5">
            <span class="text-[10px] text-slate-400 block uppercase font-mono">Eye-Tracking Vector</span>
            <span class="text-slate-200 font-bold">Screen Focused (98%)</span>
          </div>
          <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-0.5">
            <span class="text-[10px] text-slate-400 block uppercase font-mono">Tab Focus / Dual Monitor</span>
            <span class="text-emerald-400 font-bold">0 Switches Detected</span>
          </div>
          <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-0.5">
            <span class="text-[10px] text-slate-400 block uppercase font-mono">Microphone Decibels</span>
            <span class="text-slate-200 font-bold">No Multiple Voices</span>
          </div>
        </div>

        <!-- Modal Footer Actions -->
        <div class="flex items-center justify-between pt-2 border-t border-slate-800">
          <button onclick="toggleSnapshotFlag()" class="px-4 py-2 rounded-xl border border-amber-500/30 text-amber-400 hover:bg-amber-500/10 text-xs font-semibold transition">
            Flag for Manual Audit
          </button>
          <div class="flex items-center gap-2">
            <button onclick="closeWebcamInspector()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition">
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 10: 1080P ROOM VERIFICATION VIDEO PLAYER                      -->
  <!-- =================================================================== -->
  <div id="modal-video-verify" class="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 hidden flex items-center justify-center p-4">
    <div class="bg-slate-900 text-white rounded-3xl shadow-2xl border border-slate-800 max-w-3xl w-full overflow-hidden transform transition-all duration-200">
      
      <div class="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
          <div>
            <h3 class="text-sm font-bold text-white">Full Proctoring Session Video Log (360° Room Sweep)</h3>
            <p class="text-[11px] text-slate-400">Candidate: Kalyani Sundaram • Total Duration: 42m 18s</p>
          </div>
        </div>
        <button onclick="closeVideoVerificationModal()" class="w-8 h-8 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition">✕</button>
      </div>

      <div class="p-6 space-y-4">
        <div class="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-slate-800">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=80" class="w-full h-full object-cover filter brightness-90" alt="Video Player" />
          
          <!-- Play Overlay Center -->
          <button onclick="showToast('Video Stream', 'Playing 1080p verified proctoring session recording...', 'info')" class="w-16 h-16 rounded-full bg-[#107acc]/90 hover:bg-[#107acc] text-white flex items-center justify-center shadow-xl transition transform hover:scale-105">
            <svg class="w-8 h-8 translate-x-0.5" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </button>

          <!-- Timeline Scrubber -->
          <div class="absolute bottom-3 inset-x-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl space-y-2 border border-slate-800">
            <div class="flex items-center justify-between text-[11px] font-mono text-slate-300">
              <span>04:12 / 42:18 (Section 1 Completed)</span>
              <span class="text-emerald-400 font-bold">● Proctoring Active • 0 Infractions</span>
            </div>
            <div class="w-full bg-slate-800 rounded-full h-2 cursor-pointer overflow-hidden">
              <div class="bg-[#107acc] h-full w-[10%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 11: UPLOAD TEST SCHEMA JSON                                   -->
  <!-- =================================================================== -->
  <div id="modal-upload-json" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden transform transition-all duration-200">
      
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900">Upload Test Schema JSON</h3>
            <p class="text-xs text-slate-500">Import structured assessment blueprint</p>
          </div>
        </div>
        <button onclick="closeUploadJsonModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">✕</button>
      </div>

      <div class="p-6 space-y-4 text-xs">
        <div class="space-y-1.5">
          <label class="font-bold text-slate-700">Paste JSON Schema or Blueprint</label>
          <textarea id="jsonUploadContent" rows="6" placeholder='{\n  "testTitle": "Hardware Support (Tier 1)",\n  "sections": [...]\n}' class="w-full p-3 rounded-xl border border-slate-200 font-mono text-[11px] bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20"></textarea>
        </div>

        <div class="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
          <button onclick="closeUploadJsonModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">Cancel</button>
          <button onclick="handleJsonUploadDemo()" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white font-bold transition shadow-xs">
            Import Schema
          </button>
        </div>
      </div>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 12: TICKET DETAIL INSPECTOR MODAL                             -->
  <!-- =================================================================== -->
  <div id="modal-ticket-detail" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden transform transition-all duration-200">
      
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <div>
            <h3 id="ticketModalTitle" class="text-base font-bold text-slate-900">Support Ticket TICK-1092</h3>
            <p id="ticketModalMeta" class="text-xs text-slate-500">Candidate Appeal • Kalyani Sundaram</p>
          </div>
        </div>
        <button onclick="closeTicketDetailModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">✕</button>
      </div>

      <div class="p-6 space-y-4 text-xs">
        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-700">Issue Description:</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200">HIGH PRIORITY</span>
          </div>
          <p id="ticketModalDesc" class="text-slate-600 leading-relaxed">"My laptop webcam temporarily disconnected for 3 seconds during Section 1 (Question 3). The proctoring system auto-recovered. Please verify my attempt is not disqualified."</p>
        </div>

        <div class="space-y-1.5">
          <label class="font-bold text-slate-700">Recruiter Resolution Note</label>
          <textarea id="ticketReplyNote" rows="2" class="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" placeholder="Enter resolution explanation for candidate...">Reviewed webcam snapshot telemetry. Video verification confirms benign USB reconnect. Score 8/10 approved.</textarea>
        </div>

        <div class="flex items-center justify-between pt-3 border-t border-slate-100">
          <button onclick="showToast('Link Re-Issued', 'Sent fresh assessment token to candidate.', 'success')" class="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 font-semibold text-slate-700 text-xs transition">
            Re-issue Link
          </button>
          <div class="flex items-center gap-2">
            <button onclick="closeTicketDetailModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">Cancel</button>
            <button onclick="resolveTicketAction()" class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition shadow-xs">
              Resolve Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 13: NEW TICKET CREATION MODAL                                 -->
  <!-- =================================================================== -->
  <div id="modal-new-ticket" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden transform transition-all duration-200">
      
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900">Create Support Ticket</h3>
            <p class="text-xs text-slate-500">Log candidate dispute or assessment issue</p>
          </div>
        </div>
        <button onclick="closeNewTicketModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">✕</button>
      </div>

      <form onsubmit="submitNewTicket(event)" class="p-6 space-y-4 text-xs">
        <div class="space-y-1">
          <label class="font-bold text-slate-700">Candidate Email / Identifier <span class="text-rose-500">*</span></label>
          <input type="email" id="newTicketEmail" required placeholder="e.g. candidate@example.com" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Subject / Category <span class="text-rose-500">*</span></label>
          <input type="text" id="newTicketSubject" required placeholder="e.g. Proctoring False Positive Appeal" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Priority Level</label>
          <select id="newTicketPriority" class="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs bg-white">
            <option value="Normal">Normal</option>
            <option value="High" selected>High (Candidate waiting)</option>
            <option value="Critical">Critical (System issue)</option>
          </select>
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Detailed Statement <span class="text-rose-500">*</span></label>
          <textarea id="newTicketBody" rows="3" required placeholder="Describe the candidate appeal or issue in detail..." class="w-full p-3 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20"></textarea>
        </div>

        <div class="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <button type="button" onclick="closeNewTicketModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">Cancel</button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white font-bold transition shadow-xs">
            Submit Ticket
          </button>
        </div>
      </form>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- MODAL 14: EDIT CANDIDATE IN COHORT                                  -->
  <!-- =================================================================== -->
  <div id="modal-edit-candidate" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden flex items-center justify-center p-4">
    <div class="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden transform transition-all duration-200">
      
      <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-blue-50 text-[#107acc] flex items-center justify-center">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </div>
          <div>
            <h3 class="text-base font-bold text-slate-900">Edit Candidate Details</h3>
            <p class="text-xs text-slate-500">Update cohort contact information</p>
          </div>
        </div>
        <button onclick="closeCandidateEditModal()" class="w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 flex items-center justify-center transition">✕</button>
      </div>

      <form onsubmit="saveCandidateEdit(event)" class="p-6 space-y-4 text-xs">
        <div class="space-y-1">
          <label class="font-bold text-slate-700">Full Name</label>
          <input type="text" id="editCandName" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Email Address</label>
          <input type="email" id="editCandEmail" required class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Phone</label>
          <input type="tel" id="editCandPhone" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white font-mono focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
        </div>

        <div class="space-y-1">
          <label class="font-bold text-slate-700">Experience Profile</label>
          <input type="text" id="editCandRole" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#107acc]/20" />
        </div>

        <div class="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
          <button type="button" onclick="closeCandidateEditModal()" class="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-semibold">Cancel</button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-[#107acc] hover:bg-[#0c68ab] text-white font-bold transition shadow-xs">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>


  <!-- =================================================================== -->
  <!-- TOAST NOTIFICATION CONTAINER                                        -->
  <!-- =================================================================== -->
  <div id="toast-container" class="fixed bottom-6 right-6 z-[100] flex flex-col gap-2.5 pointer-events-none"></div>


  <!-- =================================================================== -->
  <!-- MASTER RECRUITER CLIENT-SIDE SCRIPT                                 -->
  <!-- =================================================================== -->
  <script>
    // Screen titles & subtitles mapping
    const screenMeta = {
      'dashboard': {
        title: 'Recruiter Dashboard',
        subtitle: 'Candidate pipeline, AI credit telemetry & assessment oversight'
      },
      'create-test': {
        title: 'Create Assessment Studio',
        subtitle: 'Auto-fill from job postings, configure Dwaani Voice AI & submit for manager approval'
      },
      'my-tests': {
        title: 'My Assessments Inventory',
        subtitle: '30 published and draft assessments • Manage candidates, blueprints & edit requests'
      },
      'modifications': {
        title: 'Modification Requests & Sign-offs',
        subtitle: 'Track assessment change requests awaiting approval from Operations Manager Rajini K'
      },
      'candidates': {
        title: 'Candidate Talent Pool',
        subtitle: '285 applicants across all tests • Proctoring scores, attempt audits & evaluations'
      },
      'candidate-eval': {
        title: 'Candidate Evaluation Dossier',
        subtitle: 'Kalyani Sundaram (Score: 8/10) • Proctoring timeline, voice verification & recruiter recommendation'
      },
      'import-candidates': {
        title: 'Import & Assign Candidates',
        subtitle: 'Bulk CSV intake, JD-resume semantic fit scoring, and cohort assignment'
      },
      'send-invitations': {
        title: 'Dispatch Candidate Invitations',
        subtitle: 'Schedule assessment windows, custom corporate introductions & send secure exam links'
      },
      'message': {
        title: 'Internal Communication Console',
        subtitle: 'Collaborate with Operations Manager Rajini K on approvals and candidate escalation'
      },
      'tickets': {
        title: 'Recruiter Support & Appeals',
        subtitle: 'Manage proctoring anomaly tickets, invitation renewals and candidate disputes'
      }
    };

    // Screen Switching Controller
    function switchScreen(screenName) {
      if (!screenName) screenName = 'dashboard';

      // 1. Hide all screen views
      const screens = document.querySelectorAll('.screen-view');
      screens.forEach(s => s.classList.add('hidden'));

      // 2. Show target screen
      const targetScreen = document.getElementById('screen-' + screenName);
      if (targetScreen) {
        targetScreen.classList.remove('hidden');
      } else {
        const dash = document.getElementById('screen-dashboard');
        if (dash) dash.classList.remove('hidden');
        screenName = 'dashboard';
      }

      // 3. Update active state on sidebar navigation
      const navIds = ['dashboard', 'create-test', 'my-tests', 'modifications', 'candidates', 'import-candidates', 'message', 'tickets'];
      navIds.forEach(id => {
        const btn = document.getElementById('nav-' + id);
        if (btn) {
          if (id === screenName || (screenName === 'send-invitations' && id === 'import-candidates') || (screenName === 'candidate-eval' && id === 'candidates')) {
            btn.className = 'w-full flex items-center justify-between px-3.5 py-3 nav-item-active transition rounded-xl';
          } else {
            btn.className = 'w-full flex items-center justify-between px-3.5 py-3 nav-item-inactive transition rounded-xl';
          }
        }
    });

      // 4. Update Header Title & Subtitle
      const meta = screenMeta[screenName] || screenMeta['dashboard'];
      const titleEl = document.getElementById('screenTitle');
      const subEl = document.getElementById('screenSubtitle');
      if (titleEl) titleEl.textContent = meta.title;
      if (subEl) subEl.textContent = meta.subtitle;

      // 5. Scroll main container to top smoothly
      const main = document.getElementById('mainContent');
      if (main) main.scrollTo({ top: 0, behavior: 'smooth' });

      // 6. Close profile dropdown if open
      closeProfileDropdown();

      // 7. Update URL search param for deep linking without reload
      try {
        const url = new URL(window.location);
        url.searchParams.set('screen', screenName);
        window.history.replaceState({}, '', url);
      } catch (e) {}
    }

    // Wizard Step Controller (Screen: Create Test)
    function setRecruiterStep(stepNumber) {
      const step1 = document.getElementById('createStep1');
      const step2 = document.getElementById('createStep2');
      const step3 = document.getElementById('createStep3');

      const pill1 = document.getElementById('stepPill1');
      const pill2 = document.getElementById('stepPill2');
      const pill3 = document.getElementById('stepPill3');

      if (!step1 || !step2 || !step3) return;

      step1.classList.add('hidden');
      step2.classList.add('hidden');
      step3.classList.add('hidden');

      const activePillClass = 'flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#107acc] text-white font-bold text-xs shadow-xs';
      const inactivePillClass = 'flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-600 font-semibold text-xs hover:bg-slate-200 transition';

      if (stepNumber === 1) {
        step1.classList.remove('hidden');
        if (pill1) pill1.className = activePillClass;
        if (pill2) pill2.className = inactivePillClass;
        if (pill3) pill3.className = inactivePillClass;
      } else if (stepNumber === 2) {
        step2.classList.remove('hidden');
        if (pill1) pill1.className = inactivePillClass;
        if (pill2) pill2.className = activePillClass;
        if (pill3) pill3.className = inactivePillClass;
      } else if (stepNumber === 3) {
        step3.classList.remove('hidden');
        if (pill1) pill1.className = inactivePillClass;
        if (pill2) pill2.className = inactivePillClass;
        if (pill3) pill3.className = activePillClass;
      }

      const main = document.getElementById('mainContent');
      if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Live Clock Interval
    function initLiveClock() {
      const clockEl = document.getElementById('liveClock');
      if (!clockEl) return;
      const update = () => {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        clockEl.textContent = timeStr + ' • IST (GMT+5:30)';
      };
      update();
      setInterval(update, 1000);
    }

    // Credits Popover Toggle
    function toggleCreditsPopover() {
      const popover = document.getElementById('creditsPopover');
      if (!popover) return;
      popover.classList.toggle('hidden');
    }

    // Notification Drawer Toggle
    function toggleNotificationDrawer() {
      const drawer = document.getElementById('notificationDrawer');
      if (!drawer) return;
      drawer.classList.toggle('hidden');
    }

    // Auto-fill test from Job URL simulation with Animated Modal
    function extractJobDetailsDemo() {
      const modal = document.getElementById('modal-job-extract-anim');
      if (modal) modal.classList.remove('hidden');

      const pBar = document.getElementById('extractProgressBar');
      const s1 = document.getElementById('extractStep1');
      const s2 = document.getElementById('extractStep2');
      const s3 = document.getElementById('extractStep3');
      const s4 = document.getElementById('extractStep4');

      if (pBar) pBar.style.width = '25%';

      setTimeout(() => {
        if (pBar) pBar.style.width = '60%';
        if (s2) s2.innerHTML = '<div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</div><span class="text-slate-700">Parsed job description & competencies</span>';
        if (s3) s3.innerHTML = '<div class="w-5 h-5 rounded-full bg-blue-100 text-[#107acc] flex items-center justify-center text-[10px] font-bold animate-spin">↻</div><span class="text-slate-700 font-semibold">Synthesizing diagnostic competencies</span>';
      }, 500);

      setTimeout(() => {
        if (pBar) pBar.style.width = '100%';
        if (s3) s3.innerHTML = '<div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</div><span class="text-slate-700">Synthesized diagnostic competencies</span>';
        if (s4) s4.innerHTML = '<div class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">✓</div><span class="text-slate-700">Populated assessment configuration</span>';
      }, 900);

      setTimeout(() => {
        const titleInput = document.getElementById('recruiterTestTitle');
        if (titleInput) titleInput.value = 'Hardware Support & Cloud Operations (Tier 1)';

        const clientInput = document.getElementById('recruiterClientName');
        if (clientInput) clientInput.value = 'WFM Enterprise';

        const expInput = document.getElementById('recruiterExpReq');
        if (expInput) expInput.value = '1 - 3 Years (Junior to Mid Technical Support)';

        const jdArea = document.getElementById('recruiterJdArea');
        if (jdArea) {
          jdArea.value = 'Role: Hardware Support Tier 1\\nOrganization: WFM Enterprise\\nLocation: Hyderabad / Hybrid\\n\\nKey Responsibilities:\\n• Diagnose and repair enterprise desktop/laptop hardware, peripheral connectivity, and motherboard BIOS settings.\\n• Manage TCP/IP network troubleshooting, DHCP server allocation, and VPN gateways.\\n• Conduct customer troubleshooting via phone and remote desktop sessions.\\n• Basic cloud virtualization troubleshooting (AWS WorkSpaces, Azure Virtual Desktop).';
        }

        if (modal) modal.classList.add('hidden');
        showToast('Job Details Extracted', 'Extracted 4 technical competencies from LinkedIn job listing.', 'success');
      }, 1250);
    }

    // AI Generate Questions Simulation with Modal
    function openAiTestGenModal() {
      simulateAiGenerateQuestions();
    }

    function simulateAiGenerateQuestions() {
      const modal = document.getElementById('modal-ai-test-gen');
      if (modal) modal.classList.remove('hidden');

      const pBar = document.getElementById('aiGenProgressBar');
      const pText = document.getElementById('aiGenPercentText');
      const s2 = document.getElementById('aiGenStep2');
      const s3 = document.getElementById('aiGenStep3');

      if (pBar) pBar.style.width = '30%';
      if (pText) pText.textContent = '30%';

      setTimeout(() => {
        if (pBar) pBar.style.width = '70%';
        if (pText) pText.textContent = '70%';
        if (s2) s2.innerHTML = '<span class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 inline-flex items-center justify-center text-[10px] font-bold">✓</span><span>Generated answer explanations & distractor analysis</span></span><span class="font-mono text-[10px] text-emerald-600 font-bold">DONE</span>';
        if (s3) s3.innerHTML = '<span class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-blue-100 text-[#107acc] inline-flex items-center justify-center text-[10px] font-bold animate-spin">↻</span><span class="font-semibold text-slate-800">Configuring Dwaani AI Voice Viva prompt & customer scenario</span></span><span class="font-mono text-[10px] text-[#107acc] font-bold">ACTIVE</span>';
      }, 600);

      setTimeout(() => {
        if (pBar) pBar.style.width = '100%';
        if (pText) pText.textContent = '100%';
        if (s3) s3.innerHTML = '<span class="flex items-center gap-2"><span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 inline-flex items-center justify-center text-[10px] font-bold">✓</span><span>Configured Dwaani AI Voice Viva prompt & customer scenario</span></span><span class="font-mono text-[10px] text-emerald-600 font-bold">DONE</span>';
      }, 1100);

      setTimeout(() => {
        if (modal) modal.classList.add('hidden');
        showToast('AI Questions Ready', 'Generated 5 diagnostic MCQs and 1 Voice Viva scenario.', 'success');
      }, 1450);
    }

    // Submit Recruiter Test For Manager Review
    function submitRecruiterTestForReview() {
      showToast('Submitted for Review', 'Assessment forwarded to Operations Manager Rajini K for sign-off.', 'success');
      setTimeout(() => {
        switchScreen('my-tests');
      }, 1200);
    }

    // Request Edit Permission Modal
    function openReqEditModal(testTitle, testId) {
      const modal = document.getElementById('modal-req-edit');
      if (!modal) return;
      const titleEl = document.getElementById('reqEditTestTitle');
      const idEl = document.getElementById('reqEditTestId');
      if (titleEl && testTitle) titleEl.textContent = testTitle;
      if (idEl && testId) idEl.textContent = testId;
      modal.classList.remove('hidden');
    }

    function closeReqEditModal() {
      const modal = document.getElementById('modal-req-edit');
      if (modal) modal.classList.add('hidden');
    }

    function submitReqEdit(e) {
      if (e) e.preventDefault();
      const testTitle = document.getElementById('reqEditTestTitle')?.textContent || 'Assessment';
      closeReqEditModal();
      showToast('Edit Request Submitted', 'Manager Rajini K has been notified to review and unlock ' + testTitle, 'success');
    }

    // Add Candidate Manually Modal
    function openAddCandidateModal() {
      const modal = document.getElementById('modal-add-candidate');
      if (modal) modal.classList.remove('hidden');
    }

    function closeAddCandidateModal() {
      const modal = document.getElementById('modal-add-candidate');
      if (modal) modal.classList.add('hidden');
    }

    function submitAddCandidate(e) {
      if (e) e.preventDefault();
      const name = document.getElementById('addCandName')?.value || 'New Candidate';
      const email = document.getElementById('addCandEmail')?.value || 'candidate@example.com';
      closeAddCandidateModal();
      showToast('Candidate Added', name + ' (' + email + ') enrolled successfully.', 'success');
    }

    // Profile Dropdown Menu Controller
    function toggleProfileDropdown() {
      const menu = document.getElementById('profileDropdownMenu');
      const chevron = document.getElementById('profileChevron');
      if (!menu) return;
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        if (chevron) chevron.classList.add('rotate-180');
      } else {
        menu.classList.add('hidden');
        if (chevron) chevron.classList.remove('rotate-180');
      }
    }

    function closeProfileDropdown() {
      const menu = document.getElementById('profileDropdownMenu');
      const chevron = document.getElementById('profileChevron');
      if (menu) menu.classList.add('hidden');
      if (chevron) chevron.classList.remove('rotate-180');
    }

    // Profile & Organization Settings Modal
    function openProfileSettingsModal(tab) {
      const modal = document.getElementById('modal-profile-settings');
      if (modal) modal.classList.remove('hidden');
      closeProfileDropdown();
      if (tab) switchProfileTab(tab);
      else switchProfileTab('general');
    }

    function closeProfileSettingsModal() {
      const modal = document.getElementById('modal-profile-settings');
      if (modal) modal.classList.add('hidden');
    }

    function switchProfileTab(tabName) {
      const tabs = ['general', 'org', 'security'];
      tabs.forEach(t => {
        const btn = document.getElementById('pTabBtn-' + t);
        const content = document.getElementById('pTabContent-' + t);
        if (btn && content) {
          if (t === tabName) {
            btn.className = 'px-3.5 py-2 font-bold text-[#107acc] border-b-2 border-[#107acc]';
            content.classList.remove('hidden');
          } else {
            btn.className = 'px-3.5 py-2 font-semibold text-slate-500 hover:text-slate-800';
            content.classList.add('hidden');
          }
        }
    });
    }

    // Logo Upload & Live Preview
    function handleLogoUpload(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(e) {
        const preview = document.getElementById('orgLogoPreview');
        if (preview) preview.src = e.target.result;
        showToast('Logo Updated', 'Organization logo preview updated successfully.', 'success');
      };
      reader.readAsDataURL(file);
    }

    // Send Invitations Dispatcher
    function handleSendInvitations() {
      const btn = event?.currentTarget;
      if (btn) {
        btn.innerHTML = '<span class="inline-block animate-spin mr-1.5">↻</span> Sending Invitations...';
        btn.disabled = true;
      }
      setTimeout(() => {
        showToast('Invitations Dispatched', 'Assessment access links sent to candidate cohort.', 'success');
        if (btn) btn.innerHTML = '✓ Dispatched Successfully';
        setTimeout(() => {
          switchScreen('candidates');
        }, 800);
      }, 900);
    }

    // Modifications Filter Controller
    function filterModifications(filterType) {
      const card1 = document.getElementById('modCard-1');
      const card2 = document.getElementById('modCard-2');
      const cardEmpty = document.getElementById('modCard-empty');

      const tabs = ['all', 'pending', 'approved', 'empty'];
      tabs.forEach(t => {
        const tabEl = document.getElementById('modTab-' + t);
        if (tabEl) {
          if (t === filterType) {
            tabEl.className = 'px-4 py-2 rounded-xl bg-blue-50 text-[#107acc] font-bold border border-blue-200';
          } else {
            tabEl.className = 'px-4 py-2 rounded-xl text-slate-500 hover:text-slate-800 font-semibold hover:bg-slate-50';
          }
        }
    });

      if (filterType === 'all') {
        if (card1) card1.classList.remove('hidden');
        if (card2) card2.classList.remove('hidden');
        if (cardEmpty) cardEmpty.classList.add('hidden');
      } else if (filterType === 'pending') {
        if (card1) card1.classList.remove('hidden');
        if (card2) card2.classList.add('hidden');
        if (cardEmpty) cardEmpty.classList.add('hidden');
      } else if (filterType === 'approved') {
        if (card1) card1.classList.add('hidden');
        if (card2) card2.classList.remove('hidden');
        if (cardEmpty) cardEmpty.classList.add('hidden');
      } else if (filterType === 'empty') {
        if (card1) card1.classList.add('hidden');
        if (card2) card2.classList.add('hidden');
        if (cardEmpty) cardEmpty.classList.remove('hidden');
      }
    }

    // Real-time Dashboard Recent Tests Filter
    function filterDashboardRecentTests(keyword) {
      const q = (keyword || '').toLowerCase().trim();
      const rows = document.querySelectorAll('#dashboardTestsTableBody tr');
      rows.forEach(r => {
        const text = r.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          r.style.display = '';
        } else {
          r.style.display = 'none';
        }
    });
    }

    // Real-time My Tests Table Multi-Filter
    function filterMyTestsTable() {
      const search = (document.getElementById('searchMyTestsInput')?.value || '').toLowerCase().trim();
      const creator = (document.getElementById('filterCreatorSelect')?.value || '').toLowerCase().trim();
      const client = (document.getElementById('filterClientSelect')?.value || '').toLowerCase().trim();
      const status = (document.getElementById('filterStatusSelect')?.value || '').toLowerCase().trim();

      const rows = document.querySelectorAll('#myTestsTableBody tr');
      rows.forEach(r => {
        const rowText = r.textContent.toLowerCase();
        const rowCreator = (r.getAttribute('data-creator') || '').toLowerCase();
        const rowClient = (r.getAttribute('data-client') || '').toLowerCase();
        const rowStatus = (r.getAttribute('data-status') || '').toLowerCase();

        let match = true;
        if (search && !rowText.includes(search)) match = false;
        if (creator && !rowCreator.includes(creator)) match = false;
        if (client && !rowClient.includes(client)) match = false;
        if (status && !rowStatus.includes(status)) match = false;

        r.style.display = match ? '' : 'none';
    });
    }

    // Real-time Candidates Table Multi-Filter
    function filterCandidatesTable() {
      const search = (document.getElementById('searchCandidatesInput')?.value || '').toLowerCase().trim();
      const test = (document.getElementById('filterCandidateTestSelect')?.value || '').toLowerCase().trim();

      const rows = document.querySelectorAll('#candidatesTableBody tr');
      rows.forEach(r => {
        const rowText = r.textContent.toLowerCase();
        const rowTest = (r.getAttribute('data-test') || '').toLowerCase();

        let match = true;
        if (search && !rowText.includes(search)) match = false;
        if (test && !rowTest.includes(test)) match = false;

        r.style.display = match ? '' : 'none';
    });
    }

    // Candidate CSV Export Generator
    function exportCandidatesCsv() {
      const csvHeader = "Full Name,Email,Phone,Assessment,Proctoring Score,Benchmark,Status\\n";
      const csvRows = [
        '"Kalyani Sundaram","kalyani@gaconsulting.in","+91 98765 43210","Hardware Support (Tier 1)","8/10 (80%)","89%","Shortlisted"',
        '"Arjun Ramanathan","arjun.ram@outlook.com","+91 94455 12345","Hardware Support (Tier 1)","9/10 (90%)","94%","Shortlisted"',
        '"Sneha Mukherjee","sneha.m@gmail.com","+91 98111 22334","Hardware Support (Tier 1)","7/10 (70%)","76%","Review Pending"',
        '"Vikramaditya Sen","vikram.sen@live.com","+91 99000 88776","LEAD generation Executive","8.5/10 (85%)","92%","Invited"'
      ].join('\\n');

      const blob = new Blob([csvHeader + csvRows], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'GradArena_Candidates_Export.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Export Complete', 'Downloaded GradArena_Candidates_Export.csv with 4 records.', 'success');
    }

    // Copy Link with Toast
    function copyTestLink(title) {
      const link = 'https://gradarena.ai/assess/' + encodeURIComponent(title.toLowerCase().replace(/\\s+/g, '-'));
      if (navigator.clipboard) {
        navigator.clipboard.writeText(link);
      }
      showToast('Link Copied', 'Secure assessment link for ' + title + ' copied to clipboard.', 'success');
    }

    // Request Test Deletion
    function requestDeleteTest(title, id) {
      if (confirm('Are you sure you want to delete ' + title + ' (' + id + ')? This action cannot be undone.')) {
        showToast('Test Deleted', title + ' has been archived.', 'info');
      }
    }

    // Candidate Dossier Actions
    function shareCandidateDossier() {
      const url = 'https://gradarena.ai/eval/dossier/kalyani-sundaram';
      if (navigator.clipboard) navigator.clipboard.writeText(url);
      showToast('Dossier Link Copied', 'Shareable dossier URL copied to clipboard.', 'success');
    }

    function downloadCandidateDossierPdf() {
      showToast('Generating PDF Dossier', 'Compiling proctoring timeline and evaluation scorecard into PDF...', 'info');
      setTimeout(() => {
        showToast('PDF Downloaded', 'Candidate_Dossier_Kalyani_Sundaram.pdf ready.', 'success');
      }, 1000);
    }

    function submitCandidateDecision(decision) {
      showToast('Decision Recorded', 'Kalyani Sundaram marked as: ' + decision.toUpperCase(), 'success');
    }

    function resendCandidateInvite(email) {
      showToast('Invite Resent', 'Sent fresh assessment email to ' + email, 'success');
    }

    function handleUnassignCandidate(candId) {
      showToast('Candidate Removed', 'Removed candidate ' + candId + ' from current cohort.', 'info');
    }

    function withdrawModificationRequest(modId) {
      if (confirm('Withdraw modification request ' + modId + '?')) {
        showToast('Request Withdrawn', 'Modification request ' + modId + ' has been cancelled.', 'info');
      }
    }

    function nudgeManagerForModification(modId) {
      showToast('Manager Nudged', 'Sent reminder notification to Operations Manager Rajini K for ' + modId, 'success');
    }

    // Test Creation Helpers
    function downloadTestJsonSchema() {
      const schema = {
        title: "Hardware Support (Tier 1)",
        client: "WFM Enterprise",
        durationMinutes: 45,
        passingPercentage: 65,
        sections: [
          { name: "Hardware Troubleshooting", questions: 5, weight: 50 },
          { name: "Dwaani Voice AI Scenario", questions: 1, weight: 50 }
        ]
      };
      const blob = new Blob([JSON.stringify(schema, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'GradArena_Test_Schema.json';
      link.click();
      showToast('Schema Downloaded', 'Downloaded GradArena_Test_Schema.json blueprint.', 'success');
    }

    function toggleMaximizeJd() {
      const ta = document.getElementById('recruiterJdArea');
      if (!ta) return;
      if (ta.rows === 6) {
        ta.rows = 14;
        showToast('Expanded View', 'Job description editor maximized.', 'info');
      } else {
        ta.rows = 6;
      }
    }

    function addSectionTab() {
      showToast('New Section Added', 'Section 2 (Custom Technical Domain) created.', 'success');
    }

    function addQuestionItem() {
      showToast('Question Added', 'New question card appended to Section 1.', 'success');
    }

    // Audio Playback Simulation
    let isAudioPlaying = false;
    let audioTimer = null;
    let audioSeconds = 0;

    function toggleAudioPlayback() {
      const btn = document.getElementById('audioPlayToggleBtn');
      const timeDisplay = document.getElementById('audioCurrentTime');
      const pBar = document.getElementById('audioProgressBar');
      const waveBars = document.querySelectorAll('#audioWaveBars div');

      if (!isAudioPlaying) {
        isAudioPlaying = true;
        if (btn) btn.innerHTML = '<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
        
        audioTimer = setInterval(() => {
          audioSeconds++;
          const mins = Math.floor(audioSeconds / 60);
          const secs = (audioSeconds % 60).toString().padStart(2, '0');
          if (timeDisplay) timeDisplay.textContent = mins + ':' + secs;
          if (pBar) pBar.style.width = Math.min(100, (audioSeconds / 42) * 100) + '%';

          waveBars.forEach(b => {
            b.style.height = (Math.random() * 20 + 8) + 'px';
        });

          if (audioSeconds >= 42) {
            clearInterval(audioTimer);
            isAudioPlaying = false;
            audioSeconds = 0;
            if (btn) btn.innerHTML = '<svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
            if (pBar) pBar.style.width = '0%';
          }
        }, 1000);
      } else {
        isAudioPlaying = false;
        clearInterval(audioTimer);
        if (btn) btn.innerHTML = '<svg class="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
      }
    }

    // Webcam Inspector Controller
    function openWebcamInspector(thumbSrc, timestamp, eventLabel, flagType) {
      const modal = document.getElementById('modal-webcam-inspect');
      if (!modal) return;
      const img = document.getElementById('inspectModalImg');
      const timeMeta = document.getElementById('inspectTimeMeta');
      const badge = document.getElementById('inspectFlagBadge');

      if (img && thumbSrc) img.src = thumbSrc;
      if (timeMeta && timestamp) timeMeta.textContent = 'Timestamp: ' + timestamp + ' • Section 1, Question 3';
      if (badge) {
        if (flagType === 'anomaly') {
          badge.textContent = 'FLAGGED FOR REVIEW';
          badge.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30';
        } else {
          badge.textContent = 'VERIFIED NORMAL';
          badge.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
        }
      }
      modal.classList.remove('hidden');
    }

    function closeWebcamInspector() {
      const modal = document.getElementById('modal-webcam-inspect');
      if (modal) modal.classList.add('hidden');
    }

    function toggleSnapshotFlag() {
      const badge = document.getElementById('inspectFlagBadge');
      if (badge) {
        badge.textContent = 'FLAGGED FOR AUDIT';
        badge.className = 'px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30';
      }
      showToast('Flagged', 'Snapshot added to recruiter review log.', 'info');
    }

    // Video Verification Modal
    function openVideoVerificationModal(timestamp) {
      const modal = document.getElementById('modal-video-verify');
      if (modal) modal.classList.remove('hidden');
    }

    function closeVideoVerificationModal() {
      const modal = document.getElementById('modal-video-verify');
      if (modal) modal.classList.add('hidden');
    }

    // CSV Upload Modal Handlers
    function openCsvUploadModal() {
      const modal = document.getElementById('modal-csv-upload');
      if (modal) modal.classList.remove('hidden');
    }

    function closeCsvUploadModal() {
      const modal = document.getElementById('modal-csv-upload');
      if (modal) modal.classList.add('hidden');
    }

    function handleCsvDrop(e) {
      e.preventDefault();
      const dropZone = document.getElementById('csvDropZone');
      if (dropZone) dropZone.classList.remove('border-[#107acc]','bg-blue-50/30');
      simulateCsvParse();
    }

    function handleCsvFileSelect(e) {
      if (e.target.files.length > 0) simulateCsvParse();
    }

    function simulateCsvParse() {
      closeCsvUploadModal();
      showToast('CSV Uploaded', 'Parsed 12 candidates from CSV successfully.', 'success');
    }

    function downloadSampleCsv() {
      const content = "Full Name,Email,Phone,Experience,Resume URL\\nArjun Ramanathan,arjun.ram@outlook.com,+919445512345,2 Years,https://example.com/res1.pdf\\n";
      const blob = new Blob([content], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'GradArena_Sample_Candidates.csv';
      link.click();
    }

    // JD-Resume Fit Scoring Radar Animation
    function calculateJdFitScores() {
      const modal = document.getElementById('modal-resume-fit-scan');
      if (modal) modal.classList.remove('hidden');

      setTimeout(() => {
        if (modal) modal.classList.add('hidden');
        showToast('Semantic Fit Computed', 'Computed JD-Resume semantic match across 3 candidates.', 'success');
      }, 1500);
    }

    // Import Previous Modal
    function openImportPreviousModal() {
      const modal = document.getElementById('modal-import-previous');
      if (modal) modal.classList.remove('hidden');
    }

    function closeImportPreviousModal() {
      const modal = document.getElementById('modal-import-previous');
      if (modal) modal.classList.add('hidden');
    }

    function confirmImportPrevious() {
      closeImportPreviousModal();
      showToast('Candidates Imported', 'Imported 3 vetted candidates from past assessment.', 'success');
    }

    // Upload JSON Modal
    function openUploadJsonModal() {
      const modal = document.getElementById('modal-upload-json');
      if (modal) modal.classList.remove('hidden');
    }

    function closeUploadJsonModal() {
      const modal = document.getElementById('modal-upload-json');
      if (modal) modal.classList.add('hidden');
    }

    function handleJsonUploadDemo() {
      closeUploadJsonModal();
      showToast('Blueprint Imported', 'Assessment schema JSON imported successfully.', 'success');
    }

    // Support Ticket Modals
    function openTicketDetailModal(ticketId) {
      const modal = document.getElementById('modal-ticket-detail');
      const title = document.getElementById('ticketModalTitle');
      const meta = document.getElementById('ticketModalMeta');
      const desc = document.getElementById('ticketModalDesc');

      if (ticketId === 'TICK-1092') {
        if (title) title.textContent = 'Support Ticket TICK-1092';
        if (meta) meta.textContent = 'Candidate Appeal • kalyani@gaconsulting.in';
        if (desc) desc.textContent = '"My laptop webcam temporarily disconnected for 3 seconds during Section 1 (Question 3). The proctoring system auto-recovered. Please verify my attempt is not disqualified."';
      } else {
        if (title) title.textContent = 'Support Ticket TICK-1094';
        if (meta) meta.textContent = 'Access Expiry • testing123@gmail.com';
        if (desc) desc.textContent = '"My assessment invitation link for Cloud Solutions Architect expired before I could sit for the exam. Requesting a 24-hour extension."';
      }

      if (modal) modal.classList.remove('hidden');
    }

    function closeTicketDetailModal() {
      const modal = document.getElementById('modal-ticket-detail');
      if (modal) modal.classList.add('hidden');
    }

    function resolveTicketAction() {
      closeTicketDetailModal();
      showToast('Ticket Resolved', 'Candidate notified and case status updated to RESOLVED.', 'success');
    }

    function openNewTicketModal() {
      const modal = document.getElementById('modal-new-ticket');
      if (modal) modal.classList.remove('hidden');
    }

    function closeNewTicketModal() {
      const modal = document.getElementById('modal-new-ticket');
      if (modal) modal.classList.add('hidden');
    }

    function submitNewTicket(e) {
      if (e) e.preventDefault();
      const subject = document.getElementById('newTicketSubject')?.value || 'New Ticket';
      closeNewTicketModal();
      showToast('Ticket Created', 'Logged ticket: ' + subject, 'success');
    }

    // Edit Candidate Modal
    function openCandidateEditModal(name, email, role, phone) {
      const modal = document.getElementById('modal-edit-candidate');
      if (!modal) return;
      const n = document.getElementById('editCandName');
      const em = document.getElementById('editCandEmail');
      const ph = document.getElementById('editCandPhone');
      const r = document.getElementById('editCandRole');
      if (n && name) n.value = name;
      if (em && email) em.value = email;
      if (ph && phone) ph.value = phone;
      if (r && role) r.value = role;
      modal.classList.remove('hidden');
    }

    function closeCandidateEditModal() {
      const modal = document.getElementById('modal-edit-candidate');
      if (modal) modal.classList.add('hidden');
    }

    function saveCandidateEdit(e) {
      if (e) e.preventDefault();
      const name = document.getElementById('editCandName')?.value || 'Candidate';
      closeCandidateEditModal();
      showToast('Candidate Updated', 'Updated profile information for ' + name, 'success');
    }

    // Recruiter Chat Message Sender with Typing Indicator
    function handleRecruiterSendMessage() {
      const input = document.getElementById('recruiterChatInput');
      if (!input || !input.value.trim()) return;

      const container = document.getElementById('recruiterChatMessages');
      if (!container) return;

      const userText = input.value.trim();
      input.value = '';

      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Outgoing message bubble
      const bubble = document.createElement('div');
      bubble.className = 'flex gap-3 flex-row-reverse';
      bubble.innerHTML = \`
        <div class="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#107acc] to-[#2590e8] text-white flex items-center justify-center font-bold text-[10px] shrink-0">G</div>
        <div class="space-y-1 max-w-md">
          <div class="p-3 rounded-2xl bg-[#107acc] text-white leading-relaxed">
            \${userText}
          </div>
          <span class="text-[10px] text-slate-400 block text-right font-mono">\${timeStr} • Sent</span>
        </div>
      \`;
      container.appendChild(bubble);
      container.scrollTop = container.scrollHeight;

      // Typing indicator bubble
      const typingBubble = document.createElement('div');
      typingBubble.id = 'chatTypingBubble';
      typingBubble.className = 'flex gap-3 items-center';
      typingBubble.innerHTML = \`
        <div class="w-7 h-7 rounded-lg bg-blue-50 text-[#107acc] flex items-center justify-center font-bold text-[10px] shrink-0">R</div>
        <div class="p-3 rounded-2xl bg-slate-100 text-slate-500 flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></span>
          <span class="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]"></span>
          <span class="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]"></span>
        </div>
      \`;
      container.appendChild(typingBubble);
      container.scrollTop = container.scrollHeight;

      // Auto reply after 1.2s
      setTimeout(() => {
        typingBubble.remove();
        const reply = document.createElement('div');
        reply.className = 'flex gap-3';
        reply.innerHTML = \`
          <div class="w-7 h-7 rounded-lg bg-blue-50 text-[#107acc] flex items-center justify-center font-bold text-[10px] shrink-0">R</div>
          <div class="space-y-1 max-w-md">
            <div class="p-3 rounded-2xl bg-slate-100 text-slate-800 leading-relaxed">
              Got your note, Girish. Reviewing your changes now. You will receive an automated sign-off once approved.
            </div>
            <span class="text-[10px] text-slate-400 font-mono">Just now • Operations Manager</span>
          </div>
        \`;
        container.appendChild(reply);
        container.scrollTop = container.scrollHeight;
      }, 1200);
    }

    // Universal Toast Notification System
    function showToast(title, message, type = 'info') {
      const container = document.getElementById('toast-container');
      if (!container) return;

      const toast = document.createElement('div');
      toast.className = 'pointer-events-auto flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xl max-w-sm w-full transform transition-all duration-300 translate-y-4 opacity-0';

      let iconSvg = '';
      if (type === 'success') {
        iconSvg = '<div class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg></div>';
      } else if (type === 'error') {
        iconSvg = '<div class="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></div>';
      } else {
        iconSvg = '<div class="w-7 h-7 rounded-lg bg-blue-50 text-[#107acc] flex items-center justify-center shrink-0"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></div>';
      }

      toast.innerHTML = \`
        \${iconSvg}
        <div class="flex-1 space-y-0.5">
          <h5 class="text-xs font-bold text-slate-900">\${title}</h5>
          <p class="text-[11px] text-slate-500 leading-tight">\${message}</p>
        </div>
        <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-slate-600 text-xs">✕</button>
      \`;

      container.appendChild(toast);

      requestAnimationFrame(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
    });

      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }

    // Logout Handler
    function handleLogout() {
      if (confirm('Log out from GradArena Recruiter Workspace?')) {
        window.location.reload();
      }
    }

    // Global keyboard listener
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeReqEditModal();
        closeAddCandidateModal();
        closeProfileSettingsModal();
        closeProfileDropdown();
        closeWebcamInspector();
        closeVideoVerificationModal();
        closeCsvUploadModal();
        closeImportPreviousModal();
        closeUploadJsonModal();
        closeTicketDetailModal();
        closeNewTicketModal();
        closeCandidateEditModal();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const gSearch = document.getElementById('globalSearchInput');
        if (gSearch) gSearch.focus();
      }
    });

    document.addEventListener('click', function(e) {
      const dropdown = document.getElementById('profileDropdownMenu');
      const trigger = document.getElementById('profileDropdownBtn');
      if (dropdown && trigger && !dropdown.contains(e.target) && !trigger.contains(e.target)) {
        closeProfileDropdown();
      }
    });

    // Initialize application on DOM ready
    window.addEventListener('DOMContentLoaded', () => {
      initLiveClock();
      const params = new URLSearchParams(window.location.search);
      const requestedScreen = params.get('screen');
      if (requestedScreen && screenMeta[requestedScreen]) {
        switchScreen(requestedScreen);
      } else {
        switchScreen('dashboard');
      }
      // Check modal deep-linking
      const requestedModal = params.get('modal');
      if (requestedModal === 'profile') openProfileSettingsModal();
      else if (requestedModal === 'ai-gen') simulateAiGenerateQuestions();
      else if (requestedModal === 'csv') openCsvUploadModal();
      else if (requestedModal === 'ticket') openTicketDetailModal('TICK-1092');
      else if (requestedModal === 'webcam') openProctorInspectModal('Shot 3', '4:23:16 PM', 'SUSPICIOUS_AUDIO', 'assets/candidate/shot3.jpg');
    });
  </script>

</body>
</html>
`;
