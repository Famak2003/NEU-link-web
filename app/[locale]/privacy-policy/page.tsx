import React from 'react'

function PrivacyAndPolicy() {
    const year = new Date().getFullYear()


    return (
      <div className=' page '>
        <div className="max-w-4xl mx-auto px-6 py-12 bg-white">
            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                <div className="flex gap-6 text-sm text-gray-600">
                <p><span className="font-semibold">Effective Date:</span> {year}</p>
                <p><span className="font-semibold">Last Updated:</span> {year}</p>
                </div>
            </div>

            {/* Section 1 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to NEU Link Alumni Platform ("we," "our," "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our alumni networking platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                By using our platform, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not use our services.
                </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                
                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information You Provide</h3>
                
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Account Information:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Email address (required)</li>
                    <li>Password (encrypted and stored securely)</li>
                    <li>Name and surname</li>
                    <li>Backup email address</li>
                    <li>Profile photo/avatar</li>
                    <li>Phone number</li>
                    <li>Birthday</li>
                    <li>Gender (male, female, prefer not to say)</li>
                    <li>Nationality</li>
                    <li>City and country</li>
                    <li>LinkedIn profile URL</li>
                    <li>Personal bio/description</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Educational Information:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>School/university attended</li>
                    <li>Faculty and department</li>
                    <li>Student/diploma number</li>
                    <li>Turkish ID or passport number</li>
                    <li>Start and end dates of education</li>
                    <li>Graduation year</li>
                    <li>Verification status and verification details</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Professional Experience:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Company information</li>
                    <li>Job position and title</li>
                    <li>Industry</li>
                    <li>Employment start and end dates</li>
                    <li>Work location (city, country)</li>
                    <li>Personnel email (for NEU employment verification)</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Job Applications:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Job postings you create</li>
                    <li>Job applications you submit</li>
                    <li>Application history and status</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Content You Create:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Posts and content in the alumni feed</li>
                    <li>Saved posts and bookmarks</li>
                    <li>Comments and interactions</li>
                    </ul>
                </div>
                </div>

                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Information We Collect Automatically</h3>
                
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Technical Information:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Operating system</li>
                    <li>Time zone settings</li>
                    <li>User agent string</li>
                    <li>Request and response data</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Usage Information:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Pages visited and features used</li>
                    <li>Time spent on the platform</li>
                    <li>Click patterns and navigation paths</li>
                    <li>Search queries</li>
                    <li>Error logs and performance data</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Authentication Data:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Login timestamps</li>
                    <li>Session information</li>
                    <li>Two-factor authentication data</li>
                    <li>Password reset tokens and verification codes</li>
                    </ul>
                </div>
                </div>

                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Information from Third Parties</h3>
                
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Google Authentication:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Google account information (when using Google Sign-In)</li>
                    <li>Google profile picture (if available)</li>
                    <li>Google account verification status</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">NEU Genius System:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Student verification data</li>
                    <li>Academic records (when applicable)</li>
                    <li>Enrollment status</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Clerk Authentication Service:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Authentication tokens and session data</li>
                    <li>User verification information</li>
                    </ul>
                </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                
                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Primary Purposes</h3>
                
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Platform Operations:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Provide and maintain our alumni networking services</li>
                    <li>Create and manage user accounts</li>
                    <li>Verify alumni and student status</li>
                    <li>Enable communication between alumni</li>
                    <li>Facilitate job postings and applications</li>
                    <li>Manage educational and professional profiles</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Authentication and Security:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Verify user identity</li>
                    <li>Implement two-factor authentication</li>
                    <li>Prevent unauthorized access</li>
                    <li>Monitor for suspicious activity</li>
                    <li>Maintain account security</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Communication:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Send important platform updates</li>
                    <li>Provide customer support</li>
                    <li>Send verification emails</li>
                    <li>Notify about job opportunities</li>
                    <li>Share alumni network updates</li>
                    </ul>
                </div>
                </div>

                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Secondary Purposes</h3>
                
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Platform Improvement:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Analyze usage patterns to improve features</li>
                    <li>Develop new functionality</li>
                    <li>Optimize user experience</li>
                    <li>Conduct research and analytics</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Legal Compliance:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Comply with applicable laws and regulations</li>
                    <li>Respond to legal requests</li>
                    <li>Protect our rights and interests</li>
                    <li>Maintain audit logs for security purposes</li>
                    </ul>
                </div>
                </div>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                
                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 With Other Users</h3>
                
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Public Profile Information:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Name and surname</li>
                    <li>Profile photo</li>
                    <li>Professional information (current position, company)</li>
                    <li>Educational background</li>
                    <li>Location (city, country)</li>
                    <li>LinkedIn profile</li>
                    <li>Bio/description</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Alumni Network Features:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Job postings you create</li>
                    <li>Posts you share in the alumni feed</li>
                    <li>Professional achievements and updates</li>
                    </ul>
                </div>
                </div>

                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 With Service Providers</h3>
                
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Third-Party Services:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><span className="font-semibold">Sentry:</span> Error monitoring and performance tracking</li>
                    <li><span className="font-semibold">Azure Storage:</span> File and image storage</li>
                    <li><span className="font-semibold">Email Services:</span> Transactional and notification emails</li>
                    <li><span className="font-semibold">Google Services:</span> Authentication and profile data</li>
                    <li><span className="font-semibold">Clerk:</span> User authentication and session management</li>
                    </ul>
                </div>
                </div>

                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Legal Requirements</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                    We may disclose your information when required by law or to:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Comply with legal obligations</li>
                    <li>Respond to government requests</li>
                    <li>Protect our rights and property</li>
                    <li>Ensure user safety</li>
                    <li>Prevent fraud or abuse</li>
                </ul>
                </div>

                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4.4 Business Transfers</h3>
                <p className="text-gray-700 leading-relaxed">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction, subject to the same privacy protections.
                </p>
                </div>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                
                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Security Measures</h3>
                
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Technical Safeguards:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Secure password hashing using bcrypt</li>
                    <li>JWT tokens for secure authentication</li>
                    <li>Regular security updates and patches</li>
                    <li>Access controls and authentication requirements</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Operational Safeguards:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Limited access to personal data on a need-to-know basis</li>
                    <li>Regular security audits and assessments</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                    </ul>
                </div>
                </div>

                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Data Retention</h3>
                <ul className="list-none space-y-2 text-gray-700">
                    <li><span className="font-semibold">Account Data:</span> Retained while your account is active and for a reasonable period after account closure for legal and business purposes.</li>
                    <li><span className="font-semibold">Audit Logs:</span> Retained for security and compliance purposes as required by law.</li>
                    <li><span className="font-semibold">Deleted Data:</span> When you delete your account, we will remove your personal information, though some data may be retained in backups or for legal compliance.</li>
                </ul>
                </div>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
                
                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.1 Access and Control</h3>
                
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Account Management:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Update your profile information</li>
                    <li>Change your password</li>
                    <li>Modify privacy settings</li>
                    <li>Delete your account</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Data Access:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Request a copy of your personal data</li>
                    <li>Review what information we have about you</li>
                    <li>Export your data</li>
                    </ul>
                </div>
                </div>

                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.2 Communication Preferences</h3>
                
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Email Settings:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Opt out of marketing communications</li>
                    <li>Manage notification preferences</li>
                    <li>Control verification email frequency</li>
                    </ul>
                </div>
                </div>

                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">6.3 Data Deletion</h3>
                
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Right to Erasure:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Request deletion of your personal data</li>
                    <li>Remove your profile from the platform</li>
                    <li>Delete uploaded content and images</li>
                    </ul>
                </div>
                
                <p className="text-gray-700 leading-relaxed mt-3">
                    To exercise any of these rights, please contact us using the information provided in the "Contact Us" section.
                </p>
                </div>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                
                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Cookies We Use</h3>
                
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Essential Cookies:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Authentication tokens</li>
                    <li>Session management</li>
                    <li>Security features</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Analytics Cookies:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Usage statistics</li>
                    <li>Performance monitoring</li>
                    <li>Error tracking</li>
                    </ul>
                </div>
                </div>

                <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Cookie Management</h3>
                <p className="text-gray-700 leading-relaxed">
                    You can control cookie settings through your browser preferences. However, disabling certain cookies may affect platform functionality.
                </p>
                </div>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data during such transfers, including:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Standard contractual clauses</li>
                <li>Adequacy decisions</li>
                <li>Appropriate technical and organizational measures</li>
                </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                Our platform is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us to have such information removed.
                </p>
            </section>

            {/* Section 10 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-3">
                <li>Posting the updated policy on our platform</li>
                <li>Sending email notifications to registered users</li>
                <li>Updating the "Last Updated" date</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                Your continued use of our services after changes become effective constitutes acceptance of the updated policy.
                </p>
            </section>

            {/* Section 11 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact Punica App Support Team:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-2 text-gray-700">
                <p><span className="font-semibold">Email:</span> privacy@punica.app</p>
                <p><span className="font-semibold">Address:</span> [Your Company Address]</p>
                <p><span className="font-semibold">Phone:</span> [Your Contact Phone]</p>
                <p><span className="font-semibold">Data Protection Officer:</span> [If applicable]</p>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                For data protection inquiries specifically, please use the subject line "Privacy Policy Inquiry" in your email.
                </p>
            </section>

            {/* Section 12 */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                This Privacy Policy is governed by the laws of [Your Jurisdiction] and any disputes will be resolved in the courts of [Your Jurisdiction].
                </p>
            </section>

            {/* Footer Note */}
            <div className="border-t pt-8 mt-12">
                <p className="text-gray-600 italic mb-4">
                <span className="font-semibold">Note:</span> This Privacy Policy is designed to be comprehensive and transparent about our data practices. We are committed to protecting your privacy and will continue to review and update our practices to ensure compliance with applicable laws and best practices.
                </p>
                <p className="text-sm text-gray-500">
                <span className="font-semibold">Last Updated:</span> {year}
                </p>
            </div>
        </div>
    </div>
    )
}

export default PrivacyAndPolicy