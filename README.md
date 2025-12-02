# Smart-Vehicle-Parking-System

**Duration:** Feb 2025 – May 2025  
**GitHub:** [Link to your repo]()

A full-stack web application that allows users to view, book, and manage real-time parking slot availability with an interactive and user-friendly interface.

---

## 🔹 Key Features
- **Real-Time Slot Monitoring:** Instantly view available and occupied parking slots.
- **Slot Booking System:** Book, update, or cancel parking slots with dynamic charge calculation.
- **Responsive UI:** Clean, intuitive, and mobile-friendly design using HTML, CSS, and JavaScript.
- **Full-Stack Architecture:** Backend built with Node.js and json-server for simulating APIs and managing parking data.
- **Seamless Operations:** Smooth user experience with real-time updates and fast interactions.

---

## 🔹 Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js  
- **Database (Mock):** json-server  
- **Tools:** VS Code, Git, GitHub  

---

## 🔹 How It Works
1. User checks available parking slots.  
2. Selects a slot and enters booking details.  
3. System calculates total charges based on parking duration.  
4. User can modify or cancel bookings anytime.  
5. Data syncs in real-time via json-server APIs.

---

## 🔹 Project Highlights
- Modular and scalable parking management workflow.
- CRUD operations for parking slot handling.
- Efficient logic for availability, booking, and billing.
- Cross-device responsiveness and fast loading interface.

---

## 🔹 Future Enhancements
- Admin dashboard for managing all parking slots.  
- Integration with a real database (MongoDB or MySQL).  
- OTP-based login for user authentication.  
- IoT-based live parking sensor integration for real-time updates.

---

## 🔹 Screenshots
*Add some screenshots of your app here to make it visually appealing.*

---

## 🔹 Installation
```bash
# Clone the repository
git clone <your-repo-link>

# Navigate to the project folder
cd smart-vehicle-parking

# Install dependencies
npm install

# Start json-server
npx json-server --watch db.json --port 3000

# Start the app (if using Node.js server)
node server.js
