import { Resend } from 'resend';

interface VerificationEmailData {
  to: string;
  firstName: string;
  verificationToken: string;
  appUrl: string;
}

interface WelcomeEmailData {
  to: string;
  firstName: string;
}

export class EmailService {
  private resend: Resend;
  private fromEmail: string;
  private fromName: string;

  constructor(apiKey: string, fromEmail: string = 'noreply@buckeyephysicaltherapy.com', fromName: string = 'Buckeye Physical Therapy') {
    this.resend = new Resend(apiKey);
    this.fromEmail = fromEmail;
    this.fromName = fromName;
  }

  async sendVerificationEmail(data: VerificationEmailData): Promise<boolean> {
    try {
      console.log('📧 Sending verification email with Resend...', {
        to: data.to,
        from: `${this.fromName} <${this.fromEmail}>`,
        hasApiKey: !!this.resend,
        verificationUrl: `${data.appUrl}/verify-email?token=${data.verificationToken}`
      });

      const verificationUrl = `${data.appUrl}/verify-email?token=${data.verificationToken}`;

      const { error } = await this.resend.emails.send({
        from: `${this.fromName} <${this.fromEmail}>`,
        to: data.to,
        subject: 'Verify Your Buckeye Physical Therapy Account',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Verify Your Buckeye Physical Therapy Account</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #2563EB, #1D4ED8); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Buckeye Physical Therapy!</h1>
                <p style="color: #BFDBFE; margin: 10px 0 0 0; font-size: 16px;">Quality Care. Real Results.</p>
              </div>

              <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
                <h2 style="color: #2563EB; margin-top: 0;">Hi ${data.firstName}!</h2>
                <p>Thank you for creating your account with Buckeye Physical Therapy. To get started, please verify your email address.</p>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="${verificationUrl}"
                     style="background: #2563EB; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; font-size: 16px;">
                    Verify My Email
                  </a>
                </div>

                <p style="font-size: 14px; color: #666;">
                  If the button doesn't work, copy and paste this link into your browser:<br>
                  <a href="${verificationUrl}" style="color: #2563EB; word-break: break-all;">${verificationUrl}</a>
                </p>
              </div>

              <div style="background: #EBF4FF; padding: 20px; border-radius: 8px; border-left: 4px solid #2563EB;">
                <h3 style="color: #2563EB; margin-top: 0;">Contact Us</h3>
                <ul style="margin: 0; padding-left: 20px;">
                  <li>Phone: (956) 476-5310</li>
                  <li>Email: buckeyephysicaltherapy@gmail.com</li>
                  <li>Location: Coming Soon to Edinburg, TX</li>
                </ul>
              </div>

              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="font-size: 12px; color: #999;">
                  This verification link will expire in 24 hours.<br>
                  If you didn't create this account, please ignore this email.
                </p>
                <p style="font-size: 12px; color: #999;">
                  &copy; ${new Date().getFullYear()} Buckeye Physical Therapy - Justin Lemmo, PT, DPT
                </p>
              </div>
            </body>
          </html>
        `,
      });

      if (error) {
        console.error('❌ Resend API error:', {
          error,
          message: error.message,
          name: error.name
        });
        return false;
      }

      console.log('✅ Email sent successfully via Resend API');
      return true;
    } catch (error) {
      console.error('❌ Email service exception:', {
        error: error.message,
        stack: error.stack,
        apiKeyConfigured: !!this.resend
      });
      return false;
    }
  }

  async sendWelcomeEmail(data: WelcomeEmailData): Promise<boolean> {
    try {
      const { error } = await this.resend.emails.send({
        from: `${this.fromName} <${this.fromEmail}>`,
        to: data.to,
        subject: 'Welcome to Buckeye Physical Therapy!',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Welcome to Buckeye Physical Therapy</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #10B981, #059669); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px;">Account Verified!</h1>
                <p style="color: #A7F3D0; margin: 10px 0 0 0; font-size: 16px;">Welcome to Buckeye Physical Therapy, ${data.firstName}!</p>
              </div>

              <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
                <h2 style="color: #10B981; margin-top: 0;">Your Recovery Journey Starts Here</h2>
                <p>Your email has been successfully verified! We look forward to helping you with your physical therapy needs.</p>

                <div style="margin: 25px 0;">
                  <h3 style="color: #333;">Our Services Include:</h3>
                  <div style="margin-bottom: 10px;">
                    <strong>Auto Accident Rehabilitation</strong> - Comprehensive care for motor vehicle injuries
                  </div>
                  <div style="margin-bottom: 10px;">
                    <strong>Work Injury Recovery</strong> - Get back to work safely
                  </div>
                  <div style="margin-bottom: 10px;">
                    <strong>Orthopedic Rehabilitation</strong> - Expert musculoskeletal care
                  </div>
                  <div>
                    <strong>General Physical Therapy</strong> - Personalized treatment plans
                  </div>
                </div>
              </div>

              <div style="background: #FEF3C7; padding: 20px; border-radius: 8px; border-left: 4px solid #F59E0B; margin-bottom: 25px;">
                <h3 style="color: #92400E; margin-top: 0;">Payment Options</h3>
                <p style="color: #92400E; margin: 0;">
                  We accept attorney liens and private pay. Contact us to learn more about your options.
                </p>
              </div>

              <div style="background: #EBF4FF; padding: 20px; border-radius: 8px; border-left: 4px solid #2563EB;">
                <h3 style="color: #2563EB; margin-top: 0;">Schedule Your Appointment</h3>
                <p>
                  <strong>Phone:</strong> (956) 476-5310<br>
                  <strong>Email:</strong> buckeyephysicaltherapy@gmail.com
                </p>
              </div>

              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="font-size: 12px; color: #999;">
                  &copy; ${new Date().getFullYear()} Buckeye Physical Therapy - Justin Lemmo, PT, DPT
                </p>
              </div>
            </body>
          </html>
        `,
      });

      if (error) {
        console.error('Welcome email error:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Failed to send welcome email:', error);
      return false;
    }
  }

  async sendPasswordResetEmail(to: string, firstName: string, resetToken: string, appUrl: string): Promise<boolean> {
    try {
      const resetUrl = `${appUrl}/reset-password?token=${resetToken}`;

      const { error } = await this.resend.emails.send({
        from: `${this.fromName} <${this.fromEmail}>`,
        to,
        subject: 'Reset Your Buckeye Physical Therapy Password',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Reset Your Password</title>
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #EF4444, #DC2626); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
                <h1 style="color: white; margin: 0; font-size: 28px;">Password Reset</h1>
                <p style="color: #FECACA; margin: 10px 0 0 0; font-size: 16px;">Buckeye Physical Therapy Account Security</p>
              </div>

              <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
                <h2 style="color: #EF4444; margin-top: 0;">Hi ${firstName},</h2>
                <p>We received a request to reset your Buckeye Physical Therapy account password. Click the button below to create a new password:</p>

                <div style="text-align: center; margin: 30px 0;">
                  <a href="${resetUrl}"
                     style="background: #EF4444; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; font-size: 16px;">
                    Reset My Password
                  </a>
                </div>

                <p style="font-size: 14px; color: #666;">
                  If the button doesn't work, copy and paste this link into your browser:<br>
                  <a href="${resetUrl}" style="color: #EF4444; word-break: break-all;">${resetUrl}</a>
                </p>
              </div>

              <div style="background: #FEE2E2; padding: 20px; border-radius: 8px; border-left: 4px solid #EF4444;">
                <h3 style="color: #DC2626; margin-top: 0;">Security Notice</h3>
                <ul style="margin: 0; padding-left: 20px; color: #DC2626;">
                  <li>This link will expire in 1 hour</li>
                  <li>If you didn't request this reset, ignore this email</li>
                  <li>Your current password remains unchanged until you create a new one</li>
                </ul>
              </div>

              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="font-size: 12px; color: #999;">
                  &copy; ${new Date().getFullYear()} Buckeye Physical Therapy - Justin Lemmo, PT, DPT
                </p>
              </div>
            </body>
          </html>
        `,
      });

      if (error) {
        console.error('Password reset email error:', error);
        return false;
      }

      return true;
    } catch (error) {
      console.error('Failed to send password reset email:', error);
      return false;
    }
  }
}

// Utility function to generate verification tokens
export const generateVerificationToken = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

// Utility function to validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
