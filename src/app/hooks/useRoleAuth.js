// Modified useRoleAuth hook to include a loading state
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export const useRoleAuth = (allowedRoles) => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const role = user?.type;
    console.log(role, allowedRoles);
    if (!role) {
      router.replace("/");
    } else if (role && !allowedRoles.includes(role)) {
      router.replace("/");
    } else {
      setIsLoading(false);
    }
  }, [user, router, allowedRoles]);

  return isLoading;
};
