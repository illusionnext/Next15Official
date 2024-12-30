import { verifySession } from "@/app/lib/dal";
import { forbidden, unauthorized } from "next/navigation";

export default async function AdminPage() {
  const session = await verifySession();
  if (session.role !== "admin") {
    forbidden();
  }

  // Check if the user has the 'admin' role
  if (session.role !== "admin") {
    forbidden();
  }

  // Render the admin page for authorized users
  return <h1>Admin Page</h1>;
}
