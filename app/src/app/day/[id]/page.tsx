'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

type DayEntry = {
  day: number;
  details: string;
};

export default function Page() {
  const params = useParams();
  const id = params.id as string;
  const [day, setDay] = useState<DayEntry | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/data/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true);
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) setDay(data);
      });
  }, [id]);

  if (error) {
    return <h1>Day not found</h1>;
  }

  if (!day) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Day {day.day}</h1>
      <p>Details: {day.details}</p>
    </>
  )
}
