import { createServerFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";

import { LOCALE_COOKIE, parseLocale } from "./locale";

/** Locale of the incoming request, read from the visitor's language cookie. */
export const getRequestLocale = createServerFn({ method: "GET" }).handler(() =>
  parseLocale(getCookie(LOCALE_COOKIE)),
);
