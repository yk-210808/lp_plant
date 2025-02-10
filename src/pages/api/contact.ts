import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "全てのフィールドを入力してください。" });
  }

  console.log("お問い合わせ:", { name, email, message });

  try {
    // SMTP 設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // 587ポートはTLSを使用
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 📧 管理者向けメール
    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: "planto@example.com", // 管理者のメールアドレス
      subject: "【お問い合わせ通知】新しいお問い合わせがありました",
      text: `以下の内容でお問い合わせがありました。\n\n名前: ${name}\nメール: ${email}\nメッセージ:\n${message}`,
    };

    // 📧 フォーム送信者向けメール
    const userMailOptions = {
      from: process.env.SMTP_USER,
      to: email, // 送信者のメールアドレス
      subject: "【お問い合わせ受付】お問い合わせありがとうございます",
      text: `${name} 様\n\nお問い合わせありがとうございます。\n以下の内容で受け付けました。\n\n----------------------\n\n\n名前: ${name}\nメール: ${email}\nメッセージ:\n${message}\n----------------------\n\n対応までしばらくお待ちください。`,
    };

    // メールを送信
    await transporter.sendMail(adminMailOptions); // 管理者向け
    await transporter.sendMail(userMailOptions); // 送信者向け

    return res.status(200).json({ success: true, message: "メール送信完了！" });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return res.status(500).json({ success: false, message: "メール送信に失敗しました。" });
  }
}
