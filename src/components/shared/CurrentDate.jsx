"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function CurrentDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(format(new Date(), "EEEE, MMM dd, yyyy"));
  }, []);

  return <p>{date}</p>;
}
