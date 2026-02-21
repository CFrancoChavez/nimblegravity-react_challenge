# Nimble Gravity - React Bot Filter Challenge

This project is a solution to the Junior Fullstack Developer challenge. The application is built with **React** and integrates with a secure API to manage candidate registration, job listings, and job applications.

## 🚀 Key Features

- **Candidate Identification**: Fetches candidate metadata using email as a unique identifier.
- **Job Board**: Dynamically renders a list of open positions retrieved from the API.
- **Smart Application System**: Includes a custom validation layer to handle job applications with real-time feedback.
- **Responsive Design**: A clean, professional grid-based UI designed for optimal readability.

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: CSS3 (Modern Flexbox/Grid)
- **API Communication**: Fetch API with async/await patterns.

## 🧠 Problem Solving & Implementation Notes

One of the core objectives of this "bot filter" challenge was to demonstrate technical analysis and error handling. During development, I identified the following:

1. **API Schema Discrepancy**: While the initial instructions suggested a 4-field payload for the POST request, the API's strict validation required the `applicationId` (obtained in Step 2) to prevent a "400 Bad Request".
2. **Strict Field Mapping**: The system was configured to strictly map `jobId` from the job list to ensure compatibility with the backend's validation schema.
3. **Error Handling**: Implemented a robust error-capturing mechanism that reads the response body to provide descriptive feedback, as suggested in the challenge tips.

## ⚙️ Setup & Installation

1. Clone the repository:
   
   git clone [https://github.com/CFrancoChavez/nimblegravity-react_challenge](https://github.com/CFrancoChavez/nimblegravity-react_challenge).
2. Install dependencies
   npm install
3. Run the development server
   npm run dev