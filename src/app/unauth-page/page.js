import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function UnauthPage() {
  const getSession = await auth();
  if (!getSession?.user) redirect("/unauth-page");

  return (
    <div className="p-20">
      <h2 className="text-5xl font-extrabold">
        You are not logged in. Please login.
      </h2>
    </div>
  );
}
