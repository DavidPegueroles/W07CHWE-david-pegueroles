// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post(`${process.env.REACT_APP_RRSS}users/register`, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        name: "admin",
        username: "admin",
        password: "Admin123",
      })
    )
  ),
];
