import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, service, message } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
 const receiver = 'Moses Nielsen'
    // HTML content for the email
    const htmlContent = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head>
<!--[if gte mso 9]>
    		<xml>
    			<o:OfficeDocumentsettings>
    			<o:AllowPNG/>
    			<o:PixelsPerInch>96</o:PixelsPerInch>
    			</o:OfficeDocumentsettings>
    		</xml>
    	<![endif]-->
<!--[if gt mso 15]>
     <style type="text/css" media="all">
     /* Outlook 2016 Height Fix */
     table, tr, td {border-collapse: collapse;}
     tr { font-size:0px; line-height:0px; border-collapse: collapse; }
     </style>
     <![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
<meta name="robots" content="noindex, nofollow">
<title>Feedback Email</title>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet">
<style>
body {
  margin: 0;
  padding: 0;
  mso-line-height-rule: exactly;
  text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
 }
body, table, td, p, a, li {
	text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
table td {
  border-collapse: collapse;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
  border-color: #FFFFFF;
}
p, a, li, td, blockquote {
  mso-line-height-rule: exactly;
}
p, a, li, td, body, table, blockquote {
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
img, a img {
  border: 0;
  outline: none;
  text-decoration: none;
}
img {
  -ms-interpolation-mode: bicubic;
}
* img[tabindex="0"] + div {
  display: none !important;
}
a[href^=tel],a[href^=sms],a[href^=mailto], a[href^=date] {
  color: inherit;
  cursor: default;
  text-decoration: none;
}
a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important}
.logo {
  width: 220px!important;
  height: 35px!important;
}
.logo-footer {
  width: 129px!important;
  height: 29px!important;
}
.table-container .alert-icon {
  width: 120px!important;
  height: 120px!important;
}
.table-container .avatar-img {
  width: 64px!important;
  height: 64px!important;
}
.x-gmail-data-detectors, .x-gmail-data-detectors * {
  border-bottom: 0 !important;
  cursor: default !important}
form textarea {
  width: 100%;
  max-width: 100%;
}
@media screen {
  body {
  font-family:  Arial, Helvetica, sans-serif;
}
}
@media only screen and (max-width: 640px) {
  body {
  margin: 0px!important;
  padding: 0px!important;
}
body, table, td, p, a, li, blockquote {
	text-size-adjust: none!important;
  -webkit-text-size-adjust: none!important;
}
.table-main, .table-container,.social-icons,table,.table-container td {
  width: 100%!important;
  min-width: 100%!important;
  margin: 0!important;
  float: none!important;
}
.table-container img {
  width: 100%!important;
  max-width: 100%!important;
  display: block;
  height: auto!important;
}
.table-container a {
  width: 50%!important;
  max-width: 100%!important;
}
.table-container .logo {
  width: 200px!important;
  height: 30px!important;
}
.table-container .alert-icon {
  width: 120px!important;
  height: 120px!important;
}
.mobile-title {
  font-size: 34px!important;
}
.table-container .logo-footer {
  width: 129px!important;
  height: 29px!important;
  margin-bottom: 20px!important;
}
.block-img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}
.info-block {
  padding: 0!important;
}
.video-img {
  width: 100%!important;
  height: auto!important;
}
.post-footer-container td {
  text-align: center!important;
  padding: 0 40px 0 40px!important;
}
}

</style>
</head>
<body style="padding: 0; margin: 0; -webkit-font-smoothing:antialiased; background-color:#f1f1f1; -webkit-text-size-adjust:none;">
<!--Main Parent Table -->
<table width="100%" border="0" cellpadding="0" direction="ltr" bgcolor="#f1f1f1" cellspacing="0" role="presentation" style="width: 640px; min-width: 640px; margin:0 auto 0 auto;">
<tbody>
<tr>
    <td style="display:none;font-size:0;line-height:0;color:#111111;">
		 Contact form filled from your portfolio website.
	</td>
</tr>
<tr>
	<td>
		<!--Content Starts Here -->
		<table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" role="presentation" bgcolor="#f1f1f1">
		<tr>
			<td height="30" style="line-height:30px;min-height:30px;">
			</td>
		</tr>
		</table>
		<!--Top Header Starts Here -->
		<table border="0" bgcolor="#121212" cellpadding="0" cellspacing="0" width="640" role="presentation" width="640" style="width: 640px; min-width: 640px;" align="center" class="table-container ">
		<tbody>
		<tr width="640" style="width: 640px; min-width: 640px; " align="center">
			<td>
				<table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" role="presentation" bgcolor="#00e187">
				<tr>
					<td height="35" style="line-height:35px;min-height:35px;">
					</td>
				</tr>
				</table>
				<table cellpadding="0" cellspacing="0" border="0" width="640" style="width: 640px; min-width: 640px;" role="presentation" align="center" bgcolor="#00e187">
				<tr>
					<td align="left">
						<table cellpadding="0" cellspacing="0" border="0" role="presentation" align="center" bgcolor="#00e187">
						<tr>
							<td>
								<table cellpadding="0" cellspacing="0" border="0" align="center" role="presentation">
								<tr>
									<td align="center">
										<img src="/public/assets/Nielsen.jpg" alt="image" width="220" height="220" class="logo">
									</td>
								</tr>
								</table>
								<table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" role="presentation" bgcolor="#00e187">
								<tr>
									<td height="35" style="line-height:35px;min-height:35px;">
									</td>
								</tr>
								</table>
							</td>
						</tr>
						</table>
					</td>
				</tr>
				</table>
			</td>
		</tr>
		</tbody>
		</table>
		<!--Top Header Ends Here -->
		<table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" role="presentation" bgcolor="#f7f8fb">
		<tr>
			<td height="30" style="line-height:30px;min-height:30px;">
			</td>
		</tr>
		</table>
		<table align="center" border="0" cellpadding="0" cellspacing="0" width="640" role="presentation" bgcolor="#f7f8fb" class="table-container ">
		<tbody>
		<tr>
			<td align="left" style="color:#45535C;padding:20px 40px 0 40px;font-family:  Arial, Helvetica, sans-serif;font-weight:500;font-size:24px;-webkit-font-smoothing:antialiased;line-height:1.2;" class="table-container mobile-title">
				 Hello ${receiver}, We have an update for you!
			</td>
		</tr>
		<tr>
			<td align="left" style="color:#5a5a5a;padding:20px 40px 0 40px;font-family:  Arial, Helvetica, sans-serif;font-weight:normal;font-size:16px;-webkit-font-smoothing:antialiased;line-height:1.4;" class="table-container">
				  From: ${email}
			</td>
		</tr><tr>
			<td align="left" style="color:#5a5a5a;padding:20px 40px 0 40px;font-family:  Arial, Helvetica, sans-serif;font-weight:normal;font-size:16px;-webkit-font-smoothing:antialiased;line-height:1.4;" class="table-container">
				  Sender's Name: <b>${name}</b>
			</td>
		</tr><tr>
			<td align="left" style="color:#5a5a5a;padding:20px 40px 0 40px;font-family:  Arial, Helvetica, sans-serif;font-weight:normal;font-size:16px;-webkit-font-smoothing:antialiased;line-height:1.4;" class="table-container">
				  Sender's Phone: <b>${phone}</b>
			</td>
		</tr><tr>
			<td align="left" style="color:#5a5a5a;padding:20px 40px 0 40px;font-family:  Arial, Helvetica, sans-serif;font-weight:normal;font-size:16px;-webkit-font-smoothing:antialiased;line-height:1.4;" class="table-container">
				  Service Request: <b>${service}</b>
			</td>
		</tr>
		</tbody>
		</table>
		<table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" role="presentation" bgcolor="#f7f8fb">
		<tr>
			<td height="60" style="line-height:60px;min-height:60px;">
			</td>
		</tr>
		</table>
		<table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" role="presentation" bgcolor="#FFFFFF">
		<tr>
			<td height="30" style="line-height:30px;min-height:30px;">
			</td>
		</tr>
		</table>
		<table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" role="presentation" bgcolor="#FFFFFF">
		<tbody>
		<tr>
			<td align="left" style="color:#45535C;padding:20px 40px 0 40px;font-family:  Arial, Helvetica, sans-serif;font-weight:800;font-size:24px;-webkit-font-smoothing:antialiased;line-height:1.2;" class="table-container mobile-title">
				 Message!
			</td>
		</tr>
		<tr>
			<td align="left" style="color:#5a5a5a;padding:20px 40px 0 40px;font-family:  Arial, Helvetica, sans-serif;font-weight:normal;font-size:14px;-webkit-font-smoothing:antialiased;line-height:1.4;" class="table-container">
				 ${message}
			</td>
		</tr>
		<tr>
			<td align="left" style="padding:40px 40px 10px 40px;" class="table-container">
				<!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.mailersend.com/" style="height: 40px; v-text-anchor: middle; width: 250px;" arcsize="13%" stroke="f" fillcolor="#ff5746">
        <w:anchorlock/>
        <center>
          <![endif]-->
				<a href="mailto:${email}?subject=Feedback on Service request for ${service}" style="background-color: #00e187; color: #ffffff; display: inline-block;font-family:  Arial, Helvetica, sans-serif; font-size: 16px; line-height: 20px; text-align: center; font-weight: bold; text-decoration: none; padding: 20px 25px; min-width: 150px; -webkit-text-size-adjust: none;">Send Feedback</a>
				<!--[if mso]>
        </center>
      </v:roundrect>
      <![endif]-->
			</td>
		</tr>
		</tbody>
		</table>
		<table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" role="presentation" bgcolor="#FFFFFF">
		<tr>
			<td height="60" style="line-height:60px;min-height:60px;">
			</td>
		</tr>
		</table>
		<table bgcolor="#f1f1f1" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" role="presentation" class="table-container ">
		<tr>
			<td height="35" style="line-height:35px;min-height:35px;">
			</td>
		</tr>
		</table>
		<table bgcolor="#f1f1f1" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" role="presentation" class="table-container ">
		<tr>
			<td height="35" style="line-height:35px;min-height:35px;">
			</td>
		</tr>
		</table>
		<table bgcolor="#f1f1f1" cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="width: 640px; min-width: 640px;" role="presentation" class="table-container ">
		<tr>
			<td height="35" style="line-height:35px;min-height:35px;">
			</td>
		</tr>
		</table>
		<!--Bottom Section Ends Here -->
		<!--Main Td  Ends Here -->
	</td>
</tr>
</tbody>
<!--Main Parent Table Ends Here -->
</table>
</body>
</html>

    `;
    

    const mailOptions = {
      from: email,
      to: "mosesnielsen68@gmail.com",
      subject: `New Contact Form Submission - ${service}`,
      html: htmlContent, // Use HTML content instead of plain text
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}