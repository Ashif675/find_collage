// Student Profile, Documents, Applications, Milestones, Students list
Object.assign(Pages, {
students(){return `
<div class="flex items-center justify-between mb-2"><h1 style="font-size:1.5rem">Students</h1>
  <div class="flex gap-1"><select><option>All Grades</option><option>Grade 12</option><option>Grade 11</option></select><select><option>All Status</option><option>On Track</option><option>Needs Review</option><option>At Risk</option></select><button class="btn btn-primary btn-sm">+ Add Student</button></div>
</div>
<div class="card">
  <table><thead><tr><th>Student</th><th>Grade</th><th>Counselor</th><th>Readiness</th><th>Applications</th><th>Docs</th><th>Status</th></tr></thead><tbody>
  <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#2563EB">AJ</div>Ava Johnson</td><td>12th</td><td>Sarah Chen</td><td>85%</td><td>3/6</td><td>89%</td><td><span class="badge-status green">On Track</span></td></tr>
  <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#6366f1">LM</div>Liam Martinez</td><td>11th</td><td>Mark Davis</td><td>62%</td><td>1/4</td><td>65%</td><td><span class="badge-status yellow">Needs Review</span></td></tr>
  <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#ec4899">SP</div>Sophia Patel</td><td>12th</td><td>Sarah Chen</td><td>91%</td><td>4/5</td><td>95%</td><td><span class="badge-status green">On Track</span></td></tr>
  <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#f59e0b">NK</div>Noah Kim</td><td>11th</td><td>Lisa Wong</td><td>45%</td><td>0/3</td><td>40%</td><td><span class="badge-status red">At Risk</span></td></tr>
  <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#22c55e">EW</div>Emma Wilson</td><td>12th</td><td>Mark Davis</td><td>78%</td><td>3/4</td><td>82%</td><td><span class="badge-status green">On Track</span></td></tr>
  <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#8b5cf6">OT</div>Olivia Taylor</td><td>12th</td><td>Sarah Chen</td><td>73%</td><td>2/5</td><td>70%</td><td><span class="badge-status yellow">Needs Review</span></td></tr>
  </tbody></table>
</div>`;},

profile(){return `
<div class="profile-header">
  <div class="profile-avatar">AJ</div>
  <div class="profile-info"><h1>Ava Johnson</h1><p>Grade 12 · Westfield Academy · GPA 3.92 · SAT 1480</p>
    <div class="profile-tags"><span class="profile-tag">Computer Science</span><span class="profile-tag">Early Decision</span><span class="profile-tag">Financial Aid</span></div>
  </div>
  <div class="profile-actions"><button class="btn btn-primary btn-sm">Edit Profile</button><button class="btn btn-outline btn-sm">💬 Message</button></div>
</div>
<div class="tabs"><div class="tab active">Overview</div><div class="tab">Academic</div><div class="tab">Activities</div><div class="tab">Notes</div><div class="tab">Timeline</div></div>
<div class="grid-23">
  <div>
    <div class="card mb-2"><div class="card-header"><h3>Student Information</h3></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;font-size:.875rem">
        <div><span class="text-muted text-xs">Full Name</span><br><strong>Ava Marie Johnson</strong></div>
        <div><span class="text-muted text-xs">Date of Birth</span><br><strong>March 15, 2008</strong></div>
        <div><span class="text-muted text-xs">Email</span><br><strong>ava.j@school.edu</strong></div>
        <div><span class="text-muted text-xs">Phone</span><br><strong>(555) 123-4567</strong></div>
        <div><span class="text-muted text-xs">Counselor</span><br><strong>Sarah Chen</strong></div>
        <div><span class="text-muted text-xs">Target Major</span><br><strong>Computer Science</strong></div>
      </div>
    </div>
    <div class="card mb-2"><div class="card-header"><h3>Application Status</h3></div>
      <div class="pipeline" style="margin-bottom:0">
        <div class="pipeline-stage done">Interested</div>
        <div class="pipeline-stage done">Researching</div>
        <div class="pipeline-stage active">Preparing</div>
        <div class="pipeline-stage">Applying</div>
        <div class="pipeline-stage">Submitted</div>
      </div>
    </div>
    <div class="card mb-2"><div class="card-header"><h3>Counselor Notes</h3></div>
      <div class="session-card" style="margin-bottom:0"><div class="session-header"><strong class="text-sm">Latest Note — Sarah Chen</strong><span class="text-xs text-muted">May 12, 2026</span></div>
        <div class="session-content">Ava is progressing well. Personal statement needs tightening in the conclusion. SAT score is strong. Need to finalize school list by end of month.</div>
        <div class="session-actions-list"><div class="session-action"><span class="check">☐</span> Revise essay conclusion</div><div class="session-action"><span class="check">☐</span> Finalize university list</div><div class="session-action"><span class="check">✓</span> Submit SAT scores</div></div>
      </div>
    </div>
    <div class="card"><div class="card-header"><h3>Missing Documents</h3></div>
      <div class="doc-item" style="border-color:var(--warn)"><div class="doc-icon" style="background:#fefce8;color:var(--warn)">⚠️</div><div class="doc-info"><div class="doc-name">Financial Aid Form</div><div class="doc-meta">Required · Not uploaded</div></div><button class="btn btn-outline btn-sm">Upload</button></div>
      <div class="doc-item" style="border-color:var(--warn)"><div class="doc-icon" style="background:#fefce8;color:var(--warn)">⚠️</div><div class="doc-info"><div class="doc-name">Recommendation — Mr. Lee (English)</div><div class="doc-meta">Requested · Pending</div></div><span class="badge-status yellow">Pending</span></div>
    </div>
  </div>
  <div>
    <div class="card mb-2"><div class="card-header"><h3>Readiness Score</h3></div>
      <div class="score-ring"><svg width="160" height="160"><circle cx="80" cy="80" r="70" fill="none" stroke="#E2E8F0" stroke-width="10"/><circle cx="80" cy="80" r="70" fill="none" stroke="#2563EB" stroke-width="10" stroke-dasharray="${2*Math.PI*70*.85} ${2*Math.PI*70}" stroke-linecap="round"/></svg><div class="score-val"><div class="num">85</div><div class="label">out of 100</div></div></div>
      <div style="margin-top:1rem;font-size:.825rem">
        <div class="mb-1"><div class="flex justify-between"><span>Academics</span><span class="fw-600">92%</span></div><div class="progress-bar"><div class="fill blue" style="width:92%"></div></div></div>
        <div class="mb-1"><div class="flex justify-between"><span>Essays</span><span class="fw-600">78%</span></div><div class="progress-bar"><div class="fill yellow" style="width:78%"></div></div></div>
        <div class="mb-1"><div class="flex justify-between"><span>Activities</span><span class="fw-600">85%</span></div><div class="progress-bar"><div class="fill blue" style="width:85%"></div></div></div>
        <div><div class="flex justify-between"><span>Test Scores</span><span class="fw-600">88%</span></div><div class="progress-bar"><div class="fill green" style="width:88%"></div></div></div>
      </div>
    </div>
    <div class="card mb-2"><div class="card-header"><h3>University Goals</h3></div>
      <div class="doc-item"><div class="doc-icon" style="background:#fef2f2;color:var(--danger)">🔴</div><div class="doc-info"><div class="doc-name">MIT</div><div class="doc-meta">Reach · Match 72%</div></div></div>
      <div class="doc-item"><div class="doc-icon" style="background:#fefce8;color:var(--warn)">🟡</div><div class="doc-info"><div class="doc-name">Stanford</div><div class="doc-meta">Reach · Match 68%</div></div></div>
      <div class="doc-item"><div class="doc-icon" style="background:#f0fdf4;color:var(--success)">🟢</div><div class="doc-info"><div class="doc-name">NYU</div><div class="doc-meta">Match · Match 89%</div></div></div>
    </div>
    <div class="card"><div class="card-header"><h3>Timeline</h3></div>
      <div class="timeline">
        <div class="timeline-item completed"><div class="tl-date">Sep 2025</div><div class="tl-title">Assessment</div><div class="tl-desc">Score: 62</div></div>
        <div class="timeline-item completed"><div class="tl-date">Dec 2025</div><div class="tl-title">SAT Received</div><div class="tl-desc">1480</div></div>
        <div class="timeline-item"><div class="tl-date">May 2026</div><div class="tl-title">Essay Final</div><div class="tl-desc">In progress</div></div>
      </div>
    </div>
  </div>
</div>`;},

documents(){return `
<div class="flex items-center justify-between mb-2">
  <div class="flex gap-1"><select><option>All Types</option><option>Transcripts</option><option>Essays</option><option>Recommendations</option><option>Test Scores</option></select><select><option>All Students</option><option>Ava Johnson</option><option>Liam Martinez</option></select><select><option>All Status</option><option>Verified</option><option>Pending</option><option>Missing</option></select></div>
  <button class="btn btn-primary btn-sm">📄 Upload Document</button>
</div>
<div class="stats-grid">
  <div class="stat-card"><div class="stat-icon blue">📁</div><div class="stat-value">156</div><div class="stat-label">Total Documents</div></div>
  <div class="stat-card"><div class="stat-icon green">✅</div><div class="stat-value">128</div><div class="stat-label">Verified</div></div>
  <div class="stat-card"><div class="stat-icon yellow">⏳</div><div class="stat-value">15</div><div class="stat-label">Pending Review</div></div>
  <div class="stat-card"><div class="stat-icon red">⚠️</div><div class="stat-value">13</div><div class="stat-label">Missing</div></div>
</div>
<div class="card">
  <div class="card-header"><h3>Document List</h3><span class="text-sm text-muted">Overall: 89% complete</span></div>
  <div class="progress-bar mb-2" style="height:10px"><div class="fill blue" style="width:89%"></div></div>
  <div class="doc-item"><div class="doc-icon pdf">📄</div><div class="doc-info"><div class="doc-name">Official Transcript — Ava Johnson</div><div class="doc-meta">PDF · 245 KB · May 10, 2026</div></div><span class="badge-status green">Verified</span><div class="doc-actions"><button class="btn btn-outline btn-sm">👁</button><button class="btn btn-outline btn-sm">⬇</button></div></div>
  <div class="doc-item"><div class="doc-icon doc">📝</div><div class="doc-info"><div class="doc-name">Personal Statement — Draft 3</div><div class="doc-meta">DOCX · 48 KB · May 12, 2026</div></div><span class="badge-status yellow">In Review</span><div class="doc-actions"><button class="btn btn-outline btn-sm">👁</button><button class="btn btn-outline btn-sm">⬇</button></div></div>
  <div class="doc-item"><div class="doc-icon doc">📝</div><div class="doc-info"><div class="doc-name">Recommendation — Ms. Parker</div><div class="doc-meta">DOCX · 32 KB · May 8, 2026</div></div><span class="badge-status green">Verified</span><div class="doc-actions"><button class="btn btn-outline btn-sm">👁</button><button class="btn btn-outline btn-sm">⬇</button></div></div>
  <div class="doc-item"><div class="doc-icon xls">📊</div><div class="doc-info"><div class="doc-name">SAT Score Report — Liam Martinez</div><div class="doc-meta">PDF · 120 KB · May 5, 2026</div></div><span class="badge-status green">Verified</span><div class="doc-actions"><button class="btn btn-outline btn-sm">👁</button><button class="btn btn-outline btn-sm">⬇</button></div></div>
  <div class="doc-item" style="border-color:var(--danger)"><div class="doc-icon" style="background:#fef2f2;color:var(--danger)">⚠️</div><div class="doc-info"><div class="doc-name">Financial Aid Form — Noah Kim</div><div class="doc-meta">Missing · Required for all applications</div></div><span class="badge-status red">Missing</span><div class="doc-actions"><button class="btn btn-outline btn-sm">📧 Remind</button></div></div>
</div>`;},

applications(){return `
<div class="flex items-center justify-between mb-2"><h1 style="font-size:1.5rem">Application Tracker</h1>
  <div class="flex gap-1"><select><option>All Students</option></select><button class="btn btn-primary btn-sm">+ New Application</button></div>
</div>
<div class="pipeline">
  <div class="pipeline-stage done"><span class="stage-count">12</span>Interested</div>
  <div class="pipeline-stage done"><span class="stage-count">8</span>Researching</div>
  <div class="pipeline-stage active"><span class="stage-count">15</span>Preparing</div>
  <div class="pipeline-stage"><span class="stage-count">10</span>Applying</div>
  <div class="pipeline-stage"><span class="stage-count">5</span>Submitted</div>
  <div class="pipeline-stage"><span class="stage-count">2</span>Accepted</div>
  <div class="pipeline-stage"><span class="stage-count">0</span>Enrolled</div>
</div>
<div class="card">
  <table><thead><tr><th>University</th><th>Student</th><th>Type</th><th>Deadline</th><th>Stage</th><th>Progress</th></tr></thead><tbody>
  <tr><td class="fw-600">MIT</td><td>Ava Johnson</td><td><span class="badge-status blue">EA</span></td><td>Nov 1, 2026</td><td><span class="badge-status yellow">Preparing</span></td><td><div class="progress-bar" style="width:80px"><div class="fill yellow" style="width:65%"></div></div></td></tr>
  <tr><td class="fw-600">Stanford</td><td>Ava Johnson</td><td><span class="badge-status blue">REA</span></td><td>Nov 1, 2026</td><td><span class="badge-status yellow">Preparing</span></td><td><div class="progress-bar" style="width:80px"><div class="fill yellow" style="width:50%"></div></div></td></tr>
  <tr><td class="fw-600">NYU</td><td>Emma Wilson</td><td><span class="badge-status gray">RD</span></td><td>Jan 5, 2027</td><td><span class="badge-status green">Submitted</span></td><td><div class="progress-bar" style="width:80px"><div class="fill green" style="width:100%"></div></div></td></tr>
  <tr><td class="fw-600">UC Berkeley</td><td>Liam Martinez</td><td><span class="badge-status gray">RD</span></td><td>Nov 30, 2026</td><td><span class="badge-status blue">Researching</span></td><td><div class="progress-bar" style="width:80px"><div class="fill blue" style="width:30%"></div></div></td></tr>
  <tr><td class="fw-600">Georgia Tech</td><td>Noah Kim</td><td><span class="badge-status blue">EA</span></td><td>Oct 15, 2026</td><td><span class="badge-status red">Missing Docs</span></td><td><div class="progress-bar" style="width:80px"><div class="fill red" style="width:15%"></div></div></td></tr>
  </tbody></table>
</div>`;},

milestones(){return `
<div class="flex items-center justify-between mb-2"><h1 style="font-size:1.5rem">Milestone Tracking</h1>
  <div class="flex gap-1"><select><option>Ava Johnson</option><option>All Students</option></select><button class="btn btn-primary btn-sm">+ Add Milestone</button></div>
</div>
<div class="grid-23">
  <div class="card"><div class="card-header"><h3>Timeline</h3></div>
    <div class="timeline">
      <div class="timeline-item completed"><div class="tl-date">Sep 2025</div><div class="tl-title">Initial Assessment Complete</div><div class="tl-desc">Baseline readiness score: 62</div></div>
      <div class="timeline-item completed"><div class="tl-date">Oct 2025</div><div class="tl-title">College List Finalized</div><div class="tl-desc">8 schools — 2 reach, 4 match, 2 safety</div></div>
      <div class="timeline-item completed"><div class="tl-date">Dec 2025</div><div class="tl-title">SAT Score Received</div><div class="tl-desc">1480 — 99th percentile</div></div>
      <div class="timeline-item completed"><div class="tl-date">Feb 2026</div><div class="tl-title">Personal Statement Draft 1</div><div class="tl-desc">First draft reviewed by counselor</div></div>
      <div class="timeline-item"><div class="tl-date">May 2026</div><div class="tl-title">Essay Final Review</div><div class="tl-desc">Polish supplemental essays</div></div>
      <div class="timeline-item"><div class="tl-date">Aug 2026</div><div class="tl-title">Applications Ready</div><div class="tl-desc">All materials prepared</div></div>
      <div class="timeline-item"><div class="tl-date">Nov 2026</div><div class="tl-title">Early Apps Submitted</div><div class="tl-desc">Submit EA/ED applications</div></div>
    </div>
  </div>
  <div>
    <div class="card mb-2"><div class="card-header"><h3>Progress</h3></div>
      <div style="text-align:center;padding:1rem"><div style="font-size:2.5rem;font-weight:800;color:var(--blue)">4/7</div><div class="text-muted text-sm">Milestones Done</div></div>
      <div class="progress-bar" style="height:12px"><div class="fill blue" style="width:57%"></div></div>
      <div class="text-muted text-xs mt-1">57% complete</div>
    </div>
    <div class="card mb-2"><div class="card-header"><h3>Upcoming Tasks</h3></div>
      <div class="task-card"><div class="task-check"></div><div class="task-info"><div class="task-name">Finalize personal statement</div><div class="task-due">Due: May 20</div></div><span class="task-priority high">High</span></div>
      <div class="task-card"><div class="task-check"></div><div class="task-info"><div class="task-name">Request recommendations</div><div class="task-due">Due: Jun 1</div></div><span class="task-priority medium">Medium</span></div>
      <div class="task-card"><div class="task-check"></div><div class="task-info"><div class="task-name">Complete activity list</div><div class="task-due">Due: Jun 15</div></div><span class="task-priority low">Low</span></div>
    </div>
    <div class="card"><div class="card-header"><h3>Reminders</h3></div>
      <div class="notif-item"><div class="notif-icon" style="background:#fef2f2;color:var(--danger)">🔴</div><div class="notif-content"><div class="notif-title">MIT EA Deadline</div><div class="notif-text">170 days remaining</div></div></div>
      <div class="notif-item"><div class="notif-icon" style="background:#fefce8;color:var(--warn)">🟡</div><div class="notif-content"><div class="notif-title">Essay Final Due</div><div class="notif-text">6 days remaining</div></div></div>
    </div>
  </div>
</div>`;}
});
