"use server";

async function responseFetcher(userId: string) {
    try {
        const res = await fetch(
            process.env.BACKEND_URL +
                "/student/getResponses?" +
                `userId=${userId}`
        );
        const data = await res.json();
        return data;
    } catch (error) {
        return "Error fetching the response";
    }
}

export { responseFetcher };
