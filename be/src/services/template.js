export const buildEmailTemplate = ({
  type, // "accepted" | "rejected"
  applicantName,
  jobTitle,
  companyName,
  companyLogo,
  emailRecruiter,
  jobDetailUrl, // nên truyền thêm từ controller
}) => {
  const subject =
    type === "accepted"
      ? `🎉 Chúc mừng! Bạn đã được nhận vào vị trí ${jobTitle} tại ${companyName}`
      : `Thông báo kết quả ứng tuyển vị trí ${jobTitle} tại ${companyName}`;

  const CTAButton =
    type === "accepted" && jobDetailUrl
      ? `<div style="text-align: center; margin-top: 32px;">
           <a
             href="${jobDetailUrl}"
             target="_blank"
             style="
               background-color: #007bff;
               border-radius: 6px;
               color: #ffffff;
               display: inline-block;
               font-size: 16px;
               font-weight: 600;
               padding: 14px 28px;
               text-decoration: none;
               text-align: center;
               font-family: Arial, sans-serif;
             "
           >
             Xem chi tiết công việc
           </a>
         </div>`
      : "";

  const bodyContent =
    type === "accepted"
      ? `
          <p style="margin: 0 0 16px;">Xin chào <strong>${applicantName}</strong>,</p>
          <p style="margin: 0 0 16px;">Chúng tôi rất vui thông báo rằng bạn đã <strong>được chọn</strong> cho vị trí <strong>${jobTitle}</strong> tại <strong>${companyName}</strong>.</p>
          <p style="margin: 0 0 16px;">Bộ phận tuyển dụng sẽ sớm liên hệ để sắp xếp phỏng vấn hoặc bước tiếp theo.</p>
          <p style="margin: 0 0 16px;">Nếu có bất kỳ thắc mắc nào, vui lòng phản hồi qua email: <a href="mailto:${emailRecruiter}">${emailRecruiter}</a>.</p>
          ${CTAButton}
          <p style="margin: 32px 0 0;">Trân trọng,<br/><strong>Đội ngũ tuyển dụng - ${companyName}</strong></p>
        `
      : `
          <p style="margin: 0 0 16px;">Xin chào <strong>${applicantName}</strong>,</p>
          <p style="margin: 0 0 16px;">Sau khi xem xét kỹ lưỡng, chúng tôi rất tiếc phải thông báo rằng bạn <strong>chưa phù hợp</strong> với vị trí <strong>${jobTitle}</strong> tại thời điểm hiện tại.</p>
          <p style="margin: 0 0 16px;">Chúng tôi rất trân trọng sự quan tâm của bạn và hy vọng có thể hợp tác trong tương lai.</p>
          <p style="margin: 32px 0 0;">Trân trọng,<br/><strong>Đội ngũ tuyển dụng - ${companyName}</strong></p>
        `;

  const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; background-color: #f6f9fc; padding: 40px;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 32px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
          ${
            companyLogo
              ? `<div style="text-align: center; margin-bottom: 24px;">
                  <img src="${companyLogo}" alt="${companyName} Logo" style="max-height: 60px;" />
                </div>`
              : ""
          }
          <div style="font-size: 16px; color: #333;">
            ${bodyContent}
          </div>
          <hr style="margin-top: 40px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #888; text-align: center; margin-top: 24px;">
            © ${new Date().getFullYear()} ${companyName}. Mọi quyền được bảo lưu.
          </p>
        </div>
      </div>
    `;

  return { subject, html };
};
