"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("ba067672-a38a-4aaa-99c2-091e24341435");
  }, []);

  return null;
};
