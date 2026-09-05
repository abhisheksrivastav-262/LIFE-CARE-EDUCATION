import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Phone } from 'lucide-react';

export default function EnquiryForm({ defaultCourse = '' }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    studentClass: 'Class 9',
    board: 'JAC Board',
    stream: 'Science',
    course: defaultCourse || 'School Tuition (Class 6-12)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedMessage =
      `Hello Life Care Education,\n\n` +
      `I would like to enquire about admission.\n\n` +
      `Student Name: ${formData.studentName || 'N/A'}\n` +
      `Parent/Guardian Name: ${formData.parentName || 'N/A'}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `Class: ${formData.studentClass || 'N/A'}\n` +
      `Board: ${formData.board || 'N/A'}\n` +
      `Stream: ${formData.stream || 'N/A'}\n` +
      `Course: ${formData.course || 'N/A'}\n` +
      `Message: ${formData.message || 'N/A'}\n\n` +
      `Please share admission details.`;

    const encoded = encodeURIComponent(formattedMessage);
    const targetUrl = `https://wa.me/916200093379?text=${encoded}`;

    setWhatsappUrl(targetUrl);
    setSubmitted(true);

    // Automatically trigger WhatsApp in a new window/tab
    window.open(targetUrl, '_blank');
  };

  return (
    <div className="enquiry-card-wrapper">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 24, textAlign: 'center' }}>
            <span className="section-label">Direct Admission Enquiry</span>
            <h3 className="text-heading-md" style={{ color: 'var(--purple-950)', marginTop: 8 }}>
              Start Your Admission Enquiry
            </h3>
            <p className="text-muted" style={{ fontSize: '0.9375rem' }}>
              Fill in your details below to connect directly with Academic Director <strong>Shahbaj Sir</strong> via WhatsApp or Call.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="studentName">Student Full Name *</label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                required
                className="form-input"
                placeholder="e.g. Rahul Kumar"
                value={formData.studentName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="parentName">Parent / Guardian Name *</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                required
                className="form-input"
                placeholder="e.g. Suresh Kumar"
                value={formData.parentName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid-2" style={{ gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone / WhatsApp Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                className="form-input"
                placeholder="10-digit Mobile Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="studentClass">Class / Standard *</label>
              <select
                id="studentClass"
                name="studentClass"
                className="form-select"
                value={formData.studentClass}
                onChange={handleChange}
              >
                <option value="Junior Academy (Class 1 to 5)">Junior Academy (Class 1 to 5)</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9 (Target Batch 2028)">Class 9 (Target Batch 2028)</option>
                <option value="Class 10 (Target Batch 2028)">Class 10 (Target Batch 2028)</option>
                <option value="Class 11 (Intermediate)">Class 11 (Intermediate)</option>
                <option value="Class 12 (Intermediate)">Class 12 (Intermediate)</option>
                <option value="Graduation / College Student">Graduation / College Student</option>
                <option value="Professional / Computer Student">Professional / Computer Student</option>
              </select>
            </div>
          </div>

          <div className="grid-3" style={{ gap: '1rem' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="board">Educational Board</label>
              <select
                id="board"
                name="board"
                className="form-select"
                value={formData.board}
                onChange={handleChange}
              >
                <option value="CBSE Board">CBSE Board</option>
                <option value="JAC Board">JAC Board</option>
                <option value="ICSE Board">ICSE Board</option>
                <option value="Non-Schooling Student">Non-Schooling Student</option>
                <option value="College / N/A">College / N/A</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="stream">Academic Stream</label>
              <select
                id="stream"
                name="stream"
                className="form-select"
                value={formData.stream}
                onChange={handleChange}
              >
                <option value="Science (Maths & Science)">Science (Maths & Science)</option>
                <option value="Commerce (Accounts & Eco)">Commerce (Accounts & Eco)</option>
                <option value="Arts (Humanities)">Arts (Humanities)</option>
                <option value="Computer & Skill Course">Computer & Skill Course</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="course">Course Interested In</label>
              <select
                id="course"
                name="course"
                className="form-select"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="School Tuition (Class 6-12)">School Tuition (Class 6-12)</option>
                <option value="Target Batch 2028 (Class 9-10)">Target Batch 2028 (Class 9-10)</option>
                <option value="Junior Academy (Class 1-5)">Junior Academy (Class 1-5)</option>
                <option value="Intermediate Class 11-12">Intermediate Class 11-12</option>
                <option value="DCA Computer Course">DCA Computer Course</option>
                <option value="DTP Desktop Publishing">DTP Desktop Publishing</option>
                <option value="Tally & Accounting">Tally & Accounting</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="Animation & VFX">Animation & VFX</option>
                <option value="AI & Modern Technology">AI & Modern Technology</option>
                <option value="Java Programming">Java Programming</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Additional Message / Query (Optional)</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Mention any specific requirements, batch timings or subject guidance needed..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button type="submit" className="btn btn-primary btn-lg" style={{ flex: 1, justifyContent: 'center' }}>
              <Send size={18} />
              <span>Submit Enquiry via WhatsApp</span>
            </button>
            <a href="tel:6200093379" className="btn btn-outline btn-lg" style={{ justifyContent: 'center' }}>
              <Phone size={18} />
              <span>Call 6200093379</span>
            </a>
          </div>

          <div style={{ marginTop: 12, textAlign: 'center', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
            🔒 Your details are safe with Life Care Education, Ranchi.
          </div>
        </form>
      ) : (
        <div className="enquiry-success-box">
          <div className="enquiry-success-icon">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-heading-md" style={{ color: 'var(--purple-950)', marginBottom: 8 }}>
            Enquiry Prepared Successfully!
          </h3>
          <p className="text-body" style={{ color: 'var(--text-muted)', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px' }}>
            Your details have been formatted for instant review. Click below if WhatsApp did not open automatically.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <MessageCircle size={20} />
              <span>Continue to WhatsApp (+91 6200093379)</span>
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="btn btn-outline btn-lg"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
