import React from "react";
import { C, F, R } from "../../lib/theme.js";
import { href, LINKS, PLANS, SITE, SKILLS_LABEL } from "../../lib/site.js";
import { SBarChart, SAreaChart, SLineChart, SPieChart, SHBarChart, Icon, Counter, DAB, FAQSection, Btn, Sec, SectionHead, Video, VideoLocal, PersonPlaceholder } from "../ui.jsx";
/* ═══ PRIVACY / EULA ═══ */
const Legal = ({ type }) =>
<>
    <section style={{ background: `radial-gradient(ellipse at 20% 0%, ${C.priL}25, transparent 50%), linear-gradient(170deg, ${C.dark}, ${C.pri})`, padding: "100px 24px 50px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h1 style={{ fontFamily: F, fontSize: 40, fontWeight: 800, color: C.w }}>{type === "privacy" ? "Privacy Policy" : "End User Licence Agreement"}</h1>
      </div>
    </section>
    <Sec>
      <div style={{ fontFamily: F, fontSize: 15, color: C.gD, lineHeight: 1.85, maxWidth: 720 }}>
        {type === "privacy" ?
      <>
            <p>EXL Cloud Holdings Pty Ltd is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.</p>
            <p style={{ marginTop: 18 }}>We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The APPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.</p>
            <p style={{ marginTop: 18 }}>A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: C.priA }}>www.oaic.gov.au</a></p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>What is Personal Information and why do we collect it?</h3>
            <p>Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect include names, addresses, email addresses and phone numbers.</p>
            <p style={{ marginTop: 18 }}>This Personal Information is obtained in many ways including interviews, correspondence, by telephone, by email, via our website exlcloud.io, from your website, from media and publications, from other publicly available sources, from cookies and from third parties. We do not guarantee website links or policy of authorised third parties.</p>
            <p style={{ marginTop: 18 }}>We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure. You may unsubscribe from our mailing/marketing lists at any time by contacting us in writing.</p>
            <p style={{ marginTop: 18 }}>When we collect Personal Information, we will, where appropriate and where possible, explain to you why we are collecting the information and how we plan to use it.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Sensitive Information</h3>
            <p>Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individual's racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record, or health information.</p>
            <p style={{ marginTop: 18 }}>Sensitive information will be used by us only:</p>
            <ul style={{ marginTop: 12, paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>For the primary purpose for which it was obtained</li>
              <li>For a secondary purpose that is related to the primary purpose</li>
              <li>With your consent; or where required or authorised by law.</li>
            </ul>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Third Parties</h3>
            <p>Where reasonable and practicable to do so, we will collect your Personal Information only from you. However, in some circumstances we may be provided with information by third parties. In such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Disclosure of Personal Information</h3>
            <ul style={{ marginTop: 12, paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>Third parties where you consent to the use or disclosure; and</li>
              <li>Where required or authorised by law.</li>
            </ul>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Security of Personal Information</h3>
            <p>Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorized access, modification, or disclosure.</p>
            <p style={{ marginTop: 18 }}>When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information. However, most of the Personal Information is or will be stored in client files which will be kept by us for a minimum of 7 years.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Access to your Personal Information</h3>
            <p>You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us in writing.</p>
            <p style={{ marginTop: 18 }}>EXL Cloud Holdings Pty Ltd will not charge any fee for your access request but may charge an administrative fee for providing a copy of your Personal Information.</p>
            <p style={{ marginTop: 18 }}>To protect your Personal Information, we may require identification from you before releasing the requested information.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Maintaining the Quality of your Personal Information</h3>
            <p>It is important to us that your Personal Information is up to date. We will take reasonable steps to make sure that your Personal Information is accurate, complete, and up to date. If you find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality services to you.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Policy Updates</h3>
            <p>This Policy may change from time to time and is available on our website.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Privacy Policy Complaints and Enquiries</h3>
            <p>If you have any queries or complaints about our Privacy Policy, please contact us.</p>
            <p style={{ marginTop: 18 }}>80 Market Street, South Melbourne VIC 3205<br />+61 405 329 098<br />info@exlcloud.io</p>
          </> :

      <>
            <p style={{ fontStyle: "italic", color: C.g }}>Last updated: 14 August 2022</p>
            <p style={{ marginTop: 18 }}>Please read this End-User License Agreement carefully before clicking the "I Agree" button, downloading or using EXL Cloud.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Interpretation and Definitions</h3>
            <p>The words of which the initial letter is capitalised have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            <h4 style={{ fontFamily: F, fontSize: 17, fontWeight: 700, color: C.dark, marginTop: 24, marginBottom: 10 }}>Definitions</h4>
            <ul style={{ marginTop: 12, paddingLeft: 24, display: "flex", flexDirection: "column", gap: 10 }}>
              <li><strong>"Agreement"</strong> means this End-User License Agreement that forms the entire agreement between You and the Company regarding the use of the Application.</li>
              <li><strong>"Application"</strong> means the software program provided by the Company downloaded by You through our website or the Applications Store account to a Device, named EXL Cloud.</li>
              <li><strong>"Application Store"</strong> means the digital distribution service operated and developed by Xero Limited or any other Company approved third-party marketplace.</li>
              <li><strong>"Company"</strong> (referred to as either "the Company", "We", "Us" or "Our") refers to EXL Cloud Holdings Pty Limited registered in Australia.</li>
              <li><strong>"Content"</strong> refers to content such as text, calculation logic, formulas, Excel workbooks, Power BI files, spreadsheets, data preparation processes, dashboards, reports, graphs, images, or other information.</li>
              <li><strong>"Country"</strong> refers to: Australia.</li>
              <li><strong>"Device"</strong> means any device that can access the Application or its Content such as a computer, a mobile device or similar hardware devices.</li>
              <li><strong>"Third-Party Services"</strong> means any services or content provided by a third-party that may be displayed, included or made available by the Application.</li>
              <li><strong>"You"</strong> means the individual or legal entity accessing or using the Application.</li>
            </ul>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Acknowledgment</h3>
            <p>By clicking the "I Agree" button, downloading or using the Application, You are agreeing to be bound by the terms and conditions of this Agreement. If You do not agree to the terms of this Agreement, do not click on the "I Agree" button, do not download, or do not use the Application.</p>
            <p style={{ marginTop: 18 }}>This Agreement is a legal document between You and the Company and it governs your use of the Application made available to You by the Company.</p>
            <p style={{ marginTop: 18 }}>The Application is licensed, not sold, to You by the Company for use strictly in accordance with the terms of this Agreement.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Scope of License</h3>
            <p>The Company grants You a revocable, non-exclusive, non-transferable, limited license to download, install and use the Application and Content strictly in accordance with the terms of this Agreement.</p>
            <p style={{ marginTop: 18 }}>The license is granted by downloading the Application either directly from the Company or from an approved Application Store under the Data Pull Plan or the Advanced Content Plan.</p>
            <p style={{ marginTop: 18 }}>The Application and Content are protected by intellectual property laws and treaties and are licensed not sold to You.</p>
            <p style={{ marginTop: 18 }}>The license that is granted to You by the Company is solely for your commercial or business purposes. The license granted provides you with the right to download, use, amend, extend or adjust the Content provided within your Application subscription.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>License Restrictions</h3>
            <p>You agree not to, and You will not permit others to:</p>
            <ul style={{ marginTop: 12, paddingLeft: 24, display: "flex", flexDirection: "column", gap: 10 }}>
              <li>License, sell, rent, lease, assign, distribute, transmit, transfer, host, outsource, disclose or otherwise commercially exploit the Application and Content or make the Application and Content available to any third party.</li>
              <li>Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of the Company or its affiliates, partners, suppliers or the licensors of the Application.</li>
              <li>You may not remove any protections including but not limited to VBA or Java protections used by the Application to prevent, limit or control access to this content.</li>
            </ul>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Intellectual Property</h3>
            <p>The Application and the associated Content, including without limitation all copyrights, patents, trademarks, trade secrets and other intellectual property rights are, and shall remain, the sole and exclusive property of the Company.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Modifications and Updates</h3>
            <p>The Company reserves the right to modify, suspend or discontinue, temporarily or permanently, the Application or any service to which it connects, with or without notice and without liability to You.</p>
            <p style={{ marginTop: 18 }}>The Company may from time to time provide enhancements or improvements to the features/functionality of the Application, which may include patches, bug fixes, updates, upgrades and other modifications.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Third-Party Services</h3>
            <p>The Application may display, include or make available third-party content or provide links to third-party websites or services. You acknowledge and agree that the Company shall not be responsible for any Third-party Services.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Term and Termination</h3>
            <p>This Agreement shall remain in effect until terminated by You or the Company. The Company may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice.</p>
            <p style={{ marginTop: 18 }}>Upon termination of this Agreement, You shall cease all use of the Application and delete all copies of the Application from your Device.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>No Warranties</h3>
            <p>The Application is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Application.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Limitation of Liability</h3>
            <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Agreement and your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You for the Application or 50 AUD if You haven't purchased anything through the Application.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Governing Law</h3>
            <p>The laws of the Country, excluding its conflicts of law rules, shall govern this Agreement and your use of the Application.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Changes to this Agreement</h3>
            <p>The Company reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>

            <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: C.dark, marginTop: 36, marginBottom: 12 }}>Contact Us</h3>
            <p>If you have any questions about this Agreement, You can contact Us:</p>
            <ul style={{ marginTop: 12, paddingLeft: 24, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>By visiting: <a href="https://exlcloud.io" target="_blank" rel="noopener noreferrer" style={{ color: C.priA }}>exlcloud.io</a></li>
              <li>By email: <a href="mailto:info@exlcloud.io" style={{ color: C.priA }}>info@exlcloud.io</a></li>
            </ul>
          </>
      }
      </div>
    </Sec>
  </>;

export default Legal;
