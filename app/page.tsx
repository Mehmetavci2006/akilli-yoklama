"use client"; // Bu çok önemli, useState ve useEffect için gerekli

import { useState } from "react";

// Öğrenci tipi
type Student = {
  id: number;
  name: string;
  status: "Var" | "Yok" | "Raporlu";
};

// Örnek öğrenciler (sonradan veritabanından çekebilirsin)
const initialStudents: Student[] = [
  { id: 1, name: "Ahmet Yılmaz", status: "Var" },
  { id: 2, name: "Ayşe Demir", status: "Var" },
  { id: 3, name: "Mehmet Avcı", status: "Var" },
];

export default function Page() {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  // Durum değiştirici fonksiyon
  const handleStatusChange = (id: number, status: Student["status"]) => {
    setStudents(prev =>
      prev.map(student =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  // Renkleri belirleme
  const getStatusColor = (status: Student["status"]) => {
    switch (status) {
      case "Var":
        return "bg-green-500";
      case "Yok":
        return "bg-red-500";
      case "Raporlu":
        return "bg-yellow-400";
      default:
        return "";
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Akıllı Yoklama Sistemi</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2 text-left">Öğrenci Adı</th>
            <th className="border p-2 text-left">Durum</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">
                <select
                  className={`p-1 rounded ${getStatusColor(student.status)} text-white`}
                  value={student.status}
                  onChange={e =>
                    handleStatusChange(
                      student.id,
                      e.target.value as Student["status"]
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
    </div>
  );
}
