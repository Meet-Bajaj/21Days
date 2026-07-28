"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type DayEntry = {
  day: number;
  details: string;
};

export default function Home() {
  const [data, setData] = useState<DayEntry[]>([]);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [details, setDetails] = useState("");

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const updateData = async () => {
    await fetch(`/api/data/${selectedDay}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ details }),
    });
    const res = await fetch("/api/data");
    const updated = await res.json();
    setData(updated);
    setDetails("");
  };

  return (
    <>
      <table className="border-2 border-white border-collapse w-1/2 mx-auto">
        <thead>
          <tr>
            <th className="border-2 border-white px-4 py-2">Days</th>
            <th className="border-2 border-white px-4 py-2">
              Project Description
            </th>
            <th className="border-2 border-white px-4 py-2">Routes</th>
          </tr>
        </thead>

        <tbody>
          {data.map((entry) => (
            <tr key={entry.day}>
              <td className="border-2 border-white px-4 py-2">
                Day {entry.day}
              </td>
              <td className="border-2 border-white px-4 py-2">
                {entry.details}
              </td>
              <td className="border-2 border-white px-4 py-2">
                <Link href={`/day/${entry.day}`}>Day {entry.day}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-2 justify-center mt-4">
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(Number(e.target.value))}
          className="border px-2 py-1 text-white"
        >
          {data.map((entry) => (
            <option key={entry.day} value={entry.day}>
              Day {entry.day}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Enter details..."
          className="border px-2 py-1 text-white"
        />
        <button
          onClick={updateData}
          className="bg-white text-black px-4 py-1 hover:bg-gray-200"
        >
          Update
        </button>
      </div>
    </>
  );
}
