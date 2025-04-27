import axios from 'axios';

const aliSalimnia = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASEURL_API,
    timeout: 30000,
    timeoutErrorMessage: 'ارسال درخواست خیلی طول کشید',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BASEURL_API_USER_TOKEN}`,
    },
});

export const http = {
    get: aliSalimnia.get,
    post: aliSalimnia.post,
    put: aliSalimnia.put,
    delete: aliSalimnia.delete,
    patch: aliSalimnia.patch,
};
