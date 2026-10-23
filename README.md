# GradArena — Enterprise Assessment & Recruitment Platform

GradArena is a modern dual-portal enterprise platform for technical hiring, automated voice screening, and proctored technical evaluations.

---

## 🚀 Portals Overview

The application features two dedicated enterprise dashboards:

### 👔 1. Manager Portal (`port 3000`)
* **Live Assessment Command Center**: Real-time test monitoring, candidate status pipelines, and review queues.
* **Test Creation Studio**: Multi-stage evaluation blueprints, MCQ question banks, and dynamic scoring rules.
* **Creator Management**: Creator performance tracking, payout metrics, and verified review workflows.
* **Interactive Help & Support**: Ticket tracking, resolution statuses, and live support chat.

### 🎯 2. Recruiter Portal (`port 3001`)
* **Unified Candidate Dossier**: End-to-end evaluation with tabbed deep-dive audits.
* **🎙️ Dwaani Voice AI Screening Report**: Stage 1 conversational AI voice assessment with audio playback, Whisper transcripts, and 3D scoring rubrics (Relevance, Accuracy, Clarity).
* **📝 GradArena Technical MCQ Report**: Stage 2 technical evaluation with complete 10-question itemized audit, question-level timing, and speed-flag telemetry.
* **🛡️ Proctoring & Biometrics**: Stage 3 multi-angle webcam snapshots, 360° room scan validation, and acoustic biometric matching.
* **Invitation & Pipeline Management**: Bulk candidate invites, tracking, stage progression, and messaging center.

---

## 🛠️ Tech Stack & Design System

* **Framework**: HTML5, Vanilla JavaScript, Tailwind CSS (CDN).
* **Typography**: Montserrat (Headings, Semibold 600) + Lato (Body copy).
* **Icons**: Lucide Icons.
* **Audio Synthesis & Telemetry**: Native Web Audio API waveform visualizers and synthesized audio playback.
* **Server**: Zero-dependency Node.js HTTP server with dual-port routing.

---

## 💻 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v16 or higher)

### Running the Application

1. Start the dual-portal local server:
   ```bash
   node local_server.js
   ```

2. Open the portals in your browser:
   * **Manager Portal**: [http://localhost:3000](http://localhost:3000)
   * **Recruiter Portal**: [http://localhost:3001](http://localhost:3001)

---

## 📁 Repository Structure

```text
Gradarena Application/
├── manager-panel.html               # Main Manager Portal application
├── manager-dashboard.html           # Manager Portal mirror
├── recruiter-panel.html             # Main Recruiter Portal application
├── recruiter-dashboard.html         # Recruiter Portal mirror
├── local_server.js                  # Dual-port HTTP development server
├── assets/                          # Images, logos, and candidate avatars
│   ├── candidate/                   # Profile photos and verification shots
│   └── creators/                    # Creator portraits and badges
├── Dwaani test creation screens/    # Reference design mockups
├── Manager Panel Screens - Gradarena/
├── Recruiter Panel Screens/
└── README.md
```
