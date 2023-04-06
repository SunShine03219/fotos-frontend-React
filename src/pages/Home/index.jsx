import React, { useEffect, useState } from "react";
import { Header } from "../../components/UI/Header";
import { Tabs } from "../../components/Tabs";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import { useUsers } from "../../context/usersContext";
import { useFiles } from "../../context/filesContext";

export function HomePage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const { isUpdating } = useFiles();
  const { currentUser } = useUsers();

  useEffect(() => {
    if (currentUser.role === "admin") {
      setIsAdmin(true);
    }
  }, [currentUser]);

  return (
    <>
      {isUpdating && <LoadingOverlay />}
      <Header name={currentUser.name} />
      <Tabs isAdmin={isAdmin} />
    </>
  );
}
