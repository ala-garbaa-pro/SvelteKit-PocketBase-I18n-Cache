import { getAvailableLocalesServerAction } from "$lib/actions/getAvailableLocalesServerAction";
import type { RequestEvent } from "../$types";

export const GET = async ({ setHeaders, request, locals: { pba } }: RequestEvent) => {
    console.log(`🟩 /api/i18n/+server.ts`);

    const queryParams = new URLSearchParams(request.url.split('?')[1]);
    const encodedAction = queryParams.get('x'); // Replace 'yourQueryParamName' with the actual name used in the URL

    if (encodedAction) {
        const decodedAction = JSON.parse(atob(encodedAction));
        const { action } = decodedAction;
        console.log("🚀 ~ GET ~ action:", action);

        switch (action) {
            case "getAvailableLocales":
                return getAvailableLocalesServerAction({ pba, setHeaders })
        }

        // Now you can use the 'action' variable in your server-side logic
    } else {
        // Handle the case when the query parameter is missing or invalid
        console.error('Query parameter is missing or invalid');
        // You may want to send an appropriate response or take other actions here
    }



};
