// Struktur data mengikuti atribut pada kuis dan siap dipakai untuk REST API:
// id, title, description, priority, deadline, status
export const dummyTodos = [
  {
    id: 1,
    title: "Mengerjakan Proyek Computer Vision",
    description:
      "Menyelesaikan proyek akhir computer vision tentang deteksi penggunaan helm",
    priority: "high",
    deadline: "2026-10-11",
    status: "in progress",
  },
  {
    id: 2,
    title: "Mempelajari Dasar Zustand",
    description: "Belajar state management sederhana menggunakan Zustand",
    priority: "low",
    deadline: "2026-11-25",
    status: "in progress",
  },
  {
    id: 3,
    title: "Membuat Website Portfolio",
    description: "Membuat website portfolio pribadi dengan React dan CSS",
    priority: "low",
    deadline: "2026-10-20",
    status: "in progress",
  },
  {
    id: 4,
    title: "Mempelajari React Hooks",
    description: "Memahami useState, useEffect, useMemo, dan custom hooks",
    priority: "low",
    deadline: "2026-10-11",
    status: "to-do",
  },
];

export const STATUS_OPTIONS = ["to-do", "in progress", "done"];
export const PRIORITY_OPTIONS = ["low", "medium", "high"];
