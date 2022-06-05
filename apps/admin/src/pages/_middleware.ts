import { NextRequest, NextResponse } from "next/server";
import { basicAuth } from "~/middlewares/basic-auth";

export const middleware = (req: NextRequest) => {
  const auth = req.headers.get("authorization");

  console.log({ auth });

  if (basicAuth(auth)) {
    return NextResponse.next();
  }

  return new Response("Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
};
