export type Role = {
  role: string;
  name: string;
};

export type Division = {
  division: string;
  members: Role[];
};

export const organizationData: Division[] = [
  {
    division: "Pengurus Harian",
    members: [
      { role: "Ketua Umum", name: "Hiu Yuga Abhimata" },
      { role: "Wakil Ketua Umum", name: "Husna Nahda Salsabil" },
      { role: "Competition Manager", name: "Wednasandi Nur Kurniarita" },
      { role: "Sekretaris", name: "Bryna Trixie Aprilia" },
      { role: "Sekretaris", name: "Fira Melinda Saabirah" },
      { role: "Bendahara", name: "Putri Salsabila Safira Rozalia" },
      { role: "Bendahara", name: "Afriani Fresiska" },
    ],
  },
  {
    division: "Divisi Acara",
    members: [
      { role: "Ketua Divisi", name: "Elang Satria Hijriansyah" },
      { role: "Subkoordinator Konsep", name: "Saviola Listiawati Susanto" },
      { role: "Subkoordinator Teknis", name: "Ghaitsa Kaila Putti Azzahra" },
      { role: "Anggota Divisi", name: "Ayoedya Arti Intaran" },
      { role: "Anggota Divisi", name: "Hagayu Damar Danendra" },
      { role: "Anggota Divisi", name: "Kanaya Indi Rafakiano" },
      { role: "Anggota Divisi", name: "Putri Meylika Salsabila Sitohang" },
      { role: "Anggota Divisi", name: "Ratu Meko Aqheyla" },
    ],
  },
  {
    division: "Divisi Festival",
    members: [
      { role: "Ketua Divisi", name: "Rafael Jatmiko Wahyu Hendro Wibowo" },
      { role: "Subkoordinator Divisi", name: "Nisrina Syifa Ghaniyya Efendi" },
      { role: "Anggota Divisi", name: "Andromeda Nurul Puspita" },
      { role: "Anggota Divisi", name: "Anindya Christy Putri Damayanti" },
      { role: "Anggota Divisi", name: "Arrafi Cahyo Wicaksono" },
      { role: "Anggota Divisi", name: "Aurelia Jelita Indracahyadhi" },
      { role: "Anggota Divisi", name: "Aurelia Josephina Gestevari Alberthus" },
      { role: "Anggota Divisi", name: "Azka Masagena Yultaza" },
      { role: "Anggota Divisi", name: "Christopher Bravo Gabriano" },
      { role: "Anggota Divisi", name: "Filar Berliano" },
      { role: "Anggota Divisi", name: "Muhammad Reza Havas Mukharasi" },
      { role: "Anggota Divisi", name: "Syamsha Nabila Ashifa Gani" },
    ],
  },
  {
    division: "Divisi Logistik",
    members: [
      { role: "Ketua Divisi", name: "Alloy Jiwandana Girsang" },
      { role: "Subkoordinator Divisi", name: "Najatya Aisha Hapsari" },
      { role: "Anggota Divisi", name: "Asikha Nur Faradilla" },
      { role: "Anggota Divisi", name: "Fadhilah Hanan Nurhayyan" },
      { role: "Anggota Divisi", name: "Khiar Fathan Nandiwardhana" },
      { role: "Anggota Divisi", name: "Moh. Faiz H. Maru" },
      { role: "Anggota Divisi", name: "Mohammad Akmal" },
      { role: "Anggota Divisi", name: "Raditya Putra Naladiktha" },
      { role: "Anggota Divisi", name: "Syatta Imtiyaaz Thuvaila" },
    ],
  },
  {
    division: "Divisi Business Development",
    members: [
      { role: "Ketua Divisi", name: "Marella Shafa Maharani" },
      { role: "Subkoordinator Sponsorship", name: "Na'imah Qatrunada Fajriyati" },
      { role: "Subkoordinator Fundraising", name: "Fawwaz Jili Abdad" },
      { role: "Anggota Divisi", name: "Aida Fathima Nailatussyarifa" },
      { role: "Anggota Divisi", name: "Anisha Shafa Naomi" },
      { role: "Anggota Divisi", name: "Laura Wening Pudyatmoko" },
      { role: "Anggota Divisi", name: "Lupita Diah Ayu Tarissa" },
      { role: "Anggota Divisi", name: "Ni Nyoman Kania Trisara Dewi" },
      { role: "Anggota Divisi", name: "Salwa Azzahra Faisal Nasution" },
    ],
  },
  {
    division: "Divisi Roadshow, Konsumsi, dan Medis",
    members: [
      { role: "Ketua Divisi", name: "Devi Arthilia" },
      { role: "Subkoordinator Konsumsi", name: "Hasan Ibrahim" },
      { role: "Subkoordinator Medis", name: "Ghefira Haula Nisa" },
      { role: "Anggota Divisi", name: "Alodyanna Deandra Quennaura Manda" },
      { role: "Anggota Divisi", name: "Azkaluna Nailavi Aulia" },
      { role: "Anggota Divisi", name: "Davintya Rischa Sasandra" },
      { role: "Anggota Divisi", name: "Deandra Evangeline Triyono Putri" },
      { role: "Anggota Divisi", name: "Gabriele Acintya Cantika" },
      { role: "Anggota Divisi", name: "Jefta Christoper Aritonang" },
      { role: "Anggota Divisi", name: "Kafka Hammam Vadanta" },
      { role: "Anggota Divisi", name: "Kania Larasati" },
      { role: "Anggota Divisi", name: "Naufa Tyara Faowzie" },
    ],
  },
  {
    division: "Divisi Liaison Officer",
    members: [
      { role: "Ketua Divisi", name: "Bening Ayu Kinasih" },
      { role: "Subkoordinator Divisi", name: "Juneo Vega Putri Reagan" },
      { role: "Anggota Divisi", name: "Ghea Tsabita Widyatamaka Nizar Bahari" },
      { role: "Anggota Divisi", name: "In Darul Ghiffari Antama" },
      { role: "Anggota Divisi", name: "Mutia Salwa Salsabila" },
      { role: "Anggota Divisi", name: "Nirwanda Aulia" },
      { role: "Anggota Divisi", name: "Radiva Amalia" },
      { role: "Anggota Divisi", name: "Yusuf Muhammad" },
    ],
  },
  {
    division: "Divisi Public Affairs",
    members: [
      { role: "Ketua Divisi", name: "Siti Lubna Adlya" },
      { role: "Subkoordinator Media Partner", name: "Aiesha Divya Kalila Nugroho" },
      { role: "Subkoordinator Media Content", name: "Anasya Alifa Putri" },
      { role: "Anggota Divisi", name: "Andaru Malik Enggarkusuma" },
      { role: "Anggota Divisi", name: "Arum Lailasari" },
      { role: "Anggota Divisi", name: "Carmeya Sasi Waskito" },
      { role: "Anggota Divisi", name: "Eugenia Bianca Aileen Chianiago" },
      { role: "Anggota Divisi", name: "Luna Maisarah Taufik" },
      { role: "Anggota Divisi", name: "Muhammad Shafin Khalilurahim" },
      { role: "Anggota Divisi", name: "Nayla Syakira" },
      { role: "Anggota Divisi", name: "Sandrine Luna Joanna" },
      { role: "Anggota Divisi", name: "Shafa Annora Soekotjo" },
    ],
  },
  {
    division: "Divisi Media Kreatif",
    members: [
      { role: "Ketua Divisi", name: "Mutia Syamil" },
      { role: "Subkoordinator Dokumentasi", name: "M. Firdaus Al-Amin" },
      { role: "Subkoordinator Desain", name: "Sahrani Jade Riyandini Laurasita" },
      { role: "Anggota Divisi", name: "Alaric Aksa Apriza" },
      { role: "Anggota Divisi", name: "Alfatha Firraz Rajendra" },
      { role: "Anggota Divisi", name: "Attala Aufarrafi" },
      { role: "Anggota Divisi", name: "Carlo Johannes Elias" },
      { role: "Anggota Divisi", name: "Lana Aqila Zahra" },
      { role: "Anggota Divisi", name: "Maylane" },
      { role: "Anggota Divisi", name: "Nayla Izza Khaira" },
      { role: "Anggota Divisi", name: "Raihan Daffa Aditya" },
      { role: "Anggota Divisi", name: "Syakira Naila Jagaddhita" },
    ],
  },
  {
    division: "Mata Lomba Arjuna",
    members: [
      { role: "Ketua Divisi", name: "Prasista Nasya Zerlinda" },
      { role: "Anggota Divisi", name: "Andari Kayla Nugraheni" },
      { role: "Anggota Divisi", name: "Anisa Desvinta Nuraini" },
      { role: "Anggota Divisi", name: "Damianus Bramantyadira G." },
      { role: "Anggota Divisi", name: "Febryan Syaugi" },
      { role: "Anggota Divisi", name: "Mychelle Ayde Abigail Saraun" },
    ],
  },
  {
    division: "Mata Lomba Nakula",
    members: [
      { role: "Ketua Divisi", name: "Komang Ayu Kirkayaka Amerta Putri" },
      { role: "Anggota Divisi", name: "Chavvah Nyasha Anugrah" },
      { role: "Anggota Divisi", name: "Nayla Shariha Putri" },
      { role: "Anggota Divisi", name: "Ozora Nirwasita Oentarjo" },
      { role: "Anggota Divisi", name: "Shakira Aliyah Wibowo" },
    ],
  },
  {
    division: "Mata Lomba Prahasta",
    members: [
      { role: "Ketua Divisi", name: "Bernadette Gracia Meaza Kyla" },
      { role: "Anggota Divisi", name: "Jihan Tasbih" },
      { role: "Anggota Divisi", name: "Hanifah Alya Diyanti" },
      { role: "Anggota Divisi", name: "Tazkia Putri Zanaria" },
    ],
  },
  {
    division: "Mata Lomba Sadewa",
    members: [
      { role: "Ketua Divisi", name: "Nayla Devira Cahyani" },
      { role: "Anggota Divisi", name: "Alaricia Raizel Avano" },
      { role: "Anggota Divisi", name: "Azwa Narindra Maharani" },
      { role: "Anggota Divisi", name: "Syadzaa Aqeela Bil Haqq" },
      { role: "Anggota Divisi", name: "Winona Wiwoho" },
    ],
  },
];