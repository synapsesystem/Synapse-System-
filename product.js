/* ==============================================================
   SYNAPSE SYSTEMS — PRODUCT SCRIPTS
   product.js  |  Linked by: product.html
   ============================================================== */

/* ════════════════════════════════════════════
   PRODUCT DATA — all 6 products defined here
   ════════════════════════════════════════════ */
const PRODUCTS = {

  dashboard: {
    id: 'dashboard',
    emoji: '📊',
    name: 'Smart Business Dashboard',
    tagline: 'Your Entire Business,\n<em>At a Glance</em>',
    desc: 'Stop guessing how your business is doing. A custom-built real-time dashboard that shows your revenue, expenses, client pipeline, active tasks, and growth trends — all in one clean, powerful interface built specifically for your business.',
    from: '800',
    unit: 'one-time setup',
    stats: [
      { val: '100%', label: 'Custom Built' },
      { val: '3–7', label: 'Days Delivery' },
      { val: '6+', label: 'Data Modules' },
      { val: '24/7', label: 'Accessible' },
    ],
    features: [
      { ico: '💰', title: 'Revenue Tracking', desc: 'Live income and expense tracking with automatic totals, profit margins, and monthly comparisons.' },
      { ico: '📋', title: 'KPI Cards', desc: 'At-a-glance performance indicators — revenue, clients, tasks, and growth — updated in real time.' },
      { ico: '👤', title: 'Client Overview', desc: 'See all active clients, project statuses, and deal values in one organised pipeline view.' },
      { ico: '✅', title: 'Task Management', desc: 'Track tasks, deadlines, and completion rates so nothing falls through the cracks.' },
      { ico: '📈', title: 'Growth Charts', desc: 'Monthly trend charts showing revenue growth, client acquisition, and business performance over time.' },
      { ico: '📄', title: 'Exportable Reports', desc: 'Download professional PDF and Excel reports for any date range — perfect for meetings and accounting.' },
    ],
    plans: [
      {
        tier: 'Basic', ico: '📊', price: '800', note: 'One-time setup',
        desc: 'A clean single-page overview for small businesses that want to track their numbers simply.',
        feats: ['Single dashboard page','Revenue & expense overview','5 KPI summary cards','Basic monthly chart','Mobile responsive','WhatsApp support'],
        dimFeats: ['Multiple modules','PDF/Excel export','Client pipeline'],
        solid: false,
      },
      {
        tier: 'Standard', ico: '📊', price: '1,500', note: 'One-time setup', popular: true,
        desc: 'Multi-module dashboard with full tracking, charts, client pipeline, and exportable reports.',
        feats: ['Multi-module dashboard','Revenue, expenses & profit','Client & project pipeline','Task tracker with deadlines','Monthly trend charts','PDF & Excel report export','Mobile responsive','WhatsApp support'],
        solid: true,
      },
      {
        tier: 'Premium', ico: '📊', price: '2,500', priceNote: '+', note: 'Custom quote',
        desc: 'Fully bespoke dashboard with AI-powered insights, custom modules, and deep integrations.',
        feats: ['Everything in Standard','AI-powered insights & alerts','Custom modules per your workflow','Multi-user access','Automated monthly email reports','Full data integration','Priority delivery & support'],
        solid: false,
      },
    ],
    steps: [
      { num: '01', title: 'Brief', desc: 'Tell us what data you want to track — revenue, clients, staff, tasks, or all of it.' },
      { num: '02', title: 'Design', desc: 'We design the layout and modules specifically for your business workflow.' },
      { num: '03', title: 'Build', desc: 'Your dashboard is built, populated with your real data, and tested thoroughly.' },
      { num: '04', title: 'Deliver', desc: 'You receive your live dashboard, fully branded, ready to use from day one.' },
    ],
    included: [
      { ico: '🎨', title: 'Custom Branding', desc: 'Your logo, colours, and business name throughout the interface.' },
      { ico: '📱', title: 'Mobile Ready', desc: 'Works perfectly on phone, tablet, and desktop.' },
      { ico: '🔧', title: 'Setup & Training', desc: 'We set it up and walk you through how to use every feature.' },
      { ico: '💬', title: 'WhatsApp Support', desc: 'Ongoing support directly on WhatsApp — no ticketing systems.' },
    ],
    faq: [
      { q: 'Can I add my own data?', a: 'Yes. We set up the dashboard with your real business data from day one. You can update it yourself or we can update it for you.' },
      { q: 'Does it work on my phone?', a: 'Absolutely. Every dashboard is fully mobile-responsive and tested on Android and iPhone.' },
      { q: 'What if I want to add more features later?', a: 'No problem. You can upgrade at any time. We\'ll add new modules at an agreed additional cost.' },
      { q: 'How is my data stored?', a: 'Your data is stored securely in your own files. We never share or sell your business data.' },
    ],
  },

  appointment: {
    id: 'appointment',
    emoji: '📅',
    name: 'AI Appointment System',
    tagline: 'Let Clients Book\n<em>While You Sleep</em>',
    desc: 'Stop wasting time on back-and-forth scheduling. A smart booking system that lets your clients book themselves 24/7, automatically sends WhatsApp reminders, and eliminates no-shows — so you can focus on the work, not the admin.',
    from: '900',
    unit: 'one-time setup',
    stats: [
      { val: '24/7', label: 'Online Booking' },
      { val: '90%', label: 'No-Show Reduction' },
      { val: '3–7', label: 'Days Delivery' },
      { val: '100%', label: 'WhatsApp-First' },
    ],
    features: [
      { ico: '🔗', title: '24/7 Online Booking', desc: 'Clients book themselves anytime from any device — no calls, no WhatsApp back-and-forth.' },
      { ico: '📲', title: 'Auto WhatsApp Reminders', desc: 'Automated reminder messages sent to clients before their appointment to eliminate no-shows.' },
      { ico: '👥', title: 'Staff & Calendar Management', desc: 'Manage multiple staff members, services, and availability from one simple admin view.' },
      { ico: '🔄', title: 'Rescheduling & Cancellations', desc: 'Clients can reschedule or cancel themselves — you get notified instantly on WhatsApp.' },
      { ico: '📊', title: 'Daily Summary Report', desc: 'Receive a WhatsApp summary of your appointments every morning before you start your day.' },
      { ico: '📋', title: 'No-Show Tracker', desc: 'Full history of who shows up and who doesn\'t — so you can manage repeat offenders.' },
    ],
    plans: [
      {
        tier: 'Basic', ico: '📅', price: '900', note: 'One-time setup',
        desc: 'Simple online booking form for solo service providers with WhatsApp notifications.',
        feats: ['Online booking form','WhatsApp alert on new booking','Single staff / service','Basic calendar view','Mobile responsive'],
        dimFeats: ['Multi-staff','Auto reminders','Daily summary','No-show tracker'],
        solid: false,
      },
      {
        tier: 'Standard', ico: '📅', price: '1,500', note: 'One-time setup', popular: true,
        desc: 'Full booking system with automated reminders, multi-staff support, and daily summaries.',
        feats: ['Online booking portal','Multi-staff & services','Automated WhatsApp reminders','Reschedule & cancellation flow','Daily WhatsApp summary','No-show tracker','Admin dashboard','Mobile responsive'],
        solid: true,
      },
      {
        tier: 'Premium', ico: '📅', price: '2,800', priceNote: '+', note: 'Custom quote',
        desc: 'Enterprise-grade system for multi-location businesses with AI scheduling and full analytics.',
        feats: ['Everything in Standard','Multi-location support','AI-powered scheduling','Advanced analytics & reports','Custom branding & URL','Payment integration','Priority support'],
        solid: false,
      },
    ],
    steps: [
      { num: '01', title: 'Services', desc: 'Tell us your services, duration, staff names, and availability hours.' },
      { num: '02', title: 'Setup', desc: 'We build your booking system, configure reminders, and connect WhatsApp notifications.' },
      { num: '03', title: 'Test', desc: 'We test every flow — booking, reminders, rescheduling — before handing it over.' },
      { num: '04', title: 'Go Live', desc: 'Share your booking link with clients and watch the appointments roll in automatically.' },
    ],
    included: [
      { ico: '📲', title: 'WhatsApp Integration', desc: 'All notifications sent directly to your WhatsApp number.' },
      { ico: '🎨', title: 'Custom Branding', desc: 'Your business name, logo, and colours on the booking page.' },
      { ico: '🔧', title: 'Setup & Training', desc: 'We configure everything and show you how to manage your calendar.' },
      { ico: '💬', title: 'WhatsApp Support', desc: 'Ongoing help available directly on WhatsApp whenever you need it.' },
    ],
    faq: [
      { q: 'Do my clients need an app to book?', a: 'No. They just click your booking link and fill in a form on any browser. No app download needed.' },
      { q: 'What if I want to block certain days or times?', a: 'Easily done. You can update your availability at any time from the admin panel.' },
      { q: 'Can it handle multiple staff members?', a: 'Yes — the Standard and Premium plans include multi-staff support so clients can choose who they book with.' },
      { q: 'What if a client books outside business hours?', a: 'They can still submit a booking request — you choose whether to auto-confirm or manually approve bookings.' },
    ],
  },

  invoice: {
    id: 'invoice',
    emoji: '🧾',
    name: 'Invoice & Quote Generator',
    tagline: 'Professional Invoices,\n<em>In Seconds</em>',
    desc: 'Stop sending WhatsApp screenshots or Word documents as invoices. Generate fully branded, itemised invoices and professional quotes in seconds — send directly via WhatsApp or email, and track exactly who has paid and who still owes you.',
    from: '700',
    unit: 'one-time setup',
    stats: [
      { val: 'R0', label: 'Monthly Fees' },
      { val: '<30s', label: 'Per Invoice' },
      { val: '100%', label: 'Branded' },
      { val: '∞', label: 'Invoices' },
    ],
    features: [
      { ico: '📄', title: 'Branded PDF Invoices', desc: 'Professional invoices with your logo, business name, colours, and contact details on every document.' },
      { ico: '💬', title: 'Instant WhatsApp Send', desc: 'Send invoices and quotes directly to clients via WhatsApp or email in one click.' },
      { ico: '✅', title: 'Payment Status Tracking', desc: 'Mark invoices as Paid, Pending, or Overdue and see your outstanding balance at a glance.' },
      { ico: '🔢', title: 'Itemised Line Items', desc: 'Add multiple line items, quantities, rates, and toggle VAT on or off for each invoice.' },
      { ico: '📋', title: 'Client History', desc: 'Full payment history per client — see every invoice, quote, and payment in one organised view.' },
      { ico: '📊', title: 'Monthly Revenue Summary', desc: 'A clear monthly summary of income received, outstanding invoices, and overdue amounts.' },
    ],
    plans: [
      {
        tier: 'Basic', ico: '🧾', price: '700', note: 'One-time setup',
        desc: 'Simple branded PDF invoices and quotes for small businesses with up to 10 active clients.',
        feats: ['Branded PDF invoices','Branded PDF quotes','Up to 10 clients','WhatsApp & email send','Basic payment status'],
        dimFeats: ['VAT toggle','Monthly reports','Overdue alerts','Unlimited clients'],
        solid: false,
      },
      {
        tier: 'Standard', ico: '🧾', price: '1,200', note: 'One-time setup', popular: true,
        desc: 'Full invoicing system with unlimited clients, VAT, payment tracking, and monthly reports.',
        feats: ['Branded PDF invoices & quotes','Unlimited clients','Itemised line items','VAT toggle on/off','Paid / Pending / Overdue status','Full client payment history','Monthly revenue summary','WhatsApp & email send'],
        solid: true,
      },
      {
        tier: 'Premium', ico: '🧾', price: '2,200', priceNote: '+', note: 'Custom quote',
        desc: 'Advanced invoicing with auto reminders, overdue alerts, multi-currency, and full analytics.',
        feats: ['Everything in Standard','Automated payment reminders','Overdue WhatsApp alerts','Multi-currency support','Advanced analytics dashboard','Recurring invoice setup','Priority support'],
        solid: false,
      },
    ],
    steps: [
      { num: '01', title: 'Brand Details', desc: 'Send us your logo, business name, bank details, and contact info.' },
      { num: '02', title: 'Setup', desc: 'We build your invoicing system, configure your branding, and set up your client list.' },
      { num: '03', title: 'Test', desc: 'We create test invoices and quotes to make sure everything looks perfect.' },
      { num: '04', title: 'Deliver', desc: 'You receive your invoicing system ready to use — start sending professional documents immediately.' },
    ],
    included: [
      { ico: '🎨', title: 'Full Branding', desc: 'Your logo, colours, and business info on every invoice and quote.' },
      { ico: '📱', title: 'Mobile Ready', desc: 'Generate and send invoices from your phone in under 30 seconds.' },
      { ico: '🔧', title: 'Client Import', desc: 'We import your existing client list so you\'re ready to invoice from day one.' },
      { ico: '💬', title: 'WhatsApp Support', desc: 'Ongoing support directly on WhatsApp whenever you need help.' },
    ],
    faq: [
      { q: 'Is there a monthly fee?', a: 'No. You pay once and own it forever. There are no subscriptions or hidden monthly charges.' },
      { q: 'Can I add my bank details to invoices?', a: 'Yes. Your banking details, payment reference instructions, and due date are all included on every invoice.' },
      { q: 'Can clients pay online?', a: 'The Standard plan shows bank details for EFT. The Premium plan includes payment link integration for online payments.' },
      { q: 'What if I have hundreds of clients?', a: 'The Standard plan includes unlimited clients. The system is built to handle as many as you need.' },
    ],
  },

  crm: {
    id: 'crm',
    emoji: '👥',
    name: 'Client CRM Portal',
    tagline: 'Every Client,\n<em>Every Deal — Organised</em>',
    desc: 'Stop losing leads in WhatsApp chats or scattered spreadsheets. A complete client management portal that organises every contact, tracks every deal stage, and reminds you exactly when and who to follow up with — so no opportunity slips through the cracks.',
    from: '800',
    unit: 'one-time setup',
    stats: [
      { val: '∞', label: 'Clients' },
      { val: '0', label: 'Lost Leads' },
      { val: '3–7', label: 'Days Delivery' },
      { val: '100%', label: 'Organised' },
    ],
    features: [
      { ico: '📇', title: 'Client Database', desc: 'A fully organised directory of every client with contact info, notes, tags, and interaction history.' },
      { ico: '🎯', title: 'Deal Pipeline', desc: 'Visual drag-and-drop pipeline showing every deal at every stage — from lead to closed.' },
      { ico: '⏰', title: 'Follow-Up Reminders', desc: 'Set reminders for follow-ups and receive WhatsApp alerts so you never forget to check in.' },
      { ico: '📋', title: 'Interaction History', desc: 'Log every call, meeting, and message per client so you always know what was last discussed.' },
      { ico: '🔍', title: 'Lead Source Tracking', desc: 'See where your best clients come from — WhatsApp, referral, website, walk-in — so you know where to focus.' },
      { ico: '📲', title: 'WhatsApp Quick-Contact', desc: 'One-tap WhatsApp button on every client profile to start a conversation instantly.' },
    ],
    plans: [
      {
        tier: 'Basic', ico: '👥', price: '800', note: 'One-time setup',
        desc: 'Clean client contact database for small businesses with up to 50 clients and basic notes.',
        feats: ['Client contact database','Up to 50 clients','Notes per client','WhatsApp quick-contact','Mobile responsive'],
        dimFeats: ['Deal pipeline','Follow-up reminders','Lead source tracking','Interaction history'],
        solid: false,
      },
      {
        tier: 'Standard', ico: '👥', price: '1,400', note: 'One-time setup', popular: true,
        desc: 'Full CRM with unlimited clients, deal pipeline, follow-up reminders, and interaction history.',
        feats: ['Unlimited clients','Full contact database','Visual deal pipeline','Follow-up reminders','Interaction history log','Lead source tracking','Notes & tags per client','WhatsApp quick-contact'],
        solid: true,
      },
      {
        tier: 'Premium', ico: '👥', price: '2,500', priceNote: '+', note: 'Custom quote',
        desc: 'AI-enhanced CRM with lead scoring, automated follow-ups, team access, and full analytics.',
        feats: ['Everything in Standard','AI lead scoring','Automated follow-up sequences','Team access & roles','Advanced conversion analytics','Custom pipeline stages','Priority support'],
        solid: false,
      },
    ],
    steps: [
      { num: '01', title: 'Your Process', desc: 'Tell us how you manage clients today and what your typical deal stages look like.' },
      { num: '02', title: 'Build', desc: 'We build your CRM with your specific pipeline stages, fields, and client categories.' },
      { num: '03', title: 'Import', desc: 'We import your existing contacts so you start with a fully populated system on day one.' },
      { num: '04', title: 'Deliver', desc: 'You receive your CRM ready to use — start tracking deals and following up immediately.' },
    ],
    included: [
      { ico: '📤', title: 'Data Import', desc: 'We import your existing client list from spreadsheets or WhatsApp contacts.' },
      { ico: '🎨', title: 'Custom Pipeline Stages', desc: 'Pipeline stages named and structured to match your exact sales process.' },
      { ico: '🔧', title: 'Setup & Training', desc: 'We configure everything and train you on how to get the most out of the system.' },
      { ico: '💬', title: 'WhatsApp Support', desc: 'Ongoing help directly on WhatsApp whenever you need it.' },
    ],
    faq: [
      { q: 'Can I import my existing contacts?', a: 'Yes. Send us your contact list as a spreadsheet or export from WhatsApp and we\'ll import everything for you.' },
      { q: 'Can multiple team members use it?', a: 'The Premium plan includes multi-user team access. Standard is designed for a single user.' },
      { q: 'Is it connected to WhatsApp?', a: 'Every client profile has a one-tap WhatsApp button. Premium plans can include deeper WhatsApp Business API integration.' },
      { q: 'What if I want to add custom fields?', a: 'Absolutely. We build custom fields to match your business — whether that\'s project type, budget, location, or anything else.' },
    ],
  },

  staff: {
    id: 'staff',
    emoji: '🏢',
    name: 'Staff Management System',
    tagline: 'Run Your Team\n<em>Without the Admin</em>',
    desc: 'Managing staff manually is a full-time job on its own. A complete staff management system that handles shift scheduling, digital clock-in, leave requests, performance notes, and payroll summaries — so you can focus on running the business, not chasing timesheets.',
    from: '900',
    unit: 'one-time setup',
    stats: [
      { val: '20+', label: 'Staff Supported' },
      { val: '100%', label: 'Digital' },
      { val: '3–7', label: 'Days Delivery' },
      { val: '0', label: 'Paperwork' },
    ],
    features: [
      { ico: '📆', title: 'Shift Scheduling', desc: 'Build and share weekly shift rosters with staff — everyone knows their schedule in advance.' },
      { ico: '🕐', title: 'Digital Clock-In', desc: 'Staff clock in and out digitally — no more paper registers or guessing who was in on which day.' },
      { ico: '🏖️', title: 'Leave Management', desc: 'Staff submit leave requests digitally. You approve or decline from your phone in seconds.' },
      { ico: '📊', title: 'Attendance Reports', desc: 'Clear reports showing each staff member\'s attendance, punctuality, and hours worked per period.' },
      { ico: '⭐', title: 'Performance Notes', desc: 'Log performance notes and ratings per employee — useful for reviews and disciplinary records.' },
      { ico: '💰', title: 'Payroll Summary Export', desc: 'Export a monthly payroll summary per staff member showing total hours, days worked, and rates.' },
    ],
    plans: [
      {
        tier: 'Basic', ico: '🏢', price: '900', note: 'One-time setup',
        desc: 'Simple shift scheduling and clock-in system for small teams with up to 5 staff members.',
        feats: ['Shift scheduling','Digital clock-in','Up to 5 staff','Basic attendance log','Mobile responsive'],
        dimFeats: ['Leave management','Performance notes','Payroll export','Multi-branch'],
        solid: false,
      },
      {
        tier: 'Standard', ico: '🏢', price: '1,600', note: 'One-time setup', popular: true,
        desc: 'Full HR system for up to 20 staff with leave management, performance notes, and payroll export.',
        feats: ['Up to 20 staff','Shift scheduling & rosters','Digital clock-in / clock-out','Leave requests & approvals','Attendance & punctuality reports','Performance notes & ratings','Staff contact directory','Monthly payroll summary export'],
        solid: true,
      },
      {
        tier: 'Premium', ico: '🏢', price: '2,800', priceNote: '+', note: 'Custom quote',
        desc: 'Enterprise-grade HR management for unlimited staff and multiple branches with full analytics.',
        feats: ['Everything in Standard','Unlimited staff','Multi-branch support','Advanced HR tools','Disciplinary record management','Custom performance metrics','Full analytics dashboard','Priority support'],
        solid: false,
      },
    ],
    steps: [
      { num: '01', title: 'Staff Info', desc: 'Send us your staff list, job titles, shifts, and working hours.' },
      { num: '02', title: 'Build', desc: 'We build your system with your staff added, shifts configured, and leave categories set up.' },
      { num: '03', title: 'Test', desc: 'We test clock-in, leave requests, and reports to make sure everything works correctly.' },
      { num: '04', title: 'Go Live', desc: 'Your team gets access, you get the admin view — and the paper registers go in the bin.' },
    ],
    included: [
      { ico: '👥', title: 'Staff Onboarding', desc: 'We add all your staff to the system before you go live.' },
      { ico: '📱', title: 'Mobile for Staff', desc: 'Staff access the system from their phones — no app download needed.' },
      { ico: '🔧', title: 'Setup & Training', desc: 'We train you and a key staff member on how to use the admin panel.' },
      { ico: '💬', title: 'WhatsApp Support', desc: 'Ongoing support directly on WhatsApp whenever you need help.' },
    ],
    faq: [
      { q: 'Do my staff need to download an app?', a: 'No. Staff access the system through a link on their phone browser — no app download required.' },
      { q: 'What if I have more than 20 staff?', a: 'The Premium plan supports unlimited staff. Get in touch and we\'ll quote you based on your team size.' },
      { q: 'Can I use it across multiple branches?', a: 'Yes — the Premium plan includes multi-branch support with separate views for each location.' },
      { q: 'Is the payroll export compatible with accounting software?', a: 'The export is in Excel format, compatible with most South African accounting and payroll software.' },
    ],
  },

  website: {
    id: 'website',
    emoji: '🌐',
    name: 'Website Development',
    tagline: 'Professional Websites\n<em>Built for South Africa</em>',
    desc: 'Get your business online with a professional, mobile-first website that actually works hard for you. From a clean 3-page starter to a fully custom AI-powered digital experience — built fast, priced fair, and designed to convert visitors into clients.',
    from: '800',
    unit: 'one-time payment',
    stats: [
      { val: '3–14', label: 'Days to Live' },
      { val: '100%', label: 'Mobile-Ready' },
      { val: 'R800', label: 'Starting Price' },
      { val: '50%', label: 'Deposit Only' },
    ],
    features: [
      { ico: '📱', title: 'Mobile-First Design', desc: 'Every website is built mobile-first and tested on all screen sizes — phones, tablets, and desktops.' },
      { ico: '💬', title: 'WhatsApp Integration', desc: 'WhatsApp chat button, booking links, and contact forms that route directly to your number.' },
      { ico: '🔍', title: 'SEO-Ready Structure', desc: 'Built with proper headings, meta tags, and page structure so Google can find you from day one.' },
      { ico: '⚡', title: 'Fast Performance', desc: 'Optimised loading speeds so visitors stay on your site and don\'t bounce to a competitor.' },
      { ico: '🎨', title: 'Custom Design', desc: 'No templates. Every website is designed and built specifically for your brand and industry.' },
      { ico: '🚀', title: 'AI-Powered Options', desc: 'Premium packages include AI chat widgets, smart booking systems, and intelligent automation.' },
    ],
    plans: [
      {
        tier: 'Basic', ico: '🌐', price: '800', note: 'One-time payment',
        desc: 'A clean, professional 1–3 page website to get your business online fast.',
        feats: ['1–3 pages','Mobile-friendly design','Clean, modern layout','Contact section','Delivered in 3–5 days','WhatsApp support'],
        dimFeats: ['WhatsApp chat integration','Animations & effects','Contact form','More than 3 pages'],
        solid: false,
      },
      {
        tier: 'Standard', ico: '🌐', price: '1,500', note: 'One-time payment', popular: true,
        desc: 'A full professional website with WhatsApp integration, contact form, and scroll animations.',
        feats: ['3–5 pages','Mobile-friendly design','Professional layout','WhatsApp chat integration','Contact form','Scroll animations','SEO-ready structure','Delivered in 5–7 days'],
        solid: true,
      },
      {
        tier: 'Premium', ico: '🌐', price: '3,000', priceNote: '+', note: 'Custom quote',
        desc: 'A fully bespoke, high-end digital experience with AI elements and advanced features.',
        feats: ['Unlimited pages','Custom design & branding','Advanced features & animations','High-end UI/UX experience','WhatsApp + email integration','AI-powered elements','Booking system included','Priority delivery & support'],
        solid: false,
      },
    ],
    steps: [
      { num: '01', title: 'Brief', desc: 'Tell us about your business, what you want the site to do, and share any photos or content.' },
      { num: '02', title: 'Design', desc: 'We design your website\'s look and layout — you see it before any code is written.' },
      { num: '03', title: 'Build', desc: 'Your site is built, integrated with WhatsApp, and tested on all devices.' },
      { num: '04', title: 'Go Live', desc: 'We deploy your site and hand over the files — your business is now live on the internet.' },
    ],
    included: [
      { ico: '🎨', title: 'Custom Design', desc: 'Fully branded to your business — your colours, logo, and style throughout.' },
      { ico: '📲', title: 'WhatsApp Integration', desc: 'Direct WhatsApp contact button so visitors can reach you in one tap.' },
      { ico: '📁', title: 'Full File Delivery', desc: 'You receive all your website files — you own everything we build.' },
      { ico: '💬', title: 'WhatsApp Support', desc: 'Post-launch support on WhatsApp to help with any changes or questions.' },
    ],
    faq: [
      { q: 'Do I pay everything upfront?', a: '50% deposit to start work, and the remaining 50% when your site is ready and you\'re happy with it.' },
      { q: 'Will I be able to update the site myself?', a: 'Yes. We deliver the files and guide you through making basic updates. Monthly maintenance packages are also available.' },
      { q: 'Do I need to buy hosting?', a: 'We recommend Netlify for free hosting and guide you through the setup — it costs nothing to host your site.' },
      { q: 'Can I add a store or booking system later?', a: 'Absolutely. We can add an online store, booking system, or AI chat widget at any time after launch at an additional cost.' },
    ],
  },
};

/* ════════════════════════════════════════════
   RENDER ENGINE
   ════════════════════════════════════════════ */
function getProductId(){
  const params = new URLSearchParams(window.location.search);
  return params.get('id') || 'dashboard';
}

function bookPlan(productName, plan){
  const msg = "Hi Synapse Systems!\n\nI'd like to enquire about your *" + productName + "* — *" + plan + "* package.\n\nPlease send me more details and a quote.";
  window.open("https://wa.me/27677723822?text=" + encodeURIComponent(msg), "_blank");
}

function toggleFaq(btn){
  const item = btn.parentElement;
  const wasOpen = item.classList.contains("op");
  document.querySelectorAll(".fqi").forEach(i => i.classList.remove("op"));
  if(!wasOpen) item.classList.add("op");
}

function renderProduct(p){
  document.title = p.name + " — Synapse Systems";
  document.querySelector('meta[name="description"]').setAttribute("content", p.desc.substring(0, 160));

  // Update WA link
  const waLink = document.getElementById("wa-link");
  const waMsg = encodeURIComponent("Hi Synapse Systems! I'd like to enquire about the " + p.name + ".");
  waLink.href = "https://wa.me/27677723822?text=" + waMsg;

  // Build plans HTML
  const plansHtml = p.plans.map(plan => `
    <div class="plan ${plan.popular ? 'featured' : ''}">
      ${plan.popular ? '<div class="plan-badge">Most Popular</div>' : ''}
      <span class="plan-ico">${plan.ico}</span>
      <div class="plan-tier">${plan.tier}</div>
      <div class="plan-price"><sup>R</sup>${plan.price}${plan.priceNote ? '<sub>+</sub>' : ''}</div>
      <div class="plan-note">${plan.note}</div>
      <div class="plan-desc">${plan.desc}</div>
      <ul class="plan-feats">
        ${plan.feats.map(f => `<li><div class="pck">✓</div>${f}</li>`).join('')}
        ${(plan.dimFeats || []).map(f => `<li class="dim"><div class="pck">–</div>${f}</li>`).join('')}
      </ul>
      <button class="plan-btn ${plan.solid ? 'solid' : 'outline'}" onclick="bookPlan('${p.name}','${plan.tier} – R${plan.price}${plan.priceNote || ''}')">
        ${plan.solid ? 'Get Started →' : plan.tier === 'Premium' ? 'Get Custom Quote →' : 'Get Started →'}
      </button>
    </div>
  `).join('');

  // Build features HTML
  const featsHtml = p.features.map(f => `
    <div class="feat-card rv">
      <span class="feat-ico">${f.ico}</span>
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>
  `).join('');

  // Build steps HTML
  const stepsHtml = p.steps.map(s => `
    <div class="step rv">
      <div class="step-num">${s.num}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');

  // Build included HTML
  const includedHtml = p.included.map(i => `
    <div class="inc-item rv">
      <div class="inc-ico">${i.ico}</div>
      <div class="inc-text"><h4>${i.title}</h4><p>${i.desc}</p></div>
    </div>
  `).join('');

  // Build FAQ HTML
  const faqHtml = p.faq.map(f => `
    <div class="fqi">
      <button class="fqq" onclick="toggleFaq(this)">${f.q}<span class="fqa-arrow">+</span></button>
      <div class="fqa">${f.a}</div>
    </div>
  `).join('');

  // Build stats HTML
  const statsHtml = p.stats.map(s => `
    <div class="pstat"><h4>${s.val}</h4><p>${s.label}</p></div>
  `).join('');

  const taglineFormatted = p.tagline.replace('\n', '<br>');
  const standardPlan = p.plans.find(pl => pl.popular) || p.plans[1];

  document.getElementById("page-content").innerHTML = `
    <!-- HERO -->
    <section class="prod-hero">
      <canvas class="prod-hero-canvas" id="hero-canvas"></canvas>
      <div class="prod-hero-glow" id="hero-glow"></div>
      <div class="prod-hero-inner">
        <div class="prod-hero-left">
          <div class="prod-breadcrumb">
            <a href="index.html">Home</a> ›
            <a href="index.html#products">Products</a> ›
            <span>${p.name}</span>
          </div>
          <div class="prod-badge">
            <div class="prod-badge-dot"></div>
            Live &nbsp;•&nbsp; Available Now
          </div>
          <h1>${taglineFormatted}</h1>
          <p class="prod-hero-desc">${p.desc}</p>
          <div class="prod-hero-btns">
            <button class="btn-p" onclick="bookPlan('${p.name}', 'Standard – R${standardPlan.price}')">
              💬 Get Started on WhatsApp
            </button>
            <a href="#pricing" class="btn-o">View Pricing ↓</a>
          </div>
        </div>
        <div class="prod-hero-right">
          <div class="prod-visual">
            <span class="prod-visual-emoji">${p.emoji}</span>
            <div class="prod-visual-name">${p.name}</div>
            <div class="prod-visual-price"><sup>R</sup>${p.from}</div>
            <div class="prod-visual-note">Starting from &nbsp;•&nbsp; ${p.unit}</div>
            <div class="prod-live-badge">● Live — Available Now</div>
          </div>
        </div>
      </div>
    </section>

    <!-- QUICK STATS -->
    <div class="prod-stats">
      <div class="prod-stats-inner">${statsHtml}</div>
    </div>

    <!-- FEATURES -->
    <section class="sec">
      <div class="inn">
        <div class="rv">
          <div class="sl">What It Does</div>
          <h2 class="st">Key Features</h2>
          <p class="ss">Everything your business gets with the ${p.name}.</p>
        </div>
        <div class="feat-grid">${featsHtml}</div>
      </div>
    </section>

    <!-- PRICING -->
    <section class="sec" id="pricing">
      <div class="inn">
        <div class="rv">
          <div class="sl">Choose Your Plan</div>
          <h2 class="st">Simple Pricing</h2>
          <p class="ss">One-time payment. No subscriptions. No hidden fees. Pick the plan that fits your business. <a href="all-pricing.html#${p.id}" style="color:var(--or);font-weight:500;" target="_blank">View all product pricing →</a></p>
        </div>
        <div class="plans-grid rv">${plansHtml}</div>
      </div>
    </section>

    <!-- WHAT'S INCLUDED -->
    <section class="sec" style="background:var(--bg2);">
      <div class="inn">
        <div class="rv">
          <div class="sl">Every Package Includes</div>
          <h2 class="st">What You Get</h2>
        </div>
        <div class="included-grid">
          <div class="included-list">${includedHtml}</div>
          <div class="included-note rv">
            <div>
              <div class="in-heading">Ready in <span>${p.steps[p.steps.length-1].num === '04' ? '3–14' : '3–7'} Days</span></div>
              <p class="in-note">We move fast. Most systems are delivered within a week of your brief. Premium custom builds take up to 2 weeks.</p>
            </div>
            <div class="in-perks">
              <div class="in-perk"><div class="in-perk-dot"></div>50% deposit to start — balance on delivery</div>
              <div class="in-perk"><div class="in-perk-dot"></div>You own everything we build</div>
              <div class="in-perk"><div class="in-perk-dot"></div>WhatsApp support throughout the process</div>
              <div class="in-perk"><div class="in-perk-dot"></div>Free revisions during the build phase</div>
              <div class="in-perk"><div class="in-perk-dot"></div>Ongoing upgrades available at any time</div>
            </div>
            <button class="btn-p" onclick="bookPlan('${p.name}', 'Standard – R${standardPlan.price}')">
              💬 Book Now via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="sec">
      <div class="inn">
        <div class="rv" style="text-align:center;max-width:480px;margin:0 auto 52px;">
          <div class="sl">The Process</div>
          <h2 class="st">How It Works</h2>
        </div>
        <div class="steps-grid">${stepsHtml}</div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="sec" style="background:var(--bg2);">
      <div class="inn">
        <div class="rv" style="margin-bottom:40px;">
          <div class="sl">Common Questions</div>
          <h2 class="st">FAQs</h2>
        </div>
        <div class="faq-list rv">${faqHtml}</div>
      </div>
    </section>

    <!-- CTA -->
    <div class="prod-cta rv">
      <div class="prod-cta-inner">
        <h2>Ready to get your <span>${p.name}?</span></h2>
        <p>WhatsApp us now and we'll respond within 24 hours with a custom quote and delivery timeline.</p>
        <div class="prod-cta-btns">
          <button class="btn-p" onclick="bookPlan('${p.name}', 'Standard – R${standardPlan.price}')">
            💬 Book via WhatsApp
          </button>
          <a href="index.html#products" class="btn-o">← See Other Products</a>
        </div>
      </div>
    </div>
  `;

  // Animate hero canvas
  initHeroCanvas();
  // Trigger reveal
  setTimeout(rv, 100);
  setTimeout(rv, 400);
}

/* ── HERO CANVAS ── */
function initHeroCanvas(){
  const c = document.getElementById("hero-canvas");
  if(!c) return;
  const ctx = c.getContext("2d");
  let W, H;
  function rsz(){
    W = c.width = c.parentElement.offsetWidth;
    H = c.height = c.parentElement.offsetHeight;
  }
  rsz();
  window.addEventListener("resize", rsz, {passive:true});

  // Dynamic glow based on mouse
  const glow = document.getElementById("hero-glow");
  document.addEventListener("mousemove", e => {
    if(glow){
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,106,0,.08), transparent 55%)`;
    }
  }, {passive:true});

  const N = 80;
  const pts = Array.from({length:N}, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random()-.5)*.4,
    vy: (Math.random()-.5)*.4,
    r: Math.random()*2+.5
  }));
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p => {
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>W) p.vx*=-1;
      if(p.y<0||p.y>H) p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle="rgba(255,106,0,0.55)";ctx.fill();
    });
    for(let i=0;i<N;i++) for(let j=i+1;j<N;j++){
      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y;
      const d=Math.hypot(dx,dy);
      if(d<120){
        ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);
        ctx.strokeStyle=`rgba(255,106,0,${(1-d/120)*.18})`;ctx.lineWidth=.8;ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ── REVEAL ── */
function rv(){
  document.querySelectorAll(".rv:not(.act)").forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add("act");
  });
}
window.addEventListener("scroll", rv, {passive:true});

/* ── THEME ── */
function toggleTheme(){
  document.body.classList.toggle("lm");
  const l = document.body.classList.contains("lm");
  localStorage.setItem("sst", l?"light":"dark");
  document.querySelectorAll(".tbtn").forEach(b => b.textContent = l?"☀️":"🌙");
}
(function(){
  if(localStorage.getItem("sst")==="light"){
    document.body.classList.add("lm");
    document.querySelectorAll(".tbtn").forEach(b => b.textContent="☀️");
  }
})();

/* ── HEADER ── */
window.addEventListener("scroll", () => {
  document.getElementById("hdr")?.classList.toggle("sc", window.scrollY > 40);
  document.getElementById("btt")?.classList.toggle("vis", window.scrollY > 400);
}, {passive:true});

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(l => l.addEventListener("click", e => {
  const t = document.querySelector(l.getAttribute("href"));
  if(!t) return;
  e.preventDefault();
  t.scrollIntoView({behavior:"smooth", block:"start"});
}));

/* ── INIT ── */
document.addEventListener("DOMContentLoaded", () => {
  const id = getProductId();
  const product = PRODUCTS[id];
  if(product){
    renderProduct(product);
  } else {
    document.getElementById("page-content").innerHTML = `
      <div style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px;">
        <div style="font-size:64px;margin-bottom:20px;">🔍</div>
        <h2 style="font-family:var(--fd);font-size:32px;color:var(--w);margin-bottom:14px;text-transform:uppercase;">Product Not Found</h2>
        <p style="color:var(--muted);margin-bottom:28px;">We couldn't find that product. Check the URL or browse all products.</p>
        <a href="index.html#products" class="btn-p">← View All Products</a>
      </div>
    `;
  }
});
