import Image from "next/image";
import React from "react";
import TimelinePoint from "../point/TimelinePoint";
import TimelineEventText from "./TimelineEventText";

const Timeline = () => {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-start relative">
      {/* Green Waves - Responsive */}
      <div className="w-full absolute -top-6 xs:-top-12 sm:-top-16 md:-top-20 lg:-top-24 xl:-top-28 2xl:-top-32 left-0 pointer-events-none z-990 flex flex-col">
        <div className="w-full leading-0">
          <Image
            src={"/Gelombang Hijau Atas 3.png"}
            alt="Gelombang Hijau"
            width={1920}
            height={500}
            sizes="100vw"
            className="w-full block scale-y-[-1]"
          />
        </div>
        <div className="w-full leading-0 -mt-px">
          <Image
            src={"/Gelombang Hijau Atas 3.png"}
            alt="Gelombang Hijau"
            width={1920}
            height={500}
            sizes="100vw"
            className="w-full block"
          />
        </div>
      </div>

      {/* Purple cloud decoration — top left */}
      <Image
        src="/image 7.png"
        alt="Awan Dekorasi Kiri Atas"
        width={500}
        height={500}
        sizes="(max-width: 768px) 30vw, 18vw"
        className="absolute top-[2%] left-0 w-[30vw] sm:w-[25vw] md:w-[22vw] lg:w-[18vw] xl:w-[30vw] h-auto object-contain z-20 pointer-events-none"
      />

      {/* Timeline Title */}
      <div className="w-full absolute top-[3vw] flex items-center justify-center z-20">
        <h1 className="text-center font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-7xl 2xl:text-9xl font-bold bg-clip-text bg-[linear-gradient(102deg,#FBD596_0.77%,#FBC364_22.3%,#FBD596_41.41%,#FBC364_65.41%,#FBD596_87.21%,rgba(251,195,100,0.75)_107.16%)] text-transparent">
          TIMELINE
        </h1>
      </div>

      {/* ===== MAIN WRAPPER (Container for proportional sizing) ===== */}
      <div
        className="w-screen relative mt-[20vw] mb-[4vw]"
        style={{ containerType: "inline-size" }}
      >
        {/* LineTimeline Image — defines the wrapper's natural height */}
        <Image
          src={"/LineTimeline.webp"}
          alt="Line Timeline"
          width={1920}
          height={2012}
          sizes="100vw"
          className="w-full h-auto object-contain relative z-10"
        />

        {/* ============ EVENT 1: ROADSHOW ============ */}
        <TimelineEventText
          periods={[
            { start: "2026-02-18", end: "2026-03-15" },
            { start: "2026-03-28", end: "2026-04-05" },
          ]}
          title="ROADSHOW"
          descriptionLines={[
            "Batch 1: 18 Februari - 15 Maret 2026",
            "Batch 2: 28 Maret - 5 April 2026",
          ]}
          className="absolute z-10 flex flex-col items-center text-center top-[7%] left-[20%] w-[38%]"
        />

        {/* Point 1 — ROADSHOW bend (past) */}
        <div
          className="absolute z-10"
          style={{ top: "2%", left: "34%", width: "9%" }}
        >
          <TimelinePoint
            periods={[
              { start: "2026-02-18", end: "2026-03-15" },
              { start: "2026-03-28", end: "2026-04-05" },
            ]}
          />
        </div>

        {/* Character 1 — ANGRY (fire character) beside ROADSHOW, right side */}
        <Image
          src="/ANGRY@3x 2 (1).webp"
          alt="Api"
          width={500}
          height={500}
          sizes="40vw"
          className="absolute z-20 h-auto object-contain"
          style={{ top: "7%", left: "1%", width: "40%" }}
        />

        {/* ============ EVENT 2: PENGUMPULAN KARYA (active) ============ */}
        <TimelineEventText
          periods={[{ start: "2026-03-01", end: "2026-04-16" }]}
          title="PENGUMPULAN KARYA"
          descriptionLines={["1 Maret - 16 April 2026"]}
          className="absolute z-10 flex flex-col items-center text-center top-[23%] left-[38%] w-[42%]"
        />

        {/* Point 2 — PENGUMPULAN KARYA bend (active — pink) */}
        <div
          className="absolute z-10"
          style={{ top: "18%", right: "35%", width: "9%" }}
        >
          <TimelinePoint
            periods={[{ start: "2026-03-01", end: "2026-04-16" }]}
          />
        </div>

        {/* Character 2 — EXCITED (yellow character with hat) */}
        <Image
          src="/EXCITED@3x 1.webp"
          alt="Excited"
          width={500}
          height={500}
          sizes="30vw"
          className="absolute z-20 h-auto object-contain"
          style={{ top: "-8%", right: "6%", width: "30%" }}
        />

        {/* ============ EVENT 3: PERIODE PENJURIAN (active) ============ */}
        <TimelineEventText
          periods={[{ start: "2026-04-20", end: "2026-05-18" }]}
          title="PERIODE PENJURIAN"
          descriptionLines={["20 April - 18 Mei 2026"]}
          className="absolute z-10 flex flex-col items-center text-center top-[39%] left-[20%] w-[38%]"
        />

        {/* Point 3 — PERIODE PENJURIAN bend (active — pink) */}
        <div
          className="absolute z-10"
          style={{ top: "33%", left: "36%", width: "9%" }}
        >
          <TimelinePoint
            periods={[{ start: "2026-04-20", end: "2026-05-18" }]}
          />
        </div>

        {/* Character 3 — SCARED (purple octopus) right side */}
        <Image
          src="/SCARED@3x 2.webp"
          alt="Scared"
          width={500}
          height={500}
          sizes="20vw"
          className="absolute z-20 h-auto object-contain"
          style={{ top: "30%", right: "0%", width: "20%" }}
        />

        {/* ============ EVENT 4: PENGUMUMAN FINALIS (upcoming) ============ */}
        <TimelineEventText
          periods={[{ start: "2026-05-20", end: "2026-05-20" }]}
          title="PENGUMUMAN FINALIS"
          descriptionLines={["20 Mei 2026"]}
          className="absolute z-10 flex flex-col items-center text-center top-[54.5%] left-[40%] w-[42%]"
        />

        {/* Point 4 — PENGUMUMAN FINALIS bend (upcoming — muted pink) */}
        <div
          className="absolute z-10"
          style={{ top: "48.5%", left: "57%", width: "9%" }}
        >
          <TimelinePoint
            periods={[{ start: "2026-05-20", end: "2026-05-20" }]}
          />
        </div>

        {/* Character 4 — SAD (pink blob) left side */}
        <Image
          src="/SAD@3x 2.webp"
          alt="Sad"
          width={500}
          height={500}
          sizes="20vw"
          className="absolute z-20 h-auto object-contain scale-x-[-1]"
          style={{ top: "45%", left: "0%", width: "20%" }}
        />

        {/* ============ EVENT 5: FESTIVAL (upcoming) ============ */}
        <TimelineEventText
          periods={[{ start: "2026-06-03", end: "2026-06-05" }]}
          title="FESTIVAL"
          descriptionLines={["3 - 5 Juni 2026"]}
          className="absolute z-10 flex flex-col items-center text-center top-[69%] left-[20%] w-[33%]"
        />

        {/* Point 5 — FESTIVAL bend (upcoming — muted pink) */}
        <div
          className="absolute z-10"
          style={{ top: "64%", left: "32%", width: "9%" }}
        >
          <TimelinePoint
            periods={[{ start: "2026-06-03", end: "2026-06-05" }]}
          />
        </div>

        {/* Character 5 — HAPPY (green character) left side */}
        <Image
          src="/HAPPY@3x 2.webp"
          alt="Happy"
          width={500}
          height={500}
          sizes="20vw"
          className="absolute z-20 h-auto object-contain"
          style={{ top: "75%", left: "18%", width: "20%" }}
        />

        {/* Character 5b — TENDER (blue bunny) right side */}
        <Image
          src="/TENDER@3x 2.webp"
          alt="Tender"
          width={500}
          height={500}
          sizes="25vw"
          className="absolute z-20 h-auto object-contain"
          style={{ top: "56%", right: "11%", width: "25%" }}
        />

        {/* ============ EVENT 6: CANDRAMUKA (upcoming) ============ */}
        <TimelineEventText
          periods={[{ start: "2026-06-05", end: "2026-06-06" }]}
          title="CANDRAMUKA"
          descriptionLines={[
            "Pembukaan dan Bedah Karya: 5 Juni 2026",
            "Malam Puncak: 6 Juni 2026",
          ]}
          className="absolute z-10 flex flex-col items-center text-center top-[84%] left-[28%] w-[48%]"
        />

        {/* Point 6 — CANDRAMUKA bend (upcoming — muted pink) */}
        <div
          className="absolute z-10"
          style={{ top: "80%", left: "47%", width: "9%" }}
        >
          <TimelinePoint
            periods={[{ start: "2026-06-05", end: "2026-06-06" }]}
          />
        </div>
      </div>

      {/* ===== Corner Decorative Images ===== */}
      <Image
        src="/Group 61.webp"
        alt="Tanaman Menjalar Kiri"
        width={500}
        height={500}
        className="absolute top-[17vw] left-[5vw] w-[10vw] sm:w-[8vw] md:w-[7vw] lg:w-[6vw] xl:w-[9vw] z-0 animate-[rootWave_8s_ease-in-out_infinite]"
      />
      <Image
        src="/Bunga Daun 2 (1).png"
        alt="Bunga Daun"
        width={500}
        height={500}
        className="absolute -top-[25vw] -right-[12vw] rotate-30 w-[28vw] z-1000 scale-x-[-1] animate-[leafSway_6s_ease-in-out_infinite]"
        style={{ "--initial-rotate": "0deg" } as React.CSSProperties}
      />
      <Image
        src="/image 46.webp"
        alt="Tanaman Menjalar Bawah Kanan"
        width={500}
        height={500}
        className="absolute top-[-10vw] right-0 w-[40vw] z-0 animate-[rootWave_8s_ease-in-out_infinite]"
      />
      <Image
        src="/EXCITED@3x 1.webp"
        alt="Jamur Dekorasi Bawah Kanan"
        width={500}
        height={500}
        className="absolute bottom-[2vw] right-[2vw] w-[10vw] sm:w-[8vw] md:w-[7vw] lg:w-[6vw] xl:w-[5vw] z-10"
      />
    </section>
  );
};

export default Timeline;
