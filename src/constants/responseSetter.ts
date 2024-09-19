"use server";

async function responseSetter(
    userId: string,
    quesId: string,
    status: number,
    ansId: number
) {
    const obj = {
        userId: userId,
        quesId: quesId,
        status: status,
        ansId: ansId,
    };   
    const res = await fetch(process.env.BACKEND_URL + "/student/response", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...obj,
        }),
        credentials: "include",
    });
}

export { responseSetter };
