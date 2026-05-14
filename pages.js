const Pages = {
adminDashboard(){return `
<div class="flex items-center justify-between mb-2"><h1 style="font-size:1.5rem">School Overview</h1>
  <div class="flex gap-1"><button class="btn btn-primary btn-sm">+ Add Student</button><button class="btn btn-outline btn-sm">+ Add Counselor</button><button class="btn btn-outline btn-sm">📥 Generate Report</button></div>
</div>
<div class="stats-grid">
  <div class="stat-card"><div class="stat-icon blue">👤</div><div class="stat-value">284</div><div class="stat-label">Total Students</div><div class="stat-change up">↑ 12% this month</div></div>
  <div class="stat-card"><div class="stat-icon green">👩‍🏫</div><div class="stat-value">18</div><div class="stat-label">Active Counselors</div><div class="stat-change up">↑ 2 new</div></div>
  <div class="stat-card"><div class="stat-icon yellow">📝</div><div class="stat-value">142</div><div class="stat-label">Applications</div><div class="stat-change up">↑ 8%</div></div>
  <div class="stat-card"><div class="stat-icon red">⚠️</div><div class="stat-value">23</div><div class="stat-label">Missing Documents</div><div class="stat-change down">↓ 5 resolved</div></div>
</div>
<div class="grid-23">
  <div class="card"><div class="card-header"><h3>Student Activity</h3><a href="#" class="text-blue text-sm">View All</a></div>
    <table><thead><tr><th>Student</th><th>Counselor</th><th>Readiness</th><th>Applications</th><th>Status</th></tr></thead><tbody>
    <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#2563EB">AJ</div>Ava Johnson</td><td>Sarah Chen</td><td>85%</td><td>3</td><td><span class="badge-status green">On Track</span></td></tr>
    <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#6366f1">LM</div>Liam Martinez</td><td>Mark Davis</td><td>62%</td><td>1</td><td><span class="badge-status yellow">Needs Review</span></td></tr>
    <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#ec4899">SP</div>Sophia Patel</td><td>Sarah Chen</td><td>91%</td><td>4</td><td><span class="badge-status green">On Track</span></td></tr>
    <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#f59e0b">NK</div>Noah Kim</td><td>Lisa Wong</td><td>45%</td><td>0</td><td><span class="badge-status red">At Risk</span></td></tr>
    <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#22c55e">EW</div>Emma Wilson</td><td>Mark Davis</td><td>78%</td><td>3</td><td><span class="badge-status green">On Track</span></td></tr>
    </tbody></table>
  </div>
  <div>
    <div class="card mb-2"><div class="card-header"><h3>Readiness Overview</h3></div>
      <div class="bar-chart" style="height:140px">
        <div class="bar" style="height:15%;background:var(--danger)"><span class="bar-val">8</span><span class="bar-label">0-40</span></div>
        <div class="bar" style="height:25%;background:var(--warn)"><span class="bar-val">24</span><span class="bar-label">41-60</span></div>
        <div class="bar" style="height:45%;background:var(--blue)"><span class="bar-val">98</span><span class="bar-label">61-80</span></div>
        <div class="bar" style="height:80%;background:var(--success)"><span class="bar-val">154</span><span class="bar-label">81-100</span></div>
      </div>
    </div>
    <div class="card"><div class="card-header"><h3>Pending Tasks</h3></div>
      <div class="task-card"><div class="task-check"></div><div class="task-info"><div class="task-name">Review 5 transcripts</div><div class="task-due">Due today</div></div><span class="task-priority high">High</span></div>
      <div class="task-card"><div class="task-check"></div><div class="task-info"><div class="task-name">Approve counselor reports</div><div class="task-due">Due tomorrow</div></div><span class="task-priority medium">Medium</span></div>
      <div class="task-card"><div class="task-check done">✓</div><div class="task-info"><div class="task-name">Send parent notifications</div><div class="task-due">Completed</div></div><span class="task-priority low">Low</span></div>
    </div>
  </div>
</div>`;},

counselorDashboard(){return `
<div class="flex items-center justify-between mb-2"><h1 style="font-size:1.5rem">Good morning, Sarah 👋</h1>
  <div class="flex gap-1"><button class="btn btn-primary btn-sm">+ Add Session Note</button><button class="btn btn-outline btn-sm">Review Documents</button></div>
</div>
<div class="stats-grid">
  <div class="stat-card"><div class="stat-icon blue">👤</div><div class="stat-value">42</div><div class="stat-label">Assigned Students</div><div class="stat-change up">↑ 3 new</div></div>
  <div class="stat-card"><div class="stat-icon green">📅</div><div class="stat-value">8</div><div class="stat-label">Sessions This Week</div><div class="stat-change up">↑ 2 more</div></div>
  <div class="stat-card"><div class="stat-icon yellow">📝</div><div class="stat-value">15</div><div class="stat-label">Pending Reviews</div><div class="stat-change down">↓ 3</div></div>
  <div class="stat-card"><div class="stat-icon red">🔔</div><div class="stat-value">4</div><div class="stat-label">Readiness Alerts</div><div class="stat-change down">Needs attention</div></div>
</div>
<div class="grid-23">
  <div>
    <div class="card mb-2"><div class="card-header"><h3>My Students Progress</h3><a class="text-blue text-sm" data-page="students">View All</a></div>
      <table><thead><tr><th>Student</th><th>Grade</th><th>Readiness</th><th>Next Step</th><th>Status</th></tr></thead><tbody>
      <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#2563EB">AJ</div>Ava Johnson</td><td>12th</td><td><div class="progress-bar" style="width:80px"><div class="fill blue" style="width:85%"></div></div></td><td class="text-sm">Essay review</td><td><span class="badge-status green">On Track</span></td></tr>
      <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#ec4899">SP</div>Sophia Patel</td><td>12th</td><td><div class="progress-bar" style="width:80px"><div class="fill green" style="width:91%"></div></div></td><td class="text-sm">Final review</td><td><span class="badge-status green">On Track</span></td></tr>
      <tr><td class="flex items-center gap-1"><div class="avatar-sm" style="background:#f59e0b">NK</div>Noah Kim</td><td>11th</td><td><div class="progress-bar" style="width:80px"><div class="fill red" style="width:45%"></div></div></td><td class="text-sm">Schedule meeting</td><td><span class="badge-status red">At Risk</span></td></tr>
      </tbody></table>
    </div>
    <div class="card"><div class="card-header"><h3>Application Progress</h3></div>
      <div class="pipeline">
        <div class="pipeline-stage done"><span class="stage-count">12</span>Interested</div>
        <div class="pipeline-stage done"><span class="stage-count">8</span>Researching</div>
        <div class="pipeline-stage active"><span class="stage-count">15</span>Preparing</div>
        <div class="pipeline-stage"><span class="stage-count">6</span>Applying</div>
        <div class="pipeline-stage"><span class="stage-count">5</span>Submitted</div>
        <div class="pipeline-stage"><span class="stage-count">2</span>Accepted</div>
        <div class="pipeline-stage"><span class="stage-count">0</span>Enrolled</div>
      </div>
    </div>
  </div>
  <div>
    <div class="card mb-2"><div class="card-header"><h3>Today's Schedule</h3></div>
      <div class="timeline">
        <div class="timeline-item"><div class="tl-date">10:00 AM</div><div class="tl-title">Session — Noah Kim</div><div class="tl-desc">Initial assessment</div></div>
        <div class="timeline-item"><div class="tl-date">1:00 PM</div><div class="tl-title">Essay Review — Ava J.</div><div class="tl-desc">Personal statement draft 3</div></div>
        <div class="timeline-item"><div class="tl-date">3:30 PM</div><div class="tl-title">Parent Call — Kim family</div><div class="tl-desc">Application strategy</div></div>
      </div>
    </div>
    <div class="card"><div class="card-header"><h3>Quick Actions</h3></div>
      <button class="btn btn-outline btn-sm w-full mb-1">📝 Update Milestone</button>
      <button class="btn btn-outline btn-sm w-full mb-1">🏛 Shortlist University</button>
      <button class="btn btn-outline btn-sm w-full mb-1">💬 Send Message</button>
      <button class="btn btn-outline btn-sm w-full">📁 Review Documents</button>
    </div>
  </div>
</div>`;},

studentDashboard(){return `
<div class="flex items-center justify-between mb-2"><h1 style="font-size:1.5rem">Welcome back, Ava 🎓</h1>
  <div class="flex gap-1"><button class="btn btn-primary btn-sm">📄 Upload Document</button><button class="btn btn-outline btn-sm">🏛 View Universities</button></div>
</div>
<div class="stats-grid">
  <div class="stat-card"><div class="stat-icon blue">📈</div><div class="stat-value">85</div><div class="stat-label">Readiness Score</div><div class="stat-change up">↑ 3 points</div></div>
  <div class="stat-card"><div class="stat-icon yellow">⏳</div><div class="stat-value">4</div><div class="stat-label">Pending Tasks</div><div class="stat-change down">Due this week</div></div>
  <div class="stat-card"><div class="stat-icon green">📝</div><div class="stat-value">3/6</div><div class="stat-label">Apps Submitted</div><div class="stat-change up">↑ 50%</div></div>
  <div class="stat-card"><div class="stat-icon blue">📅</div><div class="stat-value">Nov 1</div><div class="stat-label">Next Deadline</div><div class="stat-change down">MIT EA</div></div>
</div>
<div class="grid-23">
  <div>
    <div class="card mb-2"><div class="card-header"><h3>My Applications</h3><a class="text-blue text-sm">Track All</a></div>
      <div class="pipeline">
        <div class="pipeline-stage done"><span class="stage-count">2</span>Interested</div>
        <div class="pipeline-stage done"><span class="stage-count">1</span>Researching</div>
        <div class="pipeline-stage active"><span class="stage-count">2</span>Preparing</div>
        <div class="pipeline-stage"><span class="stage-count">1</span>Submitted</div>
        <div class="pipeline-stage"><span class="stage-count">0</span>Accepted</div>
      </div>
      <table><thead><tr><th>University</th><th>Type</th><th>Deadline</th><th>Status</th></tr></thead><tbody>
      <tr><td class="fw-600">MIT</td><td><span class="badge-status blue">EA</span></td><td>Nov 1</td><td><span class="badge-status yellow">In Progress</span></td></tr>
      <tr><td class="fw-600">Stanford</td><td><span class="badge-status blue">REA</span></td><td>Nov 1</td><td><span class="badge-status yellow">Preparing</span></td></tr>
      <tr><td class="fw-600">NYU</td><td><span class="badge-status gray">RD</span></td><td>Jan 5</td><td><span class="badge-status green">Submitted</span></td></tr>
      </tbody></table>
    </div>
    <div class="card"><div class="card-header"><h3>My Tasks</h3></div>
      <div class="task-card"><div class="task-check"></div><div class="task-info"><div class="task-name">Finalize personal statement</div><div class="task-due">Due: May 20</div></div><span class="task-priority high">High</span></div>
      <div class="task-card"><div class="task-check"></div><div class="task-info"><div class="task-name">Request recommendation — Ms. Parker</div><div class="task-due">Due: Jun 1</div></div><span class="task-priority medium">Medium</span></div>
      <div class="task-card"><div class="task-check done">✓</div><div class="task-info"><div class="task-name">Upload SAT score report</div><div class="task-due">Completed</div></div><span class="task-priority low">Done</span></div>
    </div>
  </div>
  <div>
    <div class="card mb-2"><div class="card-header"><h3>Readiness Score</h3></div>
      <div class="score-ring"><svg width="160" height="160"><circle cx="80" cy="80" r="70" fill="none" stroke="#E2E8F0" stroke-width="10"/><circle cx="80" cy="80" r="70" fill="none" stroke="#2563EB" stroke-width="10" stroke-dasharray="${2*Math.PI*70*.85} ${2*Math.PI*70}" stroke-linecap="round"/></svg><div class="score-val"><div class="num">85</div><div class="label">out of 100</div></div></div>
    </div>
    <div class="card mb-2"><div class="card-header"><h3>Counselor Updates</h3></div>
      <div class="notif-item"><div class="notif-icon" style="background:var(--blue-light);color:var(--blue)">💬</div><div class="notif-content"><div class="notif-title">Sarah Chen</div><div class="notif-text">Great work on your essay draft! A few edits needed.</div><div class="notif-time">2 hours ago</div></div></div>
      <div class="notif-item"><div class="notif-icon" style="background:#f0fdf4;color:var(--success)">✅</div><div class="notif-content"><div class="notif-title">Document Approved</div><div class="notif-text">Your transcript has been verified</div><div class="notif-time">Yesterday</div></div></div>
    </div>
    <div class="card"><div class="card-header"><h3>University Shortlist</h3></div>
      <div class="doc-item"><div class="doc-icon" style="background:var(--blue-light);color:var(--blue)">🏛</div><div class="doc-info"><div class="doc-name">MIT</div><div class="doc-meta">Match: 72% · EA Nov 1</div></div></div>
      <div class="doc-item"><div class="doc-icon" style="background:var(--blue-light);color:var(--blue)">🏛</div><div class="doc-info"><div class="doc-name">Stanford</div><div class="doc-meta">Match: 68% · REA Nov 1</div></div></div>
      <div class="doc-item"><div class="doc-icon" style="background:#f0fdf4;color:var(--success)">🏛</div><div class="doc-info"><div class="doc-name">NYU</div><div class="doc-meta">Match: 89% · RD Jan 5</div></div></div>
    </div>
  </div>
</div>`;},

parentDashboard(){return `
<div class="parent-welcome"><h1>Welcome, Mr. & Mrs. Johnson 👋</h1><p>Here's an overview of Ava's college journey progress. This is a view-only portal.</p></div>
<div class="child-card"><div class="child-avatar">AJ</div><div class="child-info"><h3>Ava Johnson</h3><p>Grade 12 · Westfield Academy · Counselor: Sarah Chen</p></div><div class="child-score"><div class="cs-val">85</div><div class="cs-lbl">Readiness</div></div></div>
<div class="stats-grid" style="margin-top:1.25rem">
  <div class="stat-card"><div class="stat-icon blue">📝</div><div class="stat-value">3/6</div><div class="stat-label">Apps Submitted</div></div>
  <div class="stat-card"><div class="stat-icon green">📁</div><div class="stat-value">89%</div><div class="stat-label">Docs Complete</div></div>
  <div class="stat-card"><div class="stat-icon yellow">🎯</div><div class="stat-value">4/7</div><div class="stat-label">Milestones Done</div></div>
  <div class="stat-card"><div class="stat-icon blue">📅</div><div class="stat-value">2</div><div class="stat-label">Upcoming Meetings</div></div>
</div>
<div class="grid-2" style="margin-top:1.25rem">
  <div class="card"><div class="card-header"><h3>Recent Updates</h3></div>
    <div class="notif-item"><div class="notif-icon" style="background:var(--blue-light);color:var(--blue)">📝</div><div class="notif-content"><div class="notif-title">Essay draft reviewed</div><div class="notif-text">Counselor provided feedback on personal statement</div><div class="notif-time">2 hours ago</div></div></div>
    <div class="notif-item"><div class="notif-icon" style="background:#f0fdf4;color:var(--success)">✅</div><div class="notif-content"><div class="notif-title">NYU application submitted</div><div class="notif-text">Regular Decision application completed</div><div class="notif-time">Yesterday</div></div></div>
    <div class="notif-item"><div class="notif-icon" style="background:#fefce8;color:var(--warn)">📅</div><div class="notif-content"><div class="notif-title">Meeting scheduled</div><div class="notif-text">Parent-counselor meeting on May 16</div><div class="notif-time">2 days ago</div></div></div>
  </div>
  <div>
    <div class="card mb-2"><div class="card-header"><h3>Progress Chart</h3></div>
      <div style="font-size:.85rem">
        <div class="mb-1"><div class="flex justify-between"><span>Documents</span><span class="fw-600">89%</span></div><div class="progress-bar"><div class="fill blue" style="width:89%"></div></div></div>
        <div class="mb-1"><div class="flex justify-between"><span>Applications</span><span class="fw-600">50%</span></div><div class="progress-bar"><div class="fill yellow" style="width:50%"></div></div></div>
        <div class="mb-1"><div class="flex justify-between"><span>Milestones</span><span class="fw-600">57%</span></div><div class="progress-bar"><div class="fill blue" style="width:57%"></div></div></div>
        <div><div class="flex justify-between"><span>Readiness</span><span class="fw-600">85%</span></div><div class="progress-bar"><div class="fill green" style="width:85%"></div></div></div>
      </div>
    </div>
    <div class="card"><div class="card-header"><h3>Actions</h3></div>
      <button class="btn btn-outline btn-sm w-full mb-1">📊 View Full Progress</button>
      <button class="btn btn-outline btn-sm w-full mb-1">📁 View Documents</button>
      <button class="btn btn-primary btn-sm w-full">💬 Contact Counselor</button>
    </div>
  </div>
</div>`;}
};
