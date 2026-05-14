// Sessions, Universities, Readiness, Messages, Notifications, Reports, Settings
Object.assign(Pages, {
sessions(){return `
<div class="flex items-center justify-between mb-2"><h1 style="font-size:1.5rem">Session Notes</h1>
  <button class="btn btn-primary btn-sm">+ New Session Note</button>
</div>
<div class="grid-23">
  <div>
    <div class="card mb-2"><div class="card-header"><h3>New Note</h3></div>
      <div class="form-group"><label>Student</label><select style="width:100%"><option>Ava Johnson</option><option>Liam Martinez</option><option>Noah Kim</option></select></div>
      <div class="note-editor"><div class="note-toolbar"><button><b>B</b></button><button><i>I</i></button><button><u>U</u></button><button>📋</button><button>🔗</button><button>📌</button></div>
        <div class="note-body" contenteditable="true" style="color:var(--text2)">Start typing session notes here...</div>
      </div>
      <div class="form-group"><label>Tags</label><div class="flex gap-1"><span class="badge-status blue">Essay Review</span><span class="badge-status green">Progress Check</span><span class="badge-status gray">+ Add Tag</span></div></div>
      <div class="form-group"><label>Action Items</label>
        <div class="task-card"><div class="task-check"></div><div class="task-info"><input type="text" placeholder="Add action item..." style="border:none;background:transparent;font-size:.875rem;width:100%;outline:none;font-family:inherit"></div></div>
      </div>
      <div class="flex gap-1" style="justify-content:flex-end"><button class="btn btn-outline btn-sm">Cancel</button><button class="btn btn-primary btn-sm">Save Note</button></div>
    </div>
  </div>
  <div><div class="card"><div class="card-header"><h3>Recent Sessions</h3></div>
    <div class="session-card"><div class="session-header"><strong class="text-sm">Ava Johnson — Essay Review</strong><span class="text-xs text-muted">May 12, 2026</span></div>
      <div class="session-meta"><span>👩‍🏫 Sarah Chen</span><span>⏱ 45 min</span></div>
      <div class="session-content">Reviewed personal statement draft 3. Strong opening, conclusion needs work. Discussed MIT supplemental essay approach.</div>
      <div class="session-actions-list"><div class="session-action"><span class="check">☐</span> Revise conclusion paragraph</div><div class="session-action"><span class="check">✓</span> Research MIT essay prompts</div></div>
    </div>
    <div class="session-card"><div class="session-header"><strong class="text-sm">Noah Kim — Initial Assessment</strong><span class="text-xs text-muted">May 10, 2026</span></div>
      <div class="session-meta"><span>👩‍🏫 Lisa Wong</span><span>⏱ 60 min</span></div>
      <div class="session-content">First session. Student unsure about major. Discussed interests in engineering and business. Need to build activity profile.</div>
      <div class="session-actions-list"><div class="session-action"><span class="check">☐</span> Complete interest assessment</div><div class="session-action"><span class="check">☐</span> Research engineering programs</div></div>
    </div>
    <div class="session-card"><div class="session-header"><strong class="text-sm">Sophia Patel — Final Check</strong><span class="text-xs text-muted">May 8, 2026</span></div>
      <div class="session-meta"><span>👩‍🏫 Sarah Chen</span><span>⏱ 30 min</span></div>
      <div class="session-content">All applications nearly complete. Strong candidate. Discussed scholarship opportunities.</div>
      <div class="session-actions-list"><div class="session-action"><span class="check">✓</span> Submit scholarship applications</div></div>
    </div>
  </div></div>
</div>`;},

universities(){return `
<div class="flex items-center justify-between mb-2"><h1 style="font-size:1.5rem">University Shortlist</h1>
  <div class="flex gap-1"><select><option>All Countries</option><option>USA</option><option>UK</option></select><select><option>All Programs</option><option>Computer Science</option><option>Engineering</option></select><button class="btn btn-primary btn-sm">+ Add University</button></div>
</div>
<div class="grid-3">
  <div class="uni-card"><div class="uni-banner">🏛</div><div class="uni-body"><h4>MIT</h4><div class="uni-loc">Cambridge, MA · USA</div><div class="uni-stats"><div class="uni-stat">Match: <span>72%</span></div><div class="uni-stat">Accept: <span>4%</span></div></div><div class="uni-stats"><div class="uni-stat">Tuition: <span>$57K</span></div><div class="uni-stat">Deadline: <span>Nov 1</span></div></div><div class="uni-tags"><span class="badge-status blue">CS</span><span class="badge-status blue">Engineering</span></div><div class="flex gap-1"><button class="btn btn-outline btn-sm" style="flex:1">Remove</button><button class="btn btn-primary btn-sm" style="flex:1">Apply</button></div></div></div>
  <div class="uni-card"><div class="uni-banner" style="background:linear-gradient(135deg,#8b0000,#cc0000)">🏛</div><div class="uni-body"><h4>Stanford</h4><div class="uni-loc">Stanford, CA · USA</div><div class="uni-stats"><div class="uni-stat">Match: <span>68%</span></div><div class="uni-stat">Accept: <span>4%</span></div></div><div class="uni-stats"><div class="uni-stat">Tuition: <span>$56K</span></div><div class="uni-stat">Deadline: <span>Nov 1</span></div></div><div class="uni-tags"><span class="badge-status blue">CS</span><span class="badge-status green">AI/ML</span></div><div class="flex gap-1"><button class="btn btn-outline btn-sm" style="flex:1">Remove</button><button class="btn btn-primary btn-sm" style="flex:1">Apply</button></div></div></div>
  <div class="uni-card"><div class="uni-banner" style="background:linear-gradient(135deg,#003262,#fdb515)">🏛</div><div class="uni-body"><h4>UC Berkeley</h4><div class="uni-loc">Berkeley, CA · USA</div><div class="uni-stats"><div class="uni-stat">Match: <span>82%</span></div><div class="uni-stat">Accept: <span>12%</span></div></div><div class="uni-stats"><div class="uni-stat">Tuition: <span>$44K</span></div><div class="uni-stat">Deadline: <span>Nov 30</span></div></div><div class="uni-tags"><span class="badge-status blue">Engineering</span></div><div class="flex gap-1"><button class="btn btn-outline btn-sm" style="flex:1">Remove</button><button class="btn btn-primary btn-sm" style="flex:1">Apply</button></div></div></div>
  <div class="uni-card"><div class="uni-banner" style="background:linear-gradient(135deg,#57068c,#8b5cf6)">🏛</div><div class="uni-body"><h4>NYU</h4><div class="uni-loc">New York, NY · USA</div><div class="uni-stats"><div class="uni-stat">Match: <span>89%</span></div><div class="uni-stat">Accept: <span>13%</span></div></div><div class="uni-stats"><div class="uni-stat">Tuition: <span>$58K</span></div><div class="uni-stat">Deadline: <span>Jan 5</span></div></div><div class="uni-tags"><span class="badge-status yellow">Business</span><span class="badge-status green">Arts</span></div><div class="flex gap-1"><button class="btn btn-outline btn-sm" style="flex:1">Remove</button><button class="btn btn-primary btn-sm" style="flex:1">Apply</button></div></div></div>
  <div class="uni-card"><div class="uni-banner" style="background:linear-gradient(135deg,#b3a369,#003057)">🏛</div><div class="uni-body"><h4>Georgia Tech</h4><div class="uni-loc">Atlanta, GA · USA</div><div class="uni-stats"><div class="uni-stat">Match: <span>78%</span></div><div class="uni-stat">Accept: <span>17%</span></div></div><div class="uni-stats"><div class="uni-stat">Tuition: <span>$33K</span></div><div class="uni-stat">Deadline: <span>Oct 15</span></div></div><div class="uni-tags"><span class="badge-status blue">CS</span><span class="badge-status blue">Engineering</span></div><div class="flex gap-1"><button class="btn btn-outline btn-sm" style="flex:1">Remove</button><button class="btn btn-primary btn-sm" style="flex:1">Apply</button></div></div></div>
  <div class="uni-card"><div class="uni-banner" style="background:linear-gradient(135deg,#A51C30,#1E1E1E)">🏛</div><div class="uni-body"><h4>Harvard</h4><div class="uni-loc">Cambridge, MA · USA</div><div class="uni-stats"><div class="uni-stat">Match: <span>58%</span></div><div class="uni-stat">Accept: <span>3%</span></div></div><div class="uni-stats"><div class="uni-stat">Tuition: <span>$54K</span></div><div class="uni-stat">Deadline: <span>Nov 1</span></div></div><div class="uni-tags"><span class="badge-status blue">All Programs</span></div><div class="flex gap-1"><button class="btn btn-outline btn-sm" style="flex:1">Remove</button><button class="btn btn-primary btn-sm" style="flex:1">Apply</button></div></div></div>
</div>`;},

readiness(){return `
<div class="flex items-center justify-between mb-2"><h1 style="font-size:1.5rem">Readiness Dashboard</h1>
  <select><option>Ava Johnson</option><option>Liam Martinez</option><option>Noah Kim</option></select>
</div>
<div class="grid-23">
  <div>
    <div class="card mb-2">
      <div style="display:flex;align-items:center;gap:2rem">
        <div class="score-ring"><svg width="160" height="160"><circle cx="80" cy="80" r="70" fill="none" stroke="#E2E8F0" stroke-width="10"/><circle cx="80" cy="80" r="70" fill="none" stroke="#2563EB" stroke-width="10" stroke-dasharray="${2*Math.PI*70*.85} ${2*Math.PI*70}" stroke-linecap="round"/></svg><div class="score-val"><div class="num">85</div><div class="label">Ready</div></div></div>
        <div style="flex:1">
          <div class="mb-1"><div class="flex justify-between"><span class="text-sm">Documents</span><span class="text-sm fw-600">89/100</span></div><div class="progress-bar"><div class="fill blue" style="width:89%"></div></div></div>
          <div class="mb-1"><div class="flex justify-between"><span class="text-sm">Applications</span><span class="text-sm fw-600">75/100</span></div><div class="progress-bar"><div class="fill yellow" style="width:75%"></div></div></div>
          <div class="mb-1"><div class="flex justify-between"><span class="text-sm">Academics</span><span class="text-sm fw-600">92/100</span></div><div class="progress-bar"><div class="fill green" style="width:92%"></div></div></div>
          <div class="mb-1"><div class="flex justify-between"><span class="text-sm">Test Scores</span><span class="text-sm fw-600">88/100</span></div><div class="progress-bar"><div class="fill blue" style="width:88%"></div></div></div>
          <div><div class="flex justify-between"><span class="text-sm">Counselor Feedback</span><span class="text-sm fw-600">80/100</span></div><div class="progress-bar"><div class="fill green" style="width:80%"></div></div></div>
        </div>
      </div>
    </div>
    <div class="card"><div class="card-header"><h3>Score History</h3></div>
      <div class="bar-chart">
        <div class="bar" style="height:40%;background:var(--blue)"><span class="bar-val">52</span><span class="bar-label">Sep</span></div>
        <div class="bar" style="height:50%;background:var(--blue)"><span class="bar-val">62</span><span class="bar-label">Oct</span></div>
        <div class="bar" style="height:55%;background:var(--blue)"><span class="bar-val">68</span><span class="bar-label">Nov</span></div>
        <div class="bar" style="height:60%;background:var(--blue)"><span class="bar-val">72</span><span class="bar-label">Dec</span></div>
        <div class="bar" style="height:65%;background:var(--blue)"><span class="bar-val">75</span><span class="bar-label">Jan</span></div>
        <div class="bar" style="height:70%;background:var(--blue)"><span class="bar-val">78</span><span class="bar-label">Feb</span></div>
        <div class="bar" style="height:75%;background:var(--blue)"><span class="bar-val">80</span><span class="bar-label">Mar</span></div>
        <div class="bar" style="height:80%;background:var(--blue)"><span class="bar-val">82</span><span class="bar-label">Apr</span></div>
        <div class="bar" style="height:85%;background:var(--success)"><span class="bar-val">85</span><span class="bar-label">May</span></div>
      </div>
    </div>
  </div>
  <div>
    <div class="card mb-2"><div class="card-header"><h3>Recommendations</h3></div>
      <div class="doc-item" style="border-color:var(--warn)"><div class="doc-icon" style="background:#fefce8;color:var(--warn)">⚠️</div><div class="doc-info"><div class="doc-name">Complete financial aid form</div><div class="doc-meta">Document score impact: +5</div></div></div>
      <div class="doc-item" style="border-color:var(--warn)"><div class="doc-icon" style="background:#fefce8;color:var(--warn)">📝</div><div class="doc-info"><div class="doc-name">Strengthen essay conclusion</div><div class="doc-meta">Counselor feedback impact: +3</div></div></div>
      <div class="doc-item"><div class="doc-icon" style="background:#f0fdf4;color:var(--success)">✅</div><div class="doc-info"><div class="doc-name">Academic profile is strong</div><div class="doc-meta">Above average for targets</div></div></div>
    </div>
    <div class="card"><div class="card-header"><h3>Peer Comparison</h3></div>
      <div style="text-align:center;padding:1rem"><p class="text-sm">Score of <strong>85</strong> places Ava in the</p><div style="font-size:2rem;font-weight:800;color:var(--success);margin:.5rem 0">Top 15%</div><p class="text-sm">of students targeting similar programs</p></div>
    </div>
  </div>
</div>`;},

messages(){return `
<div class="msg-layout">
  <div class="msg-sidebar">
    <div class="msg-sidebar-header"><input placeholder="Search messages..." type="text"></div>
    <div class="msg-list">
      <div class="msg-contact active"><div class="avatar-sm" style="background:#2563EB">AJ</div><div class="msg-contact-info"><div class="msg-name">Ava Johnson</div><div class="msg-preview">Thanks for the feedback on my essay!</div></div><div style="text-align:right"><div class="msg-time">2m ago</div><div class="msg-unread">2</div></div></div>
      <div class="msg-contact"><div class="avatar-sm" style="background:#f59e0b">NK</div><div class="msg-contact-info"><div class="msg-name">Noah Kim</div><div class="msg-preview">When is our next session?</div></div><div class="msg-time">1h ago</div></div>
      <div class="msg-contact"><div class="avatar-sm" style="background:#ec4899">SP</div><div class="msg-contact-info"><div class="msg-name">Sophia Patel</div><div class="msg-preview">Application submitted!</div></div><div class="msg-time">3h ago</div></div>
      <div class="msg-contact"><div class="avatar-sm" style="background:#8b5cf6">MJ</div><div class="msg-contact-info"><div class="msg-name">Mrs. Johnson</div><div class="msg-preview">Thank you for the update</div></div><div class="msg-time">Yesterday</div></div>
      <div class="msg-contact"><div class="avatar-sm" style="background:#22c55e">EW</div><div class="msg-contact-info"><div class="msg-name">Emma Wilson</div><div class="msg-preview">I uploaded the recommendation letter</div></div><div class="msg-time">Yesterday</div></div>
    </div>
  </div>
  <div class="msg-main">
    <div class="msg-header"><div class="avatar-sm" style="background:#2563EB">AJ</div><div><div class="msg-header-name">Ava Johnson</div><div class="msg-header-status">● Online</div></div></div>
    <div class="msg-body">
      <div class="msg-bubble received">Hi Ms. Chen! I've updated my personal statement with the changes we discussed.<div class="msg-ts">10:15 AM</div></div>
      <div class="msg-bubble sent">Great work, Ava! I can see the improvements in the introduction. The narrative is much stronger now.<div class="msg-ts">10:22 AM</div></div>
      <div class="msg-bubble received">Thank you! Should I also update the MIT supplemental essay?<div class="msg-ts">10:25 AM</div></div>
      <div class="msg-bubble sent">Yes, please focus on the "Why MIT" prompt. Use specific research programs and faculty you're interested in.<div class="msg-ts">10:30 AM</div></div>
      <div class="msg-bubble received">Thanks for the feedback on my essay! I'll work on the MIT supplemental this weekend.<div class="msg-ts">10:32 AM</div></div>
    </div>
    <div class="msg-input-area"><input placeholder="Type a message..." type="text"><button>Send</button></div>
  </div>
</div>`;},

notifications(){return `
<div class="flex items-center justify-between mb-2">
  <div class="tabs" style="margin-bottom:0;border:none"><div class="tab active">All</div><div class="tab">Unread (5)</div><div class="tab">Mentions</div><div class="tab">System</div></div>
  <button class="btn btn-outline btn-sm">Mark all read</button>
</div>
<div class="card">
  <div class="notif-item unread"><div class="notif-icon" style="background:var(--blue-light);color:var(--blue)">📝</div><div class="notif-content"><div class="notif-title">New application submitted</div><div class="notif-text">Ava Johnson submitted her MIT Early Action application</div><div class="notif-time">10 minutes ago</div></div></div>
  <div class="notif-item unread"><div class="notif-icon" style="background:#f0fdf4;color:var(--success)">✅</div><div class="notif-content"><div class="notif-title">Document verified</div><div class="notif-text">Official transcript for Sophia Patel has been verified</div><div class="notif-time">1 hour ago</div></div></div>
  <div class="notif-item unread"><div class="notif-icon" style="background:#fefce8;color:var(--warn)">⚠️</div><div class="notif-content"><div class="notif-title">Deadline approaching</div><div class="notif-text">Georgia Tech EA deadline in 5 days — Noah Kim's app incomplete</div><div class="notif-time">2 hours ago</div></div></div>
  <div class="notif-item unread"><div class="notif-icon" style="background:var(--blue-light);color:var(--blue)">💬</div><div class="notif-content"><div class="notif-title">New message from parent</div><div class="notif-text">Mrs. Kim asked about financial aid options</div><div class="notif-time">3 hours ago</div></div></div>
  <div class="notif-item unread"><div class="notif-icon" style="background:#f0fdf4;color:var(--success)">📈</div><div class="notif-content"><div class="notif-title">Readiness score updated</div><div class="notif-text">Liam Martinez's score improved to 62 (+5)</div><div class="notif-time">5 hours ago</div></div></div>
  <div class="notif-item"><div class="notif-icon" style="background:#f3f4f6;color:var(--text2)">📅</div><div class="notif-content"><div class="notif-title">Meeting reminder</div><div class="notif-text">Parent-counselor meeting tomorrow at 10 AM</div><div class="notif-time">Yesterday</div></div></div>
  <div class="notif-item"><div class="notif-icon" style="background:#f3f4f6;color:var(--text2)">📁</div><div class="notif-content"><div class="notif-title">Document uploaded</div><div class="notif-text">Emma Wilson uploaded portfolio materials</div><div class="notif-time">2 days ago</div></div></div>
</div>`;},

reports(){return `
<div class="flex items-center justify-between mb-2"><h1 style="font-size:1.5rem">Reports & Analytics</h1>
  <div class="flex gap-1"><select><option>This Semester</option><option>Last Semester</option></select><button class="btn btn-primary btn-sm">📥 Export Report</button></div>
</div>
<div class="stats-grid">
  <div class="stat-card"><div class="stat-icon blue">👤</div><div class="stat-value">284</div><div class="stat-label">Active Students</div></div>
  <div class="stat-card"><div class="stat-icon green">✅</div><div class="stat-value">94%</div><div class="stat-label">Acceptance Rate</div></div>
  <div class="stat-card"><div class="stat-icon yellow">📊</div><div class="stat-value">78</div><div class="stat-label">Avg Readiness</div></div>
  <div class="stat-card"><div class="stat-icon blue">🏛</div><div class="stat-value">52</div><div class="stat-label">Universities</div></div>
</div>
<div class="grid-2">
  <div class="card"><div class="card-header"><h3>Readiness Distribution</h3></div>
    <div class="bar-chart">
      <div class="bar" style="height:15%;background:var(--danger)"><span class="bar-val">8</span><span class="bar-label">0-40</span></div>
      <div class="bar" style="height:30%;background:var(--warn)"><span class="bar-val">24</span><span class="bar-label">41-60</span></div>
      <div class="bar" style="height:50%;background:var(--blue)"><span class="bar-val">98</span><span class="bar-label">61-80</span></div>
      <div class="bar" style="height:85%;background:var(--success)"><span class="bar-val">154</span><span class="bar-label">81-100</span></div>
    </div>
  </div>
  <div class="card"><div class="card-header"><h3>Applications by Status</h3></div>
    <div class="bar-chart">
      <div class="bar" style="height:70%;background:var(--success)"><span class="bar-val">89</span><span class="bar-label">Submitted</span></div>
      <div class="bar" style="height:50%;background:var(--blue)"><span class="bar-val">53</span><span class="bar-label">In Progress</span></div>
      <div class="bar" style="height:20%;background:var(--warn)"><span class="bar-val">18</span><span class="bar-label">Pending</span></div>
      <div class="bar" style="height:10%;background:var(--danger)"><span class="bar-val">6</span><span class="bar-label">Overdue</span></div>
    </div>
  </div>
</div>
<div class="card mt-1"><div class="card-header"><h3>Top Students</h3></div>
  <table><thead><tr><th>Rank</th><th>Student</th><th>Readiness</th><th>Applications</th><th>Status</th></tr></thead><tbody>
  <tr><td>1</td><td class="fw-600">Sophia Patel</td><td>91</td><td>4 submitted</td><td><span class="badge-status green">Excellent</span></td></tr>
  <tr><td>2</td><td class="fw-600">Ava Johnson</td><td>85</td><td>3 submitted</td><td><span class="badge-status green">On Track</span></td></tr>
  <tr><td>3</td><td class="fw-600">Emma Wilson</td><td>78</td><td>3 submitted</td><td><span class="badge-status green">On Track</span></td></tr>
  </tbody></table>
</div>`;},

settings(){return `
<div class="settings-layout">
  <div class="settings-nav card">
    <div class="settings-nav-item active">General</div>
    <div class="settings-nav-item">Profile</div>
    <div class="settings-nav-item">Notifications</div>
    <div class="settings-nav-item">Security</div>
    <div class="settings-nav-item">Integrations</div>
    <div class="settings-nav-item">Billing</div>
  </div>
  <div class="settings-body">
    <div class="card">
      <div class="setting-group"><h3>General Settings</h3>
        <div class="setting-row"><div class="setting-label"><div class="sl-title">Language</div><div class="sl-desc">Preferred language</div></div><select><option>English (US)</option><option>Spanish</option></select></div>
        <div class="setting-row"><div class="setting-label"><div class="sl-title">Timezone</div><div class="sl-desc">Local timezone</div></div><select><option>Eastern (UTC-5)</option><option>Pacific (UTC-8)</option></select></div>
        <div class="setting-row"><div class="setting-label"><div class="sl-title">Dark Mode</div><div class="sl-desc">Dark theme</div></div><div class="toggle"></div></div>
        <div class="setting-row"><div class="setting-label"><div class="sl-title">Compact View</div><div class="sl-desc">Reduce spacing</div></div><div class="toggle"></div></div>
      </div>
      <div class="setting-group"><h3>Notification Preferences</h3>
        <div class="setting-row"><div class="setting-label"><div class="sl-title">Email Notifications</div><div class="sl-desc">Receive updates via email</div></div><div class="toggle on"></div></div>
        <div class="setting-row"><div class="setting-label"><div class="sl-title">Push Notifications</div><div class="sl-desc">Browser push notifications</div></div><div class="toggle on"></div></div>
        <div class="setting-row"><div class="setting-label"><div class="sl-title">Deadline Reminders</div><div class="sl-desc">Get reminded before deadlines</div></div><div class="toggle on"></div></div>
        <div class="setting-row"><div class="setting-label"><div class="sl-title">Weekly Digest</div><div class="sl-desc">Summary email every Monday</div></div><div class="toggle"></div></div>
      </div>
      <div class="flex gap-1" style="justify-content:flex-end;padding-top:1rem"><button class="btn btn-outline">Cancel</button><button class="btn btn-primary">Save Changes</button></div>
    </div>
  </div>
</div>`;}
});
