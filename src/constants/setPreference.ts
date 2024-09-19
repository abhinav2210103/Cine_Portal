"use server"; 

export default async function setPreferenceService ( userId : string , selectedLanguage : string ) {
    try{
        const res = await fetch('https://cine-student.onrender.com/student/preferences', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userId: userId, preference: parseInt(selectedLanguage) })
        });
        const data = await res.json();
        return data; 
    } catch (err) {
        return "Error fetching the response";
    }
}