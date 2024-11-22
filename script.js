function handleEnter(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
}

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (!userInput) return;
  
    // Display user's message
    displayMessage(userInput, 'user-message');
  
    // Generate bot response
    const botResponse = getBotResponse(userInput);
    displayMessage(botResponse, 'bot-message');
  
    // Clear input
    document.getElementById('userInput').value = '';
  }
  
  function displayMessage(message, className) {
    const chatBody = document.getElementById('chatBody');
    const messageElement = document.createElement('div');
    messageElement.className = className;
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
  }
  
  function getBotResponse(input) {
    input = input.toLowerCase();
  
    // Greetings
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return "Hello! I'm here to assist you with any healthcare questions. How can I help?";
    } 
    // Booking Appointments
    else if (input.includes("appointment") || input.includes("book") || input.includes("schedule")) {
      return "To book an appointment, please visit the 'Appointments' section on our website. You can also call us at (123) 456-7890 for assistance.";
    } 
    // Contact Information
    else if (input.includes("contact") || input.includes("reach") || input.includes("call")) {
      return "You can reach us at (123) 456-7890 or email support@healthcare.com. Our support team is available 24/7.";
    } 
    // Services Provided
    else if (input.includes("services") || input.includes("treatment") || input.includes("offer")) {
      return "We offer a range of services, including general consultations, specialty care (e.g., cardiology, dermatology), lab tests, and preventive health check-ups. Let me know if you’d like details on any specific service.";
    } 
    // Working Hours
    else if (input.includes("hours") || input.includes("open") || input.includes("time")) {
      return "Our facility is open Monday through Friday from 8 AM to 6 PM and Saturday from 9 AM to 2 PM. We are closed on Sundays.";
    } 
    // Insurance
    else if (input.includes("insurance") || input.includes("coverage") || input.includes("payment")) {
      return "We accept a variety of insurance plans. For detailed information on insurance coverage, please visit our 'Insurance and Billing' page or contact our billing department at (123) 456-7890.";
    } 
    // COVID-19 Information
    else if (input.includes("covid") || input.includes("coronavirus") || input.includes("vaccine")) {
      return "For COVID-19 services, we offer vaccinations, testing, and consultations. Please visit our COVID-19 section for more details or contact us to schedule a service.";
    } 
    // Medical Records
    else if (input.includes("records") || input.includes("history") || input.includes("medical records")) {
      return "To request your medical records, please visit the 'Patient Records' section on our website or contact our records department. We will guide you through the process.";
    } 
    // Emergency Services
    else if (input.includes("emergency") || input.includes("urgent") || input.includes("immediate")) {
      return "If you are experiencing a medical emergency, please call 911 immediately. For urgent but non-life-threatening situations, visit our urgent care center during business hours.";
    } 
    // Prescription Refills
    else if (input.includes("prescription") || input.includes("refill") || input.includes("medication")) {
      return "To request a prescription refill, please contact your physician directly or visit our online patient portal.";
    } 
    // Health Tips
    else if (input.includes("health tips") || input.includes("wellness") || input.includes("advice")) {
      return "Here are some general health tips: eat a balanced diet, exercise regularly, stay hydrated, and get regular check-ups. Let me know if you’re looking for tips on a specific health topic.";
    } 
    // Default Response
    else {
      return "I'm here to help! Could you please rephrase or provide more details? I'm here to answer your healthcare-related questions.";
    }
  }
  
  