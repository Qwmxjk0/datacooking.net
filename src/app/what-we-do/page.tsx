import SiteChrome from "@/components/site-chrome";
import { workPrinciples } from "@/components/content";

const capabilities = [
  "วิเคราะห์ความต้องการและทำ blueprint ระบบ",
  "ออกแบบ UX/UI ให้ทีมใช้งานได้คล่อง",
  "พัฒนา API และเชื่อมต่อระบบภายในองค์กร",
  "วางระบบ monitoring และแจ้งเตือน",
];

const notDo = [
  "ไม่เสนอเทคโนโลยีเกินความจำเป็นเพื่อเพิ่มค่าใช้จ่าย",
  "ไม่ส่งมอบโค้ดที่ทีมลูกค้าดูแลต่อไม่ได้",
  "ไม่ปล่อยงานแบบไม่มีคู่มือหรือแผนรับมือหลังขึ้นระบบ",
];

export default function WhatWeDoPage() {
  return (
    <SiteChrome>
      <section className="section">
        <div className="container panel split reveal">
          <div className="section-head">
            <p className="eyebrow">WHAT WE DO</p>
            <h1>เราสร้างระบบที่ทีมคุณใช้งานต่อได้จริง</h1>
            <p className="section-sub">
              ไม่ใช่แค่ส่งโค้ด แต่ส่งมอบกระบวนการและคุณภาพที่พร้อมใช้งานในชีวิตจริง
            </p>
          </div>

          <div className="principle-list">
            {workPrinciples.map((principle) => (
              <article key={principle} className="principle-item">
                <p>{principle}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="container capability-grid">
          {capabilities.map((capability) => (
            <article key={capability} className="capability-card reveal-soft">
              <p>{capability}</p>
            </article>
          ))}
        </div>

        <div className="container panel reveal" style={{ marginTop: "1rem" }}>
          <div className="section-head">
            <p className="eyebrow">WHAT WE DO NOT DO</p>
            <h2>สิ่งที่เราไม่ทำ</h2>
          </div>
          <div className="benefit-grid">
            {notDo.map((item) => (
              <article key={item} className="benefit-card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
