"use server";

interface responseType {
    quesId: string;
    status: number;
    userId: string;
    ansId: number;
}

const responseIds = ["NA", "MR", "A"];
const subjects = ["HTML", "SQL", "CSS", "Aptitude", "Java"];

async function questionFetcher(
    subject: string,
    userId: string,
    responses: responseType[]
) {
    try {
        const res = await fetch(
            process.env.BACKEND_URL +
                "/student/questions?" +
                `subject=${subject}&userId=${userId}`
        );
        const idx = subjects.indexOf(subject);
        const data = await res.json();
        for (let index = 0; index < data.length; index++) {
            for (let i = 0; i < responses.length; i++) {
                if (responses[i].quesId == data[index]._id) {
                    data[index] = {
                        ...data[index],
                        quesId: 100 * (idx + 1) + index + 1,
                        state: responseIds[responses[i].status],
                        recordedAns: responses[i].ansId,
                    };
                    break;
                } else {
                    data[index] = {
                        ...data[index],
                        quesId: 100 * (idx + 1) + index + 1,
                        state: "UA",
                        recordedAns: 0,
                    };
                }
            }
        }
        return data;
    } catch (error) {
        console.log(error);
        return "Error fetching the questions";
    }
}

export { questionFetcher };
