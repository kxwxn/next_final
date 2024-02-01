import { UserProfile, auth } from "@clerk/nextjs";

export default function Profile() {
  const { userId } = auth();
  console.log("userId", userId);

  return (
    <div>
      <UserProfile path="/" />
    </div>
  );
}
