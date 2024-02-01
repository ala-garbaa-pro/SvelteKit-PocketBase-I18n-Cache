
export const getAvailableLocales = async () => {
    try {
        const response = await fetch(`/api/i18n?x=${btoa(JSON.stringify({ action: "getAvailableLocales" }))}`);

        if (response.ok) {
            const data = await response.json();
            return data
        } else {
            // Handle errors here
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
