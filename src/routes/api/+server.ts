/* eslint-disable @typescript-eslint/no-unused-vars */
import { json } from '@sveltejs/kit'


export async function GET(event) {

    event.setHeaders({
        'cache-control': 'public, max-age=3600'
    })

    return json([
        { type: "cache me for 1 hour" }
    ])

}
