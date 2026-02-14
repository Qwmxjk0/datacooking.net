import Link from "next/link";
import SiteChrome from "@/components/site-chrome";
import { highlights } from "@/components/content";

const metrics = [
  { label: "ความเร็วส่งมอบ", value: "2-3 สัปดาห์ / รอบงาน" },
  { label: "การดูแลหลังบ้าน", value: "Support ต่อเนื่อง" },
  { label: "โฟกัสหลัก", value: "ธุรกิจไทยที่ต้องการระบบใช้งานจริง" },
];

const pains = [
  {
    title: "ข้อมูลกระจัดกระจาย",
    detail: "ข้อมูลอยู่หลายไฟล์ หลายระบบ ทำให้รายงานช้าและตัดสินใจยาก",
    outcome: "รวมข้อมูลเป็นระบบเดียว ดูสถานะธุรกิจได้แบบทันเวลา",
  },
  {
    title: "งานซ้ำและผิดพลาดบ่อย",
    detail: "ทีมต้องกรอกข้อมูลซ้ำหลายจุด และเกิด human error สูง",
    outcome: "ลดงานซ้ำด้วย workflow อัตโนมัติ และตรวจสอบย้อนหลังได้",
  },
  {
    title: "ระบบเดิมต่อยอดลำบาก",
    detail: "เพิ่มฟีเจอร์ใหม่ทีไรใช้เวลานานและเสี่ยงพัง",
    outcome: "วางโครงสร้างใหม่ให้ต่อยอดได้เร็วขึ้น โดยไม่กระทบงานหลัก",
  },
];

export default function Home() {
  return (
    <SiteChrome>
      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">DATA + SOFTWARE + AI SOLUTIONS</p>
            <h1>datacooking.net สร้างระบบที่ใช้จริง ลื่นจริง และเติบโตต่อได้จริง</h1>
            <p className="lead">
              เรารับพัฒนาระบบเว็บ แอปมือถือ ซอฟต์แวร์องค์กร งานข้อมูล และ AI
              โดยเน้นคุณภาพแบบทีมใหญ่ แต่ทำงานเร็วและยืดหยุ่นแบบทีมคล่องตัว
            </p>
            <div className="hero-actions">
              <Link className="btn btn-solid" href="/contact">
                นัดคุย 30 นาที
              </Link>
              <Link className="btn btn-ghost" href="/services">
                ดูบริการทั้งหมด
              </Link>
            </div>
            <ul className="hero-bullets">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-stack" aria-label="จุดเด่นหลักของทีม">
            <article>
              <h3>Web + Mobile Product</h3>
              <p>ออกแบบประสบการณ์ใช้งานที่ชัดเจน พร้อมโครงสร้างรองรับการเติบโต</p>
            </article>
            <article>
              <h3>Data Platform</h3>
              <p>เชื่อมข้อมูลให้ไหลลื่นและเชื่อถือได้ เพื่อรายงานและตัดสินใจที่แม่นยำ</p>
            </article>
            <article>
              <h3>AI for Operations</h3>
              <p>นำ AI ไปใช้กับงานที่คุ้มค่า ลดเวลางานซ้ำและเพิ่มความเร็วในการบริการ</p>
            </article>
          </aside>
        </div>

        <div className="container metric-grid">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric-card reveal-soft">
              <p>{metric.label}</p>
              <strong>{metric.value}</strong>
            </article>
          ))}
        </div>

        <div className="container panel reveal" style={{ marginTop: "1rem" }}>
          <div className="section-head">
            <p className="eyebrow">PAIN TO OUTCOME</p>
            <h2>เปลี่ยนปัญหาหน้างาน เป็นผลลัพธ์ที่วัดได้</h2>
          </div>
          <div className="benefit-grid">
            {pains.map((item) => (
              <article key={item.title} className="benefit-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <p>
                  <strong>ผลลัพธ์:</strong> {item.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
