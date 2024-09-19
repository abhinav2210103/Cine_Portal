"use server";

type PromiseData = {
    language : string ; 
    questions : any[] ;
    responses : any[]; 
}

async function questionFetcher( userId: string) : Promise<PromiseData | string >{
    try {
        const res = await fetch(`${process.env.BACKEND_URL}/student/questions?userId=${userId}`);
        const data = await res.json();
        return data ; 
    } catch (error) {
        return "Error fetching the questions";
    }
}

export { questionFetcher };
