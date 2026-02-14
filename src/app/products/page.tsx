import Link from "next/link";
import SiteChrome from "@/components/site-chrome";
import { products } from "@/components/content";

const productBenefits = [
  "เริ่มจากโมดูลที่จำเป็นก่อน แล้วค่อยขยาย",
  "ลดเวลา go-live ด้วยโครงสร้างที่ทดสอบแล้ว",
  "ปรับหน้าจอและ workflow ให้เข้ากับทีมของคุณได้",
];

const useCases = [
  {
    title: "ฝ่ายขายและผู้บริหาร",
    detail: "รวม pipeline การขาย ใบเสนอราคา และสรุปยอดแบบเรียลไทม์",
  },
  {
    title: "คลังสินค้าและปฏิบัติการ",
    detail: "ติดตามการเคลื่อนไหวของสต็อก พร้อม alert เมื่อเข้าโซนเสี่ยง",
  },
  {
    title: "ทีมบริการและซัพพอร์ต",
    detail: "จัดการ ticket, SLA, และสถานะงานซ่อมบำรุงในหน้าเดียว",
  },
];

export default function ProductsPage() {
  return (
    <SiteChrome>
      <section className="section">
        <div className="container panel reveal">
          <div className="section-head">
            <p className="eyebrow">PRODUCTS</p>
            <h1>โซลูชันตั้งต้นที่ต่อยอดได้รวดเร็ว</h1>
            <p className="section-sub">
              เหมาะกับองค์กรที่ต้องการเริ่มไว แต่ยังคงมาตรฐานคุณภาพระบบระดับ production
            </p>
          </div>

          <div className="product-track" role="region" aria-label="รายการผลิตภัณฑ์">
            {products.map((product) => (
              <article key={product.title} className="product-card">
                <h3>{product.title}</h3>
                <p>{product.summary}</p>
                <Link href="/contact">ขอ Demo / รายละเอียด</Link>
              </article>
            ))}
          </div>

          <div className="benefit-grid">
            {productBenefits.map((item) => (
              <article key={item} className="benefit-card reveal-soft">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="container panel reveal" style={{ marginTop: "1rem" }}>
          <div className="section-head">
            <p className="eyebrow">USE CASES</p>
            <h2>ตัวอย่างการใช้งานจริง</h2>
          </div>
          <div className="benefit-grid">
            {useCases.map((item) => (
              <article key={item.title} className="benefit-card">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
