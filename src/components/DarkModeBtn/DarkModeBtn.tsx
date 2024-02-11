"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DarkModeBtn() {
  const router = useRouter();
  useEffect(() => {
    let modeCookie = (";" + document.cookie)
      .split(`; mode=`)
      .pop()
      ?.split(";")[0];
    if (modeCookie == "") {
      document.cookie = "mode=light;max-age=" + 3600 * 24 * 400;
    }
  }, []);

  const switchingMode = () => {
    console.log("switchingMode working!");
    router.refresh();
  };
  return <div onClick={switchingMode}>dark mode</div>;
}
