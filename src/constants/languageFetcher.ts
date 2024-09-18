"use server";

async function languageFetcher(userId: string) {
    try {
        const res = await fetch(
            process.env.BACKEND_URL +
                "/student/getPreference?" +
                `userId=${userId}`,
            { method: "GET" }
        );
        const data = await res.json();
        return data.language;
    } catch (error) {
        return "Error fetching the language";
    }
}

export { languageFetcher };
