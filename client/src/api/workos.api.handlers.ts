import { http, HttpResponse } from "msw";

import { USERS_ROUTE, ROLES_ROUTE } from "./workos.api.routes";
import { MOCK_GET_USERS, MOCK_GET_ROLES } from "./workos.api.mocks.ts";

const BASE_URL = "http://localhost:3002/";

export const handlers = [
  http.get(`${BASE_URL}${USERS_ROUTE}`, () => {
    return HttpResponse.json(MOCK_GET_USERS);
  }),

  http.delete(`${BASE_URL}${USERS_ROUTE}/:id`, () => {
    return HttpResponse.json({});
  }),

  http.get(`${BASE_URL}${ROLES_ROUTE}`, () => {
    return HttpResponse.json(MOCK_GET_ROLES);
  }),
];
