import {serve} from 'bun'

serve({
    fetch(request){
        const url = new URL(request.url)
        if(url.pathname === '/'){
            return new Response('Hello Ankit Jha!!!', {status: 200})
        }
        else if(url.pathname === '/new-user'){
            return new Response('Hello New User!!', {status: 200})
        }
        else{
            return new Response('404 Not Found', {status: 404})
        }
    },
    port: 3000,
    hostname: '127.0.0.1'
})