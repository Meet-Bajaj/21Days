import Link from "next/link";

export default function Home() {
  const days = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
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
        {days.map((day) => (
          <tr key={day}>
            <td className="border-2 border-white px-4 py-2">
              Day {day}
            </td>
            <td className="border-2 border-white px-4 py-2">
              {/* Add your project description here */}
            </td>
            <td className="border-2 border-white px-4 py-2"><Link href={"days1"}>day 1</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
