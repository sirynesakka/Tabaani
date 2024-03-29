
"use client"
import Link from "next/link"

export default function Contact() {

    async function handleSubmit(event) {

        event.preventDefault();
        const formData = new FormData(event.target)
        try {
  
            const response = await fetch('/api1/email', {
                method: 'post',
                body: formData,
            });

            if (!response.ok) {
                console.log("falling over")
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message'])
    
            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center" >
            
            <form onSubmit={handleSubmit} className="mt-1 mb-2 w-80 max-w-screen-lg sm:w-96">
    <button className="rounded bg-sky-400 hover:bg-sky-500 text-white font-bold py- px-3 focus:outline-none focus:shadow-outline" type="submit">
        Confirmer
    </button>
</form>
        </main>
    )
}