// Lumivo Core — Routing, Login, Shell
const App = {
  currentPage: 'login',
  role: 'counselor',
  init() { this.render(); },
  navigate(page) {
    this.currentPage = page;
    this.render();
  },
  render() {
    const app = document.getElementById('app');
    if (this.currentPage === 'login') {
      app.innerHTML = this.loginPage();
      this.bindLogin();
    } else {
      app.innerHTML = this.appShell();
      this.bindNav();
      this.bindToggles();
    }
  },
  loginPage() {
    return `<div class="login-page">
      <div class="login-left">
        <div class="login-brand"><div class="logo-icon">L</div><span>Lumivo</span></div>
        <h1>Student Journey,<br>Simplified.</h1>
        <p>The modern platform for counselors, schools, and parents to guide students toward success.</p>
        <div class="login-features">
          <div><div class="feat-icon">📊</div> Real-time readiness scoring</div>
          <div><div class="feat-icon">📁</div> Centralized document tracking</div>
          <div><div class="feat-icon">🎯</div> Milestone-based progress</div>
          <div><div class="feat-icon">💬</div> Built-in messaging</div>
        </div>
      </div>
      <div class="login-right">
        <div class="login-card">
          <h2>Welcome back</h2>
          <p>Sign in to your Lumivo account</p>
          <div class="form-group"><label>Email address</label><input type="email" placeholder="name@school.edu" id="loginEmail"></div>
          <div class="form-group"><label>Password</label><input type="password" placeholder="Enter password" id="loginPass"></div>
          <div class="form-group"><label>Sign in as</label>
            <div class="role-selector">
              <div class="role-option selected" data-role="admin"><div class="role-icon">🏫</div><div class="role-name">Admin</div><div class="role-desc">School management</div></div>
              <div class="role-option" data-role="counselor"><div class="role-icon">👩‍🏫</div><div class="role-name">Counselor</div><div class="role-desc">Student guidance</div></div>
              <div class="role-option" data-role="student"><div class="role-icon">🎓</div><div class="role-name">Student</div><div class="role-desc">My journey</div></div>
              <div class="role-option" data-role="parent"><div class="role-icon">👨‍👩‍👧</div><div class="role-name">Parent</div><div class="role-desc">View progress</div></div>
            </div>
          </div>
          <button class="btn btn-primary" id="loginBtn">Sign In</button>
          <div class="login-divider">or continue with</div>
          <div class="social-login"><button class="social-btn">G</button><button class="social-btn">🍎</button><button class="social-btn">🔗</button></div>
          <div class="login-footer">Don't have an account? <a href="#">Request Access</a></div>
        </div>
      </div>
    </div>`;
  },
  bindLogin() {
    document.querySelectorAll('.role-option').forEach(el => {
      el.addEventListener('click', () => {
        document.querySelectorAll('.role-option').forEach(r => r.classList.remove('selected'));
        el.classList.add('selected');
        this.role = el.dataset.role;
      });
    });
    document.getElementById('loginBtn')?.addEventListener('click', () => {
      this.navigate('dashboard');
    });
  },
  getNavItems() {
    const all = [
      { id:'dashboard', icon:'📊', label:'Dashboard', roles:'all' },
      { id:'students', icon:'👤', label:'Students', roles:'admin,counselor' },
      { id:'profile', icon:'👤', label:'My Profile', roles:'student' },
      { id:'documents', icon:'📁', label:'Documents', roles:'all' },
      { id:'applications', icon:'📝', label:'Applications', roles:'admin,counselor,student' },
      { id:'milestones', icon:'🎯', label:'Milestones', roles:'admin,counselor,student' },
      { id:'universities', icon:'🏛', label:'Universities', roles:'admin,counselor,student' },
      { id:'sessions', icon:'📋', label:'Sessions', roles:'admin,counselor' },
      { id:'readiness', icon:'📈', label:'Readiness', roles:'all' },
      { id:'messages', icon:'💬', label:'Messages', roles:'admin,counselor,student,parent', badge:'3' },
      { id:'reports', icon:'📊', label:'Reports', roles:'admin,counselor' },
      { id:'notifications', icon:'🔔', label:'Notifications', roles:'all', badge:'5' },
      { id:'settings', icon:'⚙️', label:'Settings', roles:'all' },
    ];
    return all.filter(n => n.roles === 'all' || n.roles.includes(this.role));
  },
  sidebar() {
    const items = this.getNavItems();
    const roleNames = { admin:'Administrator', counselor:'Lead Counselor', student:'Student', parent:'Parent' };
    const roleInitials = { admin:'AD', counselor:'SC', student:'AJ', parent:'PJ' };
    const roleFullNames = { admin:'Admin User', counselor:'Sarah Chen', student:'Ava Johnson', parent:'Mr. Johnson' };
    return `<aside class="sidebar">
      <div class="sidebar-brand"><div class="logo-icon">L</div><span>Lumivo</span></div>
      <div class="nav-section"><div class="nav-section-title">Main</div>
        ${items.filter(n=>['dashboard'].includes(n.id)).map(n=>`<div class="nav-item ${this.currentPage===n.id?'active':''}" data-page="${n.id}"><span class="nav-icon">${n.icon}</span>${n.label}</div>`).join('')}
      </div>
      <div class="nav-section"><div class="nav-section-title">Management</div>
        ${items.filter(n=>!['dashboard','reports','notifications','settings','messages'].includes(n.id)).map(n=>`<div class="nav-item ${this.currentPage===n.id?'active':''}" data-page="${n.id}"><span class="nav-icon">${n.icon}</span>${n.label}${n.badge?`<span class="badge">${n.badge}</span>`:''}</div>`).join('')}
      </div>
      <div class="nav-section"><div class="nav-section-title">System</div>
        ${items.filter(n=>['messages','reports','notifications','settings'].includes(n.id)).map(n=>`<div class="nav-item ${this.currentPage===n.id?'active':''}" data-page="${n.id}"><span class="nav-icon">${n.icon}</span>${n.label}${n.badge?`<span class="badge">${n.badge}</span>`:''}</div>`).join('')}
      </div>
      <div class="sidebar-footer">
        <div class="sidebar-user" data-page="login">
          <div class="avatar">${roleInitials[this.role]}</div>
          <div class="user-info"><div class="name">${roleFullNames[this.role]}</div><div class="role">${roleNames[this.role]}</div></div>
        </div>
      </div>
    </aside>`;
  },
  topbar(title) {
    return `<header class="topbar">
      <div class="topbar-left"><h2>${title}</h2></div>
      <div class="topbar-right">
        <div class="topbar-search"><input placeholder="Search students, docs..." type="text"></div>
        <button class="topbar-btn" data-page="notifications">🔔<span class="notif-dot"></span></button>
        <button class="topbar-btn" data-page="messages">💬</button>
        <button class="topbar-btn" data-page="settings">⚙️</button>
      </div>
    </header>`;
  },
  appShell() {
    const titles = {dashboard:this.getRoleTitle(),students:'Students',profile:'My Profile',documents:'Documents',applications:'Applications',milestones:'Milestones',universities:'Universities',sessions:'Session Notes',readiness:'Readiness Score',messages:'Messages',reports:'Reports',notifications:'Notifications',settings:'Settings'};
    const pageKey = this.currentPage === 'dashboard' ? this.role + 'Dashboard' : this.currentPage;
    const content = Pages[pageKey] ? Pages[pageKey]() : (Pages[this.currentPage] ? Pages[this.currentPage]() : '<div class="empty-state"><div class="empty-icon">🚧</div><h3>Coming Soon</h3></div>');
    return `<div class="app-layout">${this.sidebar()}<div class="main-content">${this.topbar(titles[this.currentPage]||'Dashboard')}<div class="page active">${content}</div></div></div>`;
  },
  getRoleTitle() {
    return {admin:'Admin Dashboard',counselor:'Counselor Dashboard',student:'Student Dashboard',parent:'Parent Portal'}[this.role];
  },
  bindNav() {
    document.querySelectorAll('[data-page]').forEach(el => {
      el.addEventListener('click', () => this.navigate(el.dataset.page));
    });
  },
  bindToggles() {
    document.querySelectorAll('.toggle').forEach(el => {
      el.addEventListener('click', () => el.classList.toggle('on'));
    });
    document.querySelectorAll('.task-check').forEach(el => {
      el.addEventListener('click', () => { el.classList.toggle('done'); el.textContent = el.classList.contains('done') ? '✓' : ''; });
    });
  }
};
document.addEventListener('DOMContentLoaded', () => App.init());
