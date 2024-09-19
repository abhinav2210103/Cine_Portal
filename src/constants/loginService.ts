"use server";

export default async function loginService(values : { studentNumber : string , password : string }) {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/student/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        response.status === 400
          ? data.message === "Test already submitted"
            ? "Test already submitted. Please contact the invigilator."
            : "Invalid credentials. Please try again."
          : "An unexpected error occurred. Please try again later."
      );
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "Error occurred during the login process.");
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
}