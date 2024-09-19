"use server"; 

export default async function submitFeedbackService ( feedbackData : { userId : string , response : any[]} ) {
  const baseurl = process.env.BACKEND_URL;  
  try{
    await fetch(baseurl + "/student/submitFeedback", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    });
  } catch(err){
    return "Error fetching the response";
  }
}