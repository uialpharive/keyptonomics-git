import Cookies from "js-cookie";

export function setCookie(name: string, value: unknown) {
    Cookies.set(name, JSON.stringify(value), { expires: 2 });
}

export function getCookie(name:string) {
    return Cookies.get(name);
}

export function removeCookie(name: string, value?: Cookies.CookieAttributes) {
    Cookies.remove(name, value);
}
