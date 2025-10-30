import { useState } from "react";

type Student = {
  id: number;
  name: string;
  status: "Var" | "Yok" | "Raporlu";
};

export default function Home() {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: "Mehmet Avcı", status: "Var" },
    { id: 2, name: "Elif Kaya", status: "Var" },
    { id: 3, name: "Gamze Erişdi", status: "Var" },
    { id: 4, name: "Melissa Bostancı", status: "Var" },
    { id: 5, name: "Bersu Demir", status: "Var" },
  ]);

  const handleStatusChange = (id: number, status: "Var" | "Yok" | "Raporlu") => {
    setStudents(
      students.map((s) => (s.id === id ? { ...s, status } : s))
    );
  };

  const getColor = (status: string) => {
    switch (status) {
      case "Var":
        return "bg-green-500 text-white";
      case "Yok":
        return "bg-red-500 text-white";
      case "Raporlu":
        return "bg-yellow-400 text-black";
      default:
        return "";
    }
  };

  const handleSave = () => {
    alert("Yoklama kaydedildi! (demo)");
    console.log(students);
  };

  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-4">Akıllı Yoklama Sistemi</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Öğrenci Adı</th>
            <th className="border px-4 py-2">Durum</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className={getColor(student.status)}>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">
                <select
                  value={student.status}
                  onChange={(e) =>
                    handleStatusChange(
                      student.id,
                      e.target.value as "Var" | "Yok" | "Raporlu"
                    )
                  }
                >
                  <option value="Var">Var</option>
                  <option value="Yok">Yok</option>
                  <option value="Raporlu">Raporlu</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleSave}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Kaydet
      </button>
    </div>
  );
}
