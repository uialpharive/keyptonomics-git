import Cookies from "js-cookie";

export function setCookie(name:string, value:string) {
    Cookies.set(name, value, { expires: 2 });
}

export function getCookie(name:string) {
    return Cookies.get(name);
}

export function removeCookie(name: string, value?: Cookies.CookieAttributes) {
    Cookies.remove(name, value);
}
