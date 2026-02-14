import SiteChrome from "@/components/site-chrome";
import { flow } from "@/components/content";

const flowDescriptions = [
  "คุยเป้าหมาย ขอบเขต และวางแผน timeline ร่วมกัน",
  "ออกแบบโครงระบบและหน้าจอให้เห็นภาพก่อนลงมือจริง",
  "พัฒนาเป็นรอบสั้น พร้อมอัปเดตความคืบหน้าให้ตรวจสอบได้",
  "ทดสอบร่วมกับทีมผู้ใช้งานจริง ลดความเสี่ยงก่อนขึ้นระบบ",
  "ส่งมอบเอกสารและดูแลต่อหลังใช้งานจริง",
];

const deliverables = [
  "เอกสารขอบเขตงานและ roadmap",
  "แบบหน้าจอ/flow พร้อมข้อสรุปการใช้งาน",
  "source code และ deployment guideline",
  "test checklist และผลทดสอบ",
  "handover + support plan หลังขึ้นระบบ",
];

const communication = [
  "Weekly progress call 30-60 นาที",
  "Demo รอบงานทุก 2-3 สัปดาห์",
  "สรุปความคืบหน้าและ next steps หลังประชุมทุกครั้ง",
];

export default function HowWeWorkPage() {
  return (
    <SiteChrome>
      <section className="section">
        <div className="container panel reveal">
          <div className="section-head">
            <p className="eyebrow">HOW WE WORK</p>
            <h1>ทำงานเป็นขั้นตอนชัดเจน คุมคุณภาพได้ทุกเฟส</h1>
            <p className="section-sub">ทีมคุณเห็นทิศทางงานตลอด ไม่ต้องรอลุ้นวันส่งมอบ</p>
          </div>
          <ol className="flow-line">
            {flow.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                <p>{flowDescriptions[index]}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="container panel reveal" style={{ marginTop: "1rem" }}>
          <div className="section-head">
            <p className="eyebrow">DELIVERABLES</p>
            <h2>สิ่งที่คุณจะได้รับในโปรเจกต์</h2>
          </div>
          <div className="benefit-grid">
            {deliverables.map((item) => (
              <article key={item} className="benefit-card">
                <p>{item}</p>
              </article>
            ))}
          </div>

          <div className="note-strip" style={{ marginTop: "1rem" }}>
            {communication.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
