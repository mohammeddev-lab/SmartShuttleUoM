# Smart Shuttle UoM (Frontend)

واجهة Web App لنقل طلاب جامعة الموصل داخل المجمع الرئيسي وقت الذروة. مبنية بـ Next.js (App Router) + TypeScript + Tailwind + shadcn/ui + Recharts + Leaflet.

## التشغيل محلياً

```bash
npm install
npm run dev
```

ثم افتح `http://localhost:3000`.

## أهم الصفحات

- `/` Landing
- `/student` واجهة الطالب
- `/student/map` الخريطة الحية
- `/driver` وضع السائق
- `/ops` لوحة الإدارة
- `/ops/sim` مقارنة قبل/بعد
- `/about` الخصوصية والبيانات

## الـ Mock Data vs API

حاليا البيانات تأتي من Mock محلي عبر Routes في `app/api/*`:

- `GET /api/stations`
- `GET /api/buses`
- `GET /api/buses/stream` (SSE)
- `GET /api/eta?stationId=`
- `GET /api/forecast?window=60`
- `GET /api/dispatch/suggestions`
- `POST /api/dispatch/accept`

لربط API حقيقي لاحقاً:

1. استبدل محتوى Routes في `app/api/*` بالاتصال بالباك-إند.
2. أو غيّر مسارات الاستدعاء من الواجهات لتشير إلى API خارجي (مثلاً عبر متغير بيئة).

## ملاحظات

- الواجهة RTL بالكامل، والخط الافتراضي Cairo.
- تم استخدام Leaflet بدون مفاتيح (OpenStreetMap tiles).
- الـ Real-time يعتمد على WebSocket ثم SSE كخيار أول، ويتحول إلى polling كل 5 ثوانٍ عند الحاجة.
- توجيه السائق يعتمد على OSRM public API لإظهار مسار طرق حقيقي.

