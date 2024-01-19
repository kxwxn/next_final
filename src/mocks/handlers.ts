import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("/api/login", () => {}, {}),
  http.post("/api/logout", () => {}),
];
