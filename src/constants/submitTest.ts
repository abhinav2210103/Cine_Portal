"use server"; 

export default async function submitTestService(userId : string ) {
  try{
    const res = await fetch(process.env.BACKEND_URL + "/student/submitTest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
      credentials: "include",
    });
    const data = await res.json();
    return data; 
  } catch (err) {
    return "Error fetching the response";
  }
}