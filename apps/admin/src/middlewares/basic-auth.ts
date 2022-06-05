export function basicAuth(auth: string | null): boolean {
  if (auth) {
    const authSplit = auth.split(" ")[1];
    const [user, pw] = Buffer.from(authSplit, "base64").toString().split(":");

    return (
      user === process.env.BASIC_AUTH_USER && pw === process.env.BASIC_AUTH_PW
    );
  }

  return false;
}
