# مشروع متجر إلكتروني (React + API)

واجهة React مع API بسيط باستخدام Express لإظهار كيفية بناء متجر إلكتروني أولي.

## المتطلبات

- Node.js 18+

## تشغيل الواجهة الأمامية

```bash
cd frontend
npm install
npm run dev
```

## تشغيل الـ API

```bash
cd api
npm install
npm run dev
```

## المسارات المتاحة

- `GET /api/products`
- `GET /api/cart/summary`

يمكنك ربط الواجهة الأمامية بالـ API عبر استدعاء المسار `http://localhost:5050/api/products`.
