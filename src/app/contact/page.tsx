import SiteChrome from "@/components/site-chrome";
import { faqItems } from "@/components/content";

const preContactChecklist = [
  "เป้าหมายของโปรเจกต์ (อยากให้ดีขึ้นเรื่องไหน)",
  "ระบบหรือกระบวนการที่ใช้อยู่ตอนนี้",
  "ช่วงเวลาที่อยากเริ่มและวันเป้าหมาย go-live",
  "งบประมาณโดยประมาณ (ถ้ามี)",
];

export default function ContactPage() {
  return (
    <SiteChrome>
      <section className="section">
        <div className="container panel contact-panel reveal">
          <div>
            <p className="eyebrow">CONTACT</p>
            <h1>เล่าโจทย์โปรเจกต์ของคุณ แล้วเราช่วยวางทางออกให้</h1>
            <p className="section-sub">
              ส่งข้อมูลเบื้องต้นมาได้เลย เราจะติดต่อกลับภายใน 1 วันทำการ พร้อมคำแนะนำแนวทางเริ่มต้น
            </p>
            <ul className="contact-links">
              <li>
                <a href="mailto:kittanai.ka@gmail.com">kittanai.ka@gmail.com</a>
              </li>
              <li>
                <a href="tel:+66990528939">+66 99 052 8939</a>
              </li>
              <li>
                <a href="https://www.facebook.com/datacooking101" target="_blank" rel="noreferrer">
                  facebook.com/datacooking101
                </a>
              </li>
            </ul>

            <div className="note-strip" style={{ marginTop: "1rem", gridTemplateColumns: "1fr" }}>
              {preContactChecklist.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="30609aa0-1a71-41e8-a6bd-09843dd0ac77" />
            <input type="hidden" name="subject" value="New Contact from datacooking.net" />
            <label>
              ชื่อผู้ติดต่อ
              <input type="text" name="name" required />
            </label>
            <label>
              อีเมล
              <input type="email" name="email" required />
            </label>
            <label>
              เบอร์โทร (ไม่บังคับ)
              <input type="tel" name="phone" />
            </label>
            <label>
              งบประมาณโดยประมาณ (ไม่บังคับ)
              <input type="text" name="budget" placeholder="เช่น 200,000 - 500,000 บาท" />
            </label>
            <label>
              รายละเอียดความต้องการ
              <textarea name="message" rows={5} required />
            </label>
            <button className="btn btn-solid" type="submit">
              ส่งรายละเอียด
            </button>
          </form>
        </div>

        <div className="container faq-grid">
          {faqItems.map((item) => (
            <article key={item.q} className="faq-card reveal-soft">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
