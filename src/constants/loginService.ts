"use server"; 

type PromiseData = {
  message : string ; 
  userId : string; 
  remainingTime : number; 
  language : string ; 
}

export default async function loginService( values : { studentNumber : string , password : string }) : Promise<PromiseData | string > {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/student/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
      credentials: "include",
    });
    const data = await res.json();
    return data ; 
  } catch (error) {
    return "Error fetching the questions";
  }
}