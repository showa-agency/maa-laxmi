async function sendEmail(name, message) {
    const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': import.meta.env.VITE_API_KEY
        },
        body: JSON.stringify({ name, message }),
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
    }

    return data;
}

export default sendEmail;
