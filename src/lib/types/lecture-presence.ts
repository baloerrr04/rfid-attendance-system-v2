export interface LecturerPresence {
  lecturerId: string;
  name: string;
  lecturerCode: string;
  time: number;
  status: "hadir" | "tidak hadir";
  date: string; // Format YYYY-MM-DD
  isScheduled?: boolean; // Apakah presensi sesuai jadwal atau di luar jadwal
}