document.getElementById("weddingForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const foodInfo = document.getElementById("foodInfo").value;
    const additionalGuests = document.getElementById("additionalGuests").value;

    const formData = `{ \
        'fields': { \
            'name': '${name}', \
            'email': '${email}', \
            'foodInfo': '${foodInfo}', \
            'additionalGuests': '${additionalGuests}' \
        } \
    }`;
  
    try {
      // Send the data to Tabidoo
        const response = await fetch("https://app.tabidoo.cloud/api/v2/apps/weddingweb/tables/data/data?dataResponseType=", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiY2Q2Yzc0YS03ZmIxLTQ2NWUtODY2Zi0zNTZiZDQyYzhlN2IiLCJ1bmlxdWVfbmFtZSI6ImFwaVRva2VuSWRfNWU2MDg1ZDktZTNlMi00OWI4LTgyZjUtOGFmZDRlNDM4NTAzIiwicHVycG9zZSI6IkFQSVRva2VuIiwiYXBpVG9rZW5JZCI6IjVlNjA4NWQ5LWUzZTItNDliOC04MmY1LThhZmQ0ZTQzODUwMyIsIm5iZiI6MTczMzY2NDgyNCwiZXhwIjo0ODg5MzM4NDI0LCJpYXQiOjE3MzM2NjQ4MjR9.n8ee0Z879Ps5h3qfa6h8LxEUHUoxLg8eZGZpIKDiTSM" // Replace with your actual API key
            },
            body: formData
        });
  
        if (response.ok) {
            document.getElementById("weddingFormWhole").style.display = "none";
            document.getElementById("thankYouMessage").style.display = "block";
        } else {
            const error = await response.json();
            console.error("Error submitting data:", error);
            alert("Failed to submit data.");
        }
    } catch (error) {
            console.error("Network error:", error);
            alert("An error occurred. Please try again later.");
    }
});
  