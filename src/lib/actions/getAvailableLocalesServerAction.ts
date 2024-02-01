/* eslint-disable @typescript-eslint/no-unused-vars */
// import type { I18n } from "$lib/types/local.type";
import { fail, json } from "@sveltejs/kit";


type Props = {
    pba: App.Locals["pba"]
    setHeaders: (headers: Record<string, string>) => void

}

export const getAvailableLocalesServerAction = async ({ pba, setHeaders }: Props) => {
    let locales: Response

    // as the underlying data
    setHeaders({
        'cache-control': 'public, max-age=3600' // cache for 1 hour
    });

    try {

        locales = await pba.collection('i18n').getFullList({
            sort: 'created',
        });

    } catch (error) {
        console.log("🙄 ~ error:", error)
        return fail(401, {
            message: 'Something went wrong'
        });
    }

    return json(locales);
}