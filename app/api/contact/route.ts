import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  nama: z.string().min(1, 'Nama wajib diisi'),
  email: z.string().email('Format email tidak valid'),
  pesan: z.string().min(1, 'Pesan wajib diisi'),
  orderProduk: z.boolean().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    console.log('[Contact Form Submission]', {
      nama: data.nama,
      email: data.email,
      pesan: data.pesan,
      orderProduk: data.orderProduk,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Pesan berhasil dikirim!' },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { message: err.errors.map((e) => e.message).join(', ') },
        { status: 400 }
      );
    }

    console.error('[Contact Form Error]', err);
    return NextResponse.json(
      { message: 'Terjadi kesalahan server.' },
      { status: 500 }
    );
  }
}
