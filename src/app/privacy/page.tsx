import { SCHOOL_INFO } from "@/config/school";

export const metadata = {
  title: 'Privacy Policy | PMPSSS',
  description: 'How we collect and use your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-white">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Effective Date</h2>
            <p>Effective Date: August 1, 2025</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Collected</h2>
            <p>We collect your Name, phone number, email address, inquiry/application details submitted through the contact and admissions forms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">How It&apos;s Used</h2>
            <p>This data is used to respond to inquiries, process admissions applications, and communicate school information.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
            <p>Form submissions are retained for up to 12 months for admissions purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p>Email delivery is handled via Resend (resend.com). No data is sold or shared with advertisers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights under DPDP Act 2023</h2>
            <p>Users may request access to or deletion of their personal data by contacting the school.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact for Data Requests</h2>
            <p>For data-related requests, please contact us at: {SCHOOL_INFO.email}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <p>The school may update this policy; continued use of the site constitutes acceptance.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
