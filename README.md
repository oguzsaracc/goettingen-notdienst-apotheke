
# 💊 Göttingen Emergency Pharmacy Finder (goettingen-notdienst-apotheke)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Technology: React](https://img.shields.io/badge/Tech-React%2FTS-blueviolet)](https://reactjs.org/)
[![Styling: Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4)]()

## 🌐 Live Application

**Current Status: MVP Deployed & Functional**

Access the live application here: **[Vercel Deployment Link](https://goettingen-notdienst-apotheke.vercel.app)**

---

## 💡 Project Mission & Goal

This project was initiated with a clear social mission: **to provide an exceptionally fast and reliable access system for the citizens of Göttingen—especially the elderly and those requiring urgent care—to locate the nearest *Notdienst Apotheke* (emergency on-duty pharmacy).**

In critical health moments, time is paramount. This application replaces complex searches with a simple, map-based interface, significantly streamlining the process of finding emergency medical assistance.

### Key Features (Minimum Viable Product - MVP)

| Feature | Status | Description |
| :--- | :--- | :--- |
| **Real Data Integration** | ✅ Complete | Loads actual *Notdienst* pharmacy data for Göttingen and surrounding areas (Sourced from `aponet.de`). |
| **Interactive Map** | ✅ Complete | Uses **Leaflet.js** to display custom-styled pharmacy pins on a regional map (Zoom 10). |
| **Duty Times Display** | ✅ Complete | Clearly shows the specific **Notdienst vom...** hours in a highlighted, prominent section on each card. |
| **Fast Navigation** | ✅ Complete | Provides direct "Get Directions" (Google Maps) and "Call" links for immediate assistance. |
| **Modern UI/UX** | ✅ Complete | Built with a component-based architecture (React) and responsive design (Tailwind CSS) for mobile and desktop use. |

---

## 👤 About The Developer

**Developer:** **Oguz Sarac**

I am currently pursuing a **Master's degree in Applied Computer Science at the University of Göttingen**, focusing on bridging advanced software engineering concepts with practical community needs.

This project showcases my commitment to building robust, type-safe, and high-performance applications using **Software Development Principles**. It is a direct application of my academic background to solve a critical, local issue.

---

## 🛠️ Technology Stack (Technical Details)

This project is built using a modern, performance-focused stack:

* **Frontend Framework:** **React** with **Vite** (for fast development and bundling).
* **Language:** **TypeScript** (utilizing its robust type checking for enhanced reliability).
* **Styling:** **Tailwind CSS** (for utility-first, highly responsive UI development).
* **Mapping:** **Leaflet.js** and **React-Leaflet** (for high-performance map integration).
* **Deployment:** **Vercel** (for continuous integration and blazing-fast hosting).

### Data Source Note

The MVP currently uses a **static JSON file** (`pharmacies.json`) containing daily duty data. This approach was chosen to validate the user experience first. The system is architected for a seamless transition to a dynamic API.

---

## 🗺️ Future Vision

The next essential step is automating the data pipeline to ensure 24/7 accuracy. This involves:

1.  **Automated Data Processing:** Implementing a dedicated **backend service** to automatically download, parse (XML), and filter the official daily duty data from the *Apotheken-Notdienstdaten* API.
2.  **Location Services:** Adding a feature to find the *nearest* on-duty pharmacy based on the user's current GPS location, further enhancing the application's utility for elderly users.
3. **Multilingual Support (i18n):** Implementing full language support for **Deutsch (German)** and **English**, recognizing the diverse community of Göttingen (e.g., local residents, students, and visitors).