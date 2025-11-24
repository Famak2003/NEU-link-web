import React from 'react'

function TermsAndConditions() {
    const year = new Date().getFullYear()

    return (
        <div className=' page '>
          <div className="max-w-4xl mx-auto text-gray-800 leading-relaxed">
            {/* Header */}
            <header className="mb-10">
              <h1 className="text-4xl font-bold mb-2">Terms of Use and Conditions</h1>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Effective Date:</span> December 2024{" "}
                <span className="mx-2">|</span>
                <span className="font-semibold">Last Updated:</span> December 2024
              </p>
            </header>

            {/* Section Helper */}
            {[
              {
                title: "1. Acceptance of Terms",
                content: (
                  <>
                    <p className="mb-4">
                      By accessing or using the NEU Link Alumni Platform ("Platform,"
                      "Service," "we," "our," "us"), you agree to be bound by these
                      Terms of Use and Conditions ("Terms"). If you do not agree to
                      these Terms, you may not access or use our Service.
                    </p>
                    <p>
                      These Terms constitute a legally binding agreement between you
                      and NEU Link Alumni Platform. Your continued use of the Service
                      constitutes acceptance of any modifications to these Terms.
                    </p>
                  </>
                ),
              },
              {
                title: "2. Description of Service",
                content: (
                  <>
                    <p className="mb-3">
                      NEU Link Alumni Platform is a professional networking and
                      communication platform designed for:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Current students of Near East University (NEU)</li>
                      <li>Alumni of Near East University</li>
                      <li>University personnel and staff</li>
                      <li>Verified members of the NEU community</li>
                    </ul>
                    <p className="mb-3">The Platform provides features including but not limited to:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Professional networking and alumni connections</li>
                      <li>Job posting and application management</li>
                      <li>Educational and professional profile management</li>
                      <li>Alumni feed and content sharing</li>
                      <li>Verification services for academic credentials</li>
                      <li>Communication tools and messaging</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "3. Eligibility and Account Requirements",
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">3.1 Eligibility</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Be at least 13 years of age</li>
                      <li>Have a valid email address</li>
                      <li>
                        Be a current student, alumni, or personnel of Near East
                        University
                      </li>
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the security of your credentials</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">3.2 Account Registration</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Provide accurate, current, and complete information</li>
                      <li>Maintain confidentiality of your credentials</li>
                      <li>Notify us immediately of unauthorized use</li>
                      <li>No multiple or shared accounts</li>
                      <li>We may terminate accounts at our discretion</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">3.3 Verification Process</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Student verification requires valid NEU student email</li>
                      <li>Alumni verification requires proof of graduation</li>
                      <li>Personnel verification requires staff email</li>
                      <li>Manual verification may be required</li>
                      <li>We may request additional documentation</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "4. User Responsibilities and Conduct",
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">4.1 Acceptable Use</h3>
                    <p className="mb-2">You agree NOT to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Violate laws or regulations</li>
                      <li>Infringe intellectual property</li>
                      <li>Post false or misleading info</li>
                      <li>Harass, threaten, or spam others</li>
                      <li>Post obscene or offensive content</li>
                      <li>Use automated systems to access the Platform</li>
                      <li>Interfere with Platform operations</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">4.2 Content Standards</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Be accurate and truthful</li>
                      <li>Comply with laws</li>
                      <li>Respect the rights and dignity of others</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">4.3 Professional Conduct</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Maintain professionalism and respect</li>
                      <li>Report inappropriate behavior</li>
                      <li>Respect privacy and personal data</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "5. Intellectual Property Rights",
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">5.1 Platform Content</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>
                        All original content is owned by NEU Link Alumni Platform
                      </li>
                      <li>Protected by copyright and trademark laws</li>
                      <li>No modification or redistribution without permission</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">5.2 User Content</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>You retain ownership of your posted content</li>
                      <li>
                        You grant us a non-exclusive license to use, display, and
                        distribute your content
                      </li>
                      <li>We may remove content that violates these Terms</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">5.3 Third-Party Content</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>
                        The Platform may contain links to third-party services; we are
                        not responsible for them
                      </li>
                      <li>
                        Use of such services is subject to their own terms and
                        policies
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                title: "6. Privacy and Data Protection",
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">6.1 Privacy Policy</h3>
                    <p className="mb-3">
                      Our collection and use of data is governed by our Privacy Policy.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">6.2 Data Security</h3>
                    <ul className="list-disc pl-6 mb-3 space-y-1">
                      <li>We implement reasonable security measures</li>
                      <li>You are responsible for account security</li>
                      <li>No guarantee of absolute security online</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">6.3 Data Retention</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Data retained as per our Privacy Policy</li>
                      <li>You may request deletion of your data</li>
                      <li>Some data may be retained for legal reasons</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "7. Job Postings and Applications",
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">7.1 Job Postings</h3>
                    <ul className="list-disc pl-6 mb-3 space-y-1">
                      <li>Must be legitimate employment opportunities</li>
                      <li>Must comply with labor laws</li>
                      <li>We may remove inappropriate postings</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">7.2 Job Applications</h3>
                    <ul className="list-disc pl-6 mb-3 space-y-1">
                      <li>Handled directly between applicant and employer</li>
                      <li>We are not responsible for hiring decisions</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">7.3 Professional Networking</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Used for professional purposes only</li>
                      <li>Respect others’ professional boundaries</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "8. Account Termination and Suspension",
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">8.1 Termination by User</h3>
                    <ul className="list-disc pl-6 mb-3 space-y-1">
                      <li>You may terminate your account anytime</li>
                      <li>Some data may be retained for legal reasons</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">8.2 Termination by Platform</h3>
                    <ul className="list-disc pl-6 mb-3 space-y-1">
                      <li>We may terminate accounts for violations or fraud</li>
                      <li>Accounts may be suspended for abuse or harm</li>
                    </ul>
                    <h3 className="text-xl font-semibold mb-2">8.3 Effect of Termination</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Access ceases immediately</li>
                      <li>Data may be deleted after termination</li>
                    </ul>
                  </>
                ),
              },
              {
                title: "9. Disclaimers and Limitations of Liability",
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">9.1 Service Availability</h3>
                    <p className="mb-3">
                      We cannot guarantee uninterrupted or error-free access to the
                      Platform.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">9.3 Limitation of Liability</h3>
                    <ul className="list-disc pl-6 mb-3 space-y-1">
                      <li>Service provided “as is”</li>
                      <li>We disclaim all warranties</li>
                      <li>
                        We are not liable for indirect or consequential damages
                      </li>
                    </ul>
                  </>
                ),
              },
              {
                title: "10. Indemnification",
                content: (
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Your use of the Platform</li>
                    <li>Your violation of these Terms</li>
                    <li>Content you post that infringes on third-party rights</li>
                  </ul>
                ),
              },
              {
                title: "11. Dispute Resolution",
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">11.1 Governing Law</h3>
                    <p className="mb-2">These Terms are governed by applicable law.</p>
                    <h3 className="text-xl font-semibold mb-2">11.2 Arbitration</h3>
                    <p>
                      Any disputes may be resolved through binding arbitration under
                      the jurisdiction’s rules.
                    </p>
                  </>
                ),
              },
              {
                title: "12. Modifications to Terms",
                content: (
                  <>
                    <p className="mb-2">
                      We may modify these Terms at any time, with notice via the
                      Platform.
                    </p>
                    <p>Continued use constitutes acceptance of updated Terms.</p>
                  </>
                ),
              },
              {
                title: "13. Severability",
                content: (
                  <p>
                    If any provision is found invalid, remaining provisions continue
                    in full effect.
                  </p>
                ),
              },
              {
                title: "14. Entire Agreement",
                content: (
                  <p>
                    These Terms and the Privacy Policy constitute the entire agreement
                    between you and NEU Link Alumni Platform.
                  </p>
                ),
              },
              {
                title: "15. Contact Information",
                content: (
                  <>
                    <p className="mb-2">
                      For legal or terms-related inquiries, please contact Punica App Support Team:
                    </p>
                    <p>
                      <strong>Email:</strong> privacy@punica.app
                    </p>
                  </>
                ),
              },
              {
                title: "16. Additional Provisions",
                content: (
                  <>
                    <h3 className="text-xl font-semibold mb-2">16.1 Force Majeure</h3>
                    <p className="mb-2">
                      We are not liable for delays caused by events beyond our
                      control.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">16.2 Waiver</h3>
                    <p>Failure to enforce a term does not waive future enforcement.</p>
                  </>
                ),
              },
            ].map((section, i) => (
              <section key={i} className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
                <div>{section.content}</div>
              </section>
            ))}

            <footer className="border-t pt-6 text-sm text-gray-600">
              <p>
                <strong>By using NEU Link Alumni Platform,</strong> you acknowledge
                that you have read, understood, and agree to these Terms of Use and
                Conditions.
              </p>
            </footer>
          </div>
        </div>
    )
}

export default TermsAndConditions