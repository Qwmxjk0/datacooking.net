import Link from "next/link";
import SiteChrome from "@/components/site-chrome";
import { services } from "@/components/content";

const serviceNotes = [
  "ทุกงานเริ่มจากการวิเคราะห์ปัญหาและผลลัพธ์ที่ต้องการ",
  "เลือกเทคโนโลยีตามความเหมาะสมกับทีมและงบประมาณ",
  "มีเอกสารส่งมอบและคู่มือใช้งานเพื่อให้ทีมคุณใช้งานต่อได้",
];

const packages = [
  {
    title: "Starter Sprint",
    detail: "เหมาะกับทีมที่อยากเริ่มเร็ว เริ่มจากฟีเจอร์หลักที่กระทบงานจริงมากที่สุด",
    duration: "ประมาณ 2-4 สัปดาห์",
  },
  {
    title: "Growth Build",
    detail: "เหมาะกับองค์กรที่ต้องการระบบใช้งานจริงครบ workflow และเชื่อมต่อข้อมูลหลายส่วน",
    duration: "ประมาณ 6-12 สัปดาห์",
  },
  {
    title: "Scale Program",
    detail: "เหมาะกับงานที่มีหลายทีม หลายระบบ และต้องการ roadmap ระยะยาว",
    duration: "ต่อเนื่องรายไตรมาส",
  },
];

export default function ServicesPage() {
  return (
    <SiteChrome>
      <section className="section">
        <div className="container panel reveal">
          <div className="section-head">
            <p className="eyebrow">SERVICES</p>
            <h1>บริการหลักที่ช่วยให้ธุรกิจเดินเร็วขึ้น</h1>
            <p className="section-sub">
              เราโฟกัสงานที่ใช้งานได้จริงในองค์กร ไม่ทำระบบที่สวยแต่ใช้งานยาก
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.name} className="service-card">
                <h3>{service.name}</h3>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>

          <div className="note-strip">
            {serviceNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>

        <div className="container panel reveal" style={{ marginTop: "1rem" }}>
          <div className="section-head">
            <p className="eyebrow">STARTING PACKAGES</p>
            <h2>เลือกแพ็กเริ่มต้นตามขนาดงาน</h2>
          </div>
          <div className="benefit-grid">
            {packages.map((item) => (
              <article key={item.title} className="benefit-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <p>
                  <strong>ระยะเวลา:</strong> {item.duration}
                </p>
              </article>
            ))}
          </div>

          <div className="cta-inline">
            <Link className="btn btn-solid" href="/contact">
              ขอคำแนะนำงานที่เหมาะกับธุรกิจคุณ
            </Link>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
